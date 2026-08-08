"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import {
  IoPlayOutline,
  IoCodeSlashOutline,
  IoChevronBackOutline,
  IoSunnyOutline,
  IoMoonOutline,
  IoRefreshCircleOutline,
  IoAlertCircleOutline,
  IoTrashOutline,
  IoPhonePortraitOutline,
  IoTabletPortraitOutline,
  IoDesktopOutline,
} from "react-icons/io5";

const DEFAULT_HTML = `<!-- HTML target sandbox -->
<div class="container">
  <h1>Selamat Datang di CSS Sandbox! 🚀</h1>
  <p>Ini adalah editor kode interaktif tempat Anda dapat bereksperimen dengan HTML dan CSS secara langsung.</p>
  <button class="tombol-mulai">Coba Klik Saya</button>
  <p class="teks-info">Edit kode HTML di tab HTML dan CSS di tab CSS, lalu klik tombol Run.</p>
</div>`;

const DEFAULT_CSS = `/* Gaya Dasar Sandbox */
body {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
}

.container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  text-align: center;
  border: 1px solid #e2e8f0;
}

h1 {
  color: #0f172a;
  font-size: 24px;
  margin-top: 0;
}

p {
  color: #475569;
  font-size: 14px;
  line-height: 1.6;
}

.tombol-mulai {
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 15px;
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
}

.tombol-mulai:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
}

.teks-info {
  margin-top: 20px;
  font-size: 11px;
  color: #94a3b8;
  font-style: italic;
}`;

const highlightHtml = (code: string, dark: boolean): string => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, (match: string) => {
    return `<span class="${dark ? 'text-[#8b949e] italic' : 'text-[#6e7781] italic'}">${match}</span>`;
  });

  escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9\-]+)([\s\S]*?)(&gt;)/gi, (match: string, tagHead: string, tagBody: string, tagEnd: string) => {
    const tagName = tagHead.replace(/&lt;\/?/, "");
    const tagHeadColored = tagHead.replace(tagName, `<span class="${dark ? 'text-[#7ee787]' : 'text-[#116329] font-semibold'}">${tagName}</span>`);

    const bodyColored = tagBody.replace(/([a-zA-Z0-9\-]+)(=)("[^"]*"|'[^']*'|[^\s&>]+)/gi, (attrMatch: string, attrName: string, eq: string, attrValue: string) => {
      const coloredName = `<span class="${dark ? 'text-[#ff7b72]' : 'text-[#cf222e]'}">${attrName}</span>`;
      const coloredValue = `<span class="${dark ? 'text-[#a5d6ff]' : 'text-[#0a3069]'}">${attrValue}</span>`;
      return `${coloredName}${eq}${coloredValue}`;
    });

    return `<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${tagHeadColored}</span>${bodyColored}<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${tagEnd}</span>`;
  });

  return escaped;
};

// Protect CSS comments from being processed by other regex rules
function protectCssComments(code: string): { safe: string; store: string[] } {
  const comments: string[] = [];
  let idx = 0;
  const safe = code.replace(/\/\*[\s\S]*?\*\//g, (match) => {
    comments.push(match);
    return `__CSS_COMMENT_${idx++}__`;
  });
  return { safe, store: comments };
}

function restoreCssComments(safe: string, store: string[]): string {
  let result = safe;
  store.forEach((comment, idx) => {
    result = result.replace(`__CSS_COMMENT_${idx}__`, comment);
  });
  return result;
}

