import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { Badge } from "../components/ui/Badge";
import { stats, techStack } from "../data/siteData";

function AnimatedCounter({
  value,
  inView,
}: {
  value: string;
  inView: boolean;
}) {
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplay(numericValue);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function StatsRow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex flex-wrap gap-8 lg:gap-12 mt-10">
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.15}>
          <div>
            <div className="font-outfit font-bold text-4xl lg:text-[2.5rem] text-zinc-900">
              <AnimatedCounter value={stat.value} inView={isInView} />
            </div>
            <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-white py-[120px] relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Photo Column */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[24px] overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <img
                  src="src/assets/yo.jpeg"
                  alt="Freddy Alejandro Ticona Alanoca - Analista de Sistemas"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <span className="text-xs font-medium uppercase tracking-[2px] text-violet-400 mb-4 block">
                SOBRE MÍ
              </span>

              <h2
                className="font-outfit font-semibold text-zinc-900 leading-[1.15] tracking-[-1.5px] mb-4"
                style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
              >
                Freddy Alejandro Ticona Alanoca
              </h2>

              <div className="mb-6">
                <Badge variant="violet">
                  Analista de Sistemas | Fundador de INGENtl
                </Badge>
              </div>

              <div className="space-y-4 text-zinc-600 leading-[1.7]">
                <p>
                  Soy analista de sistemas con más de 8 años de experiencia
                  transformando problemas complejos en soluciones digitales
                  elegantes. Mi pasión es crear herramientas tecnológicas que no
                  solo funcionen perfectamente, sino que sean un placer de usar.
                </p>
                <p>
                  Como fundador de INGENtl, he tenido el privilegio de
                  trabajar con empresas de diversos sectores —desde clínicas
                  hasta restaurantes y startups fintech— ayudándoles a optimizar
                  sus procesos y escalar sus operaciones mediante tecnología a
                  medida.
                </p>
                <p>
                  Cuando no estoy programando, me encontrarás explorando nuevas
                  tecnologías, compartiendo conocimiento en la comunidad tech o
                  disfrutando de un buen café en La Paz.
                </p>
              </div>

              {/* Stats */}
              <StatsRow />

              {/* Tech Stack */}
              <div className="mt-10">
                <span className="text-zinc-500 text-sm mb-4 block">
                  Stack Tecnológico
                </span>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="text-zinc-500 hover:text-violet-400 transition-colors duration-300 cursor-default"
                      title={tech}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
