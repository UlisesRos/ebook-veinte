import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WORD = 'PORTA ROLLO';
const TYPE_SPEED = 130;
const ERASE_SPEED = 70;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const FOLD_COLOR = '#3B6FE0';
const CORD_COLOR = '#BFA98A';
const SILVER_FILL = '#DCDCDC';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';

function RolloIcon({ size = 19 }: { size?: number }) {
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
      <path d="M5.4 9.2h13.2l-1 10.4H6.4z" />
      <path d="M4.8 9.2c0-1.2 3.2-2.1 7.2-2.1s7.2.9 7.2 2.1" opacity="0.7" />
      <circle cx="18.4" cy="12" r="1.1" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Tela exterior', detalle: 'gabardina de algodón, gabardina acrílica, lienzo o tusor' },
  { cat: 'Tela interior', detalle: 'silver, para el forro' },
  { cat: 'Soga', detalle: 'para el cierre, pasada por las solapas' },
  { cat: 'Hilo', detalle: 'al tono o en contraste' },
  { cat: 'Alfiler o gancho', detalle: 'para pasar la soga por la solapa' },
  { cat: 'Centímetro', detalle: 'para medir y controlar las piezas' },
  { cat: 'Para moldería', detalle: 'papel madera, regla o escuadra, lápiz, goma y tijera' },
];

const stepMeta = [
  {
    titulo: 'Cortar la tela exterior',
    texto: 'Rectángulo de 15 × 40 cm (× 1), rectángulo de 10 × 20 cm (× 2) y círculo de 12 cm de diámetro (× 1).',
  },
  {
    titulo: 'Cortar la tela interior',
    texto: 'En tela silver: rectángulo de 15 × 40 cm (× 1) y círculo de 12 cm de diámetro (× 1).',
  },
  {
    titulo: 'Unir la base al cuerpo',
    texto:
      'Unir el círculo al rectángulo de 15 × 40 cm con costura recta. Repetir el mismo procedimiento con la tela del forro, pero dejando una pequeña abertura para dar vuelta después.',
  },
  {
    titulo: 'Armar las solapas',
    texto:
      'En los dos rectángulos de 10 × 20 cm, hacer dobladillo en sus dos extremos más cortos. Una vez cosido, doblar a la mitad y unir a los laterales.',
  },
  {
    titulo: 'Unir exterior y forro',
    texto:
      'Con todas las piezas externas ya unidas, enfrentamos derechos con el forro y unimos todo con costura recta por la parte superior.',
  },
  { titulo: 'Dar vuelta y cerrar', texto: 'Dar vuelta la pieza y cerrar la abertura con costura recta.' },
  { titulo: 'Pasar la soga', texto: 'Pasar la soga por la solapa. ¡Está terminado!' },
];

/* ── Paso: bloque con hilo conector y esquema que entra alternado ── */

