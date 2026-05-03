import {
  Globe,
  Smartphone,
  Lightbulb,
  Bot,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../components/ui/SocialIcons";
import type { SVGProps } from "react";

type IconComponent = React.ComponentType<SVGProps<SVGSVGElement>> | LucideIcon;

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  techs: string[];
  badge?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  icon: IconComponent;
  href: string;
  label: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Sistemas Web a Medida",
    description:
      "Plataformas web personalizadas para gestión administrativa, inventarios, ventas, y más. Interfaces intuitivas que tu equipo adoptará rápidamente.",
    techs: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Aplicaciones nativas y multiplataforma que llevan tu negocio al bolsillo de tus clientes. Desde apps de delivery hasta herramientas de campo.",
    techs: ["React Native", "Flutter", "Firebase"],
  },
  {
    icon: Lightbulb,
    title: "Consultoría IT",
    description:
      "Análisis de procesos, optimización de infraestructura y estrategia tecnológica. Te ayudo a tomar decisiones informadas sobre tecnología.",
    techs: ["BPMN", "Arquitectura", "Agile"],
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    description:
      "Integración de inteligencia artificial para automatizar tareas repetitivas, chatbots inteligentes y análisis de datos predictivo.",
    techs: ["OpenAI", "LangChain", "Python"],
    badge: "NUEVO",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "DentalPro Gestión",
    description:
      "Sistema integral para administración de clínicas dentales con gestión de citas, historiales y facturación.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=375&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Web",
  },
  {
    id: 2,
    title: "RapidFood Delivery",
    description:
      "Aplicación móvil para pedidos de delivery con seguimiento en tiempo real y panel de administración.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=375&fit=crop",
    tags: ["React Native", "Firebase"],
    category: "Mobile",
  },
  {
    id: 3,
    title: "DataVision Analytics",
    description:
      "Dashboard interactivo con visualización de datos en tiempo real para toma de decisiones empresariales.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=375&fit=crop",
    tags: ["React", "D3.js", "Python"],
    category: "Web",
  },
  {
    id: 4,
    title: "StockMaster Pro",
    description:
      "Sistema de control de inventarios con alertas automáticas, reportes y integración con facturación electrónica.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=375&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL"],
    category: "Web",
  },
  {
    id: 5,
    title: "Optimización FinTech",
    description:
      "Reestructuración de arquitectura de microservicios y optimización de performance para startup fintech.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=375&fit=crop",
    tags: ["Arquitectura", "AWS", "Kubernetes"],
    category: "Consultoría",
  },
  {
    id: 6,
    title: "TaskFlow Mobile",
    description:
      "Aplicación de gestión de tareas con gamificación para equipos de trabajo remotos.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=375&fit=crop",
    tags: ["Flutter", "Firebase"],
    category: "Mobile",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimiento",
    description:
      "Nos reunimos para entender tu negocio, tus procesos actuales y los puntos de dolor. Realizo un análisis profundo para identificar oportunidades de mejora.",
  },
  {
    number: "02",
    title: "Diseño de Solución",
    description:
      "Creo prototipos interactivos y defino la arquitectura técnica. Validamos juntos cada pantalla y flujo antes de escribir una línea de código.",
  },
  {
    number: "03",
    title: "Desarrollo Ágil",
    description:
      "Construyo tu solución en iteraciones de 2 semanas. Recibes demos funcionales regularmente y puedes dar feedback en tiempo real.",
  },
  {
    number: "04",
    title: "Entrega y Soporte",
    description:
      "Despliegue en producción, capacitación a tu equipo y 3 meses de soporte incluidos. También ofrezco planes de mantenimiento continuo.",
  },
];

export const stats: Stat[] = [
  { value: "8+", label: "Años de experiencia" },
  { value: "50+", label: "Proyectos entregados" },
  { value: "30+", label: "Clientes satisfechos" },
  { value: "99%", label: "Satisfacción" },
];

export const techStack: string[] = [
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Flutter",
  "Git",
];

export const socialLinks: SocialLink[] = [
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "freddyyque@gmail.com",
    href: "mailto:freddyyque@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+591 75786379",
    href: "tel:+59175786379",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "La Paz, Bolivia",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilidad",
    value: "Lunes a Sábados, 8:00 - 18:00 (GMT-4)",
    href: null,
  },
];

export const projectFilters = ["Todos", "Web", "Mobile", "Consultoría"];
