import {useState} from "react";

export function SelectTypeBox({error, id, title, children, onChange, ...props}) {
  return (
    <div className="w-full">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" htmlFor={id}>
        {title}
      </label>
      <select
        {...props}
        onChange={onChange}
        className={(error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-amber-400") + " appearance-none outline-none bg-stone-200 w-full rounded-lg py-2 px-3"}
        id={id}>
        {children}
      </select>
      {error ?
        <p className="text-red text-xs italic text-rose-600">{error}</p> : null}
    </div>
  )
}

export function SearchableSelectTypeBox({error, id, title, children, onChange, ...props}) {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1" htmlFor={id}>
        {title}
      </label>
      <select
        {...props}
        onChange={onChange}
        className={(error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-amber-400") + " appearance-none outline-none bg-stone-200 w-full rounded-lg py-2 px-3"}
        id={id}>
        {children}
      </select>
      {error ?
        <p className="text-red text-xs italic text-rose-600">{error}</p> : null}
    </div>
  )
}

export function SelectOptions() {

}

export function SelectItem({value, text}) {
  return <option value={value}>{text}</option>
}

