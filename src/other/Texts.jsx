import {colors} from "@/colors";

/**
 * A small rounded badge
 * A disabled badge is gray and, if it has an onClick, is the one that is clickable.
 * Any other props are passed to the root div.
 *
 * @param {Object} props
 * @param {string} props.name Text shown in the badge.
 * @param {import("react").ReactNode} [props.icon] Shown before the name.
 * @param {keyof typeof import("@/colors").colors} [props.color] Key of the colors map. Required unless disabled.
 * @param {boolean} [props.disabled] Gray style. Ignores color.
 * @param {() => void} [props.onClick] Only called when disabled is true.
 * @param {boolean} [props.isGrabbable=false] Shows a grab cursor.
 * @returns {import("react").JSX.Element}
 */
export function Badge({icon, name, color, disabled, onClick, isGrabbable = false, ...props}) {
  const isClickable = disabled && onClick;
  return (
    <div
      {...props}
      onClick={isClickable ? onClick : null}
      className={`
          p-1 px-2 flex select-none items-center justify-center gap-1 h-6 squircle-full transition-colors duration-100
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