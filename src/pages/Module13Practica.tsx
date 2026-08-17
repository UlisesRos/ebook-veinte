import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo13 } from '../components/CarruselModulo13';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WORD = 'CARTUCHERA';
const TYPE_SPEED = 130;
const ERASE_SPEED = 70;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const BIES_COLOR = '#3B6FE0';
const ZIP_COLOR = '#6b7280';
const SILVER_FILL = '#DCDCDC';

function ZipPouchIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="3.5" y="8" width="17" height="11" rx="3" />
      <path d="M3.5 11.5h17" opacity="0.5" />
      <circle cx="12" cy="11.5" r="0.9" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Telas', detalle: 'exterior con cuerpo (lona, gabardina o cordura) e interior silver' },
  { cat: 'Cierre', detalle: '6 mm, con su tira cierre a juego' },
  { cat: 'Hilo', detalle: 'al tono o en contraste' },
  { cat: 'Bies', detalle: 'para prolijar bordes y costuras internas' },
  { cat: 'Alfileres', detalle: 'para sujetar las piezas' },
  { cat: 'Para moldería', detalle: 'papel madera, escuadra o regla, lápiz' },
];

const stepMeta = [
  { titulo: 'Cortar el rectángulo exterior', texto: 'Cortar el rectángulo de 30 × 36 cm en tela exterior (× 1).' },
  { titulo: 'Cortar el rectángulo interior', texto: 'Cortar el mismo rectángulo de 30 × 36 cm en tela interior silver (× 1).' },
  { titulo: 'Unir ambas telas', texto: 'Coser ambas telas con costura recta por todo el contorno.' },
  { titulo: 'Cortar los bies', texto: 'Cortar 2 bies de la medida más chica del rectángulo, es decir 30 cm.' },
  { titulo: 'Coser los bies', texto: 'Coser bies con costura recta en los laterales de 30 cm.' },
  { titulo: 'Coser el cierre', texto: 'Cortar el cierre de la misma medida y coserlo a máquina por debajo del bies.' },
  { titulo: 'Colocar la tira cierre', texto: 'Una vez cosido, colocar la tira cierre.' },
  { titulo: 'Dar vuelta', texto: 'Dar vuelta la pieza para comenzar las costuras internas.' },
  { titulo: 'Marcar los centros', texto: 'Doblar a la mitad para buscar el centro de la pieza y marcar con pequeños piquetes, haciéndolos coincidir con el centro del cierre.' },
  { titulo: 'Coser los laterales', texto: 'Costura recta en ambos laterales.' },
  { titulo: 'Colocar el bies', texto: 'Ya fijado, colocar bies.' },
  { titulo: 'Marcar el fuelle', texto: 'En sus 4 puntas, cortar el fuelle con cuadrados de 4 cm.' },
  { titulo: 'Coser el primer fuelle', texto: 'Hacer coincidir la costura del fuelle con el centro. Coser recto.' },
  { titulo: 'Repetir el fuelle', texto: 'Repetir el mismo procedimiento del otro lado.' },
  { titulo: 'Bies en los fuelles', texto: 'Colocar bies de ambos lados.' },
  { titulo: 'Dar vuelta', texto: 'Dar vuelta la cartuchera. ¡Está lista!' },
];

