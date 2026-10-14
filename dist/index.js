var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.jsx
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  BasicPopup: () => BasicPopup,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem,
  FilesIcon: () => FilesIcon,
  ImagePopup: () => ImagePopup,
  InputTypeBox: () => InputTypeBox,
  LargeBasicPopup: () => LargeBasicPopup,
  MessagesIcon: () => MessagesIcon,
  PinInputMode: () => PinInputMode,
  PrimaryButton: () => PrimaryButton,
  RadioTypeBox: () => RadioTypeBox,
  RangeTypeBox: () => RangeTypeBox,
  SearchBox: () => SearchBox,
  SearchableSelectFlow: () => SearchableSelectFlow,
  SecondaryButton: () => SecondaryButton,
  SelectFlow: () => SelectFlow,
  SelectFlowDivider: () => SelectFlowDivider,
  SelectFlowItem: () => SelectFlowItem,
  SelectItem: () => SelectItem,
  SelectTypeBox: () => SelectTypeBox,
  SliderItem: () => SliderItem,
  SliderItem2: () => SliderItem2,
  SmallTextBanner: () => SmallTextBanner
});
module.exports = __toCommonJS(index_exports);

// src/buttons/BasicButtons.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function PrimaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick, type: "button", className: `${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`, children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function SecondaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick, type: "button", className: `${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`, children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}

// src/icons/icons.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function MessagesIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m21 14l-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" }) });
}
function FilesIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", d: "M1.75 10a.75.75 0 0 1 .75.75v2.5c0 .138.112.25.25.25h2.5a.75.75 0 1 1 0 1.5h-2.5A1.75 1.75 0 0 1 1 13.25v-2.5a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 13.25 15h-2.5a.75.75 0 1 1 0-1.5h2.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 .75-.75m-6 0a.75.75 0 1 1 0 1.5h-3a.75.75 0 1 1 0-1.5Zm3-2.5a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5Zm-1-2.5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1 0-1.5Zm-5-4a.75.75 0 0 1 0 1.5h-2.5a.25.25 0 0 0-.25.25v2.5a.75.75 0 0 1-1.5 0v-2.5C1 1.784 1.784 1 2.75 1Zm8 0c.966 0 1.75.784 1.75 1.75v2.5a.75.75 0 1 1-1.5 0v-2.5a.25.25 0 0 0-.25-.25h-2.5a.75.75 0 1 1 0-1.5Z" }) });
}
function SearchIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 32 32", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", d: "m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" }) });
}
function ArrowIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 80 80", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "none", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", d: "M36.964 17.7a3 3 0 1 1 6 .004zm3 .078l3 .002zm0 .889l-3-.003zm0 .888l3 .002zm-.001.89l3 .001zm-.001.888l-3-.002zm0 .889h-3v-.002zm3 20.074a3 3 0 0 1-6 0zm-6 .037a3 3 0 0 1 6 0zm6 21.667a3 3 0 0 1-6 0zm.002-46.296v.075l-6-.003V17.7zm0 .075v.89l-6-.005v-.888zm0 .89v.888l-6-.004v-.889zm0 .888l-.001.89l-6-.005v-.889zm-.001.89l-.001.888l-6-.004v-.889zm-.001.888v.889l-6-.004v-.889zm0 .887v20.074h-6V22.222zm0 20.111V64h-6V42.333z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 6, d: "m15.11 39.11l21.177-21.176a5.25 5.25 0 0 1 7.425 0l21.176 21.177" })
  ] }) });
}
function ArrowHeadIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "-6 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { id: "SVG1pzpbdYY", fill: "currentColor", d: "m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("use", { fillRule: "evenodd", href: "#SVG1pzpbdYY", transform: "rotate(-180 5.02 9.505)" })
  ] });
}

// src/other/Breadcrumb.jsx
var import_react = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
function Breadcrumb({ children }) {
  const items = import_react.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: "flex flex-wrap items-center p-1 gap-0.5", children: items.flatMap((child, index) => [
    child,
    index < items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "1.5em", height: "1.5em", strokeWidth: "1.5", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", className: "h-4 w-4 stroke-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9 6L15 12L9 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }) }) }, index) : null
  ]) }) });
}
function BreadcrumbItem({ active, onClick, title, icon }) {
  const aClass = active ? "inline-flex items-center gap-1.5 text-sm text-stone-50 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-800 px-2 py-1 hover:bg-stone-700" : "inline-flex items-center gap-1.5 text-sm text-stone-800 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-200 px-2 py-1 hover:bg-stone-700";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", { href: "#", className: aClass, children: [
    icon,
    title
  ] });
}

