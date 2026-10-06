import { useEffect } from 'react';
import type { ComponentType, CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeftRight,
  ArrowRight,
  Ban,
  Check,
  Droplets,
  Flame,
  Frame,
  Hand,
  Lightbulb,
  MessageCircleHeart,
  Package,
  Palette,
  PenTool,
  Receipt,
  Scissors,
  Settings,
  Sparkles,
  Sun,
  Truck,
  Zap,
  ZoomIn,
} from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { CintaDivider, CountUp, Rise, SectionHead } from '../components/ModuloUI';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';
const SAND = '#BFA98A';
const INK = '#3B3B36';
const LIGHT = '#F2E3B8';

type IconCmp = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

/* ── Datos ── */

const TERMINOS = [
  { id: 'precio-a', letra: 'A', label: 'Materiales' },
  { id: 'precio-b', letra: 'B', label: 'Mano de obra' },
  { id: 'precio-c', letra: 'C', label: 'Gastos fijos' },
  { id: 'precio-d', letra: 'D', label: 'Ganancia' },
];

const MATERIALES = ['Tela', 'Hilo', 'Cierre', 'Entretela', 'Packaging'];

function NeedleIcon({ size = 18, strokeWidth = 1.7, className }: { size?: number; strokeWidth?: number; className?: string }) {
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
      <path d="M4 20 17.5 6.5" />
      <path d="M16 5.2a2.4 2.4 0 0 1 3.4 3.4l-1.1 1.1-3.4-3.4z" />
    </svg>
  );
}

const GASTOS: { label: string; Icon: IconCmp }[] = [
  { label: 'Luz', Icon: Zap },
  { label: 'Agujas', Icon: NeedleIcon },
  { label: 'Desgaste de máquina', Icon: Settings },
  { label: 'Transporte', Icon: Truck },
  { label: 'Impuestos', Icon: Receipt },
];

const TICKET_ITEMS = [
  { label: 'Tela', monto: 3000 },
  { label: 'Cierre', monto: 1500 },
  { label: 'Hilo y extras', monto: 500 },
];
const MATERIAL_TOTAL = TICKET_ITEMS.reduce((acc, i) => acc + i.monto, 0); // 5.000
const TIEMPO = 6000;
const SUBTOTAL = MATERIAL_TOTAL + TIEMPO; // 11.000
const GASTOS_MONTO = Math.round(SUBTOTAL * 0.15); // 1.650
const TOTAL = SUBTOTAL + GASTOS_MONTO; // 12.650

const COMPOSICION = [
  { label: 'Materiales', monto: MATERIAL_TOTAL, color: SAND },
  { label: 'Mano de obra', monto: TIEMPO, color: ACCENT },
  { label: 'Gastos', monto: GASTOS_MONTO, color: INK },
];

const VENDES: { label: string; Icon: IconCmp }[] = [
  { label: 'Calidez', Icon: Flame },
  { label: 'Detalle', Icon: Sparkles },
  { label: 'Hecho a mano', Icon: Hand },
  { label: 'Diseño', Icon: PenTool },
];

const BIO_LINES = ['Textiles para el hogar ✂️', 'Diseño simple y funcional', 'Envíos a todo el país'];
const BIO_PREGUNTAS = ['Qué hacés', 'Para quién', 'Cómo comprar'];

const POST_PASOS = [
  { tag: 'Frase que capte atención', texto: '“¿Tu mesa necesita un cambio?”', display: true },
  { tag: 'Beneficio', texto: 'Gabardina impermeable, fácil de limpiar y con caída perfecta.', display: false },
  { tag: 'Llamado a la acción', texto: 'Escribime por privado para elegir el tuyo 💌', display: false },
];

const FOTO_COLUMNAS: { titulo: string; Icon: IconCmp; items: string[] }[] = [
  {
    titulo: 'Luz',
    Icon: Sun,
    items: ['Siempre natural', 'Lateral, cerca de una ventana', 'Evitar la luz amarilla artificial'],
  },
  {
    titulo: 'Fondo',
    Icon: Frame,
    items: ['Pared blanca', 'Mesa de madera', 'Tela lisa neutra', 'Pocos objetos, sin mezclar de más'],
  },
  {
    titulo: 'Producto',
    Icon: Package,
    items: ['Planchado', 'Sin hilos sueltos', 'Bien armado', 'Detalles visibles'],
  },
];

