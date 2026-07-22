import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Datos ── */

const IMPORTANCIA = [
  'Permite unir las piezas sin modificar las medidas reales del molde.',
  'Aporta resistencia y prolijidad.',
  'Evita que la costura se desarme.',
  'Da margen para ajustes o correcciones.',
];

const MEDIDAS = [
  { valor: '0,5', unidad: 'cm', uso: 'En piezas pequeñas o curvas muy marcadas', escala: 0.5 },
  { valor: '1', unidad: 'cm', uso: 'Margen estándar para bolsos, neceseres y cartucheras', escala: 1, destacado: true },
  { valor: '1,5', unidad: 'cm', uso: 'Cuando necesitamos más resistencia o posibilidad de ajuste', escala: 1.5 },
];

const DONDE = [
  { n: 'A', texto: 'Dibujar el molde con el margen ya incluido.' },
  { n: 'B', texto: 'Dibujar el molde sin margen y agregarlo al momento de marcar en la tela.' },
];

const TECNICAS = [
  {
    n: '01',
    nombre: 'Alfileres',
    resumen: 'La opción más tradicional',
    texto:
      'Permiten unir las telas de forma precisa antes de llevarlas a la máquina. Ideales para telas livianas y de algodón. En telas delicadas o impermeables pueden dejar pequeñas marcas o perforaciones.',
    ideal: 'Telas livianas, algodón, lienzo, poplín',
  },
  {
    n: '02',
    nombre: 'Clips o broches para tela',
    resumen: 'Sujetan sin perforar',
    texto:
      'Una excelente alternativa a los alfileres: no dejan marcas. Perfectos para telas gruesas, impermeables, vinílicas o al trabajar con varias capas. Además son más seguros y rápidos de colocar.',
    ideal: 'Telas gruesas, impermeables, vinílicas, lona',
  },
  {
    n: '03',
    nombre: 'Pesas para molde',
    resumen: 'Se apoyan, no pinchan',
    texto:
      'Se usan al momento de cortar. En lugar de pinchar la tela, se apoyan sobre el molde para mantenerlo firme mientras trazamos o cortamos. Pueden ser pesas de costura o elementos adaptados como arandelas grandes o bolsitas con arroz.',
    ideal: 'Telas delicadas, seda, gasa, viscosa',
  },
  {
    n: '04',
    nombre: 'Hilvanado a mano',
    resumen: 'La técnica clásica',
    texto:
      'Consiste en realizar puntadas largas y temporales para unir las telas antes de la costura definitiva. Lleva más tiempo, pero ofrece mayor control y seguridad. Útil en prendas delicadas o telas que se deslizan.',
    ideal: 'Telas delicadas, sedosas, encajes',
  },
];

/* ── Reveal helpers ── */

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const listItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

/* Escala visual: 1cm = 46px de banda */
const CM = 46;

