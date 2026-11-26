import {ArrowHeadIcon, CloseIcon} from "@/icons/icons";
import {useEffect} from "react";

/**
 * Small modal popup: a card near the top of the screen over a dimmed backdrop, with an optional footer.
 * Escape or a backdrop click calls `onClose`. Requires "use client".
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.children Popup content (scrolls if taller than the card).
 * @param {import("react").ReactNode} [props.actions] Footer content, right-aligned (usually buttons).
 * @param {() => void} [props.onBack] Shows a back arrow at the top left and calls this when clicked.
 * @param {() => void} [props.onClose] Shows a close icon at the top right. Also called on Escape and backdrop click.
 */
export function BasicPopup({ children, actions, onBack, onClose }) {
  useEffect(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <section
      className="fixed inset-0 z-100 flex justify-center items-start p-2 pt-[15vh] 2xl:pt-[25vh] bg-stone-800/15"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 2xl:w-1/4 min-h-40 max-h-[70dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl"
      >
        {onBack && (
          <button type="button" aria-label="Back" onClick={onBack} className="absolute left-5 top-4">
            <ArrowHeadIcon className="rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" />
          </button>
        )}
        {onClose && (
          <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-4">
            <CloseIcon className="rounded-full border border-stone-300 text-stone-500 text-2xl p-1" />
          </button>
        )}
        <div className="p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0">
          {children}
        </div>
        {actions && (
          <div className="border-t px-6 py-5 gap-2 flex justify-end border-stone-200">{actions}</div>
        )}
      </div>
    </section>
  );
}

/**
 * Modal popup: centered card over a dimmed, blurred backdrop, with scrollable content and an optional footer.
 * Pressing Escape or clicking the backdrop calls `onClose`. Clicks inside the card don't bubble to the backdrop.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.children Popup content, rendered in the scrollable area.
 * @param {import("react").ReactNode} [props.actions] Footer content, right-aligned (usually buttons). The footer is not rendered if omitted.
 * @param {() => void} [props.onBack] Shows a back arrow at the top left and calls this when clicked.
 * @param {() => void} [props.onClose] Shows a close icon at the top right. Also called on Escape and backdrop click.
 *   If omitted, the popup can't be dismissed by any of those.
 * @param {string} [props.maxH="66dvh"] Max height of the scrollable content area (any CSS length). Content beyond this scrolls.
 */
export function LargeBasicPopup({ children, actions, onBack, onClose, maxH = "66dvh" }) {
  useEffect(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-stone-800/10 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`relative flex flex-col w-full 2xl:w-1/2 xl:w-2/3 min-h-40 ${onBack || onClose ? "pt-4" : ""} overflow-hidden border border-stone-300 bg-stone-50 rounded-3xl corner-squircle`}
      >
        {onBack && (
          <button type="button" aria-label="Back" onClick={onBack} className="absolute left-3 top-3">
            <ArrowHeadIcon className="rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" />
          </button>
        )}
        {onClose && (
          <button type="button" aria-label="Close" onClick={onClose} className="absolute right-3 top-3">
            <CloseIcon className="rounded-full border border-stone-300 text-stone-500 text-2xl p-1" />
          </button>
        )}
        <div className="p-6 flex flex-col gap-1 break-words overflow-y-auto" style={{ maxHeight: maxH }}>
          {children}
        </div>
        {actions && (
          <div className="border-t px-6 py-5 gap-2 flex justify-end border-stone-200">{actions}</div>
        )}
      </div>
    </section>
  );
}

/**
 * Modal popup with an image panel on the left and content on the right, centered over a dimmed backdrop.
 * Escape or a backdrop click calls `onClose`. The image is only shown on `lg` screens and up. Requires "use client".
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.children Popup content, shown next to the image (scrolls if taller than the card).
 * @param {import("react").ReactNode} [props.image] Image element shown on the left (hidden below `lg`).
 * @param {import("react").ReactNode} [props.actions] Footer content, right-aligned (usually buttons).
 * @param {() => void} [props.onClose] Shows a close icon at the top right. Also called on Escape and backdrop click.
 */
export function ImagePopup({ children, image, actions, onClose }) {
  useEffect(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <section
      className="fixed inset-0 z-100 flex justify-center items-center p-2 bg-stone-800/15"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-40 max-h-[80dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl"
      >
        {onClose && (
          <button type="button" aria-label="Close" onClick={onClose} className="absolute right-5 top-4">
            <CloseIcon className="rounded-full border border-stone-300 text-stone-500 text-2xl p-1" />
          </button>
        )}
        {image && (
          <div className="hidden lg:block shrink-0 w-72 xl:w-80 p-4">
            <div className="relative h-full w-full overflow-hidden rounded-2xl [&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full [&>*]:object-cover">
              {image}
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1 min-w-0 min-h-0">
          <div className="p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0 flex-1">
            {children}
          </div>
          {actions && (
            <div className="border-t px-6 py-5 gap-2 flex justify-end border-stone-200">{actions}</div>
          )}
        </div>
      </div>
    </section>
  );
}