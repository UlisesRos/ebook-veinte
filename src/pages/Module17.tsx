import { useEffect, useRef, useState } from 'react';
import type { ComponentType, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  animate,
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowRight,
  Backpack,
  Briefcase,
  Check,
  Gift,
  Heart,
  Package,
  Ruler,
  Scale,
  Shapes,
  ShoppingBag,
  Sparkles,
  TriangleAlert,
  Wallet,
  RectangleVertical,
} from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { CintaDivider, Rise, SectionHead } from '../components/ModuloUI';
import { CarruselModulo17Teoria } from '../components/CarruselModulo17Teoria';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';
const SAND = '#BFA98A';
const ZIP_COLOR = '#6b7280';
const INK = '#1a1a1a';

const OUTLINE: CSSProperties = { outline: '1px solid hsl(var(--border) / 0.5)' };

type IconCmp = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

/* ── Datos ── */

const AVISOS = [
  'Si agrandás el ancho, revisá el largo de las manijas.',
  'Si agrandás el alto, revisá la profundidad.',
];

const OPCIONES_BOLSO = [
  { key: 'base', label: 'Agregar base', sub: 'fuelle inferior' },
  { key: 'laterales', label: 'Agregar laterales', sub: '' },
  { key: 'bolsillo', label: 'Agregar bolsillo interno', sub: '' },
  { key: 'cierre', label: 'Agregar cierre superior', sub: '' },
  { key: 'manija', label: 'Cambiar tipo de manija', sub: '' },
] as const;
type BolsoKey = (typeof OPCIONES_BOLSO)[number]['key'];

const OPCIONES_ALMOHADON = [
  { key: 'vivo', label: 'Agregar vivo', sub: 'piping' },
  { key: 'cierre', label: 'Cierre invisible', sub: '' },
  { key: 'solapa', label: 'Solapa tipo sobre', sub: '' },
  { key: 'paneles', label: 'Dividir en paneles', sub: 'combinar telas' },
  { key: 'flecos', label: 'Agregar flecos', sub: '' },
  { key: 'aplique', label: 'Aplique o bordado', sub: '' },
] as const;
type AlmohadonKey = (typeof OPCIONES_ALMOHADON)[number]['key'];

const CRITERIOS: { label: string; Icon: IconCmp }[] = [
  { label: 'Equilibrio visual', Icon: Scale },
  { label: 'Proporción ancho / alto', Icon: RectangleVertical },
  { label: 'Tamaño de las manijas según el cuerpo', Icon: Ruler },
  { label: 'Escala del estampado según el tamaño del producto', Icon: Shapes },
];

const PREGUNTAS = [
  '¿Para qué se va a usar?',
  '¿Qué peso va a soportar?',
  '¿Necesita cierre?',
  '¿Necesita bolsillos?',
];

const VERSIONES: { Icon: IconCmp }[] = [
  { Icon: ShoppingBag },
  { Icon: Backpack },
  { Icon: Briefcase },
  { Icon: Gift },
  { Icon: Package },
];

/* Telas: la silueta de la misma bolsa cambia según cómo se comporta la tela.
   Todos los trazos tienen la misma estructura (M + 4 curvas + Z) para poder animar de uno a otro. */
const BOLSA_BASE = 'M22 34 C42 34 62 34 82 34 C82 54 82 74 82 96 C62 96 42 96 22 96 C22 74 22 54 22 34 Z';
const MANIJA_BASE = 'M40 34 C40 14 64 14 64 34';

const TELAS: { nombre: string; nota: string; cuerpo: string; manija: string }[] = [
  {
    nombre: 'Gabardina estructurada',
    nota: 'se sostiene sola',
    cuerpo: BOLSA_BASE,
    manija: MANIJA_BASE,
  },
  {
    nombre: 'Lienzo',
    nota: 'firme, un poco más blando',
    cuerpo: 'M22 34 C42 33 62 35 82 34 C84 54 84 76 82 96 C62 97 42 95 22 96 C20 76 20 54 22 34 Z',
    manija: 'M40 34 C40 14 64 14 64 34',
  },
  {
    nombre: 'Tela liviana',
    nota: 'liviana, se mueve',
    cuerpo: 'M22 34 C34 24 50 46 82 34 C94 54 70 76 82 96 C66 106 42 88 22 96 C10 78 34 54 22 34 Z',
    manija: 'M40 32 C40 12 64 20 64 40',
  },
  {
    nombre: 'Tela con caída',
    nota: 'cae y se acomoda',
    cuerpo: 'M22 34 C42 46 62 46 82 34 C80 56 90 76 90 96 C70 106 34 106 14 96 C14 76 24 56 22 34 Z',
    manija: 'M40 41 C40 22 64 22 64 41',
  },
];

/* ── Agrandar un molde: deslizador que suma centímetros a cada medida ── */