export function Module13Practica() {
  const [displayed, setDisplayed] = useState('');
  const [erasing, setErasing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Reveal de la moldería sin IntersectionObserver (falla sobre SVG en Safari)
  const [moldeRef, showMolde] = useRevealOnScroll<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!erasing) {
      if (displayed.length < WORD.length) {
        timeout = setTimeout(() => setDisplayed(WORD.slice(0, displayed.length + 1)), TYPE_SPEED);
      } else {
        timeout = setTimeout(() => setErasing(true), 5000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), ERASE_SPEED);
      } else {
        timeout = setTimeout(() => setErasing(false), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, erasing]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── HERO ── */}
      <div
        className="flex flex-col items-center justify-center px-6"
        style={{ minHeight: '100svh', paddingTop: '8vh', paddingBottom: '8vh' }}
      >
        <p
          className="font-body uppercase text-dark font-bold text-center"
          style={{ fontSize: '11px', letterSpacing: '0.3em', marginBottom: '1.2rem' }}
        >
          Práctica · Módulo XIII
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(1.7rem, 8vw, 5.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '2.5vh',
            minHeight: '1.1em',
          }}
        >
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '0.85em',
              background: 'hsl(var(--dark))',
              marginLeft: '4px',
              verticalAlign: 'middle',
              borderRadius: '1px',
              opacity: cursorVisible ? 1 : 0,
              transition: 'opacity 0.1s',
            }}
          />
        </div>

        {/* Dos fotos polaroid lado a lado */}
        <div
          style={{
            position: 'relative',
            width: 'min(88vw, 580px)',
            height: 'clamp(280px, 56vw, 460px)',
            flexShrink: 0,
            marginTop: '-1vh',
          }}
        >
          <div
            style={{
              position: 'absolute', left: 0, top: '50%',
              transform: 'translateY(-50%) rotate(-2deg)',
              width: '52%', height: '90%',
              background: 'white', borderRadius: '10px', padding: '7px',
              outline: '1px solid hsl(var(--border))', zIndex: 1, overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            <img
              src="/modulo13/practica1.jpg"
              alt="Cartuchera a rayas azules y blancas sobre una mesa de madera junto al mar"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }}
            />
          </div>
          <div
            style={{
              position: 'absolute', right: 0, top: '50%',
              transform: 'translateY(-50%) rotate(2deg)',
              width: '52%', height: '90%',
              background: 'white', borderRadius: '10px', padding: '7px',
              outline: '1px solid hsl(var(--border))', zIndex: 2, overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
            }}
          >
            <img
              src="/modulo13/practica2.jpg"
              alt="Cartuchera a rayas azules y blancas sobre una mesa con productos de maquillaje"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }}
            />
          </div>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <section className="bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Moldería */}
          <div className="space-y-2 text-center">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">01. Estructura</p>
            <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Moldería</h2>
          </div>

          <p className="text-center text-sm text-dark/65 leading-relaxed max-w-xl mx-auto">
            Un rectángulo que forma el cuerpo de la cartuchera, y cuadrados chicos en cada esquina que arman el fuelle.
          </p>

          {/* SVG moldería — rectángulo + cuadrado */}
          <div
            ref={moldeRef}
            className="w-full overflow-hidden bg-white"
            style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <svg
              viewBox="0 0 360 300"
              style={{ width: '100%', maxWidth: 460, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* ── Rectángulo: 30 × 36 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <rect x="40" y="32" width="120" height="144" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.6" />
                <text x="100" y="94" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Rectángulo</text>
                <text x="100" y="110" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.55">30 × 36 cm</text>
                <text x="100" y="124" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">1 exterior + 1 interior (silver)</text>

                {/* Cota horizontal */}
                <line x1="40" y1="190" x2="160" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="40" y1="185" x2="40" y2="195" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="160" y1="185" x2="160" y2="195" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="100" y="206" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">30 cm</text>

                {/* Cota vertical */}
                <line x1="26" y1="32" x2="26" y2="176" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="21" y1="32" x2="31" y2="32" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="21" y1="176" x2="31" y2="176" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="14" y="104" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 14 104)">36 cm</text>
              </motion.g>

              {/* ── Cuadrado: 4 × 4 cm — fuelle ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease }}
              >
                <rect x="240" y="90" width="60" height="60" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                <text x="270" y="116" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill="#1a1a1a">Cuadrado</text>
                <text x="270" y="130" textAnchor="middle" fontSize="8.5" fontFamily="serif" fill="#1a1a1a" opacity="0.55">4 × 4 cm</text>
                <text x="270" y="143" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">cortar × 4</text>

                {/* Cota horizontal */}
                <line x1="240" y1="164" x2="300" y2="164" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="240" y1="159" x2="240" y2="169" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="300" y1="159" x2="300" y2="169" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="270" y="180" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a">4 cm</text>

                {/* Anotación */}
                <line x1="240" y1="108" x2="216" y2="98" stroke={ACCENT} strokeWidth="0.9" />
                <text x="212" y="96" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>fuelle</text>
                <text x="212" y="107" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.75">en las 4 esquinas</text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              El rectángulo forma el cuerpo; los cuadrados arman el fuelle en cada esquina.
            </p>
          </div>

          {/* Materiales */}
          <div className="space-y-4 pt-4">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">02. Lo que necesitás</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Materiales</h2>
            </div>
            <ul className="space-y-0 divide-y divide-border/30">
              {materiales.map((item, i) => (
                <li key={i} className="flex items-center gap-4 py-4">
                  <span className="text-dark"><ZipPouchIcon size={19} /></span>
                  <span className="font-body text-base text-dark leading-relaxed">
                    <span className="font-medium">{item.cat}</span>
                    <span className="text-dark/45"> — </span>
                    <span className="text-dark/70">{item.detalle}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pasos */}
          <div className="space-y-0 pt-4">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">03. Proceso</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Pasos</h2>
            </div>

            <div className="space-y-10 pt-8">

              {/* Paso 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>01</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 1</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[0].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[0].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="20" width="120" height="144" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="165" y="96" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" opacity="0.55">Exterior</text>
                    <text x="165" y="112" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">30 × 36 cm — × 1</text>
                    <text x="280" y="90" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                    <text x="280" y="110" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cortar en tela</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[1].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[1].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="20" width="120" height="144" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="165" y="96" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" opacity="0.55">Interior</text>
                    <text x="165" y="112" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">silver — 30 × 36 cm — × 1</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[2].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[2].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="115" y="24" width="120" height="144" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.2" opacity="0.85" />
                    <rect x="105" y="18" width="120" height="144" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <rect x="105" y="18" width="120" height="144" fill="none" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                    <text x="165" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">costura recta</text>
                    <text x="165" y="182" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">por todo el contorno</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[3].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[3].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 150" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="55" y="46" width="150" height="16" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="2.4" />
                    <rect x="55" y="78" width="150" height="16" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="2.4" />
                    <text x="130" y="38" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={BIES_COLOR} opacity="0.85">bies × 2 — 30 cm</text>
                    <text x="270" y="70" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                    <text x="270" y="118" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">medida más chica del rectángulo</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[4].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[4].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="30" width="120" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <rect x="100" y="22" width="130" height="12" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="3" />
                    <rect x="100" y="156" width="130" height="12" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="3" />
                    <text x="165" y="96" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">laterales de 30 cm</text>
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={BIES_COLOR} opacity="0.85">bies con costura recta</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[5].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[5].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="30" width="120" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <rect x="100" y="22" width="130" height="12" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="3" />
                    <rect x="100" y="156" width="130" height="12" rx="3" fill="none" stroke={BIES_COLOR} strokeWidth="3" />
                    <line x1="105" y1="42" x2="225" y2="42" stroke={ZIP_COLOR} strokeWidth="4" strokeDasharray="3 2" />
                    <text x="165" y="29" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ZIP_COLOR} opacity="0.85">cierre</text>
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">cosido por debajo del bies</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[6].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[6].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 150" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <line x1="60" y1="70" x2="270" y2="70" stroke={ZIP_COLOR} strokeWidth="5" strokeDasharray="4 2" />
                    <rect x="255" y="58" width="24" height="24" rx="4" fill={ZIP_COLOR} opacity="0.85" />
                    <text x="267" y="75" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="sans-serif">↕</text>
                    <text x="165" y="46" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">tira cierre</text>
                    <text x="165" y="110" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">se coloca una vez cosido el cierre</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 8 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[7].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[7].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 150" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="130" y="30" width="70" height="90" rx="4" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.55" />
                    <path d="M235 55 a30 30 0 1 1 -8 -18" fill="none" stroke="#1a1a1a" strokeWidth="1.4" opacity="0.55" />
                    <polygon points="222,32 234,36 226,46" fill="#1a1a1a" opacity="0.55" />
                    <text x="165" y="140" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">dar vuelta para las costuras internas</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 9 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[8].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[8].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="24" width="120" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="165" y1="24" x2="165" y2="164" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.4" />
                    <line x1="158" y1="24" x2="172" y2="24" stroke={ACCENT} strokeWidth="2.4" />
                    <line x1="158" y1="164" x2="172" y2="164" stroke={ACCENT} strokeWidth="2.4" />
                    <text x="165" y="16" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.85">piquete</text>
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">coincide con el centro del cierre</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 10 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[9].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[9].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="24" width="120" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.2" />
                    <line x1="105" y1="24" x2="105" y2="164" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="225" y1="24" x2="225" y2="164" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">costura recta en ambos laterales</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 11 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[10].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[10].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="24" width="120" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.2" />
                    <line x1="105" y1="24" x2="105" y2="164" stroke={BIES_COLOR} strokeWidth="4" strokeLinecap="round" />
                    <line x1="225" y1="24" x2="225" y2="164" stroke={BIES_COLOR} strokeWidth="4" strokeLinecap="round" />
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={BIES_COLOR} opacity="0.85">bies cubriendo los laterales</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 12 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>12</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 12</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[11].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[11].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="105" y="24" width="120" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.2" />
                    <rect x="91" y="10" width="28" height="28" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 2" />
                    <rect x="211" y="10" width="28" height="28" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 2" />
                    <rect x="91" y="150" width="28" height="28" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 2" />
                    <rect x="211" y="150" width="28" height="28" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 2" />
                    <text x="165" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.85">cuadrado 4 × 4 cm en las 4 puntas</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 13 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>13</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 13</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[12].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[12].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 150" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <path d="M125 40 L235 40 L180 90 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.4" />
                    <line x1="140" y1="65" x2="220" y2="65" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="180" y1="40" x2="180" y2="90" stroke={ACCENT} strokeWidth="1.2" strokeDasharray="3 2" opacity="0.7" />
                    <text x="180" y="32" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.8">centro</text>
                    <text x="180" y="118" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">coser recto sobre el centro</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 14 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>14</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 14</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[13].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[13].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 130" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <path d="M40 30 L120 30 L80 70 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="50" y1="50" x2="110" y2="50" stroke={SEAM_COLOR} strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M210 30 L290 30 L250 70 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="220" y1="50" x2="280" y2="50" stroke={SEAM_COLOR} strokeWidth="2.2" strokeLinecap="round" />
                    <text x="165" y="105" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">mismo procedimiento del otro lado</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 15 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>15</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 15</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[14].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[14].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 130" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <path d="M40 30 L120 30 L80 70 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="45" y1="35" x2="115" y2="35" stroke={BIES_COLOR} strokeWidth="3" strokeLinecap="round" />
                    <path d="M210 30 L290 30 L250 70 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="215" y1="35" x2="285" y2="35" stroke={BIES_COLOR} strokeWidth="3" strokeLinecap="round" />
                    <text x="165" y="105" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={BIES_COLOR} opacity="0.85">bies en los 4 fuelles</text>
                  </svg>
                </div>
              </motion.div>

              {/* Paso 16 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease }}
                className="pt-0 space-y-4 text-center"
              >
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>16</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 16</p>
                <h3 className="font-display text-xl text-dark leading-snug">{stepMeta[15].titulo}</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">{stepMeta[15].texto}</p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <path
                      d="M110 60 Q110 30 165 28 Q220 30 220 60 L220 150 Q220 170 200 170 L130 170 Q110 170 110 150 Z"
                      fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"
                    />
                    <line x1="118" y1="42" x2="212" y2="42" stroke={ZIP_COLOR} strokeWidth="3.5" strokeDasharray="3 2" />
                    <text x="165" y="112" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">¡Cartuchera terminada!</text>
                    <text x="165" y="184" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">dar vuelta y lista ♥</text>
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Aplicá la teoría</p>
              <p className="text-cream text-base leading-relaxed">
                Esta cartuchera es el lugar ideal para poner en práctica lo aprendido en composición: elegí una tela protagonista, una secundaria y una neutra para el bies, y buscá que compartan al menos un color.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CarruselModulo13 />

    </div>
  );
}
