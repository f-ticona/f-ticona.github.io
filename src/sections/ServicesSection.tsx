import { motion } from "framer-motion";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { TiltCard } from "../components/shared/TiltCard";
import { Badge } from "../components/ui/Badge";
import { services } from "../data/siteData";
import type { Service } from "../data/siteData";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <TiltCard className="h-full">
        <div
          className="h-full p-8 rounded-[24px] border border-zinc-200
          bg-white shadow-[0_8px_32px_rgba(0,0,0,0.05)]
          hover:border-violet-600/30 hover:shadow-[0_12px_40px_rgba(124,58,237,0.1)]
          transition-all duration-400 group"
        >
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600/10 mb-5">
            <service.icon
              size={24}
              className="text-violet-400 group-hover:text-orange-400 transition-colors duration-400"
            />
          </div>

          {/* Badge if present */}
          {service.badge && (
            <div className="mb-3">
              <Badge variant="orange">{service.badge}</Badge>
            </div>
          )}

          {/* Title */}
          <h3 className="font-outfit font-medium text-xl text-zinc-900 mb-3 tracking-[-0.5px]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-zinc-600 text-base leading-[1.7] mb-5">
            {service.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {service.techs.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </ScrollReveal>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full bg-zinc-50 py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[2px] text-violet-400 mb-4 block">
              SERVICIOS
            </span>
            <h2
              className="font-outfit font-semibold text-zinc-900 leading-[1.15] tracking-[-1.5px] mb-4"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Soluciones tecnológicas a tu medida
            </h2>
            <p className="text-zinc-600 text-lg leading-[1.7] max-w-[600px]">
              Desde sistemas administrativos hasta aplicaciones móviles, desarrollo
              herramientas que resuelven problemas reales y escalan con tu negocio.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
