import { ArrowUpRight, FolderGit2, ImageOff } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project, onSelect, noPreviewLabel }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900"
    >
      <div>
        <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800 bg-slate-950">
          {project.image && !imgError ? (
            <img src={project.image} alt={`Preview ${project.title}`} onError={() => setImgError(true)} className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 to-slate-950 text-slate-600">
              <ImageOff className="h-7 w-7" />
              <span className="text-xs">{noPreviewLabel}</span>
            </div>
          )}
        </div>

        <div className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <FolderGit2 className="h-4 w-4" />
              {project.category} • {project.year}
            </span>
            <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-emerald-400" />
          </div>

          <h3 className="mt-3 text-xl font-bold text-slate-100 group-hover:text-emerald-300">{project.title}</h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{project.shortDesc}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 p-6 pt-0">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-300">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