const highlightCss = (code: string, dark: boolean): string => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Protect comments so regex doesn't match inside them
  const { safe: codeWithoutComments, store: commentStore } = protectCssComments(escaped);

  const parts = codeWithoutComments.split(/(\{[\s\S]*?\})/g);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith("{")) {
      parts[i] = parts[i].replace(/(\{)([\s\S]*?)(\})/g, (match: string, openBrace: string, body: string, closeBrace: string) => {
        const coloredBody = body.replace(/([a-zA-Z0-9\-]+)(\s*:\s*)([^;]+)/gi, (propMatch: string, propName: string, colon: string, propValue: string) => {
          const coloredProp = `<span class="${dark ? 'text-[#79c0ff]' : 'text-[#0550ae]'}">${propName}</span>`;
          const coloredValue = `<span class="${dark ? 'text-[#ff7b72]' : 'text-[#cf222e]'}">${propValue}</span>`;
          return `${coloredProp}${colon}${coloredValue}`;
        });
        return `<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${openBrace}</span>${coloredBody}<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${closeBrace}</span>`;
      });
    } else {
      parts[i] = parts[i].replace(
        /(\.[a-zA-Z0-9_\-]+)|(#[a-zA-Z0-9_\-]+)|\b(body|html|div|p|h1|h2|h3|h4|h5|h6|span|a|ul|li|button|nav|section|table|tr|td|th|thead|tbody|img|form|input|textarea|label|header|footer|main|aside|select|option|iframe|canvas|svg|path)\b/gi,
        (match, className, idName, tagName) => {
          if (className) {
            return `<span class="${dark ? 'text-[#d2a8ff]' : 'text-[#8250df] font-semibold'}">${match}</span>`;
          }
          if (idName) {
            return `<span class="${dark ? 'text-[#d2a8ff]' : 'text-[#8250df] font-semibold'}">${match}</span>`;
          }
          if (tagName) {
            return `<span class="${dark ? 'text-[#7ee787]' : 'text-[#116329]'}">${match}</span>`;
          }
          return match;
        }
      );
    }
  }

  let result = parts.join("");

  // Restore comments with highlight styling
  const finalParts = result.split(/(__CSS_COMMENT_\d+__)/g);
  for (let i = 0; i < finalParts.length; i++) {
    if (/^__CSS_COMMENT_\d+__$/.test(finalParts[i])) {
      const idx = parseInt(finalParts[i].match(/__CSS_COMMENT_(\d+)__/)![1], 10);
      finalParts[i] = `<span class="${dark ? 'text-[#8b949e] italic' : 'text-[#6e7781] italic'}">${commentStore[idx]}</span>`;
    }
  }

  return finalParts.join("");
};

