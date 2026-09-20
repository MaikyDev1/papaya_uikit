// src/buttons/BasicButtons.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function PrimaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ jsxs("button", { onClick, type: "button", className: `${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`, children: [
    icon,
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ jsx("span", { children: title ?? /* @__PURE__ */ jsx("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ jsx("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\r\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function SecondaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ jsxs("button", { onClick, type: "button", className: `${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`, children: [
    icon,
    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ jsx("span", { children: title ?? /* @__PURE__ */ jsx("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ jsx("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\r\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}

// src/icons/icons.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function MessagesIcon(props) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m21 14l-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" }) });
}
function FilesIcon(props) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx2("path", { fill: "currentColor", d: "M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 1 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 1 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 1 1 0 1.5h-3a.75.75 0 1 1 0-1.5Zm3-2.5a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5Zm-1-2.5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5Zm-5-4a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1Zm8 0c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 1 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 1 1 0-1.5Z" }) });
}
function SearchIcon(props) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx2("path", { fill: "currentColor", d: "m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2("path", { fill: "currentColor", d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" }) });
}
function ArrowIcon(props) {
  return /* @__PURE__ */ jsx2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 80 80", children: /* @__PURE__ */ jsxs2("g", { fill: "none", children: [
    /* @__PURE__ */ jsx2("path", { fill: "currentColor", d: "M36.964 17.7a3 3 0 1 1 6 .004zm3 .078l3 .002zm0 .889l-3-.003zm0 .888l3 .002zm-.001.89l3 .001zm-.001.888l-3-.002zm0 .889h-3v-.002zm3 20.074a3 3 0 0 1-6 0zm-6 .037a3 3 0 0 1 6 0zm6 21.667a3 3 0 0 1-6 0zm.002-46.296v.075l-6-.003V17.7zm0 .075v.89l-6-.005v-.888zm0 .89v.888l-6-.004v-.889zm0 .888l-.001.89l-6-.005v-.889zm-.001.89l-.001.888l-6-.004v-.889zm-.001.888v.889l-6-.004v-.889zm0 .887v20.074h-6V22.222zm0 20.111V64h-6V42.333z" }),
    /* @__PURE__ */ jsx2("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 6, d: "m15.11 39.11l21.177-21.176a5.25 5.25 0 0 1 7.425 0l21.176 21.177" })
  ] }) });
}
function ArrowHeadIcon(props) {
  return /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "-6 0 24 24", children: [
    /* @__PURE__ */ jsx2("defs", { children: /* @__PURE__ */ jsx2("path", { id: "SVG1pzpbdYY", fill: "currentColor", d: "m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" }) }),
    /* @__PURE__ */ jsx2("use", { fillRule: "evenodd", href: "#SVG1pzpbdYY", transform: "rotate(-180 5.02 9.505)" })
  ] });
}

// src/other/Breadcrumb.jsx
import React2 from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Breadcrumb({ children }) {
  const items = React2.Children.toArray(children);
  return /* @__PURE__ */ jsx3("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsx3("nav", { className: "flex flex-wrap items-center p-1 gap-0.5", children: items.flatMap((child, index) => [
    child,
    index < items.length - 1 ? /* @__PURE__ */ jsx3("span", { className: "inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800", children: /* @__PURE__ */ jsx3("svg", { width: "1.5em", height: "1.5em", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", className: "h-4 w-4 stroke-2", children: /* @__PURE__ */ jsx3("path", { d: "M9 6L15 12L9 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }) }) }, index) : null
  ]) }) });
}
function BreadcrumbItem({ active, onClick, title, icon }) {
  const aClass = active ? "inline-flex items-center gap-1.5 text-sm text-stone-50 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-800 px-2 py-1 hover:bg-stone-700" : "inline-flex items-center gap-1.5 text-sm text-stone-800 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-200 px-2 py-1 hover:bg-stone-700";
  return /* @__PURE__ */ jsxs3("a", { href: "#", className: aClass, children: [
    icon,
    title
  ] });
}