const CONTENIDOS: { label: string; Icon: IconCmp }[] = [
  { label: 'Proceso de costura', Icon: Scissors },
  { label: 'Detalles de cerca', Icon: ZoomIn },
  { label: 'Antes y después', Icon: ArrowLeftRight },
  { label: 'Cómo combinarlo', Icon: Palette },
  { label: 'Opinión de clientas', Icon: MessageCircleHeart },
  { label: 'Cómo se lava y cómo usarlo', Icon: Droplets },
];

const ERRORES = [
  'Fondo desordenado',
  'Producto arrugado',
  'Fotos oscuras',
  'Descripciones sin precio ni información clara',
];

/* ── Utilidades ── */

const fmtNum = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const fmt = (n: number) => `$${fmtNum(n)}`;

const OUTLINE: CSSProperties = { outline: '1px solid hsl(var(--border) / 0.5)' };

/* ── La fórmula: cada pieza es un botón que lleva a su detalle ── */

function Formula() {
  const reduce = useReducedMotion();

  const irA = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-2">
        {TERMINOS.map((t, i) => (
          <div key={t.id} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {i > 0 && (
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.06, ease }}
                className="font-display text-dark/30 leading-none text-center select-none"
                style={{ fontSize: '1.6rem' }}
              >
                +
              </motion.span>
            )}
            <motion.button
              type="button"
              onClick={() => irA(t.id)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ type: 'spring', stiffness: 280, damping: 26, delay: i * 0.1 }}
              className="flex items-center justify-center sm:justify-start gap-3 bg-white px-5 py-3.5 text-left cursor-pointer"
              style={{ outline: '1px solid hsl(var(--border) / 0.6)' }}
              aria-label={`Ver el detalle de ${t.label}`}
            >
              <span className="font-display text-dark/30 text-xl leading-none">{t.letra}</span>
              <span className="font-body text-sm text-dark">{t.label}</span>
            </motion.button>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.8, delay: 0.5, ease }}
        className="mt-3 bg-dark text-cream px-7 py-6 flex items-center justify-center gap-4"
      >
        <span className="font-display text-cream/40 leading-none" style={{ fontSize: '2rem' }}>
          =
        </span>
        <span
          className="font-display italic text-cream leading-none"
          style={{ fontSize: 'clamp(1.5rem, 4.4vw, 2.4rem)', fontWeight: 400 }}
        >
          Precio final
        </span>
      </motion.div>

      <p className="text-center text-xs text-dark/45 italic mt-3">Tocá cada pieza para ver su detalle.</p>
    </div>
  );
}

/* ── Cabecera de cada parte (A, B, C, D) ── */

function ParteHead({ letra, titulo, dark }: { letra: string; titulo: string; dark?: boolean }) {
  return (
    <div className="flex items-baseline gap-4 relative z-10">
      <span
        className={`font-display leading-none shrink-0 ${dark ? 'text-cream/30' : 'text-dark/25'}`}
        style={{ fontSize: 'clamp(1.8rem, 4.6vw, 2.4rem)', fontWeight: 400 }}
      >
        {letra}
      </span>
      <h3
        className={`font-display leading-tight ${dark ? 'text-cream' : 'text-dark'}`}
        style={{ fontSize: 'clamp(1.3rem, 3.4vw, 1.8rem)', fontWeight: 500 }}
      >
        {titulo}
      </h3>
    </div>
  );
}

/* ── Ticket del ejercicio ── */

function TicketRow({
  label,
  children,
  delay,
  strong,
}: {
  label: ReactNode;
  children: ReactNode;
  delay: number;
  strong?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay, ease }}
      className="flex items-baseline gap-3"
    >
      <span className={`font-body text-sm ${strong ? 'text-dark font-bold' : 'text-dark/70'}`}>{label}</span>
      <span aria-hidden="true" className="flex-1 border-b border-dotted border-dark/25 -translate-y-[3px]" />
      <span className={`font-body text-sm tabular-nums ${strong ? 'text-dark font-bold' : 'text-dark'}`}>{children}</span>
    </motion.div>
  );
}

