import {TickIcon} from "@/icons/icons";

/**
 * Checkbox with a label, optional error message and animated tick.
 *
 * @param {Object} props
 * @param {string} props.id Input id, also used as the label's `htmlFor`.
 * @param {string} props.title Label text.
 * @param {boolean} [props.checked=false] Whether the box is ticked (controlled).
 * @param {boolean} [props.disabled=false] Disables the checkbox.
 * @param {(checked: boolean) => void} [props.onChange] Called with the new checked value.
 * @param {string} [props.error] Error message shown under the label.
 * @returns {import("react").JSX.Element}
 */
export function CheckBox({ id, title, checked = false, disabled = false, onChange, error = undefined }) {
  return (
    <div className="w-full flex select-none items-center">
      <div className="relative w-4 h-4 shrink-0">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className={`w-4 h-4 appearance-none rounded-sm bg-stone-200 ${
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        />
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center text-stone-700"
          style={{
            opacity: checked ? (disabled ? 0.5 : 1) : 0,
            filter: checked ? "blur(0px)" : "blur(4px)",
            transform: checked ? "scale(1)" : "scale(0.75)",
            transition: "opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out",
          }}
        >
          <TickIcon className="w-3 h-3" />
        </span>
      </div>

      <div className="w-full relative flex items-center">
        <label
          htmlFor={id}
          className={`block ms-2 text-sm font-medium ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`}
        >
          {title}
        </label>
        {error && (
          <p className="ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight">{error}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Switch with a label and optional error message.
 *
 * @param {Object} props
 * @param {string} props.id Input id, also used as the label's `htmlFor`.
 * @param {string} props.title Label text.
 * @param {boolean} [props.checked=false] Whether the switch is on (controlled).
 * @param {boolean} [props.disabled=false] Disables the switch.
 * @param {(checked: boolean) => void} [props.onChange] Called with the new checked value.
 * @param {string} [props.error] Error message shown under the label.
 * @returns {import("react").JSX.Element}
 */
export function Switch({ id, title, checked = false, disabled = false, onChange, error = undefined }) {
  return (
    <div className="w-full flex select-none items-center">
      <div className="relative w-8 h-5 shrink-0">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className={`absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        />
        <span
          className={`pointer-events-none absolute inset-0 rounded-full transition-colors duration-300 ease-out ${
            checked ? "bg-primary" : "bg-stone-200"
          } ${disabled ? "opacity-50" : ""}`}
        />
        <span
          className={`pointer-events-none absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md
                      transition-transform duration-300 ease-out ${
            checked ? "translate-x-3" : "translate-x-0"
          } ${disabled ? "opacity-80" : ""}`}
        />
      </div>

      <div className="w-full relative flex items-center">
        <label
          htmlFor={id}
          className={`block ms-2 text-sm font-normal ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`}
        >
          {title}
        </label>
        {error && (
          <p className="ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight">{error}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Radio group. Options are given as `{key: displayedContent}`.
 *
 * @param {Object} props
 * @param {string} props.id Group id, used as the radio `name` and as a prefix for each option id.
 * @param {string} [props.title] Label shown above the group.
 * @param {Record<string, import("react").ReactNode>} [props.elementList={}] Options, as `{key: displayedContent}`.
 * @param {string | null} [props.selected=null] Key of the selected option, or null for none (controlled).
 * @param {(key: string) => void} [props.onChange] Called with the key of the picked option.
 * @param {boolean} [props.disabled=false] Disables all options.
 * @param {boolean} [props.bordered=false] Draws a border around the group with rounded top and bottom.
 * @param {string} [props.error] Error message shown under the group.
 * @returns {import("react").JSX.Element}
 */
export function Options({ id, title, elementList = {}, selected = null,
                          onChange, disabled = false, bordered = false, error = undefined }) {
  const entries = Object.entries(elementList);

  return (
    <div className="w-full select-none" role="radiogroup" aria-labelledby={title ? `${id}-title` : undefined}>
      {title && (
        <p id={`${id}-title`} className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1" >
          {title}
        </p>
      )}

      {entries.map(([key, content], index) => {
        const isSelected = selected === key;
        const isFirst = index === 0;
        const isLast = index === entries.length - 1;
        const optionId = `${id}-${key}`;

        const borderClasses = bordered
          ? [
            "px-3 border-x border-t bg-stone-100",
            error ? "border-rose-600" : "border-stone-200",
            isFirst ? "squircle-t-2xl" : "",
            isLast ? "border-b squircle-b-2xl" : "",
          ].join(" ")
          : "";

        return (
          <div key={key} className={`flex items-center ${borderClasses}`}>
            <div className="relative w-4 h-4 shrink-0">
              <input
                id={optionId}
                type="radio"
                name={id}
                value={key}
                checked={isSelected}
                disabled={disabled}
                onChange={() => onChange?.(key)}
                className={`absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${
                  disabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              />
              <span
                className={`pointer-events-none absolute inset-0 rounded-full bg-stone-200 flex items-center justify-center ${
                  disabled ? "opacity-50" : ""
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full bg-primary transition-all duration-200 ease-out"
                  style={{
                    opacity: isSelected ? 1 : 0,
                    transform: isSelected ? "scale(1)" : "scale(0.5)",
                  }}
                />
              </span>
            </div>

            <label
              htmlFor={optionId}
              className={`block w-full ms-2 text-sm font-normal text-stone-800 ${bordered ? "py-3" : "py-1"} ${
                disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {content}
            </label>
          </div>
        );
      })}

      {error && <p className="text-rose-600 text-[10px] italic leading-tight mt-1">{error}</p>}
    </div>
  );
}