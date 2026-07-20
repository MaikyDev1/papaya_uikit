export function PrimaryButton({children}) {
  return (
    <div className="px-2 py-2 bg-primary">

    </div>
  )
}

export function IndicatorButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full" : "grow-0"} text-sm cursor-pointer select-none relative transition-transform duration-200 hover:scale-[1.01] justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary rounded-lg hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`}>
      {icon}
      <span className="sr-only">Notifications</span>
      <span>
        {title}
      </span>
      { indicator > 0 ?
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs
        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2">{indicator}</div> : null
      }
    </button>
  )
}