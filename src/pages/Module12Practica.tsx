import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo12 } from '../components/CarruselModulo12';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WORD = 'BOLSO SOGA';
const TYPE_SPEED = 150;
const ERASE_SPEED = 85;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const CORD_COLOR = '#B98A4B';

function PouchIcon({ size = 18 }: { size?: number }) {
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
      <path d="M8.5 6c0-1.4.9-2.4 3.5-2.4S15.5 4.6 15.5 6" opacity="0.4" />
      <path d="M6 7.5c-1.1 3-1.7 6-1.7 8.2a7.7 7.7 0 0 0 15.4 0c0-2.2-.6-5.2-1.7-8.2Z" />
      <path d="M9 7.5h6" opacity="0.5" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Telas', detalle: 'exterior con cuerpo e interior para forrería (puede ser la misma)' },
  { cat: 'Soga', detalle: 'para fruncir y cerrar el bolso' },
  { cat: 'Hilo', detalle: 'al tono o en contraste' },
  { cat: 'Centímetro', detalle: 'para medir y marcar' },
  { cat: 'Alfileres o ganchos', detalle: 'para sujetar las piezas' },
  { cat: 'Para moldería', detalle: 'papel madera, lápiz, regla o escuadra, goma y tijera' },
];

const stepMeta = [
  { titulo: 'Cortar la moldería completa', texto: 'Cortar 4 rectángulos (2 en tela exterior y 2 en tela interior) y 4 cuadrados para los fuelles inferiores (2 en cada tela).' },
  { titulo: 'Separar las piezas de a dos', texto: 'Agrupar para llevar a la máquina: dos piezas para el frente (exterior) y dos para la interna (forro).' },
  { titulo: 'Marcar la abertura superior', texto: 'En la pieza del frente, marcar en ambos laterales superiores 6 cm desde arriba, y 2 cm más debajo de esa marca.' },
  { titulo: 'Coser el exterior dejando la abertura', texto: 'Costura recta uniendo laterales, base y fuelle, dejando sin coser los 2 cm que marcamos en ambos lados.' },
  { titulo: 'Coser el forro con su abertura', texto: 'Unir laterales y base del forro con costura recta, dejando una pequeña abertura en un lateral para dar vuelta el terminado. Unir el fuelle con costura recta.' },
  { titulo: 'Unir exterior y forro', texto: 'Meter el forro dentro del exterior, enfrentando los derechos, para luego unir ambas piezas desde la parte superior.' },
  { titulo: 'Dar vuelta y cerrar', texto: 'Una vez cosido, dar vuelta el bolso por la abertura del forro y cerrarla con costura recta.' },
  { titulo: 'Pespunte superior', texto: 'Hacer pespunte en la parte superior para sujetar frente con forrería y darle un acabado más prolijo.' },
  { titulo: 'Pasar la soga', texto: 'Cortar la soga (el largo a gusto) y pasarla por la abertura de 2 cm que dejamos en la parte superior.' },
  { titulo: 'Fruncir y atar', texto: 'Fruncir la tela tirando de la soga hasta que quede bien atada. ¡Tu bolso soga está listo!' },
];

