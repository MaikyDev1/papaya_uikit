const CONTAINER_ID = "global-toast-container";
const EXIT_MS = 200;

const VARIANTS = {
  warning: {
    badge: "bg-orange-100 text-orange-500",
    action: "text-orange-600 hover:text-orange-700",
    role: "status",
    icon: `<path d="M12 3.5 21.5 20h-19z" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 10v4.5M12 17.2v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`,
  },
  error: {
    badge: "bg-red-100 text-red-500",
    action: "text-red-600 hover:text-red-700",
    role: "alert",
    icon: `<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 7.5v5.5M12 16v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`,
  },
  success: {
    badge: "bg-green-100 text-green-500",
    action: "text-green-600 hover:text-green-700",
    role: "status",
    icon: `<circle cx="12" cy="12" r="9.5" fill="currentColor"/><path d="m7.8 12.4 2.8 2.8 5.6-6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  info: {
    badge: "bg-blue-100 text-blue-500",
    action: "text-blue-600 hover:text-blue-700",
    role: "status",
    icon: `<rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="currentColor"/><path d="M12 11v5.5M12 7.8v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`,
  },
};

const svg = (inner, size) =>
  `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${inner}</svg>`;

const getContainer = () => {
  let container = document.getElementById(CONTAINER_ID);
  if (container) return container;

  container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.className =
    "fixed top-5 right-5 z-[9999] flex w-[min(420px,calc(100vw-40px))] flex-col items-end gap-3 pointer-events-none";
  document.body.appendChild(container);
  return container;
};

/**
 * Create a superb toast with what text you want.
 * @param title Bolded title
 * @param description As much text you want
 * @param type "info" | "success" | "warning" | "error"
 * @param action object: { label, onClick?, href? }
 * @param duration ms, 0 = stay until dismissed
 */
export const displayToast = ({
                        title,
                        description,
                        type = "info",
                        action,
                        duration = 4000,
                      }) => {
  const variant = VARIANTS[type] ?? VARIANTS.info;

  const el = document.createElement("div");
  el.setAttribute("role", variant.role);
  el.className = [
    "pointer-events-auto flex w-fit max-w-full items-start gap-3",
    "squircle-2xl rounded-3xl bg-white py-3 pl-3 pr-4",
    "shadow-[0_8px_30px_rgb(0_0_0/0.12)] ring-1 ring-black/5",
    "opacity-0 translate-x-8 transition-all duration-200 motion-reduce:transition-none",
  ].join(" ");

  // Icon badge
  const badge = document.createElement("div");
  badge.className = `mt-px flex size-9 shrink-0 items-center justify-center rounded-full ${variant.badge}`;
  badge.innerHTML = svg(variant.icon, 20);

  // Text block (user text goes through textContent only)
  const body = document.createElement("div");
  body.className = "min-w-0 flex-1 self-center text-sm leading-snug";

  if (title) {
    const t = document.createElement("p");
    t.className = "font-semibold text-stone-900";
    t.textContent = title;
    body.appendChild(t);
  }

  if (description) {
    const d = document.createElement("p");
    d.className = title ? "text-stone-500" : "text-stone-700";
    d.textContent = description;
    body.appendChild(d);
  }

  let remove;

  if (action?.label) {
    const a = document.createElement(action.href ? "a" : "button");
    a.className = `mt-0.5 block text-left font-semibold ${variant.action}`;
    a.textContent = action.label;
    if (action.href) a.href = action.href;
    else a.type = "button";
    a.addEventListener("click", () => {
      action.onClick?.();
      remove();
    });
    body.appendChild(a);
  }

  // Close button
  const close = document.createElement("button");
  close.type = "button";
  close.setAttribute("aria-label", "Dismiss notification");
  close.className =
    "mt-2 shrink-0 self-start rounded-full p-0.5 text-stone-400 transition-colors hover:text-stone-700";
  close.innerHTML = svg(
    `<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    16,
  );

  el.append(badge, body, close);
  getContainer().appendChild(el);

  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-x-8");
  });

  // Auto-dismiss with pause on hover
  let timer;
  let remaining = duration;
  let startedAt = 0;

  const start = () => {
    if (!remaining) return;
    startedAt = Date.now();
    timer = setTimeout(() => remove(), remaining);
  };
  const pause = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = undefined;
    remaining -= Date.now() - startedAt;
  };

  let removed = false;
  remove = () => {
    if (removed) return;
    removed = true;
    clearTimeout(timer);
    el.classList.add("opacity-0", "translate-x-8");
    setTimeout(() => el.remove(), EXIT_MS);
  };

  close.addEventListener("click", remove);
  el.addEventListener("mouseenter", pause);
  el.addEventListener("mouseleave", start);
  start();

  return remove;
};

export const displayError = (error) => {
  const description =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Something went wrong";

  const detail = error?.info?.error;

  displayToast({
    type: "error",
    title: description,
    description: detail ? String(detail) : undefined,
    duration: 6000,
  });
};