import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Layers, Pencil, Ribbon, Ruler, Scissors, Spool } from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { Draw, Fade, Paso, ZipperIcon } from '../components/PracticaUI';

const WORD = 'NECESER';
const TYPE_SPEED = 130;
const ERASE_SPEED = 70;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';
const SEAM_COLOR = '#E0227C';
const BIES_COLOR = '#3B6FE0';
const ZIP_COLOR = '#6b7280';
const SILVER_FILL = '#DCDCDC';
const FABRIC = '#F5F0E8';
const FABRIC_2 = '#EDE8DC';
const INK = '#1a1a1a';

type IconCmp = ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

const MATERIALES: { cat: string; detalle: string; Icon: IconCmp }[] = [
  { cat: 'Tela exterior', detalle: 'con cuerpo', Icon: Layers },
  { cat: 'Tela interior', detalle: 'forro, por ejemplo silver', Icon: Layers },
  { cat: 'Bies', detalle: 'para las partes redondeadas y los fuelles', Icon: Ribbon },
  { cat: 'Hilo', detalle: 'al tono o en contraste', Icon: Spool },
  { cat: 'Cierre 6 mm', detalle: 'el cursor del cierre', Icon: ZipperIcon },
  { cat: 'Tira de cierre 6 mm', detalle: 'la cinta con los dientes', Icon: ZipperIcon },
];

const HERRAMIENTAS = ['Papel madera', 'Lápiz', 'Goma', 'Tijera', 'Regla o escuadra'];

const stepMeta = [
  {
    titulo: 'Cortar el molde en tela doble',
    texto: 'Recortar el molde en tela doble: uno para la tela exterior y uno para el forro.',
  },
  { titulo: 'Unir exterior y forro', texto: 'Unir ambas telas con costura recta por todo el contorno.' },
  { titulo: 'Colocar el bies', texto: 'Colocar el bies en las dos partes redondeadas.' },
  {
    titulo: 'Colocar el cierre',
    texto: 'Con el bies ya colocado, coser el cierre con costura recta por debajo.',
  },
  { titulo: 'Pasar la tira y dar vuelta', texto: 'Pasar la tira de cierre y dar vuelta la pieza.' },
  {
    titulo: 'Unir los fuelles',
    texto: 'Realizar una costura interna uniendo los fuelles, para dar amplitud.',
  },
  { titulo: 'Emprolijar con bies', texto: 'Ya cosido, colocar bies para emprolijar.' },
  { titulo: 'Dar vuelta y listo', texto: 'Dar vuelta la pieza. ¡Terminado!' },
];

/* ── Geometría: cúpula (rectángulo con la parte superior redondeada) ── */

const dome = (x: number, y: number, w: number, h: number) => {
  const ry = h * 0.55;
  return `M${x} ${y + h} V${y + ry} A${w / 2} ${ry} 0 0 1 ${x + w} ${y + ry} V${y + h} Z`;
};
const domeArc = (x: number, y: number, w: number, h: number) => {
  const ry = h * 0.55;
  return `M${x} ${y + ry} A${w / 2} ${ry} 0 0 1 ${x + w} ${y + ry}`;
};

/* Marco común de los esquemas */
const SVG_STYLE = { maxWidth: 380, margin: '0 auto', display: 'block', width: '100%' } as const;

