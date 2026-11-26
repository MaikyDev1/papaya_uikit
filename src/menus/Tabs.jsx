"use client";

import {Children, isValidElement, useId, useState} from "react";

/**
 * A single tab. It only carries `id`, `title` and content; <Tabs> reads those
 * props and decides what to render. Must be a direct child of <Tabs>.
 *
 * @param {Object} props
 * @param {string} props.id Unique id within the parent Tabs.
 * @param {string} props.title Text shown on the tab button.
 * @param {import("react").ReactNode} props.children Content shown while the tab is active.
 */
export function TabItem({children}) {
  return <>{children}</>;
}

/**
 * Tab bar plus the active panel. Only the active TabItem is mounted.
 * The tab bar has `px-4`, so give panel content the same padding if you want them aligned.
 *
 * @param {Object} props
 * @param {string} [props.value] Active tab id (controlled). Overrides internal state.
 * @param {string} [props.defaultId] Initially active tab id (uncontrolled). Defaults to the first tab.
 * @param {(id: string) => void} [props.onChange] Called with the new tab id when the user picks a tab.
 * @param {import("react").ReactNode} [props.actions] Content shown at the right end of the tab bar.
 * @param {string} [props.className=""] Extra classes for the outer wrapper.
 * @param {import("react").ReactNode} props.children <TabItem> elements.
 * @param {boolean} [props.border=true] Create a nice border and color on the element
 */
export function Tabs({value, defaultId, onChange, actions, className = "", children, border = true}) {
  const baseId = useId();
  const items = Children.toArray(children).filter(c => isValidElement(c) && c.props.id);
  const [internal, setInternal] = useState(defaultId);

  const active = items.find(i => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;

  const select = (id) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={`w-full ${border ? "border border-stone-200 squircle-2xl" : ""}`}>
      <div className={`flex items-center select-none ${border ? "bg-stone-100 squircle-t-2xl" : ""} justify-between gap-3 border-b border-stone-300 px-4`}>
        <div role="tablist" className="flex gap-4">
          {items.map(({props: {id, title}}) => {
            const on = id === activeId;
            return (
              <button key={id} type="button" role="tab" id={`${baseId}-tab-${id}`} aria-selected={on} aria-controls={`${baseId}-panel-${id}`} onClick={() => select(id)} className={`-mb-px whitespace-nowrap border-b-2 py-2.5 text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`}>
                {title}
              </button>
            );
          })}
        </div>
        {actions}
      </div>
      {items.map((item) => {
        const id = item.props.id;
        return (
          <div key={id} role="tabpanel" id={`${baseId}-panel-${id}`} aria-labelledby={`${baseId}-tab-${id}`} className={`p-3 ${id === activeId ? "" : "hidden"} ${className}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Vertical tab list on the left, panels on the right. All TabItems are mounted and stacked in one grid cell,
 * so the container is always as tall as the tallest panel (or the tab list, if that's taller).
 * The tab list has `py-2`, so give panel content matching vertical padding if you want them aligned.
 *
 * @param {Object} props
 * @param {string} [props.value] Active tab id (controlled). Overrides internal state.
 * @param {string} [props.defaultId] Initially active tab id (uncontrolled). Defaults to the first tab.
 * @param {(id: string) => void} [props.onChange] Called with the new tab id when the user picks a tab.
 * @param {import("react").ReactNode} [props.actions] Content shown at the bottom of the tab list.
 * @param {string} [props.className=""] Extra classes for each panel.
 * @param {string} [props.tabListClassName="w-44"] Classes for the tab list column (use this to set its width).
 * @param {import("react").ReactNode} props.children <TabItem> elements.
 * @param {boolean} [props.border=true] Create a nice border and color on the element
 * @param {boolean} [props.fullH=true] Force the container to get full H
 */
export function VerticalTabs({value, defaultId, onChange, actions, className = "", tabListClassName = "w-44",
                               children, border = true, fullH = true}) {
  const baseId = useId();
  const items = Children.toArray(children).filter(c => isValidElement(c) && c.props.id);
  const [internal, setInternal] = useState(defaultId);

  const active = items.find(i => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;

  const select = (id) => {
    setInternal(id);
    onChange?.(id);
  };

  return (
    <div className={`grid grid-cols-6 w-full ${fullH ? "h-full" : ""} ${border ? "border border-stone-200 squircle-2xl" : ""}`}>
      <div className={`md:col-span-1 col-span-2 flex flex-col select-none justify-between gap-3 border-r border-stone-300 py-2 ${border ? "bg-stone-100 squircle-l-2xl" : ""}`}>
        <div role="tablist" className="flex flex-col">
          {items.map(({props: {id, title}}) => {
            const on = id === activeId;
            return (
              <button key={id} type="button" role="tab" id={`${baseId}-tab-${id}`} aria-selected={on} aria-controls={`${baseId}-panel-${id}`} onClick={() => select(id)} className={`-mr-px border-r-2 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`}>
                {title}
              </button>
            );
          })}
        </div>
        {actions && <div className="px-4">{actions}</div>}
      </div>
      <div className="md:col-span-5 col-span-4 grid min-h-0 overflow-y-auto">
        {items.map((item) => {
          const id = item.props.id;
          const isActive = id === activeId;
          return (
            <div
              key={id}
              role="tabpanel"
              id={`${baseId}-panel-${id}`}
              aria-labelledby={`${baseId}-tab-${id}`}
              inert={!isActive}
              className={`col-start-1 row-start-1 p-3 ${isActive ? "" : "opacity-0 pointer-events-none"} ${className}`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}