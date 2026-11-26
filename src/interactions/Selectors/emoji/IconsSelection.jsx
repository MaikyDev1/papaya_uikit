import {useEffect, useImperativeHandle, useState} from "react";
import {Icon} from "@iconify/react";
import {Dropdown} from "@/interactions/DropDown";
import {IconToDisplay} from "@/other/IconToDisplay";
import {InputTypeBox} from "@/interactions/inputs/InputInteractions";
import {SearchIcon} from "@/icons/icons";
import {CategoryIcon} from "@/interactions/Selectors/emoji/EmojiCategories";

const isEmpty = (v) => v === null || v === undefined || v === "none";

const TABS = [
  ["emoji", "Emoji"],
  ["icon", "Icons"],
];

/**
 * A select for an emoji or an icon, with a dropdown picker, a clear button and an optional revert button.
 * Controlled: the parent owns the value and receives changes through `onChange`.
 * The value is a string in the form `emoji:<emoji>` or `icon:<name>`, or `"none"` when nothing is selected.
 * Picking an item closes the dropdown. Clear sets the value to `"none"`.
 * Revert sets the value back to `original`, and is only rendered when `original` is not empty.
 *
 * @param {Object} props
 * @param {string} [props.value="none"] Current value. Empty values (see `isEmpty`) show "No icon selected".
 * @param {string} [props.original] Value restored by the revert button. The button is hidden when it is empty or "none".
 * @param {(value: string) => void} props.onChange Called with the new value (`emoji:<emoji>`, `icon:<name>`, or `"none"` when cleared).
 * @param {string} props.title Label shown above the select.
 * @param {string} [props.className] Extra classes added to the wrapper.
 * @returns {import("react").JSX.Element}
 */
export function IconSelector({value = "none", original, onChange, title, className = ""}) {
  const [menu, setMenu] = useState(null);

  const hasOriginal = !isEmpty(original);

  const pick = (v) => {
    onChange(v);
    setMenu(null);
  };

  return (
    <div className={`${className} relative`}>
      <p className="uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">{title}</p>
      <div onClick={() => setMenu(menu === null ? "emoji" : null)}
           className={`select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`}>
        {isEmpty(value)
          ? <p className="text-stone-400">No icon selected</p>
          : <IconToDisplay className="h-full" icon={value}/>}
        <div className="flex items-center gap-1">
          {!isEmpty(value) &&
            <button type="button"
                    className="hover:bg-stone-300 text-sm px-2 squircle-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange("none");
                    }}>Clear</button>}
          {hasOriginal &&
            <button type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenu(null);
                      onChange(original);
                    }}
                    disabled={value === original}
                    title="Revert to original"
                    aria-label="Revert to original"
                    className="shrink-0 px-1 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default">
              ↺
            </button>}
        </div>
      </div>
      {menu &&
        <Dropdown className="border border-stone-300" onClose={() => setMenu(null)}>
          <div className="flex border-b border-stone-300 px-2 pt-0.5 bg-stone-100 gap-2">
            {TABS.map(([id, label]) => (
              <button key={id} type="button" onClick={() => setMenu(id)}
                      className={`cursor-pointer font-mono text-sm font-semibold rounded-t-md last:border-r-0 py-1 px-2 ${menu === id ? "bg-stone-200" : "hover:bg-stone-200/40"}`}>
                {label}
              </button>
            ))}
          </div>
          {/* tabs unchanged */}
          {menu === "emoji" && <EmojiPicker setSelected={(e) => pick("emoji:" + e)}/>}
          {menu === "icon" && <IconPicker setSelected={(i) => pick("icon:" + i)}/>}
        </Dropdown>
      }
    </div>
  );
}

function EmojiPicker({setSelected}) {
  const [db, setDb] = useState(null); // lazy: ~24 KB gzipped, loaded on first open
  const [cat, setCat] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    import("./EmojiDatabase").then(setDb);
  }, []);

  const searching = search.trim() !== "";
  const results = !db ? [] : searching ? db.searchEmoji(search) : db.emojiByCategory(cat);

  return (
    <div className="">
      <div className="flex flex-col bg-stone-200">
        <InputTypeBox
          className="px-1 py-1"
          icon={<SearchIcon/>}
          ring={false}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        {!searching && db && (
          <div className="flex gap-1 px-2 border-t border-t-stone-300 overflow-x-auto ">
            {db.CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                type="button"
                title={c.name}
                onClick={() => setCat(i)}
                className={`text-xl rounded-lg p-1 shrink-0 text-stone-400 ${cat === i ? "text-stone-800" : ""}`}
              >
                <CategoryIcon id={c.id}/>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2">
        {results.map(({e}) => (
          <button
            key={e}
            type="button"
            onClick={() => setSelected(e)}
            className="text-2xl rounded-lg hover:bg-stone-300 p-1"
          >
            {e}
          </button>
        ))}
        {db && searching && !results.length && (
          <p className="col-span-full text-sm text-stone-500 py-2">No emoji found</p>
        )}
      </div>
    </div>
  );
}

function IconPicker({setSelected}) {
  const [search, setSearch] = useState("");
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search.trim()) {
      setIcons([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.iconify.design/search?query=${encodeURIComponent(search)}&limit=120`,
          {signal: controller.signal}
        );
        if (!res.ok) throw new Error(`Iconify search failed: ${res.status}`);
        const data = await res.json();
        setIcons(data.icons ?? []);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setIcons([]);
          setLoading(false);
        }
      }
    }, 250);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [search]);

  return (
    <div className="">
      <div className="flex flex-col bg-stone-200">
        <InputTypeBox
          className="px-1 py-1"
          icon={<SearchIcon/>}
          ring={false}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>

      <div className="grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2">
        {!search && <p className="col-span-full px-2 text-xs text-stone-500 py-2">Search to get any icons</p>}
        {icons.map((icon) => (
          <button
            key={icon}
            type="button"
            onClick={() => setSelected(icon)}
            className="text-2xl rounded-lg hover:bg-stone-300 p-1 flex items-center justify-center"
            title={icon}
          >
            <Icon icon={icon} width={24} height={24}/>
          </button>
        ))}
        {search.trim() && !loading && !icons.length && (
          <p className="col-span-full px-2 text-xs text-stone-500 py-2">No icons found</p>
        )}
      </div>
    </div>
  );
}