import {Icon} from "@iconify/react";

/**
 * Splits a value like "emoji:🔥" or "icon:mdi:home" into its kind and name.
 *
 * @param {string} value
 * @returns {{ kind: "emoji" | "icon", name: string } | null} null when the value is not in a valid format.
 */
function parseIcon(value) {
  if (typeof value !== "string") return null;

  const separator = value.indexOf(":");
  if (separator === -1) return null;

  const kind = value.slice(0, separator);
  const name = value.slice(separator + 1);
  if (!name || (kind !== "emoji" && kind !== "icon")) return null;

  return {kind, name};
}

/**
 * Renders an emoji or an Iconify icon, depending on the prefix of the value.
 * Renders nothing when the value is invalid.
 *
 * @param {Object} props
 * @param {string} props.icon Either "emoji:<character>" or "icon:<iconify name>", e.g. "icon:mdi:home".
 * @param {string} [props.className] Extra classes added to the rendered element.
 * @returns {import("react").JSX.Element | null}
 */
export function IconToDisplay({icon, className = ""}) {
  const parsed = parseIcon(icon);
  if (!parsed) return null;

  if (parsed.kind === "emoji") {
    return (
      <span className={`${className} flex items-center text-xl leading-none`}>
        {parsed.name}
      </span>
    );
  }

  return (
    <Icon
      icon={parsed.name}
      className={`${className} aspect-square w-auto`}
      height="100%"
    />
  );
}