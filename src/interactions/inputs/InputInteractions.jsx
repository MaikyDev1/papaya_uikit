/**
 * Styled text input with an optional label, leading/trailing icons and error message.
 * Extra props (including `onChange`) are forwarded to the underlying `<input>`.
 *
 * @param {Object} props
 * @param {string} props.id Input id, also used as the label's `htmlFor`.
 * @param {string} [props.type="text"] Input type.
 * @param {string} [props.title] Label shown above the input.
 * @param {string} [props.placeholder] Placeholder text.
 * @param {string} [props.className=""] Extra classes for the outer wrapper.
 * @param {string} [props.defaultValue] Initial value (uncontrolled).
 * @param {string} [props.value] Current value (controlled). Overrides `defaultValue`.
 * @param {(event: import("react").ChangeEvent<HTMLInputElement>) => void} [props.onChange] Called with the change event when the user edits the input.
 * @param {string} [props.error] Error message shown below the input; also turns the ring red.
 * @param {import("react").ReactNode} [props.icon] Element rendered before the input.
 * @param {import("react").ReactNode} [props.iconRight] Element rendered after the input.
 * @param {boolean} [props.ring=true] Show the focus ring. The error ring is always shown.
 * @returns {import("react").JSX.Element}
 */
export function InputTypeBox({id, type = "text", title, placeholder, className = "",
                               defaultValue, value, error, icon, iconRight, ring = true, ...props}) {
  const ringClasses = error
    ? "ring-2 ring-rose-400 text-rose-600"
    : ring ? "group-focus-within:ring-2 group-focus-within:ring-primary" : "";
  return (
    <div className={`w-full group ${className}`}>
      {title &&
        <label className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1" htmlFor={id}>
          {title}
        </label>
      }
      <div className={`w-full ${ringClasses} bg-stone-200 squircle-full py-2 px-3 flex items-center gap-3`}>
        {icon}
        <input {...props} className="text-base appearance-none outline-none w-full"
               id={id} value={value} type={type} placeholder={placeholder} defaultValue={defaultValue}/>
        {iconRight}
      </div>
      {error &&
        <p className="text-rose-600 text-xs italic mt-1">{error}</p>
      }
    </div>
  )
}