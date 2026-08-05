"use client";

import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";

interface CodeCanvasProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeCanvas({
  code,
  language = "html",
  filename = "index.html",
}: CodeCanvasProps) {
  const [copied, setCopied] = useState(false);

  const lines = code.trim().split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Syntax highlighter for HTML & XML code
  const highlightHtmlLine = (line: string) => {
    if (line.trim().startsWith("<!--") || line.includes("-->")) {
      // Handle full or partial HTML comments
      return <span className="text-slate-500 italic">{line}</span>;
    }

    // Tokenize HTML doctype, tags, attributes, strings, and plain text
    const regex = /(<!DOCTYPE\s+html>|<\/?[a-zA-Z0-9\-]+|\/?>|[\w\-]+=(?="|\')|".*?"|'.*?'|[^<>"']+)/gi;
    const tokens = line.match(regex) || [line];

    return tokens.map((token, i) => {
      // DOCTYPE
      if (/^<!DOCTYPE\s+html>/i.test(token)) {
        return (
          <span key={i} className="text-purple-400 font-bold">
            {token}
          </span>
        );
      }
      // HTML Opening or Closing Tags e.g. <html, <body>, </h1>, <img
      if (/^<\/?[a-zA-Z0-9\-]+/i.test(token)) {
        const isClosing = token.startsWith("</");
        const tagName = token.replace(/^<\/?/, "");
        return (
          <span key={i}>
            <span className="text-slate-400">{isClosing ? "</" : "<"}</span>
            <span className="text-cyan-400 font-bold">{tagName}</span>
          </span>
        );
      }
      // Closing Brackets > or />
      if (token === ">" || token === "/>") {
        return (
          <span key={i} className="text-slate-400 font-semibold">
            {token}
          </span>
        );
      }
      // Attributes e.g. href=, src=, class=, alt=
      if (/^[\w\-]+=/i.test(token)) {
        const attrName = token.replace(/=$/, "");
        return (
          <span key={i}>
            <span className="text-amber-300 font-semibold">{attrName}</span>
            <span className="text-slate-400">=</span>
          </span>
        );
      }
      // Quoted Strings e.g. "id", "utf-8", "https://..."
      if (/^(".*?"|'.*?')$/.test(token)) {
        return (
          <span key={i} className="text-emerald-300">
            {token}
          </span>
        );
      }

      // Default plain text inside tags
      return (
        <span key={i} className="text-slate-200">
          {token}
        </span>
      );
    });
  };

  // Syntax highlighter for JavaScript, TypeScript, CSS & General code
  const highlightGenericLine = (line: string) => {
    if (line.trim().startsWith("//")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    const tokens = line.split(
      /(".*?"|'.*?'|`.*?`|\b(?:const|let|var|function|return|import|export|from|default|async|await|if|else|for|while|try|catch|type|interface|class|extends|new|true|false|null|undefined)\b)/g
    );

    return tokens.map((token, i) => {
      if (/^(".*?"|'.*?'|`.*?`)$/.test(token)) {
        return (
          <span key={i} className="text-emerald-300">
            {token}
          </span>
        );
      }
      if (
        /^(const|let|var|function|return|import|export|from|default|async|await|if|else|for|while|try|catch|type|interface|class|extends|new|true|false|null|undefined)$/.test(
          token
        )
      ) {
        return (
          <span key={i} className="text-pink-400 font-bold">
            {token}
          </span>
        );
      }
      if (/\b\w+(?=\()/.test(token)) {
        return (
          <span key={i} className="text-cyan-400 font-semibold">
            {token}
          </span>
        );
      }
      return (
        <span key={i} className="text-slate-200">
          {token}
        </span>
      );
    });
  };

  const isHtml =
    language.toLowerCase() === "html" ||
    language.toLowerCase() === "xml" ||
    filename.endsWith(".html");

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0d1117] shadow-2xl shadow-black/50">
      {/* Code Editor Header Bar (Mac / VSCode Canvas Header) */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#161b22] px-4 py-3 select-none">
        {/* Mac Window Control Dots */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></span>
          <span className="h-3 w-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50"></span>
          <span className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50"></span>

          {/* Filename Tab */}
          <div className="ml-3 flex items-center gap-1.5 rounded-md bg-[#0d1117] px-3 py-1 text-xs font-mono font-medium text-slate-300 border border-slate-800">
            <span className="h-2 w-2 rounded-full bg-teal-400"></span>
            {filename}
          </div>
        </div>

        {/* Right Controls: Language Badge & Copy Button */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-amber-400">
            {language}
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
            title="Salin kode"
          >
            {copied ? (
              <>
                <IoCheckmarkOutline className="text-emerald-400 text-sm" />
                <span className="text-emerald-400 font-semibold">Tersalin!</span>
              </>
            ) : (
              <>
                <IoCopyOutline className="text-slate-400 text-xs" />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor Body Canvas with Thin Scrollbar */}
      <div className="overflow-x-auto thin-scrollbar p-4 font-mono text-xs sm:text-sm leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="hover:bg-slate-800/40 transition-colors">
                {/* Line Number Column */}
                <td className="w-8 select-none pr-4 text-right font-mono text-xs text-slate-600">
                  {index + 1}
                </td>
                {/* Code Content Column */}
                <td className="whitespace-pre pr-4 font-mono">
                  {isHtml ? highlightHtmlLine(line) : highlightGenericLine(line)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
