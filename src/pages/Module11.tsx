import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';

/* ── Datos ── */

const PARA_QUE = [
  { n: '01', texto: 'Dar forma y estructura a una prenda o producto.', sub: 'remera, pantalón, bolso, neceser' },
  { n: '02', texto: 'Respetar medidas exactas para que el calce sea correcto.', sub: 'proporciones definidas' },
  { n: '03', texto: 'Repetir un diseño todas las veces que quieras, sin improvisar.', sub: '' },
  { n: '04', texto: 'Optimizar la tela, ubicando bien cada pieza antes de cortar.', sub: '' },
  { n: '05', texto: 'Modificar diseños: agregar pinzas, ampliar, acortar, cambiar escotes.', sub: 'adaptar un modelo base' },
];

const IMPORTANCIA = [
  'Podemos diseñar con mayor libertad.',
  'Detectamos errores antes de cortar la tela.',
  'Ganamos seguridad en cada proyecto.',
  'Dejamos de depender exclusivamente de moldes comprados.',
];

const TALLER = [
  { titulo: 'Forma y estructura', sub: 'que la pieza se sostenga' },
  { titulo: 'Proporciones armónicas', sub: 'equilibrio entre partes' },
  { titulo: 'Terminaciones prolijas', sub: 'bordes y uniones limpias' },
  { titulo: 'Repetición exacta', sub: 'volver a hacerlo idéntico' },
];

const APRENDEMOS = [
  'Tomar y trasladar medidas correctamente.',
  'Trazar moldes base desde cero.',
  'Identificar delantero, trasero, laterales y bases.',
  'Marcar piquetes y referencias importantes.',
  'Calcular márgenes de costura.',
  'Adaptar un mismo molde para crear nuevas versiones.',
];

const ESPECIFICACIONES = [
  {
    n: '01',
    titulo: 'Nombre de la pieza',
    texto: 'Para saber qué es cada parte al momento de armar.',
    chips: ['Delantero', 'Trasero', 'Base', 'Lateral', 'Forro delantero'],
  },
  {
    n: '02',
    titulo: 'Cantidad a cortar',
    texto: 'Cuántas veces se corta esa pieza y en qué material.',
    chips: ['Cortar 2 en tela', 'Cortar 1 en doblez', 'Cortar 2 en forro', 'Cortar 1 en entretela'],
  },
  {
    n: '03',
    titulo: 'Indicaciones especiales',
    texto: 'Todo lo que oriente el corte y el armado.',
    chips: ['Colocar en doblez', 'Dirección del hilo', 'Ubicación de cierre', 'Centro delantero', 'Piquetes'],
  },
  {
    n: '04',
    titulo: 'Márgenes de costura',
    texto: 'Aclarar siempre si el molde ya los incluye o hay que agregarlos.',
    chips: ['Con 1 cm incluido', 'Agregar 1 cm'],
  },
  {
    n: '05',
    titulo: 'Nombre del proyecto',
    texto: 'Para mantener el orden entre moldes de distintos trabajos.',
    chips: ['Neceser rayado'],
  },
];

