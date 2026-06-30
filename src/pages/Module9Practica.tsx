import { useEffect, useState } from 'react';

const WORD = 'ALMOHADÓN';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function CushionIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="3" y="6" width="18" height="12" rx="5" />
      <path d="M3 12c3-2 6-2 9 0s6 2 9 0" opacity="0.45" />
    </svg>
  );
}

export function Module9Practica() {
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

  const materiales = [
    'Tela: tusor, lienzo, algodón o gabardina',
    'Para molde interior: friselina',
    'Hilo',
    'Alfileres',
    'Para decorar a gusto: cintas, encajes, flecos, etc.',
    'Para moldería: papel madera, lápiz, regla/escuadra, centímetro, tijera',
  ];

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
          Práctica · Módulo IX
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(2rem, 9vw, 6.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '6vh',
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

        {/* Dos fotos polaroid lado a lado — igual que Módulo 8 */}
        <div
          style={{
            position: 'relative',
            width: 'min(88vw, 580px)',
            height: 'clamp(280px, 56vw, 460px)',
            flexShrink: 0,
            marginTop: '-2vh',
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
              src="/almohadon-m9.png"
              alt="Almohadón terminado"
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
              src="/almohadon-m9-2.png"
              alt="Almohadón detalle decoración"
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

          <div className="w-full overflow-hidden bg-white" style={{ padding: '24px 16px' }}>
            <svg
              viewBox="0 0 590 310"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* ── DELANTERO 60×41 — escala: 60→270px, 41→184px ── */}
              <rect x="20" y="20" width="270" height="184" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
              <rect x="26" y="26" width="258" height="172" fill="none" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="5 3" />

              <text x="155" y="107" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Delantero</text>
              <text x="155" y="123" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.55">60 × 41 cm — × 1</text>

              {/* Cota ancho delantero */}
              <line x1="20" y1="224" x2="290" y2="224" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="20" y1="218" x2="20" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="290" y1="218" x2="290" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="155" y="242" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">60 cm</text>

              {/* Cota alto delantero */}
              <line x1="8" y1="20" x2="8" y2="204" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="20" x2="14" y2="20" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="204" x2="14" y2="204" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="0" y="112" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 0 112)">41 cm</text>

              {/* ── TRASERO 34×41 — escala: 34→153px, 41→184px ── */}
              <rect x="318" y="20" width="153" height="184" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
              <rect x="324" y="26" width="141" height="172" fill="none" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="5 3" />

              {/* Dobladillo en lateral derecho */}
              <rect x="459" y="20" width="12" height="184" fill="none" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 2" opacity="0.7" />

              <text x="394" y="107" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Trasero</text>
              <text x="394" y="123" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.55">34 × 41 cm — × 2</text>
              <text x="495" y="115" textAnchor="start" fontSize="8" fontFamily="serif" fill="#1a1a1a" opacity="0.6">dobladillo</text>

              {/* Cota ancho trasero */}
              <line x1="318" y1="224" x2="471" y2="224" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="318" y1="218" x2="318" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="471" y1="218" x2="471" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="394" y="242" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">34 cm</text>

              {/* Legend */}
              <text x="20" y="270" fontSize="9" fontFamily="monospace" fill="#1a1a1a">① Delantero: 1 pieza (60 × 41 cm)</text>
              <text x="20" y="284" fontSize="9" fontFamily="monospace" fill="#1a1a1a">② Traseros: 2 piezas (34 × 41 cm c/u) — hacer dobladillo en lateral marcado antes de armar</text>
              <text x="20" y="298" fontSize="9" fontFamily="monospace" fill="#1a1a1a" opacity="0.4">SA no incluida — considerar 1,5 cm por lado</text>
            </svg>
          </div>

          {/* Materiales */}
          <div className="space-y-4">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">02. Lo que necesitás</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Materiales</h2>
            </div>
            <ul className="space-y-0 divide-y divide-border/30">
              {materiales.map((item, i) => (
                <li key={i} className="flex items-center gap-4 py-4">
                  <span className="text-dark"><CushionIcon size={18} /></span>
                  <span className="font-body text-base text-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pasos */}
          <div className="space-y-0">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">03. Proceso</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Pasos</h2>
            </div>

            <div className="space-y-10 pt-8">

              {/* Paso 1 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>01</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 1</p>
                <h3 className="font-display text-xl text-dark leading-snug">Recortar los tres moldes en tela</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Cortar en tela simple el rectángulo de 60×41cm (delantero ×1) y los dos rectángulos de 34×41cm (traseros ×2).
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Delantero */}
                    <rect x="15" y="20" width="140" height="100" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="85" y="67" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">60 × 41 cm</text>
                    <text x="85" y="81" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Delantero × 1</text>
                    {/* Trasero 1 */}
                    <rect x="165" y="20" width="62" height="100" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="196" y="65" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif">34 × 41 cm</text>
                    <text x="196" y="78" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Trasero × 2</text>
                    {/* Scissors */}
                    <text x="275" y="80" textAnchor="middle" fontSize="22" fill="#1a1a1a">✂</text>
                    <text x="275" y="102" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cortar</text>
                    <text x="160" y="145" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">3 moldes en tela simple</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dobladillo en los traseros</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  En los rectángulos más chicos, en uno de sus laterales de 41cm, hacer dobladillo y coser con costura recta en máquina. Repetir en ambas piezas traseras.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Trasero con dobladillo */}
                    <rect x="60" y="20" width="100" height="110" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Dobladillo lateral */}
                    <rect x="142" y="20" width="18" height="110" rx="1" fill="none" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="3 2" />
                    {/* Stitch line */}
                    <line x1="138" y1="20" x2="138" y2="130" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
                    <text x="110" y="80" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">34 × 41 cm</text>
                    <text x="185" y="80" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">dobladillo</text>
                    <text x="160" y="148" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura recta en el lateral de 41cm · repetir en ambas piezas</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 — CREATIVO */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">★  Paso Creativo N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Agregar la decoración del almohadón</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Agregar la decoración en los bordes del delantero: flecos, volados, puntillas, cintas, etc. Este es el paso donde el almohadón cobra personalidad y estilo propio.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none">
                    {/* Delantero */}
                    <rect x="40" y="30" width="200" height="120" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Flecos en borde inferior */}
                    {Array.from({ length: 16 }).map((_, i) => (
                      <line
                        key={i}
                        x1={47 + i * 12}
                        y1="150"
                        x2={47 + i * 12}
                        y2="165"
                        stroke="#1a1a1a"
                        strokeWidth="1.2"
                        opacity="0.7"
                      />
                    ))}
                    {/* Volado en borde superior */}
                    <path
                      d={`M40 30 ${Array.from({ length: 10 }, (_, i) => {
                        const x1 = 40 + i * 20;
                        const x2 = x1 + 10;
                        return `Q${x1 + 5} 18 ${x2} 30`;
                      }).join(' ')}`}
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="1.2"
                      opacity="0.7"
                    />
                    <text x="140" y="97" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="serif" opacity="0.5">decoración a gusto</text>
                    <text x="140" y="113" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.35">flecos · volados · puntillas · cintas</text>
                    <text x="140" y="170" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">★  el paso donde el almohadón cobra personalidad</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Enfrentar derechos para unir piezas</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Colocar el rectángulo de 60×41cm (frente) con los rectángulos más pequeños, enfrentando los derechos de la tela.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none">
                    {/* Delantero abajo */}
                    <rect x="30" y="70" width="190" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="125" y="117" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Delantero 60 × 41cm (abajo)</text>
                    {/* Trasero 1 encima izq */}
                    <rect x="30" y="20" width="88" height="80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="74" y="62" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Trasero 1</text>
                    {/* Trasero 2 encima der */}
                    <rect x="132" y="20" width="88" height="80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.8" />
                    <text x="176" y="62" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Trasero 2</text>
                    {/* Flechas abajo */}
                    <line x1="74" y1="100" x2="74" y2="72" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
                    <line x1="176" y1="100" x2="176" y2="72" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
                    <text x="160" y="162" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">derechos enfrentados</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir telas del lado sin dobladillo</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Unir las telas del lado que no tiene dobladillo con costura recta en máquina.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Vista lateral de las capas */}
                    <rect x="40" y="30" width="200" height="40" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="40" y="70" width="95" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="145" y="70" width="95" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" opacity="0.7" />
                    {/* Stitch line en lado libre (izq) */}
                    <line x1="40" y1="25" x2="40" y2="115" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 2" opacity="0.75" />
                    <text x="28" y="75" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6" transform="rotate(-90 28 75)">costura</text>
                    <text x="160" y="148" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura recta en el lado sin dobladillo</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Presentar solapas y coser todo el contorno</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Presentar una "solapa" por encima de la otra. Sostener con alfiler y coser con costura recta por todo el contorno ya unidas con el delantero.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none">
                    {/* Conjunto unido */}
                    <rect x="30" y="30" width="230" height="120" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Solapa A */}
                    <rect x="30" y="30" width="118" height="120" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" opacity="0.8" />
                    {/* Solapa B encima */}
                    <rect x="142" y="30" width="118" height="120" fill="white" stroke="#1a1a1a" strokeWidth="1" opacity="0.7" />
                    {/* Alfileres */}
                    <circle cx="80" cy="55" r="3" fill="#1a1a1a" opacity="0.6" />
                    <circle cx="205" cy="55" r="3" fill="#1a1a1a" opacity="0.6" />
                    <circle cx="80" cy="120" r="3" fill="#1a1a1a" opacity="0.6" />
                    <circle cx="205" cy="120" r="3" fill="#1a1a1a" opacity="0.6" />
                    {/* Contorno de costura */}
                    <rect x="35" y="35" width="220" height="110" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5 3" opacity="0.6" />
                    <text x="145" y="92" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">solapa sobre solapa</text>
                    <text x="145" y="158" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura recta por todo el contorno</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta la funda</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Dar vuelta la funda para que el lado derecho quede visible y las costuras queden hacia adentro.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 150" fill="none">
                    {/* Interior visible → exterior visible */}
                    <rect x="20" y="25" width="110" height="80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="75" y="65" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">interior</text>
                    <text x="75" y="77" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">visible</text>
                    {/* Arrow */}
                    <path d="M145 65 Q175 50 200 65" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    <polygon points="197,57 205,66 212,56" fill="#1a1a1a" opacity="0.6" />
                    <rect x="215" y="25" width="80" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="255" y="63" textAnchor="middle" fontSize="7.5" fill="#1a1a1a" fontFamily="sans-serif">exterior</text>
                    <text x="255" y="75" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">visible</text>
                    <text x="160" y="132" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">dar vuelta la funda · costuras hacia adentro</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar moldes de friselina para el relleno</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Para la funda de relleno interior: en friselina cortar 2 moldes de 60×41cm.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Friselina — textura reticulada */}
                    <rect x="30" y="20" width="120" height="90" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="8 4" />
                    {/* Patrón reticulado sutil */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <line key={`h${i}`} x1="30" y1={35 + i * 18} x2="150" y2={35 + i * 18} stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    {Array.from({ length: 7 }).map((_, i) => (
                      <line key={`v${i}`} x1={47 + i * 17} y1="20" x2={47 + i * 17} y2="110" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    <text x="90" y="60" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">Friselina</text>
                    <text x="90" y="74" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">60 × 41 cm</text>

                    {/* Segunda pieza, offset */}
                    <rect x="168" y="40" width="120" height="90" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="8 4" />
                    {Array.from({ length: 5 }).map((_, i) => (
                      <line key={`h2${i}`} x1="168" y1={55 + i * 18} x2="288" y2={55 + i * 18} stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    <text x="228" y="90" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">× 2</text>

                    <text x="160" y="150" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">2 moldes de friselina 60 × 41 cm</text>
                  </svg>
                </div>
              </div>

              {/* Paso 9 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser el relleno dejando abertura</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Coser los dos moldes de friselina por todo su contorno, dejando una abertura de 10cm para introducir el relleno.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none">
                    <rect x="40" y="25" width="220" height="120" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="8 4" />
                    {/* Costura — todo el contorno menos la abertura */}
                    <rect x="44" y="29" width="212" height="112" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5 2" opacity="0.65" />
                    {/* Abertura de 10cm en borde inferior */}
                    <line x1="120" y1="141" x2="180" y2="141" stroke="white" strokeWidth="4" />
                    <line x1="120" y1="141" x2="180" y2="141" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="0 0" opacity="0.2" />
                    {/* Flechas marcando abertura */}
                    <line x1="120" y1="155" x2="180" y2="155" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="120" y1="150" x2="120" y2="160" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="180" y1="150" x2="180" y2="160" stroke="#1a1a1a" strokeWidth="0.9" />
                    <text x="150" y="165" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">10 cm — abertura</text>
                    <text x="150" y="85" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.45">costura en todo el contorno</text>
                  </svg>
                </div>
              </div>

              {/* Paso 10 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">Rellenar con vellón siliconado</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Introducir vellón siliconado por la abertura para rellenar la funda interior hasta lograr el volumen y firmeza deseados.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none">
                    {/* Funda friselina */}
                    <rect x="60" y="30" width="160" height="110" rx="8" fill="#F0EBE0" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Vellón — bolitas de relleno */}
                    {[
                      [100, 75], [130, 60], [160, 75], [120, 95], [150, 95], [140, 75],
                      [90, 95], [170, 60], [110, 60],
                    ].map(([cx, cy], i) => (
                      <circle key={i} cx={cx} cy={cy} r="12" fill="white" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.8" />
                    ))}
                    {/* Abertura inferior con flecha de entrada */}
                    <line x1="118" y1="140" x2="182" y2="140" stroke="white" strokeWidth="5" />
                    <line x1="118" y1="140" x2="182" y2="140" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
                    {/* Flecha entrando */}
                    <line x1="150" y1="158" x2="150" y2="142" stroke="#1a1a1a" strokeWidth="1.5" />
                    <polygon points="144,148 150,140 156,148" fill="#1a1a1a" opacity="0.6" />
                    <text x="150" y="168" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">introducir vellón siliconado por la abertura</text>
                  </svg>
                </div>
              </div>

              {/* Paso 11 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cerrar y colocar dentro de la funda — ¡listo!</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Cerrar con costura a mano la abertura. Colocar el almohadón relleno dentro de la funda decorada. ¡Tu almohadón está terminado!
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 170" fill="none">
                    {/* Almohadón terminado */}
                    <rect x="50" y="25" width="200" height="120" rx="12" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Decoración flecos inferior */}
                    {Array.from({ length: 18 }).map((_, i) => (
                      <line
                        key={i}
                        x1={57 + i * 11}
                        y1="145"
                        x2={57 + i * 11}
                        y2="157"
                        stroke="#1a1a1a"
                        strokeWidth="1.2"
                        opacity="0.6"
                      />
                    ))}
                    {/* Apertura posterior */}
                    <line x1="125" y1="145" x2="175" y2="145" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
                    {/* Centro acolchado */}
                    <ellipse cx="150" cy="85" rx="55" ry="35" fill="none" stroke="#1a1a1a" strokeWidth="0.8" opacity="0.2" />
                    <text x="150" y="89" textAnchor="middle" fontSize="11" fill="#1a1a1a" fontFamily="serif">¡Almohadón terminado!</text>
                    <text x="150" y="162" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">coser abertura a mano · insertar en la funda ♥</text>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">★</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">El paso que marca la diferencia</p>
              <p className="text-cream text-base leading-relaxed">
                El paso 3 es donde el almohadón cobra personalidad. No te saltes la decoración: es lo que transforma una funda funcional en una pieza con identidad propia.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
