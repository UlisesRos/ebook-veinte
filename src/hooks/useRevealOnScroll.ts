import { useState, useEffect, useRef } from 'react';

/**
 * Devuelve un ref y un booleano que pasa a `true` cuando el elemento entra en el
 * viewport. Hace polling de la posición con requestAnimationFrame +
 * getBoundingClientRect, en lugar de usar IntersectionObserver o eventos de scroll.
 *
 * Motivo: IntersectionObserver NO dispara de forma fiable observando elementos
 * SVG (<g>, <line>, <rect>) en WebKit/Safari, dejándolos en su estado `initial`
 * (invisibles) para siempre. El polling con rAF funciona igual en todos los
 * navegadores y no depende de que el entorno emita eventos de scroll.
 *
 * El loop se auto-detiene en cuanto el elemento se revela (y no se resetea).
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(threshold = 0.85) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;

    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * threshold && r.bottom > 0) {
          setRevealed(true);
          return; // entró en vista: detener el loop
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [revealed, threshold]);

  return [ref, revealed] as const;
}
