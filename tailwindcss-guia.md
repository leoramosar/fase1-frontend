# Guía de Tailwind CSS - Proyecto fronted - IPAP

## Qué es y por qué se usó

Tailwind CSS v4 se usa por CDN. En vez de escribir mucho CSS aparte, se ponen clases cortas en el HTML.

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Colores del instituto:

```css
@theme {
  --color-barra: #0d3b52;
  --color-verde: #1a8f5e;
  --color-texto: #24313a;
  --color-fondo: #f4f6f7;
  --color-muted: #5b6b75;
}
```

Cómo explicarlo: `flex` es display flex, `px-4` es padding horizontal de 1rem, `rounded-2xl` es border-radius de 1rem. Con `sm:` y `lg:` se adapta a celular y PC.

---

## Escala de tamaños

El número **no es porcentaje**. En Tailwind: `1 = 0.25rem = 4px`.

| Número | rem | px |
|---|---|---|
| 2 | 0.5rem | 8px |
| 3 | 0.75rem | 12px |
| 4 | 1rem | 16px |
| 6 | 1.5rem | 24px |
| 8 | 2rem | 32px |

---

## Clases que usamos en el proyecto

### Layout

| Clase | Significa | Uso |
|---|---|---|
| `flex` | display: flex | Armar filas o columnas |
| `flex-col` | flex-direction: column | Uno abajo del otro |
| `flex-row` | flex-direction: row | Uno al lado del otro |
| `flex-wrap` | flex-wrap: wrap | Si no entra, baja de línea |
| `flex-1` | flex: 1 | Ocupa el espacio libre |
| `items-center` | align-items: center | Centra en vertical |
| `items-start` | align-items: flex-start | Alinea arriba |
| `justify-center` | justify-content: center | Centra en horizontal |
| `justify-between` | space-between | Uno a cada lado |
| `gap-2` / `gap-3` / `gap-4` | gap | Separación entre elementos |
| `grid` | display: grid | Grilla |
| `grid-cols-2` / `grid-cols-3` | columnas | 2 o 3 columnas |
| `col-span-2` | ocupa 2 columnas | Tarjeta ancha |
| `block` | display: block | Enlace o caja en bloque |
| `hidden` | display: none | Ocultar (panel de notificaciones) |

### Tamaño

| Clase | Significa | Uso |
|---|---|---|
| `w-full` | width: 100% | Ancho completo |
| `w-auto` | width: auto | Ancho automático |
| `w-11` / `h-11` | 2.75rem | Botones redondos |
| `h-12` / `h-16` | alto del logo | Header |
| `min-h-screen` | min-height: 100vh | Página completa |
| `max-w-6xl` | max-width grande | Contenedor centrado |
| `max-w-md` | max-width mediano | Panel de notificaciones |
| `min-w-5` | min-width chico | Badge del “2” |

### Espaciado

| Clase | Significa | Uso |
|---|---|---|
| `p-3` / `p-4` / `p-5` / `p-6` | padding | Espacio interno |
| `px-3` / `px-4` | padding izquierda y derecha | Menú y contenedores |
| `py-2` / `py-4` / `py-6` / `py-8` | padding arriba y abajo | Botones, header, main |
| `mt-1` / `mt-2` / `mt-4` / `mt-8` | margin-top | Separar bloques |
| `mb-4` | margin-bottom | Separar títulos |
| `mx-auto` | margin auto | Centrar |
| `ml-auto` | margin-left: auto | Empujar el menú a la derecha |
| `mt-auto` | margin-top: auto | Empujar el footer abajo |

### Bordes y sombra

| Clase | Significa | Uso |
|---|---|---|
| `rounded-lg` | border-radius 0.5rem | Botones del menú |
| `rounded-xl` | border-radius 0.75rem | Cajas chicas |
| `rounded-2xl` | border-radius 1rem | Tarjetas |
| `rounded-full` | círculo | Campana y redes |
| `border` / `border-b` | borde | Inputs y títulos |
| `shadow-sm` / `shadow-md` / `shadow-2xl` | sombra | Tarjetas, header, panel |

