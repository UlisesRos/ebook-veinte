import { useEffect, useState } from 'react';

const WORD = 'PORTAMATE';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function MateIcon({ size = 16 }: { size?: number }) {
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
      {/* Calabaza / mate */}
      <path d="M8 6 Q6 6 6 10 L6 18 Q6 22 12 22 Q18 22 18 18 L18 10 Q18 6 16 6 Z" />
      {/* Bombilla */}
      <line x1="12" y1="6" x2="12" y2="2" />
      <circle cx="12" cy="2" r="1" />
    </svg>
  );
}

export function Module6Practica() {
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
    'Tela exterior con cuerpo — cordura, gabardina, lona',
    'Tela interior de fácil limpieza — silver',
    'Cinta mochilera',
    'Cinta bies',
    'Hilo',
    'Alfileres',
    'Para moldería: papel madera, lápiz, regla o escuadra',
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
          Práctica · Módulo VI
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(2.4rem, 10vw, 7.4rem)',
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

        {/* Dos fotos verticales lado a lado */}
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
              src="/portamate.png"
              alt="Porta mate argentino terminado"
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
              src="/portamate2.png"
              alt="Porta mate argentino detalle"
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
            <svg viewBox="0 0 560 300" style={{ width: '100%', height: 'auto', display: 'block' }} fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">

              {/* Pieza 1 — Rectángulo 26×17cm con fuelles 6×6 */}
              <rect x="30" y="40" width="210" height="160" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Fuelles inferiores — cuadrados 6×6 en esquinas */}
              <rect x="30" y="160" width="48" height="40" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="30" y1="200" x2="78" y2="160" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />

              <rect x="192" y="160" width="48" height="40" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="240" y1="200" x2="192" y2="160" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />

              {/* Dimension ancho */}
              <line x1="30" y1="218" x2="240" y2="218" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="30" y1="212" x2="30" y2="224" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="240" y1="212" x2="240" y2="224" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="135" y="232" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">17 cm</text>

              {/* Dimension alto */}
              <line x1="10" y1="40" x2="10" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="4" y1="40" x2="16" y2="40" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="4" y1="200" x2="16" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="0" y="125" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 0 125)">26 cm</text>

              {/* Labels fuelles */}
              <text x="54" y="255" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">fuelle 6×6</text>
              <text x="216" y="255" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">fuelle 6×6</text>

              {/* Label pieza */}
              <text x="135" y="110" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Cuerpo principal</text>
              <text x="135" y="128" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 1 exterior + × 1 interior</text>

              {/* Pieza 2 — Rectángulo 18×12cm */}
              <rect x="320" y="80" width="180" height="135" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Dimension ancho */}
              <line x1="320" y1="232" x2="500" y2="232" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="320" y1="226" x2="320" y2="238" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="500" y1="226" x2="500" y2="238" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="410" y="250" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">12 cm</text>

              {/* Dimension alto */}
              <line x1="300" y1="80" x2="300" y2="215" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="294" y1="80" x2="306" y2="80" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="294" y1="215" x2="306" y2="215" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="290" y="152" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 290 152)">18 cm</text>

              {/* Centro marcado */}
              <line x1="410" y1="80" x2="410" y2="215" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
              <text x="410" y="75" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">centro</text>

              {/* Label pieza */}
              <text x="410" y="148" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Tapa / Base</text>
              <text x="410" y="166" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 2 unidades</text>

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
                  <span className="text-dark"><MateIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Cortar rectángulo 26×17 con fuelles 6×6 en tela exterior e interior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Trazar el rectángulo de 26×17 cm con los cuadrados de 6×6 cm en los extremos inferiores. Cortar una pieza en tela exterior y otra en tela interior (silver).</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo principal */}
                    <rect x="40" y="20" width="160" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Fuelles esquinas inferiores */}
                    <rect x="40" y="112" width="30" height="38" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="40" y1="150" x2="70" y2="112" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
                    <rect x="170" y="112" width="30" height="38" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="200" y1="150" x2="170" y2="112" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5" />
                    {/* Labels */}
                    <text x="120" y="75" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">26 × 17 cm</text>
                    <text x="55" y="170" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">6×6</text>
                    <text x="185" y="170" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">6×6</text>
                    {/* Tijera */}
                    <text x="255" y="90" textAnchor="middle" fontSize="18" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="255" y="115" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">ext + int</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Enfrentar derechos y unir en la parte superior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Colocar tela interior y exterior con los derechos enfrentados. Unir únicamente en la parte superior con costura recta.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Exterior */}
                    <rect x="25" y="40" width="120" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="85" y="110" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">DERECHO</text>
                    <text x="85" y="122" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">exterior</text>
                    {/* Interior */}
                    <rect x="175" y="40" width="120" height="130" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama silver */}
                    {[190, 205, 220, 235, 250, 265, 280].map((x) => (
                      <line key={x} x1={x} y1="45" x2={x} y2="165" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.25" />
                    ))}
                    <text x="235" y="110" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">DERECHO</text>
                    <text x="235" y="122" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">interior</text>
                    {/* Costura superior */}
                    <line x1="30" y1="44" x2="140" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.8" />
                    <line x1="180" y1="44" x2="290" y2="44" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.8" />
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta solo en la parte superior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta y unir falsos fuelles</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Una vez cosida la parte superior, dar vuelta y unir los falsos fuelles con costura recta, uniendo fuelle interno y externo en una misma costura.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza dada vuelta */}
                    <rect x="60" y="20" width="200" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Fuelle izquierdo aplanado */}
                    <rect x="60" y="122" width="40" height="38" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    {/* Costura fuelle izq */}
                    <line x1="60" y1="122" x2="100" y2="122" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
                    {/* Fuelle derecho aplanado */}
                    <rect x="220" y="122" width="40" height="38" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    {/* Costura fuelle der */}
                    <line x1="220" y1="122" x2="260" y2="122" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
                    <text x="160" y="80" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">dado vuelta</text>
                    <text x="80" y="175" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">fuelle</text>
                    <text x="240" y="175" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">fuelle</text>
                    <text x="160" y="190" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">coser int + ext en una misma costura</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta y hacer pespunte en todos los bordes</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Dar vuelta la pieza y hacer un pespunte en la parte superior, los laterales y la base para unir ambas telas y dejar un acabado prolijo.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza terminada */}
                    <rect x="60" y="20" width="200" height="150" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Pespunte superior */}
                    <line x1="65" y1="27" x2="255" y2="27" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    {/* Pespunte laterales */}
                    <line x1="67" y1="25" x2="67" y2="163" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    <line x1="253" y1="25" x2="253" y2="163" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    {/* Pespunte base */}
                    <line x1="65" y1="163" x2="255" y2="163" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    {/* Label pespunte */}
                    <text x="160" y="95" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">pespunte perimetral</text>
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">superior + laterales + base</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Marcar centro y colocar manijas en rectángulo 18×12</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">En el rectángulo de 18×12 cm marcar el centro de los 12 cm. Dejar 1 cm para cada lado del centro para colocar la cinta mochilera de 28 cm. Coser para sujetar las manijas y reservar esta pieza.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo 18×12 */}
                    <rect x="40" y="30" width="240" height="100" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Línea de centro */}
                    <line x1="160" y1="30" x2="160" y2="130" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
                    <text x="160" y="22" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">centro</text>
                    {/* 1cm cada lado */}
                    <line x1="148" y1="30" x2="148" y2="130" stroke="#1a1a1a" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.35" />
                    <line x1="172" y1="30" x2="172" y2="130" stroke="#1a1a1a" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.35" />
                    {/* Medida 1cm */}
                    <line x1="148" y1="140" x2="160" y2="140" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="160" y1="140" x2="172" y2="140" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="148" y1="136" x2="148" y2="144" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="172" y1="136" x2="172" y2="144" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="160" y="155" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">1cm + 1cm</text>
                    {/* Cinta mochilera */}
                    <rect x="148" y="33" width="24" height="94" rx="2" fill="#1a1a1a" opacity="0.65" />
                    <text x="160" y="84" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">manija</text>
                    <text x="160" y="95" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">28 cm</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Marcar centro con piquete en el otro rectángulo 18×12</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">En el segundo rectángulo de 18×12 cm, marcar el centro con un piquete y centrar sobre él la posición del contenedor del mate (el cuerpo cilíndrico).</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo 18×12 */}
                    <rect x="40" y="30" width="240" height="100" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama */}
                    {[60, 85, 110, 135, 160, 185, 210, 235, 260].map((x) => (
                      <line key={x} x1={x} y1="35" x2={x} y2="125" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    {/* Línea de centro */}
                    <line x1="160" y1="30" x2="160" y2="130" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
                    {/* Piquete (corte pequeño en el borde) */}
                    <line x1="160" y1="30" x2="160" y2="34" stroke="#1a1a1a" strokeWidth="2" />
                    <text x="160" y="22" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">piquete</text>
                    {/* Contenedor del mate — elipse centrada */}
                    <ellipse cx="160" cy="80" rx="35" ry="40" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 2" />
                    <text x="160" y="77" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">mate</text>
                    <text x="160" y="89" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">centrado</text>
                    <text x="160" y="160" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">centrar contenedor del mate con piquete</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coincidir centros y unir ambas piezas</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Alinear el piquete de centro de ambos rectángulos de 18×12 cm y unirlos con costura recta, coincidiendo los centros.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza A */}
                    <rect x="20" y="50" width="120" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="80" y1="50" x2="80" y2="130" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
                    <text x="80" y="95" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">centro</text>
                    {/* Cinta manija */}
                    <rect x="73" y="52" width="14" height="76" rx="1" fill="#1a1a1a" opacity="0.6" />
                    {/* Pieza B */}
                    <rect x="180" y="50" width="120" height="80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="240" y1="50" x2="240" y2="130" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
                    <text x="240" y="95" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">centro</text>
                    {/* Elipse mate */}
                    <ellipse cx="240" cy="90" rx="22" ry="30" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    {/* Flechas de unión */}
                    <defs>
                      <marker id="arr6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <line x1="145" y1="90" x2="175" y2="90" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr6)" />
                    <text x="160" y="170" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">coincidir centros · costura recta</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Enfrentar rectángulo con manija al resto (frente con frente)</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Tomar el rectángulo al que le cosimos la cinta mochilera y enfrentarlo con la otra pieza de 18×12 cm, con los derechos hacia adentro (frente con frente).</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza con manija arriba */}
                    <rect x="60" y="20" width="200" height="70" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="148" y="22" width="24" height="66" rx="1" fill="#1a1a1a" opacity="0.55" />
                    <text x="90" y="58" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">con manija</text>
                    <text x="90" y="68" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">DERECHO</text>
                    {/* Pieza contenedor abajo */}
                    <rect x="60" y="110" width="200" height="70" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <ellipse cx="160" cy="145" rx="28" ry="24" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="230" y="148" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">contenedor</text>
                    <text x="230" y="158" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">DERECHO</text>
                    {/* Label frente con frente */}
                    <text x="160" y="188" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">derechos enfrentados</text>
                  </svg>
                </div>
              </div>

              {/* Paso 9 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser únicamente en la parte de arriba</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Con las piezas enfrentadas, coser solo en la parte superior para unirlas por esa zona, sin cerrar los laterales ni la base aún.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Las dos piezas enfrentadas */}
                    <rect x="60" y="30" width="200" height="60" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="60" y="90" width="200" height="60" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="5 3" />
                    {/* Costura superior */}
                    <line x1="65" y1="33" x2="255" y2="33" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.85" />
                    {/* Label */}
                    <text x="160" y="25" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">costura recta superior</text>
                    {/* Los otros lados marcados como "sin coser" */}
                    <text x="10" y="90" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">abierto</text>
                    <text x="270" y="90" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">abierto</text>
                    <text x="160" y="165" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">solo el borde superior · laterales y base abiertos</text>
                  </svg>
                </div>
              </div>

              {/* Paso 10 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta y coser todo el contorno</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Dar vuelta la pieza por la parte abierta y coser todo el contorno para unir las dos telas, dejando el porta mate completamente ensamblado.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza dada vuelta, vista completa */}
                    <rect x="60" y="30" width="200" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Cinta manija */}
                    <rect x="148" y="32" width="24" height="126" rx="1" fill="#1a1a1a" opacity="0.55" />
                    {/* Costura de todo el contorno */}
                    <rect x="66" y="36" width="188" height="118" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura perimetral</text>
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">dar vuelta · coser todo el contorno</text>
                  </svg>
                </div>
              </div>

              {/* Paso 11 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar cinta bies en el contorno</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Para darle una terminación prolija, colocar cinta bies en todo el contorno del porta mate, cubriendo la costura exterior y dando un acabado impecable.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza terminada */}
                    <rect x="60" y="30" width="200" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Cinta manija */}
                    <rect x="148" y="32" width="24" height="126" rx="1" fill="#1a1a1a" opacity="0.55" />
                    {/* Bies en contorno */}
                    <rect x="55" y="25" width="210" height="140" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
                    {/* Label bies */}
                    <text x="160" y="18" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">bies en contorno</text>
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">terminación prolija perimetral</text>
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {/* Tip final */}
          <div className="bg-dark text-cream px-8 py-8 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">!</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Tip final</p>
              <p className="text-cream text-base leading-relaxed">
                El silver en el interior facilita la limpieza del porta mate. El bies en el contorno no es solo estético: también refuerza el borde y evita que se deshilache con el uso diario.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
