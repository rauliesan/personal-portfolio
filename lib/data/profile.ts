export const profile = {
  name: 'Raúl Liébana Sánchez',
  nameShort: 'Raúl Liébana',
  initials: 'RL',
  title: 'Software Developer',
  tagline: 'Backend, automatización y producto digital.',
  about: `Desarrollo software de principio a fin: desde la arquitectura backend hasta la experiencia del usuario final. Me interesan especialmente las APIs bien diseñadas, los sistemas que resuelven problemas reales y los productos que cuidan los detalles.

Actualmente trabajo como desarrollador RPA, automatizando procesos con Python, UiPath y OpenRPA. En paralelo construyo proyectos propios con Java, Spring Boot y tecnologías móviles, y amplío formación en IA y Big Data.

Lo que más valoro en el trabajo es la coherencia: que el código esté tan pensado como el producto que representa.`,
  contact: {
    email: 'raullsdev@gmail.com',
    github: 'https://github.com/rauliesan',
    linkedin: 'https://www.linkedin.com/in/raúl-liébana-sánchez-9a1489385/',
  },
  photo: '/images/profile/photo.jpg', // ← Añade tu foto aquí
  experience: [
    {
      company: 'United ITs',
      role: 'RPA Developer',
      type: 'Jornada parcial',
      period: 'May. 2026 — Actualidad',
      duration: '7 meses',
      location: 'Dos Hermanas, Sevilla',
      description:
        'Desarrollo y mantenimiento de procesos de automatización con Python, OpenRPA y UiPath. Proyecto adicional con FastAPI y Docker.',
      skills: ['Python', 'OpenRPA', 'UiPath', 'FastAPI', 'Docker'],
    },
    {
      company: 'United ITs',
      role: 'RPA Developer',
      type: 'Prácticas',
      period: 'Feb. 2026 — May. 2026',
      duration: '4 meses',
      location: 'Dos Hermanas, Sevilla',
      description:
        'Ciclo completo de automatización e integración de IA con UiPath y n8n. Gestión directa con cliente: análisis y toma de requisitos. Proyectos: automatización de análisis y envío de facturas, extracción de leads. Dirección técnica en el desarrollo de una aplicación móvil con IA para geolocalización.',
      skills: ['UiPath', 'n8n', 'Automatización RPA', 'IA'],
    },
    {
      company: 'United ITs',
      role: 'Backend Developer',
      type: 'Prácticas',
      period: 'Abr. 2025 — May. 2025',
      duration: '2 meses',
      location: 'Dos Hermanas, Sevilla',
      description:
        'Formación en backend con Python, FastAPI, SQLAlchemy y MySQL. Diseño y desarrollo de APIs REST, integración con bases de datos y construcción de aplicaciones estructuradas y escalables.',
      skills: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'APIs REST'],
    },
  ],
  education: [
    {
      institution: 'UTAMED',
      degree: 'IA y Big Data',
      period: 'Nov. 2026 — Actualidad',
      type: 'Formación universitaria online',
    },
    {
      institution: 'IES Almudayne',
      degree: 'CFGS Desarrollo de Aplicaciones Web',
      period: 'Sept. 2024 — Jun. 2026',
      type: 'Grado Superior',
    },
    {
      institution: 'IES Almudayne',
      degree: 'CFGM Sistemas Microinformáticos y Redes',
      period: 'Sept. 2021 — Jun. 2023',
      type: 'Grado Medio',
    },
  ],
  technologies: [
    {
      area: 'Backend',
      items: [
        { name: 'Java / Spring Boot', note: 'Proyectos propios' },
        { name: 'Python', note: 'Experiencia profesional' },
        { name: 'FastAPI', note: 'Proyectos y trabajo' },
      ],
    },
    {
      area: 'Automatización',
      items: [
        { name: 'UiPath', note: 'Experiencia profesional' },
        { name: 'OpenRPA', note: 'Experiencia profesional' },
        { name: 'n8n', note: 'Experiencia profesional' },
      ],
    },
    {
      area: 'Aplicaciones',
      items: [
        { name: 'JavaScript / TypeScript', note: 'Proyectos propios' },
        { name: 'Angular', note: 'Proyectos propios' },
        { name: 'Flutter / Dart', note: 'Proyectos propios' },
        { name: 'Vite + Capacitor', note: 'Android & Windows' },
      ],
    },
    {
      area: 'Bases de datos',
      items: [
        { name: 'SQLite', note: 'Proyectos propios' },
        { name: 'MySQL', note: 'Experiencia profesional' },
        { name: 'SQLAlchemy', note: 'Experiencia profesional' },
      ],
    },
    {
      area: 'Infraestructura',
      items: [
        { name: 'Docker', note: 'Proyectos y trabajo' },
        { name: 'Nginx', note: 'Despliegue' },
        { name: 'Git', note: 'Uso diario' },
      ],
    },
  ],
};