function Paso({
  n,
  titulo,
  texto,
  children,
}: {
  n: number;
  titulo: string;
  texto: string;
  children: ReactNode;
}) {
  const nn = String(n).padStart(2, '0');
  const desdeIzquierda = n % 2 === 1;

  return (
    <div className="pt-0">
      {/* Hilo que conecta con el paso anterior */}
      {n > 1 && (
        <motion.div
          className="flex justify-center overflow-hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease }}
          aria-hidden="true"
        >
          <svg width="2" height="34" viewBox="0 0 2 34" fill="none" style={{ display: 'block' }}>
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="34"
              stroke={SEAM_COLOR}
              strokeWidth="1.4"
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease }}
        className="space-y-4 text-center pt-4"
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
          initial={{ opacity: 0, x: desdeIzquierda ? -26 : 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ type: 'spring', stiffness: 210, damping: 26, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Module15Practica() {
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
          Práctica · Módulo XV
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
            initial={{ opacity: 0, y: 26, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 2.5 }}
            transition={{ type: 'spring', stiffness: 210, damping: 23, delay: 0.15 }}
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
              zIndex: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.09)',
            }}
          >
            <img
              src="/modulo15/practica/rollo2.png"
              alt="Porta rollo de papel higiénico a rayas rosas y marrones, con la soga de cierre, sobre una superficie de cemento"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 26, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2.5 }}
            transition={{ type: 'spring', stiffness: 210, damping: 23, delay: 0.26 }}
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
              zIndex: 1,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            <img
              src="/modulo15/practica/rollo.png"
              alt="Porta rollo a rayas rosas y marrones apoyado en una mesada de baño de mármol, junto a dispensers, un espejo y una planta"
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
            Tres piezas: un rectángulo que forma el cuerpo, un círculo que cierra la base y una solapa chica
            que se corta dos veces para pasar la soga.
          </p>

          {/* SVG moldería — las tres piezas */}
          <div
            ref={moldeRef}
            className="w-full overflow-hidden bg-white"
            style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <svg
              viewBox="0 0 460 220"
              style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* ── Cuerpo: 15 × 40 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <rect x="34" y="40" width="160" height="60" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.6" />

                {/* Cota horizontal */}
                <line x1="34" y1="116" x2="194" y2="116" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="34" y1="111" x2="34" y2="121" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="194" y1="111" x2="194" y2="121" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="114" y="131" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">40 cm</text>

                {/* Cota vertical */}
                <line x1="22" y1="40" x2="22" y2="100" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="17" y1="40" x2="27" y2="40" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="17" y1="100" x2="27" y2="100" stroke="#1a1a1a" strokeWidth="0.9" />
                <text
                  x="11"
                  y="70"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="serif"
                  fill="#1a1a1a"
                  transform="rotate(-90 11 70)"
                >
                  15 cm
                </text>

                <text x="114" y="152" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">Cuerpo</text>
                <text x="114" y="166" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">
                  × 1 exterior + × 1 interior
                </text>
              </motion.g>

              {/* ── Solapa: 10 × 20 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.32, ease }}
              >
                <rect x="238" y="50" width="80" height="40" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.5" />

                <line x1="238" y1="116" x2="318" y2="116" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="238" y1="111" x2="238" y2="121" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="318" y1="111" x2="318" y2="121" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="278" y="131" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">20 cm</text>

                <line x1="226" y1="50" x2="226" y2="90" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="221" y1="50" x2="231" y2="50" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="221" y1="90" x2="231" y2="90" stroke="#1a1a1a" strokeWidth="0.9" />
                <text
                  x="215"
                  y="70"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="serif"
                  fill="#1a1a1a"
                  transform="rotate(-90 215 70)"
                >
                  10 cm
                </text>

                <text x="278" y="152" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">Solapa</text>
                <text x="278" y="166" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">
                  × 2 exterior
                </text>
              </motion.g>

              {/* ── Base: círculo de 12 cm de diámetro ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.54, ease }}
              >
                <circle cx="388" cy="70" r="30" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.6" />

                {/* Cota de diámetro */}
                <line x1="358" y1="70" x2="418" y2="70" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 2" />
                <line x1="358" y1="66" x2="358" y2="74" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="418" y1="66" x2="418" y2="74" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="388" y="131" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">⌀ 12 cm</text>

                <text x="388" y="152" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">Base</text>
                <text x="388" y="166" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">
                  × 1 exterior + × 1 interior
                </text>

                {/* Nota de encastre */}
                <line x1="36" y1="196" x2="146" y2="196" stroke={ACCENT} strokeWidth="0.9" opacity="0.5" />
                <text x="230" y="199" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>
                  el largo de 40 cm envuelve la base
                </text>
                <line x1="314" y1="196" x2="424" y2="196" stroke={ACCENT} strokeWidth="0.9" opacity="0.5" />
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4 max-w-md mx-auto leading-relaxed">
              El cuerpo se enrolla sobre la base y la solapa se corta dos veces, una para cada lateral. El
              contorno de un círculo de ⌀ 12 cm mide ≈ 37,7 cm: los 2 cm que faltan hasta los 40 son de margen.
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
                  <span className="text-dark"><RolloIcon size={19} /></span>
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

            <div className="pt-8">

              {/* Paso 1 — cortar exterior */}
              <Paso n={1} titulo={stepMeta[0].titulo} texto={stepMeta[0].texto}>
                <svg width="100%" viewBox="0 0 330 190" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <rect x="22" y="42" width="100" height="38" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <text x="72" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">15 × 40 — × 1</text>

                  {/* Dos solapas superpuestas */}
                  <rect x="152" y="48" width="50" height="25" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" opacity="0.75" />
                  <rect x="146" y="42" width="50" height="25" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.4" />
                  <text x="174" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">10 × 20 — × 2</text>

                  <circle cx="258" cy="58" r="17" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <text x="258" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">⌀ 12 — × 1</text>

                  <text x="300" y="130" textAnchor="middle" fontSize="20" fill="#1a1a1a">✂</text>
                  <text x="165" y="132" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">Tela exterior</text>
                  <text x="165" y="150" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    gabardina, lienzo o tusor
                  </text>
                </svg>
              </Paso>

              {/* Paso 2 — cortar interior */}
              <Paso n={2} titulo={stepMeta[1].titulo} texto={stepMeta[1].texto}>
                <svg width="100%" viewBox="0 0 330 170" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <rect x="58" y="42" width="100" height="38" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.4" />
                  <text x="108" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">15 × 40 — × 1</text>

                  <circle cx="228" cy="58" r="17" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.4" />
                  <text x="228" y="96" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.55">⌀ 12 — × 1</text>

                  <text x="165" y="126" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">Tela interior · silver</text>
                  <text x="165" y="144" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    sin solapas: el forro sólo lleva cuerpo y base
                  </text>
                </svg>
              </Paso>

              {/* Paso 3 — unir base al cuerpo */}
              <Paso n={3} titulo={stepMeta[2].titulo} texto={stepMeta[2].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Exterior */}
                  <path d="M42 48 H122 V128 A40 12 0 0 1 42 128 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.4" />
                  <ellipse cx="82" cy="48" rx="40" ry="12" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
                  <path d="M42 128 A40 12 0 0 0 122 128" fill="none" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                  <text x="82" y="160" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a">Exterior</text>

                  {/* Forro */}
                  <path d="M208 48 H288 V128 A40 12 0 0 1 208 128 Z" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.4" />
                  <ellipse cx="248" cy="48" rx="40" ry="12" fill="#EFEFEF" stroke="#1a1a1a" strokeWidth="1.2" />
                  <path d="M208 128 A40 12 0 0 0 250 139.6" fill="none" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                  <path d="M262 138 A40 12 0 0 0 288 128" fill="none" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="5 3" />
                  <text x="248" y="160" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a">Forro</text>

                  {/* Abertura */}
                  <line x1="256" y1="150" x2="256" y2="142" stroke={ACCENT} strokeWidth="0.9" />
                  <text x="256" y="180" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={ACCENT}>
                    dejar una abertura
                  </text>
                  <text x="82" y="180" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">
                    costura recta
                  </text>
                </svg>
              </Paso>

              {/* Paso 4 — armar solapas */}
              <Paso n={4} titulo={stepMeta[3].titulo} texto={stepMeta[3].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Solapa abierta con dobladillos en los lados cortos */}
                  <rect x="20" y="52" width="96" height="48" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.4" />
                  <line x1="28" y1="52" x2="28" y2="100" stroke={FOLD_COLOR} strokeWidth="1.6" />
                  <line x1="108" y1="52" x2="108" y2="100" stroke={FOLD_COLOR} strokeWidth="1.6" />
                  <line x1="68" y1="52" x2="68" y2="100" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <text x="68" y="42" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.5">mitad</text>
                  <text x="68" y="118" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR}>dobladillo en los 2 extremos</text>

                  {/* Flecha doblar */}
                  <line x1="134" y1="76" x2="176" y2="76" stroke={ACCENT} strokeWidth="1.2" />
                  <path d="M170 71 177 76 170 81" stroke={ACCENT} strokeWidth="1.2" fill="none" />
                  <text x="155" y="67" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>doblar</text>

                  {/* Solapa doblada, unida al lateral */}
                  <rect x="240" y="52" width="48" height="48" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.4" />
                  <line x1="240" y1="52" x2="240" y2="100" stroke={FOLD_COLOR} strokeWidth="2.4" />
                  <line x1="288" y1="52" x2="288" y2="100" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="4 3" />
                  <rect x="288" y="40" width="18" height="72" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.2" />
                  <text x="248" y="130" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill={FOLD_COLOR}>doblada a la mitad</text>
                  <text x="248" y="150" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">
                    unir al lateral
                  </text>
                  <text x="165" y="178" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    repetir con la segunda solapa, del otro lado
                  </text>
                </svg>
              </Paso>

              {/* Paso 5 — unir exterior y forro */}
              <Paso n={5} titulo={stepMeta[4].titulo} texto={stepMeta[4].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  {/* Forro por dentro */}
                  <path d="M116 56 H214 V150 A49 13 0 0 1 116 150 Z" fill={SILVER_FILL} stroke="#1a1a1a" strokeWidth="1.2" />
                  {/* Exterior por fuera */}
                  <path d="M104 44 H226 V152 A61 15 0 0 1 104 152 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" opacity="0.55" />
                  {/* Solapas */}
                  <rect x="88" y="52" width="16" height="40" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
                  <rect x="226" y="52" width="16" height="40" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
                  {/* Costura superior */}
                  <ellipse cx="165" cy="44" rx="61" ry="15" fill="none" stroke={SEAM_COLOR} strokeWidth="2.2" strokeDasharray="6 4" />
                  <text x="165" y="24" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                    costura recta por la parte superior
                  </text>
                  <text x="165" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    derecho con derecho, el forro adentro
                  </text>
                </svg>
              </Paso>

              {/* Paso 6 — dar vuelta y cerrar */}
              <Paso n={6} titulo={stepMeta[5].titulo} texto={stepMeta[5].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <path d="M108 46 H222 V150 A57 15 0 0 1 108 150 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                  <ellipse cx="165" cy="46" rx="57" ry="15" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.3" />
                  <rect x="92" y="54" width="16" height="40" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
                  <rect x="222" y="54" width="16" height="40" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />

                  {/* Abertura cerrada */}
                  <line x1="140" y1="163" x2="190" y2="163" stroke={SEAM_COLOR} strokeWidth="2" strokeDasharray="4 3" />
                  <line x1="165" y1="163" x2="165" y2="176" stroke={ACCENT} strokeWidth="0.9" />
                  <text x="165" y="190" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={SEAM_COLOR} opacity="0.9">
                    cerrar la abertura con costura recta
                  </text>
                  <text x="165" y="26" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    ya dado vuelta
                  </text>
                </svg>
              </Paso>

              {/* Paso 7 — pasar la soga */}
              <Paso n={7} titulo={stepMeta[6].titulo} texto={stepMeta[6].texto}>
                <svg width="100%" viewBox="0 0 330 200" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                  <path d="M108 56 H222 V152 A57 15 0 0 1 108 152 Z" fill={FABRIC} stroke="#1a1a1a" strokeWidth="1.5" />
                  <ellipse cx="165" cy="56" rx="57" ry="15" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.3" />
                  <rect x="92" y="62" width="16" height="38" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />
                  <rect x="222" y="62" width="16" height="38" fill={FABRIC_2} stroke="#1a1a1a" strokeWidth="1.2" />

                  {/* Soga pasando por las solapas */}
                  <path
                    d="M92 74 Q60 74 58 90 Q56 106 78 108"
                    stroke={CORD_COLOR}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M108 74 H222" stroke={CORD_COLOR} strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                  <path
                    d="M238 74 Q270 74 272 90 Q274 106 252 108"
                    stroke={CORD_COLOR}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="272" cy="92" r="3.2" fill={CORD_COLOR} stroke="none" />

                  <text x="165" y="36" textAnchor="middle" fontSize="8.5" fontFamily="sans-serif" fill={CORD_COLOR}>
                    la soga pasa por las dos solapas
                  </text>
                  <text x="165" y="122" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">
                    ¡Porta rollo terminado!
                  </text>
                  <text x="165" y="190" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.45">
                    al tirar de la soga, la boca se frunce ♥
                  </text>
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
                Este proyecto vive en el baño, así que se va a lavar: si elegís gabardina de algodón, lienzo o
                tusor, lavá y planchá la tela antes de cortar. Si no, la base circular deja de coincidir con el
                cuerpo en el primer lavado.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
