export function PrimaryButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`}>
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

export function SecondaryButton({fullWidth, icon, title, onClick, indicator}) {
  return (
    <button onClick={onClick} type="button" className={`${fullWidth ? "w-full" : "grow-0"} corner-squircle rounded-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`}>
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