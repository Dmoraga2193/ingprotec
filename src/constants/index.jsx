import { Wrench } from "lucide-react";
import { Target } from "lucide-react";
import { Cog } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Earth } from "lucide-react";
import { Handshake } from "lucide-react";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const features = [
  {
    icon: <Wrench />,
    text: "Mejora",
    description:
      "Garantizamos el cumplimiento de los contratos y promovemos la mejora continua en la gestión de calidad.",
  },
  {
    icon: <Target />,
    text: "Objetivos",
    description:
      "Definimos y evaluamos periódicamente los objetivos de calidad.",
  },
  {
    icon: <Cog />,
    text: "Optimización",
    description:
      "Optimizamos los procesos organizacionales para maximizar la eficiencia.",
  },
  {
    icon: <ShieldCheck />,
    text: "Seguridad",
    description:
      "Fomentamos un entorno laboral óptimo, enfocándonos en la capacitación y el desarrollo del personal para asegurar la calidad del trabajo.",
  },
  {
    icon: <Earth />,
    text: "Sostenibilidad",
    description:
      "Implementamos estrategias medioambientales para cumplir con la normativa y minimizar el impacto ambiental.",
  },
  {
    icon: <Handshake />,
    text: "Colaboración",
    description:
      "Fortalecemos la colaboración con la comunidad y los usuarios locales del proyecto.",
  },
];

export const checklistItems = [
  {
    title: "Experiencia sólida",
    description:
      "Contamos con 20 años de experiencia en la industria minera, lo que nos otorga una ventaja competitiva y un fuerte reconocimiento en el sector.",
  },
  {
    title: "Enfoque en licitaciones",
    description:
      "Trabajamos principalmente a través de un portal de licitaciones, enfocándonos en competir mediante precios competitivos y tiempos de entrega eficientes para asegurar el éxito.",
  },
  {
    title: "Especialización en minería",
    description:
      "Nos especializamos en la venta de productos y en el desarrollo de partes y piezas específicas para la minería, cubriendo necesidades clave del sector.",
  },
  {
    title: "Factores críticos para ganar licitaciones",
    description:
      "Sabemos que el éxito en las licitaciones depende de ofrecer precios competitivos y cumplir con los tiempos de entrega, lo que nos impulsa a optimizar nuestra eficiencia y calidad.",
  },
  {
    title: "Negocio integral",
    description:
      "Además de la venta de productos, desarrollamos piezas específicas para la minería, lo que nos permite ofrecer soluciones completas que abarcan desde la manufactura hasta la distribución.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
