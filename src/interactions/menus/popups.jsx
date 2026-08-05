import {SecondaryButton} from "../../buttons/BasicButtons";
import {ArrowHeadIcon, CloseIcon} from "../../icons/icons";

export function BasicPopup({children, buttons, onBack, onClose}) {
  return (
    <section className="absolute z-100 top-0 left-0 flex flex-col items-center p-2 bg-stone-800/15 w-screen h-screen">
      <div className="border lg:w-2/4 xl:w-1/4 top-1/4 sm:w-3/4 md:w-2/3 w-full flex justify-between relative flex-col border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl">
        {onBack &&
          <div onClick={onBack} className="absolute cursor-pointer left-5 top-4">
            <ArrowHeadIcon className="rounded-full rotate-180 border-stone-300 text-stone-500 text-2xl p-1 border"/>
          </div>
        }
        {onClose &&
          <div onClick={onClose} className="absolute cursor-pointer right-5 top-4">
            <CloseIcon className="rounded-full border-stone-300 text-stone-500 text-2xl p-1 border"/>
          </div>
        }
        <div className="p-10 flex flex-col gap-1 wrap-break-word">
          {children}
        </div>
        {buttons &&
          <div className="border-t px-6 py-5 gap-2 flex justify-end border-stone-200">
            {buttons}
          </div>
        }
      </div>
    </section>
  )
}

export function ImagePopup({children, image, buttons, onClose}) {
  return (
    <section className="absolute z-100 flex flex-col justify-center items-center p-2 bg-stone-800/15 w-screen h-screen">
      <div className="border flex lg:w-2/4 xl:w-1/2  sm:w-3/4 md:w-2/3 w-full relative border-stone-300 drop-shadow-2xl bg-stone-50 min-h-40 rounded-4xl">
        {onClose &&
          <div onClick={onClose} className="absolute cursor-pointer right-5 top-4">
            <CloseIcon className="rounded-full border-stone-300 text-stone-500 text-2xl p-1 border"/>
          </div>
        }
        <div className="lg:block hidden h-full p-4">
          {image}
        </div>
        <div className="w-full h-full">
          <div className="p-10 flex flex-col gap-1 wrap-break-word">
            {children}
          </div>
          {buttons &&
            <div className="border-t px-6 py-5 gap-2 flex justify-end border-stone-200">
              {buttons}
            </div>
          }
        </div>
      </div>
    </section>
  )
}