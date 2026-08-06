"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { 
  IoPlayOutline, 
  IoCodeSlashOutline, 
  IoChevronBackOutline, 
  IoSunnyOutline, 
  IoMoonOutline, 
  IoRefreshCircleOutline,
  IoAlertCircleOutline
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

// HTML syntax highlighting function matching GitHub Theme
const highlightHtml = (code: string, dark: boolean): string => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt bridge;");

  // Revert back code bracket entity for matching regex
  escaped = escaped.replace(/&gt bridge;/g, "&gt;");

  // Highlight comments: &lt;!-- ... --&gt;
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)/g, (match: string) => {
    return `<span class="${dark ? 'text-[#8b949e] italic' : 'text-[#6e7781] italic'}">${match}</span>`;
  });

  // Highlight tags, attributes, and strings inside tags
  escaped = escaped.replace(/(&lt;\/?[a-zA-Z0-9\-]+)([\s\S]*?)(&gt;)/gi, (match: string, tagHead: string, tagBody: string, tagEnd: string) => {
    const tagName = tagHead.replace(/&lt;\/?/, "");
    const tagHeadColored = tagHead.replace(tagName, `<span class="${dark ? 'text-[#7ee787]' : 'text-[#116329] font-semibold'}">${tagName}</span>`);

    const bodyColored = tagBody.replace(/([a-zA-Z0-9\-]+)(=)("[^"]*"|'[^']*'|[^\s&gt;]+)/gi, (attrMatch: string, attrName: string, eq: string, attrValue: string) => {
      const coloredName = `<span class="${dark ? 'text-[#ff7b72]' : 'text-[#cf222e]'}">${attrName}</span>`;
      const coloredValue = `<span class="${dark ? 'text-[#a5d6ff]' : 'text-[#0a3069]'}">${attrValue}</span>`;
      return `${coloredName}${eq}${coloredValue}`;
    });

    return `<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${tagHeadColored}</span>${bodyColored}<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${tagEnd}</span>`;
  });

  return escaped;
};

// CSS syntax highlighting function matching GitHub Theme
const highlightCss = (code: string, dark: boolean): string => {
  let escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Highlight comments: /* ... */
  escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)/g, (match: string) => {
    return `<span class="${dark ? 'text-[#8b949e] italic' : 'text-[#6e7781] italic'}">${match}</span>`;
  });

  // Split by brackets to separate selectors from property blocks
  const parts = escaped.split(/(\{[\s\S]*?\})/g);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith("{")) {
      // This is a block of properties: { prop: val; }
      parts[i] = parts[i].replace(/(\{)([\s\S]*?)(\})/g, (match: string, openBrace: string, body: string, closeBrace: string) => {
        const coloredBody = body.replace(/([a-zA-Z0-9\-]+)(\s*:\s*)([^;]+)/gi, (propMatch: string, propName: string, colon: string, propValue: string) => {
          const coloredProp = `<span class="${dark ? 'text-[#79c0ff]' : 'text-[#0550ae]'}">${propName}</span>`;
          const coloredValue = `<span class="${dark ? 'text-[#ff7b72]' : 'text-[#cf222e]'}">${propValue}</span>`;
          return `${coloredProp}${colon}${coloredValue}`;
        });
        return `<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${openBrace}</span>${coloredBody}<span class="${dark ? 'text-[#c9d1d9]' : 'text-[#24292f]'}">${closeBrace}</span>`;
      });
    } else {
      // Selector text
      parts[i] = parts[i].replace(/(\.[a-zA-Z0-9_\-]+)/gi, `<span class="${dark ? 'text-[#d2a8ff]' : 'text-[#8250df] font-semibold'}">$1</span>`);
      parts[i] = parts[i].replace(/(#[a-zA-Z0-9_\-]+)/gi, `<span class="${dark ? 'text-[#d2a8ff]' : 'text-[#8250df] font-semibold'}">$1</span>`);
      parts[i] = parts[i].replace(/\b(body|html|div|p|h1|h2|h3|h4|h5|h6|span|a|ul|li|button|nav|section|table|tr|td|th|thead|tbody|img|form|input|textarea|label|header|footer)\b/gi, `<span class="${dark ? 'text-[#7ee787]' : 'text-[#116329]'}">$1</span>`);
    }
  }

  return parts.join("");
};

