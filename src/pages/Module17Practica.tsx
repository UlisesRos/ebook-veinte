import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Layers, Pencil, Ribbon, Ruler, Scissors, Spool, Square } from 'lucide-react';
import { Draw, Fade, Paso, ZipperIcon } from '../components/PracticaUI';
import { CarruselModulo17 } from '../components/CarruselModulo17';

const WORD = 'BOLSILLO';
const TYPE_SPEED = 130;
const ERASE_SPEED = 70;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const BIES_COLOR = '#3B6FE0';
const ZIP_COLOR = '#6b7280';
const CRISTAL_FILL = '#D8E8F2';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';
const INK = '#1a1a1a';

type IconCmp = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

const MATERIALES: { cat: string; detalle: string; Icon: IconCmp }[] = [
  { cat: 'Tela exterior', detalle: 'con cuerpo: cordura, gabardina de algodón, lona, etc.', Icon: Layers },
  { cat: 'Cristal transparente', detalle: 'para el bolsillo de 24 × 15 cm', Icon: Square },
  { cat: 'Bies', detalle: 'para los bordes y el cierre', Icon: Ribbon },
  { cat: 'Hilo', detalle: 'al tono o en contraste', Icon: Spool },
  { cat: 'Cierre 6 mm', detalle: 'el cursor del cierre', Icon: ZipperIcon },
  { cat: 'Tira de cierre 6 mm', detalle: 'la cinta con los dientes', Icon: ZipperIcon },
  { cat: 'Abrojo autoadhesivo', detalle: 'para cerrar la solapa', Icon: Square },
];

const HERRAMIENTAS = ['Papel madera', 'Lápiz', 'Goma', 'Tijera', 'Regla, escuadra o centímetro'];

/* Moldería: cuatro rectángulos del mismo ancho (24 cm) y distinto alto */
const MOLDES: { alto: number; detalle?: string }[] = [
  { alto: 4 },
  { alto: 15, detalle: 'cristal' },
  { alto: 21 },
  { alto: 37 },
];

const stepMeta = [
  {
    titulo: 'Recortar los moldes',
    texto: 'Recortar todos los moldes × 1. El molde de 24 × 15 cm se corta únicamente en cristal transparente.',
  },
  {
    titulo: 'Bies y cierre',
    texto: 'Colocar bies y cierre en un extremo del molde de 24 × 15 cm (cristal) y en un extremo del molde de 24 × 4 cm.',
  },
  { titulo: 'Unir con la tira de cierre', texto: 'Colocar la tira de cierre para unir las dos piezas por el cierre.' },
  {
    titulo: 'Sumar el molde de 24 × 21',
    texto: 'Unir esas piezas con el molde de 24 × 21 cm: coser todo por el borde para juntar las piezas.',
  },
  { titulo: 'Bies en la parte superior', texto: 'Colocar bies en la parte superior.' },
  {
    titulo: 'Coser a la tela de 24 × 37',
    texto: 'Coser esa pieza a la tela restante de 24 × 37 cm, todo por el borde.',
  },
  { titulo: 'Bies en todos los extremos', texto: 'Para terminar, colocar bies en todos los extremos.' },
  { titulo: 'Abrojo en la solapa', texto: 'Pegar abrojo autoadhesivo en la solapa.' },
];

/* Marco común de los esquemas */
const SVG_STYLE = { maxWidth: 380, margin: '0 auto', display: 'block', width: '100%' } as const;

/* Unión de las tres piezas del frente (24×21 arriba, tira de 24×4 con cierre y cristal de 24×15 abajo).
   Esquema sin escala. */
function Frente({ x, y, w = 110 }: { x: number; y: number; w?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="40" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
      <rect x={x} y={y + 40} width={w} height="12" fill={FABRIC_2} stroke={INK} strokeWidth="1.3" />
      <rect x={x} y={y + 52} width={w} height="48" fill={CRISTAL_FILL} fillOpacity="0.85" stroke={INK} strokeWidth="1.3" />
      <line x1={x} y1={y + 46} x2={x + w} y2={y + 46} stroke={ZIP_COLOR} strokeWidth="3.5" strokeDasharray="3 2" />
    </g>
  );
}

