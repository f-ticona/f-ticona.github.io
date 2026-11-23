/**
 * Fuente de contenido del sitio.
 *
 * Regla (D-002): cada dato de este archivo debe poder rastrearse hasta
 * `repos/hoja-de-vida/docs/CV.md` o hasta el inventario `PLAN-001`.
 * No se agregan clientes, métricas, tecnologías ni fechas que no consten ahí.
 *
 * Datos deliberadamente ausentes (D-007): teléfono, cédula, dirección,
 * fecha de nacimiento, estado civil, números de título/diploma y nombres de
 * referentes.
 */
import { Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import type { SVGProps } from "react";

import pgeSolicitudesDiagram from "../assets/diagramas/pge-solicitudes.svg";
import pgeModulosDiagram from "../assets/diagramas/pge-modulos.svg";
import ypfbSaludDiagram from "../assets/diagramas/ypfb-salud-ocupacional.svg";

type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;

/* --- Identidad --- */

export interface SocialLink {
  icon: IconComponent;
  href: string;
  label: string;
}

export interface Person {
  name: string;
  badge: string;
  headline: string;
  academicLine: string;
  summary: string;
  location: string;
  email: string;
  whatsapp: string;
  socials: SocialLink[];
  firm: { name: string; url: string };
}

export const person: Person = {
  name: "Freddy Alejandro Ticona Alanoca",
  badge: "Analista de Sistemas · Técnico Universitario Superior 2024",
  headline: "Desarrollo de software, bases de datos y Linux",
  academicLine:
    "Ingeniería de Sistemas (UPEA) — etapa de graduación · Técnico Universitario Superior en Análisis de Sistemas, 2024",
  // Perfil del CV (versión técnica), con la condición académica fijada por D-009.
  summary:
    "Estudiante de Ingeniería de Sistemas en etapa de graduación, con formación técnica y experiencia en el ciclo de vida de desarrollo de software e infraestructura. Trabajo con servidores Linux, bases de datos y desarrollo web; he capacitado usuarios a nivel nacional, elaborado documentación técnica y resuelto incidencias en entornos de alta responsabilidad. Interés en soluciones escalables con microservicios y en la mejora de procesos tecnológicos.",
  location: "El Alto, La Paz, Bolivia",
  email: "fa.alanoca@gmail.com",
  whatsapp: "https://wa.me/qr/SHQLWDAXXGVKO1",
  socials: [
    { icon: LinkedinIcon, href: "https://linkedin.com/in/fticona", label: "LinkedIn" },
    { icon: GithubIcon, href: "https://github.com/f-ticona", label: "GitHub" },
  ],
  firm: { name: "ingentl", url: "https://ingentl.com" },
};

/* --- Evidencias (D-014): alcance, no cantidad --- */

export const evidences: string[] = [
  "Capacitación a usuarios en 9 departamentos",
  "Manuales de usuario y documentación técnica",
  "Levantamiento de requisitos y coordinación técnica",
  "QA y análisis de seguridad en entornos de alta responsabilidad",
];

/* --- Experiencia (CV §4, orden descendente) --- */

export interface Experience {
  company: string;
  role: string;
  area: string;
  start: string;
  end: string;
  modality?: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Yacimientos Petrolíferos Fiscales Bolivianos",
    role: "Pasante",
    area: "Gerencia de Tecnologías de la Información Corporativa (GTIC) · Dirección de Ingeniería de Software Corporativa (DISC)",
    start: "may 2026",
    end: "nov 2026",
    modality: "Presencial · 6 meses",
    highlights: [
      "Reconstrucción de un sistema de salud ocupacional en Grails: módulos y migraciones de datos",
      "Requisitos y diseño, QA y aplicación de hallazgos de análisis de seguridad",
      "Manifiestos de CI/CD, DDD y mantenimiento de sistemas Spring Boot y Angular",
    ],
  },
  {
    company: "Procuraduría General del Estado",
    role: "Desarrollador principal",
    area: "Trabajo Dirigido · Unidad de Tecnologías de la Información (UTIC)",
    start: "sep 2024",
    end: "feb 2025",
    modality: "Tiempo completo · 5 meses",
    highlights: [
      "Sistema de gestión de solicitudes de información con arquitectura de microservicios",
      "Definición del stack y la arquitectura: Angular, Java Spring Boot y PostgreSQL",
      "Ciudadanía Digital de AGETIC y firma digital sobre PDF en respuestas a entidades",
    ],
  },
  {
    company: "Procuraduría General del Estado",
    role: "Pasante",
    area: "Unidad de Tecnologías de la Información y Comunicación (UTIC)",
    start: "ene 2024",
    end: "jul 2024",
    highlights: [
      "Diseño y prototipado (mockups) de módulos del sistema institucional",
      "Capacitación y soporte a usuarios de los 9 departamentos de Bolivia",
      "Control de calidad, reporte de errores y redacción del Manual de Usuario final",
    ],
  },
  {
    company: "Universidad Pública de El Alto",
    role: "Auxiliar de Docencia",
    area: "Carrera de Ingeniería de Sistemas · Física III (FIS-325)",
    start: "oct 2023",
    end: "dic 2023",
    modality: "Categoría invitado · 3 meses",
    highlights: [
      "Auxiliar de docencia de Física III en el tercer semestre, 2 horas semanales",
    ],
  },
];

