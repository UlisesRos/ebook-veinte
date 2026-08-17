import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo12Teoria } from '../components/CarruselModulo12Teoria';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';

/* ── Datos ── */

const PARA_QUE = [
  { n: '01', texto: 'Mantener la tela fija mientras cosemos.' },
  { n: '02', texto: 'Guiar la costura.' },
  { n: '03', texto: 'Lograr puntadas parejas.' },
  { n: '04', texto: 'Adaptarse a distintos materiales y técnicas.' },
];

const TIPOS = [
  {
    n: '01',
    titulo: 'Prensatela universal',
    texto: 'El que viene con la máquina. Sirve para costura recta y zigzag. Es el más usado.',
    chips: ['Costura recta', 'Zigzag', 'El más usado'],
  },
  {
    n: '02',
    titulo: 'Prensatela para cierre',
    texto: 'Permite coser cerca de los dientes del cierre. Ideal para neceseres y bolsos.',
    chips: ['Neceseres', 'Bolsos'],
  },
  {
    n: '03',
    titulo: 'Prensatela para ojales',
    texto: 'Especial para hacer ojales automáticos o manuales.',
    chips: ['Ojales automáticos', 'Ojales manuales'],
  },
  {
    n: '04',
    titulo: 'Prensatela para botón',
    texto: 'Sujeta el botón mientras la máquina lo fija.',
    chips: ['Fijación de botones'],
  },
  {
    n: '05',
    titulo: 'Prensatela de teflón',
    texto: 'Ideal para telas difíciles como vinilo, cuerina o plástico. Evita que la tela se "pegue".',
    chips: ['Vinilo', 'Cuerina', 'Plástico'],
  },
  {
    n: '06',
    titulo: 'Prensatela de doble arrastre',
    texto: 'Tiene movimiento propio que acompaña al arrastre inferior. Ideal para telas gruesas o acolchadas.',
    chips: ['Telas gruesas', 'Acolchados'],
  },
  {
    n: '07',
    titulo: 'Prensatela para vivo o cordón',
    texto: 'Permite coser cerca de un vivo decorativo.',
    chips: ['Vivo decorativo', 'Cordón'],
  },
];

const listContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const listItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function Module12() {
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
            XII
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo XII</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            El<br />
            <span className="italic text-dark font-normal block mt-2">Prensatela</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/modulo12/prensatelas3.jpg"
            alt="Prensatela cosiendo una tela clara sobre la máquina"
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
            El prensatela —o pie de máquina— es la pieza que presiona la tela contra los dientes de arrastre para que la costura avance de manera uniforme.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            Sin prensatela, la tela no se desliza correctamente: se frunce, se traba o avanza torcida bajo la aguja.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            No es solo una pieza más. Es lo que hace que la costura avance pareja.
          </p>
        </div>
      </section>

      {/* ── ¿Para qué sirve? — lista editorial con número al costado ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="font-display italic text-dark text-center leading-snug mt-10"
            style={{ fontSize: 'clamp(1.15rem, 3vw, 1.6rem)', fontWeight: 400 }}
          >
            Es fundamental para la precisión del trabajo.
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

      {/* ── ¿Cuántos tipos hay? ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Los principales</p>
            <h2
              className="font-display text-dark leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Cuántos tipos<br /><span className="italic">hay?</span>
            </h2>
            <p className="text-base text-dark/65 leading-relaxed max-w-xl mx-auto">
              Existen muchos, pero en costura de accesorios y taller básico estos son los principales.
            </p>
          </motion.div>

          {/* Las 7 variantes */}
          <div className="space-y-3">
            {TIPOS.map((t, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease }}
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
                    style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', fontWeight: 500 }}
                  >
                    {t.titulo}
                  </h3>
                </div>
                <p className="font-body text-sm text-dark/65 leading-relaxed mb-4 sm:pl-12">{t.texto}</p>
                <div className="flex flex-wrap gap-2 sm:pl-12">
                  {t.chips.map((c, k) => (
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

      {/* ── Consejo ── */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-dark text-cream px-8 py-12 text-center relative overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute -right-4 -bottom-6 font-display text-cream leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(6rem, 16vw, 10rem)', fontWeight: 700, opacity: 0.05 }}
            >
              ♥
            </span>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/40 mb-6">Consejo</p>
            <p
              className="font-display italic text-cream leading-snug relative z-10"
              style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2rem)', fontWeight: 400 }}
            >
              Cambiar el prensatela según la técnica<br />mejora la prolijidad y facilita el trabajo.
            </p>
          </motion.div>
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
            Elegir el prensatela correcto no es un detalle menor: cambia la forma en que la tela avanza y el resultado final de la costura.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            Un buen prensatela hace que la máquina trabaje a favor tuyo.
          </motion.p>
        </div>
      </section>

      <CarruselModulo12Teoria />

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
