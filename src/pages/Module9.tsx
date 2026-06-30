import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const DETALLES = [
  'Aportar textura',
  'Generar movimiento',
  'Crear contraste',
  'Reforzar un estilo (romántico, rústico, minimalista, infantil)',
  'Elevar la percepción de calidad',
];

const PREGUNTAS = [
  { n: '01', texto: '¿Qué sensación quiero transmitir?' },
  { n: '02', texto: '¿Qué estilo representa?' },
  { n: '03', texto: '¿El detalle suma armonía o sobrecarga el diseño?' },
];

const TEXTURAS = [
  { n: '01', nombre: 'Flecos', sub: 'algodón, yute, lana' },
  { n: '02', nombre: 'Volados', sub: 'simples o dobles' },
  { n: '03', nombre: 'Vivo o ribete', sub: 'en contraste' },
  { n: '04', nombre: 'Bies decorativo', sub: '' },
  { n: '05', nombre: 'Borlas', sub: '' },
  { n: '06', nombre: 'Pompones', sub: '' },
];

const FUNCIONALES = [
  'Botones forrados',
  'Botones de madera',
  'Tiras para atar',
  'Cierre metálico visible como detalle',
  'Moños',
];

const ARTESANAL: { label: string; sub: string }[] = [
  { label: 'Mezcla de telas', sub: 'ej: tusor + gabardina' },
  { label: 'Cordones gruesos', sub: '' },
  { label: 'Detalles en crochet', sub: '' },
  { label: 'Parche con etiqueta de marca', sub: 'como sello visible' },
];

const pillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
};

