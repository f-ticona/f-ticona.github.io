import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronDown } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { SecondaryButton } from "../components/ui/SecondaryButton";
import { TypingEffect } from "../components/shared/TypingEffect";

export function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-[-2]"
        style={{
          background:
            "linear-gradient(135deg, #5B21B6 0%, #7C3AED 20%, #F97316 40%, #7C3AED 60%, #5B21B6 80%, #F97316 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      {/* Light overlay */}
      <div className="absolute inset-0 z-[-1] bg-white/40" />

      {/* Central glow circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="absolute z-0 w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Badge variant="violet">Consultor IT Independiente</Badge>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-outfit font-semibold text-zinc-900 leading-[1.1] tracking-[-2px] mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
        >
          Freddy Alejandro Ticona Alanoca
        </motion.h1>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span className="font-outfit text-violet-600 text-xl tracking-[1px]">
            <TypingEffect
              text="Analista de Sistemas | Desarrollador de Soluciones"
              speed={40}
              delay={800}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-zinc-700 text-lg leading-[1.7] max-w-[600px] mx-auto mb-10"
        >
          Transformo problemas administrativos complejos en herramientas
          tecnológicas elegantes. Más de 8 años ayudando a empresas y
          emprendedores a optimizar sus procesos con sistemas a medida.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <PrimaryButton
            icon={ArrowDown}
            onClick={() => handleScroll("#servicios")}
          >
            Ver Mis Servicios
          </PrimaryButton>
          <SecondaryButton
            icon={Mail}
            onClick={() => handleScroll("#contacto")}
          >
            Contáctame
          </SecondaryButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={24}
          className="text-zinc-500"
          style={{ animation: "bounce-scroll 2s infinite" }}
        />
      </motion.div>
    </section>
  );
}