const BASE_W = 35;
const BASE_H = 40;
const MAX_EXTRA = 5;
const ESC = 4.4;

function Agrandar() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const reduce = useReducedMotion();
  const [extra, setExtra] = useState(0);
  const tocado = useRef(false);

  // Demostración única: la tote crece sola 5 cm hasta que la persona toca el deslizador
  useEffect(() => {
    if (!revealed || reduce) return;
    const controls = animate(0, MAX_EXTRA, {
      duration: 1.7,
      delay: 0.5,
      ease,
      onUpdate: (v) => {
        if (!tocado.current) setExtra(v);
      },
    });
    return () => controls.stop();
  }, [revealed, reduce]);

  const w = (BASE_W + extra) * ESC;
  const h = (BASE_H + extra) * ESC;
  const baseW = BASE_W * ESC;
  const baseH = BASE_H * ESC;
  const cx = 170;
  const y0 = 262;
  const x = cx - w / 2;
  const y = y0 - h;
  const mostrarAvisos = extra > 0.6 ? 1 : 0;
  const entero = Math.round(extra);

  return (
    <div ref={ref} className="bg-white px-5 py-7 sm:px-8" style={OUTLINE}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
        <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40">Ejemplo, tote bag</p>
        <p className="font-body text-sm text-dark/60 tabular-nums">
          <span className="text-dark/40">{BASE_W} × {BASE_H}</span>
          <ArrowRight size={13} strokeWidth={1.8} className="inline mx-2 -mt-0.5 text-dark/40" />
          <span className="font-display text-dark text-lg">
            {Math.round(BASE_W + extra)} × {Math.round(BASE_H + extra)} cm
          </span>
        </p>
      </div>

      <svg
        viewBox="0 0 340 300"
        fill="none"
        style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block', margin: '0 auto' }}
        role="img"
        aria-label={`Tote bag de ${Math.round(BASE_W + extra)} por ${Math.round(BASE_H + extra)} centímetros`}
      >
        {/* Manija */}
        <path
          d={`M${cx - w * 0.27} ${y} C${cx - w * 0.27} ${y - 46} ${cx + w * 0.27} ${y - 46} ${cx + w * 0.27} ${y}`}
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Tote actual */}
        <rect x={x} y={y} width={w} height={h} fill={FABRIC} stroke={INK} strokeWidth="1.6" />
        <text x={cx} y={y + h / 2 + 4} textAnchor="middle" fontSize="12" fontFamily="serif" fill={INK} opacity="0.7">
          Tote bag
        </text>
        {/* Medida original, siempre a la vista por encima */}
        <rect
          x={cx - baseW / 2}
          y={y0 - baseH}
          width={baseW}
          height={baseH}
          stroke={ACCENT}
          strokeWidth="1.2"
          strokeDasharray="5 4"
          opacity="0.75"
        />

        {/* Cotas */}
        <line x1={x} y1={y0 + 14} x2={x + w} y2={y0 + 14} stroke={INK} strokeWidth="0.9" />
        <line x1={x} y1={y0 + 9} x2={x} y2={y0 + 19} stroke={INK} strokeWidth="0.9" />
        <line x1={x + w} y1={y0 + 9} x2={x + w} y2={y0 + 19} stroke={INK} strokeWidth="0.9" />
        <text x={cx} y={y0 + 30} textAnchor="middle" fontSize="11" fontFamily="serif" fill={INK}>
          {Math.round(BASE_W + extra)} cm
        </text>

        <line x1={x - 16} y1={y} x2={x - 16} y2={y0} stroke={INK} strokeWidth="0.9" />
        <line x1={x - 21} y1={y} x2={x - 11} y2={y} stroke={INK} strokeWidth="0.9" />
        <line x1={x - 21} y1={y0} x2={x - 11} y2={y0} stroke={INK} strokeWidth="0.9" />
        <text
          x={x - 26}
          y={y + h / 2}
          textAnchor="middle"
          fontSize="11"
          fontFamily="serif"
          fill={INK}
          transform={`rotate(-90 ${x - 26} ${y + h / 2})`}
        >
          {Math.round(BASE_H + extra)} cm
        </text>

        {/* Recordatorios que aparecen al agrandar */}
        <motion.g animate={{ opacity: mostrarAvisos }} transition={{ duration: 0.35, ease }}>
          <text x={cx} y={Math.max(y - 44, 12)} textAnchor="middle" fontSize="10.5" fontFamily="sans-serif" fill={ACCENT}>
            revisá las manijas
          </text>
          <text x={cx} y={y0 - 10} textAnchor="middle" fontSize="10.5" fontFamily="sans-serif" fill={ACCENT}>
            y la profundidad
          </text>
        </motion.g>
      </svg>

      <div className="mt-5 max-w-sm mx-auto">
        <label htmlFor="agrandar-extra" className="block text-sm text-dark/70 text-center mb-2">
          Sumás <span className="font-bold text-dark tabular-nums">{entero} cm</span> a cada medida principal
        </label>
        <input
          id="agrandar-extra"
          type="range"
          min={0}
          max={MAX_EXTRA}
          step={1}
          value={entero}
          onChange={(e) => {
            tocado.current = true;
            setExtra(Number(e.target.value));
          }}
          aria-valuetext={`${entero} centímetros de más: ${BASE_W + entero} por ${BASE_H + entero}`}
          className="w-full h-11 cursor-pointer accent-dark"
        />
        <div className="flex justify-between text-[11px] text-dark/40 tabular-nums -mt-1">
          <span>0</span>
          <span>+5 cm</span>
        </div>
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-dark/55">
        <Check size={14} strokeWidth={1.8} className="shrink-0" />
        Respetás siempre los márgenes de costura
      </p>
    </div>
  );
}

