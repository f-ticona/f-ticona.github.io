import { motion } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { processSteps } from "../data/siteData";

function StepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <ScrollReveal
      delay={index * 0.2}
      direction={isLeft ? "right" : "left"}
    >
      <div
        className={`relative flex items-start gap-6 ${
          isLeft
            ? "lg:flex-row lg:text-right"
            : "lg:flex-row-reverse lg:text-left"
        } flex-row text-left`}
      >
        {/* Content */}
        <div
          className={`flex-1 group ${isLeft ? "lg:pr-12" : "lg:pl-12"} pr-0`}
        >
          <span
            className="font-outfit font-bold text-5xl text-zinc-200 group-hover:text-violet-400 group-hover:scale-110 transition-all duration-300 inline-block mb-2"
          >
            {step.number}
          </span>
          <h3
            className="font-outfit font-medium text-2xl text-zinc-900 mb-3 tracking-[-1px]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            {step.title}
          </h3>
          <p className="text-zinc-600 text-base leading-[1.7] max-w-[400px]">
            {step.description}
          </p>
        </div>

        {/* Dot on timeline */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-violet-600 border-[3px] border-white z-10 mt-6" />
        </div>

        {/* Spacer for alternating layout */}
        <div className="hidden lg:block flex-1" />
      </div>
    </ScrollReveal>
  );
}

export function ProcessSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="proceso" className="w-full bg-white py-[120px] relative">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[2px] text-violet-400 mb-4 block">
              PROCESO
            </span>
            <h2
              className="font-outfit font-semibold text-zinc-900 leading-[1.15] tracking-[-1.5px] mb-4"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Cómo trabajo
            </h2>
            <p className="text-zinc-600 text-lg leading-[1.7] max-w-[550px] mx-auto">
              Un enfoque estructurado que garantiza resultados. Cada proyecto
              sigue estas etapas para asegurar que la solución final exceda tus
              expectativas.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-zinc-200" />
            {/* Animated line */}
            <motion.div
              ref={lineRef}
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, #7C3AED, #F97316)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {processSteps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
