import { socialLinks, navLinks, contactInfo } from "../../data/siteData";

export function Footer() {
  const quickLinks = navLinks;
  const services = [
    "Sistemas Web",
    "Apps Mobile",
    "Consultoría IT",
    "Automatización con IA",
  ];

  return (
    <footer className="w-full bg-tinta-900 border-t border-tinta-700">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <span className="font-press-start text-base text-blanco-roto-50 tracking-[-0.02em]">
                ingentl
              </span>
            </div>
            <p className="text-gris-neutro-300 text-sm leading-relaxed">
              Ingeniería y Tecnología al servicio de tu imaginación.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blanco-roto-50 font-medium text-lg mb-5">Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gris-neutro-300 hover:text-abisal-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-blanco-roto-50 font-medium text-lg mb-5">Servicios</h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span key={service} className="text-sm text-gris-neutro-300">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-blanco-roto-50 font-medium text-lg mb-5">Contacto</h4>
            <div className="flex flex-col gap-3">
              {contactInfo
                .filter((item) => item.label !== "Disponibilidad")
                .map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-gris-neutro-300">
                    <item.icon size={14} className="text-abisal-400 flex-shrink-0" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-abisal-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tinta-700 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gris-neutro-300">
            © {new Date().getFullYear()} ingentl. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gris-neutro-300 hover:text-abisal-400 transition-colors duration-300 hover:scale-110"
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