/* --- Formación académica (CV §3, sin números de título ni diploma) --- */

export interface Education {
  degree: string;
  institution: string;
  status: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Pública de El Alto",
    status: "En curso — etapa de graduación",
    period: "2020 – actualidad",
  },
  {
    degree: "Técnico Universitario Superior en Análisis de Sistemas",
    institution: "Universidad Pública de El Alto",
    status: "Titulado",
    period: "dic 2024",
  },
  {
    degree: "Bachiller en Humanidades",
    institution: "U.E. Unión Europea B, La Paz",
    status: "Concluido",
    period: "2017",
  },
];

/* --- Cursos (CV §5: 28 registros; 14 destacados) --- */

export interface Course {
  name: string;
  institution: string;
  hours: number;
  year: string;
  featured: boolean;
}

export const courses: Course[] = [
  { name: "Desarrollo de Software con Spring Boot", institution: "UPEA", hours: 60, year: "2024", featured: true },
  { name: "Desarrollo Web con Laravel y Angular", institution: "UPEA", hours: 60, year: "2023", featured: true },
  { name: "Administración de servidores con Linux", institution: "UPEA", hours: 60, year: "2023", featured: true },
  { name: "Bases de Datos", institution: "UPEA", hours: 100, year: "2023", featured: true },
  { name: "Administración de Bases de Datos", institution: "UPEA", hours: 100, year: "2023", featured: true },
  { name: "Oracle PL/SQL", institution: "UPEA", hours: 90, year: "2023", featured: true },
  { name: "Programación Orientada a Objetos", institution: "UPEA", hours: 100, year: "2023", featured: true },
  { name: "Estructura de Datos", institution: "UPEA", hours: 100, year: "2023", featured: true },
  { name: "JavaScript", institution: "UPEA", hours: 30, year: "2023", featured: true },
  { name: "Python, programación básica-intermedia", institution: "UPEA", hours: 60, year: "2021", featured: true },
  { name: "Administración y configuración de servidores", institution: "UPEA", hours: 48, year: "2023", featured: true },
  { name: "Bases de datos MySQL", institution: "UPEA", hours: 90, year: "2022", featured: true },
  { name: "Administración de Servidores", institution: "UPEA", hours: 60, year: "2021", featured: true },
  { name: "Normas APA 7ma edición", institution: "UPEA", hours: 24, year: "2024", featured: true },
  { name: "SolidWorks Básico", institution: "UPEA", hours: 48, year: "2021", featured: false },
  { name: "Auditoría Forense de Sistemas Operativos", institution: "UPEA", hours: 30, year: "2021", featured: false },
  { name: "Software estadístico STATA", institution: "UPEA", hours: 30, year: "2021", featured: false },
  { name: "Programación Excel nivel ingeniería con macros", institution: "UPEA", hours: 50, year: "2021", featured: false },
  { name: "Virtual Meeting Management (Zoom, Meet)", institution: "UPEA", hours: 48, year: "2021", featured: false },
  { name: "La revolución en 3D", institution: "UPEA", hours: 30, year: "2021", featured: false },
  { name: "Programación ASP.NET", institution: "UPEA", hours: 30, year: "2021", featured: false },
  { name: "Programación Android", institution: "UPEA", hours: 30, year: "2021", featured: false },
  { name: "Mantenimiento de computadoras", institution: "UPEA", hours: 24, year: "2021", featured: false },
  { name: "Curso taller de Ofimática: Excel, Word y PowerPoint", institution: "UPEA", hours: 90, year: "2020", featured: false },
  { name: "Informática Forense", institution: "UPEA", hours: 16, year: "2020", featured: false },
  { name: "Introducción a la Programación", institution: "UPEA", hours: 16, year: "2020", featured: false },
  { name: "DATA ECONOMY", institution: "Universidad Tecnológica Boliviana", hours: 12, year: "2019", featured: false },
  { name: "Octava Semana de las Carreras de Ingeniería Electrónica y de Sistemas", institution: "Universidad Tecnológica Boliviana", hours: 24, year: "2019", featured: false },
];

