import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../sections/HeroSection";
import { ServicesSection } from "../sections/ServicesSection";
import { ProcessSection } from "../sections/ProcessSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
