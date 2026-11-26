/**
 * A primary color button with an icon and an optional number badge.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.icon
 * @param {() => void} props.onClick
 * @param {string} [props.title] Empty works.
 * @param {boolean} [props.fullWidth]
 * @param {number} [props.indicator] Number badge on top of the button.
 * @returns {import("react").JSX.Element}
 */
export function PrimaryButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`}>
      {icon}
      <span className="sr-only">Notifications</span>
      <span>
        {title ?? <span className="opacity-0">shd</span>}
      </span>
      { indicator > 0 ?
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs
        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2">{indicator}</div> : null
      }
    </button>
  )
}

/**
 * A secondary color button with an icon and an optional number badge.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.icon
 * @param {() => void} props.onClick
 * @param {string} [props.title] Empty works.
 * @param {boolean} [props.fullWidth]
 * @param {number} [props.indicator] Number badge on top of the button.
 * @returns {import("react").JSX.Element}
 */
export function SecondaryButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`}>
      {icon}
      <span className="sr-only">Notifications</span>
      <span>
        {title ?? <span className="opacity-0">shd</span>}
      </span>
      { indicator > 0 ?
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs
        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2">{indicator}</div> : null
      }
    </button>
  )
}

/**
 * A red color button with an icon and an optional number badge.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.icon
 * @param {() => void} props.onClick
 * @param {string} [props.title] Empty works.
 * @param {boolean} [props.fullWidth]
 * @param {number} [props.indicator] Number badge on top of the button.
 * @returns {import("react").JSX.Element}
 */
export function RedButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-red-600 
     hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-red-600/40`}>
      {icon}
      <span className="sr-only">Notifications</span>
      <span>
        {title ?? <span className="opacity-0">shd</span>}
      </span>
      { indicator > 0 ?
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs
        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2">{indicator}</div> : null
      }
    </button>
  )
}
