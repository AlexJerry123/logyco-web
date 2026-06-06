# LOGYCO — Web Corporativa

Web corporativa de LOGYCO construida con Next.js 14, lista para desplegar en Vercel.

---

## 🚀 Cómo publicar en Vercel (paso a paso, sin programar)

### Paso 1 — Sube el código a GitHub

1. Ve a [github.com](https://github.com) y crea una cuenta si no tienes (es gratis)
2. Haz clic en el botón verde **"New"** para crear un repositorio
3. Ponle nombre: `logyco-web`
4. Haz clic en **"Create repository"**
5. Descarga [GitHub Desktop](https://desktop.github.com/) — es la forma más fácil de subir archivos
6. En GitHub Desktop: **File → Add Local Repository** y selecciona la carpeta `logyco`
7. Haz clic en **"Publish repository"**

### Paso 2 — Despliega en Vercel

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta con tu GitHub
2. Haz clic en **"Add New Project"**
3. Selecciona el repositorio `logyco-web`
4. Vercel detectará automáticamente que es Next.js
5. Haz clic en **"Deploy"**
6. En ~2 minutos tendrás la web publicada con una URL tipo `logyco-web.vercel.app`

### Paso 3 — Conectar tu dominio (opcional)

1. En el dashboard de Vercel, ve a **Settings → Domains**
2. Añade tu dominio (ej: `logyco.es`)
3. Sigue las instrucciones para apuntar el DNS

---

## 📁 Estructura del proyecto

```
logyco/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout raíz (fuentes, metadata)
│   │   ├── page.tsx        # Página principal (ensambla secciones)
│   │   └── globals.css     # Estilos globales y variables
│   └── components/
│       ├── Navbar.tsx      # Navegación fija con scroll
│       ├── Hero.tsx        # Hero con canvas animado y stats
│       ├── Partners.tsx    # Marquee de partners tecnológicos
│       ├── Capabilities.tsx # Grid de 6 capacidades
│       ├── Sectors.tsx     # Sectores interactivos con tabs
│       ├── CaseStudies.tsx # Casos de éxito con métricas
│       ├── Contact.tsx     # Formulario de contacto
│       └── Footer.tsx      # Footer con columnas de links
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Personalización

### Cambiar textos y datos
Abre cada archivo en `src/components/` y edita los textos directamente.

### Cambiar colores
Abre `src/app/globals.css` y modifica las variables en `:root`:
- `--accent`: color principal (azul cian `#00d4ff`)
- `--accent2`: color secundario (azul `#0066ff`)

### Añadir tu logo
Reemplaza el SVG del logo en `Navbar.tsx` y `Footer.tsx`.

### Conectar el formulario a un servicio real
El formulario ahora solo hace un `setSent(true)`. Para conectarlo a email real:
- Usa [Resend](https://resend.com) o [Formspree](https://formspree.io) (ambos tienen plan gratis)
- O añade una API route en Next.js

---

## 🛠 Desarrollar en local (opcional)

```bash
npm install
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)