/* ── Armador de bolso: cada cambio transforma el producto ── */

function ArmadorBolso() {
  const [sel, setSel] = useState<Record<BolsoKey, boolean>>({
    base: false,
    laterales: false,
    bolsillo: false,
    cierre: false,
    manija: false,
  });
  const cantidad = Object.values(sel).filter(Boolean).length;
  const toggle = (k: BolsoKey) => setSel((s) => ({ ...s, [k]: !s[k] }));
  const estado =
    cantidad === 0
      ? 'Tote bag básica'
      : cantidad < 3
        ? 'Ya es otro producto'
        : cantidad < 5
          ? 'Un bolso distinto'
          : 'Bolso completo';
  const fade = { duration: 0.35, ease };

  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
      <div className="bg-white px-3 py-6 sm:px-5" style={OUTLINE}>
        <svg
          viewBox="0 0 300 260"
          fill="none"
          style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label="Bolso que se va transformando según los cambios elegidos"
        >
          {/* Base (fuelle inferior) */}
          <motion.ellipse
            cx="140"
            cy="212"
            rx="60"
            ry="12"
            fill={FABRIC_2}
            stroke={INK}
            strokeWidth="1.4"
            animate={{ opacity: sel.base ? 1 : 0 }}
            transition={fade}
          />
          {/* Laterales */}
          <motion.polygon
            points="200,74 232,58 232,196 200,212"
            fill="#E7E0D2"
            stroke={INK}
            strokeWidth="1.4"
            animate={{ opacity: sel.laterales ? 1 : 0 }}
            transition={fade}
          />
          {/* Cuerpo */}
          <rect x="80" y="74" width="120" height="138" fill={FABRIC} stroke={INK} strokeWidth="1.6" />
          {/* Bolsillo interno */}
          <motion.g animate={{ opacity: sel.bolsillo ? 1 : 0 }} transition={fade}>
            <rect
              x="96"
              y="92"
              width="46"
              height="54"
              rx="2"
              fill={ACCENT}
              fillOpacity="0.1"
              stroke={ACCENT}
              strokeWidth="1.4"
              strokeDasharray="4 3"
            />
            <text x="119" y="164" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={ACCENT}>
              bolsillo
            </text>
          </motion.g>
          {/* Cierre superior */}
          <motion.g animate={{ opacity: sel.cierre ? 1 : 0 }} transition={fade}>
            <line x1="80" y1="74" x2="200" y2="74" stroke={ZIP_COLOR} strokeWidth="5" strokeDasharray="3 2" />
            <rect x="184" y="67" width="14" height="14" rx="3" fill={ZIP_COLOR} />
          </motion.g>
          {/* Manijas: cortas o bandolera */}
          <motion.g animate={{ opacity: sel.manija ? 0 : 1 }} transition={fade}>
            <path d="M104 74 C104 40 128 40 128 74" stroke={INK} strokeWidth="3" strokeLinecap="round" />
            <path d="M152 74 C152 40 176 40 176 74" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          </motion.g>
          <motion.g animate={{ opacity: sel.manija ? 1 : 0 }} transition={fade}>
            <path d="M92 74 C64 -8 216 -8 188 74" stroke={INK} strokeWidth="3" strokeLinecap="round" />
          </motion.g>
        </svg>
      </div>

      <div>
        <ul className="space-y-2">
          {OPCIONES_BOLSO.map((o) => {
            const on = sel[o.key];
            return (
              <li key={o.key}>
                <motion.button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(o.key)}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left cursor-pointer transition-colors duration-200 ${
                    on ? 'bg-dark text-cream' : 'bg-white text-dark'
                  }`}
                  style={{ outline: on ? '1px solid hsl(var(--dark))' : '1px solid hsl(var(--border) / 0.7)' }}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      on ? 'bg-cream text-dark' : 'bg-cream'
                    }`}
                    style={{ outline: on ? 'none' : '1px solid hsl(var(--border))' }}
                  >
                    <Check size={12} strokeWidth={2.2} className={`transition-opacity duration-150 ${on ? 'opacity-100' : 'opacity-0'}`} />
                  </span>
                  <span className="font-body text-sm leading-snug">
                    {o.label}
                    {o.sub && <span className={on ? 'text-cream/55' : 'text-dark/45'}> ({o.sub})</span>}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ul>

        <div className="mt-5">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3 mb-2">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark/45">Valor del producto</span>
            <span className="font-display italic text-dark text-base" aria-live="polite">
              {estado}
            </span>
          </div>
          <div className="h-2 bg-border/30 overflow-hidden" aria-hidden="true">
            <motion.div
              className="h-full bg-dark origin-left"
              animate={{ scaleX: cantidad / OPCIONES_BOLSO.length }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Almohadón: una transformación por vez sobre la misma base ── */

function ArteAlmohadon({ k }: { k: AlmohadonKey | null }) {
  switch (k) {
    case 'vivo':
      return <rect x="80" y="50" width="140" height="140" rx="7" fill="none" stroke={ACCENT} strokeWidth="4.5" />;
    case 'cierre':
      return (
        <g>
          <line x1="92" y1="176" x2="208" y2="176" stroke={INK} strokeWidth="1.2" />
          <rect x="92" y="171" width="12" height="10" rx="2" fill={INK} />
          <text x="150" y="168" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={INK} opacity="0.55">
            cierre invisible
          </text>
        </g>
      );
    case 'solapa':
      return (
        <g>
          <path d="M75 45 L225 45 L150 122 Z" fill={FABRIC_2} stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M75 195 L150 122 L225 195" fill="none" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
        </g>
      );
    case 'paneles':
      return (
        <g>
          <rect x="75" y="45" width="50" height="150" fill="#D9B8BC" />
          <rect x="175" y="45" width="50" height="150" fill="#CFC7B4" />
          <line x1="125" y1="45" x2="125" y2="195" stroke={INK} strokeWidth="1.4" />
          <line x1="175" y1="45" x2="175" y2="195" stroke={INK} strokeWidth="1.4" />
        </g>
      );
    case 'flecos':
      return (
        <g>
          {Array.from({ length: 22 }).map((_, i) => (
            <line key={i} x1={82 + i * 6.3} y1="195" x2={82 + i * 6.3} y2="217" stroke={SAND} strokeWidth="1.8" strokeLinecap="round" />
          ))}
        </g>
      );
    case 'aplique':
      return (
        <g>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="150"
              cy="106"
              rx="8"
              ry="17"
              fill={ACCENT}
              fillOpacity="0.8"
              transform={`rotate(${a} 150 120)`}
            />
          ))}
          <circle cx="150" cy="120" r="7" fill="#F2E3B8" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="150" cy="120" r="34" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
        </g>
      );
    default:
      return null;
  }
}

function Almohadon() {
  const [sel, setSel] = useState<AlmohadonKey | null>(null);
  const actual = OPCIONES_ALMOHADON.find((o) => o.key === sel);

  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
      <div className="bg-white px-3 py-6 sm:px-5" style={OUTLINE}>
        <svg
          viewBox="0 0 300 250"
          fill="none"
          style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block', margin: '0 auto' }}
          role="img"
          aria-label={
            actual ? `Almohadón de 50 por 50 centímetros, transformación: ${actual.label.toLowerCase()}` : 'Almohadón base de 50 por 50 centímetros'
          }
        >
          <rect x="75" y="45" width="150" height="150" rx="9" fill={FABRIC} stroke={INK} strokeWidth="1.6" />
          <AnimatePresence mode="wait">
            <motion.g
              key={sel ?? 'base'}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease }}
              style={{ transformOrigin: '150px 120px' }}
            >
              <ArteAlmohadon k={sel} />
            </motion.g>
          </AnimatePresence>
          <line x1="75" y1="232" x2="225" y2="232" stroke={INK} strokeWidth="0.9" />
          <line x1="75" y1="227" x2="75" y2="237" stroke={INK} strokeWidth="0.9" />
          <line x1="225" y1="227" x2="225" y2="237" stroke={INK} strokeWidth="0.9" />
          <text x="150" y="247" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill={INK}>
            base 50 × 50 cm
          </text>
        </svg>
      </div>

      <div>
        <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/45 mb-3">Elegí una transformación</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Transformaciones posibles del almohadón">
          {OPCIONES_ALMOHADON.map((o) => {
            const on = sel === o.key;
            return (
              <motion.button
                key={o.key}
                type="button"
                aria-pressed={on}
                onClick={() => setSel(on ? null : o.key)}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className={`font-body text-sm px-4 py-2.5 rounded-full cursor-pointer transition-colors duration-200 ${
                  on ? 'bg-dark text-cream' : 'bg-white text-dark'
                }`}
                style={{ outline: on ? '1px solid hsl(var(--dark))' : '1px solid hsl(var(--border) / 0.8)' }}
              >
                {o.label}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-5 min-h-[3.2rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p
              key={sel ?? 'base'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease }}
              className="flex items-start gap-2.5 text-sm text-dark/70 leading-relaxed"
            >
              <Sparkles size={16} strokeWidth={1.6} className="shrink-0 mt-0.5 text-dark/45" />
              {actual
                ? `${actual.label}${actual.sub ? ` (${actual.sub})` : ''}: un almohadón nuevo, con valor agregado.`
                : 'Así empieza: un almohadón simple. Probá cada cambio.'}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── Parte estratégica: una pequeña modificación y 3 moldes básicos ── */

const CONSERVADOS = [2, 7, 17];

function Estrategia() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const lineas = [
    { t: 'Pequeña modificación', eq: false },
    { t: 'Nuevo producto', eq: true },
    { t: 'Nuevo precio', eq: true },
  ];

  return (
    <div className="bg-dark text-cream px-6 py-10 sm:px-10">
      <div className="space-y-2">
        {lineas.map((l, i) => (
          <motion.p
            key={l.t}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: i * 0.2, ease }}
            className="font-display text-cream leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', fontWeight: 400 }}
          >
            {l.eq && <span className="text-cream/35 mr-3">=</span>}
            <span className={l.eq ? 'italic' : ''}>{l.t}</span>
          </motion.p>
        ))}
      </div>

      <div className="mt-9 pt-8 border-t border-cream/15">
        <div ref={ref} className="grid grid-cols-10 gap-1.5 sm:gap-2 max-w-sm" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => {
            const queda = CONSERVADOS.includes(i);
            return (
              <motion.span
                key={i}
                className="block aspect-square bg-cream"
                initial={{ opacity: 0.32, scale: 1 }}
                animate={
                  revealed
                    ? queda
                      ? { opacity: 1, scale: 1.14 }
                      : { opacity: 0.08, scale: 0.78 }
                    : { opacity: 0.32, scale: 1 }
                }
                transition={{ duration: 0.6, delay: 0.7 + (i % 7) * 0.05, ease }}
              />
            );
          })}
        </div>
        <Rise className="mt-6 space-y-1" delay={0.15}>
          <p className="text-cream/55 text-base line-through decoration-cream/40">No necesitás 20 moldes.</p>
          <p
            className="font-display italic text-cream leading-snug"
            style={{ fontSize: 'clamp(1.25rem, 3.8vw, 1.9rem)', fontWeight: 400 }}
          >
            Necesitás saber modificar 3 básicos.
          </p>
        </Rise>
      </div>
    </div>
  );
}

