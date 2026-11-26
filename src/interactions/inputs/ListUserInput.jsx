import {TitleIcon, TrashIcon} from "@/icons/icons";
import {useId, useState} from "react";
import {DraggableContent} from "@/interactions/DraggableContent";

const itemRender = (item, index, remove) => (
  <div key={`${item}-${index}`} className="squircle-2xl px-2 py-0.5 flex items-center justify-center gap-1 bg-stone-200">
    <button type="button" onClick={() => remove(index)} aria-label={`Remove ${item}`}
            className="text-sm text-stone-800 hover:text-red-400">
      <TrashIcon/>
    </button>
    {item}
  </div>
)

/**
 * A list editor: type text and press Enter or click Add to append an item, and click the trash icon to remove one.
 * Controlled: the parent owns the list and receives the new array through `onChange`.
 * Items are trimmed and empty items are ignored. Duplicates are allowed, since keys are built from the text and the index.
 * Items can be reordered by dragging when `draggable` is true.
 *
 * @param {Object} props
 * @param {string[]} [props.value=[]] Current items.
 * @param {(list: string[]) => void} props.onChange Called with the new array (a new reference each time, never mutated).
 * @param {string} props.title Label shown above the input.
 * @param {string} [props.className] Extra classes added to the wrapper.
 * @param {boolean} [props.draggable=true] Allows reordering items by drag and drop.
 * @returns {import("react").JSX.Element}
 */
export function ListInput({value = [], onChange, title, className = "", draggable = true}) {
  const id = useId();
  const [text, setText] = useState("");

  const add = () => {
    const item = text.trim();
    if (item === "") return;
    onChange([...value, item]);
    setText("");
  };

  const remove = (index) => onChange(value.filter((_, i) => i !== index));

  return (
    <div className={`${className} relative`}>
      <label htmlFor={id} className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </label>
      <div className="bg-stone-100 squircle-2xl">
        <div className="px-5 py-2 bg-stone-200 flex justify-between gap-2 squircle-t-2xl">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <TitleIcon className="text-xl"/>
            <input
              id={id}
              value={text}
              placeholder="Type.."
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  add();
                }
              }}
              className="outline-none bg-transparent flex-1 min-w-0"
            />
          </div>
          <button type="button" onClick={add} className="hover:bg-stone-300 text-sm px-2 squircle-2xl">Add</button>
        </div>
        <div className="flex flex-wrap select-none gap-2 p-2">
          {value.length === 0 && <p className="text-xs font-semibold text-stone-700 px-2">List is empty</p>}
          {draggable ?
            <DraggableContent
              value={value}
              className="cursor-grabbing flex gap-1 flex-wrap"
              onChange={onChange}
              renderItem={(item, index) => itemRender(item, index, remove)} getKey={(i, index) => `${i}-${index}`}
            /> : value.map((item, index) => itemRender(item, index, remove))
          }
        </div>
      </div>
    </div>
  );
}