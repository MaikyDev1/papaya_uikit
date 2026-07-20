import {FilesIcon, MessagesIcon} from "@/icons/icons";
import React from "react";

export function Breadcrumb({children}) {
  const items = React.Children.toArray(children);
  return (
    <div className="flex flex-col items-center">
      <nav className="flex flex-wrap items-center p-1 gap-0.5">
        {items.flatMap((child, index) => [
          child,
          index < items.length - 1 ? (
            <span key={index} className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800">
              <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-4 w-4 stroke-2">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          ) : null,
        ])}
      </nav>
    </div>
  )
}

export function BreadcrumbItem({active, onClick, title, icon}) {
  const aClass = active ?
    "inline-flex items-center gap-1.5 text-sm text-stone-50 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-800 px-2 py-1 hover:bg-stone-700" :
    "inline-flex items-center gap-1.5 text-sm text-stone-800 transition-colors duration-300 ease-in hover:text-stone-200 rounded bg-stone-200 px-2 py-1 hover:bg-stone-700"
  return (
    <a href="#" className={aClass}>
      {icon}
      {title}
    </a>
  )
}