import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SkipLink } from "../components/layout/SkipLink";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { EducationSection } from "../sections/EducationSection";
import { ContactSection } from "../sections/ContactSection";

/**
 * Orden aprobado (D-016 / UX-001 §3.1): la prueba —experiencia y proyectos—
 * va antes que las credenciales, porque un reclutador decide en los primeros
 * segundos si sigue leyendo.
 */
export function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-clip focus:outline-none">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
