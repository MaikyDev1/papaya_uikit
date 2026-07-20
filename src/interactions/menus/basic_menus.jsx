import React, {useState} from "react";
import {InputTypeBox} from "@/interactions/InputInteractions";

export function SearchableSelectFlow({onSelect, children, filter = ""}) {
    const [search, setSearch] = useState(filter);
    return (
      <div className="flex gap-1 flex-col">
        <InputTypeBox placeholder="Search" onChange={(e) => setSearch(e.target.value)} title="Search"/>
        <SelectFlow onSelect={onSelect} filter={search}>
          {children}
        </SelectFlow>
      </div>
    )
}

export function SelectFlow({onSelect, children, filter = ""}) {
  const array = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    if (child.type !== SelectFlowItem)
      return child;
    if (filter !== "" && !(child.props.value?.toLowerCase().includes(filter.toLowerCase()) || child.props.title?.toLowerCase().includes(filter.toLowerCase())) )
      return null;
    return child;
  })
  const items = array.map((child, index) => {
    switch (child.type) {
      case SelectFlowItem:
        return (
          <div onClick={() => onSelect?.(child.props.value)} key={child.key} className="cursor-pointer select-none rounded-lg transition duration-300 gap-2 flex hover:bg-primary p-2 items-center">
            {child.props.icon !== undefined ? <span className="text-lg">{child.props.icon}</span> : null}
            <span>{child.props.title}</span>
          </div>
        )

      case SelectFlowDivider:
        const next = array[index + 1]
        if (!next || next.type !== SelectFlowItem)
          return null;
        return <div key={child.key} className="block uppercase tracking-wide text-grey-darker text-xs font-bold">
          {child.props.name}
        </div>;

      default:
        return null;
    }
  });
  return (
    <div>
      {items}
    </div>
  )
}

export function SelectFlowItem({id, value, title, icon}) {}
export function SelectFlowDivider({name}) {}