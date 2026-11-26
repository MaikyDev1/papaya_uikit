"use client";

import { createPortal } from "react-dom";
import { useLayoutEffect, useRef, useState } from "react";

const MAX_H = 400; // keep in sync with the max-h-100 class
const MIN_H = 120; // never squeeze the menu below this (e.g. with the keyboard open)
const GAP = 4; // distance between trigger and menu
const EDGE = 8; // breathing room to the screen edge

/**
 * A dropdown that closes on scroll.
 * Opens below its trigger, or above it when there is not enough room below.
 * Must be rendered right after its trigger element, which it uses as the anchor.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.children Content of the dropdown.
 * @param {() => void} props.onClose Called on scroll. It must close the dropdown.
 * @param {string} [props.className] Extra classes added to the dropdown.
 * @returns {import("react").JSX.Element | null}
 */
export function Dropdown({ children, className = "", onClose }) {
  const anchorRef = useRef(null);
  const menuRef = useRef(null);
  const openUpRef = useRef(false);
  const [pos, setPos] = useState(null);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useLayoutEffect(() => {
    // Typing on a phone opens the keyboard, which resizes the viewport and scrolls
    // the page to reveal the input. While focus is inside the menu, those events
    // must reposition the menu instead of closing it.
    const focusInside = () => !!menuRef.current?.contains(document.activeElement);

    const measure = (decideDirection) => {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const below = anchor.getBoundingClientRect();
      const trigger = anchor.previousElementSibling?.getBoundingClientRect() ?? below;

      // visualViewport excludes the on-screen keyboard; fall back to innerHeight
      const vv = window.visualViewport;
      const viewTop = vv ? vv.offsetTop : 0;
      const viewBottom = vv ? vv.offsetTop + vv.height : window.innerHeight;

      const spaceBelow = viewBottom - below.bottom - GAP - EDGE;
      const spaceAbove = trigger.top - viewTop - GAP - EDGE;

      // direction is decided once on open, so it doesn't jump while the user types
      if (decideDirection) {
        openUpRef.current = spaceBelow < MAX_H && spaceAbove > spaceBelow;
      }

      const space = openUpRef.current ? spaceAbove : spaceBelow;
      setPos({
        left: below.left,
        width: below.width,
        maxHeight: Math.max(MIN_H, Math.min(MAX_H, space)),
        ...(openUpRef.current
          ? { bottom: document.documentElement.clientHeight - trigger.top + GAP }
          : { top: below.bottom + GAP }),
      });
    };

    measure(true);

    const reposition = () => measure(false);
    const close = () => onCloseRef.current?.();

    const onResize = () => (focusInside() ? reposition() : close());
    const onScroll = (e) => {
      if (menuRef.current?.contains(e.target)) return; // scrolling the menu itself must not close it
      focusInside() ? reposition() : close();
    };
    const onViewport = () => {
      if (focusInside()) reposition();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);
    window.visualViewport?.addEventListener("resize", onViewport);
    window.visualViewport?.addEventListener("scroll", onViewport);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
      window.visualViewport?.removeEventListener("resize", onViewport);
      window.visualViewport?.removeEventListener("scroll", onViewport);
    };
  }, []);

  if (!onClose) return null;

  return (
    <>
      <div ref={anchorRef} />
      {pos &&
        createPortal(
          <div
            ref={menuRef}
            className={`${className} fixed text-stone-800 z-1000 squircle-2xl max-h-100 overflow-y-auto bg-stone-200 shadow-xl`}
            style={pos}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
}