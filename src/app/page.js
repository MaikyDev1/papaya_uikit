'use client'

import Image from "next/image";
import {PrimaryButton, SecondaryButton} from "@/buttons/BasicButtons";
import {FilesIcon, MessagesIcon} from "@/icons/icons";
import {Breadcrumb, BreadcrumbItem} from "@/other/Breadcrumb";
import {
  InputTypeBox,
  PinInputMode,
  RadioTypeBox,
  RangeTypeBox, SearchBox,
  SliderItem,
  SliderItem2
} from "@/interactions/InputInteractions";
import {SelectItem, SelectTypeBox} from "@/interactions/SelectInteractions";
import {SearchableSelectFlow, SelectFlow, SelectFlowDivider, SelectFlowItem} from "@/interactions/menus/basic_menus";
import {useState} from "react";
import {BasicPopup, ImagePopup} from "../interactions/menus/popups";
import {SmallTextBanner} from "../other/Banners";

export default function Home() {
  const [selected, setSelected] = useState("");
  return (
    <main className="bg-stone-50 overflow-auto w-screen h-screen gap-2 text-stone-900">
      {selected === "popup_2" ?
        <BasicPopup onClose={() => setSelected("")} buttons={[<SecondaryButton onClick={() => setSelected("")} title="Close"/>, <PrimaryButton title="Save"/>]}>
          <p className="text-xl font-semibold pb-1">Add a new anchor</p>
          <p>If you need for the text you want to become clickable!</p>
          <InputTypeBox placeholder="Add new anchor"/>
        </BasicPopup> : null
      }
      {selected === "popup_1" ?
        <ImagePopup image={<img className="rounded-4xl corner-squircle" src="/demo-popup.jpg"/>} onClose={() => setSelected("")} buttons={[<SecondaryButton onClick={() => setSelected("")} title="No thanks!"/>]}>
          <p className="text-xl font-semibold pb-1">Add a new anchor</p>
          <p>If you need for the text you want to become clickable!</p>
          <InputTypeBox placeholder="Add new anchor"/>
        </ImagePopup> : null
      }
      <div className="gap-2 flex p-10 px-50 flex-col">
        Welcome to Papaya UI Kit example
        <SmallTextBanner title="Reduceri?" description="Cred? eu zic sa vezi!" buttonTitle="Get now"/>
        <PrimaryButton icon={<MessagesIcon/>} title="Messages"/>
        <div className="flex gap-2">
          <PrimaryButton icon={<MessagesIcon/>} onClick={() => setSelected("popup_2")} fullWidth title="Ask for input"/>
          <SecondaryButton icon={<MessagesIcon/>} onClick={() => setSelected("popup_1")} fullWidth
                           title="Popup With Image"/>
        </div>
        <div className="flex w-1/2">
          <PrimaryButton fullWidth indicator="9" icon={<MessagesIcon/>} title="Messages"/>
        </div>
        <Breadcrumb>
          <BreadcrumbItem title="Flows" onClick={() => setSelected("flows")} active={selected === "flows"}
                          icon={<FilesIcon/>}/>
          <BreadcrumbItem title="Bits" icon={<FilesIcon/>}/>
          <BreadcrumbItem title="Mobile" icon={<MessagesIcon/>}/>
        </Breadcrumb>
        <InputTypeBox type="text" placeholder="email@gmail.com" title="Email"/>
        <InputTypeBox type="text" placeholder="email@gmail.com" error="Email is invalid" title="Email"/>
        <RadioTypeBox title="Give us your soul! Please" id="miaw" value="miaw"/>
        <SliderItem title="Give us your soul! Please" id="miaw" value="miaw"/>

        <SelectTypeBox title="Select your country" defaultValue="eu">
          <SelectItem text="Romania" value="ro"/>
          <SelectItem text="Europe" value="eu" checked={true}/>
          <SelectItem text="China" value="china"/>
        </SelectTypeBox>
        <div className="p-2 border border-stone-200 rounded-xl">
          <SearchableSelectFlow onSelect={(p) => alert(p)}>
            <SelectFlowDivider name="Basic"/>
            <SelectFlowItem value="basic_1" title="Basic 1"/>
            <SelectFlowItem value="basic_2" title="Basic 2"/>
            <SelectFlowItem title="asdnu" value="miaw?" icon={<FilesIcon/>}/>
            <SelectFlowDivider name="More"/>
            <SelectFlowItem title="asdnu" icon={<MessagesIcon/>}/>
            <SelectFlowDivider name="More"/>
          </SearchableSelectFlow>
        </div>
        <SearchBox/>
      </div>
    </main>
  );
}
