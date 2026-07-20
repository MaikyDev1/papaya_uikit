'use client'

import Image from "next/image";
import {IndicatorButton, PrimaryButton} from "@/buttons/BasicButtons";
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

export default function Home() {
  const [selected, setSelected] = useState("flows");
  return (
    <main className="p-2 bg-stone-50 overflow-auto w-screen flex justify-center gap-2 h-[2000px] text-stone-900">
      <div className="gap-2 flex  flex-col w-1/4">
        Welcome to Papaya UI Kit example
        <IndicatorButton icon={<MessagesIcon/>} title="Messages"/>
        <div className="flex w-1/2">
          <IndicatorButton fullWidth indicator="9" icon={<MessagesIcon/>} title="Messages"/>
        </div>
        <Breadcrumb>
          <BreadcrumbItem title="Flows" onClick={() => setSelected("flows")} active={selected === "flows"} icon={<FilesIcon/>}/>
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
        <RangeTypeBox text="Test" id="test" />
        <PinInputMode title="test"/>
        <div className="p-2 border border-stone-200 rounded-lg">
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
