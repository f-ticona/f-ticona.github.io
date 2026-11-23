import { motion } from "framer-motion";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { experiences } from "../data/siteData";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="w-full bg-tinta-800 py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Experiencia"
            title="Dónde y qué construí"
            lead="Cuatro registros verificables de la hoja de vida, del más reciente al más antiguo."
          />
        </ScrollReveal>

        <div className="relative mt-12 lg:mt-16">
          {/* Rail único a la izquierda: con viñetas largas, alternar lados obliga
              al ojo a saltar el eje en cada bloque (UX-001 §4.3). */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" aria-hidden="true">
            <div className="absolute inset-0 bg-tinta-700" />
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                background: "linear-gradient(to bottom, #3d8db5, #336a85)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>

          <ol className="flex flex-col gap-10 lg:gap-14">
            {experiences.map((experience, index) => (
              <li key={`${experience.company}-${experience.start}`} className="relative pl-8 lg:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-abisal-500 border-[3px] border-tinta-800"
                />

                <ScrollReveal delay={index * 0.1}>
                  <div>
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                      <h3
                        className="font-source-code font-medium text-blanco-roto-50 leading-[1.25] tracking-[-0.5px]"
                        style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)" }}
                      >
                        {experience.company}
                      </h3>
                      <p className="font-source-code text-[13px] text-gris-neutro-300 whitespace-nowrap">
                        {experience.start} – {experience.end}
                      </p>
                    </div>

                    <p className="mt-2 text-abisal-300 text-[15px] font-medium">
                      {experience.role}
                      <span className="text-gris-neutro-300 font-normal"> · {experience.area}</span>
                    </p>

                    {experience.modality && (
                      <p className="mt-1 text-[13px] text-gris-neutro-300">
                        {experience.modality}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-gris-neutro-300 leading-[1.7]"
                        >
                          <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-abisal-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
