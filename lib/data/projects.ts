export type ProjectStatus = 'ready' | 'in-development' | 'archived';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  accentColor: string;
  status: ProjectStatus;
  statusLabel: string;
  year: string;
  featured: boolean;
  order: number;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
  images: {
    cover: string;
    gallery?: string[];
  };
  seo: {
    title: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'tand',
    name: 'Tand',
    tagline: 'Un almanaque personal de 365 días.',
    shortDescription:
      'Aplicación de rutinas personales para Android y Windows. Sin cuentas. Sin servidores. Solo tú y tu año.',
    fullDescription: `Tand nació de una pregunta concreta: ¿por qué las aplicaciones de hábitos generan más ansiedad de la que resuelven? La mayoría funcionan mediante rachas punitivas que convierten un día malo en un fracaso visible. Tand plantea otra forma de entender la constancia.

La aplicación se articula en torno a un ciclo personal de 365 días, sincronizado con el calendario civil. Cada día tiene un número dentro del ciclo y una fecha real. El progreso no desaparece si te saltas un día; se registra con honestidad, sin castigo.

El diseño toma como referencia los almanaques de precisión y la tipografía suiza: una interfaz de alta densidad informativa que funciona de forma natural, sin tutoriales.`,
    category: 'Aplicación móvil',
    accentColor: '#E09F3E',
    status: 'ready',
    statusLabel: 'Lista para publicar',
    year: '2026',
    featured: true,
    order: 1,
    technologies: ['JavaScript', 'Vite', 'Capacitor', 'Electron', 'SQLite'],
    highlights: [
      'Ciclo de 365 días con sincronización biyectiva con el calendario civil',
      '4 vistas: Día, Semana, Mes y El Gran Mapa de 365 días',
      'Cuatro trimestres del ciclo con nombres propios (Fundación, Consolidación, Profundización, Maestría)',
      'Sistema de backup con verificación criptográfica SHA-256',
      'Anuario del Día 366: balance visual anual e inicio de nuevo ciclo',
      '100% local-first. Sin cuentas, sin servidores, sin red',
      'APK Android compilado. Assets de Google Play Store listos',
      'Disponible también en Windows 10 mediante Electron',
      '24/24 pruebas unitarias pasando',
    ],
    repoUrl: undefined,
    images: {
      cover: '/images/tand/feature_graphic_1024x500.jpg',
      gallery: [
        '/images/tand/screenshot_1_day.jpg',
        '/images/tand/screenshot_2_map.jpg',
        '/images/tand/screenshot_3_stats.jpg',
      ],
    },
    seo: {
      title: 'Tand — Almanaque personal de 365 días | Raúl Liébana',
      description:
        'Aplicación de rutinas personales para Android y Windows. Ciclo de 365 días, privacidad total y diseño editorial de precisión. Sin cuentas ni servidores.',
    },
  },
  {
    slug: 'let-him-cook',
    name: 'Let Him Cook',
    tagline: 'Plataforma gastronómica con comunidad, mapas e IA.',
    shortDescription:
      'Aplicación full-stack de recetas y comunidad gastronómica. Backend Java Spring Boot, frontend Angular 21, mapas con Leaflet e integración de IA.',
    fullDescription: `Let Him Cook es una plataforma completa para descubrir, compartir y cocinar recetas. El proyecto nació como ejercicio de arquitectura full-stack y ha crecido hasta convertirse en una aplicación con identidad propia.

El backend está construido con Java Spring Boot siguiendo una arquitectura en capas limpia: controladores, servicios, repositorios, DTOs y mappers. Incluye sistema de autenticación, gestión de errores personalizada y está completamente containerizado con Docker.

El frontend en Angular 21 cubre desde la exploración de recetas hasta un modo cocina paso a paso, un foro de comunidad, perfiles públicos, sistema de logros y un mapa interactivo de locales gastronómicos construido con Leaflet. El servicio de IA integrado añade una capa de inteligencia al descubrimiento de contenido.

Toda la aplicación se orquesta con docker-compose: un comando levanta backend y frontend listos para producción.`,
    category: 'Plataforma web',
    accentColor: '#C84B31',
    status: 'in-development',
    statusLabel: 'En desarrollo',
    year: '2026',
    featured: true,
    order: 2,
    technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Docker', 'Leaflet'],
    highlights: [
      'Backend Java Spring Boot con arquitectura en capas (Controllers, Services, Repositories, DTOs)',
      'Sistema de seguridad y autenticación propio',
      'Frontend Angular 21 con TypeScript 5.9',
      'Mapa interactivo de locales gastronómicos con Leaflet',
      'Integración de servicio de IA para descubrimiento de contenido',
      'Sistema de logros, recompensas y perfil público',
      'Modo cocina paso a paso con gestión de estado dedicada',
      'Containerización completa: Docker + docker-compose',
    ],
    repoUrl: 'https://github.com/rauliesan/let-him-cook',
    images: {
      cover: '/images/let-him-cook/cover.jpg',
      gallery: [],
    },
    seo: {
      title: 'Let Him Cook — Plataforma gastronómica full-stack | Raúl Liébana',
      description:
        'Plataforma web de recetas y comunidad gastronómica. Java Spring Boot, Angular 21, Leaflet e IA. Arquitectura full-stack containerizada con Docker.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getPrevNextProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const idx = sorted.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}

