import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CarruselModulo11 } from '../components/CarruselModulo11';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const WORD = 'MANOPLA';
const TYPE_SPEED = 130;
const ERASE_SPEED = 75;
const ease = [0.22, 1, 0.36, 1] as const;

const ACCENT = '#9B4B57';

function MittenIcon({ size = 18 }: { size?: number }) {
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
      <path d="M4 3.5h16" opacity="0.35" />
      <path d="M7 3.5h10v13.5a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 17V3.5Z" />
      <path d="M7 12.5h10" opacity="0.5" />
    </svg>
  );
}

const materiales: { cat: string; detalle: string }[] = [
  { cat: 'Bies', detalle: 'para los bolsillos y todo el contorno' },
  { cat: 'Tela', detalle: 'gabardina' },
  { cat: 'Hilo', detalle: 'al tono o en contraste' },
  { cat: 'Papel madera', detalle: 'para calcar la moldería' },
  { cat: 'Herramientas', detalle: 'tijera, lápiz y centímetro' },
  { cat: 'Trazado', detalle: 'regla o escuadra' },
];

export function Module11Practica() {
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
          Práctica · Módulo XI
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
              src="/modulo11/maquillaje.png"
              alt="Manopla colgada de una barra del baño, con brochas en el bolsillo"
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
              src="/modulo11/horno.png"
              alt="La misma manopla colgada de la puerta del horno"
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
            Dos piezas rectangulares con las esquinas redondeadas: la base larga que cuelga, y las piezas chicas que forman los bolsillos de cada extremo.
          </p>

          {/* SVG moldería — base + bolsillo */}
          <div
            ref={moldeRef}
            className="w-full overflow-hidden bg-white"
            style={{ padding: '28px 16px', outline: '1px solid hsl(var(--border) / 0.5)' }}
          >
            <svg
              viewBox="0 0 360 315"
              style={{ width: '100%', maxWidth: 460, height: 'auto', display: 'block', margin: '0 auto' }}
              fill="none"
            >
              {/* ── Pieza base: 76 × 20 cm, curvas de 5 cm en las 4 esquinas ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <rect x="36" y="40" width="304" height="80" rx="20" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.6" />
                <text x="188" y="74" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Base</text>
                <text x="188" y="90" textAnchor="middle" fontSize="9.5" fontFamily="serif" fill="#1a1a1a" opacity="0.55">76 × 20 cm — cortar 2</text>

                {/* Cota horizontal 76 cm */}
                <line x1="36" y1="138" x2="340" y2="138" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="36" y1="133" x2="36" y2="143" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="340" y1="133" x2="340" y2="143" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="188" y="154" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">76 cm</text>

                {/* Cota vertical 20 cm */}
                <line x1="24" y1="40" x2="24" y2="120" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="19" y1="40" x2="29" y2="40" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="19" y1="120" x2="29" y2="120" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="12" y="83" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 12 83)">20 cm</text>

                {/* Anotación: curva en las 4 esquinas */}
                <line x1="332" y1="30" x2="316" y2="44" stroke={ACCENT} strokeWidth="0.9" />
                <text x="336" y="28" textAnchor="end" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>curvas de 5 cm en las 4 esquinas</text>
              </motion.g>

              {/* ── Pieza bolsillo: 25 × 20 cm, curvas inferiores de 5 cm ── */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={showMolde ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease }}
              >
                <path
                  d="M36 195 h100 v60 a20 20 0 0 1 -20 20 h-60 a20 20 0 0 1 -20 -20 z"
                  fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5"
                />
                <text x="86" y="226" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">Bolsillo</text>
                <text x="86" y="241" textAnchor="middle" fontSize="8.5" fontFamily="serif" fill="#1a1a1a" opacity="0.55">25 × 20 cm — cortar 4</text>

                {/* Cota horizontal 25 cm */}
                <line x1="36" y1="290" x2="136" y2="290" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="36" y1="285" x2="36" y2="295" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="136" y1="285" x2="136" y2="295" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="86" y="306" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">25 cm</text>

                {/* Cota vertical 20 cm */}
                <line x1="24" y1="195" x2="24" y2="275" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="19" y1="195" x2="29" y2="195" stroke="#1a1a1a" strokeWidth="0.9" />
                <line x1="19" y1="275" x2="29" y2="275" stroke="#1a1a1a" strokeWidth="0.9" />
                <text x="12" y="238" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 12 238)">20 cm</text>

                {/* Anotación: solo curvas inferiores */}
                <line x1="128" y1="272" x2="160" y2="272" stroke={ACCENT} strokeWidth="0.9" />
                <text x="165" y="268" fontSize="8" fontFamily="sans-serif" fill={ACCENT}>curvas de 5 cm</text>
                <text x="165" y="279" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.75">solo abajo</text>

                {/* Marca de borde superior recto */}
                <line x1="36" y1="195" x2="136" y2="195" stroke={ACCENT} strokeWidth="2.2" opacity="0.55" />
                <text x="165" y="200" fontSize="8" fontFamily="sans-serif" fill={ACCENT} opacity="0.75">borde superior recto (va el bies)</text>
              </motion.g>
            </svg>
            <p className="text-center text-xs text-dark/45 italic mt-4">
              La base se dobla al medio para colgar; los bolsillos van en cada extremo.
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
                  <span className="text-dark"><MittenIcon size={19} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Marcar y cortar todas las piezas</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Cortar en tela el molde base (×2) y las piezas chicas de los bolsillos (×4).
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 165" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    {/* 2 bases */}
                    <rect x="20" y="22" width="180" height="30" rx="12" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" />
                    <rect x="26" y="60" width="180" height="30" rx="12" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.3" opacity="0.85" />
                    <text x="110" y="42" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">Base × 2</text>
                    {/* 4 bolsillos */}
                    {[0, 1, 2, 3].map(k => (
                      <path
                        key={k}
                        d={`M${24 + k * 46} 108 h34 v18 a8 8 0 0 1 -8 8 h-18 a8 8 0 0 1 -8 -8 z`}
                        fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2"
                      />
                    ))}
                    <text x="110" y="152" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">Bolsillos × 4</text>
                    {/* Tijera */}
                    <text x="270" y="80" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                    <text x="270" y="100" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cortar en tela</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Superponer las bases y contornear</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Superponer las dos bases con los derechos hacia afuera y contornear con costura recta todo el perímetro.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 140" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    {/* Base inferior asomando */}
                    <rect x="26" y="44" width="280" height="46" rx="18" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" opacity="0.8" />
                    {/* Base superior */}
                    <rect x="20" y="38" width="280" height="46" rx="18" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Costura de contorno */}
                    <rect x="26" y="44" width="268" height="34" rx="14" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeDasharray="5 3" opacity="0.8" />
                    <text x="160" y="65" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">derechos hacia afuera</text>
                    <text x="160" y="120" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">costura recta por todo el contorno</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Armar los bolsillos de a dos</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Juntar las piezas chicas de a dos (dos por un lado y dos por el otro), uniéndolas por la parte superior con costura recta y bies.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 165" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    {/* Par 1 */}
                    <path d="M40 40 h84 v54 a18 18 0 0 1 -18 18 h-48 a18 18 0 0 1 -18 -18 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <path d="M34 34 h84 v54 a18 18 0 0 1 -18 18 h-48 a18 18 0 0 1 -18 -18 z" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.4" />
                    <line x1="34" y1="34" x2="118" y2="34" stroke={ACCENT} strokeWidth="3.4" strokeLinecap="round" />
                    <text x="76" y="72" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">2 piezas</text>
                    {/* Par 2 */}
                    <path d="M218 40 h84 v54 a18 18 0 0 1 -18 18 h-48 a18 18 0 0 1 -18 -18 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <path d="M212 34 h84 v54 a18 18 0 0 1 -18 18 h-48 a18 18 0 0 1 -18 -18 z" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.4" />
                    <line x1="212" y1="34" x2="296" y2="34" stroke={ACCENT} strokeWidth="3.4" strokeLinecap="round" />
                    <text x="254" y="72" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">2 piezas</text>
                    {/* Leyenda bies */}
                    <line x1="140" y1="140" x2="158" y2="140" stroke={ACCENT} strokeWidth="3.4" strokeLinecap="round" />
                    <text x="164" y="143" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">bies en el borde superior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Presentar y fijar cada bolsillo</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Con el bies ya colocado en ambas piezas, presentarlas sobre cada extremo de la base y fijar cada "bolsillo" con costura recta.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 150" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    {/* Base */}
                    <rect x="20" y="44" width="290" height="48" rx="18" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Bolsillo izq */}
                    <path d="M24 48 h70 v26 a14 14 0 0 1 -14 14 h-42 a14 14 0 0 1 -14 -14 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="24" y1="48" x2="94" y2="48" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
                    {/* Bolsillo der */}
                    <path d="M236 48 h70 v26 a14 14 0 0 1 -14 14 h-42 a14 14 0 0 1 -14 -14 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.3" />
                    <line x1="236" y1="48" x2="306" y2="48" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
                    {/* Costuras de fijación */}
                    <path d="M24 52 v32 a12 12 0 0 0 12 12 h46" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeDasharray="4 2.5" opacity="0.65" />
                    <path d="M306 52 v32 a12 12 0 0 1 -12 12 h-46" fill="none" stroke="#1a1a1a" strokeWidth="1.4" strokeDasharray="4 2.5" opacity="0.65" />
                    <text x="165" y="72" textAnchor="middle" fontSize="8.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">un bolsillo en cada extremo</text>
                    <text x="165" y="132" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">fijar con costura recta</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Bies en todo el contorno — ¡listo!</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Para finalizar, colocar el bies por todo el contorno y fijarlo con una costura recta. Tu manopla está terminada.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 330 160" fill="none" style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}>
                    {/* Manopla terminada */}
                    <rect x="22" y="42" width="286" height="52" rx="20" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.4" />
                    {/* Bies contorno */}
                    <rect x="22" y="42" width="286" height="52" rx="20" fill="none" stroke={ACCENT} strokeWidth="3.4" />
                    {/* Bolsillos */}
                    <path d="M26 46 h68 v24 a14 14 0 0 1 -14 14 h-40 a14 14 0 0 1 -14 -14 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.1" />
                    <line x1="26" y1="46" x2="94" y2="46" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" />
                    <path d="M236 46 h68 v24 a14 14 0 0 1 -14 14 h-40 a14 14 0 0 1 -14 -14 z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.1" />
                    <line x1="236" y1="46" x2="304" y2="46" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" />
                    <text x="165" y="72" textAnchor="middle" fontSize="11" fill="#1a1a1a" fontFamily="serif">¡Manopla terminada!</text>
                    <text x="165" y="128" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">bies en todo el contorno, fijado con costura recta ♥</text>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Una pieza, muchos usos</p>
              <p className="text-cream text-base leading-relaxed">
                La misma manopla funciona colgada del horno o como organizador en el baño. El bies del contorno es lo que define su carácter: al tono para algo sobrio, en contraste para que sea protagonista.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CarruselModulo11 />

    </div>
  );
}
