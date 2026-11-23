import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Disclosure } from "../components/ui/Disclosure";
import { certifications, courses, education } from "../data/siteData";
import type { Course } from "../data/siteData";

const featuredCourses = courses.filter((course) => course.featured);
const remainingCourses = courses.filter((course) => !course.featured);

function CourseList({ items }: { items: Course[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      {items.map((course) => (
        <li
          key={course.name}
          className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-4"
        >
          <span className="text-gris-neutro-300 leading-[1.6]">{course.name}</span>
          <span className="font-source-code text-[13px] text-gris-neutro-300 whitespace-nowrap">
            {course.hours} h · {course.year}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function EducationSection() {
  return (
    <section id="formacion" className="w-full bg-tinta-900 py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Formación"
              title="Títulos, cursos y certificaciones"
              lead="Formación académica, 28 cursos y 8 certificaciones, todos con respaldo documental."
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-10 lg:gap-12">
          {/* Formación académica */}
          <ScrollReveal>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-5">
                Formación académica
              </h3>
              <ul className="flex flex-col gap-5">
                {education.map((item) => (
                  <li
                    key={item.degree}
                    className="flex flex-col gap-1 border-l-2 border-tinta-700 pl-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
                  >
                    <div>
                      <p className="text-blanco-roto-50 font-medium">{item.degree}</p>
                      <p className="text-sm text-gris-neutro-300">{item.institution}</p>
                    </div>
                    <p className="font-source-code text-[13px] text-gris-neutro-300 whitespace-nowrap">
                      {item.status} · {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Cursos */}
          <ScrollReveal>
            <div className="rounded-2xl border border-tinta-700 bg-tinta-800 p-6 md:p-8">
              <h3 className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-5">
                Cursos
              </h3>
              <CourseList items={featuredCourses} />

              <div className="mt-6">
                <Disclosure
                  id="cursos-restantes"
                  collapsedLabel={`Ver los ${remainingCourses.length} cursos restantes (${courses.length} en total)`}
                  expandedLabel="Mostrar solo los destacados"
                >
                  <p className="mt-5 mb-4 text-xs uppercase tracking-[2px] text-gris-neutro-200">
                    Resto del historial
                  </p>
                  <CourseList items={remainingCourses} />
                </Disclosure>
              </div>
            </div>
          </ScrollReveal>

          {/* Certificaciones */}
          <ScrollReveal>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-5">
                Certificaciones
              </h3>
              <ul className="flex flex-col gap-3">
                {certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-6"
                  >
                    <span className="text-gris-neutro-300 leading-[1.6]">
                      {certification.name}
                      <span className="text-gris-neutro-200"> · {certification.institution}</span>
                    </span>
                    <span className="font-source-code text-[13px] text-gris-neutro-300 whitespace-nowrap">
                      {certification.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
