import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo13Teoria } from '../components/CarruselModulo13Teoria';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';

/* ── Datos ── */

const COLORES = [
  {
    titulo: 'Colores neutros',
    texto: 'Blanco, gris, beige, negro. Sirven para equilibrar estampas más fuertes.',
  },
  {
    titulo: 'Colores protagonistas',
    texto: 'Son los que llaman la atención y dominan la pieza.',
  },
];

const REGLA = [
  { n: '01', texto: '1 tela protagonista' },
  { n: '02', texto: '1 tela secundaria' },
  { n: '03', texto: '1 tela neutra' },
];

const ESCALA = [
  { n: '01', texto: 'Estampa grande → protagonista.' },
  { n: '02', texto: 'Estampa mediana → acompaña.' },
  { n: '03', texto: 'Estampa pequeña → equilibra.' },
];

const MEZCLAS = [
  'Flores + rayas',
  'Estampa grande + lisa',
  'Cuadrillé + lisa',
  'Estampa llamativa + neutro',
];

const TEXTURAS = [
  {
    n: '01',
    titulo: 'Gabardina + lienzo',
    texto: 'Dos telas de cuerpo firme, con distinto tacto y caída.',
  },
  {
    n: '02',
    titulo: 'Tela estampada + tela lisa con textura',
    texto: 'El estampado gana protagonismo cuando la lisa aporta relieve.',
  },
  {
    n: '03',
    titulo: 'Algodón + nobuk',
    texto: 'Para detalles: el nobuk suma un contraste de textura puntual.',
  },
];

const ERRORES = [
  'Mezclar demasiadas estampas fuertes.',
  'No repetir ningún color entre telas.',
  'No dejar "espacios de descanso visual".',
  'No pensar el proyecto completo antes de cortar.',
];

const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const listItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function Module13() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            XIII
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XIII</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Composición<br />
            <span className="italic text-dark font-normal block mt-2">de telas</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/modulo13/teoria.png"
            alt="Collage de telas y prendas estampadas: langostas, ajíes, moños a cuadrillé y limones combinando colores y texturas"
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
            La composición es la manera en que organizamos colores, estampas y texturas para que el proyecto se vea armónico y equilibrado.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            No es solo "que combine", sino que tenga intención.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            No mezclamos telas al azar, construimos una idea visual.
          </p>
        </div>
      </section>

      {/* ── El color: la base de todo ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Fundamento</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              El color:<br /><span className="italic">la base de todo</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
            {COLORES.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-cream px-7 py-8 text-center"
              >
                <h3
                  className="font-display text-dark leading-tight mb-2"
                  style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.4rem)', fontWeight: 500 }}
                >
                  {c.titulo}
                </h3>
                <p className="text-sm text-dark/65 leading-relaxed">{c.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regla simple para principiantes — cards oscuras ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Para empezar</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Regla simple<br /><span className="italic">para principiantes</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {REGLA.map((item, i) => (
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
                  {item.n}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cream/50 shrink-0" />
                <p className="text-cream text-base leading-relaxed relative z-10">{item.texto}</p>
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
            Esto evita sobrecargar.
          </motion.p>
        </div>
      </section>

      {/* ── Divisor ── */}
      <section className="bg-cream px-6 pt-4 pb-4">
        <div className="max-w-2xl mx-auto flex items-center gap-5">
          <span className="h-px bg-border/50 flex-1" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40">Segunda parte</span>
          <span className="h-px bg-border/50 flex-1" />
        </div>
      </section>

      {/* ── Escala de estampas ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Proporción</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Escala de<br /><span className="italic">estampas</span>
            </h2>
          </motion.div>

          <motion.ul
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={listContainer}
          >
            {ESCALA.map((item, i) => (
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
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-sm text-dark/60 italic bg-white px-5 py-4"
              style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
            >
              💡 Si todas son grandes, compiten.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="text-sm text-dark/60 italic bg-white px-5 py-4"
              style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
            >
              💡 Si todas son chicas, se pierde fuerza.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Mezcla de estampas ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-10 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Combinaciones que funcionan</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Mezcla de<br /><span className="italic">estampas</span>
            </h2>
          </motion.div>

          <div className="space-y-0 divide-y divide-border/30">
            {MEZCLAS.map((item, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="mt-8 bg-white px-6 py-5"
            style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-2">Consejo práctico</p>
            <p className="text-sm text-dark/70 leading-relaxed">
              Si dos telas comparten al menos un color, ya tienen algo en común.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Texturas y materiales ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Más allá del diseño</p>
            <h2
              className="font-display text-dark leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Texturas y<br /><span className="italic">materiales</span>
            </h2>
            <p className="text-base text-dark/65 leading-relaxed max-w-xl mx-auto">
              No solo importa el diseño, también el material.
            </p>
          </motion.div>

          <div className="space-y-3">
            {TEXTURAS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
                className="bg-white px-6 py-6 sm:px-7"
                style={{ outline: '1px solid hsl(var(--border) / 0.5)', borderLeft: `3px solid ${ACCENT}` }}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span
                    className="font-display text-dark/25 leading-none shrink-0 tabular-nums"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 400 }}
                  >
                    {t.n}
                  </span>
                  <h3
                    className="font-display text-dark leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)', fontWeight: 500 }}
                  >
                    {t.titulo}
                  </h3>
                </div>
                <p className="font-body text-sm text-dark/65 leading-relaxed sm:pl-12">{t.texto}</p>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="font-display italic text-dark text-center leading-snug mt-10"
            style={{ fontSize: 'clamp(1.15rem, 3vw, 1.6rem)', fontWeight: 400 }}
          >
            La mezcla de textura aporta interés sin necesidad de sumar más estampas.
          </motion.p>
        </div>
      </section>

      {/* ── Equilibrio visual ── */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-dark text-cream px-8 py-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-6">Equilibrio visual</p>
            <p
              className="font-display italic text-cream leading-snug"
              style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2rem)', fontWeight: 400 }}
            >
              Lo que pesa visualmente en un lado,<br />necesita compensarse en otro.
            </p>
            <p className="text-cream/60 text-sm leading-relaxed max-w-md mx-auto mt-6">
              Si un bolso tiene una estampa muy fuerte adelante, quizás atrás conviene algo más calmo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Errores comunes ── */}
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
            {ERRORES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.44, delay: i * 0.06, ease }}
                className="flex items-center gap-4 py-4 group"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-dark/30 group-hover:text-dark/70 transition-colors duration-200">
                  <path d="M2.5 2.5l9 9M11.5 2.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-base text-dark font-body leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            Combinar telas es una decisión, no un accidente: cada elección construye la idea visual final del proyecto.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            Pensar el proyecto completo, antes de cortar la primera tela.
          </motion.p>
        </div>
      </section>

      <CarruselModulo13Teoria />

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