/* ── Proporciones: la misma superficie, de alta y angosta a baja y ancha ── */

const AREA = 11000;

function Proporcion() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  const tocado = useRef(false);

  useEffect(() => {
    if (!revealed || reduce) return;
    const controls = animate(0, 1, {
      duration: 2.2,
      delay: 0.5,
      ease: [0.45, 0, 0.25, 1],
      onUpdate: (v) => {
        if (!tocado.current) setT(v);
      },
    });
    return () => controls.stop();
  }, [revealed, reduce]);

  const w = 62 + t * 108;
  const h = AREA / w;
  const cx = 150;
  const y0 = 226;
  const x = cx - w / 2;
  const y = y0 - h;
  const alto = Math.min(w * 0.5, 54);
  const rayas = Math.floor(w / 12);
  const etiqueta = t < 0.34 ? 'Alta y angosta' : t > 0.66 ? 'Baja y ancha' : 'Intermedia';

  return (
    <div ref={ref} className="bg-white px-5 py-7 sm:px-8" style={OUTLINE}>
      <p className="text-center font-display italic text-dark text-lg mb-2" aria-live="polite">
        {etiqueta}
      </p>
      <svg
        viewBox="0 0 300 250"
        fill="none"
        style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block', margin: '0 auto' }}
        role="img"
        aria-label={`Tote ${etiqueta.toLowerCase()}`}
      >
        <line x1="20" y1={y0} x2="280" y2={y0} stroke={INK} strokeWidth="0.9" opacity="0.35" />
        <path
          d={`M${cx - w * 0.26} ${y} C${cx - w * 0.26} ${y - alto} ${cx + w * 0.26} ${y - alto} ${cx + w * 0.26} ${y}`}
          stroke={INK}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x={x} y={y} width={w} height={h} fill={FABRIC} stroke={INK} strokeWidth="1.6" />
        {Array.from({ length: rayas }).map((_, i) => (
          <line
            key={i}
            x1={x + 6 + i * 12}
            y1={y + 1}
            x2={x + 6 + i * 12}
            y2={y0 - 1}
            stroke={ACCENT}
            strokeWidth="3"
            opacity="0.22"
          />
        ))}
      </svg>

      <div className="mt-3 max-w-sm mx-auto">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(t * 100)}
          onChange={(e) => {
            tocado.current = true;
            setT(Number(e.target.value) / 100);
          }}
          aria-label="Proporción de la tote, de alta y angosta a baja y ancha"
          aria-valuetext={etiqueta}
          className="w-full h-11 cursor-pointer accent-dark"
        />
        <div className="flex justify-between text-[11px] uppercase tracking-[0.14em] text-dark/40 -mt-1">
          <span>Alta y angosta</span>
          <span>Baja y ancha</span>
        </div>
      </div>
    </div>
  );
}

