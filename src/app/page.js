'use client'

import {useRef, useState} from "react";
import {SelectFromListWithSearch} from "@/interactions/Selectors/SelectFromList";
import {InputTypeBox} from "@/interactions/inputs/InputInteractions";
import {SearchIcon, TitleIcon} from "@/icons/icons";
import {IconSelector} from "@/interactions/Selectors/emoji/IconsSelection";
import {CheckBox, Options, Switch} from "@/buttons/ComplexButtons";
import {PinBoxInput} from "@/interactions/inputs/PinBoxInput";
import {PasswordInputType} from "@/interactions/inputs/PasswordTypeBox";
import {CodeBox} from "@/interactions/displays/CodeBlock";
import {TabItem, Tabs, VerticalTabs} from "@/menus/Tabs";
import {BasicPopup, ImagePopup, LargeBasicPopup} from "@/menus/Popups";
import {PrimaryButton} from "@/buttons/BasicButtons";
import {Image} from "next/dist/client/image-component";

export default function Home() {
  const [selected, setSelected] = useState("");
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [plan, setPlan] = useState(null);
  const [pin, setPin] = useState("112");
  const [password, setPassword] = useState(undefined);

  return (
    <main className="bg-stone-50 pb-100 overflow-auto w-screen h-screen gap-2 p-10 text-stone-900">
      <SelectFromListWithSearch title="List Example" onChange={setSelected} selected={selected}
                                elementList={{id: "1", title: "ok" , id2: "2", title2: "not ok", a: "a", b: "b", c: "c"}}/>
      <IconSelector title="Emoji"/>
      <br/>
      <CheckBox
        id="a"
        title="Check me"
        checked={bool}
        error="Must select this!"
        onChange={(e) => setBool(e)}
      />
      <br/>
      <br/>
      <br/>
      <Switch
        id="2"
        title="Check me 2"
        checked={bool2}
        disabled={false}
        onChange={(e) => setBool2(e)}
      />

      <Options
        id="plan"
        title="Plan"
        bordered={true}
        elementList={{ free: "Free", pro: "Pro", team: "Ultimate" }}
        selected={plan}
        onChange={setPlan}
      />
      <PinBoxInput onChange={setPin} value={pin} error="Wrong code!" length={4} id="test" title="OTP Code"/>

      <br/>

      <br/>
      <CodeBox code={`public void main() {\nfuck.you();\n}`} title="test.java" language="java"/>
      <br/>
      <Tabs defaultId="preview" >
        <TabItem id="preview" title="Ubuntu 20+">
          <CodeBox language="bash" code="npm install" prompt={"root@server:~$"} noBackground={true}/>
          <CodeBox language="bash" code="ls -la" prompt="user@server:~$" noBackground={true}/>
        </TabItem>
        <TabItem id="code" title="Arch">
          <CodeBox language="bash" code="npm install" prompt={"gayest@archbtw:~$"} noBackground={true}/>
        </TabItem>
      </Tabs>
      <br/>
      <br/>
      <br/>
    </main>
  );
}
