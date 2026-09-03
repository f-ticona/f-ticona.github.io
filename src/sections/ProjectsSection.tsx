import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { TiltCard } from "../components/shared/TiltCard";
import { projects, projectFilters } from "../data/siteData";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="w-full bg-tinta-800 py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-4 block">
                PROYECTOS
              </span>
              <h2
                className="font-source-code font-semibold text-blanco-roto-50 leading-[1.15] tracking-[-1.5px]"
                style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
              >
                Trabajos destacados
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeFilter === filter
                      ? "text-tinta-900"
                      : "text-gris-neutro-300 border border-tinta-700 hover:border-abisal-500 hover:text-abisal-400"
                  }`}
                >
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-abisal-500 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TiltCard className="h-full">
                  <div className="h-full rounded-[24px] overflow-hidden border border-tinta-700 bg-tinta-800 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] group hover:border-abisal-500/40 transition-all duration-400">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-tinta-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                        <span className="px-4 py-2 bg-abisal-500 text-tinta-900 text-sm font-medium rounded-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                          Ver Proyecto
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-source-code font-medium text-lg text-blanco-roto-50 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gris-neutro-300 text-sm leading-[1.6] mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-tinta-900 text-gris-neutro-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
