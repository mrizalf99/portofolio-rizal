import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import { profileData, projectsData, skillCategories } from "./data/projects";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeProject, setActiveProject] = useState(null);

  const categories = ["Semua", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = selectedCategory === "Semua" ? projectsData : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar name={profileData.name} />

      <main>
        <Hero profile={profileData} />

        {/* Section Proyek */}
        <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Proyek Pilihan</h2>
              <p className="mt-2 text-sm text-slate-400">Klik kartu proyek untuk melihat studi kasus, masalah teknis, dan fitur yang dibangun.</p>
            </div>

            {/* Filter Kategori */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${selectedCategory === cat ? "bg-emerald-500 text-slate-950" : "border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={(proj) => setActiveProject(proj)} />
            ))}
          </div>
        </section>

        <Skills categories={skillCategories} />
      </main>

      <Footer profile={profileData} />

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