function expandEmmet(abbr: string): string | null {
  // Mask {...} blocks
  const textBlocks: string[] = [];
  const maskedAbbr = abbr.replace(/\{([^}]*)\}/g, (match) => {
    textBlocks.push(match);
    return `__TEXT_BLOCK_${textBlocks.length - 1}__`;
  });

  // Split by > and +
  const tokens = maskedAbbr.split(/(?=[>+])|(?<=[>+])/);

  // Restore {...} blocks
  const restoredTokens = tokens.map((token) =>
    token.replace(/__TEXT_BLOCK_(\d+)__/g, (_, idx) =>
      textBlocks[parseInt(idx, 10)]
    )
  );

  interface EmmetASTNode {
    tag: string;
    classes: string[];
    id: string;
    text: string;
    count: number;
    children: EmmetASTNode[];
  }

  const root: EmmetASTNode = {
    tag: "root",
    classes: [],
    id: "",
    text: "",
    count: 1,
    children: [],
  };
  const stack: EmmetASTNode[] = [root];

  let i = 0;
  while (i < restoredTokens.length) {
    const token = restoredTokens[i].trim();
    if (!token) {
      i++;
      continue;
    }

    if (token === ">") {
      const currentParent = stack[stack.length - 1];
      if (currentParent.children.length > 0) {
        stack.push(currentParent.children[currentParent.children.length - 1]);
      }
      i++;
    } else if (token === "+") {
      i++;
    } else {
      const element = parseSingleElement(token);
      if (!element) return null; // Invalid token

      const node: EmmetASTNode = {
        tag: element.tag,
        classes: element.classes,
        id: element.id,
        text: element.text,
        count: element.count,
        children: [],
      };

      const currentParent = stack[stack.length - 1];
      currentParent.children.push(node);
      i++;
    }
  }

  function parseSingleElement(str: string) {
    if (!str) return null;

    let tag = "";
    const classes: string[] = [];
    let id = "";
    let text = "";
    let count = 1;

    // Extract multiplier first at the end, e.g. *3
    const multMatch = str.match(/\*([0-9]+)$/);
    if (multMatch) {
      count = parseInt(multMatch[1], 10);
      str = str.substring(0, str.length - multMatch[0].length);
    }

    // Extract text block, e.g. {Hello}
    const textMatch = str.match(/\{([^}]*)\}/);
    if (textMatch) {
      text = textMatch[1];
      str = str.replace(textMatch[0], "");
    }

    // Split by . and # to find classes, ids and tag
    const parts = str.split(/(?=[.#])/);
    const first = parts[0];
    if (first && !first.startsWith(".") && !first.startsWith("#")) {
      if (/^[a-zA-Z][a-zA-Z0-9\-]*$/.test(first)) {
        tag = first;
      } else {
        return null;
      }
    }

    for (let j = 0; j < parts.length; j++) {
      const part = parts[j];
      if (part.startsWith(".")) {
        classes.push(part.substring(1));
      } else if (part.startsWith("#")) {
        id = part.substring(1);
      }
    }

    // Default tag to div if it's empty but classes/id exist
    if (!tag && (classes.length > 0 || id)) {
      tag = "div";
    }

    if (!tag) return null;

    return { tag, classes, id, text, count };
  }

  function renderAST(node: EmmetASTNode, indentLevel: number = 0): string {
    if (node.tag === "root") {
      return node.children.map((child) => renderAST(child, indentLevel)).join("\n");
    }

    const indent = "  ".repeat(indentLevel);
    const classStr = node.classes.length > 0 ? ` class="${node.classes.join(" ")}"` : "";
    const idStr = node.id ? ` id="${node.id}"` : "";

    const voidTags = ["area", "br", "hr", "img", "input", "link", "meta", "source", "wbr"];
    const isVoid = voidTags.includes(node.tag.toLowerCase());

    let childrenHTML = "";
    if (node.children.length > 0) {
      childrenHTML =
        "\n" +
        node.children.map((child) => renderAST(child, indentLevel + 1)).join("\n") +
        "\n" +
        indent;
    } else if (node.text) {
      childrenHTML = node.text;
    }

    let html = "";
    if (isVoid) {
      html = `${indent}<${node.tag}${classStr}${idStr}>`;
    } else {
      html = `${indent}<${node.tag}${classStr}${idStr}>${childrenHTML}</${node.tag}>`;
    }

    if (node.count > 1) {
      const list: string[] = [];
      for (let k = 0; k < node.count; k++) {
        list.push(html);
      }
      return list.join("\n");
    }

    return html;
  }

  return renderAST(root);
}

interface CodeEditorProps {
  value: string;
  onChange: (val: string) => void;
  language: "html" | "css";
  darkMode: boolean;
  placeholder: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language, darkMode, placeholder }) => {
  const textareaCallbackRef = useCallback((node: HTMLTextAreaElement | null) => {
    if (!node) return;
    node.focus();
  }, []);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (textareaRef.current) {
      const { scrollTop, scrollLeft } = textareaRef.current;
      if (preRef.current) {
        preRef.current.scrollTop = scrollTop;
        preRef.current.scrollLeft = scrollLeft;
      }
      if (lineNumbersRef.current) {
        lineNumbersRef.current.scrollTop = scrollTop;
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;

    // 1. Enter Key Auto-Indent
    if (e.key === "Enter" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      const textBefore = value.substring(0, start);
      const currentLine = textBefore.split("\n").pop() || "";
      const indent = currentLine.match(/^(\s*)/)?.[1] || "";
      const newValue = value.substring(0, start) + "\n" + indent + value.substring(end);
      onChange(newValue);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 1 + indent.length;
      });
      return;
    }

    // 2. Tab / Shift+Tab Key (Indent, Outdent, and Emmet)
    if (e.key === "Tab") {
      e.preventDefault();

      if (start !== end) {
        // Block Selection Indent / Outdent
        const textBefore = value.substring(0, start);
        const firstLineStart = textBefore.lastIndexOf("\n") + 1;
        const textAfter = value.substring(end);
        const nextNewline = textAfter.indexOf("\n");
        const lastLineEnd = nextNewline === -1 ? value.length : end + nextNewline;

        const rangeText = value.substring(firstLineStart, lastLineEnd);
        const lines = rangeText.split("\n");

        let firstLineDiff = 0;
        let totalDiff = 0;

        const newLines = lines.map((line, idx) => {
          let newLine = line;
          let diff = 0;
          if (e.shiftKey) {
            // Outdent: remove up to 2 spaces
            const match = line.match(/^ {1,2}/);
            if (match) {
              const spacesToRemove = match[0].length;
              newLine = line.substring(spacesToRemove);
              diff = -spacesToRemove;
            }
          } else {
            // Indent: add 2 spaces
            newLine = "  " + line;
            diff = 2;
          }

          if (idx === 0) {
            firstLineDiff = diff;
          }
          totalDiff += diff;
          return newLine;
        });

        const newRangeText = newLines.join("\n");
        const newValue = value.substring(0, firstLineStart) + newRangeText + value.substring(lastLineEnd);
        onChange(newValue);

        requestAnimationFrame(() => {
          ta.selectionStart = Math.max(firstLineStart, start + firstLineDiff);
          ta.selectionEnd = end + totalDiff;
        });
      } else {
        // Single Cursor Tab (Shift+Tab outdents, Tab checks Emmet first, then indents)
        if (e.shiftKey) {
          // Outdent single line
          const textBefore = value.substring(0, start);
          const firstLineStart = textBefore.lastIndexOf("\n") + 1;
          const textAfter = value.substring(start);
          const nextNewline = textAfter.indexOf("\n");
          const lastLineEnd = nextNewline === -1 ? value.length : start + nextNewline;

          const lineText = value.substring(firstLineStart, lastLineEnd);
          const match = lineText.match(/^ {1,2}/);
          if (match) {
            const spacesToRemove = match[0].length;
            const newLineText = lineText.substring(spacesToRemove);
            const newValue = value.substring(0, firstLineStart) + newLineText + value.substring(lastLineEnd);
            onChange(newValue);
            requestAnimationFrame(() => {
              ta.selectionStart = ta.selectionEnd = Math.max(firstLineStart, start - spacesToRemove);
            });
          }
        } else {
          // Tab: Check Emmet Abbreviation Expansion first in HTML mode
          if (language === "html") {
            const textBefore = value.substring(0, start);
            const currentLine = textBefore.split("\n").pop() || "";
            const emmetMatch = currentLine.match(/([a-zA-Z0-9.#>+*${}-]+)$/);
            
            if (emmetMatch) {
              const isSingleWordOnLine = currentLine.trim() === emmetMatch[1];
              const hasNoAngles = !currentLine.includes("<");

              if (isSingleWordOnLine && hasNoAngles) {
                const expanded = expandEmmet(emmetMatch[1]);
                if (expanded) {
                  const indent = currentLine.match(/^(\s*)/)?.[1] || "";
                  const indentedExpanded = expanded
                    .split("\n")
                    .map((line, idx) => (idx === 0 ? line : indent + line))
                    .join("\n");

                  const textBeforeAbbr = textBefore.substring(0, textBefore.length - currentLine.length);
                  const newValue = textBeforeAbbr + indent + indentedExpanded + value.substring(end);
                  onChange(newValue);

                  requestAnimationFrame(() => {
                    const closingIndex = indentedExpanded.indexOf("></");
                    if (closingIndex !== -1) {
                      const cursorOffset = closingIndex + 1;
                      ta.selectionStart = ta.selectionEnd = textBeforeAbbr.length + indent.length + cursorOffset;
                    } else {
                      ta.selectionStart = ta.selectionEnd = textBeforeAbbr.length + indent.length + indentedExpanded.length;
                    }
                  });
                  return;
                }
              }
            }
          }

          // Otherwise, insert 2 spaces
          const newValue = value.substring(0, start) + "  " + value.substring(end);
          onChange(newValue);
          requestAnimationFrame(() => {
            ta.selectionStart = ta.selectionEnd = start + 2;
          });
        }
      }
      return;
    }

    // 3. HTML Tag Auto-Close
    if (e.key === ">" && language === "html") {
      const beforeCursor = value.substring(0, start);
      const tagMatch = beforeCursor.match(/<([a-zA-Z][a-zA-Z0-9\-]*)\s*[^>]*$/);
      if (tagMatch) {
        const tagName = tagMatch[1].toLowerCase();
        const voidTags = ["area", "br", "hr", "img", "input", "link", "meta", "source", "wbr"];
        if (!voidTags.includes(tagName)) {
          e.preventDefault();
          const closingTag = `</${tagMatch[1]}>`;
          const newValue = value.substring(0, start) + ">" + closingTag + value.substring(end);
          onChange(newValue);
          requestAnimationFrame(() => {
            ta.selectionStart = ta.selectionEnd = start + 1;
          });
          return;
        }
      }
    }

    // 4. Auto-Close Quotes and Parentheses
    const keysToClose: Record<string, string> = {
      '"': '"',
      "'": "'",
      "(": ")",
    };

    if (keysToClose[e.key] !== undefined) {
      const charAfter = value.charAt(start);
      if (e.key === charAfter && (e.key === '"' || e.key === "'")) {
        // Jump over quote
        e.preventDefault();
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 1;
        });
        return;
      }

      e.preventDefault();
      const closingChar = keysToClose[e.key];
      const newValue = value.substring(0, start) + e.key + closingChar + value.substring(end);
      onChange(newValue);
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 1;
      });
      return;
    }

    // 5. Jump Over Parentheses
    if (e.key === ")" && value.charAt(start) === ")") {
      e.preventDefault();
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 1;
      });
      return;
    }
  };

  const getHighlightedCode = () => {
    if (language === "html") {
      return highlightHtml(value, darkMode);
    }
    return highlightCss(value, darkMode);
  };

  const lineCount = value.split("\n").length;
  const lineNumbers = Array.from({ length: Math.max(15, lineCount + 2) }, (_, i) => i + 1);

  return (
    <div className="flex-1 flex overflow-hidden relative w-full h-full">
      <div
        ref={lineNumbersRef}
        className={`hidden sm:flex flex-col select-none text-right font-mono text-[11px] px-3 py-4 border-r w-12 overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-[#0d1117] border-[#30363d] text-[#8b949e]" : "bg-white border-[#d0d7de] text-[#57606a]"
        }`}
        style={{ height: "100%" }}
      >
        {lineNumbers.map((num) => (
          <div key={num} className="leading-relaxed h-[21.1px]" style={{ lineHeight: "1.625" }}>{num}</div>
        ))}
      </div>

      <div className="flex-1 relative overflow-hidden h-full">
        <pre
          ref={preRef}
          className={`absolute inset-0 p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden whitespace-pre pointer-events-none select-none border-none outline-none ${
            darkMode ? "bg-[#0d1117]" : "bg-white"
          }`}
          style={{
            margin: 0,
            fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, "Liberation Mono", monospace',
            lineHeight: "1.625",
          }}
          dangerouslySetInnerHTML={{ __html: getHighlightedCode() + "\n" }}
        />

        <textarea
          ref={(node) => {
            textareaRef.current = node;
            textareaCallbackRef(node);
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          className={`absolute inset-0 p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto whitespace-pre bg-transparent border-none outline-none resize-none thin-scrollbar focus:ring-0 focus:outline-none w-full h-full ${
            darkMode
              ? "text-transparent caret-[#58a6ff] selection:bg-[#388bfd]/40"
              : "text-transparent caret-[#0969da] selection:bg-[#0969da]/20"
          }`}
          style={{
            margin: 0,
            fontFamily: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, "Liberation Mono", monospace',
            color: "transparent",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.625",
          }}
          placeholder={placeholder}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

const EditorHints = ({ darkMode }: { darkMode: boolean }) => {
  const hints = [
    { key: "Tab", action: "Emmet / Indent" },
    { key: "Shift+Tab", action: "Outdent" },
    { key: "Enter", action: "Auto-indent" },
    { key: ">", action: "Auto-close tag" },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2 px-4 py-2 text-[10px] font-mono border-t transition-colors ${
      darkMode ? "bg-[#161b22] border-[#30363d] text-[#8b949e]" : "bg-[#f6f8fa] border-[#d0d7de] text-[#57606a]"
    }`}>
      {hints.map((h) => (
        <span key={h.key} className="flex items-center gap-1">
          <kbd className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${
            darkMode ? "bg-[#21262d] border-[#30363d] text-[#c9d1d9]" : "bg-white border-[#d0d7de] text-[#24292f]"
          }`}>{h.key}</kbd>
          <span>{h.action}</span>
        </span>
      ))}
    </div>
  );
};