### Colores

| Clase | Uso |
|---|---|
| `bg-barra` | Header y footer |
| `bg-verde` | Página activa / hover |
| `bg-fondo` | Fondo de la página |
| `bg-white` | Tarjetas |
| `bg-white/10` | Botones del menú |
| `bg-verde/10` | Badge de nota |
| `bg-barra/10` | Badge “En curso” |
| `bg-barra/60` | Fondo oscuro del panel |
| `text-white` | Texto del menú |
| `text-barra` | Títulos |
| `text-verde` | Destacados |
| `text-muted` | Texto secundario |

El `/10` es opacidad (10%), no tamaño.

### Tipografía

| Clase | Uso |
|---|---|
| `text-xs` / `text-sm` / `text-base` / `text-lg` / `text-xl` / `text-3xl` | Tamaño de letra |
| `font-semibold` / `font-bold` | Grosor |
| `text-center` | Centrar texto |
| `font-sans` | Fuente Roboto |

### Posición (campana y panel)

| Clase | Uso |
|---|---|
| `relative` | Padre del número “2” |
| `absolute` | Número “2” y panel |
| `fixed` | Panel fijo en pantalla |
| `inset-0` | Fondo que cubre toda la pantalla |
| `inset-y-0` / `right-0` | Panel pegado a la derecha |
| `-top-1` / `-right-1` | Posición del “2” |
| `z-50` | Panel arriba de todo |

### Efectos

| Clase | Uso |
|---|---|
| `hover:bg-verde` | Al pasar el mouse |
| `hover:bg-white/20` | Hover del menú |
| `transition` | Cambio suave |
| `cursor-pointer` | Manito en botones |
| `outline-none` | Saca borde azul del input |
| `focus:border-verde` | Borde al escribir en el input |

### Responsive

| Prefijo | Desde | Ejemplo |
|---|---|---|
| `sm:` | 640px | `sm:px-6`, `sm:h-16`, `sm:grid-cols-3` |
| `lg:` | 1024px | `lg:flex-row`, `lg:grid-cols-2`, `lg:ml-auto` |

---

## Nav y footer (versión simple)

### Nav

- `bg-barra` = fondo azul
- `flex` + `flex-col` + `lg:flex-row` = en celular columna, en PC fila
- `justify-between` = en celular, logo a la izquierda y campana a la derecha
- `lg:contents` = en PC el contenedor del logo/campana no cuenta para el flex
- `order-last` = la campana queda al final, después del menú
- `rounded-full` = campana redonda
- `absolute -top-1 -right-1` = el “2” encima de la campana
- `bg-verde` = página activa
- `bg-white/10` = páginas no activas

### Footer

- `mt-auto` = queda abajo
- `bg-barra` = mismo azul del header
- `flex` + `justify-center` = redes centradas
- `rounded-full` = iconos redondos
- `hover:bg-verde` = cambian al pasar el mouse

### Notificaciones (JS simple)

El panel usa `hidden`. El JS hace:

1. click en la campana → `classList.toggle('hidden')`
2. click en el fondo o la X → `classList.add('hidden')`

---

## Dónde se usa

- `index.html` = login
- `inicio.html` = panel
- `perfil.html` = datos del alumno
- `materias.html` = materias
- `tramites.html` = trámites
- `mensajes.html` = mensajes

El CSS del compañero (`css/style.css`) sigue ahí. Tailwind se sumó para mejorar la UI.

---

## Resumen para estudiar

1. Tailwind = clases CSS listas en el HTML
2. `flex`, `grid`, `items-center` = layout
3. `px-4`, `mt-8`, `gap-4` = espacios en rem
4. `rounded-lg`, `rounded-2xl`, `rounded-full` = bordes
5. `bg-barra`, `bg-verde`, `text-muted` = colores IPAP
6. `sm:` y `lg:` = responsive
7. `hidden` + JS = abrir/cerrar notificaciones
