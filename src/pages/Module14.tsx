import { useEffect } from 'react';
import type { ReactElement } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CarruselModulo14Teoria } from '../components/CarruselModulo14Teoria';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';

/* ── Iconos de herramientas — dibujados a mano ── */

type IconProps = { size?: number };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function TijeraTelaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <circle cx="6" cy="18.4" r="2.6" />
      <circle cx="14.6" cy="18.4" r="2.6" />
      <path d="M8.2 16.5 19 4.2" />
      <path d="M12.5 16.5 5.6 8.6" />
      <path d="M4 4.2 10.3 11.4" opacity="0.45" />
    </svg>
  );
}

function CortahilosIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M5.4 20.2c-1.5-1.5-1.5-4 0-5.6l4-4" />
      <path d="M9.6 20.2c1.5-1.5 1.5-4 0-5.6l-4-4" />
      <path d="M9.4 10.6 15.2 4.8" />
      <path d="M5.6 10.6 11.4 4.8" opacity="0.5" />
      <circle cx="7.5" cy="17.4" r="0.9" fill="currentColor" stroke="none" opacity="0.55" />
    </svg>
  );
}

function CintaMetricaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M3 8.4c3.6-2.6 6.2 2.8 9.4.6S18.6 4.6 21 6.6" />
      <path d="M3 15.6c3.6-2.6 6.2 2.8 9.4.6s6.2-4.4 8.6-2.4" />
      <path d="M6 7.6v1.6M9.5 8.8v1.5M13 8.4v1.6M16.6 6.6v1.6" opacity="0.5" />
    </svg>
  );
}

function TizaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M15.4 3.6 20.4 8.6 9.2 19.8l-5.6.6.6-5.6z" />
      <path d="M13.6 5.4 18.6 10.4" opacity="0.5" />
      <path d="M3.6 20.6h6" opacity="0.45" />
    </svg>
  );
}

function CarretelIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M6.8 3.4h10.4M6.8 20.6h10.4" />
      <path d="M8.8 3.4v17.2M15.2 3.4v17.2" />
      <path d="M8.8 7.4 15.2 8.7M8.8 11 15.2 12.3M8.8 14.6 15.2 15.9" opacity="0.5" />
      <path d="M15.2 8.7c2.2.5 3.2 1.6 3 2.7" opacity="0.5" />
    </svg>
  );
}

function AgujaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M19.4 4.6 6.6 17.4l-2.2 2.2" />
      <ellipse cx="17.9" cy="6.1" rx="1.5" ry="0.9" transform="rotate(-45 17.9 6.1)" />
      <path d="M14.4 9.6c-2 .4-3.4 1.6-3.4 3s1.4 2 3.4 1.6" opacity="0.55" />
    </svg>
  );
}

function AlfilerIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M4.4 19.6 12.8 11.2" />
      <path d="M11 6.6a4 4 0 1 1 6.4 4.8L20 14l-6-1.4-1.4-6z" />
      <circle cx="14.4" cy="9.4" r="1.1" fill="currentColor" stroke="none" opacity="0.45" />
    </svg>
  );
}

function DedalIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M6.6 11.6a5.4 5.4 0 0 1 10.8 0v6.2H6.6z" />
      <path d="M6.6 15.4h10.8" opacity="0.5" />
      <circle cx="10" cy="9.8" r="0.6" fill="currentColor" stroke="none" opacity="0.45" />
      <circle cx="12.8" cy="9" r="0.6" fill="currentColor" stroke="none" opacity="0.45" />
      <circle cx="14.4" cy="11.2" r="0.6" fill="currentColor" stroke="none" opacity="0.45" />
      <circle cx="10.6" cy="12.6" r="0.6" fill="currentColor" stroke="none" opacity="0.45" />
    </svg>
  );
}

function DescosedorIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M4.2 20.2c-.6-.6-.6-1.6 0-2.2l.9-.9 2.2 2.2-.9.9c-.6.6-1.6.6-2.2 0z" />
      <path d="M5.8 17.6 15.4 8" />
      <path d="M15.4 8a3.4 3.4 0 0 1 3-2.2" />
      <path d="M15.4 8c.4 1.6 1.4 2.4 2.6 2.6" opacity="0.55" />
      <circle cx="19.4" cy="5.4" r="1.3" />
    </svg>
  );
}

function CostureroIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M3.4 9.6h17.2v10H3.4z" />
      <path d="M3.4 9.6 6 5.4h12l2.6 4.2" />
      <path d="M9.6 5.4v4.2M14.4 5.4v4.2" opacity="0.5" />
      <path d="M10.4 14.4h3.2" opacity="0.55" />
    </svg>
  );
}

function BobinaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <ellipse cx="12" cy="6" rx="6.8" ry="2.1" />
      <ellipse cx="12" cy="18" rx="6.8" ry="2.1" />
      <path d="M9.6 7.9v8.2M14.4 7.9v8.2" />
      <path d="M5.2 6v12M18.8 6v12" opacity="0.45" />
      <ellipse cx="12" cy="12" rx="2.4" ry="0.9" opacity="0.4" />
    </svg>
  );
}

function EscuadraIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M4 4v16h16z" />
      <path d="M4 9h2.6M4 13h2.6M4 17h2.6" opacity="0.5" />
      <path d="M8.6 20v-2.4M12.6 20v-2.4M16.6 20v-2.4" opacity="0.5" />
    </svg>
  );
}

function ClipCosturaIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M6.4 6.4h11.2a2 2 0 0 1 2 2v7.2a2 2 0 0 1-2 2H6.4z" />
      <path d="M6.4 4.4v15.2" />
      <path d="M19.6 11.6h-3.8" opacity="0.5" />
      <rect x="8.6" y="9.4" width="3.6" height="2.6" rx="0.6" opacity="0.45" />
    </svg>
  );
}

/* ── Datos ── */

type Herramienta = {
  nombre: string;
  detalle: string;
  Icon: (props: IconProps) => ReactElement;
};

const CATEGORIAS: { n: string; titulo: string; items: Herramienta[] }[] = [
  {
    n: '01',
    titulo: 'Cortar y preparar',
    items: [
      { nombre: 'Tijeras de tela afiladas', detalle: 'para cortar tela sin desgastar las hojas', Icon: TijeraTelaIcon },
      { nombre: 'Tijeras pequeñas / cortahilos', detalle: 'para cortar hilos y detalles finos', Icon: CortahilosIcon },
    ],
  },
  {
    n: '02',
    titulo: 'Medición y marcación',
    items: [
      { nombre: 'Cinta métrica flexible', detalle: 'para tomar medidas precisas', Icon: CintaMetricaIcon },
      { nombre: 'Marcadores para tela / tiza', detalle: 'para marcar líneas y patrones', Icon: TizaIcon },
    ],
  },
  {
    n: '03',
    titulo: 'Coser y unir',
    items: [
      { nombre: 'Hilos de calidad', detalle: 'varios colores básicos: blanco, negro, beige', Icon: CarretelIcon },
      { nombre: 'Agujas de mano', detalle: 'para remates y costuras pequeñas', Icon: AgujaIcon },
      { nombre: 'Alfileres con alfiletero', detalle: 'para sujetar telas antes de coser', Icon: AlfilerIcon },
      { nombre: 'Dedal', detalle: 'protege tu dedo al coser a mano', Icon: DedalIcon },
    ],
  },
  {
    n: '04',
    titulo: 'Arreglos y correcciones',
    items: [
      { nombre: 'Descosedor (seam ripper)', detalle: 'imprescindible para corregir errores', Icon: DescosedorIcon },
    ],
  },
  {
    n: '05',
    titulo: 'Accesorios prácticos',
    items: [
      { nombre: 'Estuche o costurero', detalle: 'para mantener todo ordenado', Icon: CostureroIcon },
      { nombre: 'Bobinas adicionales', detalle: 'si usás máquina', Icon: BobinaIcon },
      { nombre: 'Regla o escuadra pequeña', detalle: 'ayuda para líneas rectas', Icon: EscuadraIcon },
      { nombre: 'Clips para costura', detalle: 'comodísimos con telas gruesas', Icon: ClipCosturaIcon },
    ],
  },
];

const TIPS = [
  {
    n: '01',
    texto: 'No compres kits gigantescos con cientos de piezas baratas: muchas veces incluyen cosas que no vas a usar.',
  },
  {
    n: '02',
    texto: 'Mejor invertir en pocas herramientas de buena calidad. Unas tijeras y un hilo buenos cambian toda la experiencia.',
  },
  {
    n: '03',
    texto: 'A medida que avances, podés sumar: cortador rotatorio, reglas especializadas, plancha, etc.',
  },
];

/* ── Divisor: puntadas que se cosen al entrar en vista ── */

function CosturaDivider({ label }: { label: string }) {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-cream px-6 py-6">
      <div ref={ref} className="max-w-2xl mx-auto flex items-center gap-5">
        <div className="flex-1">
          <motion.svg
            width="100%"
            height="10"
            viewBox="0 0 240 10"
            preserveAspectRatio="none"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={revealed ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.85, ease }}
            style={{ display: 'block' }}
          >
            <line
              x1="0"
              y1="5"
              x2="240"
              y2="5"
              stroke={SEAM_COLOR}
              strokeWidth="1.6"
              strokeDasharray="7 6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </motion.svg>
        </div>

        <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40 shrink-0">{label}</span>

        <div className="flex-1">
          <motion.svg
            width="100%"
            height="10"
            viewBox="0 0 240 10"
            preserveAspectRatio="none"
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={revealed ? { clipPath: 'inset(0 0 0 0%)' } : { clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 0.85, ease }}
            style={{ display: 'block' }}
          >
            <line
              x1="0"
              y1="5"
              x2="240"
              y2="5"
              stroke={SEAM_COLOR}
              strokeWidth="1.6"
              strokeDasharray="7 6"
              strokeLinecap="round"
              opacity="0.5"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}