// src/interactions/InputInteractions.jsx
import { useState } from "react";
import { useRef } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function InputTypeBox({ id, type, title, placeholder, defaultText, error, ...props }) {
  return /* @__PURE__ */ jsxs4("div", { className: "w-full", children: [
    title ? /* @__PURE__ */ jsx4("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }) : null,
    /* @__PURE__ */ jsx4(
      "input",
      {
        ...props,
        className: (error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-primary") + " select-none appearance-none outline-none bg-stone-200 w-full rounded-full corner-squircle py-2 px-3",
        id,
        type: type ? type : "text",
        placeholder,
        defaultValue: defaultText
      }
    ),
    error ? /* @__PURE__ */ jsx4("p", { className: "text-red text-xs italic mt-1 text-rose-600", children: error }) : null
  ] });
}
function RadioTypeBox({ id, title, checked = false, onChange }) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: `w-full flex select-none justify-center items-center rounded`,
      children: [
        /* @__PURE__ */ jsx4(
          "input",
          {
            id,
            type: "checkbox",
            checked,
            onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
            className: "w-4 h-4 appearance-none rounded-md bg-stone-200 checked:bg-yellow-400"
          }
        ),
        /* @__PURE__ */ jsx4(
          "label",
          {
            htmlFor: `${id}`,
            className: `w-full py-2 ms-2 text-sm font-medium ${checked ? "text-yellow-400" : ""}`,
            children: title
          }
        )
      ]
    }
  );
}
function SliderItem2({ id, text, parent, checked, onChange }) {
  const min = 0;
  const max = 100;
  const step = 10;
  const [value, setValue] = useState(50);
  const percent = (value - min) / (max - min) * 100;
  const steps = Array.from(
    { length: (max - min) / step + 1 },
    (_, i) => min + i * step
  );
  const handleChange = (e) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange == null ? void 0 : onChange({ id, parent, value: next, checked });
  };
  return /* @__PURE__ */ jsxs4("div", { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ jsx4(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value,
        onChange: handleChange,
        "aria-label": text || "value",
        className: "w-full accent-primary appearance-none rounded-full bg-stone-200 h-2 cursor-pointer"
      }
    ),
    /* @__PURE__ */ jsx4("div", { className: "relative h-4 mt-1", children: steps.map((s) => /* @__PURE__ */ jsx4(
      "span",
      {
        className: "absolute top-0 -translate-x-1/2 text-xs text-stone-400",
        style: { left: `${(s - min) / (max - min) * 100}%` },
        children: "|"
      },
      s
    )) }),
    /* @__PURE__ */ jsx4("div", { className: "relative h-6", children: /* @__PURE__ */ jsx4(
      "span",
      {
        className: "absolute -translate-x-1/2 rounded bg-primary px-2 py-0.5 text-xs font-semibold text-white tabular-nums",
        style: { left: `${percent}%` },
        children: value
      }
    ) })
  ] });
}
function SliderItem({ id, text, parent, checked, onChange }) {
  const min = 0;
  const max = 100;
  const [value, setValue] = useState(50);
  const trackRef = useRef(null);
  const percent = (value - min) / (max - min) * 100;
  const handleChange = (e) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange == null ? void 0 : onChange({ id, parent, value: next, checked });
  };
  return /* @__PURE__ */ jsx4("div", { className: "w-full mx-auto", children: /* @__PURE__ */ jsxs4("div", { className: "relative mt-8", children: [
    /* @__PURE__ */ jsxs4(
      "div",
      {
        className: "absolute -top-9 -translate-x-1/2 flex flex-col items-center",
        style: {
          left: `calc(${percent}% + (${8 - percent * 0.16}px))`
        },
        children: [
          /* @__PURE__ */ jsx4("div", { className: "rounded-md bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm min-w-[2rem] text-center tabular-nums", children: value }),
          /* @__PURE__ */ jsx4("div", { className: "w-2 h-2 bg-primary rotate-45 -mt-1" })
        ]
      }
    ),
    /* @__PURE__ */ jsx4(
      "input",
      {
        ref: trackRef,
        type: "range",
        min,
        max,
        step: 1,
        value,
        onChange: handleChange,
        "aria-label": text || "value",
        className: "w-full accent-primary appearance-none rounded-full bg-stone-200 h-2 cursor-pointer"
      }
    )
  ] }) });
}
function RangeTypeBox({ id, title, value, selected, error }) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: "w-full flex select-none items-center ps-4 rounded bg-white/10 peer-checked:ring-2 ring-rose-600",
      children: [
        /* @__PURE__ */ jsx4(
          "input",
          {
            id: id + value,
            type: "radio",
            value,
            name: id,
            className: "w-4 h-4 appearance-none peer checked:bg-yellow-400 rounded-md bg-white/10 border-gray-300"
          }
        ),
        /* @__PURE__ */ jsx4("label", { htmlFor: id + value, className: "peer-checked:text-yellow-400 w-full py-4 ms-2 text-sm font-medium", children: title })
      ]
    }
  );
}
function PinInputMode({ error, title }) {
  return /* @__PURE__ */ jsxs4("div", { children: [
    /* @__PURE__ */ jsx4("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-2", children: title }),
    /* @__PURE__ */ jsxs4("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsx4("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-2`).focus() : null;
      }, id: "pin-1", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ jsx4("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-3`).focus() : document.getElementById(`pin-1`).focus();
      }, id: "pin-2", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ jsx4("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-4`).focus() : document.getElementById(`pin-2`).focus();
      }, id: "pin-3", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ jsx4("input", { type: "number", onChange: (e) => {
        e.target.value === "" ? document.getElementById(`pin-3`).focus() : null;
      }, id: "pin-4", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" })
    ] }),
    error ? /* @__PURE__ */ jsx4("p", { className: "text-red text-xs italic mt-1 text-rose-600", children: error }) : null
  ] });
}
function SearchBox() {
  return /* @__PURE__ */ jsxs4("div", { className: "px-4 py-3 text-slate-600  select-none rounded-full bg-stone-200 flex gap-2 items-center", children: [
    /* @__PURE__ */ jsx4(SearchIcon, { className: "text-2xl" }),
    /* @__PURE__ */ jsx4("input", { type: "text", placeholder: "Search", className: "w-full appearance-none outline-none" })
  ] });
}