export function Module10() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        {/* Watermark X */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span
            className="font-display text-dark leading-none"
            style={{ fontSize: 'clamp(14rem, 40vw, 32rem)', fontWeight: 700, opacity: 0.035 }}
          >
            X
          </span>
        </div>

        <div className="relative space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo X</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            El<br />
            Margen<br />
            <span className="italic text-dark font-normal block mt-2">de Costura</span>
          </h1>
        </div>

        <div className="relative w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/modulo10/canasta.png"
            alt="Cesta cuadrada de rayas rosas con borde de encaje"
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
            El margen de costura es el espacio que se deja entre la línea de costura y el borde de la tela. Es decir, la distancia que agregamos alrededor del molde para poder unir las piezas correctamente.
          </p>
          <p className="text-base text-dark/60 leading-relaxed">
            Si no dejamos margen, la prenda o el producto quedará más chico de lo previsto, y las piezas pueden no coincidir al momento de armar.
          </p>
          <p className="font-display italic text-dark text-xl leading-snug" style={{ fontWeight: 400 }}>
            El molde marca el tamaño. El margen lo hace posible.
          </p>
        </div>
      </section>

      {/* ── ¿Por qué es importante? — lista numerada con reveal ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">La razón de fondo</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Por qué<br /><span className="italic">es importante?</span>
            </h2>
          </motion.div>

          <motion.ol
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={listContainer}
          >
            {IMPORTANCIA.map((item, i) => (
              <motion.li
                key={i}
                variants={listItem}
                className="flex items-baseline gap-6 py-6 border-b border-border/30 group"
              >
                <span
                  className="font-display text-dark leading-none shrink-0 tabular-nums transition-colors duration-300 group-hover:text-mint"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 400 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base md:text-lg text-dark leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── ¿Cuánto margen se deja? — regla + 3 medidas ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-14 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">La medida justa</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Cuánto margen<br /><span className="italic">se deja?</span>
            </h2>
          </motion.div>

          {/* Tres medidas — el número es el protagonista, la banda muestra la escala real */}
          <div className="space-y-5">
            {MEDIDAS.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className={`relative overflow-hidden flex items-center gap-6 md:gap-10 px-6 md:px-9 py-7 ${
                  m.destacado ? 'bg-dark text-cream' : 'bg-white text-dark'
                }`}
                style={{ outline: m.destacado ? 'none' : '1px solid hsl(var(--border) / 0.5)' }}
              >
                {/* Número protagonista */}
                <div className="flex items-baseline gap-1 shrink-0" style={{ minWidth: '5.4rem' }}>
                  <span
                    className="font-display leading-none tabular-nums"
                    style={{ fontSize: 'clamp(2.8rem, 9vw, 4.6rem)', fontWeight: 400 }}
                  >
                    {m.valor}
                  </span>
                  <span
                    className={`font-body uppercase tracking-wider ${m.destacado ? 'text-cream/55' : 'text-dark/45'}`}
                    style={{ fontSize: '0.8rem' }}
                  >
                    {m.unidad}
                  </span>
                </div>

                {/* Banda visual a escala real + descripción */}
                <div className="flex-1 min-w-0">
                  {/* Banda de margen: ancho proporcional a la medida */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className="relative h-4 rounded-sm overflow-hidden shrink-0"
                      style={{
                        width: `${m.escala * CM}px`,
                        background: m.destacado
                          ? 'repeating-linear-gradient(45deg, hsl(var(--cream) / 0.9) 0 5px, hsl(var(--cream) / 0.55) 5px 10px)'
                          : 'repeating-linear-gradient(45deg, hsl(var(--dark) / 0.82) 0 5px, hsl(var(--dark) / 0.5) 5px 10px)',
                      }}
                    />
                    <span className={`h-4 w-px shrink-0 ${m.destacado ? 'bg-cream/40' : 'bg-dark/30'}`} />
                    <span
                      className={`font-body text-[10px] uppercase tracking-[0.18em] ${
                        m.destacado ? 'text-cream/45' : 'text-dark/35'
                      }`}
                    >
                      {m.destacado ? 'estándar' : 'borde de tela'}
                    </span>
                  </div>
                  <p
                    className={`font-body leading-snug ${m.destacado ? 'text-cream/85' : 'text-dark/70'}`}
                    style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)' }}
                  >
                    {m.uso}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease }}
            className="text-center text-sm text-dark/55 leading-relaxed mt-10 max-w-md mx-auto"
          >
            En indumentaria suele usarse entre <span className="text-dark font-medium">1 y 1,5 cm</span>. Para bolsos, neceseres y cartucheras, 1 cm es la referencia.
          </motion.p>
        </div>
      </section>

      {/* ── ¿Dónde se agrega? — diagrama de molde + dos opciones ── */}
      <section className="bg-cream px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">Alrededor del molde base</p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              ¿Dónde se<br /><span className="italic">agrega?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Diagrama: molde con línea de corte a 1cm */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease }}
              className="bg-white overflow-hidden"
              style={{ padding: '20px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
            >
              <svg viewBox="0 0 300 280" style={{ width: '100%', height: 'auto', display: 'block' }} fill="none">
                {/* Línea de corte (con margen) — punteada, exterior */}
                <motion.rect
                  x="34" y="34" width="232" height="212" rx="4"
                  fill="none" stroke="#1a1a1a" strokeWidth="1.1" strokeDasharray="6 4" opacity="0.55"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease, delay: 0.35 }}
                />
                {/* Molde base — sólido, interior */}
                <motion.rect
                  x="66" y="66" width="168" height="148" rx="2"
                  fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease }}
                />
                <text x="150" y="138" textAnchor="middle" fontSize="13" fontFamily="serif" fill="#1a1a1a">Molde</text>
                <text x="150" y="154" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.5">tamaño real</text>

                {/* Cota del margen superior */}
                <line x1="150" y1="34" x2="150" y2="66" stroke="#9B4B57" strokeWidth="1" />
                <line x1="145" y1="34" x2="155" y2="34" stroke="#9B4B57" strokeWidth="1" />
                <line x1="145" y1="66" x2="155" y2="66" stroke="#9B4B57" strokeWidth="1" />
                <circle cx="150" cy="50" r="9" fill="#F5F0E8" />
                <text x="150" y="53" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#9B4B57" fontWeight="bold">1cm</text>

                {/* Leyenda */}
                <line x1="40" y1="266" x2="58" y2="266" stroke="#1a1a1a" strokeWidth="1.6" />
                <text x="63" y="269" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a">línea del molde</text>
                <line x1="176" y1="266" x2="194" y2="266" stroke="#1a1a1a" strokeWidth="1.1" strokeDasharray="4 3" opacity="0.6" />
                <text x="199" y="269" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.7">línea de corte</text>
              </svg>
            </motion.div>

            {/* Dos opciones */}
            <div className="space-y-4">
              <p className="text-base text-dark/70 leading-relaxed mb-6">
                Siempre alrededor del molde base. Hay dos maneras de trabajarlo, y ambas son válidas:
              </p>
              {DONDE.map((o, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease }}
                  className="flex gap-4 items-start"
                >
                  <span
                    className="font-display text-cream bg-dark rounded-full w-9 h-9 flex items-center justify-center shrink-0 leading-none"
                    style={{ fontSize: '1rem', fontWeight: 500, paddingTop: '2px' }}
                  >
                    {o.n}
                  </span>
                  <p className="text-sm md:text-base text-dark leading-relaxed pt-1.5">{o.texto}</p>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease }}
                className="text-xs text-dark/45 italic leading-relaxed pt-3"
              >
                Lo importante es ser coherente: trabajá siempre de la misma manera para evitar errores.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Error común — advertencia oscura ── */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="bg-dark text-cream px-8 py-10 relative overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-6 font-display text-cream leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(7rem, 18vw, 12rem)', fontWeight: 700, opacity: 0.05 }}
            >
              !
            </span>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream/45 mb-4 relative z-10">Error común</p>
            <p
              className="font-display italic text-cream leading-snug mb-4 relative z-10"
              style={{ fontSize: 'clamp(1.15rem, 3vw, 1.6rem)', fontWeight: 400 }}
            >
              Olvidar agregar el margen de costura al cortar la tela.
            </p>
            <p className="text-cream/70 text-sm leading-relaxed relative z-10">
              Eso hace que el producto final quede más pequeño o que las piezas no coincidan correctamente al armar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Quote de cierre parte 1 ── */}
      <section className="bg-cream px-6 py-14">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.4rem, 4.5vw, 2.4rem)', fontWeight: 400 }}
          >
            El molde marca el tamaño real de la pieza.<br />
            El margen es lo que nos permite construirla.
          </motion.p>
        </div>
      </section>

      {/* ── Divisor de parte ── */}
      <section className="bg-cream px-6 pt-10 pb-4">
        <div className="max-w-2xl mx-auto flex items-center gap-5">
          <span className="h-px bg-border/50 flex-1" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-dark/40">Segunda parte</span>
          <span className="h-px bg-border/50 flex-1" />
        </div>
      </section>

      {/* ── Formas de sujetar la tela — intro ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="font-display text-dark leading-tight"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
          >
            Formas de<br /><span className="italic">sujetar la tela</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease }}
            className="text-base text-dark/65 leading-relaxed max-w-xl mx-auto"
          >
            Antes de coser existen muchas maneras de sujetar las telas. Elegir la correcta depende del tipo de tela y del proyecto que estés realizando.
          </motion.p>
        </div>
      </section>

      {/* ── Las 4 técnicas — tarjetas editoriales alternadas ── */}
      <section className="bg-cream px-6 py-10">
        <div className="max-w-3xl mx-auto space-y-4">
          {TECNICAS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="group relative bg-white overflow-hidden"
              style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Columna número */}
                <div className="sm:w-40 shrink-0 bg-cream/60 flex sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-2 px-6 py-5 sm:py-7 border-b sm:border-b-0 sm:border-r border-border/40">
                  <span
                    className="font-display text-dark leading-none tabular-nums"
                    style={{ fontSize: 'clamp(2.4rem, 7vw, 3.4rem)', fontWeight: 400 }}
                  >
                    {t.n}
                  </span>
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-dark/40 text-right sm:text-left">
                    {t.resumen}
                  </span>
                </div>

                {/* Columna contenido */}
                <div className="flex-1 px-6 py-6 sm:py-7">
                  <h3 className="font-display text-dark leading-tight mb-3" style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)', fontWeight: 500 }}>
                    {t.nombre}
                  </h3>
                  <p className="font-body text-sm md:text-[0.95rem] text-dark/70 leading-relaxed mb-4">
                    {t.texto}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-dark/40 shrink-0">Ideal para</span>
                    <span className="h-px bg-border/50 flex-1" />
                    <span className="font-body text-xs text-dark/75 text-right leading-snug">{t.ideal}</span>
                  </div>
                </div>
              </div>
              {/* Barra inferior que se llena en hover */}
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-dark"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease }}
                style={{ width: '100%', transformOrigin: 'left' }}
              />
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Cierre: elegir bien ── */}
      <section className="bg-cream px-6 pt-10 pb-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-display italic text-dark leading-snug"
            style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)', fontWeight: 400 }}
          >
            Cada proyecto pide su técnica. Conocerlas es trabajar con más prolijidad, cuidado y confianza.
          </motion.p>
        </div>
      </section>

      {/* ── Imagen final: alfileres ── */}
      <section className="bg-cream px-6 pt-8 pb-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
            className="w-full overflow-hidden rounded-lg"
            style={{ outline: '1px solid hsl(var(--border) / 0.4)' }}
          >
            <img
              src="/modulo10/alfileres.png"
              alt="Comparativa de técnicas para sujetar telas: alfileres, clips, pesas para molde e hilvanado a mano"
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