export function Module14() {
  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 700], [0, 110]);
  const watermarkOpacity = useTransform(scrollY, [0, 520], [0.035, 0.012]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
            XIV
          </span>
        </motion.div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XIV</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Esenciales<br />
            <span className="italic text-dark font-normal block mt-2">a la hora de coser</span>
          </h1>
        </div>

        <motion.div
          className="relative w-full max-w-md mx-auto overflow-hidden"
          style={{ aspectRatio: '4/5' }}
          initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.35 }}
          animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
          transition={{ duration: 0.95, delay: 0.15, ease }}
        >
          <img
            src="/modulo14/teoria/teoria4.png"
            alt="Tijera de sastre negra, cinta métrica y un cono de hilo rosa apoyados sobre tela rosa viejo"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-dark">
          <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
          <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
          <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-2xl mx-auto space-y-5">
          <p className="text-lg text-dark leading-relaxed">
            Antes de la primera puntada está el equipo. Estas son las herramientas que de verdad vas a usar, ordenadas según el momento en que aparecen sobre la mesa.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            No se trata de tener mucho, sino de tener lo justo y que funcione bien.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            Una buena herramienta no se nota: simplemente no estorba.
          </p>
        </div>
      </section>

      {/* ── Herramientas esenciales ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-14 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">El equipo base</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Herramientas<br /><span className="italic">esenciales</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {CATEGORIAS.map((cat) => (
              <div key={cat.n}>
                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, ease }}
                  className="flex items-baseline gap-4 mb-5 pb-3 border-b border-border/40"
                >
                  <span
                    className="font-display text-dark/25 leading-none shrink-0 tabular-nums"
                    style={{ fontSize: 'clamp(1.6rem, 4.5vw, 2.2rem)', fontWeight: 400 }}
                  >
                    {cat.n}
                  </span>
                  <h3
                    className="font-display text-dark leading-tight"
                    style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', fontWeight: 500 }}
                  >
                    {cat.titulo}
                  </h3>
                </motion.div>

                <div className="space-y-2.5">
                  {cat.items.map((item, j) => (
                    <motion.div
                      key={item.nombre}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ duration: 0.45, delay: j * 0.06, ease }}
                      className="group flex items-center gap-4 bg-white px-5 py-4"
                      style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
                    >
                      <span
                        className="shrink-0 flex items-center justify-center w-11 h-11 text-dark transition-transform duration-200 ease-out group-hover:scale-110"
                        style={{ outline: '1px solid hsl(var(--border) / 0.6)', background: 'hsl(var(--cream))' }}
                      >
                        <item.Icon size={22} />
                      </span>
                      <span className="font-body text-base text-dark leading-relaxed">
                        <span className="font-medium">{item.nombre}</span>
                        <span className="text-dark/40"> — </span>
                        <span className="text-dark/65">{item.detalle}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CosturaDivider label="Cómo elegir" />

      {/* ── Tips ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Antes de comprar</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Tips que<br /><span className="italic">ahorran plata</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {TIPS.map((tip, i) => (
              <motion.div
                key={tip.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="bg-dark text-cream px-7 py-6 flex gap-5 items-center relative overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-4 font-display text-cream leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(4rem, 11vw, 7rem)', fontWeight: 700, opacity: 0.045 }}
                >
                  {tip.n}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream/50 shrink-0" />
                <p className="text-cream text-base leading-relaxed relative z-10">{tip.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calidad sobre cantidad ── */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-white px-8 py-12 text-center"
            style={{ outline: '1px solid hsl(var(--border) / 0.6)', borderTop: `3px solid ${ACCENT}` }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-6">Calidad sobre cantidad</p>
            <p
              className="font-display italic text-dark leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2rem)', fontWeight: 400 }}
            >
              Pocas herramientas buenas rinden más<br />que un cajón lleno de repuestos.
            </p>
            <p className="text-dark/60 text-sm leading-relaxed max-w-md mx-auto mt-6">
              El equipo crece con vos: primero lo esencial, después lo específico.
            </p>
          </motion.div>
        </div>
      </section>

      <CosturaDivider label="Para cerrar" />

      {/* ── Cierre ── */}
      <section className="bg-cream px-6 pt-6 pb-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-base text-dark/70 leading-relaxed"
          >
            Tener el equipo ordenado y a mano cambia el ritmo de trabajo: se corta mejor, se marca más prolijo y se corrige sin miedo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            El costurero también se diseña.
          </motion.p>
        </div>
      </section>

      <CarruselModulo14Teoria />

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
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  );
}