// src/interactions/SelectInteractions.jsx
import { useState as useState2 } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function SelectTypeBox({ error, id, title, children, onChange, ...props }) {
  return /* @__PURE__ */ jsxs5("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx5("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }),
    /* @__PURE__ */ jsx5(
      "select",
      {
        ...props,
        onChange,
        className: (error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-amber-400") + " rounded-full corner-squircle appearance-none outline-none bg-stone-200 w-full py-2 px-3",
        id,
        children
      }
    ),
    error ? /* @__PURE__ */ jsx5("p", { className: "text-red text-xs italic text-rose-600", children: error }) : null
  ] });
}
function SelectItem({ value, text }) {
  return /* @__PURE__ */ jsx5("option", { value, children: text });
}

// src/interactions/menus/basic_menus.jsx
import React3, { useState as useState3 } from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function SearchableSelectFlow({ onSelect, children, filter = "" }) {
  const [search, setSearch] = useState3(filter);
  return /* @__PURE__ */ jsxs6("div", { className: "flex gap-1 flex-col", children: [
    /* @__PURE__ */ jsx6(InputTypeBox, { placeholder: "Search", onChange: (e) => setSearch(e.target.value), title: "Search" }),
    /* @__PURE__ */ jsx6(SelectFlow, { onSelect, filter: search, children })
  ] });
}
function SelectFlow({ onSelect, children, filter = "" }) {
  const array = React3.Children.toArray(children).filter((child) => {
    var _a, _b;
    if (!React3.isValidElement(child)) {
      return null;
    }
    if (child.type !== SelectFlowItem)
      return child;
    if (filter !== "" && !(((_a = child.props.value) == null ? void 0 : _a.toLowerCase().includes(filter.toLowerCase())) || ((_b = child.props.title) == null ? void 0 : _b.toLowerCase().includes(filter.toLowerCase()))))
      return null;
    return child;
  });
  const items = array.map((child, index) => {
    switch (child.type) {
      case SelectFlowItem:
        return /* @__PURE__ */ jsxs6("div", { onClick: () => {
          var _a, _b;
          onSelect == null ? void 0 : onSelect(child.props.value);
          (_b = (_a = child.props).onClick) == null ? void 0 : _b.call(_a);
        }, className: "cursor-pointer select-none transition duration-300 gap-2 flex hover:bg-stone-200 rounded-full corner-squircle p-2 items-center", children: [
          child.props.icon !== void 0 ? /* @__PURE__ */ jsx6("span", { className: "text-lg", children: child.props.icon }) : null,
          /* @__PURE__ */ jsx6("span", { children: child.props.title })
        ] }, child.key);
      case SelectFlowDivider:
        const next = array[index + 1];
        if (!next || next.type !== SelectFlowItem)
          return null;
        return /* @__PURE__ */ jsx6("div", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold", children: child.props.name }, child.key);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ jsx6("div", { children: items });
}
function SelectFlowItem({ id, value, title, icon, onClick }) {
}
function SelectFlowDivider({ name }) {
}

// src/interactions/menus/popups.jsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function BasicPopup({ children, buttons, onBack, onClose }) {
  return /* @__PURE__ */ jsx7("section", { className: "absolute z-100 top-0 left-0 flex flex-col items-center p-2 bg-stone-800/15 w-screen h-screen", children: /* @__PURE__ */ jsxs7("div", { className: "border lg:w-2/4 xl:w-2/4 2xl:w-1/4 top-1/6 2xl:top-1/4 sm:w-3/4 md:w-2/3 w-full flex justify-between relative flex-col border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl", children: [
    onBack && /* @__PURE__ */ jsx7("div", { onClick: onBack, className: "absolute cursor-pointer left-5 top-4", children: /* @__PURE__ */ jsx7(ArrowHeadIcon, { className: "rounded-full rotate-180 border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    onClose && /* @__PURE__ */ jsx7("div", { onClick: onClose, className: "absolute cursor-pointer right-5 top-4", children: /* @__PURE__ */ jsx7(CloseIcon, { className: "rounded-full border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    /* @__PURE__ */ jsx7("div", { className: "p-10 flex flex-col gap-1 wrap-break-word", children }),
    buttons && /* @__PURE__ */ jsx7("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: buttons })
  ] }) });
}
function ImagePopup({ children, image, buttons, onClose }) {
  return /* @__PURE__ */ jsx7("section", { className: "absolute z-100 flex flex-col justify-center items-center p-2 bg-stone-800/15 w-screen h-screen", children: /* @__PURE__ */ jsxs7("div", { className: "border flex lg:w-2/4 xl:w-1/2  sm:w-3/4 md:w-2/3 w-full relative border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl", children: [
    onClose && /* @__PURE__ */ jsx7("div", { onClick: onClose, className: "absolute cursor-pointer right-5 top-4", children: /* @__PURE__ */ jsx7(CloseIcon, { className: "rounded-full border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    /* @__PURE__ */ jsx7("div", { className: "lg:block hidden h-full p-4", children: image }),
    /* @__PURE__ */ jsxs7("div", { className: "w-full h-full", children: [
      /* @__PURE__ */ jsx7("div", { className: "p-10 flex flex-col gap-1 wrap-break-word", children }),
      buttons && /* @__PURE__ */ jsx7("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: buttons })
    ] })
  ] }) });
}

// src/other/Banners.jsx
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function SmallTextBanner({ onClose, buttonTitle, onButtonClick, title, description, icon }) {
  return /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsxs8("div", { className: "relative cursor-default select-none w-fulltext-base justify-between font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex", children: [
    /* @__PURE__ */ jsxs8("div", { className: "flex gap-2 items-center", children: [
      icon,
      /* @__PURE__ */ jsx8("p", { className: "text-stone-900 font-semibold", children: title }),
      description && /* @__PURE__ */ jsx8("span", { className: "text-white", children: description }),
      buttonTitle && /* @__PURE__ */ jsxs8("div", { onClick: onButtonClick, className: "text-center flex gap-2 text-sm font-bold text-secondary transition-all duration-200 rounded-md hover:text-stone-700", children: [
        buttonTitle,
        /* @__PURE__ */ jsx8(ArrowIcon, { className: "text-lg rotate-90" })
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { className: "hover:bg-stone-50/15 rounded-lg", children: /* @__PURE__ */ jsx8(CloseIcon, { onClick: onClose, className: "text-3xl" }) })
  ] }) });
}
export {
  BasicPopup,
  Breadcrumb,
  BreadcrumbItem,
  FilesIcon,
  ImagePopup,
  InputTypeBox,
  MessagesIcon,
  PinInputMode,
  PrimaryButton,
  RadioTypeBox,
  RangeTypeBox,
  SearchBox,
  SearchableSelectFlow,
  SecondaryButton,
  SelectFlow,
  SelectFlowDivider,
  SelectFlowItem,
  SelectItem,
  SelectTypeBox,
  SliderItem,
  SliderItem2,
  SmallTextBanner
};
//# sourceMappingURL=index.mjs.map