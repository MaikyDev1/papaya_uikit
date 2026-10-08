import {colors} from "../colors";

export function Badge({icon, name, color, disabled, onClick, isGrabbable = false, ...props}) {
  const isClickable = disabled && onClick;
  return (
    <div
      {...props}
      onClick={isClickable ? onClick : null}
      className={`
          p-1 px-2 flex select-none items-center justify-center gap-1 rounded-full corner-squircle transition-colors duration-100
          ${isClickable ? "cursor-pointer hover:bg-stone-400" : ""}
          ${isGrabbable? "cursor-grab" : ""}
          ${disabled ? "text-stone-800 bg-stone-300" : colors[color]}
        `}
    >
      {icon}
      <p className="font-mono font-semibold text-sm">{name}</p>
    </div>
  )
}