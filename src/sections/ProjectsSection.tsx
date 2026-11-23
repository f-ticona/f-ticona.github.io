import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { projects } from "../data/siteData";
import type { Project } from "../data/siteData";

const CONFIDENTIALITY_FULL =
  "Sistema interno. Sin capturas por confidencialidad del cliente.";
const CONFIDENTIALITY_SHORT = "Sin capturas: sistema interno.";

function ProjectCase({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="overflow-hidden rounded-[24px] border border-tinta-700 bg-tinta-800 transition-colors duration-300 hover:border-abisal-500/40">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr]">
          {/* Panel del diagrama: nunca capturas del sistema interno (D-013) */}
          <figure className="flex flex-col justify-center bg-tinta-950 p-4 md:p-6">
            <a
              href={project.diagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-abisal-300"
              aria-label={`Abrir el diagrama de ${project.title} en tamaño completo`}
            >
              <img
                src={project.diagram}
                alt={project.diagramAlt}
                className="w-full h-auto rounded-lg border border-tinta-700 transition-opacity hover:opacity-90"
                loading="lazy"
              />
            </a>
            <figcaption className="mt-3 text-xs text-gris-neutro-300">
              {index === 0 ? CONFIDENTIALITY_FULL : CONFIDENTIALITY_SHORT}
              <a
                href={project.diagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block w-fit text-abisal-300 underline underline-offset-4 hover:text-abisal-400"
              >
                Ver diagrama en tamaño completo ↗
              </a>
            </figcaption>
          </figure>

          {/* Datos */}
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <span className="inline-flex w-fit items-center rounded-full border border-ocre-500/30 bg-ocre-500/10 px-3 py-1 text-xs uppercase tracking-[2px] text-ocre-500">
              Sistema institucional
            </span>

            <div>
              <h3
                className="font-source-code font-medium text-blanco-roto-50 leading-[1.25] tracking-[-0.5px]"
                style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)" }}
              >
                {project.title}
              </h3>
              <p className="mt-2 font-source-code text-[13px] text-gris-neutro-300">
                {project.institution} · {project.period} · {project.role}
              </p>
            </div>

            <p className="text-gris-neutro-300 leading-[1.7]">{project.summary}</p>

            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-gris-neutro-300 leading-[1.7]">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-abisal-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-tinta-900 px-2.5 py-1 text-xs text-gris-neutro-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="w-full bg-tinta-900 py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Proyectos"
              title="Tres sistemas en producción institucional"
              lead="Sin capturas de pantalla: los sistemas son internos. Cada ficha describe rol, stack y arquitectura."
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCase key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
