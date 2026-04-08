import { useEffect, useState } from 'react';

const WORD = 'PANERA';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function PaneraIcon({ size = 16 }: { size?: number }) {
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
      <path d="M4 10 Q4 7 12 7 Q20 7 20 10 L20 17 Q20 19 12 19 Q4 19 4 17 Z" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <path d="M8 7 Q8 4 12 4 Q16 4 16 7" />
    </svg>
  );
}

export function Module3Practica() {
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
    'Tela plana con cuerpo — lienzo, gabardina',
    'Hilo',
    'Bies',
    'Papel madera',
    'Lápiz',
    'Regla',
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
          Práctica · Módulo III
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 9rem)',
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

        {/* Dos fotos verticales lado a lado — como Módulo I */}
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
              src="/panera1.jpg"
              alt="Cesta panera"
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
              src="/panera2.jpg"
              alt="Cesta panera cuadrillé"
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
            <svg viewBox="0 0 560 260" style={{ width: '100%', height: 'auto', display: 'block' }} fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">

              {/* Rectángulo 35×40 cm — × 2 piezas */}
              <rect x="50" y="50" width="175" height="200" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* Dimensión ancho 35 cm */}
              <line x1="50" y1="28" x2="225" y2="28" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="50" y1="23" x2="50" y2="33" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="225" y1="23" x2="225" y2="33" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="137" y="22" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">35 cm</text>
              {/* Dimensión alto 40 cm */}
              <line x1="26" y1="50" x2="26" y2="250" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="21" y1="50" x2="31" y2="50" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="21" y1="250" x2="31" y2="250" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="14" y="155" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 14 155)">40 cm</text>
              <text x="137" y="145" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Rectángulo</text>
              <text x="137" y="162" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" opacity="0.7">35 × 40 cm  ×  2</text>
              <text x="137" y="178" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.5">(frente + forro)</text>

              {/* Cuadrado fuelle 7×7 cm */}
              <rect x="360" y="90" width="110" height="110" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* Dimensión 7 cm */}
              <line x1="360" y1="68" x2="470" y2="68" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="360" y1="63" x2="360" y2="73" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="470" y1="63" x2="470" y2="73" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="415" y="62" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">7 cm</text>
              <line x1="338" y1="90" x2="338" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="333" y1="90" x2="343" y2="90" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="333" y1="200" x2="343" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="326" y="150" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 326 150)">7 cm</text>
              <text x="415" y="145" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Fuelle</text>
              <text x="415" y="162" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">7 × 7 cm</text>
              <text x="415" y="178" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.5">× 2 esquinas</text>
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
                  <span className="text-dark"><PaneraIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Recortar los dos rectángulos</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Recortar en tela dos rectángulos de 35 × 40 cm: uno para el frente (tela exterior) y otro para el forro interior.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo frente */}
                    <rect x="20" y="30" width="105" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="20" y1="16" x2="125" y2="16" stroke="#1a1a1a" strokeWidth="1" />
                    <line x1="20" y1="12" x2="20" y2="20" stroke="#1a1a1a" strokeWidth="1" />
                    <line x1="125" y1="12" x2="125" y2="20" stroke="#1a1a1a" strokeWidth="1" />
                    <text x="72" y="10" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">35 cm</text>
                    <line x1="6" y1="30" x2="6" y2="170" stroke="#1a1a1a" strokeWidth="1" />
                    <line x1="2" y1="30" x2="10" y2="30" stroke="#1a1a1a" strokeWidth="1" />
                    <line x1="2" y1="170" x2="10" y2="170" stroke="#1a1a1a" strokeWidth="1" />
                    <text x="4" y="103" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" transform="rotate(-90 4 103)">40 cm</text>
                    <text x="72" y="96" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">FRENTE</text>
                    {/* Rectángulo forro */}
                    <rect x="195" y="30" width="105" height="140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {[210, 222, 234, 246, 258, 270, 282].map((x) => (
                      <line key={x} x1={x} y1="35" x2={x} y2="165" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.3" />
                    ))}
                    <text x="247" y="96" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">FORRO</text>
                    {/* Igual */}
                    <text x="163" y="103" textAnchor="middle" fontSize="11" fill="#1a1a1a" fontFamily="sans-serif">≡</text>
                    <text x="163" y="118" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">× 2</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Marcar y recortar el fuelle</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">En la base del rectángulo, marcar un cuadrado de 7 × 7 cm en cada esquina inferior. Recortar ambos cuadrados.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo con esquinas marcadas */}
                    <rect x="60" y="20" width="200" height="150" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Cuadrado esquina izquierda */}
                    <rect x="60" y="143" width="30" height="27" fill="#D4CBBF" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    {/* Cuadrado esquina derecha */}
                    <rect x="230" y="143" width="30" height="27" fill="#D4CBBF" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    {/* Dimensión cuadrado */}
                    <line x1="60" y1="178" x2="90" y2="178" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="60" y1="174" x2="60" y2="182" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="90" y1="174" x2="90" y2="182" stroke="#1a1a1a" strokeWidth="0.9" />
                    <text x="75" y="192" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">7 cm</text>
                    <line x1="44" y1="143" x2="44" y2="170" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="40" y1="143" x2="48" y2="143" stroke="#1a1a1a" strokeWidth="0.9" />
                    <line x1="40" y1="170" x2="48" y2="170" stroke="#1a1a1a" strokeWidth="0.9" />
                    <text x="38" y="160" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" transform="rotate(-90 38 160)">7 cm</text>
                    {/* Tijera */}
                    <text x="75" y="158" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="245" y="158" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="160" y="95" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">base</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Repetir con el forro</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Realizar el mismo procedimiento con la pieza de forro: marcar y recortar los cuadrados de 7 × 7 cm en las esquinas inferiores.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Frente ya cortado */}
                    <rect x="20" y="20" width="120" height="150" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="20" y="143" width="22" height="27" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                    <rect x="118" y="143" width="22" height="27" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                    <text x="80" y="95" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">FRENTE ✓</text>
                    {/* Forro — mismo proceso */}
                    <rect x="180" y="20" width="120" height="150" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {[196, 208, 220, 232, 244, 256, 268, 280].map((x) => (
                      <line key={x} x1={x} y1="25" x2={x} y2="165" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.25" />
                    ))}
                    {/* Esquinas marcadas en forro */}
                    <rect x="180" y="143" width="22" height="27" fill="#C8BFB2" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <rect x="278" y="143" width="22" height="27" fill="#C8BFB2" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="190" y="157" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="289" y="157" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="240" y="95" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">FORRO</text>
                    {/* Flecha */}
                    <text x="155" y="100" textAnchor="middle" fontSize="12" fill="#1a1a1a" fontFamily="sans-serif">→</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir base y laterales con derechos enfrentados</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Con los derechos de la tela enfrentados, unir con alfileres la base y los laterales del rectángulo. Coser con costura recta.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza doblada — derechos adentro */}
                    <rect x="70" y="30" width="180" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Interior (derecho) marcado con líneas */}
                    <rect x="82" y="42" width="156" height="106" fill="none" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
                    {/* Costuras laterales */}
                    <line x1="82" y1="30" x2="82" y2="160" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="3 2" />
                    <line x1="238" y1="30" x2="238" y2="160" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="3 2" />
                    {/* Costura base */}
                    <line x1="70" y1="148" x2="250" y2="148" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="3 2" />
                    {/* Alfileres */}
                    {[100, 130, 160, 190, 220].map((x) => (
                      <g key={x}>
                        <circle cx={x} cy={30} r="3" fill="#1a1a1a" />
                        <line x1={x} y1="33" x2={x} y2="48" stroke="#1a1a1a" strokeWidth="1.2" />
                      </g>
                    ))}
                    <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">derechos enfrentados</text>
                    <text x="55" y="95" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">coser</text>
                    <text x="265" y="95" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">coser</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser el fuelle con costura recta</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Una vez cosido el cuerpo, abrir cada esquina recortada enfrentando costura con costura y coser con costura recta. Esto forma la base.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Detalle esquina — apertura */}
                    <g transform="translate(10, 10)">
                      <text x="60" y="12" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">esquina abierta</text>
                      <path d="M10,80 L90,80 L90,45 L115,20 L115,80 L115,115 L10,115 Z" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                      <line x1="90" y1="20" x2="115" y2="20" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
                      <line x1="10" y1="97" x2="115" y2="97" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 2" />
                      <text x="60" y="182" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">abrir y alinear</text>
                    </g>
                    {/* Flecha */}
                    <text x="160" y="115" textAnchor="middle" fontSize="18" fill="#1a1a1a" fontFamily="sans-serif">→</text>
                    {/* Resultado */}
                    <g transform="translate(182, 10)">
                      <text x="60" y="12" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">fuelle cosido</text>
                      <rect x="15" y="50" width="90" height="90" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                      <line x1="15" y1="140" x2="105" y2="140" stroke="#1a1a1a" strokeWidth="2" />
                      {/* Perspectiva base 3D */}
                      <path d="M15,140 L5,152 L95,152 L105,140 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" />
                      <text x="60" y="168" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">base con volumen</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Introducir el forro en el interior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Con el frente y el forro ya armados, colocar el forro en el interior de la estructura del frente para unir ambas partes. Alinear los bordes superiores.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Estructura exterior */}
                    <rect x="60" y="50" width="200" height="130" rx="3" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M60,180 L50,192 L250,192 L260,180 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" />
                    {/* Forro insertado */}
                    <rect x="76" y="65" width="168" height="100" rx="2" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 2" />
                    {[96, 114, 132, 150, 168, 186, 204, 222].map((x) => (
                      <line key={x} x1={x} y1="70" x2={x} y2="160" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    {/* Flecha de inserción */}
                    <defs>
                      <marker id="arrowDown6b" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
                        <path d="M0,0 L3,6 L6,0 Z" fill="#1a1a1a" />
                      </marker>
                    </defs>
                    <line x1="160" y1="16" x2="160" y2="44" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrowDown6b)" />
                    <text x="160" y="10" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">insertar forro</text>
                    {/* Línea borde superior */}
                    <line x1="60" y1="50" x2="260" y2="50" stroke="#1a1a1a" strokeWidth="2" />
                    <text x="160" y="44" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">bordes alineados</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Costura superior y cinta bies</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Dar costura recta en la parte superior uniendo frente y forro. Colocar cinta bies alrededor del borde superior para emprolijar y terminar la panera.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Cesta terminada */}
                    {/* Cuerpo */}
                    <rect x="80" y="80" width="160" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Base perspectiva */}
                    <path d="M80,190 L70,202 L230,202 L240,190 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" />
                    {/* Forro visible interior */}
                    <rect x="90" y="88" width="140" height="85" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.4" />
                    {/* Bies — banda en el borde superior */}
                    <rect x="80" y="70" width="160" height="12" rx="2" fill="#C8BFB2" stroke="#1a1a1a" strokeWidth="1.2" />
                    {/* Costura recta sobre el bies */}
                    <line x1="80" y1="76" x2="240" y2="76" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    {/* Etiquetas */}
                    <text x="250" y="77" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">bies</text>
                    <line x1="240" y1="76" x2="248" y2="76" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="250" y="140" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">frente</text>
                    <line x1="240" y1="138" x2="248" y2="138" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="160" y="18" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="serif" fontStyle="italic">¡Panera terminada!</text>
                    {/* Línea costura en bies */}
                    <line x1="80" y1="82" x2="240" y2="82" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
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
                Planchar la panera terminada ayuda a que el bies quede bien pegado y la base se asiente. Recordá que el cuadrado de 7 × 7 cm genera aproximadamente 14 cm de profundidad en la base.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
