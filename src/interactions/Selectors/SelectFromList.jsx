import {useState} from "react";
import {Dropdown} from "@/interactions/DropDown";
import {DropDownArrowIcon, SearchIcon} from "@/icons/icons";
import {InputTypeBox} from "@/interactions/inputs/InputInteractions";

/**
 * A select that shows a dropdown list of options and displays the selected one.
 * Controlled: the parent owns the selection and receives changes through `onChange`.
 * Options are rendered from `elementList`: each key is the value, and each value is what is displayed.
 * Picking an option closes the dropdown. There is no way to clear the selection from the UI.
 *
 * @param {Object} props
 * @param {Record<string, import("react").ReactNode>} [props.elementList={}] Options, as `{key: displayedContent}`.
 * @param {string | null} props.selected Key of the selected option, or null when nothing is selected.
 * @param {(key: string) => void} props.onChange Called with the key of the picked option.
 * @param {string} props.title Label shown above the select.
 * @returns {import("react").JSX.Element}
 */
export function SelectFromList({elementList = {}, selected, onChange, title}) {
  const [menu, setMenu] = useState(false);
  return (
    <div className={`relative`}>
      <p className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </p>
      <div onClick={() => setMenu(!menu)}
           className={`select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`}>
        {selected === null || selected === undefined || !elementList[selected] ? <p className="text-stone-400" >No element selected</p> : elementList[selected]}
        <DropDownArrowIcon className={`h-full text-3xl transition duration-200 ${menu && "-rotate-180"}`}/>
      </div>
      {menu &&
        <Dropdown onClose={() => setMenu(false)} className="p-2">
          <p className="font-mono text-sm font-bold">Select</p>
          <div className="gap-1 flex flex-col">
            {Object.entries(elementList).map(([key, value]) =>
              <div key={key} onClick={() => {onChange(key); setMenu(false);}} className={`cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`}>
                {value}
              </div>
            )}
          </div>
        </Dropdown>
      }
    </div>
  )
}

const filterEntries = (entries, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  return entries.filter(([key, value]) =>
    key.toLowerCase().includes(q) ||
    (typeof value === "string" && value.toLowerCase().includes(q))
  );
};

/**
 * A select that shows a dropdown list of options and displays the selected one.
 * Controlled: the parent owns the selection and receives changes through `onChange`.
 * Options are rendered from `elementList`: each key is the value, and each value is what is displayed.
 * Picking an option closes the dropdown. There is no way to clear the selection from the UI.
 *
 * @param {Object} props
 * @param {Record<string, import("react").ReactNode>} [props.elementList={}] Options, as `{key: displayedContent}`.
 * @param {string | null} props.selected Key of the selected option, or null when nothing is selected.
 * @param {(key: string) => void} props.onChange Called with the key of the picked option.
 * @param {string} props.title Label shown above the select.
 * @returns {import("react").JSX.Element}
 */
export function SelectFromListWithSearch({elementList = {}, selected, onChange, title}) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = filterEntries(Object.entries(elementList), search);
  return (
    <div className={`relative`}>
      <p className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </p>
      <div onClick={() => setMenu(!menu)}
           className={`select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`}>
        {selected === null || selected === undefined || !elementList[selected] ? <p className="text-stone-400" >No element selected</p> : elementList[selected]}
        <DropDownArrowIcon className={`h-full text-3xl transition duration-200 ${menu && "-rotate-180"}`}/>
      </div>
      {menu &&
        <Dropdown onClose={() => setMenu(false)} className="">
          <InputTypeBox
            className="px-1 py-1"
            icon={<SearchIcon/>}
            ring={false}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <div className="px-2 pb-2 pt-1 border-t border-t-stone-300 max-h-65 overflow-y-auto">
            <p className="font-mono text-sm font-bold">Select</p>
            <div className="gap-1 flex flex-col">
              {filtered.map(([key, value]) =>
                <div key={key} onClick={() => {onChange(key); setMenu(false);}} className={`cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`}>
                  {value}
                </div>
              )}
              {filtered.length <= 0 && <p className="col-span-full px-2 text-xs text-stone-500 py-2">Not found</p> }
            </div>
          </div>
        </Dropdown>
      }
    </div>
  )
}