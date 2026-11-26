// src/other/toasts.js
var CONTAINER_ID = "global-toast-container";
var EXIT_MS = 200;
var VARIANTS = {
  warning: {
    badge: "bg-orange-100 text-orange-500",
    action: "text-orange-600 hover:text-orange-700",
    role: "status",
    icon: `<path d="M12 3.5 21.5 20h-19z" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 10v4.5M12 17.2v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  },
  error: {
    badge: "bg-red-100 text-red-500",
    action: "text-red-600 hover:text-red-700",
    role: "alert",
    icon: `<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 7.5v5.5M12 16v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  },
  success: {
    badge: "bg-green-100 text-green-500",
    action: "text-green-600 hover:text-green-700",
    role: "status",
    icon: `<circle cx="12" cy="12" r="9.5" fill="currentColor"/><path d="m7.8 12.4 2.8 2.8 5.6-6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  info: {
    badge: "bg-blue-100 text-blue-500",
    action: "text-blue-600 hover:text-blue-700",
    role: "status",
    icon: `<rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="currentColor"/><path d="M12 11v5.5M12 7.8v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  }
};
var svg = (inner, size) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${inner}</svg>`;
var getContainer = () => {
  let container = document.getElementById(CONTAINER_ID);
  if (container) return container;
  container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.className = "fixed top-5 right-5 z-[9999] flex w-[min(420px,calc(100vw-40px))] flex-col items-end gap-3 pointer-events-none";
  document.body.appendChild(container);
  return container;
};
var displayToast = ({
  title,
  description,
  type = "info",
  action,
  duration = 4e3
}) => {
  const variant = VARIANTS[type] ?? VARIANTS.info;
  const el = document.createElement("div");
  el.setAttribute("role", variant.role);
  el.className = [
    "pointer-events-auto flex w-fit max-w-full items-start gap-3",
    "squircle-2xl rounded-3xl bg-white py-3 pl-3 pr-4",
    "shadow-[0_8px_30px_rgb(0_0_0/0.12)] ring-1 ring-black/5",
    "opacity-0 translate-x-8 transition-all duration-200 motion-reduce:transition-none"
  ].join(" ");
  const badge = document.createElement("div");
  badge.className = `mt-px flex size-9 shrink-0 items-center justify-center rounded-full ${variant.badge}`;
  badge.innerHTML = svg(variant.icon, 20);
  const body = document.createElement("div");
  body.className = "min-w-0 flex-1 self-center text-sm leading-snug";
  if (title) {
    const t = document.createElement("p");
    t.className = "font-semibold text-stone-900";
    t.textContent = title;
    body.appendChild(t);
  }
  if (description) {
    const d = document.createElement("p");
    d.className = title ? "text-stone-500" : "text-stone-700";
    d.textContent = description;
    body.appendChild(d);
  }
  let remove;
  if (action == null ? void 0 : action.label) {
    const a = document.createElement(action.href ? "a" : "button");
    a.className = `mt-0.5 block text-left font-semibold ${variant.action}`;
    a.textContent = action.label;
    if (action.href) a.href = action.href;
    else a.type = "button";
    a.addEventListener("click", () => {
      var _a;
      (_a = action.onClick) == null ? void 0 : _a.call(action);
      remove();
    });
    body.appendChild(a);
  }
  const close = document.createElement("button");
  close.type = "button";
  close.setAttribute("aria-label", "Dismiss notification");
  close.className = "mt-2 shrink-0 self-start rounded-full p-0.5 text-stone-400 transition-colors hover:text-stone-700";
  close.innerHTML = svg(
    `<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    16
  );
  el.append(badge, body, close);
  getContainer().appendChild(el);
  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-x-8");
  });
  let timer;
  let remaining = duration;
  let startedAt = 0;
  const start = () => {
    if (!remaining) return;
    startedAt = Date.now();
    timer = setTimeout(() => remove(), remaining);
  };
  const pause = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = void 0;
    remaining -= Date.now() - startedAt;
  };
  let removed = false;
  remove = () => {
    if (removed) return;
    removed = true;
    clearTimeout(timer);
    el.classList.add("opacity-0", "translate-x-8");
    setTimeout(() => el.remove(), EXIT_MS);
  };
  close.addEventListener("click", remove);
  el.addEventListener("mouseenter", pause);
  el.addEventListener("mouseleave", start);
  start();
  return remove;
};
var displayError = (error) => {
  var _a;
  const description = error instanceof Error ? error.message : typeof error === "string" ? error : "Something went wrong";
  const detail = (_a = error == null ? void 0 : error.info) == null ? void 0 : _a.error;
  displayToast({
    type: "error",
    title: description,
    description: detail ? String(detail) : void 0,
    duration: 6e3
  });
};

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
import { jsx, jsxs } from "react/jsx-runtime";
function Badge({ icon, name, color, disabled, onClick, isGrabbable = false, ...props }) {
  const isClickable = disabled && onClick;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      onClick: isClickable ? onClick : null,
      className: `
          p-1 px-2 flex select-none items-center justify-center gap-1 h-6 squircle-full transition-colors duration-100
          ${isClickable ? "cursor-pointer hover:bg-stone-400" : ""}
          ${isGrabbable ? "cursor-grab" : ""}
          ${disabled ? "text-stone-800 bg-stone-300" : colors[color]}
        `,
      children: [
        icon,
        /* @__PURE__ */ jsx("p", { className: "font-mono font-semibold text-sm", children: name })
      ]
    }
  );
}

// src/other/IconToDisplay.jsx
import { Icon } from "@iconify/react";
import { jsx as jsx2 } from "react/jsx-runtime";
function parseIcon(value) {
  if (typeof value !== "string") return null;
  const separator = value.indexOf(":");
  if (separator === -1) return null;
  const kind = value.slice(0, separator);
  const name = value.slice(separator + 1);
  if (!name || kind !== "emoji" && kind !== "icon") return null;
  return { kind, name };
}
function IconToDisplay({ icon, className = "" }) {
  const parsed = parseIcon(icon);
  if (!parsed) return null;
  if (parsed.kind === "emoji") {
    return /* @__PURE__ */ jsx2("span", { className: `${className} flex items-center text-xl leading-none`, children: parsed.name });
  }
  return /* @__PURE__ */ jsx2(
    Icon,
    {
      icon: parsed.name,
      className: `${className} aspect-square w-auto`,
      height: "100%"
    }
  );
}