/* ── Tela: la misma bolsa cambia de silueta según cómo cae la tela ── */

function TelaCard({ nombre, nota, cuerpo, manija, delay }: (typeof TELAS)[number] & { delay: number }) {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.55, delay, ease }}
      className="bg-white px-3 pt-5 pb-5 text-center"
      style={OUTLINE}
    >
      <svg viewBox="0 0 104 124" fill="none" style={{ width: '100%', maxWidth: 130, height: 'auto', display: 'block', margin: '0 auto' }} aria-hidden="true">
        <motion.path
          initial={{ d: MANIJA_BASE }}
          animate={{ d: revealed ? manija : MANIJA_BASE }}
          transition={{ duration: 1, delay: 0.35 + delay, ease }}
          stroke={INK}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <motion.path
          initial={{ d: BOLSA_BASE }}
          animate={{ d: revealed ? cuerpo : BOLSA_BASE }}
          transition={{ duration: 1, delay: 0.35 + delay, ease }}
          fill={FABRIC}
          stroke={INK}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-display text-dark leading-snug mt-3" style={{ fontSize: '1.02rem', fontWeight: 500 }}>
        {nombre}
      </p>
      <p className="text-xs text-dark/50 mt-1 leading-snug">{nota}</p>
    </motion.div>
  );
}

