import { Code2, FileText } from "lucide-react";

export default function Navbar({ name }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-slate-100">
          <Code2 className="h-5 w-5 text-emerald-400" />
          <span>{name.split(" ")[1]}.dev</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#projects" className="transition hover:text-emerald-400">
            Proyek
          </a>
          <a href="#skills" className="transition hover:text-emerald-400">
            Keahlian
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            Kontak
          </a>
        </nav>

        <a
          href="/cv-muhamad-rizal-fahlefi.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
        >
          <FileText className="h-4 w-4" />
          Unduh CV
        </a>
      </div>
    </header>
  );
}
