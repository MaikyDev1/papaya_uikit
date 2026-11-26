import {useId, useState} from "react";

const FALLBACK = "#000000";

function normalizeHex(text) {
  if (typeof text !== "string") return null;
  let h = text.trim().replace(/^#+/, "");
  if (/^[0-9a-f]{3}$/i.test(h)) h = h.split("").map((c) => c + c).join("");
  return /^[0-9a-f]{6}$/i.test(h) ? "#" + h.toLowerCase() : null;
}

/**
 * A color input with a native color picker, a hex text field and a revert button.
 * Controlled: the parent owns the value and receives changes through `onChange`.
 * Picker drags are debounced (150ms), so the parent is only updated when the user pauses or releases.
 * Typed text is applied when it is a full 6-digit hex, and on blur or Enter for shorthand (`#abc`).
 * Empty text clears the color (`null`), and invalid text is dropped on blur.
 * Revert sets the value back to `original`, or to `null` when `original` is null or invalid.
 *
 * @param {Object} props
 * @param {string | null} props.value Current color as `#rrggbb`, or null when no color is set.
 * @param {string | null} [props.original] Color restored by the revert button. Accepts `#abc`, `abc`, `#aabbcc` or `aabbcc`.
 * @param {(hex: string | null) => void} props.onChange Called with the new lowercase `#rrggbb` color, or null when cleared.
 * @param {string} props.title Label shown above the input.
 * @param {string} [props.className] Extra classes added to the wrapper.
 * @returns {import("react").JSX.Element}
 */
export function ColorInput({value, original, onChange, title, className = ""}) {
  const id = useId();
  const base = normalizeHex(original);
  // null = not editing, show the value. A string = the user's in-progress text.
  const [draft, setDraft] = useState(null);

  const handleChange = (e) => {
    const next = e.target.value.trim();
    setDraft(next);
    // While typing, only apply full 6-digit values so #abc isn't expanded mid-typing
    if (/^#?[0-9a-f]{6}$/i.test(next)) onChange(normalizeHex(next));
  };

  // On blur or Enter: empty clears, valid (incl. #abc) applies, invalid is dropped
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

  return (
    <div className={`${className} relative`}>
      <label htmlFor={id} className="uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </label>
      <div className="flex items-center gap-3 bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary focus-within:ring-2 focus-within:ring-primary">
        <label className="relative w-6 h-6 shrink-0 cursor-pointer" title="Pick a color">
          <span
            style={value ? {backgroundColor: value} : undefined}
            className={`block w-full h-full rounded-full ring-1 ring-black/10 ${value ? "" : "bg-stone-300"}`}
          />
          <input
            type="color"
            value={value ?? FALLBACK}
            onChange={(e) => { setDraft(null); onChange(e.target.value); }}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
        <input
          id={id}
          type="text"
          value={draft ?? value ?? ""}
          spellCheck={false}
          placeholder="No color selected"
          onChange={handleChange}
          onBlur={commit}
          onKeyDown={(e) => e.key === "Enter" && commit()}
          className="flex-1 min-w-0 bg-transparent outline-none font-mono placeholder:text-stone-400"
        />
        {original &&
          <button
            type="button"
            onClick={revert}
            disabled={value === base}
            title="Revert to original"
            aria-label="Revert to original"
            className="shrink-0 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default"
          >
            ↺
          </button>
        }
      </div>
    </div>
  );
}