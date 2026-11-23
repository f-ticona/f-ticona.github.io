import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useActiveSection } from "../../hooks/useActiveSection";
import { navLinks, person } from "../../data/siteData";

const SECTION_HREFS = navLinks.map((link) => link.href);
const NAV_SECTIONS = navLinks.slice(0, -1);
const CONTACT_LINK = navLinks[navLinks.length - 1];

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const activeSection = useActiveSection(SECTION_HREFS);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Menú móvil: bloqueo de scroll, foco atrapado, Esc y devolución del foco
  // al botón que lo abrió (UX-001 §10.2).
  useEffect(() => {
    if (!menuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
      : [];

    document.body.style.overflow = "hidden";
    focusables[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        aria-label="Navegación principal"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-400 ${isScrolled
          ? "bg-tinta-900/80 backdrop-blur-xl border-b border-tinta-700"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <a href="#main" className="flex items-center py-2">
            <span className="font-source-code text-lg font-semibold tracking-[0.08em] text-blanco-roto-50">
              {person.firm.name}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_SECTIONS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? "true" : undefined}
                className={`inline-flex items-center min-h-11 text-sm font-medium transition-colors duration-300 hover:text-abisal-400 ${
                  activeSection === link.href
                    ? "text-abisal-300 border-b-2 border-abisal-400"
                    : "text-gris-neutro-300 border-b-2 border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={CONTACT_LINK.href}
            onClick={(e) => handleNavClick(e, CONTACT_LINK.href)}
            aria-current={activeSection === CONTACT_LINK.href ? "true" : undefined}
            className="hidden lg:inline-flex items-center gap-2 bg-abisal-500 text-tinta-900 font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-abisal-400 transition-colors duration-300 shadow-[0_4px_16px_rgba(61,141,181,0.3)]"
          >
            {CONTACT_LINK.label}
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-blanco-roto-50"
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-movil"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-tinta-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? "true" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`text-2xl font-medium transition-colors hover:text-abisal-400 ${
                  activeSection === link.href ? "text-abisal-300" : "text-blanco-roto-50"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
