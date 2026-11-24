import { CheckCircle2, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false);

  // Reset status error gambar setiap kali proyek yang dibuka berganti
  useEffect(() => {
    setImgError(false);
  }, [project]);

  if (!project) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              {project.category} ({project.year})
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-lg border border-slate-800 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Preview Screenshot Ukuran Besar */}
        {project.image && !imgError && (
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
            <img src={project.image} alt={`Screenshot ${project.title}`} onError={() => setImgError(true)} className="max-h-80 w-full object-cover object-top" />
          </div>
        )}

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-300">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <h4 className="font-semibold text-slate-100">Latar Belakang Masalah</h4>
            <p className="mt-1 text-slate-400">{project.problem}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <h4 className="font-semibold text-slate-100">Solusi & Implementasi Teknis</h4>
            <p className="mt-1 text-slate-400">{project.solution}</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-100">Fitur Utama yang Dibangun</h4>
            <ul className="mt-2.5 space-y-2">
              {project.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-100">Tech Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-800 pt-5">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source Code
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
