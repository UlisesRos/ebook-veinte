import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo14 } from '../components/CarruselModulo14';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WORD = 'TOTEBAG XL';
const TYPE_SPEED = 130;
const ERASE_SPEED = 70;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const FOLD_COLOR = '#3B6FE0';
const STRAP_COLOR = '#B08D57';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';

function ToteBagIcon({ size = 19 }: { size?: number }) {
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
      <path d="M4.6 8h14.8l-1.1 11.4H5.7z" />
      <path d="M8.6 8V6.4a3.4 3.4 0 0 1 6.8 0V8" opacity="0.65" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Tela con cuerpo', detalle: 'gabardina de algodón, lona o tusor grueso' },
  { cat: 'Hilo', detalle: 'al tono o en contraste' },
  { cat: 'Para la manija', detalle: 'la misma tela, o cinta de algodón / mochilera' },
  { cat: 'Alfileres o broches', detalle: 'para sujetar las piezas antes de coser' },
  { cat: 'Para moldería', detalle: 'papel madera, lápiz, goma, tijera, regla o escuadra y centímetro' },
];

const stepMeta = [
  { titulo: 'Cortar la tela', texto: 'Colocar el molde sobre la tela y cortar × 1 doble.' },
  {
    titulo: 'Marcar las líneas',
    texto: 'Marcar en los laterales, de arriba hacia abajo, 3 líneas de a 2 cm. Sobre la base (tela doble) sumar dos líneas más de 2 cm con 4 cm de alto, igual que en la moldería.',
  },
  {
    titulo: 'Recortar las esquinas',
    texto: 'En ambas esquinas recortar recto según indica el molde (línea de 4 cm) y después seguir por la segunda línea recta, únicamente sobre la tela superior.',
  },
  { titulo: 'Dobladillo y bies', texto: 'Una vez recortado, hacemos el dobladillo y formamos el bies en los laterales.' },
  { titulo: 'Coser el bies', texto: 'Ya formado el bies, realizamos la costura recta.' },
  {
    titulo: 'Armar la base',
    texto: 'Abrimos la base y centramos el bies con el sobrante de tela. Hacemos dobladillo y volvemos a coser en ambas esquinas.',
  },
  {
    titulo: 'Borde superior y manijas',
    texto: 'Dobladillo de 1 cm en la parte superior del bolso para emprolijar los bordes, y colocar la cinta mochilera como manija.',
  },
  { titulo: 'Asegurar las manijas', texto: 'Coser pespunte recto y asegurar las manijas. ¡Está lista!' },
];

/* ── Paso: bloque reutilizable con reveal del esquema por clip-path ── */