function Ticket() {
  return (
    <div className="mx-auto max-w-md" style={{ filter: 'drop-shadow(0 12px 22px rgba(26,26,26,0.08))' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease }}
        className="bg-white px-6 pt-8 pb-7 sm:px-8"
      >
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-1">Ejemplo</p>
            <p className="font-display text-dark leading-none" style={{ fontSize: '1.9rem', fontWeight: 500 }}>
              Neceser
            </p>
          </div>
          <Scissors size={20} strokeWidth={1.5} className="text-dark/30 mb-1" />
        </div>

        <div className="space-y-3">
          {TICKET_ITEMS.map((it, i) => (
            <TicketRow key={it.label} label={it.label} delay={0.1 + i * 0.07}>
              {fmt(it.monto)}
            </TicketRow>
          ))}
          <div className="pt-3 border-t border-dark/15">
            <TicketRow label="Material total" delay={0.34} strong>
              {fmt(MATERIAL_TOTAL)}
            </TicketRow>
          </div>
          <TicketRow label="Tiempo, 1 hora" delay={0.42}>
            {fmt(TIEMPO)}
          </TicketRow>
          <div className="pt-3 border-t border-dark/15">
            <TicketRow label="Subtotal" delay={0.5} strong>
              {fmt(SUBTOTAL)}
            </TicketRow>
          </div>
          <TicketRow label="Gastos, 15 %" delay={0.58}>
            + {fmt(GASTOS_MONTO)}
          </TicketRow>
        </div>

        <div className="mt-5 pt-4 border-t-2 border-dark flex items-baseline justify-between">
          <span className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Total</span>
          <CountUp to={TOTAL} format={fmt} className="font-display text-dark" duration={1.2} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.08, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.7 }}
          className="mt-7 bg-dark text-cream px-5 py-5 text-center"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/45 mb-2">Precio sugerido</p>
          <p className="font-display text-cream leading-none" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: 500 }}>
            $13.000 <span className="text-cream/35 font-normal">/</span> $14.000
          </p>
        </motion.div>
      </motion.div>

      <svg width="100%" height="9" className="block" aria-hidden="true">
        <defs>
          <pattern id="m16-zig" width="16" height="9" patternUnits="userSpaceOnUse">
            <path d="M0 0H16L8 9Z" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="9" fill="url(#m16-zig)" />
      </svg>
    </div>
  );
}

/* ── Composición del precio: barra proporcional con los números del ticket ── */