export function Module17Practica() {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduce ? WORD : '');
  const [erasing, setErasing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (reduce) return;
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
  }, [displayed, erasing, reduce]);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <MotionConfig reducedMotion="user">
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
            Práctica · Módulo XVII
          </p>

          <div
            className="font-display text-dark text-center leading-none select-none"
            style={{
              fontSize: 'clamp(2rem, 9vw, 5.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              minHeight: '1.1em',
            }}
            aria-label={WORD}
          >
            <span aria-hidden="true">{displayed}</span>
            <span
              aria-hidden="true"
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
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="font-display italic text-dark text-center leading-none"
            style={{ fontSize: 'clamp(1.3rem, 4vw, 2.2rem)', fontWeight: 400, marginTop: '0.6rem', marginBottom: '3vh' }}
          >
            de reposera
          </motion.p>

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
                src="/modulo17/practica/practica1.jpg"
                alt="Bolsillo de reposera de rayas rojas y rosas con un cuaderno y productos de cuidado personal, colgado de una reposera de ratán azul frente al mar"
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
                src="/modulo17/practica/practica2.png"
                alt="Bolsillo de reposera con el bolsillo de cristal y un cierre, colgado de una silla de playa de madera sobre la arena"
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
              Cuatro rectángulos del mismo ancho, 24 cm, y de distinto alto. Sólo el de 24 × 15 cm se corta en
              cristal transparente.
            </p>

            <div className="bg-white px-4 py-8 sm:px-8" style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}>
              <div className="flex items-end justify-center gap-3 sm:gap-6 mx-auto" style={{ maxWidth: 480 }}>
                {MOLDES.map((m, i) => (
                  <div key={m.alto} className="flex-1 flex flex-col items-center min-w-0">
                    <motion.div
                      className="w-full relative"
                      style={{
                        aspectRatio: `24 / ${m.alto}`,
                        background: m.detalle
                          ? `repeating-linear-gradient(135deg, ${CRISTAL_FILL} 0 6px, #ffffff 6px 12px)`
                          : FABRIC,
                        outline: `1.5px solid ${INK}`,
                        outlineOffset: '-1px',
                      }}
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.7, delay: i * 0.12, ease }}
                    />
                    <div className="h-3" />
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.45, delay: 0.35 + i * 0.12, ease }}
                      className="font-display text-dark text-center leading-tight"
                      style={{ fontSize: 'clamp(0.85rem, 3.2vw, 1.1rem)' }}
                    >
                      24 × {m.alto}
                    </motion.p>
                    <p className="text-[11px] text-dark/45 mt-0.5 h-4 text-center">{m.detalle ?? ''}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-dark/45 italic mt-6 max-w-md mx-auto leading-relaxed">
                Medidas en centímetros, ancho × alto. Los rectángulos están dibujados en proporción entre sí: el de
                24 × 4 es apenas una tira y el de 24 × 37 es la pieza más larga.
              </p>
            </div>

            {/* Materiales */}
            <div className="space-y-6 pt-4">
              <div className="space-y-1 text-center">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">02. Lo que necesitás</p>
                <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Materiales</h2>
              </div>

              <ul className="grid sm:grid-cols-2 sm:gap-x-10">
                {MATERIALES.map(({ cat, detalle, Icon }, i) => (
                  <motion.li
                    key={cat}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.45, delay: (i % 2) * 0.07, ease }}
                    className="group flex items-center gap-4 py-4 border-b border-border/30"
                  >
                    <span
                      className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 text-dark transition-colors duration-200 [@media(hover:hover)]:group-hover:bg-dark [@media(hover:hover)]:group-hover:text-cream"
                      style={{ outline: '1px solid hsl(var(--border) / 0.7)' }}
                    >
                      <Icon size={16} strokeWidth={1.6} />
                    </span>
                    <span className="font-body text-base text-dark leading-snug">
                      <span className="font-medium">{cat}</span>
                      <span className="text-dark/45"> · </span>
                      <span className="text-dark/70">{detalle}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, ease }}
                className="bg-white px-6 py-5"
                style={{ outline: '1px solid hsl(var(--border) / 0.5)' }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Ruler size={16} strokeWidth={1.6} className="text-dark/55" />
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Para la moldería</p>
                  <Pencil size={14} strokeWidth={1.6} className="text-dark/35 ml-auto" />
                  <Scissors size={14} strokeWidth={1.6} className="text-dark/35" />
                </div>
                <ul className="flex flex-wrap gap-2">
                  {HERRAMIENTAS.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24, delay: i * 0.06 }}
                      className="font-body text-sm text-dark px-4 py-2 rounded-full bg-cream"
                      style={{ outline: '1px solid hsl(var(--border) / 0.7)' }}
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Pasos */}
            <div className="space-y-0 pt-4">
              <div className="space-y-1 text-center">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">03. Proceso</p>
                <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Pasos</h2>
              </div>

              <div className="pt-8">

                {/* Paso 1: recortar los moldes */}
                <Paso n={1} titulo={stepMeta[0].titulo} texto={stepMeta[0].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="22" y="121" width="56" height="9" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <rect x="100" y="95" width="56" height="35" fill={CRISTAL_FILL} fillOpacity="0.9" stroke={INK} strokeWidth="1.3" />
                      <rect x="178" y="81" width="56" height="49" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <rect x="256" y="44" width="56" height="86" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <Fade revealed={r} delay={0.25}>
                        <text x="50" y="148" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 4</text>
                        <text x="128" y="148" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 15</text>
                        <text x="206" y="148" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 21</text>
                        <text x="284" y="148" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 37</text>
                        <text x="128" y="162" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={BIES_COLOR}>en cristal</text>
                        <text x="165" y="186" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={INK} opacity="0.55">
                          todos × 1
                        </text>
                        <text x="294" y="34" fontSize="17" fill={INK}>✂</text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 2: bies y cierre en un extremo */}
                <Paso n={2} titulo={stepMeta[1].titulo} texto={stepMeta[1].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="24" y="56" width="112" height="70" fill={CRISTAL_FILL} fillOpacity="0.9" stroke={INK} strokeWidth="1.3" />
                      <rect x="192" y="90" width="112" height="18" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <Draw d="M24 56 H136" revealed={r} delay={0.2} stroke={BIES_COLOR} strokeWidth={5} />
                      <Draw d="M192 108 H304" revealed={r} delay={0.45} stroke={BIES_COLOR} strokeWidth={5} />
                      <Fade revealed={r} delay={0.8}>
                        <line x1="24" y1="65" x2="136" y2="65" stroke={ZIP_COLOR} strokeWidth="3.5" strokeDasharray="3 2" />
                        <line x1="192" y1="99" x2="304" y2="99" stroke={ZIP_COLOR} strokeWidth="3.5" strokeDasharray="3 2" />
                        <text x="80" y="146" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 15 · cristal</text>
                        <text x="248" y="132" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 4</text>
                        <text x="165" y="28" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={BIES_COLOR}>bies</text>
                        <text x="165" y="44" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={ZIP_COLOR}>y cierre en un extremo de cada pieza</text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 3: unir con la tira de cierre */}
                <Paso n={3} titulo={stepMeta[2].titulo} texto={stepMeta[2].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="110" y="44" width="110" height="18" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <rect x="110" y="62" width="110" height="70" fill={CRISTAL_FILL} fillOpacity="0.9" stroke={INK} strokeWidth="1.3" />
                      <Draw d="M110 59 H220" revealed={r} delay={0.2} stroke={BIES_COLOR} strokeWidth={3} />
                      <Draw d="M110 65 H220" revealed={r} delay={0.3} stroke={BIES_COLOR} strokeWidth={3} />
                      <Fade revealed={r} delay={0.6}>
                        <line x1="110" y1="62" x2="220" y2="62" stroke={ZIP_COLOR} strokeWidth="3" strokeDasharray="3 2" />
                        <rect x="208" y="55" width="16" height="14" rx="3.5" fill={ZIP_COLOR} />
                        <line x1="248" y1="62" x2="228" y2="62" stroke={ACCENT} strokeWidth="1.2" />
                        <text x="252" y="58" fontSize="9.5" fontFamily="sans-serif" fill={ACCENT}>tira de</text>
                        <text x="252" y="70" fontSize="9.5" fontFamily="sans-serif" fill={ACCENT}>cierre</text>
                        <text x="165" y="152" textAnchor="middle" fontSize="10" fontFamily="serif" fill={INK}>24 × 4 + 24 × 15</text>
                        <text x="165" y="178" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={INK} opacity="0.55">
                          las dos piezas, unidas por el cierre
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 4: sumar el molde de 24 x 21 */}
                <Paso n={4} titulo={stepMeta[3].titulo} texto={stepMeta[3].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <Frente x={110} y={20} />
                      <Fade revealed={r} delay={0.3}>
                        <rect
                          x="114"
                          y="24"
                          width="102"
                          height="92"
                          fill="none"
                          stroke={SEAM_COLOR}
                          strokeWidth="2"
                          strokeDasharray="5 3"
                        />
                        <text x="228" y="44" fontSize="10" fontFamily="serif" fill={INK}>24 × 21</text>
                        <text x="228" y="70" fontSize="10" fontFamily="serif" fill={INK}>24 × 4</text>
                        <text x="228" y="99" fontSize="10" fontFamily="serif" fill={INK}>24 × 15</text>
                        <text x="165" y="150" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                          costura por todo el borde
                        </text>
                        <text x="165" y="168" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.45">
                          esquema sin escala
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 5: bies en la parte superior */}
                <Paso n={5} titulo={stepMeta[4].titulo} texto={stepMeta[4].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <Frente x={110} y={34} />
                      <Draw d="M110 34 H220" revealed={r} delay={0.2} stroke={BIES_COLOR} strokeWidth={5.5} />
                      <Fade revealed={r} delay={0.8}>
                        <text x="165" y="22" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={BIES_COLOR}>
                          bies en la parte superior
                        </text>
                        <text x="165" y="168" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={INK} opacity="0.5">
                          el borde de arriba queda terminado
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 6: coser a la tela de 24 x 37 */}
                <Paso n={6} titulo={stepMeta[5].titulo} texto={stepMeta[5].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="100" y="8" width="130" height="172" fill={FABRIC_2} stroke={INK} strokeWidth="1.4" />
                      <Frente x={110} y={72} />
                      <Draw d="M110 72 H220" revealed={r} delay={0.1} stroke={BIES_COLOR} strokeWidth={4} />
                      <Fade revealed={r} delay={0.4}>
                        <rect
                          x="114"
                          y="76"
                          width="102"
                          height="92"
                          fill="none"
                          stroke={SEAM_COLOR}
                          strokeWidth="2"
                          strokeDasharray="5 3"
                        />
                        <text x="165" y="40" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill={INK}>24 × 37</text>
                        <text x="165" y="54" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.5">tela restante</text>
                        <text x="165" y="194" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                          coser todo por el borde
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 7: bies en todos los extremos */}
                <Paso n={7} titulo={stepMeta[6].titulo} texto={stepMeta[6].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="100" y="14" width="130" height="164" fill={FABRIC_2} stroke={INK} strokeWidth="1.2" />
                      <Frente x={110} y={72} />
                      <Draw d="M100 14 H230 V178 H100 Z" revealed={r} delay={0.15} duration={1.4} stroke={BIES_COLOR} strokeWidth={5} />
                      <Fade revealed={r} delay={1.2}>
                        <text x="165" y="196" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={BIES_COLOR}>
                          bies en todos los extremos
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 8: abrojo en la solapa */}
                <Paso n={8} titulo={stepMeta[7].titulo} texto={stepMeta[7].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <rect x="90" y="14" width="130" height="164" fill={FABRIC_2} stroke={INK} strokeWidth="1.2" />
                      <Frente x={100} y={72} />
                      <path d="M90 14 H220 V178 H90 Z" stroke={BIES_COLOR} strokeWidth="4.5" strokeLinejoin="round" />
                      <Fade revealed={r} delay={0.2}>
                        <rect
                          x="124"
                          y="30"
                          width="62"
                          height="20"
                          rx="2"
                          fill={ACCENT}
                          fillOpacity="0.14"
                          stroke={ACCENT}
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                        />
                        <text x="155" y="44" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={ACCENT}>abrojo</text>
                        <line x1="226" y1="14" x2="226" y2="66" stroke={ACCENT} strokeWidth="1" />
                        <line x1="222" y1="14" x2="230" y2="14" stroke={ACCENT} strokeWidth="1" />
                        <line x1="222" y1="66" x2="230" y2="66" stroke={ACCENT} strokeWidth="1" />
                        <text x="236" y="43" fontSize="10" fontFamily="serif" fill={ACCENT}>solapa</text>
                      </Fade>
                      <Fade revealed={r} delay={0.8}>
                        <text x="165" y="196" textAnchor="middle" fontSize="11" fontFamily="serif" fill={INK}>
                          ¡Bolsillo terminado! <tspan fill={ACCENT}>♥</tspan>
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

              </div>
            </div>

            {/* Tip final */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease }}
              className="bg-dark text-cream px-8 py-8 flex gap-5 items-start"
            >
              <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Aplicá la teoría</p>
                <p className="text-cream text-base leading-relaxed">
                  Antes de cortar, hacete las preguntas del módulo: ¿para qué se va a usar?, ¿qué peso va a
                  soportar?, ¿necesita cierre?, ¿necesita bolsillos? Este bolsillo responde que sí a las dos
                  últimas, y es un buen ejemplo de cómo un molde simple se convierte en un producto nuevo.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        <CarruselModulo17 />

      </div>
    </MotionConfig>
  );
}