export default function SandboxPage() {
  const { darkMode, setDarkMode } = useTheme();

  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [compiledCode, setCompiledCode] = useState<string>("");
  const [editorHeight, setEditorHeight] = useState(300);
  const [isClient, setIsClient] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [previewWidth, setPreviewWidth] = useState<string>("100%");

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const hasCompiledRef = useRef(false);
  const runCodeRef = useRef<() => void>(() => {});

  // Compile code
  const runCode = useCallback(() => {
    const scrollScript = `
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          document.addEventListener('click', (e) => {
            const anchor = e.target.closest('a');
            if (anchor) {
              const href = anchor.getAttribute('href');
              if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                  const yOffset = targetEl.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: yOffset, behavior: 'smooth' });
                }
              }
            }
          });
        });
      </script>
    `;

    let compiled = htmlCode;
    const styleBlock = `<style>\n${cssCode}\n</style>`;

    if (compiled.includes("</head>")) {
      compiled = compiled.replace("</head>", `${styleBlock}\n</head>`);
    } else if (compiled.includes("<body>")) {
      compiled = compiled.replace("<body>", `<body>\n${styleBlock}`);
    } else {
      compiled = `${styleBlock}\n${compiled}`;
    }

    if (compiled.includes("</body>")) {
      compiled = compiled.replace("</body>", `${scrollScript}</body>`);
    } else {
      compiled = `${compiled}${scrollScript}`;
    }

    setCompiledCode(compiled);
    setIsModified(false);
  }, [htmlCode, cssCode]);

  runCodeRef.current = runCode;

  // Load from localStorage
  useEffect(() => {
    setIsClient(true);
    const storedHtml = localStorage.getItem("sandbox_html");
    const storedCss = localStorage.getItem("sandbox_css");
    const storedLang = localStorage.getItem("sandbox_lang");
    const shouldAutoRun = localStorage.getItem("sandbox_auto_run") === "true";

    if (storedHtml || storedCss) {
      setHtmlCode(storedHtml || "");
      setCssCode(storedCss || "");
      if (storedLang === "css") setActiveTab("css");
    } else {
      setHtmlCode(DEFAULT_HTML);
      setCssCode(DEFAULT_CSS);
    }

    if (shouldAutoRun) {
      localStorage.removeItem("sandbox_auto_run");
      setTimeout(() => runCodeRef.current(), 100);
    }
  }, []);

  // Save to localStorage
  const saveToStorage = useCallback(() => {
    localStorage.setItem("sandbox_html", htmlCode);
    localStorage.setItem("sandbox_css", cssCode);
    localStorage.setItem("sandbox_lang", activeTab);
  }, [htmlCode, cssCode, activeTab]);

  // Auto-save on code change
  useEffect(() => {
    if (!isClient) return;
    saveToStorage();
  }, [htmlCode, cssCode, activeTab, isClient, saveToStorage]);

  // Compile once initially on mount
  useEffect(() => {
    if (isClient && !hasCompiledRef.current && htmlCode && cssCode) {
      hasCompiledRef.current = true;
      runCode();
    }
  }, [isClient, htmlCode, cssCode, runCode]);

  const handleHtmlChange = (val: string) => {
    setHtmlCode(val);
    setIsModified(true);
  };

  const handleCssChange = (val: string) => {
    setCssCode(val);
    setIsModified(true);
  };

  const reloadPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = compiledCode;
    }
  };

  const resetCode = () => {
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setIsModified(true);
    setActiveTab("html");
    localStorage.removeItem("sandbox_html");
    localStorage.removeItem("sandbox_css");
    localStorage.removeItem("sandbox_lang");
  };

  // Auto-resize editor height
  useEffect(() => {
    if (editorRef.current) {
      const scrollH = editorRef.current.scrollHeight;
      const maxH = window.innerHeight * 0.45;
      setEditorHeight(Math.min(Math.max(scrollH, 300), maxH));
    }
  }, [htmlCode, cssCode, activeTab]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        saveToStorage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [runCode, saveToStorage]);

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden font-sans transition-colors duration-500 ${
      darkMode ? "dark bg-[#0d1117] text-[#c9d1d9]" : "bg-[#f6f8fa] text-[#24292f]"
    }`}>

      {/* Header */}
      <header className={`flex flex-wrap items-center justify-between px-6 py-3 border-b transition-colors duration-500 z-10 ${
        darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]"
      }`}>
        <div className="flex items-center gap-4">
          <Link
            href="/article"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide border transition-all ${
              darkMode
                ? "bg-[#21262d] border-[#30363d] hover:bg-[#30363d] text-[#c9d1d9]"
                : "bg-[#f3f4f6] border-[#d0d7de] hover:bg-[#eaeef2] text-[#24292f]"
            }`}
          >
            <IoChevronBackOutline className="text-sm" />
            Kembali ke Artikel
          </Link>
          <div className="flex items-center gap-2 font-mono">
            <span className={`flex h-2.5 w-2.5 rounded-full ${isModified ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`}></span>
            <h1 className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Live Sandbox Playground
            </h1>
            {isModified ? (
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full font-mono font-bold">
                Modified
              </span>
            ) : (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono font-bold">
                Updated
              </span>
            )}
          </div>
          <span className="hidden md:inline text-[10px] text-slate-400 font-mono">
            Ctrl+Enter Run | Ctrl+S Save | Tab indent
          </span>
        </div>

        <div className="flex items-center gap-3 py-2 md:py-0">
          <button
            onClick={runCode}
            className={`flex items-center gap-1.5 text-white font-semibold px-5 py-1.5 rounded-md text-xs tracking-wide transition-all shadow-sm ${
              darkMode
                ? "bg-[#238636] hover:bg-[#2ea043] shadow-[#238636]/10"
                : "bg-[#1f883d] hover:bg-[#208b3a] shadow-emerald-700/10"
            }`}
            title="Kompilasi kode (Ctrl+Enter)"
          >
            <IoPlayOutline className="text-sm text-white stroke-[3]" />
            <span>Run Code</span>
          </button>
          <button
            onClick={resetCode}
            className={`flex items-center gap-1.5 font-semibold px-3 py-1.5 rounded-md text-xs tracking-wide border transition-all ${
              darkMode
                ? "bg-[#21262d] border-[#30363d] hover:bg-[#da3633]/20 hover:border-[#da3633]/50 text-[#f85149]"
                : "bg-[#f3f4f6] border-[#d0d7de] hover:bg-red-50 hover:border-red-300 text-red-600"
            }`}
            title="Reset kode ke default"
          >
            <IoTrashOutline className="text-sm" />
            <span>Reset</span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-md border transition-colors ${
              darkMode
                ? "bg-[#21262d] border-[#30363d] text-amber-400 hover:bg-[#30363d]"
                : "bg-[#f3f4f6] border-[#d0d7de] text-slate-700 hover:bg-[#eaeef2]"
            }`}
            title="Ubah tema editor"
          >
            {darkMode ? <IoSunnyOutline className="text-sm" /> : <IoMoonOutline className="text-sm" />}
          </button>
        </div>
      </header>

      {/* Editor & Preview */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Left Editor Panel */}
        <section className={`w-full md:w-1/2 flex flex-col border-r h-1/2 md:h-full transition-colors duration-500 ${
          darkMode ? "bg-[#0d1117] border-[#30363d]" : "bg-white border-[#d0d7de]"
        }`}>
          {/* Tabs */}
          <div className={`flex border-b transition-colors duration-500 ${
            darkMode ? "border-[#30363d] bg-[#161b22]" : "border-[#d0d7de] bg-[#f6f8fa]"
          }`}>
            <button
              onClick={() => setActiveTab("html")}
              className={`flex items-center gap-1.5 px-6 py-3 text-xs font-bold font-mono border-t-2 border-b border-r border-l transition-all duration-300 ${
                activeTab === "html"
                  ? darkMode
                    ? "border-t-[#f0883e] border-b-transparent border-r-[#30363d] border-l-[#30363d] text-[#c9d1d9] bg-[#0d1117]"
                    : "border-t-[#fd8c73] border-b-transparent border-r-[#d0d7de] border-l-[#d0d7de] text-[#24292f] bg-white"
                  : darkMode
                    ? "border-t-transparent border-b-transparent border-r-transparent border-l-transparent text-[#8b949e] hover:text-[#c9d1d9] bg-transparent"
                    : "border-t-transparent border-b-transparent border-r-transparent border-l-transparent text-[#57606a] hover:text-[#24292f] bg-transparent"
              }`}
            >
              <IoCodeSlashOutline className="text-sm text-sky-400" />
              index.html
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`flex items-center gap-1.5 px-6 py-3 text-xs font-bold font-mono border-t-2 border-b border-r border-l transition-all duration-300 ${
                activeTab === "css"
                  ? darkMode
                    ? "border-t-[#f0883e] border-b-transparent border-r-[#30363d] border-l-[#30363d] text-[#c9d1d9] bg-[#0d1117]"
                    : "border-t-[#fd8c73] border-b-transparent border-r-[#d0d7de] border-l-[#d0d7de] text-[#24292f] bg-white"
                  : darkMode
                    ? "border-t-transparent border-b-transparent border-r-transparent border-l-transparent text-[#8b949e] hover:text-[#c9d1d9] bg-transparent"
                    : "border-t-transparent border-b-transparent border-r-transparent border-l-transparent text-[#57606a] hover:text-[#24292f] bg-transparent"
              }`}
            >
              <span className="text-[10px] bg-amber-400/10 text-amber-400 px-1.5 py-0.5 rounded font-mono font-bold">CSS</span>
              style.css
            </button>
          </div>

          {/* Editor */}
          <div ref={editorRef} className="flex-1 flex overflow-hidden relative" style={{ minHeight: 0 }}>
            {activeTab === "html" ? (
              <CodeEditor
                value={htmlCode}
                onChange={handleHtmlChange}
                language="html"
                darkMode={darkMode}
                placeholder="Tulis kode HTML di sini..."
              />
            ) : (
              <CodeEditor
                value={cssCode}
                onChange={handleCssChange}
                language="css"
                darkMode={darkMode}
                placeholder="Tulis kode CSS di sini..."
              />
            )}
          </div>

          {/* Hint toolbar di bawah editor */}
          <EditorHints darkMode={darkMode} />
        </section>

        {/* Right Preview Panel */}
        <section className={`w-full md:w-1/2 flex flex-col p-4 h-1/2 md:h-full transition-colors duration-500 ${
          darkMode ? "bg-[#0d1117]" : "bg-[#f6f8fa]"
        }`}>
          <div className={`flex-1 flex flex-col overflow-hidden rounded-lg border bg-white shadow-xl transition-colors duration-500 ${
            darkMode ? "border-[#30363d] shadow-black/50" : "border-[#d0d7de] shadow-slate-200/50"
          }`}>
            {/* Browser Frame Header */}
            <div className={`flex items-center justify-between border-b px-4 py-2.5 select-none transition-colors duration-500 ${
              darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]"
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50"></span>
              </div>

              <div className={`mx-4 flex flex-1 max-w-md items-center justify-center gap-1.5 rounded-md px-4 py-1 text-[11px] font-mono border transition-colors duration-500 ${
                darkMode ? "bg-[#0d1117] border-[#30363d] text-[#8b949e]" : "bg-white border-[#d0d7de] text-[#57606a]"
              }`}>
                <span className="text-emerald-500 font-semibold">https://</span>
                <span className="truncate">sandbox.belajar-css.id/test.html</span>
              </div>

              <button
                onClick={reloadPreview}
                className={`transition-colors ${
                  darkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                }`}
                title="Muat ulang sandbox"
              >
                <IoRefreshCircleOutline className="text-xl" />
              </button>
            </div>

            {/* Viewport Resizer Sub-toolbar */}
            <div className={`flex items-center justify-between px-4 py-2 border-b text-[11px] transition-colors duration-500 ${
              darkMode ? "bg-[#0d1117] border-[#30363d] text-[#8b949e]" : "bg-slate-50 border-[#d0d7de] text-slate-600"
            }`}>
              <div className="flex items-center gap-2">
                <span className="font-semibold font-mono">Viewport:</span>
                <span className="bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded font-mono font-bold text-[#14b8a6]">
                  {previewWidth === "100%" ? "Full Desktop" : `${previewWidth}`}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPreviewWidth("375px")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
                    previewWidth === "375px"
                      ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                      : darkMode
                        ? "hover:bg-[#21262d] text-[#c9d1d9]"
                        : "hover:bg-slate-200/80 text-[#24292f]"
                  }`}
                  title="Tampilan HP (375px)"
                >
                  <IoPhonePortraitOutline className="text-sm" />
                  <span className="hidden sm:inline">Mobile (375px)</span>
                </button>
                <button
                  onClick={() => setPreviewWidth("768px")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
                    previewWidth === "768px"
                      ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                      : darkMode
                        ? "hover:bg-[#21262d] text-[#c9d1d9]"
                        : "hover:bg-slate-200/80 text-[#24292f]"
                  }`}
                  title="Tampilan Tablet (768px)"
                >
                  <IoTabletPortraitOutline className="text-sm" />
                  <span className="hidden sm:inline">Tablet (768px)</span>
                </button>
                <button
                  onClick={() => setPreviewWidth("100%")}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded transition-all font-medium ${
                    previewWidth === "100%"
                      ? "bg-teal-500 text-white shadow-md shadow-teal-500/20"
                      : darkMode
                        ? "hover:bg-[#21262d] text-[#c9d1d9]"
                        : "hover:bg-slate-200/80 text-[#24292f]"
                  }`}
                  title="Tampilan Penuh (100%)"
                >
                  <IoDesktopOutline className="text-sm" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
              </div>
            </div>

            {/* Preview Canvas Container */}
            <div className={`flex-1 relative overflow-auto flex items-center justify-center p-4 transition-colors duration-500 ${
              previewWidth === "100%"
                ? "bg-white p-0"
                : darkMode
                  ? "bg-[#090d10]"
                  : "bg-slate-100"
            }`}>
              <div
                style={{ width: previewWidth }}
                className={`h-full transition-all duration-300 ease-out flex flex-col justify-center ${
                  previewWidth === "100%"
                    ? "w-full"
                    : "shadow-2xl border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden bg-white"
                }`}
              >
                {compiledCode ? (
                  <iframe
                    ref={iframeRef}
                    srcDoc={compiledCode}
                    title="Sandbox Live Preview Frame"
                    className="w-full h-full border-none bg-white"
                    sandbox="allow-scripts"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center gap-2 bg-white">
                    <IoAlertCircleOutline className="text-4xl text-teal-400" />
                    <p className="text-sm font-semibold">Tidak ada preview yang aktif</p>
                    <p className="text-xs">Klik tombol <strong>Jalankan (Run)</strong> atau tekan <strong>Ctrl+Enter</strong> untuk memuat kompilasi kode.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