function Composicion() {
  return (
    <Rise className="mt-10 max-w-md mx-auto">
      <p className="text-center text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-4">
        En qué se va el precio
      </p>
      <div className="flex w-full h-3 overflow-hidden bg-border/20" role="img" aria-label="Materiales, mano de obra y gastos sobre el total">
        {COMPOSICION.map((c, i) => (
          <motion.div
            key={c.label}
            style={{ width: `${(c.monto / TOTAL) * 100}%`, background: c.color }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.18, ease }}
          />
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-3 gap-3">
        {COMPOSICION.map((c, i) => (
          <motion.li
            key={c.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10px' }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease }}
            className="flex flex-col justify-between gap-1"
          >
            <span className="flex items-start gap-2 text-xs text-dark/60 leading-snug">
              <span className="w-2 h-2 rounded-full shrink-0 mt-[0.28rem]" style={{ background: c.color }} />
              {c.label}
            </span>
            <span className="block font-display text-dark mt-0.5 tabular-nums" style={{ fontSize: '1.05rem' }}>
              {fmt(c.monto)}
            </span>
          </motion.li>
        ))}
      </ul>
    </Rise>
  );
}

/* ── Esquema de luz natural: ventana, luz lateral y producto ── */

function EscenaLuz() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  const show = (delay: number) => ({
    initial: { opacity: 0 },
    animate: revealed ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <div ref={ref} className="w-full overflow-hidden bg-white" style={{ padding: '24px 12px', ...OUTLINE }}>
      <svg
        viewBox="0 0 360 200"
        fill="none"
        style={{ width: '100%', maxWidth: 520, height: 'auto', display: 'block', margin: '0 auto' }}
        role="img"
        aria-label="Esquema: ventana a un costado, luz lateral natural y un producto sobre un fondo claro"
      >
        {/* Pared y mesa */}
        <motion.g {...show(0)}>
          <rect x="0" y="0" width="360" height="140" fill={FABRIC} />
          <rect x="0" y="140" width="360" height="60" fill="#E4D6BE" />
          <line x1="0" y1="140" x2="360" y2="140" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.5" />
          <text x="338" y="30" textAnchor="end" fontSize="10.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
            fondo claro y liso
          </text>
        </motion.g>

        {/* Ventana */}
        <motion.g {...show(0.15)}>
          <rect x="24" y="24" width="60" height="92" fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1="54" y1="24" x2="54" y2="116" stroke="#1a1a1a" strokeWidth="1" />
          <line x1="24" y1="70" x2="84" y2="70" stroke="#1a1a1a" strokeWidth="1" />
          <rect x="18" y="116" width="72" height="6" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
          <text x="54" y="138" textAnchor="middle" fontSize="10.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">
            ventana
          </text>
        </motion.g>

        {/* Rayos de luz lateral */}
        <motion.g {...show(0.45)}>
          <polygon points="84,30 292,82 292,102 84,54" fill={LIGHT} opacity="0.7" />
          <polygon points="84,58 292,108 292,128 84,80" fill={LIGHT} opacity="0.55" />
          <polygon points="84,84 292,130 292,148 84,104" fill={LIGHT} opacity="0.4" />
          <text x="150" y="44" fontSize="11" fontFamily="sans-serif" fill={ACCENT}>
            luz lateral natural
          </text>
        </motion.g>

        {/* Producto y sombra suave al lado opuesto */}
        <motion.g {...show(0.75)}>
          <ellipse cx="270" cy="144" rx="40" ry="4.5" fill="#1a1a1a" opacity="0.12" />
          <path
            d="M196 142 H258 C258 106 242 88 227 88 C212 88 196 106 196 142 Z"
            fill={ACCENT}
            opacity="0.92"
            stroke="#1a1a1a"
            strokeWidth="1.3"
          />
          <path
            d="M202 134 C202 110 214 95 227 95 C240 95 252 110 252 134"
            stroke={FABRIC}
            strokeWidth="1.4"
            strokeDasharray="3 2"
            fill="none"
          />
          <text x="227" y="166" textAnchor="middle" fontSize="10.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">
            producto planchado
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ── Avatar del perfil: el aro se dibuja al entrar en vista ── */

function Avatar() {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();
  return (
    <div ref={ref} className="relative w-16 h-16 shrink-0">
      <svg viewBox="0 0 64 64" className="absolute inset-0" aria-hidden="true">
        <motion.circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1.6"
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={revealed ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.1, ease }}
        />
      </svg>
      <div className="absolute inset-[6px] rounded-full bg-cream flex items-center justify-center text-dark">
        <Scissors size={22} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function Module16() {
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
              style={{ fontSize: 'clamp(11rem, 32vw, 26rem)', fontWeight: 700 }}
            >
              XVI
            </span>
          </motion.div>

          <div className="relative space-y-4 max-w-3xl pt-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XVI</p>
            <h1
              className="font-display text-dark leading-tight pb-2"
              style={{ fontSize: 'clamp(2.2rem, 10.5vw, 4.5rem)' }}
            >
              Costura y<br />
              <span className="italic text-dark font-normal block mt-2">emprendimiento</span>
            </h1>
          </div>

          <figure className="relative w-full max-w-md mx-auto">
            <motion.div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/5' }}
              initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0.35 }}
              animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease }}
            >
              <motion.img
                src="/modulo16/teoria/neceser.png"
                alt="Neceser circular de rayas rosas y naranjas con cierre crema, apoyado sobre una superficie de cemento"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.15, ease }}
              />
            </motion.div>
            <motion.figcaption
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="mt-3 text-xs text-dark/45 italic"
            >
              El neceser circular, protagonista de la práctica.
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
                Saber coser es la mitad del camino. La otra mitad es saber cuánto cobrar por lo que hacés y
                cómo mostrarlo para que se note todo el trabajo que hay detrás.
              </p>
            </Rise>
            <Rise delay={0.08}>
              <p className="text-base text-dark/60 leading-relaxed">
                En este módulo ponemos números a un producto, hacemos la cuenta de un neceser y armamos la
                vidriera en redes.
              </p>
            </Rise>
            <Rise delay={0.16}>
              <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
                Un producto bien hecho merece un precio justo y una buena vidriera.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 01 · Cómo poner precio ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Fórmula base" lines={['Cómo poner precio', 'a un producto']} size="md" />
            <Formula />
          </div>
        </section>

        {/* ── Las cuatro partes ── */}
        <section className="bg-cream px-6 pb-14">
          <div className="max-w-2xl mx-auto space-y-5">

            {/* A · Materiales */}
            <Rise>
              <article id="precio-a" className="bg-white px-5 py-7 sm:px-7 scroll-mt-24" style={OUTLINE}>
                <ParteHead letra="A" titulo="Materiales" />
                <ul className="flex flex-wrap gap-2 mt-5">
                  {MATERIALES.map((m, i) => (
                    <motion.li
                      key={m}
                      initial={{ opacity: 0, scale: 0.92, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.06 }}
                      className="font-body text-sm text-dark px-4 py-2 rounded-full bg-cream"
                      style={{ outline: '1px solid hsl(var(--border) / 0.7)' }}
                    >
                      {m}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7">
                  <div className="flex justify-between gap-4 text-[11px] uppercase tracking-[0.16em] text-dark/45 mb-2">
                    <span>Lo que realmente usás</span>
                    <span>El metro entero</span>
                  </div>
                  <div className="relative h-9" style={{ border: '1px dashed hsl(var(--dark) / 0.3)' }}>
                    <motion.div
                      className="absolute inset-y-0 left-0"
                      style={{ width: '38%', background: SAND }}
                      initial={{ clipPath: 'inset(0 100% 0 0)' }}
                      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.9, delay: 0.35, ease }}
                    />
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span
                        key={i}
                        aria-hidden="true"
                        className="absolute top-0 w-px bg-dark/25"
                        style={{ left: `${(i + 1) * 10}%`, height: i === 4 ? 14 : 8 }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-dark/70 leading-relaxed mt-4">
                    Siempre calculá lo que realmente usás, no el metro entero.
                  </p>
                </div>
              </article>
            </Rise>

            {/* B · Mano de obra */}
            <Rise>
              <article id="precio-b" className="bg-dark text-cream px-5 py-8 sm:px-7 scroll-mt-24">
                <ParteHead letra="B" titulo="Mano de obra" dark />
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mt-5 mb-2">
                  El error más común
                </p>
                <p
                  className="font-display italic text-cream leading-snug"
                  style={{ fontSize: 'clamp(1.2rem, 3.4vw, 1.7rem)', fontWeight: 400 }}
                >
                  No valorar el tiempo.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-end justify-center gap-3 sm:gap-6 text-center">
                  <Rise y={12}>
                    <p className="text-xs text-cream/45 mb-1">Querés ganar</p>
                    <p className="font-display text-cream leading-none" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)' }}>
                      $6.000
                    </p>
                    <p className="text-xs text-cream/45 mt-1">por hora</p>
                  </Rise>
                  <span aria-hidden="true" className="font-display text-cream/35 text-3xl leading-none sm:pb-5">×</span>
                  <Rise y={12} delay={0.12}>
                    <p className="text-xs text-cream/45 mb-1">Y tardás</p>
                    <p className="font-display text-cream leading-none" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)' }}>
                      1 h 30
                    </p>
                    <p className="text-xs text-cream/45 mt-1">una hora y media</p>
                  </Rise>
                  <span aria-hidden="true" className="font-display text-cream/35 text-3xl leading-none sm:pb-5">=</span>
                  <Rise y={12} delay={0.24}>
                    <p className="text-xs text-cream/45 mb-1">Mano de obra</p>
                    <CountUp to={9000} format={fmt} className="font-display text-cream leading-none" duration={1.2} />
                    <span className="block mx-auto mt-2 h-px bg-cream/40" style={{ width: '100%' }} />
                  </Rise>
                </div>
              </article>
            </Rise>

            {/* C · Gastos fijos */}
            <Rise>
              <article id="precio-c" className="bg-white px-5 py-7 sm:px-7 scroll-mt-24" style={OUTLINE}>
                <ParteHead letra="C" titulo="Gastos fijos" />
                <p className="text-sm text-dark/60 mt-2 sm:pl-12">Muchas se olvidan de ellos.</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-stretch">
                  <ul className="divide-y divide-border/30">
                    {GASTOS.map(({ label, Icon }, i) => (
                      <motion.li
                        key={label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.45, delay: i * 0.06, ease }}
                        className="flex items-center gap-4 py-3"
                      >
                        <Icon size={18} strokeWidth={1.6} className="text-dark/55 shrink-0" />
                        <span className="font-body text-base text-dark">{label}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ type: 'spring', stiffness: 240, damping: 26, delay: 0.2 }}
                    className="bg-dark text-cream px-7 py-6 flex flex-col items-center justify-center text-center sm:min-w-[11rem]"
                  >
                    <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/45 mb-3">Sumá un</p>
                    <p className="font-display text-cream leading-none" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)' }}>
                      <CountUp to={10} format={(n) => `${n} %`} duration={0.9} />
                      <span className="text-cream/35 text-base mx-2">o</span>
                      <CountUp to={15} format={(n) => `${n} %`} duration={0.9} />
                    </p>
                    <p className="text-xs text-cream/55 mt-3 leading-relaxed">
                      extra para cubrir
                      <br />
                      todo esto
                    </p>
                  </motion.div>
                </div>
              </article>
            </Rise>

            {/* D · Margen de ganancia */}
            <Rise>
              <article id="precio-d" className="px-2 py-9 text-center scroll-mt-24">
                <div className="flex justify-center">
                  <ParteHead letra="D" titulo="Margen de ganancia" />
                </div>
                <p className="text-base text-dark/70 leading-relaxed mt-3">Si querés crecer, necesitás margen.</p>

                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mt-8 mb-4">
                  No es lo mismo
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <motion.span
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease }}
                    className="font-body text-sm text-dark px-5 py-3 bg-white"
                    style={{ outline: '1px solid hsl(var(--border))' }}
                  >
                    Precio para hobby
                  </motion.span>
                  <motion.span
                    aria-label="no es igual a"
                    initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }}
                    className="font-display text-dark/40 leading-none select-none"
                    style={{ fontSize: '2rem' }}
                  >
                    ≠
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease }}
                    className="font-body text-sm text-cream px-5 py-3 bg-dark"
                  >
                    Precio para emprendimiento
                  </motion.span>
                </div>
              </article>
            </Rise>
          </div>
        </section>

        {/* ── 02 · Ejercicio práctico ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Ejercicio práctico" lines={['Materiales', 'más tiempo']} />
            <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
              Hacemos la cuenta completa de un neceser, de la tela al precio que le ponemos.
            </p>
            <Ticket />
            <Composicion />
            <Rise className="mt-10 flex items-center justify-center gap-3" delay={0.1}>
              <Lightbulb size={20} strokeWidth={1.5} className="text-dark/45 shrink-0" />
              <p
                className="font-display italic text-dark leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Esto abre muchísimo la cabeza.
              </p>
            </Rise>
          </div>
        </section>

        <CintaDivider label="Segunda parte" />

        {/* ── 03 · No vendés un producto ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Presentación para redes" lines={['Vendés una', 'experiencia']} />

            <Rise>
              <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
                No vendés “una funda”. Lo que la gente se lleva es:
              </p>
            </Rise>

            <div className="grid grid-cols-2 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
              {VENDES.map(({ label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease }}
                  className="bg-cream px-4 py-8 text-center"
                >
                  <Icon size={20} strokeWidth={1.5} className="text-dark/45 mx-auto mb-3" />
                  <p
                    className="font-display italic text-dark leading-none"
                    style={{ fontSize: 'clamp(1.25rem, 3.8vw, 1.8rem)', fontWeight: 400 }}
                  >
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Antes y después del texto */}
            <div className="mt-12 space-y-3">
              <Rise>
                <div className="bg-white px-6 py-5" style={OUTLINE}>
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-2">Ficha técnica</p>
                  <p className="font-display text-dark/55 leading-snug relative inline-block" style={{ fontSize: '1.3rem' }}>
                    “Funda 50x50”
                    <motion.span
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-1/2 h-px bg-dark/60 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.6, delay: 0.5, ease }}
                    />
                  </p>
                </div>
              </Rise>

              <div className="flex justify-center py-1" aria-hidden="true">
                <motion.svg
                  width="14"
                  height="28"
                  viewBox="0 0 14 28"
                  fill="none"
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.7, ease }}
                >
                  <path d="M7 2v22M2 19l5 5 5-5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </div>

              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.8, delay: 0.85, ease }}
                className="bg-dark text-cream px-6 py-6"
              >
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/45 mb-2">Beneficio</p>
                <p
                  className="font-display italic text-cream leading-snug"
                  style={{ fontSize: 'clamp(1.15rem, 3.2vw, 1.6rem)', fontWeight: 400 }}
                >
                  “Funda que transforma tu living en un espacio cálido y moderno”
                </p>
              </motion.div>
            </div>

            <Rise className="mt-8" delay={0.1}>
              <p
                className="font-display italic text-dark text-center leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Hablá desde el beneficio, no desde la ficha técnica.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 04 · Perfil ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-3xl mx-auto">
            <SectionHead eyebrow="Tu vidriera" lines={['Perfil prolijo', 'y coherente']} />

            <div className="grid gap-5 sm:grid-cols-2 items-start">
              <Rise>
                <div className="bg-white px-6 py-6" style={OUTLINE}>
                  <div className="flex items-center gap-4">
                    <Avatar />
                    <div>
                      <p className="font-body text-sm font-bold text-dark">tu.emprendimiento</p>
                      <p className="text-xs text-dark/45">Perfil de ejemplo</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-1">
                    {BIO_LINES.map((line, i) => (
                      <motion.p
                        key={line}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease }}
                        className="font-body text-sm text-dark leading-relaxed"
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </Rise>

              <div className="space-y-5">
                <Rise delay={0.08}>
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">Foto de perfil</p>
                  <ul className="space-y-2.5">
                    {['Tu logo, si es claro', 'O tu producto estrella', 'Siempre con fondo limpio'].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={15} strokeWidth={1.8} className="text-dark/45 shrink-0 mt-1" />
                        <span className="font-body text-sm text-dark leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Rise>

                <Rise delay={0.16}>
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">
                    La biografía tiene que responder
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BIO_PREGUNTAS.map((q, i) => (
                      <motion.span
                        key={q}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.3 + i * 0.1 }}
                        className="font-body text-sm text-cream bg-dark px-4 py-2 rounded-full"
                      >
                        <span className="text-cream/40 mr-2 tabular-nums">{i + 1}</span>
                        {q}
                      </motion.span>
                    ))}
                  </div>
                </Rise>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 · Cómo escribir un buen post ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Cómo escribir un buen post" lines={['Un post en', 'tres pasos']} />

            <Rise>
              <div className="bg-white px-5 py-7 sm:px-7 space-y-7" style={OUTLINE}>
                {POST_PASOS.map((p, i) => (
                  <motion.div
                    key={p.tag}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.55, delay: i * 0.12, ease }}
                    className="grid gap-2 sm:grid-cols-[10.5rem_1fr] sm:gap-6 sm:items-baseline"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-dark text-cream text-[11px] font-bold flex items-center justify-center shrink-0 tabular-nums">
                        {i + 1}
                      </span>
                      <span className="text-xs uppercase tracking-[0.14em] font-bold text-dark/55 leading-snug">
                        {p.tag}
                      </span>
                    </div>
                    <p className={p.display ? 'font-display italic text-dark leading-snug' : 'font-body text-dark leading-relaxed'} style={{ fontSize: p.display ? '1.35rem' : '1rem' }}>
                      <motion.span
                        initial={{ backgroundSize: '0% 100%' }}
                        whileInView={{ backgroundSize: '100% 100%' }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease }}
                        style={{
                          backgroundImage: 'linear-gradient(transparent 62%, rgba(155, 75, 87, 0.2) 62%)',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: '0 0',
                          WebkitBoxDecorationBreak: 'clone',
                          boxDecorationBreak: 'clone',
                        }}
                      >
                        {p.texto}
                      </motion.span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </Rise>
          </div>
        </section>

        {/* ── 06 · Fotos caseras pero profesionales ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-3xl mx-auto">
            <SectionHead eyebrow="Fotos caseras" lines={['Pero', 'profesionales']} />

            <Rise>
              <EscenaLuz />
            </Rise>

            <div className="grid gap-3 sm:grid-cols-3 mt-5">
              {FOTO_COLUMNAS.map(({ titulo, Icon, items }, c) => (
                <motion.div
                  key={titulo}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: c * 0.1, ease }}
                  className="bg-white px-5 py-6"
                  style={{ ...OUTLINE, borderTop: c === 0 ? `3px solid ${ACCENT}` : '3px solid hsl(var(--border))' }}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon size={17} strokeWidth={1.6} className="text-dark/55" />
                    <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">{titulo}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={14} strokeWidth={1.8} className="text-dark/40 shrink-0 mt-1" />
                        <span className="font-body text-sm text-dark/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <Rise className="mt-5 bg-dark text-cream px-7 py-7 text-center" delay={0.1}>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-3">Consejo de oro</p>
              <p
                className="font-display italic text-cream leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 3.4vw, 1.8rem)', fontWeight: 400 }}
              >
                Menos es más.
              </p>
            </Rise>

            <p className="text-center text-xs text-dark/45 italic mt-4">En clase lo vemos con ejemplos reales.</p>
          </div>
        </section>

        {/* ── 07 · Tipos de contenido ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="No sólo producto terminado" lines={['Qué contenido', 'podés subir']} />

            <ul className="grid sm:grid-cols-2 sm:gap-x-10">
              {CONTENIDOS.map(({ label, Icon }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.07, ease }}
                  className="group flex items-center gap-4 py-4 border-b border-border/30"
                >
                  <span
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 text-dark transition-colors duration-200 [@media(hover:hover)]:group-hover:bg-dark [@media(hover:hover)]:group-hover:text-cream"
                    style={{ outline: '1px solid hsl(var(--border) / 0.7)' }}
                  >
                    <Icon size={16} strokeWidth={1.6} />
                  </span>
                  <span className="font-body text-base text-dark leading-snug">{label}</span>
                </motion.li>
              ))}
            </ul>

            <Rise className="mt-8" delay={0.1}>
              <p
                className="font-display italic text-dark text-center leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
              >
                Eso genera confianza.
              </p>
            </Rise>
          </div>
        </section>

        {/* ── 08 · Errores comunes ── */}
        <section className="bg-cream px-6 py-14">
          <div className="max-w-2xl mx-auto">
            <SectionHead eyebrow="Para tener en cuenta" lines={['Errores', 'comunes']} />

            <div className="grid sm:grid-cols-2 gap-3">
              {ERRORES.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease }}
                  className="bg-white px-5 py-5 flex items-center gap-4"
                  style={OUTLINE}
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85, rotate: -25 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 + (i % 2) * 0.08 }}
                    className="shrink-0 flex"
                    style={{ color: ACCENT }}
                  >
                    <Ban size={20} strokeWidth={1.6} />
                  </motion.span>
                  <span className="font-body text-base text-dark leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CintaDivider label="Para cerrar" />

        {/* ── Cierre ── */}
        <section className="bg-cream px-6 pt-6 pb-6">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <Rise>
              <p className="text-base text-dark/70 leading-relaxed">
                Coser bien, poner un precio que respete tu trabajo y mostrarlo con buena luz: las tres cosas
                juntas son las que sostienen un emprendimiento.
              </p>
            </Rise>
            <Rise delay={0.12}>
              <p
                className="font-display italic text-dark leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
              >
                Lo que hacés vale. Ahora tiene que verse.
              </p>
            </Rise>
            <Rise delay={0.2} className="pt-3">
              <Link
                to="/module16/practica"
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
