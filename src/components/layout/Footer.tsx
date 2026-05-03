import { TextSlideLink } from "../ui/TextSlideLink";
import { socialLinks, navLinks } from "../../data/siteData";

export function Footer() {
  const quickLinks = navLinks;
  const services = [
    "Sistemas Web",
    "Apps Mobile",
    "Consultoría IT",
    "Automatización con IA",
  ];

  return (
    <footer className="w-full bg-white border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/favicon.svg"
                alt="Logo INGENtl"
                width="28"
                height="28"
                className="object-contain"
              />
              <div className="flex items-baseline leading-none gap-[2px]">
                <span className="font-outfit font-light text-[1.25rem] tracking-[0.16em] uppercase text-zinc-900">
                  Ingen
                </span>
                <span className="font-['Cormorant_Garamond'] italic font-semibold text-[1.6rem] -ml-[0.1em] text-transparent bg-clip-text bg-gradient-to-br from-[#3d8ef8] via-[#5ba4ff] to-[#8bc4ff]">
                  tl
                </span>
              </div>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Ingeniería y Tecnología al servicio de tu imaginación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 font-medium text-lg mb-5">Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <TextSlideLink
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-600"
                >
                  {link.label}
                </TextSlideLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-zinc-900 font-medium text-lg mb-5">Servicios</h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-zinc-600">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-900 font-medium text-lg mb-5">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-600">
              <span>[EMAIL_ADDRESS]</span>
              <span>+591 75786379</span>
              <span>La Paz, Bolivia</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} INGENtl. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-zinc-500 hover:text-violet-400 transition-colors duration-300 hover:scale-110"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
