import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { GradientBorder } from "../components/shared/GradientBorder";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { contactInfo, socialLinks } from "../data/siteData";

type FormStatus = "idle" | "sending" | "sent";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="w-full bg-tinta-800 py-[120px] relative">
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(61,141,181,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[2px] text-abisal-400 mb-4 block">
              CONTACTO
            </span>
            <h2
              className="font-source-code font-semibold text-blanco-roto-50 leading-[1.15] tracking-[-1.5px] mb-4"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Hablemos de tu problema
            </h2>
            <p className="text-gris-neutro-300 text-lg leading-[1.7] max-w-[550px] mx-auto">
              ¿Tienes una idea o necesitas resolver algun problema? Cuéntame sobre
              el asunto y te responderé lo mas pronto posible.
            </p>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-abisal-500/10 flex-shrink-0">
                    <item.icon
                      size={20}
                      className={
                        item.label === "Disponibilidad"
                          ? "text-abisal-400"
                          : "text-abisal-400"
                      }
                    />
                  </div>
                  <div>
                    <span className="text-gris-neutro-300 text-xs block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-blanco-roto-50 text-base hover:text-abisal-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-blanco-roto-50 text-base">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="mt-4">
                <span className="text-gris-neutro-300 text-sm mb-4 block">
                  Sígueme
                </span>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-gris-neutro-300 hover:text-abisal-400 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal direction="right" delay={0.3}>
            <GradientBorder>
              <form onSubmit={handleSubmit} className="p-8 lg:p-10">
                <div className="flex flex-col gap-6">
                  {/* Name */}
                  <div>
                    <label className="text-gris-neutro-300 text-xs mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full bg-tinta-900 border border-tinta-700 rounded-xl px-5 py-4 text-blanco-roto-50 placeholder-gris-neutro-300
                      focus:border-abisal-500 focus:shadow-[0_0_0_3px_rgba(61,141,181,0.15)] focus:outline-none
                      transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gris-neutro-300 text-xs mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full bg-tinta-900 border border-tinta-700 rounded-xl px-5 py-4 text-blanco-roto-50 placeholder-gris-neutro-300
                      focus:border-abisal-500 focus:shadow-[0_0_0_3px_rgba(61,141,181,0.15)] focus:outline-none
                      transition-all duration-300"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-gris-neutro-300 text-xs mb-2 block">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="¿Sobre qué quieres hablar?"
                      required
                      className="w-full bg-tinta-900 border border-tinta-700 rounded-xl px-5 py-4 text-blanco-roto-50 placeholder-gris-neutro-300
                      focus:border-abisal-500 focus:shadow-[0_0_0_3px_rgba(61,141,181,0.15)] focus:outline-none
                      transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gris-neutro-300 text-xs mb-2 block">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      required
                      className="w-full bg-tinta-900 border border-tinta-700 rounded-xl px-5 py-4 text-blanco-roto-50 placeholder-gris-neutro-300
                      focus:border-abisal-500 focus:shadow-[0_0_0_3px_rgba(61,141,181,0.15)] focus:outline-none
                      transition-all duration-300 resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <AnimatePresence mode="wait">
                    {status === "sent" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-verde-terminal-500/20 text-verde-terminal-500 border border-verde-terminal-500/30 rounded-xl py-4"
                      >
                        <Check size={18} />
                        <span className="font-medium">
                          ¡Mensaje enviado! Te contactaré pronto.
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <PrimaryButton
                          type="submit"
                          icon={status === "sending" ? Loader2 : Send}
                          disabled={status === "sending"}
                          className="w-full"
                        >
                          {status === "sending"
                            ? "Enviando..."
                            : "Enviar Mensaje"}
                        </PrimaryButton>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </GradientBorder>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
