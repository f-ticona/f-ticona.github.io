import { ArrowUp } from "lucide-react";
import { contactChannels, navLinks, person } from "../../data/siteData";

export function Footer() {
  return (
    <footer className="w-full bg-tinta-900 border-t border-tinta-700">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <span className="font-source-code text-xl font-semibold tracking-[0.08em] text-blanco-roto-50">
                {person.firm.name}
              </span>
            </div>
            <p className="text-gris-neutro-300 text-sm leading-relaxed">
              Ingeniería y Tecnología al servicio de tu imaginación.
            </p>
            <p className="mt-4 text-sm text-gris-neutro-300">{person.location}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del pie de página">
            <p className="text-blanco-roto-50 font-medium text-lg mb-5">Navegación</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center min-h-11 text-sm text-gris-neutro-300 hover:text-abisal-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-blanco-roto-50 font-medium text-lg mb-5">Contacto</p>
            <div className="flex flex-col gap-3">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-2 min-h-11 text-sm text-gris-neutro-300 hover:text-abisal-400 transition-colors"
                >
                  <channel.icon size={14} aria-hidden="true" className="text-abisal-400 flex-shrink-0" />
                  {channel.label === "Correo" ? person.email : channel.label}
                </a>
              ))}
              <a
                href={person.firm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-11 text-sm text-gris-neutro-300 hover:text-abisal-400 transition-colors"
              >
                ingentl.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tinta-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gris-neutro-300">
            © {new Date().getFullYear()} {person.firm.name} · {person.location}
          </p>
          <div className="flex items-center gap-5">
            {person.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.label} (se abre en una pestaña nueva)`}
                className="flex items-center justify-center w-11 h-11 text-gris-neutro-300 hover:text-abisal-400 transition-colors duration-300"
              >
                <social.icon size={20} aria-hidden="true" />
              </a>
            ))}
            <a
              href="#main"
              className="inline-flex items-center gap-2 min-h-11 text-sm text-gris-neutro-300 hover:text-abisal-400 transition-colors"
            >
              Volver arriba
              <ArrowUp size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
