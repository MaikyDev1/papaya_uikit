"use client";

import {useEffect, useState} from "react";
import hljs from "highlight.js/lib/core";
import {CopyIcon, TickIcon} from "@/icons/icons";

const LOADERS = {
  bash: () => import("highlight.js/lib/languages/bash"),
  c: () => import("highlight.js/lib/languages/c"),
  cpp: () => import("highlight.js/lib/languages/cpp"),
  csharp: () => import("highlight.js/lib/languages/csharp"),
  css: () => import("highlight.js/lib/languages/css"),
  go: () => import("highlight.js/lib/languages/go"),
  java: () => import("highlight.js/lib/languages/java"),
  javascript: () => import("highlight.js/lib/languages/javascript"),
  json: () => import("highlight.js/lib/languages/json"),
  kotlin: () => import("highlight.js/lib/languages/kotlin"),
  markdown: () => import("highlight.js/lib/languages/markdown"),
  php: () => import("highlight.js/lib/languages/php"),
  python: () => import("highlight.js/lib/languages/python"),
  ruby: () => import("highlight.js/lib/languages/ruby"),
  rust: () => import("highlight.js/lib/languages/rust"),
  sql: () => import("highlight.js/lib/languages/sql"),
  swift: () => import("highlight.js/lib/languages/swift"),
  typescript: () => import("highlight.js/lib/languages/typescript"),
  xml: () => import("highlight.js/lib/languages/xml"), // also HTML
  yaml: () => import("highlight.js/lib/languages/yaml"),
};

const ALIASES = {
  js: "javascript", jsx: "javascript", ts: "typescript", tsx: "typescript",
  py: "python", sh: "bash", shell: "bash", yml: "yaml", html: "xml",
  "c++": "cpp", cs: "csharp", rb: "ruby", rs: "rust", md: "markdown",
};

/**
 * Syntax-highlighted code block with a copy button and an optional title.
 * Works when imported from Server or Client Components.
 * Each language is downloaded only when first used; until then the code shows as plain text.
 *
 * @param {Object} props
 * @param {string} props.code Source code to show (this exact string is what gets copied).
 * @param {string} [props.language="plaintext"] Language name or alias (see LOADERS / ALIASES).
 * @param {string} [props.title] Label shown above the code (e.g. a file name).
 * @param {string} [props.className=""] Extra classes for the scrolling <pre> (e.g. "max-h-96 overflow-y-auto").
 * @param {bool} [props.noBackground=""] If you want to disable the background (Good in tabs)
 * @param {string | false} [props.prompt = false] Prompt shown before the first line, not selectable and not copied.
 *   Defaults to "$" for bash/sh/shell. Pass a string like "user@server:~$" to customize it, or `false` to hide it.
 */
export function CodeBox({code, language = "plaintext", title, className = "", noBackground = false, prompt = false}) {
  const [result, setResult] = useState({});
  const [copied, setCopied] = useState(false);

  const name = ALIASES[language] ?? language;

  const promptText = prompt === undefined ? (name === "bash" ? "$" : "") : (prompt || "");

  useEffect(() => {
    const name = ALIASES[language] ?? language;

    const load = LOADERS[name];
    if (!load) return;
    let cancelled = false;

    (async () => {
      if (!hljs.getLanguage(name)) {
        const mod = await load();
        if (!hljs.getLanguage(name)) hljs.registerLanguage(name, mod.default);
      }
      if (!cancelled) setResult({code, language, html: hljs.highlight(code, {language: name}).value});
    })().catch(() => {}); // load failure: keep plain text

    return () => { cancelled = true; };
  }, [code, language]);

  const html = result.code === code && result.language === language ? result.html : null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked (insecure context or permission denied): do nothing
    }
  };

  const codeClasses = `hljs block ${noBackground ? "p-2" : "p-4"} pr-12 ${title ? "pt-2" : ""} ${
    promptText ? "before:content-[attr(data-prompt)] before:mr-2 before:select-none before:text-stone-400" : ""
  }`;
  return (
    <div className={`relative w-full ${noBackground ? "" : "bg-stone-200"} squircle-xl`}>
      {title &&
        <div className={`${noBackground ? "px-2 pt-1 pr-10" :  "px-4 pt-3 pr-12"}  truncate uppercase tracking-wide squircle-t-2xl text-slate-600 text-xs font-bold`}>
          {title}
        </div>
      }
      <button type="button" onClick={copy}
              aria-label={copied ? "Copied" : "Copy code"}
              className="absolute top-2 right-2 z-10 p-1.5 squircle-2xl text-stone-600 opacity-70 hover:opacity-100 hover:bg-stone-300">
        {copied ? <TickIcon/> : <CopyIcon/>}
      </button>
      <pre className={`text-sm overflow-x-auto ${className}`}>
    {html
      ? <code className={codeClasses} data-prompt={promptText} dangerouslySetInnerHTML={{__html: html}}/>
      : <code className={codeClasses} data-prompt={promptText}>{code}</code>}
  </pre>
    </div>
  );
}

/**
 * Inline code for use inside paragraphs. No highlighting and no copy button.
 *
 * @param {Object} props
 * @param {import("react").ReactNode} props.children Code text.
 * @param {string} [props.className=""] Extra classes.
 */
export function InlineCode({children, className = ""}) {
  return (
    <code className={`bg-stone-200 squircle-2xl px-1.5 py-0.5 text-[0.875em] text-[var(--code-fg)] break-words ${className}`}>
      {children}
    </code>
  );
}