const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const listItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function Module11() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reveal del molde anotado sin IntersectionObserver (falla sobre SVG en Safari)
  const [moldeRef, showMolde] = useRevealOnScroll<HTMLDivElement>();

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            className="font-display text-dark leading-none"
            style={{ fontSize: 'clamp(12rem, 34vw, 28rem)', fontWeight: 700, opacity: 0.035 }}
          >
            XI
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XI</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            La<br />
            <span className="italic text-dark font-normal block mt-2">Moldería</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/modulo11/molde.png"
            alt="Manos trazando moldes sobre papel madera junto a una tijera de sastre"
            className="w-full h-full object-cover"
          />
        </div>

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
            La moldería es el plano de una pieza: define su forma, sus medidas y el orden en que se construye. Antes de la primera puntada, todo ya está decidido sobre el papel.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            Aunque un neceser, una tote bag o un almohadón parezcan piezas simples, cada uno tiene una construcción pensada: medidas, márgenes, ubicación de cierres, forrería y proporciones.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            No es solo coser. Es entender cómo se construye desde cero.
          </p>
        </div>
      </section>

      {/* ── ¿Para qué sirve? — lista editorial con número al costado ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Su función</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Para qué<br /><span className="italic">sirve?</span>
            </h2>
          </motion.div>

          <motion.ul
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={listContainer}
          >
            {PARA_QUE.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="group flex gap-6 py-7 border-b border-border/30"
              >
                <span
                  className="font-body font-bold text-dark/25 shrink-0 pt-1.5 transition-colors duration-300 group-hover:text-dark/55"
                  style={{ fontSize: '11px', letterSpacing: '0.18em' }}
                >
                  {item.n}
                </span>
                <div className="flex-1">
                  <p className="text-base md:text-lg text-dark leading-relaxed">{item.texto}</p>
                  {item.sub && (
                    <p className="text-xs text-dark/40 font-body italic mt-1.5">{item.sub}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── ¿Por qué aprenderla? — cards oscuras ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Autonomía</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Por qué es importante<br /><span className="italic">aprenderla?</span>
            </h2>
          </motion.div>

          <p className="text-center text-sm text-dark/60 leading-relaxed max-w-lg mx-auto mb-10">
            Porque no se trata solo de coser, sino de entender cómo se construye una pieza desde cero. Cuando comprendemos la moldería:
          </p>

          <div className="space-y-3">
            {IMPORTANCIA.map((item, i) => (
              <motion.div
                key={i}
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
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream/50 shrink-0" />
                <p className="text-cream text-base leading-relaxed relative z-10">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="font-display italic text-dark text-center leading-snug mt-10"
            style={{ fontSize: 'clamp(1.15rem, 3vw, 1.6rem)', fontWeight: 400 }}
          >
            La moldería nos da autonomía creativa y técnica.
          </motion.p>
        </div>
      </section>

      {/* ── En nuestro taller — grid 2x2 ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">En nuestro taller</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              La base de todo<br /><span className="italic">el proceso</span>
            </h2>
          </motion.div>

          <p className="text-center text-sm text-dark/60 leading-relaxed max-w-lg mx-auto mb-10">
            En neceseres, tote bags, cartucheras o almohadones, la moldería es lo que permite que cada pieza tenga:
          </p>

          <div className="grid grid-cols-2 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
            {TALLER.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.46, delay: i * 0.07, ease }}
                className="bg-cream px-5 py-7 text-center"
              >
                <h3
                  className="font-display text-dark leading-tight mb-1.5"
                  style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)', fontWeight: 400 }}
                >
                  {t.titulo}
                </h3>
                <p className="text-xs text-dark/40 font-body italic">{t.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ¿Qué aprendemos? ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">El aprendizaje</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Qué aprendemos<br /><span className="italic">al trabajarla?</span>
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border/30">
            {APRENDEMOS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.06, ease }}
                className="flex items-center gap-4 py-4 group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-dark/30 group-hover:text-dark/70 transition-colors duration-200">
                  <path d="M2 7.5l3.2 3.2L12 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-base text-dark font-body leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-dark text-cream px-8 py-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-6">La idea de fondo</p>
            <p
              className="font-display italic text-cream leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2rem)', fontWeight: 400 }}
            >
              No es solo coser.<br />Es entender cómo se construye desde cero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Divisor ── */}
      <section className="bg-cream px-6 pt-12 pb-4">
        <div className="max-w-2xl mx-auto flex items-center gap-5">
          <span className="h-px bg-border/50 flex-1" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40">Segunda parte</span>
          <span className="h-px bg-border/50 flex-1" />
        </div>
      </section>

      {/* ── Especificaciones — intro + molde anotado ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 text-center"
          >
            <h2
              className="font-display text-dark leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Qué se especifica<br /><span className="italic">en un molde?</span>
            </h2>
            <p className="text-base text-dark/65 leading-relaxed max-w-xl mx-auto">
              Las especificaciones se escriben directamente sobre el molde, para que no haya confusiones al cortar ni al armar.
            </p>
          </motion.div>

          {/* Molde anotado */}
          <div
            ref={moldeRef}
            className="w-full overflow-hidden bg-white mb-12"
            style={{ padding: '24px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <svg
              viewBox="0 0 340 300"
              style={{ width: '100%', maxWidth: 460, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* Línea de corte con margen */}
              <motion.rect
                x="86" y="30" width="168" height="228" rx="3"
                fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="6 4"
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease }}
              />
              {/* Cuerpo del molde */}
              <motion.rect
                x="98" y="42" width="144" height="204" rx="2"
                fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.6"
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, ease }}
              />

              {/* Contenido escrito sobre el molde */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease }}
              >
                <text x="170" y="86" textAnchor="middle" fontSize="15" fontFamily="serif" fill="#1a1a1a">Delantero</text>
                <text x="170" y="106" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.65">Cortar 2 en tela</text>
                <text x="170" y="121" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.65">Cortar 2 en forro</text>

                {/* Flecha hilo recto */}
                <line x1="170" y1="146" x2="170" y2="212" stroke="#1a1a1a" strokeWidth="1.1" />
                <polygon points="166,152 170,144 174,152" fill="#1a1a1a" opacity="0.75" />
                <polygon points="166,206 170,214 174,206" fill="#1a1a1a" opacity="0.75" />
                <text x="178" y="182" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">hilo recto</text>

                <text x="170" y="236" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">Neceser rayado</text>

                {/* Piquetes */}
                <line x1="98" y1="160" x2="106" y2="160" stroke="#1a1a1a" strokeWidth="1.4" />
                <line x1="234" y1="160" x2="242" y2="160" stroke="#1a1a1a" strokeWidth="1.4" />
              </motion.g>

              {/* Anotaciones laterales */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease }}
              >
                {/* nombre */}
                <line x1="60" y1="80" x2="96" y2="84" stroke={ACCENT} strokeWidth="0.9" />
                <text x="56" y="83" textAnchor="end" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>nombre</text>
                {/* cantidad */}
                <line x1="60" y1="112" x2="96" y2="112" stroke={ACCENT} strokeWidth="0.9" />
                <text x="56" y="115" textAnchor="end" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>cantidad</text>
                {/* piquete */}
                <line x1="60" y1="160" x2="96" y2="160" stroke={ACCENT} strokeWidth="0.9" />
                <text x="56" y="163" textAnchor="end" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>piquete</text>
                {/* proyecto */}
                <line x1="60" y1="236" x2="96" y2="236" stroke={ACCENT} strokeWidth="0.9" />
                <text x="56" y="239" textAnchor="end" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>proyecto</text>
                {/* margen */}
                <line x1="280" y1="34" x2="256" y2="36" stroke={ACCENT} strokeWidth="0.9" />
                <text x="284" y="37" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>margen</text>
                {/* hilo */}
                <line x1="280" y1="182" x2="246" y2="182" stroke={ACCENT} strokeWidth="0.9" />
                <text x="284" y="185" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>hilo</text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              Todo lo que necesitás saber, escrito sobre la pieza.
            </p>
          </div>

          {/* Las 5 especificaciones */}
          <div className="space-y-3">
            {ESPECIFICACIONES.map((e, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: i * 0.05, ease }}
                className="bg-white px-6 py-6 sm:px-7"
                style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className="font-display text-dark/25 leading-none shrink-0 tabular-nums"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 400 }}
                  >
                    {e.n}
                  </span>
                  <h3
                    className="font-display text-dark leading-tight"
                    style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', fontWeight: 500 }}
                  >
                    {e.titulo}
                  </h3>
                </div>
                <p className="font-body text-sm text-dark/65 leading-relaxed mb-4 sm:pl-12">{e.texto}</p>
                <div className="flex flex-wrap gap-2 sm:pl-12">
                  {e.chips.map((c, k) => (
                    <span
                      key={k}
                      className="inline-block border border-dark/15 bg-cream/70 px-3 py-1.5 font-body text-xs text-dark/75"
                      style={{ borderRadius: '3px' }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="bg-cream px-6 pt-12 pb-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-base text-dark/70 leading-relaxed"
          >
            Un molde bien especificado evita errores, pérdidas de tela y confusiones en el armado.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            La claridad en moldería es parte de la prolijidad del resultado final.
          </motion.p>
        </div>
      </section>

      {/* ── Imagen final ── */}
      <section className="bg-cream px-6 pt-8 pb-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="w-full overflow-hidden rounded-lg"
            style={{ outline: '1px solid hsl(var(--border) / 0.4)' }}
          >
            <img
              src="/modulo11/maquillaje2.png"
              alt="Manopla de ondas rojas colgada de una barra, usada como organizador de brochas"
              className="w-full h-auto object-contain block"
            />
          </motion.div>
        </div>
      </section>

      {/* Floating back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300 cursor-pointer"
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
