# Portfolio Personal y Web de Proyectos — Raúl Liébana

Web personal profesional construida con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, diseñada bajo la dirección artística **«Tipo Fundición»** (estética editorial contemporánea, tipografía como arquitectura, fondo marfil offset `#F5F0E8` y detalles de alta precisión técnica).

---

## ✦ Objetivos y Arquitectura

1. **Presentación Profesional de Impacto:** Refleja la trayectoria real de Raúl Liébana como desarrollador enfocado en backend, automatización y producto digital.
2. **Escaparate Dinámico de Proyectos:** Cada proyecto cuenta con su propia URL permanente (`/tand`, `/let-him-cook`, etc.), metadatos SEO independientes, galería y arquitectura enlazada.
3. **Escalabilidad Total:** El sistema de proyectos está desacoplado en [`lib/data/projects.ts`](file:///c:/Users/Usuario/Documents/personal-portfolio/lib/data/projects.ts). Para añadir un nuevo proyecto solo se añade un objeto al array y Next.js genera su página y sitemap automáticamente en la compilación estática.

---

## ✦ Estructura de Rutas

- `/` — Portada editorial con Hero monumental, Sobre mí, Tecnologías categorizadas, Proyectos destacados, Experiencia laboral real, Formación y Contacto.
- `/tand` — Página monográfica de **Tand** (Almanaque personal 365 días, Capacitor, Electron, SQLite, local-first).
- `/let-him-cook` — Página monográfica de **Let Him Cook** (Plataforma gastronómica full-stack con Java Spring Boot, Angular 21, Leaflet e IA).
- `/proyectos` — Directorio de todos los proyectos ordenados cronológica y jerárquicamente.
- `/sitemap.xml` y `/robots.txt` — Generados nativamente para indexación y SEO.

---

## ✦ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Modo desarrollo (local en http://localhost:3000)
npm run dev

# Compilar para producción (validación de tipos y prerender estático)
npm run build

# Previsualizar build de producción
npm run start
```

---

## ✦ Guía de Despliegue Gratuito

### Opción Recomendada: Vercel

1. Sube este repositorio a tu cuenta de GitHub (`git push origin main` o `develop`).
2. Entra en [Vercel](https://vercel.com) e inicia sesión con GitHub.
3. Haz clic en **"Add New... -> Project"** y selecciona el repositorio `personal-portfolio`.
4. El framework preset se detectará automáticamente como **Next.js**.
5. Haz clic en **"Deploy"**. En ~1 minuto tendrás tu web pública con HTTPS gratuito y CDN global (ej. `rauliebana.vercel.app`).
6. Si compras un dominio propio en el futuro, solo debes añadirlo en la pestaña *Settings -> Domains* de Vercel.

---

## ✦ Personalización Rápida

- **Foto personal:** Coloca tu imagen en `public/images/profile/photo.jpg`. En [`components/sections/AboutSection.tsx`](file:///c:/Users/Usuario/Documents/personal-portfolio/components/sections/AboutSection.tsx) ya está reservado el marco proporcional para mostrarla.
- **Email de contacto:** Actualiza el campo `contact.email` en [`lib/data/profile.ts`](file:///c:/Users/Usuario/Documents/personal-portfolio/lib/data/profile.ts).
- **Nuevos proyectos:** Añade una nueva entrada en [`lib/data/projects.ts`](file:///c:/Users/Usuario/Documents/personal-portfolio/lib/data/projects.ts) y añade sus capturas en `public/images/<slug>/`.
