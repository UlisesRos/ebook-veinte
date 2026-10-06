import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { animate, motion, useReducedMotion } from 'framer-motion';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

/* Piezas compartidas de las páginas de teoría de los módulos 16 en adelante. */

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';

const withDots = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/* Revelado genérico: sube suave al entrar en pantalla */
export function Rise({
  children,
  delay = 0,
  y = 16,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* Contador: sólo arranca cuando la cifra entra en vista. Con "reducir movimiento" muestra el valor final. */
export function CountUp({
  to,
  className,
  format = withDots,
  duration = 1.1,
}: {
  to: number;
  className?: string;
  format?: (n: number) => string;
  duration?: number;
}) {
  const [ref, revealed] = useRevealOnScroll<HTMLSpanElement>();
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!revealed || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [revealed, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{format(to)}</span>
      <span aria-hidden="true" className="tabular-nums">
        {format(reduce ? to : value)}
      </span>
    </span>
  );
}

/* ── Título de sección: cada línea sube desde una máscara ──
   La animación se dispara desde el <h2> (no recortado) y las líneas la heredan por variantes:
   un elemento totalmente tapado por overflow:hidden nunca "entra" para IntersectionObserver. */

const lineVariants = {
  hidden: { y: '108%' },
  show: (i: number) => ({ y: '0%', transition: { duration: 0.75, delay: 0.08 + i * 0.1, ease } }),
};

export function SectionHead({
  eyebrow,
  lines,
  size = 'lg',
  className = 'mb-10',
}: {
  eyebrow: string;
  lines: string[];
  size?: 'lg' | 'md';
  className?: string;
}) {
  const fontSize = size === 'lg' ? 'clamp(2rem, 5.5vw, 3.6rem)' : 'clamp(1.6rem, 4.4vw, 2.7rem)';
  return (
    <div className={`text-center ${className}`}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease }}
        className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="font-display text-dark leading-tight"
        style={{ fontSize, fontWeight: 400 }}
      >
        {lines.map((line, i) => (
          <span
            key={line}
            className="block overflow-hidden"
            style={{ paddingBottom: '0.14em', marginBottom: '-0.14em' }}
          >
            <motion.span
              custom={i}
              variants={lineVariants}
              className={`block ${i === lines.length - 1 ? 'italic' : ''}`}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </div>
  );
}

/* ── Divisor: cinta métrica que se despliega al entrar en vista ── */

function Tape({ revealed, fromRight }: { revealed: boolean; fromRight?: boolean }) {
  const hidden = fromRight ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
  const shown = fromRight ? 'inset(0 0 0 0%)' : 'inset(0 0% 0 0)';
  return (
    <motion.svg
      width="100%"
      height="16"
      viewBox="0 0 240 16"
      preserveAspectRatio="none"
      initial={{ clipPath: hidden }}
      animate={revealed ? { clipPath: shown } : { clipPath: hidden }}
      transition={{ duration: 0.9, ease }}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <line x1="0" y1="3" x2="240" y2="3" stroke={ACCENT} strokeWidth="1.2" opacity="0.5" />
      {Array.from({ length: 25 }).map((_, i) => (
        <line
          key={i}
          x1={i * 10}
          y1="3"
          x2={i * 10}
          y2={i % 5 === 0 ? 13 : 8}
          stroke={ACCENT}
          strokeWidth="1"
          opacity={i % 5 === 0 ? 0.55 : 0.3}
        />
      ))}
    </motion.svg>
  );
}

export function CintaDivider({ label }: { label: string }) {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-cream px-6 py-8">
      <div ref={ref} className="max-w-2xl mx-auto flex items-center gap-5">
        <div className="flex-1">
          <Tape revealed={revealed} />
        </div>
        <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40 shrink-0">{label}</span>
        <div className="flex-1">
          <Tape revealed={revealed} fromRight />
        </div>
      </div>
    </section>
  );
}
