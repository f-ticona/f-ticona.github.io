import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { navLinks } from "../../data/siteData";

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
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
          <a href="#" className="flex items-center">
            <span className="font-press-start text-sm text-blanco-roto-50 tracking-[-0.02em]">
              ingentl
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gris-neutro-300 font-medium hover:text-abisal-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="hidden lg:inline-flex items-center gap-2 bg-abisal-500 text-tinta-900 font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-abisal-400 transition-colors duration-300 shadow-[0_4px_16px_rgba(61,141,181,0.3)]"
          >
            Contáctame
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-blanco-roto-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-tinta-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-2xl font-medium text-blanco-roto-50 hover:text-abisal-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 inline-flex items-center gap-2 bg-abisal-500 text-tinta-900 font-medium px-8 py-3 rounded-xl hover:bg-abisal-400 transition-colors"
            >
              Contáctame
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
