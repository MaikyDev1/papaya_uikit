import {useImperativeHandle, useRef, useState} from "react";
import {ColorPalletIcon, ItalicIcon, LetterAUnderlineIcon} from "@/icons/icons";

let colors = ["#FF6467", "#FFB93B", "#7CCF35", "#31C950", "#2A9689", "#21BCFF","#8E51FF", "#FF2056"]

/**
 * A text editor for longer text, with editorial tools.
 *
 * @param {Object} props
 * @param {string} [props.content] HTML is allowed, so sanitize it before passing it in.
 * @param {string} [props.title] Title of the editor.
 * @param {import("react").Ref<{ getContent: () => string }>} [props.ref] Read the text with ref.current.getContent().
 * @returns {import("react").JSX.Element}
 */
export function TextWriter({content, title, ref }) {
  const editorRef = useRef(null);
  const [expand, setExpand] = useState(null);

  useImperativeHandle(ref, () => ({
    getContent() { return editorRef.current?.innerHTML ?? "" },
  }), [editorRef])

  const exec = (command, value = null) => {
    if (expand !== null) setExpand(null);
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  return (
    <div>
      <label className="block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1">
        {title}
      </label>

      <div className="flex items-center gap-1 mb-2">
        {/* Bold */}
        <EditorAction onClick={exec} icon="B" command="bold"/>

        {/* Italic */}
        <EditorAction onClick={exec} icon={<ItalicIcon/>} command="italic"/>

        {/* Center */}
        <EditorAction onClick={() => setExpand(!expand ? "justify" : null)} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3 6h18M7 12h10M5 18h14"></path>
        </svg>} command="justify"/>

        {/* Color */}
        <div className="relative">
          <EditorAction onClick={() => setExpand(!expand ? "color" : null)} icon={<ColorPalletIcon/>} command="justify"/>
          {expand === "color" &&
            <div className="flex items-center gap-1 p-1 rounded-4xl left-1/2 -translate-x-1/2 corner-squircle translate-y-1 bg-stone-300 absolute">
              {colors.map(c =>
                <EditorAction key={c} onClick={exec} icon={<LetterAUnderlineIcon style={{color: c}} className="text-2xl"/>} command="foreColor" value={c}/>
              )}
            </div>
          }
        </div>

        {/* Bullet list */}
        <EditorAction onClick={exec} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></path>
        </svg>} command="insertUnorderedList"/>

        {/* Numbered list */}
        <EditorAction onClick={exec} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="currentColor" d="M2.988 9a2.012 2.012 0 0 1 1.488 3.366L3.446 13.5h.804a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.555-1.255l2.172-2.388a.514.514 0 0 0-.379-.857h-.04a.55.55 0 0 0-.46.246l-.114.17a.75.75 0 0 1-1.248-.832l.113-.17A2.05 2.05 0 0 1 2.947 9zM14 12a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zm0-5a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM2.77 1.174A.75.75 0 0 1 4 1.75V6a.75.75 0 0 1-1.5 0V3.352l-.27.224a.751.751 0 0 1-.96-1.152zM14 2a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z"></path>
        </svg>} command="insertOrderedList"/>

        {/* Clear */}
        <EditorAction onClick={exec} icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-1.5 -2.5 24 24">
          <path fill="currentColor" d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z"></path>
        </svg>} command="removeFormat"/>

        <div className="w-px h-6 bg-stone-300 mx-1" />

        {/* Undo */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("undo")}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300"
          title="Undo"
        >
          ↶
        </button>

        {/* Redo */}
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => exec("redo")}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300"
          title="Redo"
        >
          ↷
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: content || "" }}
        className="
          min-h-7
          bg-stone-200
          p-2
          px-3
          rounded-2xl
          outline-none
          appearance-none
          focus:ring-2
          focus:ring-primary
          corner-squircle
          w-full

          [&_strong]:font-bold
          [&_b]:font-bold

          [&_ul]:list-disc
          [&_ul]:pl-6
          [&_ul]:my-2

          [&_ol]:list-decimal
          [&_ol]:pl-6
          [&_ol]:my-2

          [&_li]:pl-1
          [&_li]:my-1
        "
      />
    </div>
  );
}

function EditorAction ({command, value = null, icon, onClick}) {
  return (<button
    type="button"
    onMouseDown={(e) => e.preventDefault()}
    onClick={() => onClick(command, value)}
    className="flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300 font-bold"
    title={command}
  >
    {icon}
  </button>)
}