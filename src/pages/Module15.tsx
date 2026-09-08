import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';
const CUT_COLOR = '#3B6FE0';

/* ── Datos ── */

const ANCHOS = ['1,40 m', '1,50 m', '1,60 m'];

const ERRORES_CALCULO = [
  'No sumar dobladillo.',
  'No considerar la dirección del diseño (rayas o estampas).',
  'No prever el encogimiento.',
  'Comprar exacto, sin margen.',
];

const CAUSAS = [
  { n: '01', texto: 'Tensión en el tejido' },
  { n: '02', texto: 'Procesos industriales' },
  { n: '03', texto: 'Compactación' },
];

/* Encogimiento: sólo dos materiales tienen rango medible.
   Los demás se describen en palabras — no se les inventa un número. */
const ESCALA_MAX = 12;
const ENCOGIMIENTO: { material: string; min?: number; max?: number; nota?: string }[] = [
  { material: 'Algodón', min: 3, max: 8 },
  { material: 'Lino', min: 5, max: 10 },
  { material: 'Viscosa', nota: 'Puede encoger bastante si no está pretratada' },
  { material: 'Gabardina de algodón', nota: 'Suele encoger' },
  { material: 'Gabardina acrílica o sintética', nota: 'Generalmente no encoge, pero puede deformarse con el calor' },
];

const LAVAR_SI = ['Ropa', 'Fundas desmontables', 'Manteles', 'Cualquier producto que después se lave'];
const LAVAR_NO = ['Tapicería pesada', 'Telas 100 % sintéticas que no se van a lavar'];

const LAVADO_PASOS = [
  'Lavar como se va a lavar el producto final.',
  'Agua fría si la tela lo requiere.',
  'Secar igual que lo hará quien lo use.',
  'Planchar antes de cortar.',
];

const ERRORES_LAVADO = [
  'No lavar, y que el producto achique después de vendido.',
  'Lavar en agua caliente sin saber cómo reacciona la tela.',
  'No planchar antes de cortar: la tela puede quedar deformada.',
];

/* ── Divisor: cinta métrica que se despliega al entrar en vista ── */

function CintaDivider({ label }: { label: string }) {
  const [ref, revealed] = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="bg-cream px-6 py-8">
      <div ref={ref} className="max-w-2xl mx-auto flex items-center gap-5">
        <div className="flex-1">
          <motion.svg
            width="100%"
            height="16"
            viewBox="0 0 240 16"
            preserveAspectRatio="none"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={revealed ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: 0.9, ease }}
            style={{ display: 'block' }}
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
        </div>

        <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40 shrink-0">{label}</span>

        <div className="flex-1">
          <motion.svg
            width="100%"
            height="16"
            viewBox="0 0 240 16"
            preserveAspectRatio="none"
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={revealed ? { clipPath: 'inset(0 0 0 0%)' } : { clipPath: 'inset(0 0 0 100%)' }}
            transition={{ duration: 0.9, ease }}
            style={{ display: 'block' }}
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
        </div>
      </div>
    </section>
  );
}

/* ── Ejemplo: título + diagrama + resultado ── */

function Ejemplo({
  n,
  titulo,
  bajada,
  children,
  pie,
  resultado,
}: {
  n: string;
  titulo: string;
  bajada: string;
  children: React.ReactNode;
  pie: string;
  resultado: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease }}
      className="bg-white px-5 py-7 sm:px-7"
      style={{ outline: '1px solid hsl(var(--border) / 0.5)', borderLeft: `3px solid ${ACCENT}` }}
    >
      <div className="flex items-baseline gap-4 mb-1">
        <span
          className="font-display text-dark/25 leading-none shrink-0 tabular-nums"
          style={{ fontSize: 'clamp(1.4rem, 3.8vw, 1.9rem)', fontWeight: 400 }}
        >
          {n}
        </span>
        <h3
          className="font-display text-dark leading-tight"
          style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontWeight: 500 }}
        >
          {titulo}
        </h3>
      </div>
      <p className="font-body text-sm text-dark/65 leading-relaxed sm:pl-12 mb-5">{bajada}</p>

      <motion.div
        className="w-full overflow-hidden"
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.4 }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        {children}
      </motion.div>

      <p className="text-center text-xs text-dark/45 italic mt-3">{pie}</p>

      <div className="mt-5 bg-dark text-cream px-5 py-4 flex items-center gap-4">
        <span className="w-1.5 h-1.5 rounded-full bg-cream/50 shrink-0" />
        <p className="text-cream text-sm leading-relaxed">{resultado}</p>
      </div>
    </motion.article>
  );
}

