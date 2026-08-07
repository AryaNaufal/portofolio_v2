"use client";

import { useState } from "react";
import { IoCheckmarkOutline, IoCopyOutline, IoCreateOutline } from "react-icons/io5";

interface CodeCanvasProps {
  code: string;
  language?: string;
  filename?: string;
  preview?: boolean;
}

const getHtmlSupportForCss = (cssCode: string): string => {
  const css = cssCode.toLowerCase();
  
  if (css.includes("kontainer-flex") || css.includes("navbar") || css.includes("justify-content") || css.includes("align-items") || css.includes("flex-direction")) {
    return `<!-- HTML Preset: Flexbox Layout -->
<nav class="navbar">
  <div class="logo">BelajarCSS</div>
  <div class="menu">
    <a href="#">Beranda</a>
    <a href="#">Tutorial</a>
    <a href="#">Tentang</a>
  </div>
</nav>

<div class="kontainer-flex">
  <div class="kartu">
    <h3>Modul 1</h3>
    <p>Dasar-dasar tata letak Flexbox satu dimensi.</p>
  </div>
  <div class="kartu">
    <h3>Modul 2</h3>
    <p>Pengaturan justify-content dan align-items.</p>
  </div>
  <div class="kartu">
    <h3>Modul 3</h3>
    <p>Membuat grid item fleksibel dengan properti gap.</p>
  </div>
</div>`;
  }
  
  if (css.includes("galeri-grid") || css.includes("grid-template") || css.includes("katalog-4-kolom") || css.includes("fr") || css.includes("auto-fit")) {
    return `<!-- HTML Preset: CSS Grid Gallery -->
<div class="galeri-wrapper">
  <h2>Galeri Foto Responsif (2D Grid)</h2>
  
  <div class="galeri-grid kontainer-3-kolom katalog-4-kolom galeri-responsif-otomatis">
    <div class="foto photo-1">Foto 1</div>
    <div class="foto photo-2">Foto 2</div>
    <div class="foto photo-3">Foto 3</div>
    <div class="foto photo-4">Foto 4</div>
    <div class="foto photo-5">Foto 5</div>
    <div class="foto photo-6">Foto 6</div>
  </div>
</div>`;
  }
  
  if (css.includes("kontainer-induk") || css.includes("badge-diskon") || css.includes("position: absolute") || css.includes("position: fixed") || css.includes("position: sticky") || css.includes("z-index")) {
    return `<!-- HTML Preset: Absolute & Sticky Positions -->
<div class="kontainer-induk" style="border: 2px dashed #cbd5e1; border-radius: 8px; width: 100%; height: 350px; position: relative;">
  <div class="badge-diskon">Diskon 50%</div>
  <h2 class="sub-judul-uppercase" style="margin-top: 40px; text-align: center;">Produk Premium</h2>
  
  <div class="lapisan-bawah" style="width: 120px; height: 120px; background: #e2e8f0; border-radius: 8px; position: absolute; top: 120px; left: 50px; display: flex; align-items: center; justify-content: center; font-size: 10px;">Lapisan Bawah</div>
  <div class="lapisan-atas" style="width: 100px; height: 100px; background: #14b8a6; color: white; border-radius: 8px; position: absolute; top: 150px; left: 90px; display: flex; align-items: center; justify-content: center; font-size: 10px;">Lapisan Atas</div>
  
  <div class="sidebar-daftar-isi" style="position: absolute; right: 20px; top: 80px; width: 100px; padding: 10px; background: #f1f5f9; border-radius: 6px; font-size: 10px; text-align: center;">Sidebar Sticky</div>
  <div class="tombol-wa-fixed" style="position: absolute; bottom: 20px; right: 20px; background: #25d366; color: white; padding: 8px 12px; border-radius: 20px; font-size: 10px; font-weight: bold; cursor: pointer;">WA Chat</div>
</div>`;
  }
  
  if (css.includes("f59e0b") || css.includes("0b0f14") || css.includes("external css") || css.includes("inter")) {
    return `<!-- HTML Preset: External CSS Link -->
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metode External CSS</title>
    <!-- Menghubungkan File CSS Terpisah -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Belajar External CSS</h1>
    <p>File HTML dan CSS ini terpisah di file berbeda, namun terhubung menjadi satu kesatuan rapi.</p>
</body>
</html>`;
  }

  // Dynamic Selector Parser for any custom CSS block
  const htmlElements: string[] = [];
  
  // Extract all class selectors: .class-name
  const classMatches = Array.from(cssCode.matchAll(/\.([a-zA-Z0-9_\-]+)/g)).map(m => m[1]);
  const uniqueClasses = Array.from(new Set(classMatches));

  // Extract all ID selectors: #id-name
  const idMatches = Array.from(cssCode.matchAll(/#([a-zA-Z0-9_\-]+)/g)).map(m => m[1]);
  const uniqueIds = Array.from(new Set(idMatches));

  // Build HTML for ID selectors
  uniqueIds.forEach(idName => {
    if (idName === "judul-utama-situs") {
      htmlElements.push(`<h1 id="${idName}">Portofolio Arya Naufal</h1>`);
    } else {
      htmlElements.push(`<div id="${idName}" style="padding: 12px;">Elemen dengan ID #${idName}</div>`);
    }
  });

  // Build HTML for Class selectors
  uniqueClasses.forEach(className => {
    if (className === "teks-sorot") {
      htmlElements.push(`<p class="${className}">Paragraf dengan kelas .${className}</p>`);
      htmlElements.push(`<button class="${className}" style="padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; margin-top: 8px;">Tombol dengan kelas .${className}</button>`);
    } else if (className.includes("tombol") || className.includes("btn") || className.includes("button")) {
      htmlElements.push(`<button class="${className}" style="padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">Tombol .${className}</button>`);
    } else if (className.includes("kartu") || className.includes("card")) {
      htmlElements.push(`<div class="${className}" style="padding: 20px; border-radius: 12px; margin-bottom: 12px;">\n  <h3>Judul Kartu</h3>\n  <p>Isi konten kartu dengan class .${className}</p>\n</div>`);
    } else {
      htmlElements.push(`<div class="${className}" style="padding: 12px; margin-bottom: 8px;">Elemen dengan kelas .${className}</div>`);
    }
  });

  // Check for HTML tag selectors (p, h1, h2, h3, button)
  if (css.includes("p {") || css.includes("p,")) {
    if (!htmlElements.some(el => el.includes("<p"))) {
      htmlElements.push(`<p>Ini adalah paragraf contoh untuk melihat gaya selector p.</p>`);
    }
  }
  if (css.includes("h1 {") || css.includes("h1,")) {
    if (!htmlElements.some(el => el.includes("<h1"))) {
      htmlElements.push(`<h1>Judul Utama (h1)</h1>`);
    }
  }
  if (css.includes("h2 {") || css.includes("h2,")) {
    if (!htmlElements.some(el => el.includes("<h2"))) {
      htmlElements.push(`<h2>Subjudul Halaman (h2)</h2>`);
    }
  }
  if (css.includes("button {") || css.includes("button,")) {
    if (!htmlElements.some(el => el.includes("<button"))) {
      htmlElements.push(`<button style="padding: 10px 20px; border-radius: 6px; cursor: pointer;">Tombol Tag Button</button>`);
    }
  }

  // Fallback if no specific selectors were found
  if (htmlElements.length === 0) {
    htmlElements.push(`<h1 id="judul-utama-situs">Judul Utama Situs (h1)</h1>`);
    htmlElements.push(`<h2>Subjudul Halaman (h2)</h2>`);
    htmlElements.push(`<p>Ini adalah sebuah paragraf teks (tag &lt;p&gt;) yang digunakan untuk melihat pengaruh gaya CSS Anda.</p>`);
    htmlElements.push(`<button class="tombol-aksi teks-sorot" style="padding: 10px 20px; border-radius: 6px;">Contoh Tombol</button>`);
  }

  return `<!-- HTML Auto-Generated for CSS Selectors -->
<div class="container" style="padding: 24px; max-width: 600px; margin: 0 auto;">
  ${htmlElements.join("\n  ")}
</div>`;
};

const getFullHtmlDocument = (htmlSnippet: string): string => {
  const trimmed = htmlSnippet.trim();
  
  // If it already looks like a complete HTML document, don't wrap it
  if (trimmed.toLowerCase().startsWith("<!doctype") || trimmed.toLowerCase().includes("<html")) {
    return htmlSnippet;
  }

  const cleanSnippet = trimmed.replace(/<!--[\s\S]*?-->/g, "").trim().toLowerCase();
  
  // If the snippet is already a complete <head> block
  if (cleanSnippet.startsWith("<head")) {
    return `<!DOCTYPE html>
<html lang="id">
${htmlSnippet}
<body>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center; max-width: 450px; background-color: #f8fafc; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); margin: 40px auto; font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 200px;">
    <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; font-weight: 700;">Metadata Berhasil Dimuat! 🔍</h3>
    <p style="color: #475569; font-size: 13px; line-height: 1.6; margin-bottom: 12px; text-align: center;">Tag <code>&lt;head&gt;</code> telah diletakkan dengan benar di dalam dokumen sandbox.</p>
    <p style="color: #64748b; font-size: 11px; font-style: italic; margin-bottom: 0; border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center;">Gunakan fitur <strong>Inspect Element</strong> peramban Anda pada frame pratinjau ini untuk memeriksa isi tag &lt;head&gt; secara langsung.</p>
  </div>

</body>
</html>`;
  }

  // Check if the snippet contains meta, link or title tags at its root level
  const isHeadTagOnly = cleanSnippet.startsWith("<meta") || 
                        cleanSnippet.startsWith("<link") || 
                        cleanSnippet.startsWith("<title");

  if (isHeadTagOnly) {
    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  ${htmlSnippet}
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
      margin: 0;
      background-color: #ffffff;
      color: #1e293b;
      line-height: 1.6;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
    }
  </style>
</head>
<body>

  <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center; max-width: 450px; background-color: #f8fafc; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
    <h3 style="color: #0f172a; margin-top: 0; font-size: 16px; font-weight: 700;">Metadata Berhasil Dimuat! 🔍</h3>
    <p style="color: #475569; font-size: 13px; line-height: 1.6; margin-bottom: 12px;">Tag <code>&lt;meta&gt;</code> atau <code>&lt;link&gt;</code> telah diletakkan dengan benar di dalam bagian <strong>&lt;head&gt;</strong> dokumen sandbox.</p>
    <p style="color: #64748b; font-size: 11px; font-style: italic; margin-bottom: 0; border-top: 1px solid #e2e8f0; padding-top: 12px;">Gunakan fitur <strong>Inspect Element</strong> peramban Anda pada frame pratinjau ini untuk memeriksa isi tag &lt;head&gt; secara langsung.</p>
  </div>

</body>
</html>`;
  }
  
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Latihan</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 24px;
      margin: 0;
      background-color: #ffffff;
      color: #1e293b;
      line-height: 1.6;
    }
  </style>
</head>
<body>

${htmlSnippet}

</body>
</html>`;
};

export default function CodeCanvas({
  code,
  language = "html",
  filename = "index.html",
  preview = true,
}: CodeCanvasProps) {
  const [copied, setCopied] = useState(false);

  const lines = code.trim().split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTryIt = () => {
    const isHtml =
      language.toLowerCase() === "html" ||
      language.toLowerCase() === "xml" ||
      filename.endsWith(".html");

    let htmlToStore = isHtml ? getFullHtmlDocument(code) : getHtmlSupportForCss(code);
    let cssToStore = !isHtml ? code : "";

    // If HTML block includes external style.css reference, auto-populate the paired style.css
    if (isHtml && (code.includes('href="style.css"') || code.includes("External CSS") || code.includes("style.css"))) {
      cssToStore = `/* Seluruh Aturan Desain Tersimpan Rapi di Sini */
body {
    background-color: #0b0f14;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    padding: 30px;
}

h1 {
    color: #f59e0b;
    letter-spacing: 0.02em;
}

p {
    color: #94a3b8;
    line-height: 1.6;
}`;
    }

    sessionStorage.setItem("sandbox_html", htmlToStore);
    sessionStorage.setItem("sandbox_css", cssToStore);
    sessionStorage.setItem("sandbox_lang", language.toLowerCase());
    sessionStorage.setItem("sandbox_filename", filename);
    
    window.open("/sandbox", "_blank");
  };

  // Syntax highlighter for HTML & XML code
  const highlightHtmlLine = (line: string) => {
    if (line.trim().startsWith("<!--") || line.includes("-->")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    const regex = /(<!DOCTYPE\s+html>|<\/?[a-zA-Z0-9\-]+|\/?>|[\w\-]+=(?="|\')|".*?"|'.*?'|[^<>"']+)/gi;
    const tokens = line.match(regex) || [line];

    return tokens.map((token, i) => {
      if (/^<!DOCTYPE\s+html>/i.test(token)) {
        return (
          <span key={i} className="text-purple-400 font-bold">
            {token}
          </span>
        );
      }
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
      if (token === ">" || token === "/>") {
        return (
          <span key={i} className="text-slate-400 font-semibold">
            {token}
          </span>
        );
      }
      if (/^[\w\-]+=/i.test(token)) {
        const attrName = token.replace(/=$/, "");
        return (
          <span key={i}>
            <span className="text-amber-300 font-semibold">{attrName}</span>
            <span className="text-slate-400">=</span>
          </span>
        );
      }
      if (/^(".*?"|'.*?')$/.test(token)) {
        return (
          <span key={i} className="text-emerald-300">
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

  const showTryItButton = (isHtml || language.toLowerCase() === "css") && preview;

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

        {/* Right Controls: Language Badge & Copy/TryIt Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-amber-400">
            {language}
          </span>

          {/* Try It Yourself Button */}
          {showTryItButton && (
            <button
              onClick={handleTryIt}
              className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              title="Buka di Live Sandbox interaktif"
            >
              <IoCreateOutline className="text-xs text-slate-400" />
              <span>Coba Sendiri</span>
            </button>
          )}

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
