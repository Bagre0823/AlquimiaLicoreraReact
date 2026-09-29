# Alquimia Licorera

Proyecto frontend realizado con React + Vite para presentar una marca de licores artesanales. Incluye página de inicio, catálogo de productos, detalle individual, contacto con testimonios y un layout común con encabezado y pie de página.

## Tecnologías

- React 19
- Vite 8
- React Router DOM 7
- CSS
- JSON local para productos, personas y testimonios
- Formspree para formularios
- Font Awesome para iconos
- Google Fonts (Montserrat)

## Instalación

Requiere Node.js y pnpm.

```bash
pnpm install
pnpm dev
```

Para generar la versión de producción:

```bash
pnpm build
```

Para revisar el código con ESLint:

```bash
pnpm lint
```

## Estructura principal

```text
AlquimiaLicorera/
├── public/
│   ├── datos/
│   │   ├── productos.json
│   │   ├── Personas.json
│   │   └── testimonios.json
│   └── img/
├── src/
│   ├── components/
│   │   ├── beneficios/
│   │   ├── contacto/
│   │   ├── hero/
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   └── navbar/
│   │   ├── personas/
│   │   └── productos/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Inicio / Hero |
| `/quienes-somos` | Sección Quienes Somos (actualmente provisoria) |
| `/productos` | Beneficios y catálogo de licores |
| `/producto/:id` | Detalle del producto seleccionado |
| `/contacto` | Formulario de contacto y testimonios |

## Productos

Los productos se leen desde `public/datos/productos.json`. Cada producto contiene `id`, `nombre`, `descripcion`, `precio`, `imagen` y `descLarga`.

`ItemListContainer` realiza el `fetch`, controla los estados de carga/error y entrega los datos a `ItemList`. Cada `Item` enlaza con `/producto/:id`. `DetalleProducto` usa `useParams()` para obtener el ID y buscar el producto correspondiente.

## Diseño

Los estilos se organizan por componente. Las variables globales y estilos reutilizables están en `src/index.css`. La clase `.boton-link` se comparte entre “Ver detalle” y “Volver a productos”, evitando CSS duplicado.

## Datos locales

- `productos.json`: catálogo y descripciones de productos.
- `testimonios.json`: testimonios mostrados en Contacto.
- `Personas.json`: integrantes y datos mostrados en el footer.

## Pendientes sugeridos

- Crear el contenido definitivo de `/quienes-somos`.
- Agregar estados de carga/error a testimonios y personas para mantener el mismo criterio del catálogo.
- Evaluar si el contador de cada producto tendrá una función de compra/carrito o si se eliminará.
- Reemplazar datos de contacto y correos de ejemplo antes de publicar.
