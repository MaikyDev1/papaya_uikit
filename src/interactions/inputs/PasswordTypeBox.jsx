import {useState} from "react";
import {EyeIcon, EyeOffIcon, TickIcon, CloseIcon} from "@/icons/icons";
import {InputTypeBox} from "@/interactions/inputs/InputInteractions";

export const DEFAULT_PASSWORD_RULES = {
  minLength: 8,
  uppercase: true,
  lowercase: true,
  number: true,
  special: true,
  noSpaces: true,
};

/** Turns a rules object into a list of { label, test } checks. Falsy rules are skipped. */
function buildChecks(r) {
  return [
    r.minLength && {label: `At least ${r.minLength} characters`, test: v => v.length >= r.minLength},
    r.uppercase && {label: "One uppercase letter", test: v => /[A-Z]/.test(v)},
    r.lowercase && {label: "One lowercase letter", test: v => /[a-z]/.test(v)},
    r.number && {label: "One number", test: v => /\d/.test(v)},
    r.special && {label: "One special character", test: v => /[^A-Za-z0-9\s]/.test(v)},
    r.noSpaces && {label: "No spaces", test: v => !/\s/.test(v)},
  ].filter(Boolean);
}

/** A `match` string turns the field into a confirm field: only the match check applies. */
function getChecks(rules, match) {
  if (match !== undefined) return [{label: "Passwords match", test: v => v === match}];
  if (rules === false) return [];
  return buildChecks({...DEFAULT_PASSWORD_RULES, ...rules});
}

/**
 * Use on submit: returns true if the value satisfies the checks.
 *
 * @param {string} value
 * @param {Object} [options]
 * @param {Object|false} [options.rules] Same as the component's `rules` prop.
 * @param {string} [options.match] Same as the component's `match` prop.
 * @returns {boolean}
 */
export function isPasswordValid(value, {rules, match} = {}) {
  return getChecks(rules, match).every(c => c.test(value));
}

/**
 * Password input with show/hide toggle and a live checklist.
 * Built on InputTypeBox; all other props are forwarded to it.
 *
 * @param {Object} props
 * @param {Object|false} [props.rules] Partial override merged over DEFAULT_PASSWORD_RULES
 *   (e.g. `{minLength: 12, special: false}`). Pass `false` to disable the checklist.
 * @param {string} [props.match] Makes this a confirm field: shows only a "Passwords match"
 *   check against this string and ignores `rules`.
 * @param {string} [props.value] Controlled value.
 * @param {string} [props.defaultValue] Initial value (uncontrolled).
 * @param {(event: import("react").ChangeEvent<HTMLInputElement>) => void} [props.onChange] Called with the change event.
 */
export function PasswordInputType({rules, match, value, defaultValue, onChange, ...props}) {
  const [visible, setVisible] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? "");
  const current = value ?? internal;

  const checks = getChecks(rules, match);

  const handleChange = (e) => {
    setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  const toggle = (
    <button type="button" onClick={() => setVisible(v => !v)}
            aria-label={visible ? "Hide password" : "Show password"}>
      {visible ? <EyeOffIcon/> : <EyeIcon/>}
    </button>
  );

  return (
    <div>
      <InputTypeBox {...props} type={visible ? "text" : "password"} iconRight={toggle}
                    value={current} onChange={handleChange}/>
      {checks.length > 0 && current &&
        <ul className="mt-2 space-y-1 text-xs">
          {checks.map(({label, test}) => {
            const ok = test(current);
            return (
              <li key={label} className={`flex items-center gap-1 ${ok ? "text-emerald-600" : "text-slate-500"}`}>
                {ok ? <TickIcon/> : <CloseIcon/>} {label}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
}