export function Module15() {
  const { scrollY } = useScroll();
  const watermarkY = useTransform(scrollY, [0, 700], [0, 120]);
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
            XV
          </span>
        </motion.div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XV</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Cómo calcular<br />
            <span className="italic text-dark font-normal block mt-2">tela correctamente</span>
          </h1>
        </div>

        <motion.div
          className="relative w-full max-w-md mx-auto overflow-hidden"
          style={{ aspectRatio: '4/5' }}
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.35 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <img
            src="/modulo15/teoria/tela.png"
            alt="Manos cortando tela de lino color camel con una tijera de sastre dorada, bajo luz cálida"
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
            Calcular tela no es medir el producto terminado: es pensar cuánta tela hace falta para llegar
            a ese producto, con sus márgenes, sus dobladillos y el ancho real del rollo.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            Y antes de cortar, hay una pregunta más: ¿esta tela va a encoger?
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            La tela se calcula dos veces: en la cuenta y en el lavado.
          </p>
        </div>
      </section>

      {/* ── 01 · El ancho de la tela ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Paso básico</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              El ancho<br /><span className="italic">de la tela</span>
            </h2>
          </motion.div>

          <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
            La mayoría de las telas vienen en uno de estos tres anchos:
          </p>

          <div className="grid grid-cols-3 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
            {ANCHOS.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="bg-cream px-3 py-8 text-center"
              >
                <p
                  className="font-display text-dark leading-none"
                  style={{ fontSize: 'clamp(1.3rem, 4.5vw, 2rem)', fontWeight: 400 }}
                >
                  {a}
                </p>
                <p className="text-xs text-dark/45 mt-2 uppercase tracking-widest">de ancho</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="mt-8 bg-dark text-cream px-7 py-7 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-3">Siempre lo primero</p>
            <p
              className="font-display italic text-cream leading-snug"
              style={{ fontSize: 'clamp(1.15rem, 3.2vw, 1.7rem)', fontWeight: 400 }}
            >
              ¿Cuánto mide el ancho de esta tela?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 02 · La fórmula ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Fórmula general</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Nunca sólo<br /><span className="italic">la medida final</span>
            </h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            {['Medida del producto', 'Márgenes de costura', 'Dobladillos'].map((term, i) => (
              <motion.div
                key={term}
                initial={{ opacity: 0, scale: 0.94, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.12 }}
                className="flex items-center gap-3 flex-1"
              >
                {i > 0 && (
                  <span
                    className="font-display text-dark/30 leading-none select-none shrink-0 hidden sm:block"
                    style={{ fontSize: '1.6rem' }}
                  >
                    +
                  </span>
                )}
                <div
                  className="bg-white px-4 py-5 text-center flex-1"
                  style={{ outline: '1px solid hsl(var(--border) / 0.6)' }}
                >
                  {i > 0 && (
                    <span
                      className="font-display text-dark/30 leading-none select-none block sm:hidden mb-2"
                      style={{ fontSize: '1.3rem' }}
                    >
                      +
                    </span>
                  )}
                  <p className="font-body text-sm text-dark leading-snug">{term}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease }}
            className="font-display italic text-dark text-center leading-snug mt-8"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
          >
            Nunca se calcula sólo la medida final.
          </motion.p>
        </div>
      </section>

      {/* ── 03 · Tres ejemplos ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Puesto en práctica</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Tres<br /><span className="italic">ejemplos</span>
            </h2>
          </motion.div>

          <div className="space-y-5">

            {/* Ejemplo 1 — Mantel */}
            <Ejemplo
              n="01"
              titulo="Mantel"
              bajada="Mesa de 1,60 × 0,90 m, con una caída de 20 cm de cada lado."
              pie="La caída se suma dos veces en cada dirección: 20 cm de un lado y 20 del otro."
              resultado="Si la tela es de 1,40 m de ancho, sólo necesitás comprar 2 metros de tela."
            >
              <svg
                width="100%"
                viewBox="0 0 340 230"
                fill="none"
                style={{ maxWidth: 440, margin: '0 auto', display: 'block' }}
              >
                {/* Mantel completo: 2,00 × 1,30 m */}
                <rect x="70" y="45" width="200" height="130" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                {/* Mesa: 1,60 × 0,90 m */}
                <rect
                  x="90"
                  y="65"
                  width="160"
                  height="90"
                  fill={FABRIC_2}
                  stroke="#1a1a1a"
                  strokeWidth="1.1"
                  strokeDasharray="4 3"
                />
                <text x="170" y="106" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  Mesa
                </text>
                <text x="170" y="120" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                  1,60 × 0,90 m
                </text>

                {/* Caídas de 20 cm */}
                <line x1="80" y1="45" x2="80" y2="65" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="76" y1="45" x2="84" y2="45" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="76" y1="65" x2="84" y2="65" stroke={ACCENT} strokeWidth="0.9" />
                <text x="88" y="40" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  20 cm
                </text>

                <line x1="250" y1="165" x2="270" y2="165" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="250" y1="161" x2="250" y2="169" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="270" y1="161" x2="270" y2="169" stroke={ACCENT} strokeWidth="0.9" />
                <text x="260" y="184" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  20 cm
                </text>

                {/* Cota total horizontal */}
                <line x1="70" y1="196" x2="270" y2="196" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="70" y1="191" x2="70" y2="201" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="270" y1="191" x2="270" y2="201" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="170" y="212" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  2,00 m de largo
                </text>

                {/* Cota total vertical */}
                <line x1="52" y1="45" x2="52" y2="175" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="47" y1="45" x2="57" y2="45" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="47" y1="175" x2="57" y2="175" stroke="#1a1a1a" strokeWidth="0.9" />
                <text
                  x="40"
                  y="110"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="serif"
                  fill="#1a1a1a"
                  transform="rotate(-90 40 110)"
                >
                  1,30 m
                </text>
              </svg>
            </Ejemplo>

            {/* Ejemplo 2 — Funda de almohadón */}
            <Ejemplo
              n="02"
              titulo="Funda de almohadón 50 × 50"
              bajada="Frente y dorso de 50 cm, que con márgenes pasan a medir unos 52 × 52 cm."
              pie="Los 52 + 52 cm entran cómodos en el ancho de 1,40 m: se cortan uno al lado del otro."
              resultado="Necesitás sólo 55 cm de tela, aproximadamente."
            >
              <svg
                width="100%"
                viewBox="0 0 340 200"
                fill="none"
                style={{ maxWidth: 440, margin: '0 auto', display: 'block' }}
              >
                {/* Rollo de tela: 1,40 m de ancho */}
                <rect x="30" y="48" width="280" height="110" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />

                {/* Frente y dorso */}
                <rect x="33" y="51" width="104" height="104" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.4" />
                <rect x="140" y="51" width="104" height="104" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.4" />
                <text x="85" y="99" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  Frente
                </text>
                <text x="85" y="113" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                  52 × 52
                </text>
                <text x="192" y="99" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  Dorso
                </text>
                <text x="192" y="113" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                  52 × 52
                </text>

                {/* Sobrante */}
                <text
                  x="278"
                  y="107"
                  textAnchor="middle"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fill="#1a1a1a"
                  opacity="0.4"
                >
                  sobra
                </text>

                {/* Cota ancho de tela */}
                <line x1="30" y1="34" x2="310" y2="34" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="30" y1="29" x2="30" y2="39" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="310" y1="29" x2="310" y2="39" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="170" y="22" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  1,40 m — ancho de la tela
                </text>

                {/* Cota largo necesario */}
                <line x1="318" y1="48" x2="318" y2="158" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="313" y1="48" x2="323" y2="48" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="313" y1="158" x2="323" y2="158" stroke={ACCENT} strokeWidth="0.9" />
                <text
                  x="332"
                  y="103"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="serif"
                  fill={ACCENT}
                  transform="rotate(-90 332 103)"
                >
                  55 cm
                </text>

                <text x="170" y="180" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={CUT_COLOR} opacity="0.85">
                  las dos piezas, una al lado de la otra
                </text>
              </svg>
            </Ejemplo>

            {/* Ejemplo 3 — Tote bag */}
            <Ejemplo
              n="03"
              titulo="Tote bag 40 × 35 cm"
              bajada="Frente, espalda y dos manijas. La pregunta no es cuánto suman, sino cómo entran."
              pie="Frente y espalda ocupan 80 cm del ancho; en los 60 cm que sobran entran las dos manijas."
              resultado="Muchas veces no se trata de sumar piezas, sino de aprender a distribuirlas con inteligencia."
            >
              <svg
                width="100%"
                viewBox="0 0 340 190"
                fill="none"
                style={{ maxWidth: 440, margin: '0 auto', display: 'block' }}
              >
                {/* Rollo de tela: 1,40 m de ancho */}
                <rect x="30" y="48" width="280" height="82" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />

                {/* Frente y espalda */}
                <rect x="33" y="51" width="80" height="70" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.4" />
                <rect x="116" y="51" width="80" height="70" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.4" />
                <text x="73" y="84" textAnchor="middle" fontSize="9.5" fontFamily="serif" fill="#1a1a1a">
                  Frente
                </text>
                <text x="73" y="97" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                  40 × 35
                </text>
                <text x="156" y="84" textAnchor="middle" fontSize="9.5" fontFamily="serif" fill="#1a1a1a">
                  Espalda
                </text>
                <text x="156" y="97" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                  40 × 35
                </text>

                {/* Manijas */}
                <rect x="200" y="55" width="104" height="14" rx="2" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.3" />
                <rect x="200" y="75" width="104" height="14" rx="2" fill={FABRIC_2} stroke={CUT_COLOR} strokeWidth="1.3" />
                <text x="252" y="106" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">
                  2 manijas
                </text>

                {/* Cota ancho de tela */}
                <line x1="30" y1="34" x2="310" y2="34" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="30" y1="29" x2="30" y2="39" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="310" y1="29" x2="310" y2="39" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="170" y="22" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                  1,40 m — ancho de la tela
                </text>

                {/* Reparto del ancho */}
                <line x1="33" y1="140" x2="196" y2="140" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="33" y1="136" x2="33" y2="144" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="196" y1="136" x2="196" y2="144" stroke={ACCENT} strokeWidth="0.9" />
                <text x="114" y="155" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  80 cm
                </text>

                <line x1="200" y1="140" x2="307" y2="140" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="200" y1="136" x2="200" y2="144" stroke={ACCENT} strokeWidth="0.9" />
                <line x1="307" y1="136" x2="307" y2="144" stroke={ACCENT} strokeWidth="0.9" />
                <text x="253" y="155" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  60 cm
                </text>

                <text x="170" y="176" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                  primero dibujá cómo entra en el ancho
                </text>
              </svg>
            </Ejemplo>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="mt-6 bg-white px-6 py-5"
            style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-2">Regla de oro</p>
            <p className="text-sm text-dark/70 leading-relaxed">
              Siempre agregar 5 a 10 cm extra por seguridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Errores al calcular ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Para tener en cuenta</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Errores<br /><span className="italic">comunes</span>
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border/30">
            {ERRORES_CALCULO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.06, ease }}
                className="flex items-center gap-4 py-4 group"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-dark/30 group-hover:text-dark/70 transition-colors duration-200"
                >
                  <path
                    d="M2.5 2.5l9 9M11.5 2.5l-9 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base text-dark font-body leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CintaDivider label="Segunda parte" />

      {/* ── 04 · Encogimiento ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Antes de cortar</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Encogimiento<br /><span className="italic">y lavado previo</span>
            </h2>
          </motion.div>

          <p className="text-base text-dark/70 leading-relaxed mb-8">
            Las telas naturales, como el algodón o el lino, pasaron por procesos que las dejaron tensadas.
            Cuando entran en contacto con el agua, fibras y trama se relajan. Resultado: encogen.
          </p>

          <div className="space-y-3">
            {CAUSAS.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="bg-dark text-cream px-7 py-5 flex gap-5 items-center relative overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-4 font-display text-cream leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(4rem, 11vw, 7rem)', fontWeight: 700, opacity: 0.045 }}
                >
                  {c.n}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream/50 shrink-0" />
                <p className="text-cream text-base leading-relaxed relative z-10">{c.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cuánto encoge cada tela ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Depende del material</p>
            <h3
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
            >
              Cuánto puede <span className="italic">encoger</span>
            </h3>
          </motion.div>

          <div
            className="bg-white px-5 py-7 sm:px-7"
            style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <div className="space-y-5">
              {ENCOGIMIENTO.map((m, i) => (
                <motion.div
                  key={m.material}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease }}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <span className="font-body text-sm text-dark font-medium">{m.material}</span>
                    {m.min !== undefined && m.max !== undefined && (
                      <span className="font-body text-sm text-dark/55 tabular-nums shrink-0">
                        {m.min} % – {m.max} %
                      </span>
                    )}
                  </div>

                  {m.min !== undefined && m.max !== undefined ? (
                    <div
                      className="relative w-full"
                      style={{ height: 8, background: 'hsl(var(--border) / 0.35)', borderRadius: 4 }}
                    >
                      <motion.div
                        className="absolute inset-y-0"
                        style={{
                          left: `${(m.min / ESCALA_MAX) * 100}%`,
                          width: `${((m.max - m.min) / ESCALA_MAX) * 100}%`,
                          background: ACCENT,
                          borderRadius: 4,
                        }}
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease }}
                      />
                    </div>
                  ) : (
                    <p className="font-body text-sm text-dark/60 leading-relaxed">{m.nota}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Escala */}
            <div className="mt-6 pt-4 border-t border-border/30">
              <div className="flex justify-between text-dark/35 tabular-nums" style={{ fontSize: '10px' }}>
                {[0, 3, 6, 9, 12].map((t) => (
                  <span key={t}>{t} %</span>
                ))}
              </div>
              <p className="text-xs text-dark/40 mt-3 italic">
                Las barras marcan el rango de encogimiento sobre una escala de 0 a 12 %. Los materiales sin barra
                no tienen un porcentaje fijo: dependen del tratamiento previo.
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display italic text-dark text-center leading-snug mt-8"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 400 }}
          >
            No todas las telas reaccionan igual.
          </motion.p>
        </div>
      </section>

      {/* ── Cuándo lavar antes ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">La decisión</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Cuándo lavar<br /><span className="italic">antes de cortar?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, ease }}
              className="bg-white px-6 py-6"
              style={{ outline: '1px solid hsl(var(--border) / 0.5)', borderTop: `3px solid ${ACCENT}` }}
            >
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Es obligatorio</p>
              <ul className="space-y-3">
                {LAVAR_SI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1 text-dark/45">
                      <path
                        d="M2 7.5l3.2 3.2L12 4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-body text-sm text-dark leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="bg-white px-6 py-6"
              style={{ outline: '1px solid hsl(var(--border) / 0.5)', borderTop: '3px solid hsl(var(--border))' }}
            >
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/50 mb-4">No siempre hace falta</p>
              <ul className="space-y-3">
                {LAVAR_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1 text-dark/30">
                      <path
                        d="M2.5 2.5l9 9M11.5 2.5l-9 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-body text-sm text-dark/65 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Cómo hacer el lavado previo ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Paso a paso</p>
            <h3
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
            >
              El lavado <span className="italic">previo</span>
            </h3>
          </motion.div>

          <ul className="space-y-0">
            {LAVADO_PASOS.map((paso, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group flex gap-6 py-6 border-b border-border/30"
              >
                <span
                  className="font-body font-bold text-dark/25 shrink-0 pt-1.5 transition-colors duration-300 group-hover:text-dark/55 tabular-nums"
                  style={{ fontSize: '11px', letterSpacing: '0.18em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="flex-1 text-base md:text-lg text-dark leading-relaxed">{paso}</p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="mt-8 bg-dark text-cream px-8 py-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-4">Importantísimo</p>
            <p
              className="font-display italic text-cream leading-snug"
              style={{ fontSize: 'clamp(1.15rem, 3.2vw, 1.7rem)', fontWeight: 400 }}
            >
              No cortar antes de lavar<br />si el proyecto se va a lavar después.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── El test del cuadrado ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Ejemplo práctico</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              El test<br /><span className="italic">del cuadrado</span>
            </h2>
          </motion.div>

          <p className="text-center text-sm text-dark/65 leading-relaxed max-w-lg mx-auto mb-8">
            Cortar un cuadrado de 30 × 30 cm, lavarlo y volver a medirlo. La diferencia es el encogimiento
            real de esa tela.
          </p>

          <motion.div
            className="w-full overflow-hidden bg-white"
            style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease }}
          >
            <svg
              width="100%"
              viewBox="0 0 340 190"
              fill="none"
              style={{ maxWidth: 460, margin: '0 auto', display: 'block' }}
            >
              {/* Antes */}
              <rect x="30" y="40" width="90" height="90" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="75" y="30" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                Antes
              </text>
              <text x="75" y="150" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                30 × 30 cm
              </text>

              {/* Flecha lavar */}
              <line x1="140" y1="85" x2="188" y2="85" stroke={ACCENT} strokeWidth="1.2" />
              <path d="M182 80 189 85 182 90" stroke={ACCENT} strokeWidth="1.2" fill="none" />
              <text x="164" y="76" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                lavar
              </text>

              {/* Después: contorno original punteado + tela encogida */}
              <rect
                x="210"
                y="40"
                width="90"
                height="90"
                fill="none"
                stroke="#1a1a1a"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.4"
              />
              <rect x="210" y="40" width="85.5" height="85.5" fill={FABRIC_2} stroke={ACCENT} strokeWidth="1.6" />
              <text x="255" y="30" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                Después
              </text>
              <text x="255" y="150" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">
                28,5 × 28,5 cm
              </text>

              {/* Lo que se perdió al lavar */}
              <rect x="295.5" y="40" width="4.5" height="90" fill={ACCENT} opacity="0.28" />
              <rect x="210" y="125.5" width="90" height="4.5" fill={ACCENT} opacity="0.28" />
              <text x="255" y="172" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                encogió 1,5 cm ≈ 5 %
              </text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ── Errores del lavado ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Lo que más pasa</p>
            <h3
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
            >
              Errores <span className="italic">del lavado</span>
            </h3>
          </motion.div>

          <div className="space-y-0 divide-y divide-border/30">
            {ERRORES_LAVADO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.06, ease }}
                className="flex items-center gap-4 py-4 group"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-dark/30 group-hover:text-dark/70 transition-colors duration-200"
                >
                  <path
                    d="M2.5 2.5l9 9M11.5 2.5l-9 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base text-dark font-body leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CintaDivider label="Para cerrar" />

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
            Calcular bien es lo que separa un proyecto que sale de uno que se queda corto: el ancho del rollo,
            los márgenes, y la tela que todavía se va a mover en el primer lavado.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            Medir dos veces, cortar una sola.
          </motion.p>
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
  );
}