export function Module9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        {/* Watermark IX */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            className="font-display text-dark leading-none"
            style={{ fontSize: 'clamp(14rem, 38vw, 30rem)', fontWeight: 700, opacity: 0.035 }}
          >
            IX
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo IX</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            La<br />
            Decoración<br />
            <span className="italic text-dark font-normal block mt-2">como Valor Agregado</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/almohadon-p9.png"
            alt="Almohadón decorado"
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
            En el mundo textil, la decoración no es solo un detalle estético, sino una herramienta de diseño que transforma un producto básico en una pieza con identidad.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            Existen muchas opciones para embellecer un terminado: desde recursos simples como flecos, volados o vivos, hasta técnicas más elaboradas como bordados, capitoneados o aplicaciones. Cada elección aporta carácter, estilo y personalidad.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            Decorar no es recargar. Es elegir con intención.
          </p>
        </div>
      </section>

      {/* ── Un detalle puede — pills stagger ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">El poder del detalle</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Un detalle puede<span className="italic">…</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={pillVariants}
          >
            {DETALLES.map((d, i) => (
              <motion.span
                key={i}
                variants={pillItem}
                whileHover={{ scale: 1.04, transition: { duration: 0.18, ease } }}
                className="inline-block border border-dark/18 bg-white px-5 py-3.5 font-body text-sm text-dark cursor-default select-none"
                style={{ borderRadius: '3px' }}
              >
                {d}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3, ease }}
            className="text-center text-sm text-dark/50 leading-relaxed mt-12 max-w-md mx-auto"
          >
            La decoración también comunica. Habla del cuidado en la confección, del concepto de marca y del público al que está dirigido el producto.
          </motion.p>
        </div>
      </section>

      {/* ── Antes de elegir — dark numbered cards ── */}
      <section className="bg-cream px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Decisión de diseño</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Antes de elegir,<br /><span className="italic">preguntarse</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {PREGUNTAS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                className="bg-dark text-cream px-8 py-9 flex gap-5 items-start overflow-hidden relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3 font-display text-cream leading-none select-none pointer-events-none"
                  style={{ fontSize: 'clamp(4rem, 10vw, 6.5rem)', fontWeight: 700, lineHeight: 0.9, opacity: 0.04 }}
                >
                  {p.n}
                </span>
                <span
                  className="font-display text-cream/25 leading-none shrink-0 mt-1"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontWeight: 700 }}
                >
                  {p.n}
                </span>
                <p
                  className="font-display italic text-cream leading-snug relative z-10 flex-1"
                  style={{ fontSize: 'clamp(1.1rem, 3vw, 1.55rem)', fontWeight: 400 }}
                >
                  {p.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark quote block ── */}
      <section className="px-6 py-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-dark text-cream px-8 py-12"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-6">Perspectiva</p>
            <p
              className="font-display italic text-cream leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.5rem)', fontWeight: 400 }}
            >
              Cuando la decoración está pensada estratégicamente, el producto deja de ser solo funcional y se convierte en una experiencia visual y sensorial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Imagen flecos ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="w-full overflow-hidden"
            style={{ height: '55vh' }}
          >
            <img src="/flecos-m9.png" alt="Flecos decorativos" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ── Sección 1: Texturas y terminaciones — 2-col grid ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">01 — Recursos decorativos</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Texturas y<br /><span className="italic">terminaciones</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
            {TEXTURAS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.05, ease }}
                className="bg-cream p-6 group cursor-default relative overflow-hidden"
              >
                <div className="flex items-start gap-2.5 mb-1.5">
                  <span
                    className="text-dark/22 font-body font-bold tracking-widest pt-0.5 shrink-0"
                    style={{ fontSize: '10px' }}
                  >
                    {t.n}
                  </span>
                  <h3
                    className="font-display text-dark leading-tight"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)', fontWeight: 400 }}
                  >
                    {t.nombre}
                  </h3>
                </div>
                {t.sub && (
                  <p className="text-xs text-dark/38 font-body italic ml-6">{t.sub}</p>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-dark/20"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease }}
                  style={{ width: '100%', transformOrigin: 'left' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección 2: Detalles funcionales — editorial list ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">02 — Cierre y sujeción</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Detalles que<br /><span className="italic">también decoran</span>
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border/30">
            {FUNCIONALES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.06, ease }}
                className="flex items-center justify-between py-4 group"
              >
                <span className="text-base text-dark font-body leading-relaxed group-hover:opacity-70 transition-opacity duration-200">
                  {item}
                </span>
                <span
                  className="text-dark/20 group-hover:text-dark/50 transition-colors duration-200 font-body font-bold shrink-0 ml-6"
                  style={{ fontSize: '10px', letterSpacing: '0.18em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Imagen borlas — offset grid ── */}
      <section className="bg-cream px-6 pb-10">
        <div className="max-w-3xl mx-auto grid grid-cols-5 gap-4 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="col-span-3 overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <img src="/borlas-m9.png" alt="Borlas decorativas" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="col-span-2 pb-6 space-y-4"
          >
            <div className="w-6 h-px bg-dark/30" />
            <p className="text-xs text-dark/45 font-body leading-relaxed italic">
              Las borlas y flecos transforman un borde liso en una declaración de estilo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sección 3: Estilo natural / artesanal — alternating editorial ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">03 — Personalidad</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Estilo natural<br /><span className="italic">y artesanal</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {ARTESANAL.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className={`flex items-start gap-8 py-9 border-b border-border/30 ${isRight ? 'flex-row-reverse' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-dark/8 leading-none shrink-0 select-none"
                    style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 700, lineHeight: 0.88 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`flex-1 ${isRight ? 'text-right' : ''}`}>
                    <h3
                      className="font-display text-dark leading-tight mb-1"
                      style={{ fontSize: 'clamp(1.05rem, 2.8vw, 1.45rem)', fontWeight: 400 }}
                    >
                      {item.label}
                    </h3>
                    {item.sub && (
                      <p className="text-xs text-dark/38 font-body italic">{item.sub}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Imagen volados — full bleed ── */}
      <section className="bg-cream pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
          className="w-full overflow-hidden"
          style={{ height: '60vh' }}
        >
          <img src="/volados-m9.png" alt="Volados decorativos" className="w-full h-full object-cover" />
        </motion.div>
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
