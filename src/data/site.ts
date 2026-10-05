/**
 * Single source of truth for all Vishnu Infra content.
 * Only company-supplied information is stored here.
 * Add new projects / machinery / gallery images by extending these arrays.
 */

import heroHighway from "@/assets/hero-highway.jpg";
import aboutRoad from "@/assets/about-road.jpg";
import machineryFleet from "@/assets/machinery-fleet.jpg";
import projectExpressway from "@/assets/project-expressway.jpg";
import projectBridge from "@/assets/project-bridge.jpg";
import projectEarthwork from "@/assets/project-earthwork.jpg";
import projectNight from "@/assets/project-night.jpg";
import whyChoose from "@/assets/why-choose.jpg";
import nagarjunaSagarDam from "@/assets/nagarjuna-sagar-dam.jpg";
import varanasiKolkataSector3 from "@/assets/varanasi-kolkata-sector3.jpg";
import varanasiKolkataSector6 from "@/assets/varanasi-kolkata-sector6.jpg";
import bhanpuraCanal from "@/assets/bhanpura-canal.jpg";
import delhiMumbaiExpressway from "@/assets/delhi-mumbai-expressway.jpg";

export const images = {
  heroHighway,
  aboutRoad,
  machineryFleet,
  projectExpressway,
  projectBridge,
  projectEarthwork,
  projectNight,
  whyChoose,
  nagarjunaSagarDam,
  varanasiKolkataSector3,
  varanasiKolkataSector6,
  bhanpuraCanal,
  delhiMumbaiExpressway,
};

export const company = {
  name: "VISHNU INFRA",
  brand: "Vishnu Infra",
  tagline: "Construction & Infrastructure",
  established: "2006",
  experienceYears: "20+",
  completedProjects: "18+",
  address: "Pali, Rajasthan – 306401, India",
  phone: "+91 9829933255",
  phoneAlt: "+91 8412900229",
  whatsapp: "919829933255",
  email: "Vishnuinfra.2900@gmail.com",
  instagram: "https://www.instagram.com/vishnu_infra_29/",
  linkedin: "https://www.linkedin.com/in/vishnu-infra-4508a941b/",
} as const;

