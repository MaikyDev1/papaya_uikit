'use client'
import { useState } from "react";

export function InputTypeBox({id, type, title, placeholder, defaultText, error, ...props}) {
  return (
    <div className="w-full">
      {title ?
        <label className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1" htmlFor={id}>
          {title}
        </label> : null}
      <input {...props} className={(error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-primary") + " select-none appearance-none outline-none bg-stone-200 w-full rounded-full corner-squircle py-2 px-3"}
             id={id} type={type ? type : "text"} placeholder={placeholder} defaultValue={defaultText}/>
      {error ?
        <p className="text-red text-xs italic mt-1 text-rose-600">{error}</p> : null}
    </div>
  )
}

export function RadioTypeBox({ id, title, value }) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      className={`w-full flex select-none justify-center items-center rounded`}
    >
      <input
        id={`${id}${value}`}
        type="radio"
        name={id}
        value={value}
        checked={checked}
        onChange={() => {}}
        onClick={handleClick}
        className="w-4 h-4 appearance-none rounded-md bg-stone-200 checked:bg-yellow-400"
      />

      <label
        htmlFor={`${id}${value}`}
        className={`w-full py-2 ms-2 text-sm font-medium ${
          checked ? "text-yellow-400" : ""
        }`}
      >
        {title}
      </label>
    </div>
  );
}

export function SliderSelector ({id, title, error, children}) {

  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { parent: id });
    }
    return child;
  });

  return (
    <div className="w-full">
      {title ?
        <label className={(error ? "text-rose-600 " : "mb-2") + " block uppercase tracking-wide text-slate-600 text-xs font-bold mb-2"} htmlFor={id}>
          {title}
        </label> : null}
      {/*<input className={(error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-amber-400 mb-2") + " appearance-none outline-none bg-white/10 w-full rounded py-2 px-3"}*/}
      {/*       id={id}/>*/}
      <div className="flex w-full">
        {enhancedChildren}
      </div>
      {error ?
        <p className="text-red text-xs italic mt-1 text-rose-600">{error}</p> : null}
    </div>
  )
}

import { useRef } from "react";
import {SearchIcon} from "../icons/icons";

export function SliderItem2({ id, text, parent, checked, onChange }) {
  const min = 0;
  const max = 100;
  const step = 10;
  const [value, setValue] = useState(50);

  const percent = ((value - min) / (max - min)) * 100;
  const steps = Array.from(
    { length: (max - min) / step + 1 },
    (_, i) => min + i * step
  );

  const handleChange = (e) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange?.({ id, parent, value: next, checked });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        aria-label={text || "value"}
        className="w-full accent-primary appearance-none rounded-full bg-stone-200 h-2 cursor-pointer"
      />

      <div className="relative h-4 mt-1">
        {steps.map((s) => (
          <span
            key={s}
            className="absolute top-0 -translate-x-1/2 text-xs text-stone-400"
            style={{ left: `${((s - min) / (max - min)) * 100}%` }}
          >
            |
          </span>
        ))}
      </div>

      <div className="relative h-6">
        <span
          className="absolute -translate-x-1/2 rounded bg-primary px-2 py-0.5 text-xs font-semibold text-white tabular-nums"
          style={{ left: `${percent}%` }}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

export function SliderItem({ id, text, parent, checked, onChange }) {
  const min = 0;
  const max = 100;
  const [value, setValue] = useState(50);
  const trackRef = useRef(null);

  const percent = ((value - min) / (max - min)) * 100;

  const handleChange = (e) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange?.({ id, parent, value: next, checked });
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative mt-8">
        <div
          className="absolute -top-9 -translate-x-1/2 flex flex-col items-center"
          style={{
            left: `calc(${percent}% + (${8 - percent * 0.16}px))`,
          }}
        >
          <div className="rounded-md bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm min-w-[2rem] text-center tabular-nums">
            {value}
          </div>
          <div className="w-2 h-2 bg-primary rotate-45 -mt-1" />
        </div>

        <input
          ref={trackRef}
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={handleChange}
          aria-label={text || "value"}
          className="w-full accent-primary appearance-none rounded-full bg-stone-200 h-2 cursor-pointer"
        />
      </div>
    </div>
  );
}

export function RangeTypeBox({id, title, value, selected, error,}) {
  return (
    <div
      className="w-full flex select-none items-center ps-4 rounded bg-white/10 peer-checked:ring-2 ring-rose-600">
      <input id={id + value} type="radio" value={value} name={id}
             className="w-4 h-4 appearance-none peer checked:bg-yellow-400 rounded-md bg-white/10 border-gray-300"/>
      <label htmlFor={id + value} className="peer-checked:text-yellow-400 w-full py-4 ms-2 text-sm font-medium">
        {title}
      </label>
    </div>
  )
}

export function InfoBox({icon, children}) {
  return (
    <div className="flex bg-white/10 items-center rounded-md p-3 px-4 text-sm text-white font-semibold">
      <div className="w-7 h-7 flex justify-center items-center text-4xl mr-3">
        {icon}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export function WarningBox({icon, text}) {
  return (
    <div className="flex bg-yellow-400/90 rounded-md p-4 px-4 text-sm text-amber-700 font-semibold">
      <div className="w-5 h-5 flex justify-center items-center text-2xl mr-3">
        {icon}
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}

export function PinInputMode({error, title}) {
  return (
    <div>
      <label className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-2">
        {title}
      </label>
      <div className="flex gap-1">
        <input type="number" onChange={(e) => {e.target.value !== "" ? document.getElementById(`pin-2`).focus() : null}} id="pin-1" className="h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400"/>
        <input type="number" onChange={(e) => {e.target.value !== "" ? document.getElementById(`pin-3`).focus() : document.getElementById(`pin-1`).focus()}} id="pin-2" className="h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400"/>
        <input type="number" onChange={(e) => {e.target.value !== "" ? document.getElementById(`pin-4`).focus() : document.getElementById(`pin-2`).focus()}} id="pin-3" className="h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400"/>
        <input type="number" onChange={(e) => {e.target.value === "" ? document.getElementById(`pin-3`).focus() : null}} id="pin-4" className="h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400"/>
      </div>
      {error ?
        <p className="text-red text-xs italic mt-1 text-rose-600">{error}</p> : null}
    </div>
  )
}

export function SearchBox() {
  return (
    <div className="px-4 py-3 text-slate-600  select-none rounded-full bg-stone-200 flex gap-2 items-center">
      <SearchIcon className="text-2xl"/>
      <input type="text" placeholder="Search" className="w-full appearance-none outline-none"/>
    </div>
  )
}