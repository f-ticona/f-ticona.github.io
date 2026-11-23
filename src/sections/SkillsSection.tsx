import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { languages, skillGroups } from "../data/siteData";

export function SkillsSection() {
  return (
    <section id="habilidades" className="w-full bg-tinta-800 py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Habilidades"
              title="Stack con el que he trabajado"
              lead="Los ocho grupos de la hoja de vida, sin niveles ni porcentajes que no estén declarados."
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-tinta-700 bg-tinta-800 p-6">
                <h3 className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-tinta-900 px-2.5 py-1 text-xs text-gris-neutro-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 rounded-2xl border border-tinta-700 bg-tinta-800 p-6">
            <h3 className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-4">
              Idiomas
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {languages.map((language) => (
                <li key={language.name} className="text-gris-neutro-300">
                  <span className="text-blanco-roto-50">{language.name}</span>
                  <span aria-hidden="true"> — </span>
                  <span>{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