export const telHref = `tel:${company.phone.replace(/\s/g, "")}`;
export const telAltHref = `tel:${company.phoneAlt.replace(/\s/g, "")}`;
export const whatsappHref = `https://wa.me/${company.whatsapp}`;
export const mailHref = `mailto:${company.email}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Machinery", to: "/machinery" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: 2006, suffix: "", label: "Established", plain: true },
  { value: 0, suffix: "", label: "Project Experience", text: "Government & PWD" },
] as const;

export const workProcess = [
  {
    step: "01",
    title: "Plan",
    description: "Project understanding, planning and resource preparation.",
  },
  {
    step: "02",
    title: "Execute",
    description:
      "Professional execution using experienced teams and construction equipment.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Focused execution toward quality, timely completion and project requirements.",
  },
] as const;

export const capabilities = [
  {
    no: "01",
    title: "Highway Construction",
    description:
      "Road and highway construction for infrastructure and government projects.",
  },
  {
    no: "02",
    title: "C.C. Road Construction",
    description:
      "Construction of concrete road infrastructure according to project requirements.",
  },
  {
    no: "03",
    title: "Bridges & Culverts",
    description:
      "Infrastructure work involving bridges, culverts and associated construction requirements.",
  },
  {
    no: "04",
    title: "Earthwork",
    description:
      "Earthwork and site preparation activities required for infrastructure development.",
  },
  {
    no: "05",
    title: "Machinery & Equipment",
    description:
      "Access to construction machinery supporting large-scale project execution.",
  },
  {
    no: "06",
    title: "Government Tender Projects",
    description:
      "Experience working on government and PWD-related infrastructure projects.",
  },
] as const;

export type ServiceIcon =
  | "highway"
  | "concrete"
  | "bridge"
  | "earthwork"
  | "machinery"
  | "infrastructure";

export const services: {
  slug: string;
  title: string;
  icon: ServiceIcon;
  short: string;
  detail: string;
  image: string;
}[] = [
  {
    slug: "highway-construction",
    title: "Highway Construction",
    icon: "highway",
    short: "Road and highway construction for infrastructure and government projects.",
    detail:
      "Vishnu Infra undertakes highway construction work for infrastructure and government projects, supported by experienced project teams and construction equipment.",
    image: heroHighway,
  },
  {
    slug: "cc-road",
    title: "C.C. Road Construction",
    icon: "concrete",
    short: "Concrete road infrastructure built to project requirements.",
    detail:
      "Construction of concrete (C.C.) roads carried out according to the requirements defined for each project.",
    image: aboutRoad,
  },
  {
    slug: "bridges-culverts",
    title: "Bridges & Culverts",
    icon: "bridge",
    short: "Bridges, culverts and associated construction requirements.",
    detail:
      "Infrastructure work involving bridges, culverts and the associated construction requirements of road projects.",
    image: projectBridge,
  },
  {
    slug: "earthwork",
    title: "Earthwork",
    icon: "earthwork",
    short: "Earthwork and site preparation for infrastructure development.",
    detail:
      "Earthwork and site preparation activities required before and during infrastructure development work.",
    image: projectEarthwork,
  },
  {
    slug: "machinery-rental",
    title: "Machinery Rental",
    icon: "machinery",
    short: "Construction machinery supporting large-scale project execution.",
    detail:
      "Construction machinery and equipment available to support project execution requirements.",
    image: machineryFleet,
  },
  {
    slug: "road-infrastructure",
    title: "Road Infrastructure",
    icon: "infrastructure",
    short: "Road infrastructure works for public and government projects.",
    detail:
      "Road infrastructure works undertaken as part of government tender and infrastructure development projects.",
    image: projectNight,
  },
];

export const whyChooseUs = [
  {
    title: "20+ Years of Experience",
    description: "Established in 2006 with two decades of construction experience.",
    icon: "calendar",
  },
  {
    title: "Infrastructure Focus",
    description:
      "Focused on road, highway and related infrastructure construction.",
    icon: "road",
  },
  {
    title: "Government Project Experience",
    description: "Experience working with PWD and government-related projects.",
    icon: "shield",
  },
  {
    title: "Construction Equipment",
    description: "Strong machinery resources supporting project execution.",
    icon: "truck",
  },
] as const;

export type ProjectStatus = "Completed" | "Ongoing";

export type Project = {
  name: string;
  category: string;
  status: ProjectStatus;
  location?: string;
  image: string;
};

/** Add further projects here — only include details supplied by the company. */
export const projects: Project[] = [
  {
    name: "Delhi–Mumbai Expressway",
    category: "Expressway",
    status: "Completed",
    image: delhiMumbaiExpressway,
  },
  {
    name: "Ganga Expressway",
    category: "Expressway",
    status: "Completed",
    image: projectNight,
  },
  {
    name: "Varanasi–Kolkata Expressway Sector 3",
    category: "Expressway",
    status: "Completed",
    image: varanasiKolkataSector3,
  },
  {
    name: "Varanasi–Kolkata Expressway Sector 6",
    category: "Expressway",
    status: "Ongoing",
    image: varanasiKolkataSector6,
  },
  {
    name: "Nagarjuna Sagar Dam Project",
    category: "Dam & Irrigation",
    location: "Hyderabad",
    status: "Completed",
    image: nagarjunaSagarDam,
  },
  {
    name: "Bhanpura Canal Project",
    category: "Canal & Irrigation",
    status: "Completed",
    image: bhanpuraCanal,
  },
  {
    name: "Hapur Bypass",
    category: "Bypass Road",
    status: "Completed",
    image: projectBridge,
  },
  {
    name: "Akkalkot Highway Project",
    category: "Highway",
    status: "Ongoing",
    image: projectEarthwork,
  },
  {
    name: "Multai Highway Project",
    category: "Highway",
    status: "Ongoing",
    image: aboutRoad,
  },
  {
    name: "Hapur Bypass Highway Project",
    category: "Highway",
    status: "Ongoing",
    image: projectExpressway,
  },
];

/**
 * Machinery. Optional fields (quantity, model, capacity, image) are shown only
 * when supplied — never fill them with assumed values.
 */
export type Machine = {
  name: string;
  quantity?: string;
  model?: string;
  capacity?: string;
  image?: string;
};

export const machinery: Machine[] = [
  { name: "Tippers" },
  { name: "Excavator" },
  { name: "Grader" },
  { name: "Road Roller" },
  { name: "Tandem Roller" },
  { name: "Backhoe Loader" },
  { name: "Stone Crusher" },
  { name: "Batching Plant" },
  { name: "Hot Mix Plant" },
  { name: "Paver" },
  { name: "Water Tanker" },
];

export type GalleryCategory =
  | "Project Sites"
  | "Machinery"
  | "Road Construction"
  | "Infrastructure Work";

export const galleryCategories: GalleryCategory[] = [
  "Project Sites",
  "Machinery",
  "Road Construction",
  "Infrastructure Work",
];

/**
 * Gallery items. `placeholder: true` marks reference imagery that is not an
 * actual Vishnu Infra photograph — replace with real site photos when available.
 */
export const gallery: {
  src: string;
  alt: string;
  category: GalleryCategory;
  placeholder: boolean;
}[] = [
  {
    src: heroHighway,
    alt: "Highway construction site with paver and road roller at sunset",
    category: "Road Construction",
    placeholder: true,
  },
  {
    src: aboutRoad,
    alt: "Concrete road being laid by a paver machine with site crew",
    category: "Road Construction",
    placeholder: true,
  },
  {
    src: machineryFleet,
    alt: "Fleet of excavators, grader, roller and tipper trucks at a construction yard",
    category: "Machinery",
    placeholder: true,
  },
  {
    src: projectEarthwork,
    alt: "Excavator carrying out earthwork for a road embankment",
    category: "Project Sites",
    placeholder: true,
  },
  {
    src: projectBridge,
    alt: "Bridge pier construction with reinforcement steel and crane",
    category: "Infrastructure Work",
    placeholder: true,
  },
  {
    src: projectExpressway,
    alt: "Aerial view of a multi-lane expressway with a bridge flyover",
    category: "Infrastructure Work",
    placeholder: true,
  },
  {
    src: projectNight,
    alt: "Night-time asphalt paving work under floodlights",
    category: "Project Sites",
    placeholder: true,
  },
  {
    src: whyChoose,
    alt: "Road roller compacting fresh asphalt surface",
    category: "Machinery",
    placeholder: true,
  },
];

export const leadership = [
  { name: "Laduram Ji Vishnoi", role: "Director / Owner" },
  { name: "Shyam Ji Vishnoi", role: "Director / Owner" },
] as const;

export const faqs = [
  {
    q: "What type of construction work does Vishnu Infra undertake?",
    a: "Vishnu Infra focuses on road, highway, C.C. road, bridges and culverts, earthwork and related infrastructure construction.",
  },
  {
    q: "Where is Vishnu Infra based?",
    a: "Vishnu Infra is based in Pali, Rajasthan.",
  },
  {
    q: "When was Vishnu Infra established?",
    a: "Vishnu Infra was established in 2006.",
  },
  {
    q: "Does Vishnu Infra work on government projects?",
    a: "Yes. The company works on government and PWD-related projects.",
  },
  {
    q: "What machinery does Vishnu Infra have?",
    a: "Vishnu Infra has construction equipment including tippers, excavators, graders, rollers, pavers, hot mix plant, batching plant and other equipment.",
  },
] as const;

export const projectTypes = [
  "Highway Construction",
  "C.C. Road Construction",
  "Bridges & Culverts",
  "Earthwork",
  "Machinery Rental",
  "Road Infrastructure",
  "Other",
] as const;