export function Module12Practica() {
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
          Práctica · Módulo XII
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(2rem, 9vw, 6.8rem)',
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
              src="/modulo12/practica1.png"
              alt="Bolso soga a rayas rosa y marrón con cordón de algodón"
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
              src="/modulo12/practica2.png"
              alt="Bolso soga a rayas rosa y naranja con cordón de algodón"
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
            Un rectángulo grande que forma el cuerpo del bolso, y dos cuadrados chicos que arman los fuelles de la base.
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
              {/* ── Rectángulo: 35 × 41 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <rect x="40" y="32" width="140" height="164" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.6" />
                <text x="110" y="104" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Rectángulo</text>
                <text x="110" y="120" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.55">35 × 41 cm</text>
                <text x="110" y="134" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">cortar 4 (2 tela + 2 forro)</text>

                {/* Cota horizontal */}
                <line x1="40" y1="210" x2="180" y2="210" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="40" y1="205" x2="40" y2="215" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="180" y1="205" x2="180" y2="215" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="110" y="226" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">35 cm</text>

                {/* Cota vertical */}
                <line x1="26" y1="32" x2="26" y2="196" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="21" y1="32" x2="31" y2="32" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="21" y1="196" x2="31" y2="196" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="14" y="114" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 14 114)">41 cm</text>
              </motion.g>

              {/* ── Cuadrado: 8 × 8 cm — fuelle inferior ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease }}
              >
                <rect x="246" y="80" width="72" height="72" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                <text x="282" y="112" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill="#1a1a1a">Cuadrado</text>
                <text x="282" y="126" textAnchor="middle" fontSize="8.5" fontFamily="serif" fill="#1a1a1a" opacity="0.55">8 × 8 cm</text>
                <text x="282" y="139" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">cortar 4</text>

                {/* Cota horizontal */}
                <line x1="246" y1="166" x2="318" y2="166" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="246" y1="161" x2="246" y2="171" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="318" y1="161" x2="318" y2="171" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="282" y="182" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a">8 cm</text>

                {/* Anotación */}
                <line x1="246" y1="98" x2="220" y2="90" stroke={ACCENT} strokeWidth="0.9" />
                <text x="216" y="88" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>fuelle inferior</text>
                <text x="216" y="99" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.75">2 por bolso</text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              El rectángulo forma el cuerpo; los cuadrados arman los fuelles de la base.
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
                  <span className="text-dark"><PouchIcon size={19} /></span>
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
                  <svg width="100%" viewBox="0 0 330 175" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="20" y="18" width="150" height="34" rx="2" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                    <rect x="26" y="56" width="150" height="34" rx="2" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.85" />
                    <text x="101" y="106" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">Rectángulo × 4</text>
                    {[0, 1, 2, 3].map(k => (
                      <rect key={k} x={20 + k * 34} y="124" width="26" height="26" rx="2" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    ))}
                    <text x="101" y="164" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">Cuadrado × 4</text>
                    <text x="270" y="80" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                    <text x="270" y="100" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cortar en tela</text>
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
                  <svg width="100%" viewBox="0 0 330 140" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="30" y="40" width="90" height="60" rx="3" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                    <rect x="24" y="34" width="90" height="60" rx="3" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" opacity="0.9" />
                    <text x="69" y="68" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.55">Frente × 2</text>
                    <rect x="216" y="40" width="90" height="60" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <rect x="210" y="34" width="90" height="60" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.4" opacity="0.9" />
                    <text x="255" y="68" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.55">Interna × 2</text>
                    <text x="165" y="120" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">a la máquina, de a dos</text>
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
                    <rect x="130" y="24" width="70" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="165" y="100" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.5">Frente</text>

                    <line x1="118" y1="24" x2="126" y2="24" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="118" y1="48" x2="126" y2="48" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="122" y1="24" x2="122" y2="48" stroke="#1a1a1a" strokeWidth="0.9" />
                    <text x="112" y="40" textAnchor="end" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a">6 cm</text>

                    <line x1="118" y1="48" x2="126" y2="48" stroke={ACCENT} strokeWidth="1.1" />
                    <line x1="118" y1="56" x2="126" y2="56" stroke={ACCENT} strokeWidth="1.1" />
                    <line x1="122" y1="48" x2="122" y2="56" stroke={ACCENT} strokeWidth="1.8" />
                    <text x="112" y="60" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>2 cm</text>

                    <line x1="204" y1="24" x2="212" y2="24" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="204" y1="48" x2="212" y2="48" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="208" y1="24" x2="208" y2="48" stroke="#1a1a1a" strokeWidth="0.9" />
                    <text x="218" y="40" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a">6 cm</text>

                    <line x1="204" y1="48" x2="212" y2="48" stroke={ACCENT} strokeWidth="1.1" />
                    <line x1="204" y1="56" x2="212" y2="56" stroke={ACCENT} strokeWidth="1.1" />
                    <line x1="208" y1="48" x2="208" y2="56" stroke={ACCENT} strokeWidth="1.8" />
                    <text x="218" y="60" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>2 cm</text>

                    <text x="165" y="182" textAnchor="middle" fontSize="8" fill={ACCENT} fontFamily="sans-serif" opacity="0.8">marcar en ambos laterales superiores</text>
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
                  <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="130" y="24" width="70" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.2" />
                    <line x1="130" y1="24" x2="130" y2="48" stroke="#1a1a1a" strokeWidth="1.6" strokeDasharray="2 3" opacity="0.4" />
                    <line x1="200" y1="24" x2="200" y2="48" stroke="#1a1a1a" strokeWidth="1.6" strokeDasharray="2 3" opacity="0.4" />
                    <line x1="130" y1="48" x2="130" y2="164" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                    <line x1="200" y1="48" x2="200" y2="164" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                    <path d="M130 164 Q165 178 200 164" fill="none" stroke={SEAM_COLOR} strokeWidth="2.6" strokeLinecap="round" />

                    <text x="90" y="34" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">sin coser</text>
                    <text x="90" y="45" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">(2 cm)</text>
                    <text x="240" y="110" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">costura recta</text>
                    <text x="165" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">laterales + base + fuelle</text>
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
                    <text x="165" y="14" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.5">Forro</text>
                    <rect x="130" y="24" width="70" height="140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    <line x1="130" y1="24" x2="130" y2="90" stroke={SEAM_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="130" y1="90" x2="130" y2="112" stroke="#1a1a1a" strokeWidth="1.6" strokeDasharray="2 3" opacity="0.4" />
                    <line x1="130" y1="112" x2="130" y2="164" stroke={SEAM_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <line x1="200" y1="24" x2="200" y2="164" stroke={SEAM_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M130 164 Q165 178 200 164" fill="none" stroke={SEAM_COLOR} strokeWidth="2.4" strokeLinecap="round" />

                    <text x="118" y="104" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">abertura</text>
                    <text x="165" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">para dar vuelta el terminado</text>
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
                    <rect x="110" y="30" width="110" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="122" y="40" width="86" height="110" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.9" />
                    <line x1="110" y1="30" x2="220" y2="30" stroke={SEAM_COLOR} strokeWidth="3" strokeLinecap="round" />
                    <text x="165" y="20" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">unir desde arriba</text>
                    <text x="165" y="100" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">derecho con derecho</text>
                    <text x="165" y="180" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">forro adentro del exterior</text>
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
                  <svg width="100%" viewBox="0 0 330 170" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="120" y="24" width="90" height="120" rx="6" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <line x1="120" y1="70" x2="120" y2="92" stroke={SEAM_COLOR} strokeWidth="2.8" strokeLinecap="round" />
                    <text x="108" y="86" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">cerrar</text>

                    <path d="M235 60 a26 26 0 1 1 -6 -14" fill="none" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.5" />
                    <polygon points="223,42 233,44 227,52" fill="#1a1a1a" opacity="0.5" />
                    <text x="252" y="66" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">dar vuelta</text>

                    <text x="165" y="158" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">costura recta en la abertura</text>
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
                    <rect x="110" y="30" width="110" height="90" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <line x1="110" y1="42" x2="220" y2="42" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="4 3" />
                    <text x="165" y="34" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.85">pespunte</text>
                    <text x="165" y="86" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">une frente + forrería</text>
                    <text x="165" y="134" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">acabado más prolijo</text>
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
                  <svg width="100%" viewBox="0 0 330 170" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    <rect x="120" y="34" width="90" height="106" rx="4" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    <circle cx="120" cy="34" r="2" fill="#1a1a1a" opacity="0.4" />
                    <circle cx="210" cy="34" r="2" fill="#1a1a1a" opacity="0.4" />
                    <path d="M120 34 Q165 14 210 34" fill="none" stroke={CORD_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M120 34 Q100 70 108 130" fill="none" stroke={CORD_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M210 34 Q230 70 222 130" fill="none" stroke={CORD_COLOR} strokeWidth="2.4" strokeLinecap="round" />
                    <text x="165" y="8" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={CORD_COLOR} opacity="0.9">soga</text>
                    <text x="165" y="160" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">pasar por la abertura de 2 cm</text>
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
                    <path
                      d="M140 40 Q120 20 165 18 Q210 20 190 40 Q220 70 214 120 Q210 160 165 164 Q120 160 116 120 Q110 70 140 40 Z"
                      fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"
                    />
                    <circle cx="165" cy="28" r="6" fill="none" stroke={CORD_COLOR} strokeWidth="2.2" />
                    <path d="M159 32 Q145 50 149 66" fill="none" stroke={CORD_COLOR} strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M171 32 Q185 50 181 66" fill="none" stroke={CORD_COLOR} strokeWidth="2.2" strokeLinecap="round" />
                    <text x="165" y="100" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">¡Bolso terminado!</text>
                    <text x="165" y="182" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">fruncir la tela y atar la soga ♥</text>
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Un bolso, muchas variantes</p>
              <p className="text-cream text-base leading-relaxed">
                El tamaño de la abertura y el largo de la soga definen el fruncido final. Con telas lisas el bolso se ve minimalista; con rayas o estampados, se vuelve protagonista.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CarruselModulo12 />

    </div>
  );
}