export function Module16Practica() {
  const reduce = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduce ? WORD : '');
  const [erasing, setErasing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Reveal de la moldería sin IntersectionObserver (falla sobre SVG en Safari)
  const [moldeRef, showMolde] = useRevealOnScroll<HTMLDivElement>();

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

  // Moldería: 1 cm = 8,8 px
  const MX = 72;
  const MY = 36;
  const MW = 215.6; // 24,5 cm
  const MH = 176; // 20 cm
  const mryBase = MH * 0.55;

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
            Práctica · Módulo XVI
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
            circular
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
                src="/modulo16/practica/neceser1.png"
                alt="Neceser circular de rayas amarillas y crema, con bies marrón en el cierre, sobre una superficie de cemento"
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
                src="/modulo16/practica/neceser2.png"
                alt="Neceser circular de rayas anchas rosas y naranjas, con cierre crema y un colgante plateado"
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
              Se parte de un rectángulo base y se redondea la parte superior. Es un medio molde: con el fuelle
              de 4 cm se arma la amplitud de la base.
            </p>

            {/* SVG moldería: del rectángulo base a la cúpula */}
            <div
              ref={moldeRef}
              className="w-full overflow-hidden bg-white"
              style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
            >
              <svg
                viewBox="0 0 360 256"
                style={{ width: '100%', maxWidth: 520, height: 'auto', display: 'block', margin: '0 auto' }}
                fill="none"
                role="img"
                aria-label="Molde: rectángulo de 24,5 por 20 centímetros con la parte superior redondeada"
              >
                {/* Rectángulo base */}
                <Fade revealed={showMolde} delay={0.05}>
                  <rect
                    x={MX}
                    y={MY}
                    width={MW}
                    height={MH}
                    fill={FABRIC_2}
                    stroke={INK}
                    strokeWidth="1"
                    strokeDasharray="5 4"
                    opacity="0.9"
                  />
                  <text x={MX + MW / 2} y={MY - 12} textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={INK} opacity="0.5">
                    rectángulo base
                  </text>
                </Fade>

                {/* Molde: cúpula que queda después de redondear */}
                <motion.path
                  d={dome(MX, MY, MW, MH)}
                  stroke="none"
                  initial={{ fill: FABRIC_2 }}
                  animate={showMolde ? { fill: FABRIC } : { fill: FABRIC_2 }}
                  transition={{ duration: 0.6, delay: 1.0, ease }}
                />
                <Draw d={dome(MX, MY, MW, MH)} revealed={showMolde} delay={0.45} duration={1.1} stroke={INK} strokeWidth={1.8} />

                {/* Esquinas que se descartan al redondear */}
                <Fade revealed={showMolde} delay={0.9}>
                  <path
                    d={`M${MX} ${MY} H${MX + MW / 2} A${MW / 2} ${mryBase} 0 0 0 ${MX} ${MY + mryBase} Z`}
                    fill={SEAM_COLOR}
                    opacity="0.12"
                  />
                  <path
                    d={`M${MX + MW} ${MY} H${MX + MW / 2} A${MW / 2} ${mryBase} 0 0 1 ${MX + MW} ${MY + mryBase} Z`}
                    fill={SEAM_COLOR}
                    opacity="0.12"
                  />
                </Fade>

                {/* Etiqueta central */}
                <Fade revealed={showMolde} delay={1.2}>
                  <text x={MX + MW / 2} y={MY + MH * 0.66} textAnchor="middle" fontSize="12" fontFamily="serif" fill={INK}>
                    Medio molde
                  </text>
                </Fade>

                {/* Cotas */}
                <Fade revealed={showMolde} delay={1.35}>
                  <line x1={MX} y1={MY + MH + 18} x2={MX + MW} y2={MY + MH + 18} stroke={INK} strokeWidth="0.9" />
                  <line x1={MX} y1={MY + MH + 13} x2={MX} y2={MY + MH + 23} stroke={INK} strokeWidth="0.9" />
                  <line x1={MX + MW} y1={MY + MH + 13} x2={MX + MW} y2={MY + MH + 23} stroke={INK} strokeWidth="0.9" />
                  <text x={MX + MW / 2} y={MY + MH + 36} textAnchor="middle" fontSize="11" fontFamily="serif" fill={INK}>
                    24,5 cm
                  </text>

                  <line x1={MX - 18} y1={MY} x2={MX - 18} y2={MY + MH} stroke={INK} strokeWidth="0.9" />
                  <line x1={MX - 23} y1={MY} x2={MX - 13} y2={MY} stroke={INK} strokeWidth="0.9" />
                  <line x1={MX - 23} y1={MY + MH} x2={MX - 13} y2={MY + MH} stroke={INK} strokeWidth="0.9" />
                  <text
                    x={MX - 30}
                    y={MY + MH / 2}
                    textAnchor="middle"
                    fontSize="11"
                    fontFamily="serif"
                    fill={INK}
                    transform={`rotate(-90 ${MX - 30} ${MY + MH / 2})`}
                  >
                    20 cm
                  </text>
                </Fade>
              </svg>
              <p className="text-center text-xs text-dark/45 italic mt-4 max-w-md mx-auto leading-relaxed">
                Lo rosado es lo que se descarta al redondear la parte superior. El molde se recorta una vez en tela
                doble.
              </p>
            </div>

            {/* Medidas clave */}
            <div className="grid grid-cols-3 gap-px" style={{ background: 'hsl(var(--border) / 0.3)' }}>
              {[
                { k: 'Ancho', v: '24,5 cm' },
                { k: 'Alto', v: '20 cm' },
                { k: 'Fuelle', v: '4 cm' },
              ].map((m, i) => (
                <motion.div
                  key={m.k}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: i * 0.09, ease }}
                  className="bg-cream px-3 py-7 text-center"
                >
                  <p
                    className="font-display text-dark leading-none"
                    style={{ fontSize: 'clamp(1.2rem, 4.2vw, 1.9rem)', fontWeight: 400 }}
                  >
                    {m.v}
                  </p>
                  <p className="text-xs text-dark/45 mt-2 uppercase tracking-widest">{m.k}</p>
                </motion.div>
              ))}
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

                {/* Paso 1: cortar el molde en tela doble */}
                <Paso n={1} titulo={stepMeta[0].titulo} texto={stepMeta[0].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 196" fill="none" style={SVG_STYLE}>
                      {/* Tela exterior, doble */}
                      <rect x="38" y="30" width="112" height="100" fill={FABRIC} stroke={INK} strokeWidth="1" opacity="0.6" />
                      <rect x="30" y="38" width="112" height="100" fill={FABRIC} stroke={INK} strokeWidth="1.3" />
                      <path d={dome(46, 50, 80, 76)} fill={FABRIC_2} stroke={INK} strokeWidth="1.5" />
                      {/* Forro, doble */}
                      <rect x="196" y="30" width="112" height="100" fill={SILVER_FILL} stroke={INK} strokeWidth="1" opacity="0.6" />
                      <rect x="188" y="38" width="112" height="100" fill={SILVER_FILL} stroke={INK} strokeWidth="1.3" />
                      <path d={dome(204, 50, 80, 76)} fill="#EFEFEF" stroke={INK} strokeWidth="1.5" />

                      <Fade revealed={r} delay={0.35}>
                        <text x="128" y="62" fontSize="17" fill={INK}>✂</text>
                        <text x="86" y="160" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill={INK}>Tela exterior</text>
                        <text x="244" y="160" textAnchor="middle" fontSize="10.5" fontFamily="serif" fill={INK}>Forro</text>
                        <text x="86" y="176" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.5">en tela doble</text>
                        <text x="244" y="176" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.5">en tela doble</text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 2: unir exterior y forro */}
                <Paso n={2} titulo={stepMeta[1].titulo} texto={stepMeta[1].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 196" fill="none" style={SVG_STYLE}>
                      <path d={dome(98, 26, 112, 110)} fill={SILVER_FILL} stroke={INK} strokeWidth="1.3" />
                      <path d={dome(120, 44, 112, 110)} fill={FABRIC} stroke={INK} strokeWidth="1.5" />
                      <Fade revealed={r} delay={0.3}>
                        <path
                          d={dome(126, 50, 100, 98)}
                          fill="none"
                          stroke={SEAM_COLOR}
                          strokeWidth="2"
                          strokeDasharray="5 3"
                        />
                        <text x="165" y="176" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                          costura recta por todo el contorno
                        </text>
                        <text x="60" y="66" textAnchor="middle" fontSize="9.5" fontFamily="serif" fill={INK} opacity="0.6">forro</text>
                        <text x="272" y="140" textAnchor="middle" fontSize="9.5" fontFamily="serif" fill={INK} opacity="0.6">exterior</text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 3: bies en las partes redondeadas */}
                <Paso n={3} titulo={stepMeta[2].titulo} texto={stepMeta[2].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 196" fill="none" style={SVG_STYLE}>
                      <path d={dome(34, 36, 108, 100)} fill={FABRIC} stroke={INK} strokeWidth="1.4" />
                      <path d={dome(188, 36, 108, 100)} fill={FABRIC} stroke={INK} strokeWidth="1.4" />
                      <Draw d={domeArc(34, 36, 108, 100)} revealed={r} delay={0.25} stroke={BIES_COLOR} strokeWidth={5} />
                      <Draw d={domeArc(188, 36, 108, 100)} revealed={r} delay={0.55} stroke={BIES_COLOR} strokeWidth={5} />
                      <Fade revealed={r} delay={0.9}>
                        <text x="165" y="160" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={BIES_COLOR}>
                          bies en las dos partes redondeadas
                        </text>
                        <text x="165" y="178" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.45">
                          una por cada pieza
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 4: colocar el cierre */}
                <Paso n={4} titulo={stepMeta[3].titulo} texto={stepMeta[3].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 196" fill="none" style={SVG_STYLE}>
                      <path d={dome(98, 34, 134, 108)} fill={FABRIC} stroke={INK} strokeWidth="1.4" />
                      <Draw d={domeArc(98, 34, 134, 108)} revealed={r} delay={0.15} stroke={BIES_COLOR} strokeWidth={5} />
                      <Fade revealed={r} delay={0.6}>
                        {/* Cierre (cadena) */}
                        <path
                          d={domeArc(110, 48, 110, 94)}
                          stroke={ZIP_COLOR}
                          strokeWidth="4.5"
                          strokeDasharray="3 2"
                          fill="none"
                        />
                        <rect x="104" y="104" width="12" height="16" rx="3" fill={ZIP_COLOR} />
                        {/* Costura por debajo */}
                        <path
                          d={domeArc(118, 56, 94, 86)}
                          stroke={SEAM_COLOR}
                          strokeWidth="1.8"
                          strokeDasharray="5 3"
                          fill="none"
                        />
                        <text x="165" y="20" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={ZIP_COLOR}>
                          cierre de 6 mm
                        </text>
                        <text x="165" y="170" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                          costura recta por debajo del cierre
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 5: pasar la tira y dar vuelta */}
                <Paso n={5} titulo={stepMeta[4].titulo} texto={stepMeta[4].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      {/* Tira de cierre con el cursor */}
                      <line x1="44" y1="42" x2="262" y2="42" stroke={ZIP_COLOR} strokeWidth="6" strokeDasharray="3 2" />
                      <rect x="248" y="32" width="26" height="20" rx="5" fill={ZIP_COLOR} />
                      <circle cx="283" cy="42" r="3.4" fill={ZIP_COLOR} opacity="0.7" />
                      <text x="150" y="24" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={ZIP_COLOR}>
                        tira de cierre de 6 mm
                      </text>

                      <Fade revealed={r} delay={0.3}>
                        <line x1="165" y1="64" x2="165" y2="90" stroke={ACCENT} strokeWidth="1.3" />
                        <path d="M160 85 165 91 170 85" stroke={ACCENT} strokeWidth="1.3" fill="none" />
                      </Fade>

                      {/* Pieza y giro */}
                      <path d={dome(118, 100, 96, 70)} fill={FABRIC} stroke={INK} strokeWidth="1.4" />
                      <Draw d="M86 168 A44 44 0 0 1 100 112" revealed={r} delay={0.5} stroke={ACCENT} strokeWidth={1.5} />
                      <Fade revealed={r} delay={1.0}>
                        <path d="M95 120 100 111 108 116" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <text x="62" y="152" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={ACCENT}>
                          dar vuelta
                        </text>
                        <text x="165" y="192" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.45">
                          la pieza queda del derecho
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 6: unir los fuelles */}
                <Paso n={6} titulo={stepMeta[5].titulo} texto={stepMeta[5].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <path d={dome(84, 24, 162, 116)} fill={FABRIC} stroke={INK} strokeWidth="1.5" />
                      {/* Fuelles en las esquinas inferiores */}
                      <path d="M84 140 V112 L112 140 Z" fill="#E4D6BE" stroke={INK} strokeWidth="1.2" />
                      <path d="M246 140 V112 L218 140 Z" fill="#E4D6BE" stroke={INK} strokeWidth="1.2" />
                      <Fade revealed={r} delay={0.3}>
                        <line x1="84" y1="112" x2="112" y2="140" stroke={SEAM_COLOR} strokeWidth="2.2" strokeDasharray="4 3" />
                        <line x1="246" y1="112" x2="218" y2="140" stroke={SEAM_COLOR} strokeWidth="2.2" strokeDasharray="4 3" />
                        <text x="100" y="158" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={INK} opacity="0.65">
                          fuelle
                        </text>
                        <text x="230" y="158" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={INK} opacity="0.65">
                          fuelle
                        </text>
                        <text x="165" y="186" textAnchor="middle" fontSize="9.5" fontFamily="sans-serif" fill={SEAM_COLOR}>
                          costura interna uniendo los fuelles
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 7: bies para emprolijar */}
                <Paso n={7} titulo={stepMeta[6].titulo} texto={stepMeta[6].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <path d={dome(84, 24, 162, 116)} fill={FABRIC} stroke={INK} strokeWidth="1.5" />
                      <path d="M84 140 V112 L112 140 Z" fill="#E4D6BE" stroke={INK} strokeWidth="1.2" />
                      <path d="M246 140 V112 L218 140 Z" fill="#E4D6BE" stroke={INK} strokeWidth="1.2" />
                      <Draw d="M84 112 L112 140" revealed={r} delay={0.2} stroke={BIES_COLOR} strokeWidth={4.5} />
                      <Draw d="M246 112 L218 140" revealed={r} delay={0.5} stroke={BIES_COLOR} strokeWidth={4.5} />
                      <Fade revealed={r} delay={0.9}>
                        <text x="165" y="170" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={BIES_COLOR}>
                          bies sobre las costuras de los fuelles
                        </text>
                        <text x="165" y="188" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fill={INK} opacity="0.45">
                          para que quede prolijo por dentro
                        </text>
                      </Fade>
                    </svg>
                  )}
                </Paso>

                {/* Paso 8: dar vuelta y terminado */}
                <Paso n={8} titulo={stepMeta[7].titulo} texto={stepMeta[7].texto}>
                  {(r) => (
                    <svg width="100%" viewBox="0 0 330 200" fill="none" style={SVG_STYLE}>
                      <ellipse cx="165" cy="150" rx="82" ry="7" fill={INK} opacity="0.08" />
                      <path d={dome(92, 28, 146, 120)} fill={FABRIC} stroke={INK} strokeWidth="1.5" />
                      {/* Rayas sugeridas */}
                      {[118, 138, 158, 178, 198, 218].map((x) => (
                        <line key={x} x1={x} y1={x < 130 || x > 200 ? 74 : 54} x2={x} y2="148" stroke={ACCENT} strokeWidth="1" opacity="0.18" />
                      ))}
                      <Draw d={domeArc(92, 28, 146, 120)} revealed={r} delay={0.2} stroke={BIES_COLOR} strokeWidth={5} />
                      <Fade revealed={r} delay={0.7}>
                        <path
                          d={domeArc(102, 40, 126, 108)}
                          stroke={ZIP_COLOR}
                          strokeWidth="4"
                          strokeDasharray="3 2"
                          fill="none"
                        />
                        <rect x="96" y="104" width="11" height="15" rx="3" fill={ZIP_COLOR} />
                        <text x="165" y="174" textAnchor="middle" fontSize="11.5" fontFamily="serif" fill={INK}>
                          ¡Neceser terminado!
                        </text>
                        <text x="165" y="192" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill={ACCENT}>
                          ♥
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
                  Cuando termines tu neceser, ponele precio con la fórmula del módulo: materiales, mano de obra,
                  gastos fijos y ganancia. Después fotografialo con luz natural, cerca de una ventana y sobre un fondo
                  claro.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </MotionConfig>
  );
}
