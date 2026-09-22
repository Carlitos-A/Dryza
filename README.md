# Dryza Panels

Sitio web corporativo de **Dryza Panels** — paneles de cielo y revestimientos
arquitectónicos decorativos anti-humedad — construido con **Astro** y
**Tailwind CSS**.

Corporate marketing website showcasing decorative anti-moisture ceiling
systems, product collections, and installation solutions.

## Secciones

- **Home** — presentación de la marca y propuesta de valor.
- **Beneficios** — por qué elegir paneles anti-humedad frente a soluciones
  tradicionales.
- **Comparativa** — tabla comparativa contra alternativas del mercado.
- **Diseños** — catálogo de colecciones de diseños (`/disenos/[slug]`,
  rutas dinámicas generadas por colección).
- **Contacto** — formulario de contacto.

## 🚀 Tecnologías

- **Astro** — sitio estático de marketing: entrega HTML con cero JS por
  defecto e hidrata solo lo interactivo (islas). Ideal para velocidad y SEO.
- **Tailwind CSS** — estilos utility-first, consistentes y mantenibles.
- **TypeScript** — tipado en configuración y componentes.

## 📂 Arquitectura

Estructura *Screaming Architecture*: las carpetas gritan qué hace la
aplicación, no qué framework la construye.

```text
src/
├─ pages/        # Rutas: index, contacto, disenos/[slug], 404
├─ layouts/      # Layouts globales
├─ features/     # Módulos funcionales (home, benefits, comparison, designs, contact)
├─ shared/       # Componentes y utilidades compartidas
└─ assets/       # Imágenes, iconos y recursos
```

Cada feature agrupa sus componentes, de modo que agregar una sección nueva no
toca código de las demás.

## Desarrollo

```bash
pnpm install
pnpm dev      # servidor local
pnpm build    # build de producción
```

## Pendiente / roadmap

- [ ] Página 404 personalizada
- [ ] Formulario de contacto conectado a backend/email
- [ ] Optimización de imágenes (avif/webp, lazy loading)
