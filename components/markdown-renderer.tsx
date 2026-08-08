"use client";

import dynamic from "next/dynamic";
import { marked } from "marked";
import { useTheme } from "@/context/theme-context";
import { slugify, cleanHeadingText } from "@/lib/slug";

const CodeCanvas = dynamic(() => import("./code-canvas"), {
  loading: () => (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500">
      Memuat code editor...
    </div>
  ),
});

// Configure marked to secure external links with target="_blank" and rel="noopener noreferrer"
let isParsingLink = false;
marked.use({
  renderer: {
    link(token: any) {
      if (isParsingLink) {
        return token.text || "";
      }

      const href = token.href || "";
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
      const title = token.title ? ` title="${token.title}"` : "";

      isParsingLink = true;
      try {
        const content = marked.parseInline(token.text || "") as string;
        return `<a href="${href}"${target}${title}>${content}</a>`;
      } finally {
        isParsingLink = false;
      }
    }
  }
});

interface MarkdownRendererProps {
  content: string;
}

function attachHeadingIds(html: string): string {
  return html.replace(/<(h[23])>(.*?)<\/\1>/gi, (match, tag, titleText) => {
    const cleanText = cleanHeadingText(titleText);
    const id = slugify(cleanText);
    return `<${tag} id="${id}">${titleText}</${tag}>`;
  });
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { darkMode } = useTheme();

  // Normalize line endings to LF to avoid carriage return (\r) issues
  const normalizedContent = content.replace(/\r\n/g, "\n");

  // Regex to extract code blocks ```lang ... ```
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;

  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(normalizedContent)) !== null) {
    const textBefore = normalizedContent.substring(lastIndex, match.index);
    const lang = (match[1] || "html").toLowerCase();
    const code = match[2];

    if (textBefore.trim()) {
      const htmlBefore = attachHeadingIds(marked.parse(textBefore) as string);
      elements.push(
        <div
          key={`text-${lastIndex}`}
          className={`prose max-w-none text-base sm:text-lg leading-relaxed transition-colors duration-500 ${
            darkMode ? "text-slate-200" : "text-slate-800"
          }
            [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4 ${
              darkMode ? "[&_h2]:text-white" : "[&_h2]:text-slate-900"
            }
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-wide [&_h3]:mt-6 [&_h3]:mb-3 ${
              darkMode ? "[&_h3]:text-teal-400" : "[&_h3]:text-teal-600"
            }
            [&_p]:leading-relaxed [&_p]:tracking-wide [&_p]:mb-4 ${
              darkMode ? "[&_p]:text-slate-300" : "[&_p]:text-slate-700"
            }
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
            [&_li]:leading-relaxed [&_li]:tracking-wide
            [&_blockquote]:my-6 [&_blockquote]:rounded-2xl [&_blockquote]:p-5 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 ${
              darkMode
                ? "[&_blockquote]:bg-slate-900/80 [&_blockquote]:text-slate-300"
                : "[&_blockquote]:bg-white [&_blockquote]:text-slate-700 [&_blockquote]:shadow-sm"
            }
            [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono ${
              darkMode
                ? "[&_code]:bg-slate-800 [&_code]:text-teal-300"
                : "[&_code]:bg-slate-200 [&_code]:text-teal-800"
            }
            [&_hr]:my-8 ${
              darkMode ? "[&_hr]:border-slate-800" : "[&_hr]:border-slate-300"
            }`}
          dangerouslySetInnerHTML={{ __html: htmlBefore }}
        />
      );
    }

    // Determine sample filename based on language
    let filename = "index.html";
    let actualLang = lang;
    let preview = true;

    if (lang === "html-static" || lang === "html-nopreview") {
      filename = "index.html";
      actualLang = "html";
      preview = false;
    } else if (lang === "html") {
      filename = "index.html";
    } else if (lang === "tsx" || lang === "jsx") {
      filename = "App.tsx";
    } else if (lang === "javascript" || lang === "js") {
      filename = "script.js";
    } else if (lang === "typescript" || lang === "ts") {
      filename = "main.ts";
    } else if (lang === "css") {
      filename = "style.css";
    } else if (lang === "json") {
      filename = "data.json";
    } else if (lang === "bash" || lang === "sh") {
      filename = "terminal.sh";
    }

    elements.push(
      <CodeCanvas
        key={`code-${match.index}`}
        code={code}
        language={actualLang}
        filename={filename}
        preview={preview}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  // Any remaining text after the last code block
  const remainingText = normalizedContent.substring(lastIndex);
  if (remainingText.trim()) {
    const htmlRemaining = attachHeadingIds(marked.parse(remainingText) as string);
    elements.push(
      <div
        key={`text-${lastIndex}`}
        className={`prose max-w-none text-base sm:text-lg leading-relaxed transition-colors duration-500 ${
          darkMode ? "text-slate-200" : "text-slate-800"
        }
          [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:tracking-wide [&_h2]:mt-8 [&_h2]:mb-4 ${
            darkMode ? "[&_h2]:text-white" : "[&_h2]:text-slate-900"
          }
          [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-wide [&_h3]:mt-6 [&_h3]:mb-3 ${
            darkMode ? "[&_h3]:text-teal-400" : "[&_h3]:text-teal-600"
          }
          [&_p]:leading-relaxed [&_p]:tracking-wide [&_p]:mb-4 ${
            darkMode ? "[&_p]:text-slate-300" : "[&_p]:text-slate-700"
          }
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
          [&_li]:leading-relaxed [&_li]:tracking-wide
          [&_blockquote]:my-6 [&_blockquote]:rounded-2xl [&_blockquote]:p-5 [&_blockquote]:border-l-4 [&_blockquote]:border-teal-500 ${
            darkMode
              ? "[&_blockquote]:bg-slate-900/80 [&_blockquote]:text-slate-300"
              : "[&_blockquote]:bg-white [&_blockquote]:text-slate-700 [&_blockquote]:shadow-sm"
          }
          [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-xs [&_code]:font-mono ${
            darkMode
              ? "[&_code]:bg-slate-800 [&_code]:text-teal-300"
              : "[&_code]:bg-slate-200 [&_code]:text-teal-800"
          }
          [&_hr]:my-8 ${
            darkMode ? "[&_hr]:border-slate-800" : "[&_hr]:border-slate-300"
          }`}
        dangerouslySetInnerHTML={{ __html: htmlRemaining }}
      />
    );
  }

  return <div className="space-y-4">{elements}</div>;
}
