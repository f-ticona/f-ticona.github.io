import { Globe, Mail, MapPin, MessageCircle } from "lucide-react";
import { ScrollReveal } from "../components/shared/ScrollReveal";
import { SectionHeader } from "../components/shared/SectionHeader";
import { GradientBorder } from "../components/shared/GradientBorder";
import { ContactTile } from "../components/contact/ContactTile";
import { contactChannels, person } from "../data/siteData";

export function ContactSection() {
  return (
    <section id="contacto" className="w-full bg-tinta-800 py-16 md:py-24 lg:py-28 relative overflow-hidden">
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(61,141,181,0.08) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <ScrollReveal>
          <div className="mb-12 lg:mb-16">
            <SectionHeader
              eyebrow="Contacto"
              title="Hablemos"
              lead="Respondo por correo o WhatsApp. Sin formularios: el enlace va directo."
              align="center"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
          {/* Columna izquierda: los dos canales principales y la ciudad */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-[2px] text-gris-neutro-200 block mb-2">
                  Correo
                </span>
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 text-blanco-roto-50 text-lg break-all hover:text-abisal-400 transition-colors"
                >
                  <Mail size={18} className="text-abisal-400 flex-shrink-0" aria-hidden="true" />
                  {person.email}
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[2px] text-gris-neutro-200 block mb-2">
                  WhatsApp
                </span>
                <a
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blanco-roto-50 text-lg hover:text-abisal-400 transition-colors"
                >
                  <MessageCircle size={18} className="text-abisal-400 flex-shrink-0" aria-hidden="true" />
                  Enlace directo
                  <span className="sr-only">(se abre en una pestaña nueva)</span>
                </a>
                <p className="mt-1 text-sm text-gris-neutro-300">
                  Sin publicar el número de teléfono.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-[2px] text-gris-neutro-200 block mb-2">
                  Ubicación
                </span>
                <p className="inline-flex items-center gap-2 text-blanco-roto-50">
                  <MapPin size={18} className="text-abisal-400 flex-shrink-0" aria-hidden="true" />
                  {person.location}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Columna derecha: tiles de enlace directo, sin formulario */}
          <ScrollReveal direction="right" delay={0.2}>
            <GradientBorder>
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactChannels.map((channel) => (
                    <ContactTile key={channel.label} channel={channel} />
                  ))}

                  <a
                    href={person.firm.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[88px] flex-col justify-between gap-4 rounded-2xl border border-tinta-700 bg-tinta-900 p-5 transition-colors duration-300 hover:border-abisal-500/60 sm:col-span-2"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-abisal-500/10">
                      <Globe size={20} className="text-abisal-400" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[2px] text-gris-neutro-200 mb-1">
                        {person.firm.name}
                      </span>
                      <span className="block text-blanco-roto-50">ingentl.com</span>
                      <span className="mt-1 block text-xs text-gris-neutro-300">
                        Firma de servicios de software
                      </span>
                      <span className="sr-only">(se abre en una pestaña nueva)</span>
                    </span>
                  </a>
                </div>
              </div>
            </GradientBorder>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
