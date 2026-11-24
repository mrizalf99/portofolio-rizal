import { Mail } from "lucide-react";

export default function Footer({ profile }) {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Tertarik berdiskusi atau bekerja sama?</h2>
          <p className="mt-1 text-sm text-slate-400">Hubungi saya untuk posisi Web Developer atau kolaborasi proyek.</p>
        </div>

        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          <Mail className="h-4 w-4" />
          Kirim Email
        </a>
      </div>

      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Dibangun dengan React JS & Tailwind CSS.
      </div>
    </footer>
  );
}
