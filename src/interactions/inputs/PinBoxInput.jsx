'use client'
import { useRef, useEffect } from "react";

const PATTERNS = {
  alpha: /^[a-zA-Z]$/,
  numeric: /^[0-9]$/,
  both: /^[a-zA-Z0-9]$/,
};

/**
 * Code input split into separate boxes (OTP style). Supports undo/redo.
 *
 * @param {Object} props
 * @param {string} props.id Prefix for the box ids.
 * @param {string} [props.title] Label shown above the boxes.
 * @param {string} [props.value=""] Current code (controlled).
 * @param {(value: string) => void} [props.onChange] Called with the new code string.
 * @param {number} [props.length=4] Number of boxes.
 * @param {"alpha" | "numeric" | "both"} [props.type="both"] Allowed characters.
 * @param {boolean} [props.disabled=false] Disables all boxes.
 * @param {string} [props.error] Error message shown under the boxes.
 * @returns {import("react").JSX.Element}
 */
export function PinBoxInput({ id, title, value = "", onChange, length = 4, type = "both", disabled = false, error = undefined }) {
  const refs = useRef([]);
  const history = useRef({ past: [], future: [] });
  const pattern = PATTERNS[type] ?? PATTERNS.both;

  const focusBox = (i) => refs.current[Math.max(0, Math.min(i, length - 1))]?.focus();

  // Records history only when the value really changes. Focus is handled separately.
  const update = (next) => {
    if (next === value) return;
    history.current.past.push(value);
    history.current.future = [];
    onChange?.(next);
  };

  const undo = () => {
    const prev = history.current.past.pop();
    if (prev === undefined) return;
    history.current.future.push(value);
    onChange?.(prev);
    focusBox(prev.length);
  };

  const redo = () => {
    const next = history.current.future.pop();
    if (next === undefined) return;
    history.current.past.push(value);
    onChange?.(next);
    focusBox(next.length);
  };

  const handleChange = (i, e) => {
    const inputType = e.nativeEvent.inputType;
    if (inputType === "historyUndo") return undo();
    if (inputType === "historyRedo") return redo();

    const old = value[i] ?? "";
    let raw = e.target.value;
    // Nothing is selected, so the browser keeps the old char next to the new one. Drop the old one.
    if (old && raw.length > 1) raw = raw.replace(old, "");

    const chars = [...raw].filter((c) => pattern.test(c));
    if (chars.length === 0) return; // invalid key: stay on this box

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

  return (
    <div className="w-full">
      {title && (
        <label className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1" htmlFor={`${id}-0`}>
          {title}
        </label>
      )}

      <div className="flex gap-2">
        {Array.from({ length }, (_, i) => (
          <input
            key={i}
            id={`${id}-${i}`}
            ref={(el) => (refs.current[i] = el)}
            type="text"
            inputMode={type === "numeric" ? "numeric" : "text"}
            autoComplete={i === 0 ? "one-time-code" : "off"}
            autoCapitalize="off"
            autoCorrect="off"
            value={value[i] ?? ""}
            disabled={disabled}
            onChange={(e) => handleChange(i, e)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={(e) => handlePaste(i, e)}
            className={`w-10 h-10 text-center select-none text-stone-700 font-semibold outline-none caret-transparent bg-stone-200 rounded-xl
                        ${error ? "ring-2 ring-rose-600 text-rose-600" : "focus:ring-2 focus:ring-primary"}
                        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          />
        ))}
      </div>

      {error && <p className="text-rose-600 text-xs italic mt-1">{error}</p>}
    </div>
  );
}