function Paso({
  n,
  titulo,
  texto,
  delay = 0,
  children,
}: {
  n: number;
  titulo: string;
  texto: string;
  delay?: number;
  children: ReactNode;
}) {
  const nn = String(n).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease }}
      className="pt-0 space-y-4 text-center"
    >
      <span
        className="font-display text-dark/30 select-none leading-none block"
        style={{ fontSize: '2.5rem', fontWeight: 700 }}
      >
        {nn}
      </span>
      <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° {n}</p>
      <h3 className="font-display text-xl text-dark leading-snug">{titulo}</h3>
      <p className="font-body text-sm text-dark/70 leading-relaxed max-w-xl mx-auto">{texto}</p>
      <motion.div
        className="w-full overflow-hidden pt-6"
        initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.4 }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.75, delay: delay + 0.12, ease }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Module14Practica() {
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
          Práctica · Módulo XIV
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
          <motion.div
            initial={{ opacity: 0, y: 22, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.15 }}
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              translateY: '-50%',
              width: '52%',
              height: '90%',
              background: 'white',
              borderRadius: '10px',
              padding: '7px',
              outline: '1px solid hsl(var(--border))',
              zIndex: 1,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            <img
              src="/modulo14/practica/tote1.png"
              alt="Totebag XL de lona a rayas azules y blancas con manijas de cinta de algodón cruda"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24, delay: 0.26 }}
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              translateY: '-50%',
              width: '52%',
              height: '90%',
              background: 'white',
              borderRadius: '10px',
              padding: '7px',
              outline: '1px solid hsl(var(--border))',
              zIndex: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
            }}
          >
            <img
              src="/modulo14/practica/tote3.png"
              alt="Totebag XL a rayas amarillas y blancas con sol bordado, apoyada contra un escalón de cemento"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }}
            />
          </motion.div>
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
            Un solo rectángulo, cortado × 1 doble. Las líneas de los laterales arman el bies; las dos líneas
            cortas de la base arman las esquinas.
          </p>

          {/* SVG moldería — réplica del molde en papel madera */}
          <div
            ref={moldeRef}
            className="w-full overflow-hidden bg-white"
            style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <svg
              viewBox="0 0 460 362"
              style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* ── Rectángulo base: 60 × 48 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <rect x="80" y="60" width="300" height="240" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.7" />

                {/* Zonas de esquina (van debajo de las líneas) */}
                <rect x="80" y="280" width="50" height="20" fill={FABRIC_2} stroke="none" />
                <rect x="330" y="280" width="50" height="20" fill={FABRIC_2} stroke="none" />

                {/* Rótulo central */}
                <text x="230" y="164" textAnchor="middle" fontSize="15" fontFamily="serif" fill="#1a1a1a">
                  TOTE XL ♥
                </text>
                <text x="230" y="182" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.55">
                  (x1 doble)
                </text>

                {/* Eje de centro */}
                <line x1="230" y1="60" x2="230" y2="140" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.35" />
                <text x="234" y="76" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.4">centro</text>

                {/* Cota horizontal — 60 cm */}
                <line x1="80" y1="318" x2="380" y2="318" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="80" y1="313" x2="80" y2="323" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="380" y1="313" x2="380" y2="323" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="230" y="333" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">60 cm de ancho</text>

                {/* Cota vertical — 48 cm */}
                <line x1="62" y1="60" x2="62" y2="300" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="57" y1="60" x2="67" y2="60" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="57" y1="300" x2="67" y2="300" stroke="#1a1a1a" strokeWidth="0.9" />
                <text
                  x="50"
                  y="180"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="serif"
                  fill="#1a1a1a"
                  transform="rotate(-90 50 180)"
                >
                  48 cm de alto
                </text>
              </motion.g>

              {/* ── Laterales: 3 líneas de a 2 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.34, ease }}
              >
                {/* Izquierda */}
                <line x1="90" y1="60" x2="90" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="100" y1="60" x2="100" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="110" y1="60" x2="110" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <text x="85" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">1</text>
                <text x="95" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">2</text>
                <text x="105" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">3</text>

                {/* Derecha */}
                <line x1="370" y1="60" x2="370" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="360" y1="60" x2="360" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="350" y1="60" x2="350" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <text x="375" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">1</text>
                <text x="365" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">2</text>
                <text x="355" y="272" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">3</text>

                {/* Anotación superior */}
                <line x1="100" y1="42" x2="100" y2="56" stroke={ACCENT} strokeWidth="0.9" />
                <path d="M97 52 100 57 103 52" stroke={ACCENT} strokeWidth="0.9" fill="none" />
                <text x="106" y="38" textAnchor="start" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  3 líneas de a 2 cm
                </text>
                <line x1="360" y1="42" x2="360" y2="56" stroke={ACCENT} strokeWidth="0.9" />
                <path d="M357 52 360 57 363 52" stroke={ACCENT} strokeWidth="0.9" fill="none" />
                <text x="354" y="38" textAnchor="end" fontSize="9" fontFamily="sans-serif" fill={ACCENT} opacity="0.8">
                  en ambos laterales
                </text>
              </motion.g>

              {/* ── Base: 2 líneas más de a 2 cm × 4 cm de alto ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.58, ease }}
              >
                {/* Esquina izquierda */}
                <line x1="120" y1="280" x2="120" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="130" y1="280" x2="130" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="80" y1="280" x2="130" y2="280" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2.5" opacity="0.7" />
                <text x="115" y="294" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">4</text>
                <text x="125" y="294" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">5</text>

                {/* Esquina derecha */}
                <line x1="340" y1="280" x2="340" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="330" y1="280" x2="330" y2="300" stroke={FOLD_COLOR} strokeWidth="1" opacity="0.85" />
                <line x1="330" y1="280" x2="380" y2="280" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2.5" opacity="0.7" />
                <text x="345" y="294" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">4</text>
                <text x="335" y="294" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.6">5</text>

                {/* Cota de los 4 cm de alto */}
                <line x1="140" y1="280" x2="140" y2="300" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.6" />
                <line x1="136" y1="280" x2="144" y2="280" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.6" />
                <line x1="136" y1="300" x2="144" y2="300" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.6" />
                <text x="146" y="293" textAnchor="start" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">4 cm</text>

                {/* Tela doble sobre la base */}
                <text x="245" y="292" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.75">
                  TELA DOBLE
                </text>
                <path d="M283 286 286 292 289 286" stroke="#1a1a1a" strokeWidth="0.9" fill="none" opacity="0.6" />
                <line x1="286" y1="284" x2="286" y2="292" stroke="#1a1a1a" strokeWidth="0.9" opacity="0.6" />

                {/* Anotación inferior */}
                <line x1="150" y1="342" x2="122" y2="304" stroke={ACCENT} strokeWidth="0.9" />
                <path d="M120 309 121.6 303 127 305" stroke={ACCENT} strokeWidth="0.9" fill="none" />
                <text x="156" y="348" textAnchor="start" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  en la base: 2 líneas más de a 2 cm, con 4 cm de alto
                </text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              Moldería × 1 doble: el borde inferior apoya sobre el doblez de la tela.
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
                  <span className="text-dark"><ToteBagIcon size={19} /></span>
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

              {/* Paso 1 — cortar x1 doble */}
              <Paso n={1} titulo={stepMeta[0].titulo} texto={stepMeta[0].texto}>
                <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Tela debajo (doble) */}
                  <rect x="58" y="46" width="180" height="110" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.1" opacity="0.85" />
                  {/* Molde de papel encima */}
                  <rect x="50" y="38" width="180" height="110" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                  <rect x="50" y="38" width="180" height="110" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
                  <text x="140" y="90" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">molde</text>
                  <text x="140" y="104" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">60 × 48 cm</text>
                  <text x="285" y="92" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                  <text x="285" y="112" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.4">cortar × 1 doble</text>
                  <text x="140" y="176" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">tela doblada: dos capas</text>
                </svg>
              </Paso>

              {/* Paso 2 — marcar las líneas */}
              <Paso n={2} titulo={stepMeta[1].titulo} texto={stepMeta[1].texto} delay={0.05}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <rect x="55" y="30" width="220" height="130" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />

                  {/* 3 líneas de a 2 cm en cada lateral */}
                  <line x1="63" y1="30" x2="63" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="71" y1="30" x2="71" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="79" y1="30" x2="79" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="267" y1="30" x2="267" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="259" y1="30" x2="259" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="251" y1="30" x2="251" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />

                  {/* 2 líneas más en la base, 4 cm de alto */}
                  <line x1="87" y1="144" x2="87" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="95" y1="144" x2="95" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="243" y1="144" x2="243" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="235" y1="144" x2="235" y2="160" stroke={FOLD_COLOR} strokeWidth="1" />
                  <line x1="55" y1="144" x2="95" y2="144" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 2.5" opacity="0.6" />
                  <line x1="235" y1="144" x2="275" y2="144" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 2.5" opacity="0.6" />

                  <text x="165" y="90" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">de arriba hacia abajo</text>
                  <text x="165" y="155" textAnchor="middle" fontSize="8" fontFamily="serif" fill="#1a1a1a" opacity="0.6">TELA DOBLE</text>
                  <text x="71" y="180" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR}>3 × 2 cm</text>
                  <text x="140" y="194" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR} opacity="0.85">+ 2 líneas de 2 cm × 4 cm de alto</text>
                </svg>
              </Paso>

              {/* Paso 3 — recortar esquinas */}
              <Paso n={3} titulo={stepMeta[2].titulo} texto={stepMeta[2].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Silueta con las esquinas recortadas en escalón */}
                  <path
                    d="M55 30 H275 V160 H243 V144 H87 V160 H55 Z"
                    fill={FABRIC}
                    stroke="#1a1a1a"
                    strokeWidth="1.5"
                  />
                  {/* Cortes marcados */}
                  <path d="M87 144 V160" stroke={SEAM_COLOR} strokeWidth="2" />
                  <path d="M87 144 H55" stroke={SEAM_COLOR} strokeWidth="2" />
                  <path d="M243 144 V160" stroke={SEAM_COLOR} strokeWidth="2" />
                  <path d="M243 144 H275" stroke={SEAM_COLOR} strokeWidth="2" />

                  <text x="165" y="92" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">recorte recto en ambas esquinas</text>
                  <text x="60" y="184" textAnchor="start" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR}>línea de 4 cm</text>
                  <text x="270" y="184" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.85">sólo la tela superior</text>
                  <text x="300" y="80" textAnchor="middle" fontSize="20" fill="#1a1a1a">✂</text>
                </svg>
              </Paso>

              {/* Paso 4 — dobladillo y bies */}
              <Paso n={4} titulo={stepMeta[3].titulo} texto={stepMeta[3].texto} delay={0.05}>
                <svg width="100%" viewBox="0 0 330 180" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Corte del lateral, capa por capa */}
                  <rect x="120" y="34" width="90" height="112" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <rect x="120" y="34" width="26" height="112" fill={FABRIC_2} stroke="none" />
                  <line x1="133" y1="34" x2="133" y2="146" stroke={FOLD_COLOR} strokeWidth="1.4" strokeDasharray="5 3" />
                  <line x1="146" y1="34" x2="146" y2="146" stroke={FOLD_COLOR} strokeWidth="1.6" />

                  {/* Flechas de plegado */}
                  <path d="M98 74 Q114 62 130 74" stroke={FOLD_COLOR} strokeWidth="1.2" fill="none" />
                  <path d="M127 70 131 75 125 77" stroke={FOLD_COLOR} strokeWidth="1.2" fill="none" />
                  <path d="M98 108 Q120 96 143 108" stroke={FOLD_COLOR} strokeWidth="1.2" fill="none" />
                  <path d="M140 104 144 109 138 111" stroke={FOLD_COLOR} strokeWidth="1.2" fill="none" />

                  <text x="92" y="76" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR}>doblar</text>
                  <text x="92" y="110" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR}>y de nuevo</text>
                  <text x="228" y="88" textAnchor="start" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">bies formado</text>
                  <text x="228" y="102" textAnchor="start" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">en los laterales</text>
                  <text x="165" y="170" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">corte del lateral, visto de frente</text>
                </svg>
              </Paso>

              {/* Paso 5 — coser el bies */}
              <Paso n={5} titulo={stepMeta[4].titulo} texto={stepMeta[4].texto}>
                <svg width="100%" viewBox="0 0 330 180" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <rect x="105" y="30" width="120" height="116" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <rect x="105" y="30" width="14" height="116" fill={FABRIC_2} stroke={FOLD_COLOR} strokeWidth="1.4" />
                  <rect x="211" y="30" width="14" height="116" fill={FABRIC_2} stroke={FOLD_COLOR} strokeWidth="1.4" />
                  <line x1="116" y1="30" x2="116" y2="146" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                  <line x1="214" y1="30" x2="214" y2="146" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                  <text x="165" y="92" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">bies ya formado</text>
                  <text x="165" y="168" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">costura recta sobre el bies</text>
                </svg>
              </Paso>

              {/* Paso 6 — armar la base */}
              <Paso n={6} titulo={stepMeta[5].titulo} texto={stepMeta[5].texto} delay={0.05}>
                <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Base abierta: dos triángulos de esquina */}
                  <path d="M40 46 H150 L95 104 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <line x1="46" y1="52" x2="144" y2="52" stroke={FOLD_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                  <line x1="46" y1="60" x2="144" y2="60" stroke={SEAM_COLOR} strokeWidth="1.8" strokeDasharray="4 3" />
                  <line x1="95" y1="46" x2="95" y2="104" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.5" />

                  <path d="M180 46 H290 L235 104 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <line x1="186" y1="52" x2="284" y2="52" stroke={FOLD_COLOR} strokeWidth="2.6" strokeLinecap="round" />
                  <line x1="186" y1="60" x2="284" y2="60" stroke={SEAM_COLOR} strokeWidth="1.8" strokeDasharray="4 3" />
                  <line x1="235" y1="46" x2="235" y2="104" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 3" opacity="0.5" />

                  <text x="165" y="132" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">
                    centrar el bies con el sobrante de tela
                  </text>
                  <text x="165" y="150" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">
                    dobladillo y costura en ambas esquinas
                  </text>
                  <text x="165" y="176" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.4">
                    base abierta, vista desde adentro
                  </text>
                </svg>
              </Paso>

              {/* Paso 7 — borde superior y manijas */}
              <Paso n={7} titulo={stepMeta[6].titulo} texto={stepMeta[6].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Cuerpo del bolso */}
                  <path d="M100 66 H230 L222 176 H108 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                  {/* Dobladillo de 1 cm */}
                  <line x1="100" y1="76" x2="230" y2="76" stroke={FOLD_COLOR} strokeWidth="1.6" strokeDasharray="5 3" />
                  {/* Manijas */}
                  <path d="M130 66 Q130 26 165 26 Q200 26 200 66" stroke={STRAP_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />
                  <text x="272" y="72" textAnchor="start" fontSize="7.5" fontFamily="sans-serif" fill={FOLD_COLOR}>dobladillo</text>
                  <text x="272" y="83" textAnchor="start" fontSize="7.5" fontFamily="sans-serif" fill={FOLD_COLOR} opacity="0.75">de 1 cm</text>
                  <line x1="98" y1="42" x2="126" y2="46" stroke={STRAP_COLOR} strokeWidth="0.9" opacity="0.7" />
                  <text x="94" y="44" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={STRAP_COLOR}>cinta mochilera</text>
                  <text x="165" y="194" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">emprolijar el borde superior</text>
                </svg>
              </Paso>

              {/* Paso 8 — pespunte y manijas aseguradas */}
              <Paso n={8} titulo={stepMeta[7].titulo} texto={stepMeta[7].texto} delay={0.05}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <path d="M100 66 H230 L222 176 H108 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                  <line x1="100" y1="76" x2="230" y2="76" stroke={SEAM_COLOR} strokeWidth="1.8" strokeDasharray="5 3" />
                  <path d="M130 66 Q130 26 165 26 Q200 26 200 66" stroke={STRAP_COLOR} strokeWidth="5" fill="none" strokeLinecap="round" />

                  {/* Refuerzo en cruz sobre cada manija */}
                  <rect x="124" y="66" width="12" height="16" fill="none" stroke={SEAM_COLOR} strokeWidth="1.2" />
                  <path d="M124 66 136 82M136 66 124 82" stroke={SEAM_COLOR} strokeWidth="1.2" />
                  <rect x="194" y="66" width="12" height="16" fill="none" stroke={SEAM_COLOR} strokeWidth="1.2" />
                  <path d="M194 66 206 82M206 66 194 82" stroke={SEAM_COLOR} strokeWidth="1.2" />

                  <text x="165" y="128" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">¡Totebag XL terminada!</text>
                  <text x="165" y="194" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">pespunte recto y manijas aseguradas ♥</text>
                </svg>
              </Paso>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Aplicá la teoría</p>
              <p className="text-cream text-base leading-relaxed">
                Este es el proyecto ideal para estrenar el equipo: tijeras afiladas para el corte doble,
                escuadra y tiza para marcar las líneas de a 2 cm, y clips en vez de alfileres para sostener
                el bies cuando la tela toma cuerpo.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CarruselModulo14 />

    </div>
  );
}
