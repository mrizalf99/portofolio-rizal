export default function Skills({ categories, labels }) {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{labels.title}</h2>
      <p className="mt-2 text-sm text-slate-400">{labels.subtitle}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-base font-bold text-emerald-400">{cat.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