interface CodeEditorProps {
  value: string;
  onChange: (val: string) => void;
  language: "html" | "css";
  darkMode: boolean;
  placeholder: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language, darkMode, placeholder }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
      {/* 1. Line Numbers Column */}
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

      {/* 2. Code Text Area & Highlighter Overlay Container */}
      <div className="flex-1 relative overflow-hidden h-full">
        {/* Pre element for displaying highlighted code */}
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
        
        {/* Transparent Textarea for editing input */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onScroll={handleScroll}
          className={`absolute inset-0 p-4 font-mono text-xs sm:text-sm leading-relaxed overflow-auto whitespace-pre bg-transparent border-none outline-none resize-none thin-scrollbar focus:ring-0 focus:outline-none w-full h-full ${
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

export default function SandboxPage() {
  const { darkMode, setDarkMode } = useTheme();
  
  // Sandbox State
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  
  // Output code loaded into the iframe
  const [compiledCode, setCompiledCode] = useState<string>("");
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Load initial code from sessionStorage or default preset
  useEffect(() => {
    const storedHtml = sessionStorage.getItem("sandbox_html");
    const storedCss = sessionStorage.getItem("sandbox_css");
    const storedLang = sessionStorage.getItem("sandbox_lang");
    
    if (storedHtml || storedCss) {
      setHtmlCode(storedHtml || "");
      setCssCode(storedCss || "");
      
      if (storedLang === "css") {
        setActiveTab("css");
      } else {
        setActiveTab("html");
      }
    } else {
      setHtmlCode(DEFAULT_HTML);
      setCssCode(DEFAULT_CSS);
    }
  }, []);

  // Run the sandbox compilation
  const runCode = () => {
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
    
    // Inject stylesheet
    if (compiled.includes("</head>")) {
      compiled = compiled.replace("</head>", `${styleBlock}\n</head>`);
    } else if (compiled.includes("<body>")) {
      compiled = compiled.replace("<body>", `<body>\n${styleBlock}`);
    } else {
      compiled = `${styleBlock}\n${compiled}`;
    }

    // Inject scrolling helper script
    if (compiled.includes("</body>")) {
      compiled = compiled.replace("</body>", `${scrollScript}</body>`);
    } else {
      compiled = `${compiled}${scrollScript}`;
    }

    setCompiledCode(compiled);
  };

  // Compile code initially once data is loaded
  useEffect(() => {
    if (htmlCode || cssCode) {
      runCode();
    }
  }, [htmlCode, cssCode]);

  // Reload iframe
  const reloadPreview = () => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = compiledCode;
    }
  };

  return (
    <div className={`h-screen w-screen flex flex-col overflow-hidden font-sans transition-colors duration-500 ${
      darkMode ? "dark bg-[#0d1117] text-[#c9d1d9]" : "bg-[#f6f8fa] text-[#24292f]"
    }`}>
      
      {/* 🚀 Main Header Dashboard (GitHub Styled) */}
      <header className={`flex flex-wrap items-center justify-between px-6 py-3 border-b transition-colors duration-500 z-10 ${
        darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]"
      }`}>
        
        {/* Left Side Controls: Navigation Back & Title */}
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
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <h1 className="text-sm font-bold tracking-wide uppercase bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Live Sandbox Playground
            </h1>
          </div>
        </div>

        {/* Center Side Controls: GitHub-Green Run Button */}
        <div className="flex items-center gap-4 py-2 md:py-0">
          <button
            onClick={runCode}
            className={`flex items-center gap-1.5 text-white font-semibold px-5 py-1.5 rounded-md text-xs tracking-wide transition-all shadow-sm ${
              darkMode
                ? "bg-[#238636] hover:bg-[#2ea043] shadow-[#238636]/10"
                : "bg-[#1f883d] hover:bg-[#208b3a] shadow-emerald-700/10"
            }`}
            title="Kompilasi kode dan perbarui preview"
          >
            <IoPlayOutline className="text-sm text-white stroke-[3]" />
            <span>Run Code</span>
          </button>
        </div>

        {/* Right Side Controls: Dark Theme Toggle */}
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

      {/* 💻 Editor & Live Preview Workspace */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* 1. Left Editor Panel */}
        <section className={`w-full md:w-1/2 flex flex-col border-r h-1/2 md:h-full transition-colors duration-500 ${
          darkMode ? "bg-[#0d1117] border-[#30363d]" : "bg-white border-[#d0d7de]"
        }`}>
          
          {/* Tab Selection (HTML vs CSS) - Styled like GitHub PR Tabs */}
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

          {/* Active Tab Editor Textarea with Syntax Highlighting */}
          <div className="flex-1 flex overflow-hidden relative">
            {activeTab === "html" ? (
              <CodeEditor
                value={htmlCode}
                onChange={setHtmlCode}
                language="html"
                darkMode={darkMode}
                placeholder="Tulis kode HTML di sini..."
              />
            ) : (
              <CodeEditor
                value={cssCode}
                onChange={setCssCode}
                language="css"
                darkMode={darkMode}
                placeholder="Tulis kode CSS di sini..."
              />
            )}
          </div>
        </section>

        {/* 2. Right Live Preview Panel (Simulated Browser Wrapper) */}
        <section className={`w-full md:w-1/2 flex flex-col p-4 h-1/2 md:h-full transition-colors duration-500 ${
          darkMode ? "bg-[#0d1117]" : "bg-[#f6f8fa]"
        }`}>
          
          {/* Simulated Browser Frame Wrap */}
          <div className={`flex-1 flex flex-col overflow-hidden rounded-lg border bg-white shadow-xl transition-colors duration-500 ${
            darkMode ? "border-[#30363d] shadow-black/50" : "border-[#d0d7de] shadow-slate-200/50"
          }`}>
            
            {/* Mock Browser Header URL Bar */}
            <div className={`flex items-center justify-between border-b px-4 py-2.5 select-none transition-colors duration-500 ${
              darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]"
            }`}>
              
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/50"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/50"></span>
              </div>

              {/* Address Mock Input */}
              <div className={`mx-4 flex flex-1 max-w-md items-center justify-center gap-1.5 rounded-md px-4 py-1 text-[11px] font-mono border transition-colors duration-500 ${
                darkMode ? "bg-[#0d1117] border-[#30363d] text-[#8b949e]" : "bg-white border-[#d0d7de] text-[#57606a]"
              }`}>
                <span className="text-emerald-500 font-semibold">https://</span>
                <span className="truncate">sandbox.belajar-css.id/test.html</span>
              </div>

              {/* Window Utilities Reload Button */}
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

            {/* Simulated Frame Canvas viewport */}
            <div className="flex-1 bg-white relative">
              {compiledCode ? (
                <iframe
                  ref={iframeRef}
                  srcDoc={compiledCode}
                  title="Sandbox Live Preview Frame"
                  className="w-full h-full border-none bg-white"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center gap-2">
                  <IoAlertCircleOutline className="text-4xl text-teal-400" />
                  <p className="text-sm font-semibold">Tidak ada preview yang aktif</p>
                  <p className="text-xs">Klik tombol <strong>Jalankan (Run)</strong> untuk memuat kompilasi kode.</p>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
