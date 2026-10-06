# Instrucciones del Proyecto

## Skills instaladas — uso obligatorio en desarrollo web

Las siguientes skills deben aplicarse **siempre** al desarrollar componentes, páginas o cualquier interfaz de este proyecto:

- **`emil-design-eng`** — filosofía de polish de UI de Emil Kowalski: micro-detalles, sensaciones táctiles, decisiones de animación que hacen que el software "se sienta bien".
- **`impeccable`** — diseño visual impecable: jerarquía, tipografía, espaciado, color, motion, micro-interacciones y efectos visuales extraordinarios.
- **`design-taste-frontend`** / **`high-end-visual-design`** / **`stitch-design-taste`** — gusto visual de alto nivel en cada componente.
- **`ui-ux-pro-max`** — inteligencia de diseño UI/UX (estilos, paletas, tipografías, guías de UX, accesibilidad, gráficos, presets GSAP, guías por stack). Ver la sección siguiente: se usa **siempre** que se cree algo nuevo.

## `ui-ux-pro-max` — uso obligatorio, sin perder el diseño actual

Aplicarla **siempre** que se cree o modifique algo en el proyecto (módulos, prácticas, carruseles, componentes, páginas, secciones) para que quede más lindo, más estético y más prolijo. El objetivo es **refinar y elevar el nivel, no rediseñar**: el resultado tiene que seguir sintiéndose parte del mismo ebook.

**Identidad visual que se preserva siempre:**

- Tipografías: `font-display` (Playfair Display) para títulos y `font-body` (Questrial) para texto.
- Paleta por tokens: `cream`, `mint`, `lime`, `dark`, `primary`, `secondary`, `accent`, `muted`, `card`, etc., definidos como variables CSS y mapeados en `tailwind.config.js`. Usar siempre los tokens, nunca hex sueltos.
- Radios por `--radius`, y el lenguaje visual de los módulos ya hechos.
- Antes de crear algo nuevo, abrir un módulo existente (`Module{N}`) parecido y tomarlo como referencia de composición, espaciado y tono.

**Cómo usarla:**

- Stack de este proyecto: React + Vite + Tailwind. Usar `--stack react` y `--stack html-tailwind`.
- Para refinar un componente o sección, consultar dominios puntuales: `ux`, `style`, `typography`, `color`, `chart`, `gsap`, `icons`, `landing`. Ejemplo: `py -3 .claude/skills/ui-ux-pro-max/scripts/search.py "reveal stagger" --domain gsap`.
- En esta máquina `python` no funciona (es el atajo de la Microsoft Store): usar `py -3`.
- Tratar los resultados como recomendaciones. **Si una paleta, fuente o estilo sugerido choca con la identidad del proyecto, gana el proyecto.** Usar la skill para criterio (jerarquía, espaciado, contraste, estados, accesibilidad, motion, detalles de pulido), no para reemplazar colores ni tipografías.
- `--design-system` sirve para inspirarse en estructura y patrones, pero no se adopta su paleta ni su tipografía. No usar `--persist` (genera `design-system/` en el repo) salvo que el usuario lo pida.
- Respetar siempre sus checks base: contraste 4.5:1, foco visible, touch targets de 44px, `prefers-reduced-motion`, sin emojis como íconos.
- Combinar con las demás skills y con la regla de animaciones de abajo.

## Animaciones — regla permanente

**Aunque el usuario NO pida animaciones, siempre buscar e implementar animaciones creativas y de calidad en los componentes.** Esto incluye:

- Transiciones de entrada/salida de elementos
- Micro-interacciones en botones, links, inputs
- Scroll-driven animations (parallax, reveal, stagger)
- Hover effects con física o easing custom
- Loading states animados
- Page transitions fluidas

Usar librerías como `framer-motion`, `@react-spring/web`, GSAP, o CSS custom properties con keyframes cuando aplique. Preferir animaciones que se sientan físicas, con spring/bounce, sobre las lineales.

## Filosofía de diseño

- Nunca generar interfaces genéricas o de aspecto "IA". Cada componente debe tener personalidad.
- Priorizar el detalle invisible: sombras sutiles, blur, gradientes, bordes con opacidad.
- El diseño debe escalar tanto en mobile como en desktop con igual cuidado.
