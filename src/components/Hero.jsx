import { ArrowDownRight, GraduationCap, Mail, MapPin } from "lucide-react";
import BinaryBackground from "./BinaryBackground";

export default function Hero({ profile }) {
  return (
    <section className="relative overflow-hidden">
      {/* Latar Belakang Animasi Kodingan Biner */}
      <BinaryBackground />

      {/* Konten Utama Hero */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/90 px-3.5 py-1.5 text-xs text-slate-300 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Tersedia untuk peluang Web Developer (Full-Time / Freelance)
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">{profile.name}</h1>

        <p className="mt-3 text-xl font-semibold text-emerald-400 sm:text-2xl">{profile.role}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-4 w-4 text-slate-500" />
            {profile.degree}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-slate-500" />
            {profile.location}
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300">{profile.bio}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Lihat Daftar Proyek
            <ArrowDownRight className="h-4 w-4" />
          </a>

          <div className="flex items-center gap-3">
            {/* Ikon GitHub SVG */}
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg border border-slate-800 bg-slate-900/90 p-3 text-slate-300 transition hover:border-slate-700 hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Ikon LinkedIn SVG */}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-slate-800 bg-slate-900/90 p-3 text-slate-300 transition hover:border-slate-700 hover:text-white">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-lg border border-slate-800 bg-slate-900/90 p-3 text-slate-300 transition hover:border-slate-700 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
