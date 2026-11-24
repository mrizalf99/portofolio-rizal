import { Code2, FileText, Globe } from "lucide-react";

export default function Navbar({ name, labels, lang, setLang }) {
  const languages = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
    { code: "jp", label: "JP" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-slate-100">
          <Code2 className="h-5 w-5 text-emerald-400" />
          <span>Rizal.dev</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#projects" className="transition hover:text-emerald-400">
            {labels.projects}
          </a>
          <a href="#skills" className="transition hover:text-emerald-400">
            {labels.skills}
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            {labels.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Tombol Ganti Bahasa (ID / EN / JP) */}
          <div className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 p-1" role="group" aria-label="Language switcher">
            <Globe className="mx-1.5 h-3.5 w-3.5 text-slate-400" />
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => setLang(item.code)}
                className={`rounded-md px-2 py-1 text-xs font-semibold transition ${lang === item.code ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-slate-100"}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="/cv-muhamad-rizal-fahlefi.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">{labels.downloadCv}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