/* --- Certificaciones (CV §6) --- */

export interface Certification {
  name: string;
  institution: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    name: "Curso de Gestión Empresarial: «Cómo administrar y hacer crecer mi negocio»",
    institution: "KOICA, ONU Mujeres y Ministerio de Desarrollo Productivo",
    year: "2026",
  },
  {
    name: "Conversatorio Ruta del Emprendedor: Mujeres, Gestión y Ventas en Acción",
    institution: "GAMEA, UNIFRANZ, CODESPA, Munasim Kullakita, KOICA y ONU Mujeres",
    year: "2026",
  },
  {
    name: "I Feria de Física y Robótica — jurado calificador",
    institution: "Unidad Educativa Privada «DEL SUR»",
    year: "2025",
  },
  {
    name: "Curso de Capacitación Agente Censal",
    institution: "INE y EGPP",
    year: "2024",
  },
  {
    name: "Agente Censal, Censo de Población y Vivienda 2024",
    institution: "INE",
    year: "2024",
  },
  {
    name: "Inspiring Study Conference with Google",
    institution: "Google for Education",
    year: "2020",
  },
  {
    name: "II Torneo Nacional de Robótica «IATRONICS EL ALTO»",
    institution: "Academia Quipus e Importadora Ardunel",
    year: "2019",
  },
  {
    name: "Resultados del Perfil Profesional — test vocacional",
    institution: "Carrera de Psicología, UDABOL",
    year: "2017",
  },
];

/* --- Habilidades e idiomas (CV §7 y §9) --- */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes",
    items: ["Java (POO, avanzado)", "Python", "C++", "C#", "PHP", "JavaScript", "Kotlin (Android)", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks y desarrollo",
    items: ["Spring Boot (microservicios)", "Laravel", "Angular", "Node.js", "ASP.NET", "Android"],
  },
  {
    title: "Bases de datos",
    items: ["MySQL", "Oracle PL/SQL", "PostgreSQL"],
  },
  {
    title: "Sistemas operativos",
    items: ["Linux", "Windows", "Android"],
  },
  {
    title: "Servidores e infraestructura",
    items: ["Administración de servidores Linux", "Zabbix", "Ansible", "NetServer", "GLPI"],
  },
  {
    title: "Ofimática",
    items: ["Word", "Excel (macros)", "PowerPoint", "Visio", "Project", "Access"],
  },
  {
    title: "Herramientas y metodologías",
    items: ["Git", "Jira", "OpenProject", "Mockups y diseño de UI", "Manuales de usuario", "Control de calidad (QA)"],
  },
  {
    title: "Plataformas",
    items: ["Zoom", "Google Meet"],
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico" },
];

/* --- Proyectos (CV §11 + diagramas de ASSET) --- */

