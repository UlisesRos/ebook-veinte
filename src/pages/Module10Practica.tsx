import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo10 } from '../components/CarruselModulo10';

const WORD = 'CANASTA';
const TYPE_SPEED = 130;
const ERASE_SPEED = 75;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';

function BasketIcon({ size = 18 }: { size?: number }) {
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
      <path d="M4.5 8.5h15l-1.1 10.4a1.2 1.2 0 0 1-1.2 1.1H6.8a1.2 1.2 0 0 1-1.2-1.1L4.5 8.5Z" />
      <path d="M3.4 8.5c1-1.5 2.5-1.5 3.5 0 1-1.5 2.5-1.5 3.5 0 1-1.5 2.5-1.5 3.5 0 1-1.5 2.5-1.5 3.5 0" opacity="0.5" />
      <path d="M9.5 9.2 9 20M14.5 9.2 15 20" opacity="0.32" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Tela exterior', detalle: 'gabardina, cordura, lienzo o lona' },
  { cat: 'Tela interior', detalle: 'lienzo' },
  { cat: 'Para decorar', detalle: 'bies, borlas, flecos o encajes (a gusto)' },
  { cat: 'Papel madera', detalle: 'para calcar la moldería' },
  { cat: 'Herramientas', detalle: 'tijera, lápiz y centímetro' },
  { cat: 'Trazado', detalle: 'regla o escuadra' },
];

/* Escala moldería cruz: lado 80px ≈ 21 cm */
const L = 80;
const CROSS = [
  { key: 'top', x: 125, y: 35, label: 'Lateral' },
  { key: 'left', x: 45, y: 115, label: 'Lateral' },
  { key: 'center', x: 125, y: 115, label: 'Base', base: true },
  { key: 'right', x: 205, y: 115, label: 'Lateral' },
  { key: 'bottom', x: 125, y: 195, label: 'Lateral' },
];

