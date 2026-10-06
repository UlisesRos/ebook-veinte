import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/* Piezas compartidas de las páginas de práctica de los módulos 16 en adelante. */

const ease = [0.22, 1, 0.36, 1] as const;
const SEAM_COLOR = '#E0227C';

export function ZipperIcon({ size = 18, strokeWidth = 1.6, className }: { size?: number; strokeWidth?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v13" strokeDasharray="2 2.2" />
      <rect x="9" y="15" width="6" height="7" rx="1.6" />
      <path d="M12 18.5v.01" />
    </svg>
  );
}

/* ── Piezas animables de los esquemas (se disparan con `revealed`, sin IntersectionObserver) ── */

export function Fade({
  revealed,
  delay = 0,
  children,
}: {
  revealed: boolean;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={revealed ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.g>
  );
}

/* Trazo continuo que se dibuja de punta a punta (sólo líneas sólidas: pathLength pisa strokeDasharray) */
export function Draw({
  d,
  revealed,
  delay = 0,
  duration = 0.9,
  stroke,
  strokeWidth = 2,
}: {
  d: string;
  revealed: boolean;
  delay?: number;
  duration?: number;
  stroke: string;
  strokeWidth?: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={revealed ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration, delay, ease }}
    />
  );
}

/* ── Paso: texto y esquema en zigzag, con hilo que conecta con el paso anterior ── */

export function Paso({
  n,
  titulo,
  texto,
  children,
}: {
  n: number;
  titulo: string;
  texto: string;
  children: (revealed: boolean) => ReactNode;
}) {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const nn = String(n).padStart(2, '0');
  const textoALaIzquierda = n % 2 === 1;

  return (
    <div>
      {n > 1 && (
        <motion.div
          className="flex justify-center overflow-hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease }}
          aria-hidden="true"
        >
          <svg width="2" height="34" viewBox="0 0 2 34" fill="none" style={{ display: 'block' }}>
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="34"
              stroke={SEAM_COLOR}
              strokeWidth="1.4"
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-10 items-center pt-4">
        <motion.div
          initial={{ opacity: 0, x: textoALaIzquierda ? -22 : 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease }}
          className={`space-y-3 text-center sm:text-left ${textoALaIzquierda ? '' : 'sm:order-2'}`}
        >
          <span
            className="font-display text-dark/25 select-none leading-none block"
            style={{ fontSize: 'clamp(2.6rem, 8vw, 3.6rem)', fontWeight: 700 }}
          >
            {nn}
          </span>
          <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° {n}</p>
          <h3 className="font-display text-xl text-dark leading-snug">{titulo}</h3>
          <p className="font-body text-sm text-dark/70 leading-relaxed">{texto}</p>
        </motion.div>

        <div
          ref={ref}
          className={`bg-white overflow-hidden ${textoALaIzquierda ? '' : 'sm:order-1'}`}
          style={{ padding: '22px 12px', outline: '1px solid hsl(var(--border) / 0.5)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, ease }}
          >
            {children(revealed)}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

