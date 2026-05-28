import { useEffect } from 'react';
import { motion } from 'framer-motion';

const FORROS = [
  {
    n: '01',
    nombre: 'Gabardina',
    subtitulo: 'de algodón o poliéster',
    puntos: [
      'Más firme que un forro común',
      'Resistente',
      'Ideal para neceseres, totes y bolsos medianos',
    ],
  },
  {
    n: '02',
    nombre: 'Lienzo grueso',
    subtitulo: 'natural y con cuerpo',
    puntos: [
      'Natural y con cuerpo',
      'Da buena base sin ser rígido',
      'Perfecto si buscás algo más artesanal',
    ],
  },
  {
    n: '03',
    nombre: 'Silver',
    subtitulo: 'impermeable',
    puntos: [
      'Además de fácil limpieza, aporta cuerpo',
      'Ideal para neceseres y productos de higiene',
    ],
  },
  {
    n: '04',
    nombre: 'Panamá o Tusor firme',
    subtitulo: 'decorativo',
    puntos: [
      'Dan estructura y sostén',
      'Más decorativos si el interior queda visible',
    ],
  },
];

export function Module8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        {/* Decorative watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            className="font-display text-dark leading-none"
            style={{ fontSize: 'clamp(14rem, 38vw, 30rem)', fontWeight: 700, opacity: 0.035 }}
          >
            VIII
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo VIII</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Interior<br />
            <span className="italic text-dark font-normal block mt-2">del Producto</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/interiorprimero.jpg"
            alt="Interior del producto"
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
            Elegir el forro de un producto es tan importante como elegir la tela exterior, porque no solo aporta terminación y estructura, sino también funcionalidad.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            En este módulo vamos a realizar un neceser, el cual podemos optar como forro "silver", un material resistente y de fácil limpieza que lo hace ideal para el uso diario. Su superficie permite limpiar rápidamente derrames o manchas con un paño húmedo — el aliado perfecto para llevar maquillaje, productos de higiene o lo que necesites sin preocuparte.
          </p>
        </div>
      </section>

      {/* ── Índice — editorial horizontal bars ── */}
      <section id="indice" className="bg-cream px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-8 text-center">
            Contenido del módulo
          </p>
          <div className="space-y-0">
            {[
              { n: '01', titulo: 'Forros con estructura', href: '#forros' },
              { n: '02', titulo: 'Entretela', href: '#entretela' },
              { n: '03', titulo: 'Guata', href: '#guata' },
            ].map((item, i) => (
              <motion.a
                key={item.n}
                href={item.href}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-6 py-5 border-b border-border/40 no-underline hover:border-dark/30 transition-colors"
              >
                <span
                  className="font-display text-dark/25 leading-none shrink-0 group-hover:text-dark/50 transition-colors"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, minWidth: '3.5rem' }}
                >
                  {item.n}
                </span>
                <span
                  className="font-display text-dark leading-none group-hover:opacity-70 transition-opacity flex-1"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.6rem)', fontWeight: 400 }}
                >
                  {item.titulo}
                </span>
                <svg
                  width="18" height="18" viewBox="0 0 18 18" fill="none"
                  className="shrink-0 text-dark/25 group-hover:text-dark/50 group-hover:translate-x-1 transition-all duration-200"
                >
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Forros con estructura ── */}
      <section id="forros" className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">01 — Tipos de forro</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Telas que<br /><span className="italic">dan estructura</span>
            </h2>
          </motion.div>

          {/* Horizontal strip cards */}
          <div className="space-y-3">
            {FORROS.map((forro, idx) => (
              <motion.div
                key={forro.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="border border-border/40 bg-white p-6 flex gap-6 items-start hover:border-dark/20 transition-colors"
              >
                <span
                  className="font-display text-dark/15 leading-none shrink-0"
                  style={{ fontSize: 'clamp(2.8rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1 }}
                >
                  {forro.n}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-dark mb-0.5"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 400 }}
                  >
                    {forro.nombre}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-dark/35 mb-3 font-body">{forro.subtitulo}</p>
                  <ul className="space-y-1">
                    {forro.puntos.map((punto, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-dark/65 leading-relaxed">
                        <span className="text-dark/50 mt-0.5 shrink-0 text-xs">✔</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tip importante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 border-l-4 border-dark pl-6 py-2"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">🔎 Tip importante</p>
            <p className="text-sm text-dark/60 leading-relaxed mb-5">
              Si querés más firmeza todavía, podés sumar entretela tejida o rígida, guata fina, o plastificado + entretela.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { label: 'Con cuerpo', desc: 'Tela ext. + tela forro' },
                { label: 'Más armado', desc: 'Tela ext. + entretela + forro' },
                { label: 'Práctico', desc: 'Tela ext. + silver' },
              ].map((combo, i) => (
                <div key={i} className="border border-border/30 bg-cream px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-dark mb-1">{combo.label}</p>
                  <p className="text-xs text-dark/50">{combo.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Image pair: interiordos + interiortres ── */}
      <section className="bg-cream px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src="/interiordos.jpg" alt="Interior tela forro" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden mt-8 md:mt-12" style={{ aspectRatio: '3/4' }}>
              <img src="/interiortres.jpg" alt="Interior detalle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Entretela ── */}
      <section id="entretela" className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3 text-center">02 — Material estructurante</p>
            <h2
              className="font-display text-dark leading-tight mb-6 text-center"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Qué es la<br /><span className="italic">Entretela?</span>
            </h2>
            <p className="text-base text-dark/65 leading-relaxed">
              La entretela es un material textil que se coloca entre la tela principal y el forro para dar estructura, firmeza, cuerpo y estabilidad a una prenda o accesorio. Se usa en cuellos, puños, vistas, pretinas, carteras, bolsos, manteles estructurados y más.
            </p>
          </motion.div>

          {/* Para qué sirve — small cards */}
          <div className="grid grid-cols-2 gap-2">
            {[
              'Evitar que la tela se deforme',
              'Dar rigidez o sostén',
              'Mejorar la caída',
              'Reforzar zonas de tensión',
            ].map((uso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border border-border/40 p-4 bg-white"
              >
                <span
                  className="font-display text-dark/12 block leading-none mb-2"
                  style={{ fontSize: '2.6rem', fontWeight: 700 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-xs text-dark/65 leading-relaxed">{uso}</p>
              </motion.div>
            ))}
          </div>

          {/* Entretela image */}
          <div className="w-full overflow-hidden" style={{ height: '55vh' }}>
            <img src="/entretela.jpg" alt="Entretela" className="w-full h-full object-cover" />
          </div>

          {/* Tipos */}
          <div className="space-y-6">
            <h3
              className="font-display text-dark"
              style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 400 }}
            >
              Tipos de entretela
            </h3>

            {/* Termoadhesiva vs Cosida — dark/light contrast */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-dark text-cream border border-dark p-6 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/50">Con adhesivo</p>
                <h4 className="font-display text-cream text-xl" style={{ fontWeight: 400 }}>Termoadhesiva</h4>
                <p className="text-sm leading-relaxed text-cream/65">
                  Tiene pegamento en un lado que se activa con calor (plancha). Fácil y rápida de colocar, ideal para producción.
                </p>
                <div className="border-t border-cream/10 pt-3">
                  <p className="text-xs text-cream/40 uppercase tracking-widest mb-1">Usos comunes</p>
                  <p className="text-xs leading-relaxed text-cream/65">Cuellos de camisa, vistas, bolsos livianos, cartucheras.</p>
                </div>
                <p className="text-xs italic text-cream/40">✱ Siempre probar antes en un retazo para regular temperatura.</p>
              </div>

              <div className="bg-white border border-border/40 p-6 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40">Sin adhesivo</p>
                <h4 className="font-display text-dark text-xl" style={{ fontWeight: 400 }}>Cosida</h4>
                <p className="text-sm leading-relaxed text-dark/65">
                  No tiene pegamento. Se fija con costura o hilván. Más profesional, no altera la textura de la tela.
                </p>
                <div className="border-t border-border/30 pt-3">
                  <p className="text-xs text-dark/40 uppercase tracking-widest mb-1">Usos comunes</p>
                  <p className="text-xs leading-relaxed text-dark/60">Sastrería, prendas de fiesta, telas finas.</p>
                </div>
              </div>
            </div>

            {/* Grosor — visual bars */}
            <div className="border border-border/40 p-6 space-y-4">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-4">Según su grosor</p>
              <div className="space-y-4">
                {[
                  { peso: 'Liviana', desc: 'Para blusas, vestidos, telas suaves.', w: 28 },
                  { peso: 'Media', desc: 'Camisas, vestidos estructurados.', w: 56 },
                  { peso: 'Pesada o rígida', desc: 'Bolsos, carteras, neceseres, proyectos deco.', w: 84 },
                ].map((g, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="shrink-0 bg-dark rounded-sm transition-all"
                      style={{ width: `${g.w}px`, height: '5px', opacity: 0.25 + i * 0.22 }}
                    />
                    <div>
                      <span className="text-sm font-bold text-dark">{g.peso}</span>
                      <span className="text-sm text-dark/50 ml-2">{g.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tejida vs No tejida */}
            <div className="border border-border/40 p-6 space-y-4">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-2">Tejida vs. No tejida</p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { nombre: 'Tejida', puntos: ['Tiene trama y urdimbre', 'Más flexible', 'Se comporta como una tela'] },
                  { nombre: 'No tejida', puntos: ['Tipo "papel" o manta', 'Más económica', 'Ideal para principiantes'] },
                ].map((tipo, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold uppercase tracking-widest text-dark mb-2">{tipo.nombre}</p>
                    <ul className="space-y-1">
                      {tipo.puntos.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark/65">
                          <span className="text-dark/30 shrink-0">—</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-dark/40 italic mt-2">
                También existe la entretela de punto (knit), perfecta para telas elastizadas.
              </p>
            </div>

            {/* Dark quote box */}
            <div className="bg-dark text-cream px-8 py-10">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/50 mb-4">¿Cómo elegir la correcta?</p>
              <p
                className="font-display italic text-cream leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.5rem)', fontWeight: 400 }}
              >
                Tené en cuenta el tipo de tela principal, el nivel de estructura que querés, si la prenda necesita flexibilidad y si va a lavarse seguido.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Guata ── */}
      <section id="guata" className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto space-y-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3 text-center">03 — Material acolchado</p>
            <h2
              className="font-display text-dark leading-tight mb-6 text-center"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Qué es la<br /><span className="italic">Guata?</span>
            </h2>
            <p className="text-base text-dark/65 leading-relaxed">
              La guata es un material textil acolchado, suave y esponjoso, que se coloca entre dos telas para dar volumen, mullido y abrigo. A diferencia de la entretela (que da estructura), la guata aporta espesor y suavidad.
            </p>
          </motion.div>

          {/* Para qué se usa */}
          <div className="border-l-4 border-dark pl-6 py-1 space-y-2">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">¿Para qué se usa?</p>
            <ul className="space-y-1">
              {[
                'Dar efecto acolchado',
                'Aportar suavidad',
                'Dar cuerpo mullido a bolsos',
                'Agregar abrigo a prendas',
                'Proteger superficies (manteles acolchados)',
              ].map((uso, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-dark/65">
                  <span className="text-dark/30 shrink-0">—</span>
                  <span>{uso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usos comunes — 2 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                cat: 'Deco y hogar',
                items: ['Colchas', 'Caminos de mesa acolchados', 'Manteles con volumen', 'Individuales acolchados', 'Neceseres acolchados', 'Bolsos con cuerpo suave', 'Cartucheras', 'Fundas protectoras'],
              },
              {
                cat: 'Indumentaria',
                items: ['Camperas acolchadas', 'Chalecos', 'Abrigos livianos'],
              },
            ].map((cat, i) => (
              <div key={i} className="border border-border/40 p-5 bg-white">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">{cat.cat}</p>
                <ul className="space-y-1">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-dark/65">
                      <span className="text-dark/30 shrink-0 mt-0.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Camino de mesa image */}
          <div className="w-full overflow-hidden" style={{ height: '60vh' }}>
            <img src="/caminomesa.jpg" alt="Camino de mesa acolchado con guata" className="w-full h-full object-cover" />
          </div>

          {/* Tipos de guata — visual thickness */}
          <div className="space-y-0 divide-y divide-border/30">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 pb-4">Tipos de guata</p>
            {[
              { nombre: 'Guata fina', desc: 'Poco volumen, ideal para accesorios.', size: 4 },
              { nombre: 'Guata media', desc: 'La más usada en deco.', size: 8 },
              { nombre: 'Guata gruesa', desc: 'Mucho volumen y abrigo.', size: 13 },
              { nombre: 'Guata térmica', desc: 'Conserva temperatura (muy usada en cocina).', size: 13 },
              { nombre: 'Guata siliconada', desc: 'Más esponjosa y suave.', size: 16 },
            ].map((tipo, i) => (
              <div key={i} className="flex items-center gap-4 py-3">
                <div
                  className="shrink-0 bg-dark rounded-sm"
                  style={{ width: '20px', height: `${tipo.size}px`, opacity: 0.18 + i * 0.14 }}
                />
                <span className="text-sm font-bold text-dark">{tipo.nombre}</span>
                <span className="text-sm text-dark/45 ml-1">{tipo.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Comparación final: Entretela vs Guata ── */}
      <section className="bg-cream px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-6 text-center">Diferencia clave</p>
            <div className="grid grid-cols-2 overflow-hidden border border-border/40">
              <div className="bg-dark text-cream px-6 py-10 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/45">Entretela</p>
                <p
                  className="font-display italic text-cream leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
                >
                  Estructura<br />y firmeza
                </p>
                <div className="w-8 h-px bg-cream/20" />
                <p className="text-xs text-cream/55 leading-relaxed">
                  Da rigidez, refuerza zonas y evita deformaciones en prendas y accesorios.
                </p>
              </div>
              <div className="bg-white px-6 py-10 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/45">Guata</p>
                <p
                  className="font-display italic text-dark leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
                >
                  Volumen<br />y suavidad
                </p>
                <div className="w-8 h-px bg-dark/20" />
                <p className="text-xs text-dark/55 leading-relaxed">
                  Aporta espesor, mullido y abrigo al proyecto terminado.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating back to index */}
      <a
        href="#indice"
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300"
        aria-label="Volver al índice"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cream whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
          Volver al índice
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

    </div>
  );
}
