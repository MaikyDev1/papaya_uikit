import {ArrowIcon, CloseIcon} from "../icons/icons";

export function SmallTextBanner({onClose, buttonTitle, onButtonClick, title, description, icon}) {
  return (
    <div>
      <div className="relative cursor-default select-none w-fulltext-base justify-between font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex">
        <div className="flex gap-2 items-center">
          {icon}
          <p className="text-stone-900 font-semibold">{title}</p>
          {description &&
            <span className="text-white">
              {description}
            </span>
          }
          {buttonTitle &&
            <div onClick={onButtonClick} className="text-center flex gap-2 text-sm font-bold text-secondary transition-all duration-200 rounded-md hover:text-stone-700">
              {buttonTitle}
              <ArrowIcon className="text-lg rotate-90"/>
            </div>
          }
        </div>
        <div className="hover:bg-stone-50/15 rounded-lg">
          <CloseIcon onClick={onClose} className="text-3xl"/>
        </div>
      </div>
    </div>
  )
}