// src/buttons/BasicButtons.jsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function PrimaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ jsxs2("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`, children: [
    icon,
    /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ jsx3("span", { children: title ?? /* @__PURE__ */ jsx3("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ jsx3("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function SecondaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ jsxs2("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`, children: [
    icon,
    /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ jsx3("span", { children: title ?? /* @__PURE__ */ jsx3("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ jsx3("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function RedButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ jsxs2("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-red-600 
     hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-red-600/40`, children: [
    icon,
    /* @__PURE__ */ jsx3("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ jsx3("span", { children: title ?? /* @__PURE__ */ jsx3("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ jsx3("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}

// src/icons/icons.jsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function DropDownArrowIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z" }) });
}
function TitleIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", fillRule: "evenodd", d: "M.75 2a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0V3.5h2.75v9h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5v-9H8.5v.75a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 9.25 2zM8 7.75A.75.75 0 0 1 8.75 7h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 7.75m0 3.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75", clipRule: "evenodd" }) });
}
function TickIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx4("polyline", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, points: "2.75 8.75 6.25 12.25 13.25 4.75" }) });
}
function EyeIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxs3("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, children: [
    /* @__PURE__ */ jsx4("path", { d: "M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5s7.764 4.013 9.257 5.962" }),
    /* @__PURE__ */ jsx4("circle", { cx: 12, cy: 12, r: 3 })
  ] }) });
}
function CopyIcon(props) {
  return /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 16 16", children: [
    /* @__PURE__ */ jsx4("path", { d: "M0 0h16v16H0z", fill: "none" }),
    /* @__PURE__ */ jsx4("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 10.5h4A1.5 1.5 0 0 0 13.5 9V7H12a3 3 0 0 1-3-3V2.5H8A1.5 1.5 0 0 0 6.5 4v5A1.5 1.5 0 0 0 8 10.5m5.06-5.318q.145.145.243.318H12A1.5 1.5 0 0 1 10.5 4V2.697q.174.098.318.242zM15 6.242a3 3 0 0 0-.879-2.12L11.88 1.878A3 3 0 0 0 9.757 1H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3zM9.5 12H8a3 3 0 0 1-3-3V5.5H4A1.5 1.5 0 0 0 2.5 7v5A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12", clipRule: "evenodd" })
  ] });
}
function EyeOffIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx4("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2 10s3.5 4 10 4s10-4 10-4M4 11.645L2 14m20 0l-1.996-2.352M8.914 13.68L8 16.5m7.063-2.812L16 16.5" }) });
}
function TrashIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx4("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6zM2 6h20m-12 5v5m4-5v5" }) });
}
function SearchIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 32 32", children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" }) });
}
function ItalicIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx4("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5h6M7 19h6m1-14l-4 14" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" }) });
}
function LetterAUnderlineIcon(props) {
  return /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx4("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 15V8a3 3 0 0 1 6 0v7m-6-4h6M5 19h14" }) });
}
function ArrowHeadIcon(props) {
  return /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "-6 0 24 24", children: [
    /* @__PURE__ */ jsx4("defs", { children: /* @__PURE__ */ jsx4("path", { id: "SVG1pzpbdYY", fill: "currentColor", d: "m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" }) }),
    /* @__PURE__ */ jsx4("use", { fillRule: "evenodd", href: "#SVG1pzpbdYY", transform: "rotate(-180 5.02 9.505)" })
  ] });
}
function ColorPalletIcon(props) {
  return /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", ...props, height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ jsx4("circle", { cx: 10, cy: 12, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ jsx4("circle", { cx: 16, cy: 9, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ jsx4("circle", { cx: 22, cy: 12, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ jsx4("circle", { cx: 23, cy: 18, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ jsx4("circle", { cx: 19, cy: 23, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ jsx4("path", { fill: "currentColor", d: "M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2m8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5 5 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.9 11.9 0 0 1-3.35 8.79Z" })
  ] });
}

// src/buttons/ComplexButtons.jsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function CheckBox({ id, title, checked = false, disabled = false, onChange, error = void 0 }) {
  return /* @__PURE__ */ jsxs4("div", { className: "w-full flex select-none items-center", children: [
    /* @__PURE__ */ jsxs4("div", { className: "relative w-4 h-4 shrink-0", children: [
      /* @__PURE__ */ jsx5(
        "input",
        {
          id,
          type: "checkbox",
          checked,
          disabled,
          onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
          className: `w-4 h-4 appearance-none rounded-sm bg-stone-200 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`
        }
      ),
      /* @__PURE__ */ jsx5(
        "span",
        {
          className: "pointer-events-none absolute inset-0 flex items-center justify-center text-stone-700",
          style: {
            opacity: checked ? disabled ? 0.5 : 1 : 0,
            filter: checked ? "blur(0px)" : "blur(4px)",
            transform: checked ? "scale(1)" : "scale(0.75)",
            transition: "opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out"
          },
          children: /* @__PURE__ */ jsx5(TickIcon, { className: "w-3 h-3" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "w-full relative flex items-center", children: [
      /* @__PURE__ */ jsx5(
        "label",
        {
          htmlFor: id,
          className: `block ms-2 text-sm font-medium ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`,
          children: title
        }
      ),
      error && /* @__PURE__ */ jsx5("p", { className: "ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight", children: error })
    ] })
  ] });
}
function Switch({ id, title, checked = false, disabled = false, onChange, error = void 0 }) {
  return /* @__PURE__ */ jsxs4("div", { className: "w-full flex select-none items-center", children: [
    /* @__PURE__ */ jsxs4("div", { className: "relative w-8 h-5 shrink-0", children: [
      /* @__PURE__ */ jsx5(
        "input",
        {
          id,
          type: "checkbox",
          role: "switch",
          checked,
          disabled,
          onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
          className: `absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`
        }
      ),
      /* @__PURE__ */ jsx5(
        "span",
        {
          className: `pointer-events-none absolute inset-0 rounded-full transition-colors duration-300 ease-out ${checked ? "bg-primary" : "bg-stone-200"} ${disabled ? "opacity-50" : ""}`
        }
      ),
      /* @__PURE__ */ jsx5(
        "span",
        {
          className: `pointer-events-none absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md
                      transition-transform duration-300 ease-out ${checked ? "translate-x-3" : "translate-x-0"} ${disabled ? "opacity-80" : ""}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "w-full relative flex items-center", children: [
      /* @__PURE__ */ jsx5(
        "label",
        {
          htmlFor: id,
          className: `block ms-2 text-sm font-normal ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`,
          children: title
        }
      ),
      error && /* @__PURE__ */ jsx5("p", { className: "ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight", children: error })
    ] })
  ] });
}
function Options({
  id,
  title,
  elementList = {},
  selected = null,
  onChange,
  disabled = false,
  bordered = false,
  error = void 0
}) {
  const entries = Object.entries(elementList);
  return /* @__PURE__ */ jsxs4("div", { className: "w-full select-none", role: "radiogroup", "aria-labelledby": title ? `${id}-title` : void 0, children: [
    title && /* @__PURE__ */ jsx5("p", { id: `${id}-title`, className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    entries.map(([key, content], index) => {
      const isSelected = selected === key;
      const isFirst = index === 0;
      const isLast = index === entries.length - 1;
      const optionId = `${id}-${key}`;
      const borderClasses = bordered ? [
        "px-3 border-x border-t bg-stone-100",
        error ? "border-rose-600" : "border-stone-200",
        isFirst ? "squircle-t-2xl" : "",
        isLast ? "border-b squircle-b-2xl" : ""
      ].join(" ") : "";
      return /* @__PURE__ */ jsxs4("div", { className: `flex items-center ${borderClasses}`, children: [
        /* @__PURE__ */ jsxs4("div", { className: "relative w-4 h-4 shrink-0", children: [
          /* @__PURE__ */ jsx5(
            "input",
            {
              id: optionId,
              type: "radio",
              name: id,
              value: key,
              checked: isSelected,
              disabled,
              onChange: () => onChange == null ? void 0 : onChange(key),
              className: `absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`
            }
          ),
          /* @__PURE__ */ jsx5(
            "span",
            {
              className: `pointer-events-none absolute inset-0 rounded-full bg-stone-200 flex items-center justify-center ${disabled ? "opacity-50" : ""}`,
              children: /* @__PURE__ */ jsx5(
                "span",
                {
                  className: "w-2 h-2 rounded-full bg-primary transition-all duration-200 ease-out",
                  style: {
                    opacity: isSelected ? 1 : 0,
                    transform: isSelected ? "scale(1)" : "scale(0.5)"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx5(
          "label",
          {
            htmlFor: optionId,
            className: `block w-full ms-2 text-sm font-normal text-stone-800 ${bordered ? "py-3" : "py-1"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
            children: content
          }
        )
      ] }, key);
    }),
    error && /* @__PURE__ */ jsx5("p", { className: "text-rose-600 text-[10px] italic leading-tight mt-1", children: error })
  ] });
}

// src/interactions/inputs/TextWriter.jsx
import { useImperativeHandle, useRef, useState } from "react";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var colors2 = ["#FF6467", "#FFB93B", "#7CCF35", "#31C950", "#2A9689", "#21BCFF", "#8E51FF", "#FF2056"];
function TextWriter({ content, title, ref }) {
  const editorRef = useRef(null);
  const [expand, setExpand] = useState(null);
  useImperativeHandle(ref, () => ({
    getContent() {
      var _a;
      return ((_a = editorRef.current) == null ? void 0 : _a.innerHTML) ?? "";
    }
  }), [editorRef]);
  const exec = (command, value = null) => {
    var _a;
    if (expand !== null) setExpand(null);
    (_a = editorRef.current) == null ? void 0 : _a.focus();
    document.execCommand(command, false, value);
  };
  return /* @__PURE__ */ jsxs5("div", { children: [
    /* @__PURE__ */ jsx6("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1 mb-2", children: [
      /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: "B", command: "bold" }),
      /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: /* @__PURE__ */ jsx6(ItalicIcon, {}), command: "italic" }),
      /* @__PURE__ */ jsx6(EditorAction, { onClick: () => setExpand(!expand ? "justify" : null), icon: /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx6("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, d: "M3 6h18M7 12h10M5 18h14" }) }), command: "justify" }),
      /* @__PURE__ */ jsxs5("div", { className: "relative", children: [
        /* @__PURE__ */ jsx6(EditorAction, { onClick: () => setExpand(!expand ? "color" : null), icon: /* @__PURE__ */ jsx6(ColorPalletIcon, {}), command: "justify" }),
        expand === "color" && /* @__PURE__ */ jsx6("div", { className: "flex items-center gap-1 p-1 rounded-4xl left-1/2 -translate-x-1/2 corner-squircle translate-y-1 bg-stone-300 absolute", children: colors2.map(
          (c) => /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: /* @__PURE__ */ jsx6(LetterAUnderlineIcon, { style: { color: c }, className: "text-2xl" }), command: "foreColor", value: c }, c)
        ) })
      ] }),
      /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 1024 1024", children: /* @__PURE__ */ jsx6("path", { fill: "currentColor", d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0" }) }), command: "insertUnorderedList" }),
      /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx6("path", { fill: "currentColor", d: "M2.988 9a2.012 2.012 0 0 1 1.488 3.366L3.446 13.5h.804a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.555-1.255l2.172-2.388a.514.514 0 0 0-.379-.857h-.04a.55.55 0 0 0-.46.246l-.114.17a.75.75 0 0 1-1.248-.832l.113-.17A2.05 2.05 0 0 1 2.947 9zM14 12a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zm0-5a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM2.77 1.174A.75.75 0 0 1 4 1.75V6a.75.75 0 0 1-1.5 0V3.352l-.27.224a.751.751 0 0 1-.96-1.152zM14 2a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z" }) }), command: "insertOrderedList" }),
      /* @__PURE__ */ jsx6(EditorAction, { onClick: exec, icon: /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "-1.5 -2.5 24 24", children: /* @__PURE__ */ jsx6("path", { fill: "currentColor", d: "M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z" }) }), command: "removeFormat" }),
      /* @__PURE__ */ jsx6("div", { className: "w-px h-6 bg-stone-300 mx-1" }),
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "button",
          onMouseDown: (e) => e.preventDefault(),
          onClick: () => exec("undo"),
          className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300",
          title: "Undo",
          children: "\u21B6"
        }
      ),
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "button",
          onMouseDown: (e) => e.preventDefault(),
          onClick: () => exec("redo"),
          className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300",
          title: "Redo",
          children: "\u21B7"
        }
      )
    ] }),
    /* @__PURE__ */ jsx6(
      "div",
      {
        ref: editorRef,
        contentEditable: true,
        suppressContentEditableWarning: true,
        dangerouslySetInnerHTML: { __html: content || "" },
        className: "\n          min-h-7\n          bg-stone-200\n          p-2\n          px-3\n          rounded-2xl\n          outline-none\n          appearance-none\n          focus:ring-2\n          focus:ring-primary\n          corner-squircle\n          w-full\n\n          [&_strong]:font-bold\n          [&_b]:font-bold\n\n          [&_ul]:list-disc\n          [&_ul]:pl-6\n          [&_ul]:my-2\n\n          [&_ol]:list-decimal\n          [&_ol]:pl-6\n          [&_ol]:my-2\n\n          [&_li]:pl-1\n          [&_li]:my-1\n        "
      }
    )
  ] });
}
function EditorAction({ command, value = null, icon, onClick }) {
  return /* @__PURE__ */ jsx6(
    "button",
    {
      type: "button",
      onMouseDown: (e) => e.preventDefault(),
      onClick: () => onClick(command, value),
      className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300 font-bold",
      title: command,
      children: icon
    }
  );
}

// src/interactions/DropDown.jsx
import { createPortal } from "react-dom";
import { useLayoutEffect, useRef as useRef2, useState as useState2 } from "react";
import { Fragment, jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var MAX_H = 400;
var MIN_H = 120;
var GAP = 4;
var EDGE = 8;
function Dropdown({ children, className = "", onClose }) {
  const anchorRef = useRef2(null);
  const menuRef = useRef2(null);
  const openUpRef = useRef2(false);
  const [pos, setPos] = useState2(null);
  const onCloseRef = useRef2(onClose);
  onCloseRef.current = onClose;
  useLayoutEffect(() => {
    var _a, _b;
    const focusInside = () => {
      var _a2;
      return !!((_a2 = menuRef.current) == null ? void 0 : _a2.contains(document.activeElement));
    };
    const measure = (decideDirection) => {
      var _a2;
      const anchor = anchorRef.current;
      if (!anchor) return;
      const below = anchor.getBoundingClientRect();
      const trigger = ((_a2 = anchor.previousElementSibling) == null ? void 0 : _a2.getBoundingClientRect()) ?? below;
      const vv = window.visualViewport;
      const viewTop = vv ? vv.offsetTop : 0;
      const viewBottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
      const spaceBelow = viewBottom - below.bottom - GAP - EDGE;
      const spaceAbove = trigger.top - viewTop - GAP - EDGE;
      if (decideDirection) {
        openUpRef.current = spaceBelow < MAX_H && spaceAbove > spaceBelow;
      }
      const space = openUpRef.current ? spaceAbove : spaceBelow;
      setPos({
        left: below.left,
        width: below.width,
        maxHeight: Math.max(MIN_H, Math.min(MAX_H, space)),
        ...openUpRef.current ? { bottom: document.documentElement.clientHeight - trigger.top + GAP } : { top: below.bottom + GAP }
      });
    };
    measure(true);
    const reposition = () => measure(false);
    const close = () => {
      var _a2;
      return (_a2 = onCloseRef.current) == null ? void 0 : _a2.call(onCloseRef);
    };
    const onResize = () => focusInside() ? reposition() : close();
    const onScroll = (e) => {
      var _a2;
      if ((_a2 = menuRef.current) == null ? void 0 : _a2.contains(e.target)) return;
      focusInside() ? reposition() : close();
    };
    const onViewport = () => {
      if (focusInside()) reposition();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", onViewport);
    (_b = window.visualViewport) == null ? void 0 : _b.addEventListener("scroll", onViewport);
    return () => {
      var _a2, _b2;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
      (_a2 = window.visualViewport) == null ? void 0 : _a2.removeEventListener("resize", onViewport);
      (_b2 = window.visualViewport) == null ? void 0 : _b2.removeEventListener("scroll", onViewport);
    };
  }, []);
  if (!onClose) return null;
  return /* @__PURE__ */ jsxs6(Fragment, { children: [
    /* @__PURE__ */ jsx7("div", { ref: anchorRef }),
    pos && createPortal(
      /* @__PURE__ */ jsx7(
        "div",
        {
          ref: menuRef,
          className: `${className} fixed text-stone-800 z-1000 squircle-2xl max-h-100 overflow-y-auto bg-stone-200 shadow-xl`,
          style: pos,
          children
        }
      ),
      document.body
    )
  ] });
}

// src/interactions/Selectors/ColorInput.jsx
import { useId, useState as useState3 } from "react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var FALLBACK = "#000000";
function normalizeHex(text) {
  if (typeof text !== "string") return null;
  let h = text.trim().replace(/^#+/, "");
  if (/^[0-9a-f]{3}$/i.test(h)) h = h.split("").map((c) => c + c).join("");
  return /^[0-9a-f]{6}$/i.test(h) ? "#" + h.toLowerCase() : null;
}
function ColorInput({ value, original, onChange, title, className = "" }) {
  const id = useId();
  const base = normalizeHex(original);
  const [draft, setDraft] = useState3(null);
  const handleChange = (e) => {
    const next = e.target.value.trim();
    setDraft(next);
    if (/^#?[0-9a-f]{6}$/i.test(next)) onChange(normalizeHex(next));
  };
  const commit = () => {
    if (draft === null) return;
    if (draft === "") onChange(null);
    else {
      const hex = normalizeHex(draft);
      if (hex) onChange(hex);
    }
    setDraft(null);
  };
  const revert = () => {
    setDraft(null);
    onChange(base);
  };
  return /* @__PURE__ */ jsxs7("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ jsx8("label", { htmlFor: id, className: "uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center gap-3 bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary focus-within:ring-2 focus-within:ring-primary", children: [
      /* @__PURE__ */ jsxs7("label", { className: "relative w-6 h-6 shrink-0 cursor-pointer", title: "Pick a color", children: [
        /* @__PURE__ */ jsx8(
          "span",
          {
            style: value ? { backgroundColor: value } : void 0,
            className: `block w-full h-full rounded-full ring-1 ring-black/10 ${value ? "" : "bg-stone-300"}`
          }
        ),
        /* @__PURE__ */ jsx8(
          "input",
          {
            type: "color",
            value: value ?? FALLBACK,
            onChange: (e) => {
              setDraft(null);
              onChange(e.target.value);
            },
            className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          }
        )
      ] }),
      /* @__PURE__ */ jsx8(
        "input",
        {
          id,
          type: "text",
          value: draft ?? value ?? "",
          spellCheck: false,
          placeholder: "No color selected",
          onChange: handleChange,
          onBlur: commit,
          onKeyDown: (e) => e.key === "Enter" && commit(),
          className: "flex-1 min-w-0 bg-transparent outline-none font-mono placeholder:text-stone-400"
        }
      ),
      original && /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: revert,
          disabled: value === base,
          title: "Revert to original",
          "aria-label": "Revert to original",
          className: "shrink-0 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default",
          children: "\u21BA"
        }
      )
    ] })
  ] });
}

// src/interactions/Selectors/emoji/IconsSelection.jsx
import { useEffect, useImperativeHandle as useImperativeHandle2, useState as useState4 } from "react";
import { Icon as Icon2 } from "@iconify/react";

// src/interactions/inputs/InputInteractions.jsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function InputTypeBox({
  id,
  type = "text",
  title,
  placeholder,
  className = "",
  defaultValue,
  value,
  error,
  icon,
  iconRight,
  ring = true,
  ...props
}) {
  const ringClasses = error ? "ring-2 ring-rose-400 text-rose-600" : ring ? "group-focus-within:ring-2 group-focus-within:ring-primary" : "";
  return /* @__PURE__ */ jsxs8("div", { className: `w-full group ${className}`, children: [
    title && /* @__PURE__ */ jsx9("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }),
    /* @__PURE__ */ jsxs8("div", { className: `w-full ${ringClasses} bg-stone-200 squircle-full py-2 px-3 flex items-center gap-3`, children: [
      icon,
      /* @__PURE__ */ jsx9(
        "input",
        {
          ...props,
          className: "text-base appearance-none outline-none w-full",
          id,
          value,
          type,
          placeholder,
          defaultValue
        }
      ),
      iconRight
    ] }),
    error && /* @__PURE__ */ jsx9("p", { className: "text-rose-600 text-xs italic mt-1", children: error })
  ] });
}

// src/interactions/Selectors/emoji/EmojiCategories.jsx
import { jsx as jsx10 } from "react/jsx-runtime";
var PATHS = {
  smileys: "M12 2C6.486 2 2 6.486 2 12S6.486 22 12 22 22 17.514 22 12 17.514 2 12 2M12 20C7.589 20 4 16.411 4 12S7.589 4 12 4 20 7.589 20 12 16.411 20 12 20M14.829 14.828A4.1 4.1 0 0 1 13.557 15.686 4 4 0 0 1 8.682 14.236L7.024 15.355A6.1 6.1 0 0 0 8.645 16.975 6 6 0 0 0 10.793 17.878 6 6 0 0 0 13.208 17.878 6 6 0 0 0 15.356 16.975C15.669 16.763 15.968 16.517 16.242 16.244 16.514 15.973 16.762 15.673 16.976 15.355L15.318 14.236A4 4 0 0 1 14.829 14.828M7 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0zM14 10.493a1.493 1.493 0 1 0 2.986 0a1.493 1.493 0 1 0 -2.986 0z",
  people: "M12 2A5 5 0 1 0 17 7 5 5 0 0 0 12 2M12 10A3 3 0 1 1 15 7 3 3 0 0 1 12 10M21 21V20A7 7 0 0 0 14 13H10A7 7 0 0 0 3 20V21H5V20A5 5 0 0 1 10 15H14A5 5 0 0 1 19 20V21Z",
  animals: "M21.88 2.15L20.68 2.55A13.84 13.84 0 0 1 14.27 3.19 11.87 11.87 0 0 0 7.59 4.09 7.23 7.23 0 0 0 3.3 9.5 8.65 8.65 0 0 0 4.77 16.1C4.71 16.31 4.65 16.52 4.6 16.73A22.6 22.6 0 0 0 4 22H6A31 31 0 0 1 6.59 17.68 9.25 9.25 0 0 0 11.11 18.79 11 11 0 0 0 15.39 17.92C23 14.67 22 3.86 22 3.41ZM14.61 16.08C12 17.19 8.88 17 7.13 15.63A13.8 13.8 0 0 1 8.34 12.79 10.2 10.2 0 0 1 9.73 11 9 9 0 0 1 11.54 9.58 12 12 0 0 1 16 8V7A11.4 11.4 0 0 0 10.74 8.08 10.3 10.3 0 0 0 6.62 11.73 15 15 0 0 0 5.62 13.6 7 7 0 0 1 5.24 9.87 5.24 5.24 0 0 1 8.38 5.87 8.9 8.9 0 0 1 12.2 5.03C12.82 5.03 13.43 5.09 14.07 5.14A16.2 16.2 0 0 0 20.07 4.79C20 7.55 19.5 14 14.61 16.08",
  food: "M21 10H3A1 1 0 0 0 2 11 10 10 0 0 0 7 19.66V21A1 1 0 0 0 8 22H16A1 1 0 0 0 17 21V19.66A10 10 0 0 0 22 11 1 1 0 0 0 21 10M15.55 18.16A1 1 0 0 0 15 19.06V20H9V19.06A1 1 0 0 0 8.45 18.16 8 8 0 0 1 4.06 12H19.94A8 8 0 0 1 15.55 18.16M9 9V7.93A4.53 4.53 0 0 0 7.72 4.78 2.5 2.5 0 0 1 7 3V2H5V3A4.53 4.53 0 0 0 6.28 6.17 2.5 2.5 0 0 1 7 7.93V9ZM13 9V7.93A4.53 4.53 0 0 0 11.72 4.78 2.5 2.5 0 0 1 11 3V2H9V3A4.53 4.53 0 0 0 10.28 6.15 2.5 2.5 0 0 1 11 7.93V9ZM17 9V7.93A4.53 4.53 0 0 0 15.72 4.78 2.5 2.5 0 0 1 15 3V2H13V3A4.53 4.53 0 0 0 14.28 6.15 2.5 2.5 0 0 1 15 7.93V9Z",
  travel: "M20.772 10.156L19.404 6.051A2.995 2.995 0 0 0 16.559 4H7.441A2.995 2.995 0 0 0 4.596 6.051L3.228 10.156A2 2 0 0 0 2 12V17C2 17.753 2.423 18.402 3.039 18.743 3.026 18.809 3 18.869 3 18.938V21A1 1 0 0 0 4 22H5A1 1 0 0 0 6 21V19H18V21A1 1 0 0 0 19 22H20A1 1 0 0 0 21 21V18.938C21 18.869 20.974 18.808 20.961 18.743A1.99 1.99 0 0 0 22 17V12C22 11.171 21.492 10.459 20.772 10.156M4 17V12H20L20.002 17ZM7.441 6H16.558C16.989 6 17.371 6.274 17.507 6.684L18.613 10H5.387L6.492 6.684A1 1 0 0 1 7.441 6M5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0zM16 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0z",
  activities: "M19.071 4.929A9.94 9.94 0 0 0 12.001 1.991 9.94 9.94 0 0 0 4.929 4.929C1.03 8.827 1.03 15.172 4.929 19.071A9.94 9.94 0 0 0 12.002 22.009 9.94 9.94 0 0 0 19.072 19.072C22.971 15.174 22.971 8.829 19.071 4.929M12.181 4H11.822C11.883 3.999 11.941 3.991 12.002 3.991S12.12 3.999 12.181 4M18.243 17H16L14.742 19.516A8 8 0 0 1 12.001 20.009 8 8 0 0 1 9.255 19.515L8 17.01H5.765A7.96 7.96 0 0 1 4.142 13.478L6 11 4.784 8.567A8 8 0 0 1 6.343 6.343 8 8 0 0 1 9.563 4.374L12 6 14.438 4.375A8 8 0 0 1 17.658 6.343 8 8 0 0 1 19.216 8.564L18 11 19.858 13.478A7.95 7.95 0 0 1 18.243 17M8.5 11L10 15H14L15.5 11 12 8.5Z",
  objects: "M9 20H15V22H9ZM16.906 13.712C17.936 12.506 19 11.259 19 9 19 5.141 15.859 2 12 2S5 5.141 5 9C5 11.285 6.067 12.528 7.101 13.73 7.459 14.148 7.83 14.581 8.185 15.079 8.329 15.285 8.565 16.075 8.776 17H8V19H16V17H15.226C15.439 16.073 15.676 15.281 15.819 15.075 16.171 14.572 16.545 14.135 16.906 13.712M14.182 13.925C13.748 14.542 13.386 16 13.176 17H10.825C10.616 15.998 10.253 14.537 9.814 13.92A21 21 0 0 0 8.618 12.428C7.644 11.294 7 10.544 7 9 7 6.243 9.243 4 12 4S17 6.243 17 9C17 10.521 16.357 11.274 15.385 12.413 15.012 12.851 14.589 13.346 14.182 13.925",
  symbols: "M12 4.595A5.9 5.9 0 0 0 8.004 3.037 5.94 5.94 0 0 0 3.791 4.795C1.438 7.158 1.439 10.854 3.793 13.207L11.125 20.539C11.295 20.838 11.623 21.031 12 21.031A0.99 0.99 0 0 0 12.792 20.622L20.207 13.207C22.561 10.853 22.561 7.158 20.205 4.791A5.94 5.94 0 0 0 15.996 3.037 5.9 5.9 0 0 0 12 4.595M18.791 6.205C20.354 7.776 20.355 10.23 18.793 11.793L12 18.586 5.207 11.793C3.645 10.23 3.646 7.776 5.205 6.209 5.965 5.453 6.959 5.037 8.004 5.037S10.039 5.453 10.793 6.207L11.293 6.707A1 1 0 0 0 12.707 6.707L13.207 6.207C14.719 4.698 17.281 4.702 18.791 6.205",
  flags: "M19 4H6V2H4V20H3V22H7V20H6V15H19A1 1 0 0 0 20 14V5A1 1 0 0 0 19 4M18 13H6V6H18Z"
};
function CategoryIcon({ id, className = "w-6 h-6" }) {
  return /* @__PURE__ */ jsx10("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsx10("path", { d: PATHS[id] }) });
}

// src/interactions/Selectors/emoji/IconsSelection.jsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var isEmpty = (v) => v === null || v === void 0 || v === "none";
var TABS = [
  ["emoji", "Emoji"],
  ["icon", "Icons"]
];
function IconSelector({ value = "none", original, onChange, title, className = "" }) {
  const [menu, setMenu] = useState4(null);
  const hasOriginal = !isEmpty(original);
  const pick = (v) => {
    onChange(v);
    setMenu(null);
  };
  return /* @__PURE__ */ jsxs9("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ jsx11("p", { className: "uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs9(
      "div",
      {
        onClick: () => setMenu(menu === null ? "emoji" : null),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          isEmpty(value) ? /* @__PURE__ */ jsx11("p", { className: "text-stone-400", children: "No icon selected" }) : /* @__PURE__ */ jsx11(IconToDisplay, { className: "h-full", icon: value }),
          /* @__PURE__ */ jsxs9("div", { className: "flex items-center gap-1", children: [
            !isEmpty(value) && /* @__PURE__ */ jsx11(
              "button",
              {
                type: "button",
                className: "hover:bg-stone-300 text-sm px-2 squircle-2xl",
                onClick: (e) => {
                  e.stopPropagation();
                  onChange("none");
                },
                children: "Clear"
              }
            ),
            hasOriginal && /* @__PURE__ */ jsx11(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  setMenu(null);
                  onChange(original);
                },
                disabled: value === original,
                title: "Revert to original",
                "aria-label": "Revert to original",
                className: "shrink-0 px-1 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default",
                children: "\u21BA"
              }
            )
          ] })
        ]
      }
    ),
    menu && /* @__PURE__ */ jsxs9(Dropdown, { className: "border border-stone-300", onClose: () => setMenu(null), children: [
      /* @__PURE__ */ jsx11("div", { className: "flex border-b border-stone-300 px-2 pt-0.5 bg-stone-100 gap-2", children: TABS.map(([id, label]) => /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          onClick: () => setMenu(id),
          className: `cursor-pointer font-mono text-sm font-semibold rounded-t-md last:border-r-0 py-1 px-2 ${menu === id ? "bg-stone-200" : "hover:bg-stone-200/40"}`,
          children: label
        },
        id
      )) }),
      menu === "emoji" && /* @__PURE__ */ jsx11(EmojiPicker, { setSelected: (e) => pick("emoji:" + e) }),
      menu === "icon" && /* @__PURE__ */ jsx11(IconPicker, { setSelected: (i) => pick("icon:" + i) })
    ] })
  ] });
}
function EmojiPicker({ setSelected }) {
  const [db, setDb] = useState4(null);
  const [cat, setCat] = useState4(0);
  const [search, setSearch] = useState4("");
  useEffect(() => {
    import("./EmojiDatabase-PW44NJPF.mjs").then(setDb);
  }, []);
  const searching = search.trim() !== "";
  const results = !db ? [] : searching ? db.searchEmoji(search) : db.emojiByCategory(cat);
  return /* @__PURE__ */ jsxs9("div", { className: "", children: [
    /* @__PURE__ */ jsxs9("div", { className: "flex flex-col bg-stone-200", children: [
      /* @__PURE__ */ jsx11(
        InputTypeBox,
        {
          className: "px-1 py-1",
          icon: /* @__PURE__ */ jsx11(SearchIcon, {}),
          ring: false,
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search..."
        }
      ),
      !searching && db && /* @__PURE__ */ jsx11("div", { className: "flex gap-1 px-2 border-t border-t-stone-300 overflow-x-auto ", children: db.CATEGORIES.map((c, i) => /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          title: c.name,
          onClick: () => setCat(i),
          className: `text-xl rounded-lg p-1 shrink-0 text-stone-400 ${cat === i ? "text-stone-800" : ""}`,
          children: /* @__PURE__ */ jsx11(CategoryIcon, { id: c.id })
        },
        c.name
      )) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2", children: [
      results.map(({ e }) => /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          onClick: () => setSelected(e),
          className: "text-2xl rounded-lg hover:bg-stone-300 p-1",
          children: e
        },
        e
      )),
      db && searching && !results.length && /* @__PURE__ */ jsx11("p", { className: "col-span-full text-sm text-stone-500 py-2", children: "No emoji found" })
    ] })
  ] });
}
function IconPicker({ setSelected }) {
  const [search, setSearch] = useState4("");
  const [icons, setIcons] = useState4([]);
  const [loading, setLoading] = useState4(false);
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
          { signal: controller.signal }
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
  return /* @__PURE__ */ jsxs9("div", { className: "", children: [
    /* @__PURE__ */ jsx11("div", { className: "flex flex-col bg-stone-200", children: /* @__PURE__ */ jsx11(
      InputTypeBox,
      {
        className: "px-1 py-1",
        icon: /* @__PURE__ */ jsx11(SearchIcon, {}),
        ring: false,
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search..."
      }
    ) }),
    /* @__PURE__ */ jsxs9("div", { className: "grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2", children: [
      !search && /* @__PURE__ */ jsx11("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "Search to get any icons" }),
      icons.map((icon) => /* @__PURE__ */ jsx11(
        "button",
        {
          type: "button",
          onClick: () => setSelected(icon),
          className: "text-2xl rounded-lg hover:bg-stone-300 p-1 flex items-center justify-center",
          title: icon,
          children: /* @__PURE__ */ jsx11(Icon2, { icon, width: 24, height: 24 })
        },
        icon
      )),
      search.trim() && !loading && !icons.length && /* @__PURE__ */ jsx11("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "No icons found" })
    ] })
  ] });
}

// src/interactions/DraggableContent.jsx
import { Fragment as Fragment2, useEffect as useEffect2, useRef as useRef3 } from "react";
import Sortable from "sortablejs";
import { jsx as jsx12 } from "react/jsx-runtime";
var defaultRender = (item) => /* @__PURE__ */ jsx12(Badge, { isGrabbable: true, color: "lime", name: item.title });
var defaultKey = (item) => item.id;
function DraggableContent({ value, onChange, renderItem = defaultRender, getKey = defaultKey, className = "flex gap-1 flex-wrap" }) {
  const listRef = useRef3(null);
  const onChangeRef = useRef3(onChange);
  const valueRef = useRef3(value);
  onChangeRef.current = onChange;
  valueRef.current = value;
  useEffect2(() => {
    const sortable = Sortable.create(listRef.current, {
      animation: 150,
      onEnd: ({ from, item, oldIndex, newIndex }) => {
        if (oldIndex === newIndex) return;
        from.removeChild(item);
        from.insertBefore(item, from.children[oldIndex] ?? null);
        const next = [...valueRef.current];
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]);
        onChangeRef.current(next);
      }
    });
    return () => sortable.destroy();
  }, []);
  return /* @__PURE__ */ jsx12("div", { ref: listRef, className, children: value.map((item, index) => /* @__PURE__ */ jsx12(Fragment2, { children: renderItem(item, index) }, getKey(item, index))) });
}

// src/interactions/inputs/ListUserInput.jsx
import { useId as useId2, useState as useState5 } from "react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var itemRender = (item, index, remove) => /* @__PURE__ */ jsxs10("div", { className: "squircle-2xl px-2 py-0.5 flex items-center justify-center gap-1 bg-stone-200", children: [
  /* @__PURE__ */ jsx13(
    "button",
    {
      type: "button",
      onClick: () => remove(index),
      "aria-label": `Remove ${item}`,
      className: "text-sm text-stone-800 hover:text-red-400",
      children: /* @__PURE__ */ jsx13(TrashIcon, {})
    }
  ),
  item
] }, `${item}-${index}`);
function ListInput({ value = [], onChange, title, className = "", draggable = true }) {
  const id = useId2();
  const [text, setText] = useState5("");
  const add = () => {
    const item = text.trim();
    if (item === "") return;
    onChange([...value, item]);
    setText("");
  };
  const remove = (index) => onChange(value.filter((_, i) => i !== index));
  return /* @__PURE__ */ jsxs10("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ jsx13("label", { htmlFor: id, className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs10("div", { className: "bg-stone-100 squircle-2xl", children: [
      /* @__PURE__ */ jsxs10("div", { className: "px-5 py-2 bg-stone-200 flex justify-between gap-2 squircle-t-2xl", children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx13(TitleIcon, { className: "text-xl" }),
          /* @__PURE__ */ jsx13(
            "input",
            {
              id,
              value: text,
              placeholder: "Type..",
              onChange: (e) => setText(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  add();
                }
              },
              className: "outline-none bg-transparent flex-1 min-w-0"
            }
          )
        ] }),
        /* @__PURE__ */ jsx13("button", { type: "button", onClick: add, className: "hover:bg-stone-300 text-sm px-2 squircle-2xl", children: "Add" })
      ] }),
      /* @__PURE__ */ jsxs10("div", { className: "flex flex-wrap select-none gap-2 p-2", children: [
        value.length === 0 && /* @__PURE__ */ jsx13("p", { className: "text-xs font-semibold text-stone-700 px-2", children: "List is empty" }),
        draggable ? /* @__PURE__ */ jsx13(
          DraggableContent,
          {
            value,
            className: "cursor-grabbing flex gap-1 flex-wrap",
            onChange,
            renderItem: (item, index) => itemRender(item, index, remove),
            getKey: (i, index) => `${i}-${index}`
          }
        ) : value.map((item, index) => itemRender(item, index, remove))
      ] })
    ] })
  ] });
}

// src/interactions/Selectors/SelectFromList.jsx
import { useState as useState6 } from "react";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function SelectFromList({ elementList = {}, selected, onChange, title }) {
  const [menu, setMenu] = useState6(false);
  return /* @__PURE__ */ jsxs11("div", { className: `relative`, children: [
    /* @__PURE__ */ jsx14("p", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs11(
      "div",
      {
        onClick: () => setMenu(!menu),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          selected === null || selected === void 0 || !elementList[selected] ? /* @__PURE__ */ jsx14("p", { className: "text-stone-400", children: "No element selected" }) : elementList[selected],
          /* @__PURE__ */ jsx14(DropDownArrowIcon, { className: `h-full text-3xl transition duration-200 ${menu && "-rotate-180"}` })
        ]
      }
    ),
    menu && /* @__PURE__ */ jsxs11(Dropdown, { onClose: () => setMenu(false), className: "p-2", children: [
      /* @__PURE__ */ jsx14("p", { className: "font-mono text-sm font-bold", children: "Select" }),
      /* @__PURE__ */ jsx14("div", { className: "gap-1 flex flex-col", children: Object.entries(elementList).map(
        ([key, value]) => /* @__PURE__ */ jsx14("div", { onClick: () => {
          onChange(key);
          setMenu(false);
        }, className: `cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`, children: value }, key)
      ) })
    ] })
  ] });
}
var filterEntries = (entries, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  return entries.filter(
    ([key, value]) => key.toLowerCase().includes(q) || typeof value === "string" && value.toLowerCase().includes(q)
  );
};
function SelectFromListWithSearch({ elementList = {}, selected, onChange, title }) {
  const [menu, setMenu] = useState6(false);
  const [search, setSearch] = useState6("");
  const filtered = filterEntries(Object.entries(elementList), search);
  return /* @__PURE__ */ jsxs11("div", { className: `relative`, children: [
    /* @__PURE__ */ jsx14("p", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ jsxs11(
      "div",
      {
        onClick: () => setMenu(!menu),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          selected === null || selected === void 0 || !elementList[selected] ? /* @__PURE__ */ jsx14("p", { className: "text-stone-400", children: "No element selected" }) : elementList[selected],
          /* @__PURE__ */ jsx14(DropDownArrowIcon, { className: `h-full text-3xl transition duration-200 ${menu && "-rotate-180"}` })
        ]
      }
    ),
    menu && /* @__PURE__ */ jsxs11(Dropdown, { onClose: () => setMenu(false), className: "", children: [
      /* @__PURE__ */ jsx14(
        InputTypeBox,
        {
          className: "px-1 py-1",
          icon: /* @__PURE__ */ jsx14(SearchIcon, {}),
          ring: false,
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search..."
        }
      ),
      /* @__PURE__ */ jsxs11("div", { className: "px-2 pb-2 pt-1 border-t border-t-stone-300 max-h-65 overflow-y-auto", children: [
        /* @__PURE__ */ jsx14("p", { className: "font-mono text-sm font-bold", children: "Select" }),
        /* @__PURE__ */ jsxs11("div", { className: "gap-1 flex flex-col", children: [
          filtered.map(
            ([key, value]) => /* @__PURE__ */ jsx14("div", { onClick: () => {
              onChange(key);
              setMenu(false);
            }, className: `cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`, children: value }, key)
          ),
          filtered.length <= 0 && /* @__PURE__ */ jsx14("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "Not found" })
        ] })
      ] })
    ] })
  ] });
}

// src/interactions/inputs/PinBoxInput.jsx
import { useRef as useRef4, useEffect as useEffect3 } from "react";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var PATTERNS = {
  alpha: /^[a-zA-Z]$/,
  numeric: /^[0-9]$/,
  both: /^[a-zA-Z0-9]$/
};
function PinBoxInput({ id, title, value = "", onChange, length = 4, type = "both", disabled = false, error = void 0 }) {
  const refs = useRef4([]);
  const history = useRef4({ past: [], future: [] });
  const pattern = PATTERNS[type] ?? PATTERNS.both;
  const focusBox = (i) => {
    var _a;
    return (_a = refs.current[Math.max(0, Math.min(i, length - 1))]) == null ? void 0 : _a.focus();
  };
  const update = (next) => {
    if (next === value) return;
    history.current.past.push(value);
    history.current.future = [];
    onChange == null ? void 0 : onChange(next);
  };
  const undo = () => {
    const prev = history.current.past.pop();
    if (prev === void 0) return;
    history.current.future.push(value);
    onChange == null ? void 0 : onChange(prev);
    focusBox(prev.length);
  };
  const redo = () => {
    const next = history.current.future.pop();
    if (next === void 0) return;
    history.current.past.push(value);
    onChange == null ? void 0 : onChange(next);
    focusBox(next.length);
  };
  const handleChange = (i, e) => {
    const inputType = e.nativeEvent.inputType;
    if (inputType === "historyUndo") return undo();
    if (inputType === "historyRedo") return redo();
    const old = value[i] ?? "";
    let raw = e.target.value;
    if (old && raw.length > 1) raw = raw.replace(old, "");
    const chars = [...raw].filter((c) => pattern.test(c));
    if (chars.length === 0) return;
    const insert = chars.join("");
    const next = (value.slice(0, i) + insert + value.slice(i + (old ? 1 : 0))).slice(0, length);
    update(next);
    focusBox(i + insert.length);
  };
  const handleKeyDown = (i, e) => {
    const mod = e.ctrlKey || e.metaKey;
    const k = e.key.toLowerCase();
    if (mod && k === "z") {
      e.preventDefault();
      return e.shiftKey ? redo() : undo();
    }
    if (mod && k === "y") {
      e.preventDefault();
      return redo();
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      if (value[i]) {
        update(value.slice(0, i) + value.slice(i + 1));
      } else if (i > 0) {
        update(value.slice(0, i - 1) + value.slice(i));
        focusBox(i - 1);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusBox(i - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      focusBox(i + 1);
    }
  };
  const handlePaste = (i, e) => {
    e.preventDefault();
    const pasted = [...e.clipboardData.getData("text")].filter((c) => pattern.test(c)).join("");
    if (!pasted) return;
    const next = (value.slice(0, i) + pasted).slice(0, length);
    update(next);
    focusBox(next.length);
  };
  return /* @__PURE__ */ jsxs12("div", { className: "w-full", children: [
    title && /* @__PURE__ */ jsx15("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: `${id}-0`, children: title }),
    /* @__PURE__ */ jsx15("div", { className: "flex gap-2", children: Array.from({ length }, (_, i) => /* @__PURE__ */ jsx15(
      "input",
      {
        id: `${id}-${i}`,
        ref: (el) => refs.current[i] = el,
        type: "text",
        inputMode: type === "numeric" ? "numeric" : "text",
        autoComplete: i === 0 ? "one-time-code" : "off",
        autoCapitalize: "off",
        autoCorrect: "off",
        value: value[i] ?? "",
        disabled,
        onChange: (e) => handleChange(i, e),
        onKeyDown: (e) => handleKeyDown(i, e),
        onPaste: (e) => handlePaste(i, e),
        className: `w-10 h-10 text-center select-none text-stone-700 font-semibold outline-none caret-transparent bg-stone-200 rounded-xl
                        ${error ? "ring-2 ring-rose-600 text-rose-600" : "focus:ring-2 focus:ring-primary"}
                        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
      },
      i
    )) }),
    error && /* @__PURE__ */ jsx15("p", { className: "text-rose-600 text-xs italic mt-1", children: error })
  ] });
}

// src/interactions/inputs/PasswordTypeBox.jsx
import { useState as useState7 } from "react";
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
var DEFAULT_PASSWORD_RULES = {
  minLength: 8,
  uppercase: true,
  lowercase: true,
  number: true,
  special: true,
  noSpaces: true
};
function buildChecks(r) {
  return [
    r.minLength && { label: `At least ${r.minLength} characters`, test: (v) => v.length >= r.minLength },
    r.uppercase && { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
    r.lowercase && { label: "One lowercase letter", test: (v) => /[a-z]/.test(v) },
    r.number && { label: "One number", test: (v) => /\d/.test(v) },
    r.special && { label: "One special character", test: (v) => /[^A-Za-z0-9\s]/.test(v) },
    r.noSpaces && { label: "No spaces", test: (v) => !/\s/.test(v) }
  ].filter(Boolean);
}
function getChecks(rules, match) {
  if (match !== void 0) return [{ label: "Passwords match", test: (v) => v === match }];
  if (rules === false) return [];
  return buildChecks({ ...DEFAULT_PASSWORD_RULES, ...rules });
}
function isPasswordValid(value, { rules, match } = {}) {
  return getChecks(rules, match).every((c) => c.test(value));
}
function PasswordInputType({ rules, match, value, defaultValue, onChange, ...props }) {
  const [visible, setVisible] = useState7(false);
  const [internal, setInternal] = useState7(defaultValue ?? "");
  const current = value ?? internal;
  const checks = getChecks(rules, match);
  const handleChange = (e) => {
    setInternal(e.target.value);
    onChange == null ? void 0 : onChange(e.target.value);
  };
  const toggle = /* @__PURE__ */ jsx16(
    "button",
    {
      type: "button",
      onClick: () => setVisible((v) => !v),
      "aria-label": visible ? "Hide password" : "Show password",
      children: visible ? /* @__PURE__ */ jsx16(EyeOffIcon, {}) : /* @__PURE__ */ jsx16(EyeIcon, {})
    }
  );
  return /* @__PURE__ */ jsxs13("div", { children: [
    /* @__PURE__ */ jsx16(
      InputTypeBox,
      {
        ...props,
        type: visible ? "text" : "password",
        iconRight: toggle,
        value: current,
        onChange: handleChange
      }
    ),
    checks.length > 0 && current && /* @__PURE__ */ jsx16("ul", { className: "mt-2 space-y-1 text-xs", children: checks.map(({ label, test }) => {
      const ok = test(current);
      return /* @__PURE__ */ jsxs13("li", { className: `flex items-center gap-1 ${ok ? "text-emerald-600" : "text-slate-500"}`, children: [
        ok ? /* @__PURE__ */ jsx16(TickIcon, {}) : /* @__PURE__ */ jsx16(CloseIcon, {}),
        " ",
        label
      ] }, label);
    }) })
  ] });
}

// src/interactions/displays/CodeBlock.jsx
import { useEffect as useEffect4, useState as useState8 } from "react";
import hljs from "highlight.js/lib/core";
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
var LOADERS = {
  bash: () => import("highlight.js/lib/languages/bash"),
  c: () => import("highlight.js/lib/languages/c"),
  cpp: () => import("highlight.js/lib/languages/cpp"),
  csharp: () => import("highlight.js/lib/languages/csharp"),
  css: () => import("highlight.js/lib/languages/css"),
  go: () => import("highlight.js/lib/languages/go"),
  java: () => import("highlight.js/lib/languages/java"),
  javascript: () => import("highlight.js/lib/languages/javascript"),
  json: () => import("highlight.js/lib/languages/json"),
  kotlin: () => import("highlight.js/lib/languages/kotlin"),
  markdown: () => import("highlight.js/lib/languages/markdown"),
  php: () => import("highlight.js/lib/languages/php"),
  python: () => import("highlight.js/lib/languages/python"),
  ruby: () => import("highlight.js/lib/languages/ruby"),
  rust: () => import("highlight.js/lib/languages/rust"),
  sql: () => import("highlight.js/lib/languages/sql"),
  swift: () => import("highlight.js/lib/languages/swift"),
  typescript: () => import("highlight.js/lib/languages/typescript"),
  xml: () => import("highlight.js/lib/languages/xml"),
  // also HTML
  yaml: () => import("highlight.js/lib/languages/yaml")
};
var ALIASES = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  html: "xml",
  "c++": "cpp",
  cs: "csharp",
  rb: "ruby",
  rs: "rust",
  md: "markdown"
};
function CodeBox({ code, language = "plaintext", title, className = "", noBackground = false, prompt = false }) {
  const [result, setResult] = useState8({});
  const [copied, setCopied] = useState8(false);
  const name = ALIASES[language] ?? language;
  const promptText = prompt === void 0 ? name === "bash" ? "$" : "" : prompt || "";
  useEffect4(() => {
    const name2 = ALIASES[language] ?? language;
    const load = LOADERS[name2];
    if (!load) return;
    let cancelled = false;
    (async () => {
      if (!hljs.getLanguage(name2)) {
        const mod = await load();
        if (!hljs.getLanguage(name2)) hljs.registerLanguage(name2, mod.default);
      }
      if (!cancelled) setResult({ code, language, html: hljs.highlight(code, { language: name2 }).value });
    })().catch(() => {
    });
    return () => {
      cancelled = true;
    };
  }, [code, language]);
  const html = result.code === code && result.language === language ? result.html : null;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };
  const codeClasses = `hljs block ${noBackground ? "p-2" : "p-4"} pr-12 ${title ? "pt-2" : ""} ${promptText ? "before:content-[attr(data-prompt)] before:mr-2 before:select-none before:text-stone-400" : ""}`;
  return /* @__PURE__ */ jsxs14("div", { className: `relative w-full ${noBackground ? "" : "bg-stone-200"} squircle-xl`, children: [
    title && /* @__PURE__ */ jsx17("div", { className: `${noBackground ? "px-2 pt-1 pr-10" : "px-4 pt-3 pr-12"}  truncate uppercase tracking-wide squircle-t-2xl text-slate-600 text-xs font-bold`, children: title }),
    /* @__PURE__ */ jsx17(
      "button",
      {
        type: "button",
        onClick: copy,
        "aria-label": copied ? "Copied" : "Copy code",
        className: "absolute top-2 right-2 z-10 p-1.5 squircle-2xl text-stone-600 opacity-70 hover:opacity-100 hover:bg-stone-300",
        children: copied ? /* @__PURE__ */ jsx17(TickIcon, {}) : /* @__PURE__ */ jsx17(CopyIcon, {})
      }
    ),
    /* @__PURE__ */ jsx17("pre", { className: `text-sm overflow-x-auto ${className}`, children: html ? /* @__PURE__ */ jsx17("code", { className: codeClasses, "data-prompt": promptText, dangerouslySetInnerHTML: { __html: html } }) : /* @__PURE__ */ jsx17("code", { className: codeClasses, "data-prompt": promptText, children: code }) })
  ] });
}
function InlineCode({ children, className = "" }) {
  return /* @__PURE__ */ jsx17("code", { className: `bg-stone-200 squircle-2xl px-1.5 py-0.5 text-[0.875em] text-[var(--code-fg)] break-words ${className}`, children });
}

// src/menus/Popups.jsx
import { useEffect as useEffect5 } from "react";
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
function BasicPopup({ children, actions, onBack, onClose }) {
  useEffect5(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsx18(
    "section",
    {
      className: "fixed inset-0 z-100 flex justify-center items-start p-2 pt-[15vh] 2xl:pt-[25vh] bg-stone-800/15",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs15(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: "relative flex flex-col justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 2xl:w-1/4 min-h-40 max-h-[70dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl",
          children: [
            onBack && /* @__PURE__ */ jsx18("button", { type: "button", "aria-label": "Back", onClick: onBack, className: "absolute left-5 top-4", children: /* @__PURE__ */ jsx18(ArrowHeadIcon, { className: "rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            onClose && /* @__PURE__ */ jsx18("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-5 top-4", children: /* @__PURE__ */ jsx18(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            /* @__PURE__ */ jsx18("div", { className: "p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0", children }),
            actions && /* @__PURE__ */ jsx18("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
          ]
        }
      )
    }
  );
}
function LargeBasicPopup({ children, actions, onBack, onClose, maxH = "66dvh" }) {
  useEffect5(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsx18(
    "section",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-2 bg-stone-800/10 backdrop-blur-[2px]",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs15(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: `relative flex flex-col w-full 2xl:w-1/2 xl:w-2/3 min-h-40 ${onBack || onClose ? "pt-4" : ""} overflow-hidden border border-stone-300 bg-stone-50 rounded-3xl corner-squircle`,
          children: [
            onBack && /* @__PURE__ */ jsx18("button", { type: "button", "aria-label": "Back", onClick: onBack, className: "absolute left-3 top-3", children: /* @__PURE__ */ jsx18(ArrowHeadIcon, { className: "rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            onClose && /* @__PURE__ */ jsx18("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-3 top-3", children: /* @__PURE__ */ jsx18(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            /* @__PURE__ */ jsx18("div", { className: "p-6 flex flex-col gap-1 break-words overflow-y-auto", style: { maxHeight: maxH }, children }),
            actions && /* @__PURE__ */ jsx18("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
          ]
        }
      )
    }
  );
}
function ImagePopup({ children, image, actions, onClose }) {
  useEffect5(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ jsx18(
    "section",
    {
      className: "fixed inset-0 z-100 flex justify-center items-center p-2 bg-stone-800/15",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs15(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: "relative flex w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-40 max-h-[80dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl",
          children: [
            onClose && /* @__PURE__ */ jsx18("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-5 top-4", children: /* @__PURE__ */ jsx18(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            image && /* @__PURE__ */ jsx18("div", { className: "hidden lg:block shrink-0 w-72 xl:w-80 p-4", children: /* @__PURE__ */ jsx18("div", { className: "relative h-full w-full overflow-hidden rounded-2xl [&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full [&>*]:object-cover", children: image }) }),
            /* @__PURE__ */ jsxs15("div", { className: "flex flex-col flex-1 min-w-0 min-h-0", children: [
              /* @__PURE__ */ jsx18("div", { className: "p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0 flex-1", children }),
              actions && /* @__PURE__ */ jsx18("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
            ] })
          ]
        }
      )
    }
  );
}

// src/menus/Tabs.jsx
import { Children, isValidElement, useId as useId3, useState as useState9 } from "react";
import { Fragment as Fragment3, jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
function TabItem({ children }) {
  return /* @__PURE__ */ jsx19(Fragment3, { children });
}
function Tabs({ value, defaultId, onChange, actions, className = "", children, border = true }) {
  const baseId = useId3();
  const items = Children.toArray(children).filter((c) => isValidElement(c) && c.props.id);
  const [internal, setInternal] = useState9(defaultId);
  const active = items.find((i) => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;
  const select = (id) => {
    setInternal(id);
    onChange == null ? void 0 : onChange(id);
  };
  return /* @__PURE__ */ jsxs16("div", { className: `w-full ${border ? "border border-stone-200 squircle-2xl" : ""}`, children: [
    /* @__PURE__ */ jsxs16("div", { className: `flex items-center select-none ${border ? "bg-stone-100 squircle-t-2xl" : ""} justify-between gap-3 border-b border-stone-300 px-4`, children: [
      /* @__PURE__ */ jsx19("div", { role: "tablist", className: "flex gap-4", children: items.map(({ props: { id, title } }) => {
        const on = id === activeId;
        return /* @__PURE__ */ jsx19("button", { type: "button", role: "tab", id: `${baseId}-tab-${id}`, "aria-selected": on, "aria-controls": `${baseId}-panel-${id}`, onClick: () => select(id), className: `-mb-px whitespace-nowrap border-b-2 py-2.5 text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`, children: title }, id);
      }) }),
      actions
    ] }),
    items.map((item) => {
      const id = item.props.id;
      return /* @__PURE__ */ jsx19("div", { role: "tabpanel", id: `${baseId}-panel-${id}`, "aria-labelledby": `${baseId}-tab-${id}`, className: `p-3 ${id === activeId ? "" : "hidden"} ${className}`, children: item }, id);
    })
  ] });
}
function VerticalTabs({
  value,
  defaultId,
  onChange,
  actions,
  className = "",
  tabListClassName = "w-44",
  children,
  border = true,
  fullH = true
}) {
  const baseId = useId3();
  const items = Children.toArray(children).filter((c) => isValidElement(c) && c.props.id);
  const [internal, setInternal] = useState9(defaultId);
  const active = items.find((i) => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;
  const select = (id) => {
    setInternal(id);
    onChange == null ? void 0 : onChange(id);
  };
  return /* @__PURE__ */ jsxs16("div", { className: `grid grid-cols-6 w-full ${fullH ? "h-full" : ""} ${border ? "border border-stone-200 squircle-2xl" : ""}`, children: [
    /* @__PURE__ */ jsxs16("div", { className: `md:col-span-1 col-span-2 flex flex-col select-none justify-between gap-3 border-r border-stone-300 py-2 ${border ? "bg-stone-100 squircle-l-2xl" : ""}`, children: [
      /* @__PURE__ */ jsx19("div", { role: "tablist", className: "flex flex-col", children: items.map(({ props: { id, title } }) => {
        const on = id === activeId;
        return /* @__PURE__ */ jsx19("button", { type: "button", role: "tab", id: `${baseId}-tab-${id}`, "aria-selected": on, "aria-controls": `${baseId}-panel-${id}`, onClick: () => select(id), className: `-mr-px border-r-2 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`, children: title }, id);
      }) }),
      actions && /* @__PURE__ */ jsx19("div", { className: "px-4", children: actions })
    ] }),
    /* @__PURE__ */ jsx19("div", { className: "md:col-span-5 col-span-4 grid min-h-0 overflow-y-auto", children: items.map((item) => {
      const id = item.props.id;
      const isActive = id === activeId;
      return /* @__PURE__ */ jsx19(
        "div",
        {
          role: "tabpanel",
          id: `${baseId}-panel-${id}`,
          "aria-labelledby": `${baseId}-tab-${id}`,
          inert: !isActive,
          className: `col-start-1 row-start-1 p-3 ${isActive ? "" : "opacity-0 pointer-events-none"} ${className}`,
          children: item
        },
        id
      );
    }) })
  ] });
}
export {
  Badge,
  BasicPopup,
  CheckBox,
  CodeBox,
  ColorInput,
  DraggableContent,
  Dropdown,
  IconSelector,
  IconToDisplay,
  ImagePopup,
  InlineCode,
  InputTypeBox,
  LargeBasicPopup,
  ListInput,
  Options,
  PasswordInputType,
  PinBoxInput,
  PrimaryButton,
  RedButton,
  SecondaryButton,
  SelectFromList,
  SelectFromListWithSearch,
  Switch,
  TabItem,
  Tabs,
  TextWriter,
  VerticalTabs,
  displayError,
  displayToast,
  isPasswordValid
};
//# sourceMappingURL=index.mjs.map