export interface Project {
  slug: string;
  title: string;
  period: string;
  role: string;
  institution: string;
  summary: string;
  highlights: string[];
  stack: string[];
  diagram: string;
  diagramAlt: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "solicitudes-informacion",
    title: "Sistema centralizado de gestión de solicitudes de información",
    period: "2024 – 2025",
    role: "Desarrollador principal",
    institution: "Procuraduría General del Estado",
    summary:
      "Sistema institucional para la gestión de solicitudes de información, construido sobre una arquitectura de microservicios.",
    highlights: [
      "Definición del stack y la arquitectura: Angular, Java Spring Boot y PostgreSQL",
      "Integración con Ciudadanía Digital de AGETIC para autenticación y aprobación digital",
      "Respuesta a entidades externas con firma digital AGETIC sobre documentos PDF",
    ],
    stack: ["Angular", "Spring Boot", "PostgreSQL", "Microservicios", "AGETIC"],
    diagram: pgeSolicitudesDiagram,
    diagramAlt:
      "Diagrama de arquitectura: Angular en el frontend, Java Spring Boot en el backend con microservicios y PostgreSQL como base de datos; integraciones con Ciudadanía Digital de AGETIC y firma digital sobre PDF.",
  },
  {
    slug: "modulos-institucionales",
    title: "Módulos del sistema institucional",
    period: "2024",
    role: "Pasante",
    institution: "Procuraduría General del Estado",
    summary:
      "Diseño, control de calidad y documentación de módulos del sistema institucional, con capacitación a usuarios en todo el país.",
    highlights: [
      "Diseño y prototipado (mockups) de módulos del sistema",
      "Control de calidad: pruebas, seguimiento de registros y reporte de errores",
      "Manual de Usuario final y capacitación a usuarios de los 9 departamentos",
    ],
    stack: ["Mockups", "QA", "Manuales de usuario", "Capacitación"],
    diagram: pgeModulosDiagram,
    diagramAlt:
      "Diagrama de frentes de trabajo: mockups, pruebas y control de calidad, Manual de Usuario y capacitación a usuarios de los 9 departamentos; banda inferior con soporte técnico de hardware, software, periféricos y conectividad de red.",
  },
  {
    slug: "salud-ocupacional",
    title: "Sistema de salud ocupacional",
    period: "2026",
    role: "Pasante",
    institution: "Yacimientos Petrolíferos Fiscales Bolivianos",
    summary:
      "Reconstrucción de un sistema de salud ocupacional en Grails, con refactor de módulos, migraciones de datos y auditorías.",
    highlights: [
      "Refactor extenso: módulos completos, migraciones de datos y auditorías",
      "Requisitos y diseño, QA y hallazgos de análisis de seguridad",
      "Manifiestos de CI/CD, aplicación de DDD y mantenimiento Spring Boot y Angular",
    ],
    stack: ["Grails", "Spring Boot", "Angular", "CI/CD", "DDD"],
    diagram: ypfbSaludDiagram,
    diagramAlt:
      "Diagrama de la reconstrucción en Grails: tarjeta central con refactor extenso, módulos completos, migraciones de datos y auditorías; frentes de requisitos, QA y seguridad, CI/CD, mantenimiento de Spring Boot y Angular, y capacitación a usuarios.",
  },
];

/* --- Navegación --- */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

/* --- Contacto: enlaces directos, sin formulario (D-009 punto 3) --- */

export interface ContactChannel {
  icon: IconComponent;
  label: string;
  value: string;
  href: string;
  external: boolean;
  hint: string;
}

export const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    label: "Correo",
    value: "fa.alanoca@gmail.com",
    href: "mailto:fa.alanoca@gmail.com",
    external: false,
    hint: "Canal principal",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Enlace directo",
    href: "https://wa.me/qr/SHQLWDAXXGVKO1",
    external: true,
    hint: "Sin publicar el número",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/fticona",
    href: "https://linkedin.com/in/fticona",
    external: true,
    hint: "Trayectoria profesional",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "/f-ticona",
    href: "https://github.com/f-ticona",
    external: true,
    hint: "Código público",
  },
];
