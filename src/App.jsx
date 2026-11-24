import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import { translations } from "./data/projects";

export default function App() {
  const [lang, setLang] = useState("id");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const content = translations[lang];
  const { profile, projects, skillCategories } = content;

  const categories = ["ALL", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === "ALL" ? projects : projects.filter((p) => p.category === selectedCategory);

  const activeProject = projects.find((p) => p.id === activeProjectId) || null;

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    setSelectedCategory("ALL");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar name={profile.name} labels={content.nav} lang={lang} setLang={handleLanguageChange} />

      <main>
        <Hero profile={profile} labels={content.hero} />

        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">{content.projectsSection.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{content.projectsSection.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${selectedCategory === cat ? "bg-emerald-500 text-slate-950" : "border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700"}`}
                >
                  {cat === "ALL" ? content.projectsSection.allCategory : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={(proj) => setActiveProjectId(proj.id)} noPreviewLabel={content.projectsSection.noPreview} />
            ))}
          </div>
        </section>

        <Skills categories={skillCategories} labels={content.skillsSection} />
      </main>

      <Footer profile={profile} labels={content.footer} />

      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} labels={content.modal} />
    </div>
  );
}
