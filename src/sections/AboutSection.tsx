import { CheckCircle2, MapPin } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { evidences, person } from "../data/siteData";
import yoImage from "../assets/yo.jpeg";

export function AboutSection() {
  return (
    <section
      id="perfil"
      className="w-full bg-tinta-900 py-16 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(61,141,181,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Perfil"
              title="Trayectoria en sistemas institucionales"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Photo Column */}
          <ScrollReveal direction="left">
            <div className="relative max-w-[260px] lg:max-w-none">
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden border border-tinta-700 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <img
                  src={yoImage}
                  alt={`Retrato de ${person.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <div className="mb-6">
                <Badge variant="abisal">{person.badge}</Badge>
              </div>

              <div className="space-y-4 text-gris-neutro-300 leading-[1.7]">
                <p>{person.summary}</p>
              </div>

              {/* Evidencias: alcance concreto, sin cifras de vanidad (D-014) */}
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {evidences.map((evidence) => (
                  <li key={evidence} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      aria-hidden="true"
                      className="mt-1 flex-shrink-0 text-abisal-400"
                    />
                    <span className="text-[15px] leading-[1.6] text-blanco-roto-50">
                      {evidence}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 inline-flex items-center gap-2 text-sm text-gris-neutro-300">
                <MapPin size={14} className="text-abisal-400" aria-hidden="true" />
                {person.location}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