export function Module10Practica() {
  const [displayed, setDisplayed] = useState('');
  const [erasing, setErasing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

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
          Práctica · Módulo X
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

        {/* Dos fotos polaroid lado a lado — igual que Módulo 9 */}
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
              src="/modulo10/canasta.png"
              alt="Cesta cuadrada terminada de rayas rosas con borde de encaje"
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
              src="/modulo10/canasta2.png"
              alt="La cesta usada como organizador de cosmética junto a la bacha"
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
            Formá 5 cuadrados de 21 × 21 cm. Colocá uno en el centro y uno en cada lado hasta formar una cruz. Pegá los bordes con cinta para sujetar y calcá la cruz en papel madera.
          </p>

          {/* SVG cruz — 5 cuadrados */}
          <div className="w-full overflow-hidden bg-white" style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}>
            <svg
              viewBox="0 0 330 320"
              style={{ width: '100%', maxWidth: 430, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* Cuadrados de la cruz — reveal escalonado */}
              {CROSS.map((sq, i) => (
                <motion.g
                  key={sq.key}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.11, ease }}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                >
                  <rect
                    x={sq.x}
                    y={sq.y}
                    width={L}
                    height={L}
                    fill={sq.base ? '#F5F0E8' : '#EDE8DC'}
                    stroke="#1a1a1a"
                    strokeWidth={sq.base ? 1.6 : 1.2}
                  />
                  <text
                    x={sq.x + L / 2}
                    y={sq.base ? sq.y + L / 2 - 2 : sq.y + L / 2 + 3}
                    textAnchor="middle"
                    fontSize={sq.base ? 12 : 9.5}
                    fontFamily="serif"
                    fill="#1a1a1a"
                    opacity={sq.base ? 1 : 0.6}
                  >
                    {sq.label}
                  </text>
                  {sq.base && (
                    <text x={sq.x + L / 2} y={sq.y + L / 2 + 14} textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.5">
                      21 × 21 cm
                    </text>
                  )}
                </motion.g>
              ))}

              {/* Líneas de doblez (los 4 bordes del cuadrado base) */}
              {[
                { x1: 125, y1: 115, x2: 205, y2: 115 },
                { x1: 125, y1: 195, x2: 205, y2: 195 },
                { x1: 125, y1: 115, x2: 125, y2: 195 },
                { x1: 205, y1: 115, x2: 205, y2: 195 },
              ].map((l, i) => (
                <motion.line
                  key={i}
                  x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                  stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.85 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.75, ease }}
                />
              ))}

              {/* Cota vertical 21 cm (izquierda del lateral izquierdo) */}
              <line x1="34" y1="115" x2="34" y2="195" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="29" y1="115" x2="39" y2="115" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="29" y1="195" x2="39" y2="195" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="22" y="158" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 22 158)">21 cm</text>

              {/* Cota horizontal 21 cm (debajo del lateral inferior) */}
              <line x1="125" y1="292" x2="205" y2="292" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="125" y1="287" x2="125" y2="297" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="205" y1="287" x2="205" y2="297" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="165" y="310" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">21 cm</text>

              {/* Leyenda doblez */}
              <line x1="228" y1="292" x2="246" y2="292" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 3" />
              <text x="250" y="295" fontSize="8.5" fontFamily="sans-serif" fill="#1a1a1a" opacity="0.7">línea de doblez</text>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              Los 4 laterales se pliegan hacia arriba sobre la base para formar la cesta.
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
                  <span className="text-dark"><BasketIcon size={19} /></span>
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
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>01</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 1</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar la cruz en las dos telas</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Cortar el molde en forma de cruz en tela exterior (×1) y en tela interior (×1).
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none" style={{ maxWidth: 380, margin: '0 auto', display: 'block' }}>
                    {/* Mini cruz exterior */}
                    {[[70, 30], [40, 60], [70, 60], [100, 60], [70, 90]].map(([x, y], k) => (
                      <rect key={k} x={x} y={y} width="30" height="30" fill={k === 2 ? '#F5F0E8' : '#EDE8DC'} stroke="#1a1a1a" strokeWidth="1.2" />
                    ))}
                    <text x="85" y="140" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif">Exterior × 1</text>
                    {/* Mini cruz interior */}
                    {[[220, 30], [190, 60], [220, 60], [250, 60], [220, 90]].map(([x, y], k) => (
                      <rect key={k} x={x} y={y} width="30" height="30" fill={k === 2 ? '#F0EBE0' : '#EDE8DC'} stroke="#1a1a1a" strokeWidth="1.2" opacity="0.85" strokeDasharray={k === 2 ? '0' : '0'} />
                    ))}
                    <text x="235" y="140" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif">Interior × 1</text>
                    {/* Tijera */}
                    <text x="160" y="70" textAnchor="middle" fontSize="20" fill="#1a1a1a">✂</text>
                    <text x="160" y="155" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">dos moldes en cruz iguales</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir los laterales de la tela exterior</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Enfrentar derecho con derecho y coser con costura recta los cuatro laterales, uniendo los bordes contiguos. Al cerrarlos, la cruz se levanta y forma la caja.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 340 180" fill="none" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }}>
                    {/* Cruz plana con costuras en los bordes que se unen */}
                    {[[55, 25], [25, 55], [55, 55], [85, 55], [55, 85]].map(([x, y], k) => (
                      <rect key={k} x={x} y={y} width="30" height="30" fill={k === 2 ? '#F5F0E8' : '#EDE8DC'} stroke="#1a1a1a" strokeWidth="1.2" />
                    ))}
                    {/* Costuras en los bordes exteriores contiguos (marcadas) */}
                    {[
                      [55, 25, 55, 55], [85, 25, 85, 55],
                      [25, 55, 25, 85], [55, 55, 55, 85],
                      [85, 55, 115, 55], [85, 85, 115, 85],
                      [55, 85, 55, 115], [85, 85, 85, 115],
                    ].map(([x1, y1, x2, y2], k) => (
                      <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ACCENT} strokeWidth="2" strokeDasharray="3 2" opacity="0.75" />
                    ))}
                    <text x="70" y="160" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura en los 4 laterales</text>

                    {/* Flecha */}
                    <path d="M150 90 h30" stroke="#1a1a1a" strokeWidth="1.4" />
                    <polygon points="178,85 188,90 178,95" fill="#1a1a1a" opacity="0.7" />

                    {/* Caja 3D resultante */}
                    <g>
                      {/* frente */}
                      <polygon points="215,80 285,80 285,140 215,140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.4" />
                      {/* lateral */}
                      <polygon points="285,80 305,65 305,125 285,140" fill="#E5DECF" stroke="#1a1a1a" strokeWidth="1.4" />
                      {/* apertura superior */}
                      <polygon points="215,80 285,80 305,65 235,65" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                      <text x="260" y="115" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">caja</text>
                    </g>
                    <text x="255" y="160" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">derecho con derecho</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Repetir en la tela interior</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Repetir exactamente el mismo procedimiento con la cruz de la tela interior, para obtener el forro de la cesta.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none" style={{ maxWidth: 360, margin: '0 auto', display: 'block' }}>
                    <g opacity="0.9">
                      <polygon points="120,55 190,55 190,115 120,115" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.4" />
                      <polygon points="190,55 212,38 212,98 190,115" fill="#E8E1D2" stroke="#1a1a1a" strokeWidth="1.4" />
                      <polygon points="120,55 190,55 212,38 142,38" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                      <text x="163" y="90" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="serif" opacity="0.55">Forro</text>
                    </g>
                    <text x="160" y="145" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">mismo armado en la tela interior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 — bifurcación A / B */}
              <div className="pt-2 space-y-6">
                <div className="text-center space-y-4">
                  <span className="font-display text-dark/30 select-none leading-none block" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4 · Dos formas de terminar</p>
                  <h3 className="font-display text-xl text-dark leading-snug">Unir exterior y forro</h3>
                  <p className="font-body text-sm text-dark/70 leading-relaxed max-w-xl mx-auto">
                    Con las dos cajas listas, elegí cómo terminar tu cesta. Ambos caminos llevan al mismo resultado prolijo.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {/* Opción A — con bies */}
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.6, ease }}
                    className="bg-white p-6 flex flex-col"
                    style={{ outline: '1px solid hsl(var(--border) / 0.6)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-cream bg-dark rounded-full w-9 h-9 flex items-center justify-center leading-none shrink-0" style={{ fontSize: '1.05rem', fontWeight: 500, paddingTop: '2px' }}>A</span>
                      <div className="text-left">
                        <p className="font-display text-dark leading-tight" style={{ fontSize: '1.2rem', fontWeight: 500 }}>Con bies</p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-dark/40">terminación decorativa</p>
                      </div>
                    </div>
                    {/* mini diagrama A */}
                    <div className="mb-4">
                      <svg width="100%" viewBox="0 0 240 96" fill="none" style={{ display: 'block' }}>
                        <polygon points="70,30 150,30 150,80 70,80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                        <polygon points="150,30 172,16 172,66 150,80" fill="#E5DECF" stroke="#1a1a1a" strokeWidth="1.3" />
                        <polygon points="70,30 150,30 172,16 92,16" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                        {/* bies en el borde superior */}
                        <polyline points="70,30 150,30 172,16" fill="none" stroke={ACCENT} strokeWidth="3.4" strokeLinecap="round" />
                        <text x="120" y="93" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bies en el borde superior</text>
                      </svg>
                    </div>
                    <ol className="space-y-2.5 text-left text-sm text-dark/75 leading-relaxed list-none">
                      <li className="flex gap-2.5"><span className="text-dark/35">1.</span> Colocá los moldes uno dentro del otro, revés con revés.</li>
                      <li className="flex gap-2.5"><span className="text-dark/35">2.</span> Cosé la parte superior con costura recta para sujetar.</li>
                      <li className="flex gap-2.5"><span className="text-dark/35">3.</span> Tapá las terminaciones con bies.</li>
                    </ol>
                  </motion.div>

                  {/* Opción B — sin bies */}
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.6, delay: 0.1, ease }}
                    className="bg-white p-6 flex flex-col"
                    style={{ outline: '1px solid hsl(var(--border) / 0.6)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display text-cream bg-dark rounded-full w-9 h-9 flex items-center justify-center leading-none shrink-0" style={{ fontSize: '1.05rem', fontWeight: 500, paddingTop: '2px' }}>B</span>
                      <div className="text-left">
                        <p className="font-display text-dark leading-tight" style={{ fontSize: '1.2rem', fontWeight: 500 }}>Sin bies</p>
                        <p className="text-[11px] uppercase tracking-[0.15em] text-dark/40">terminación prolija</p>
                      </div>
                    </div>
                    {/* mini diagrama B */}
                    <div className="mb-4">
                      <svg width="100%" viewBox="0 0 240 96" fill="none" style={{ display: 'block' }}>
                        <polygon points="70,30 150,30 150,80 70,80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                        <polygon points="150,30 172,16 172,66 150,80" fill="#E5DECF" stroke="#1a1a1a" strokeWidth="1.3" />
                        <polygon points="70,30 150,30 172,16 92,16" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                        {/* abertura en el forro (base) */}
                        <line x1="95" y1="80" x2="125" y2="80" stroke="#fff" strokeWidth="3.5" />
                        <line x1="95" y1="80" x2="125" y2="80" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="3 2" />
                        {/* flecha dar vuelta */}
                        <path d="M150 92 q10 -6 20 0" fill="none" stroke="#1a1a1a" strokeWidth="1.1" opacity="0.5" />
                        <text x="120" y="93" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">abertura para dar vuelta</text>
                      </svg>
                    </div>
                    <ol className="space-y-2.5 text-left text-sm text-dark/75 leading-relaxed list-none">
                      <li className="flex gap-2.5"><span className="text-dark/35">1.</span> En el forro dejá una abertura para poder dar vuelta.</li>
                      <li className="flex gap-2.5"><span className="text-dark/35">2.</span> Colocá un molde dentro del otro, derecho con derecho.</li>
                      <li className="flex gap-2.5"><span className="text-dark/35">3.</span> Cosé la parte superior con costura recta.</li>
                      <li className="flex gap-2.5"><span className="text-dark/35">4.</span> Dá vuelta por el forro y cerralo. Rematá con flecos, volados o un pespunte superior.</li>
                    </ol>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">El detalle que la hace tuya</p>
              <p className="text-cream text-base leading-relaxed">
                El bies, las borlas, los flecos o el encaje son opcionales, pero son lo que transforma una cesta funcional en una pieza con personalidad. Elegí la decoración pensando en dónde va a vivir.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CarruselModulo10 />

    </div>
  );
}
