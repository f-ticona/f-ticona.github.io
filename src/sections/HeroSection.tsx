import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronDown } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { SecondaryButton } from "../components/ui/SecondaryButton";
import { TypingEffect } from "../components/shared/TypingEffect";

/* --- Config de partículas --- */
const PARTICLE_COUNT = 30;

interface Particle {
  left: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  dx: string;
  dy: string;
}

function makeParticles(): Particle[] {
  const seeded = [0.17, 0.53, 0.81, 0.29, 0.92, 0.11, 0.67, 0.41, 0.75, 0.05,
    0.36, 0.61, 0.22, 0.88, 0.47, 0.13, 0.71, 0.33, 0.97, 0.08,
    0.56, 0.25, 0.83, 0.44, 0.69, 0.18, 0.51, 0.9, 0.37, 0.77,
    0.14, 0.63, 0.3, 0.95];
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const s = seeded[i % seeded.length];
    const s2 = seeded[(i + 7) % seeded.length];
    const s3 = seeded[(i + 13) % seeded.length];
    // Deriva aleatoria: combina un desplazamiento vertical dominante con
    // una deriva horizontal, en ambas direcciones. La deriva horizontal se
    // acota según la posición left de la partícula para que NUNCA salga del
    // viewport: las que nacen cerca de un borde solo pueden ir hacia dentro.
    const rise = 25 + s2 * 65; // qué tanto sube (25%–90% del alto)
    const horiz = (s3 - 0.5) * 2; // -1..1 hacia izquierda o derecha
    const maxIn = Math.min(s, 1 - s) * 100; // espacio libre a cada lado (%)
    const cappedDrift = horiz * Math.min(8 + s2 * 22, Math.max(4, maxIn - 2));
    const driftX = cappedDrift; // vw, nunca desborda el ancho
    const driftY = -rise; // vh (negativo = sube; puede ser suave o leve)
    return {
      left: `${Math.round(s * 100)}%`,
      size: 2 + ((i * 7) % 4),
      delay: (i % 9) * 1.7 + ((i * 13) % 10) * 0.4,
      duration: 13 + ((i * 11) % 17),
      opacity: 0.18 + ((i * 5) % 10) * 0.05,
      dx: `${Math.round(driftX * 10) / 10}vw`,
      dy: `${Math.round(driftY * 10) / 10}vh`,
    };
  });
}

const PARTICLES = makeParticles();

export function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col">
      {/* Gradiente base agua abisal */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, #1c2733 0%, #141a21 45%, #0d1116 100%)",
        }}
      />

      {/* Letrero ingentl hundido en el fondo del mar: gigante, con blur;
          en reposo casi invisible y enciende al 40% con el pulso de luz */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-press-start text-[clamp(3rem,12vw,15rem)] text-blanco-roto-50 tracking-[0.02em] select-none whitespace-nowrap"
          style={{
            filter: "blur(6px)",
            animation: "sign-glow 11s ease-in-out infinite",
          }}
        >
          ingentl
        </span>
      </div>

      {/* Partículas en suspensión (sedimento / plancton) con deriva aleatoria */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-abisal-300"
            style={{
              left: p.left,
              bottom: "-12px",
              width: p.size,
              height: p.size,
              ["--p-op" as string]: p.opacity,
              ["--p-dx" as string]: p.dx,
              ["--p-dy" as string]: p.dy,
              boxShadow: "0 0 6px rgba(122,184,212,0.4)",
              animation: `particle-drift ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Luz intermitente desde arriba (pulso ocasional) — por encima de
          letrero y partículas: los baña y los hace brillar al iluminarse */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(122,184,212,0.5), transparent 75%)",
            mixBlendMode: "screen",
            animation: "master-beam 11s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content — reserva arriba el alto del navbar fijo (80px) para que
          el badge nunca invada al wordmark en móvil. my-auto centra el
          bloque solo cuando sobra alto; si no cabe, fluye desde el pt. */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto flex-1 flex flex-col items-center px-6 py-24">
        <div className="w-full my-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <Badge variant="abisal">Consultor IT Independiente</Badge>
        </motion.div>

        {/* H1 — nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-source-code font-semibold text-blanco-roto-50 leading-[1.1] tracking-[-2px] mb-4"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
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
          <span className="font-source-code text-abisal-400 text-xl tracking-[1px]">
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
          className="text-gris-neutro-300 text-lg leading-[1.7] max-w-[600px] mx-auto mb-10"
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown
          size={24}
          className="text-gris-neutro-300"
          style={{ animation: "bounce-scroll 2s infinite" }}
        />
      </motion.div>
    </section>
  );
}