// src/interactions/InputInteractions.jsx
var import_react2 = require("react");
var import_react3 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function InputTypeBox({ id, type, title, placeholder, defaultText, error, ...props }) {
  if (type === "color") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full", children: [
      title ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "input",
        {
          ...props,
          className: (error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-primary") + " select-none appearance-none outline-none w-full rounded-full corner-squircle h-8 px-3",
          id,
          type: type ? type : "text",
          placeholder,
          defaultValue: defaultText
        }
      ),
      error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-red text-xs italic mt-1 text-rose-600", children: error }) : null
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full", children: [
    title ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-red text-xs italic mt-1 text-rose-600", children: error }) : null
  ] });
}
function RadioTypeBox({ id, title, checked = false, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: `w-full flex select-none justify-center items-center rounded`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            id,
            type: "checkbox",
            checked,
            onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
            className: "w-4 h-4 appearance-none rounded-md bg-stone-200 checked:bg-yellow-400"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  const [value, setValue] = (0, import_react2.useState)(50);
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full max-w-md mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative h-4 mt-1", children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "span",
      {
        className: "absolute top-0 -translate-x-1/2 text-xs text-stone-400",
        style: { left: `${(s - min) / (max - min) * 100}%` },
        children: "|"
      },
      s
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  const [value, setValue] = (0, import_react2.useState)(50);
  const trackRef = (0, import_react3.useRef)(null);
  const percent = (value - min) / (max - min) * 100;
  const handleChange = (e) => {
    const next = Number(e.target.value);
    setValue(next);
    onChange == null ? void 0 : onChange({ id, parent, value: next, checked });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: "absolute -top-9 -translate-x-1/2 flex flex-col items-center",
        style: {
          left: `calc(${percent}% + (${8 - percent * 0.16}px))`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-md bg-primary px-2 py-1 text-sm font-semibold text-white shadow-sm min-w-[2rem] text-center tabular-nums", children: value }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-2 h-2 bg-primary rotate-45 -mt-1" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: "w-full flex select-none items-center ps-4 rounded bg-white/10 peer-checked:ring-2 ring-rose-600",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            id: id + value,
            type: "radio",
            value,
            name: id,
            className: "w-4 h-4 appearance-none peer checked:bg-yellow-400 rounded-md bg-white/10 border-gray-300"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { htmlFor: id + value, className: "peer-checked:text-yellow-400 w-full py-4 ms-2 text-sm font-medium", children: title })
      ]
    }
  );
}
function PinInputMode({ error, title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-2", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-2`).focus() : null;
      }, id: "pin-1", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-3`).focus() : document.getElementById(`pin-1`).focus();
      }, id: "pin-2", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "number", onChange: (e) => {
        e.target.value !== "" ? document.getElementById(`pin-4`).focus() : document.getElementById(`pin-2`).focus();
      }, id: "pin-3", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "number", onChange: (e) => {
        e.target.value === "" ? document.getElementById(`pin-3`).focus() : null;
      }, id: "pin-4", className: "h-14 w-10 rounded-lg flex items-center text-center font-thin appearance-none outline-none bg-white/10 text-3xl focus:ring-2 focus:ring-amber-400" })
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-red text-xs italic mt-1 text-rose-600", children: error }) : null
  ] });
}
function SearchBox() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "px-4 py-3 text-slate-600  select-none rounded-full bg-stone-200 flex gap-2 items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchIcon, { className: "text-2xl" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type: "text", placeholder: "Search", className: "w-full appearance-none outline-none" })
  ] });
}

// src/interactions/SelectInteractions.jsx
var import_react4 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function SelectTypeBox({ error, id, title, children, onChange, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "select",
      {
        ...props,
        onChange,
        className: (error ? "ring-2 ring-rose-600 text-rose-600 " : "focus:ring-2 focus:ring-amber-400") + " rounded-full corner-squircle appearance-none outline-none bg-stone-200 w-full py-2 px-3",
        id,
        children
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-red text-xs italic text-rose-600", children: error }) : null
  ] });
}
function SelectItem({ value, text }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value, children: text });
}

// src/interactions/menus/basic_menus.jsx
var import_react5 = __toESM(require("react"));
var import_jsx_runtime6 = require("react/jsx-runtime");
function SearchableSelectFlow({ onSelect, children, filter = "" }) {
  const [search, setSearch] = (0, import_react5.useState)(filter);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex gap-1 flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InputTypeBox, { placeholder: "Search", onChange: (e) => setSearch(e.target.value), title: "Search" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SelectFlow, { onSelect, filter: search, children })
  ] });
}
function SelectFlow({ onSelect, children, filter = "" }) {
  const array = import_react5.default.Children.toArray(children).filter((child) => {
    var _a, _b;
    if (!import_react5.default.isValidElement(child)) {
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
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { onClick: () => {
          var _a, _b;
          onSelect == null ? void 0 : onSelect(child.props.value);
          (_b = (_a = child.props).onClick) == null ? void 0 : _b.call(_a);
        }, className: "cursor-pointer select-none transition duration-300 gap-2 flex hover:bg-stone-200 rounded-full corner-squircle p-2 items-center", children: [
          child.props.icon !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-lg", children: child.props.icon }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: child.props.title })
        ] }, child.key);
      case SelectFlowDivider:
        const next = array[index + 1];
        if (!next || next.type !== SelectFlowItem)
          return null;
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold", children: child.props.name }, child.key);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: items });
}
function SelectFlowItem({ id, value, title, icon, onClick }) {
}
function SelectFlowDivider({ name }) {
}

// src/colors.js
var colors = {
  lime: "text-lime-800 bg-lime-300",
  green: "text-green-800 bg-green-300",
  emerald: "text-emerald-800 bg-emerald-300",
  blue: "text-blue-800 bg-blue-300",
  violet: "text-violet-800 bg-violet-300",
  sky: "text-sky-800 bg-sky-300",
  yellow: "text-yellow-800 bg-yellow-300",
  red: "text-red-800 bg-red-300",
  amber: "text-amber-800 bg-amber-300",
  purple: "text-purple-800 bg-purple-300",
  pink: "text-pink-800 bg-pink-300",
  rose: "text-rose-800 bg-rose-300",
  stone: "text-stone-800 bg-stone-300"
};

// src/other/Texts.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Badge({ icon, name, color, disabled, onClick, isGrabbable = false, ...props }) {
  const isClickable = disabled && onClick;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      ...props,
      onClick: isClickable ? onClick : null,
      className: `
          p-1 px-2 flex select-none items-center justify-center gap-1 rounded-full corner-squircle transition-colors duration-100
          ${isClickable ? "cursor-pointer hover:bg-stone-400" : ""}
          ${isGrabbable ? "cursor-grab" : ""}
          ${disabled ? "text-stone-800 bg-stone-300" : colors[color]}
        `,
      children: [
        icon,
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-mono font-semibold text-sm", children: name })
      ]
    }
  );
}

// src/interactions/menus/popups.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function BasicPopup({ children, buttons, onBack, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "absolute z-100 top-0 left-0 flex flex-col items-center p-2 bg-stone-800/15 w-screen h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border lg:w-2/4 xl:w-2/4 2xl:w-1/4 top-1/6 2xl:top-1/4 sm:w-3/4 md:w-2/3 w-full flex justify-between relative flex-col border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl", children: [
    onBack && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { onClick: onBack, className: "absolute cursor-pointer left-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ArrowHeadIcon, { className: "rounded-full rotate-180 border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    onClose && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { onClick: onClose, className: "absolute cursor-pointer right-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CloseIcon, { className: "rounded-full border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "p-10 flex flex-col gap-1 wrap-break-word", children }),
    buttons && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: buttons })
  ] }) });
}
function LargeBasicPopup({ children, buttons, onBack, onClose, maxH = "66%" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "absolute h-screen w-screen p-2 bg-stone-800/10 backdrop-blur-[2px] flex justify-center items-center z-50 top-0 left-0", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border 2xl:w-1/2 xl:w-2/3 w-full relative overflow-auto border-stone-300 bg-stone-50 min-h-40 corner-squircle rounded-3xl", children: [
    onBack && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { onClick: onBack, className: "absolute cursor-pointer left-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ArrowHeadIcon, { className: "rounded-full rotate-180 border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    onClose && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { onClick: onClose, className: "absolute cursor-pointer right-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CloseIcon, { className: "rounded-full border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: `p-6 flex flex-col gap-1 wrap-break-word`, style: { maxHeight: maxH }, children }),
    buttons && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: buttons })
  ] }) });
}
function ImagePopup({ children, image, buttons, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "absolute z-100 flex flex-col justify-center items-center p-2 bg-stone-800/15 w-screen h-screen", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "border flex lg:w-2/4 xl:w-1/2  sm:w-3/4 md:w-2/3 w-full relative border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl", children: [
    onClose && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { onClick: onClose, className: "absolute cursor-pointer right-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CloseIcon, { className: "rounded-full border-stone-300 text-stone-500 text-2xl p-1 border" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "lg:block hidden h-full p-4", children: image }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "p-10 flex flex-col gap-1 wrap-break-word", children }),
      buttons && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: buttons })
    ] })
  ] }) });
}

// src/other/Banners.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function SmallTextBanner({ onClose, buttonTitle, onButtonClick, title, description, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "relative cursor-default select-none w-fulltext-base justify-between font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-2 items-center", children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-stone-900 font-semibold", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-white", children: description }),
      buttonTitle && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { onClick: onButtonClick, className: "text-center flex gap-2 text-sm font-bold text-secondary transition-all duration-200 rounded-md hover:text-stone-700", children: [
        buttonTitle,
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ArrowIcon, { className: "text-lg rotate-90" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "hover:bg-stone-50/15 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CloseIcon, { onClick: onClose, className: "text-3xl" }) })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  BasicPopup,
  Breadcrumb,
  BreadcrumbItem,
  FilesIcon,
  ImagePopup,
  InputTypeBox,
  LargeBasicPopup,
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
});
//# sourceMappingURL=index.js.map