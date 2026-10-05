# Especificaciones de diseño — Portal del Alumno IPAP

Estos son los valores exactos usados en el prototipo funcional (HTML/CSS), para reconstruir las pantallas en Figma con Auto Layout y que coincidan 1:1 con el código.

## Cómo usar esto en Figma

**Opción rápida (recomendada):** instalá el plugin **"html.to.design"** en Figma (Menú → Plugins → Buscar "html.to.design"). Con el proyecto corriendo localmente (o subido a GitHub Pages), pegás la URL de cada página y el plugin importa el diseño ya armado en capas editables de Figma, con Auto Layout. Es la forma más fiel y rápida.

**Opción manual:** usá las 12 capturas de pantalla (desktop y mobile, alta fidelidad) como referencia visual pegándolas en frames de Figma, y reconstruí encima con los valores de esta guía.

---

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| Primario | `#0D3B52` | Header, títulos principales, tablas (encabezado) |
| Primario claro | `#135577` | Enlaces, hover |
| Acento (verde IPAP) | `#1A8F5E` | Botones principales, pestaña activa, bordes de novedades |
| Fondo general | `#F4F6F7` | Fondo de página |
| Superficie | `#FFFFFF` | Tarjetas, inputs, tablas |
| Texto | `#24313A` | Texto principal |
| Texto suave | `#5C6B73` | Subtítulos, texto secundario |
| Borde | `#DBE2E5` | Bordes de tarjetas, inputs, tablas |
| Error | `#C0392B` | Validación de formularios, contador de notificaciones |
| Éxito | `#1A8F5E` | Mensajes de confirmación |

## Tipografía

- **Familia**: Segoe UI (fallback: Arial, Helvetica, sans-serif)
- **H1**: 1.6rem (~26px) — bold, color primario
- **H2**: 1.2rem (~19px) — color primario, margen superior 1.5rem
- **H3**: 1rem (~16px)
- **Texto base**: 1rem (16px), line-height 1.5
- **Subtítulo / texto suave**: color `#5C6B73`
- **Texto en tablas/inputs**: 0.9rem (~14.4px)
- **Texto en nav**: 0.9rem, en tarjetas de notificación/foro: 0.8–0.85rem

## Espaciado y bordes

- **Radio de borde estándar**: 8px (tarjetas, inputs, botones, menús)
- **Radio circular**: 50% (contador de notificaciones)
- **Sombra estándar**: `0 1px 3px rgba(0,0,0,0.08)`
- **Sombra de menús/paneles flotantes**: `0 6px 18px rgba(0,0,0,0.18)`
- **Padding de tarjeta**: 1.1rem 1.25rem (~17.6px 20px)
- **Padding de botón**: 0.7rem 1.4rem
- **Padding de input**: 0.6rem 0.75rem
- **Ancho máximo del contenido**: 960px, centrado
- **Ancho del login**: 380px máx, centrado

## Layout

- **Grid de accesos rápidos**: 2 columnas iguales (1fr 1fr), gap 1rem → en mobile pasa a 1 columna
- **Header**: fondo `#0D3B52`, logo a la izquierda, campana a la derecha, nav debajo con los links en fila (wrap en mobile)
- **Breakpoint mobile**: 600px — en ese punto, las tablas cambian de formato tabla a tarjetas apiladas (cada celda con su etiqueta)

## Componentes clave a recrear en Figma

1. **Header + nav**: fondo oscuro, logo, campana con badge circular rojo, links de nav como "chips" con fondo semitransparente blanco, el activo en verde acento.
2. **Menú desplegable de materias**: panel blanco flotante con sombra, debajo del botón "Materias".
3. **Breadcrumb**: texto gris con links en azul, último elemento en negrita/color oscuro (no clickeable).
4. **Tarjeta de novedad**: borde izquierdo verde de 3px, fondo blanco, fecha en gris chico arriba.
5. **Pestañas (tabs)**: línea inferior gris, la activa con texto verde/oscuro y borde inferior verde de 3px.
6. **Mensaje de foro nuevo vs leído**: el nuevo tiene borde izquierdo verde y fondo verde muy clarito (`#F1FAF5`); el leído es blanco con borde gris normal.
7. **Campo de formulario inválido**: borde rojo + texto de error rojo debajo (oculto por defecto, visible al validar).
8. **Acordeón FAQ**: header clickeable con flecha que rota 180° al abrir.

---

## Capturas incluidas

- `login_desktop.png` / `login_mobile.png`
- `inicio_desktop.png` / `inicio_mobile.png`
- `perfil_desktop.png` / `perfil_mobile.png`
- `materia_desktop.png` / `materia_mobile.png`
- `tramites_desktop.png` / `tramites_mobile.png`
- `faq_desktop.png` / `faq_mobile.png`

Desktop: 1440×900 (página completa). Mobile: 390×844 (viewport de iPhone 12/13).