/* ── Diseño funcional: checklist con anillo de progreso ── */

function Preguntas() {
  const [hechas, setHechas] = useState<boolean[]>(PREGUNTAS.map(() => false));
  const cantidad = hechas.filter(Boolean).length;
  const completo = cantidad === PREGUNTAS.length;
  const alternar = (i: number) => setHechas((h) => h.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="bg-white px-5 py-6 sm:px-8" style={OUTLINE}>
      <div className="flex items-center gap-5 mb-4">
        <div className="relative w-[60px] h-[60px] shrink-0">
          <svg viewBox="0 0 60 60" className="absolute inset-0" aria-hidden="true">
            <circle cx="30" cy="30" r="26" fill="none" stroke="hsl(var(--border))" strokeWidth="2" opacity="0.6" />
            <motion.circle
              cx="30"
              cy="30"
              r="26"
              fill="none"
              stroke={ACCENT}
              strokeWidth="2.4"
              strokeLinecap="round"
              transform="rotate(-90 30 30)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: cantidad / PREGUNTAS.length }}
              transition={{ type: 'spring', stiffness: 160, damping: 24 }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display text-dark tabular-nums text-lg">
            {cantidad}/{PREGUNTAS.length}
          </span>
        </div>
        <p className="text-sm text-dark/60 leading-relaxed">
          Tocá cada pregunta cuando ya sepas la respuesta, antes de modificar el molde.
        </p>
      </div>

      <ul className="divide-y divide-border/30">
        {PREGUNTAS.map((q, i) => (
          <li key={q}>
            <motion.button
              type="button"
              aria-pressed={hechas[i]}
              onClick={() => alternar(i)}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
              className="w-full flex items-center gap-4 py-4 text-left cursor-pointer"
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  hechas[i] ? 'bg-dark' : 'bg-cream'
                }`}
                style={{ outline: hechas[i] ? 'none' : '1px solid hsl(var(--border))' }}
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <motion.path
                    d="M2.5 7.5l3 3L11.5 4"
                    stroke="hsl(var(--cream))"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={{ pathLength: hechas[i] ? 1 : 0, opacity: hechas[i] ? 1 : 0 }}
                    transition={{ duration: 0.28, ease }}
                  />
                </svg>
              </span>
              <span
                className={`font-display italic leading-snug transition-colors duration-200 ${
                  hechas[i] ? 'text-dark/40' : 'text-dark'
                }`}
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 400 }}
              >
                {q}
              </span>
            </motion.button>
          </li>
        ))}
      </ul>

      <div className="min-h-[1.6rem] mt-2" aria-live="polite">
        <AnimatePresence>
          {completo && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="text-sm font-bold text-dark text-center"
            >
              Ahora sí: a modificar.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Un molde, cinco productos: ramas que se dibujan ── */

function Coleccion() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const xs = [10, 30, 50, 70, 90];

  return (
    <div ref={ref} className="max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.55, ease }}
        className="mx-auto w-fit bg-dark text-cream px-6 py-3 text-center"
      >
        <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream">1 molde base</p>
      </motion.div>

      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-14 block" fill="none" aria-hidden="true">
        {xs.map((px, i) => (
          <motion.path
            key={px}
            d={`M50 0 C50 15 ${px} 14 ${px} 30`}
            stroke={ACCENT}
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={revealed ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.35 + i * 0.07, ease }}
          />
        ))}
      </svg>

      <ul className="grid grid-cols-5 gap-2">
        {VERSIONES.map(({ Icon }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={revealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.9 + i * 0.09 }}
            className="text-center"
          >
            <span
              className="mx-auto w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-dark"
              style={{ outline: '1px solid hsl(var(--border) / 0.7)' }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <span className="block text-[11px] text-dark/65 mt-2 leading-tight">Versión {i + 1}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease }}
        className="mt-5 flex items-center gap-3"
      >
        <span className="flex-1 h-px bg-dark/20" />
        <span className="font-display italic text-dark" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)' }}>
          mini colección
        </span>
        <span className="flex-1 h-px bg-dark/20" />
      </motion.div>
    </div>
  );
}

export function Module17() {
  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 700], [0, 120]);
  const watermarkOpacity = useTransform(scrollY, [0, 520], [0.035, 0.012]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

        {/* ── Hero ── */}
        <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            style={{ y: watermarkY, opacity: watermarkOpacity }}
          >
            <span
              className="font-display text-dark leading-none"
              style={{ fontSize: 'clamp(9rem, 28vw, 22rem)', fontWeight: 700 }}
            >
              XVII
            </span>
          </motion.div>

          <div className="relative space-y-4 max-w-3xl pt-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XVII</p>
            <h1
              className="font-display text-dark leading-tight pb-2"
              style={{ fontSize: 'clamp(2.1rem, 9.5vw, 4.5rem)' }}
            >
              Adaptación de<br />
              <span className="italic text-dark font-normal block mt-2">moldes básicos</span>
            </h1>
            <p className="font-body text-sm text-dark/60 leading-relaxed max-w-sm mx-auto">
              De copiar moldes a crear tus propios diseños.
            </p>
          </div>

          <figure className="relative w-full max-w-md mx-auto">
            <motion.div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/5' }}
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.35 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 1, delay: 0.15, ease }}
            >
              <motion.img
                src="/modulo17/teoria/teoria1.png"
                alt="Bolsillo de reposera de rayas rosas y rojas colgado del apoyabrazos de una silla rosa, con un cuaderno, anteojos de sol, una crema y un labial"
                className="w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.15, ease }}
              />
            </motion.div>
            <motion.figcaption
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="mt-3 text-xs text-dark/45 italic"
            >
              Un molde básico convertido en bolsillo de reposera: el proyecto de la práctica.
            </motion.figcaption>
          </figure>

          <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-dark">
            <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
            <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
            <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="bg-cream px-6 py-10">
          <div className="max-w-2xl mx-auto space-y-5">
            <Rise>
              <p className="text-lg text-dark leading-relaxed">
                Hasta acá aprendiste a seguir moldes. El paso que sigue es tomar uno básico, tocarlo un poco y
                convertirlo en otro producto.
              </p>
            </Rise>
            <Rise delay={0.08}>
              <p className="text-base text-dark/60 leading-relaxed">
                Es la diferencia entre copiar y diseñar, y se aprende con cuentas simples y buenas preguntas.
              </p>
            </Rise>
            <Rise delay={0.16}>
              <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
                Un molde bien entendido rinde para muchos productos.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 01 · Agrandar o achicar ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead
              eyebrow="Método simple, ideal para principiantes"
              lines={['Cómo agrandar', 'o achicar un molde']}
              size="md"
            />
            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                Si querés agrandar una tote bag de 35 × 40 cm para que quede de 40 × 45 cm, sumás 5 cm a cada
                medida principal. Mové el deslizador y miralo.
              </p>
            </Rise>

            <Rise>
              <Agrandar />
            </Rise>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {AVISOS.map((a, i) => (
                <Rise key={a} delay={i * 0.1}>
                  <div className="h-full bg-white px-5 py-5 flex items-start gap-3" style={OUTLINE}>
                    <TriangleAlert size={17} strokeWidth={1.6} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <p className="font-body text-sm text-dark/80 leading-relaxed">{a}</p>
                  </div>
                </Rise>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 · De tote bag a bolso ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-3xl mx-auto">
            <SectionHead eyebrow="Partimos de un molde rectangular" lines={['De tote bag', 'a bolso']} />
            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                Con el mismo molde básico podés sumar una o varias de estas piezas. Armá tu bolso y mirá cómo
                cambia.
              </p>
            </Rise>
            <Rise>
              <ArmadorBolso />
            </Rise>
            <Rise className="mt-8 flex items-center justify-center gap-3" delay={0.1}>
              <Wallet size={19} strokeWidth={1.5} className="text-dark/45 shrink-0" />
              <p
                className="font-display italic text-dark leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Cambia el producto, y el precio también.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 03 · Almohadón ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-3xl mx-auto">
            <SectionHead eyebrow="Base de 50 × 50 cm" lines={['Modificar un', 'almohadón simple']} size="md" />
            <Rise>
              <Almohadon />
            </Rise>
            <Rise className="mt-8" delay={0.1}>
              <p
                className="font-display italic text-dark text-center leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Esto enseña diseño y valor agregado.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 04 · Parte estratégica ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Parte estratégica" lines={['Lo que más', 'suma']} className="mb-8" />
            <Rise>
              <Estrategia />
            </Rise>
          </div>
        </section>

        <CintaDivider label="Más allá de la medida" />

        {/* ── 05 · Proporciones ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="No es sólo sumar 5 cm" lines={['Pensar en', 'proporciones']} />
            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                Además de los centímetros, mirá estas cuatro cosas:
              </p>
            </Rise>

            <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
              {CRITERIOS.map(({ label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease }}
                  className="bg-cream px-5 py-6 flex items-center gap-4"
                >
                  <Icon size={19} strokeWidth={1.5} className="text-dark/50 shrink-0" />
                  <p className="font-body text-base text-dark leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>

            <Rise className="mt-10">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 text-center mb-2">Ejercicio</p>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-6">
                Comparamos una tote muy alta y angosta con otra más baja y ancha. Es la misma superficie de tela,
                dos productos muy distintos.
              </p>
              <Proporcion />
            </Rise>
          </div>
        </section>

        {/* ── 06 · Tipo de tela ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-3xl mx-auto">
            <SectionHead eyebrow="La tela también decide" lines={['Adaptar según', 'el tipo de tela']} size="md" />
            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                No es lo mismo modificar un molde para cada una de estas telas. La misma bolsa cambia de forma:
              </p>
            </Rise>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TELAS.map((t, i) => (
                <TelaCard key={t.nombre} {...t} delay={i * 0.08} />
              ))}
            </div>

            <Rise className="mt-8" delay={0.1}>
              <p
                className="font-display italic text-dark text-center leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                La tela también modifica el molde.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 07 · Diseño funcional ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Antes de modificar" lines={['Diseño', 'funcional']} />
            <Rise>
              <Preguntas />
            </Rise>
            <Rise className="mt-5 bg-dark text-cream px-7 py-7 text-center" delay={0.1}>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-3">Lo que cambia</p>
              <p
                className="font-display italic text-cream leading-snug"
                style={{ fontSize: 'clamp(1.15rem, 3.2vw, 1.7rem)', fontWeight: 400 }}
              >
                Pensás como diseñadora,<br />no sólo como costurera.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 08 · Adaptación estratégica ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Para vender más" lines={['Adaptación', 'estratégica']} />
            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                Con un solo molde base podés sacar cinco productos distintos y armar una mini colección.
              </p>
            </Rise>
            <Coleccion />
            <Rise className="mt-10 flex items-center justify-center gap-3" delay={0.1}>
              <Heart size={19} strokeWidth={1.6} className="shrink-0" style={{ color: ACCENT }} />
              <p
                className="font-display italic text-dark leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Eso es mentalidad emprendedora.
              </p>
            </Rise>
          </div>
        </section>

        <CintaDivider label="Para cerrar" />

        {/* ── Cierre ── */}
        <section className="bg-cream px-6 pt-6 pb-6">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <Rise>
              <p className="text-base text-dark/70 leading-relaxed">
                Agrandar, achicar, sumar piezas y elegir bien la tela: con pocos moldes y buenas preguntas
                podés armar productos nuevos sin empezar de cero.
              </p>
            </Rise>
            <Rise delay={0.12}>
              <p
                className="font-display italic text-dark leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
              >
                Un molde, muchas ideas.
              </p>
            </Rise>
            <Rise delay={0.2} className="pt-3">
              <Link
                to="/module17/practica"
                className="group inline-flex items-center gap-2 bg-dark text-cream px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-transform duration-150 active:scale-[0.97]"
              >
                Ir a la práctica
                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 [@media(hover:hover)]:group-hover:translate-x-0.5"
                />
              </Link>
            </Rise>
          </div>
        </section>

        <CarruselModulo17Teoria />

        {/* Floating back to top */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Volver al inicio"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-cream whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
            Volver al inicio
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path
              d="M8 12V4M4 8l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </MotionConfig>
  );
}
