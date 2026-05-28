# Instrucciones del Proyecto

## Skills instaladas — uso obligatorio en desarrollo web

Las siguientes skills deben aplicarse **siempre** al desarrollar componentes, páginas o cualquier interfaz de este proyecto:

- **`emil-design-eng`** — filosofía de polish de UI de Emil Kowalski: micro-detalles, sensaciones táctiles, decisiones de animación que hacen que el software "se sienta bien".
- **`impeccable`** — diseño visual impecable: jerarquía, tipografía, espaciado, color, motion, micro-interacciones y efectos visuales extraordinarios.
- **`design-taste-frontend`** / **`high-end-visual-design`** / **`stitch-design-taste`** — gusto visual de alto nivel en cada componente.

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
