import { useEffect, useState } from 'react';

const WORD = 'YERBERA';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function YerberaIcon({ size = 16 }: { size?: number }) {
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
      <path d="M5 4 Q5 2 12 2 Q19 2 19 4 L19 6 Q19 8 12 8 Q5 8 5 6 Z" />
      <path d="M5 6 L5 20 Q5 22 12 22 Q19 22 19 20 L19 6" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

export function Module4Practica() {
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
    'Tela con cuerpo — lona, gabardina de algodón, gabardina acrílica, cordura, nobuk',
    'Hilo del color de la tela',
    'Cierre + tira cierre',
    'Bies para terminaciones',
    'Papel madera',
    'Lápiz',
    'Aguja',
    'Alfileres',
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
          Práctica · Módulo IV
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
              src="/yerbera1.jpg"
              alt="Yerbera cuadrillé cerrada"
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
              src="/yerbera2.jpg"
              alt="Yerbera cuadrillé abierta"
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

              {/* Medio molde — forma D (rectángulo con arco superior) */}
              {/* El molde mide 14 cm de ancho × 26 cm de alto, con curva en la parte superior */}
              <path
                d="M 80,230 L 80,90 Q 80,50 150,50 Q 220,50 220,90 L 220,230 Z"
                fill="#F5F0E8"
                stroke="#1a1a1a"
                strokeWidth="1.5"
              />
              {/* Línea de doblez (lado izquierdo) */}
              <line x1="80" y1="50" x2="80" y2="230" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="5 3" />
              {/* Dimensión ancho */}
              <line x1="80" y1="248" x2="220" y2="248" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="80" y1="243" x2="80" y2="253" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="220" y1="243" x2="220" y2="253" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="150" y="260" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">14 cm</text>
              {/* Dimensión alto */}
              <line x1="52" y1="50" x2="52" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="47" y1="50" x2="57" y2="50" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="47" y1="230" x2="57" y2="230" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="40" y="145" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 40 145)">26 cm</text>
              {/* Label */}
              <text x="150" y="155" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Medio molde</text>
              <text x="150" y="172" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">cortar en tela doble</text>
              {/* Flecha doblez */}
              <text x="78" y="42" textAnchor="end" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">doblez</text>

              {/* Pieza resultante — forma completa (2 piezas) */}
              <path
                d="M 320,230 L 320,90 Q 320,50 390,50 Q 460,50 460,90 L 460,230 Z"
                fill="#EDE8DC"
                stroke="#1a1a1a"
                strokeWidth="1.5"
              />
              {/* Líneas de trama */}
              {[335, 348, 361, 374, 387, 400, 413, 426, 439, 452].map((x) => (
                <line key={x} x1={x} y1="55" x2={x} y2="225" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
              ))}
              <text x="390" y="155" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Pieza completa</text>
              <text x="390" y="172" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 2 unidades</text>
              {/* Bies en la curva superior */}
              <path
                d="M 320,90 Q 320,50 390,50 Q 460,50 460,90"
                stroke="#1a1a1a"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
              />
              <text x="390" y="38" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.7">bies</text>
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
                  <span className="text-dark"><YerberaIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Marcar y cortar en tela doble</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Colocar el medio molde sobre la tela doblada. Marcar y cortar. Se obtienen 2 piezas idénticas en un solo corte.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Tela doblada */}
                    <rect x="20" y="60" width="180" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="20" y1="115" x2="200" y2="115" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="5 3" />
                    <text x="110" y="111" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">doblez</text>
                    {/* Molde encima (forma D) */}
                    <path d="M 45,168 L 45,90 Q 45,65 100,65 Q 155,65 155,90 L 155,168 Z" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="100" y="125" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">MOLDE</text>
                    {/* Tijera */}
                    <text x="175" y="80" textAnchor="middle" fontSize="12" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    {/* Resultado */}
                    <path d="M 230,180 L 230,100 Q 230,78 265,78 Q 300,78 300,100 L 300,180 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="265" y="138" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">× 2</text>
                    <text x="265" y="152" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">piezas</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser bies en la parte curva</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cubrir el borde curvo superior con bies, cosiendo prolijo. Doblez hacia el bies. El bies abraza la curva y da terminación limpia.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza */}
                    <path d="M 60,190 L 60,90 Q 60,30 160,30 Q 260,30 260,90 L 260,190 Z" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Bies en la curva (grosor visual) */}
                    <path d="M 60,90 Q 60,30 160,30 Q 260,30 260,90" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
                    <path d="M 68,92 Q 68,40 160,40 Q 252,40 252,92" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" />
                    {/* Costura */}
                    <path d="M 74,94 Q 74,50 160,50 Q 246,50 246,94" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" strokeLinecap="round" />
                    {/* Etiqueta */}
                    <text x="160" y="22" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">bies cosido en curva</text>
                    <line x1="160" y1="25" x2="160" y2="30" stroke="#1a1a1a" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser un lado del cierre al bies</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Coser uno de los lados del cierre sobre el bies ya aplicado. Solo un lado por ahora.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza con bies */}
                    <path d="M 60,190 L 60,90 Q 60,50 160,50 Q 260,50 260,90 L 260,190 Z" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M 60,90 Q 60,50 160,50 Q 260,50 260,90" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
                    {/* Cinta cierre (un lado) */}
                    <path d="M 65,100 Q 65,62 160,55 Q 255,62 255,100" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" opacity="0.25" />
                    {/* Dientes del cierre */}
                    {[80, 100, 120, 140, 160, 180, 200, 220, 240].map((x, i) => {
                      const t = (x - 65) / (255 - 65);
                      const cy = 100 - 38 * Math.sin(Math.PI * t);
                      return (
                        <rect key={i} x={x - 3} y={cy - 3} width="6" height="6" fill="#1a1a1a" opacity="0.5" rx="1" />
                      );
                    })}
                    <text x="160" y="185" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">1 solo lado del cierre</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar el deslizador del cierre</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Pasar el deslizador (cabezal del cierre) del lado derecho de la tela, antes de unir el segundo lado.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Tira del cierre */}
                    <rect x="40" y="90" width="240" height="16" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    {/* Dientes */}
                    {[55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255].map((x) => (
                      <rect key={x} x={x} y="95" width="7" height="6" fill="#1a1a1a" opacity="0.4" rx="1" />
                    ))}
                    {/* Deslizador */}
                    <rect x="60" y="82" width="36" height="32" rx="4" fill="#1a1a1a" opacity="0.8" />
                    <rect x="65" y="87" width="26" height="22" rx="3" fill="#EDE8DC" />
                    <rect x="73" y="94" width="10" height="8" rx="1" fill="#1a1a1a" opacity="0.5" />
                    {/* Flecha dirección */}
                    <defs>
                      <marker id="arrowRight4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <line x1="100" y1="98" x2="270" y2="98" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arrowRight4)" />
                    <text x="180" y="76" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">insertar deslizador por la punta</text>
                    <text x="82" y="130" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">deslizador</text>
                    <line x1="82" y1="125" x2="82" y2="114" stroke="#1a1a1a" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Costura recta en la base</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Con la tela al revés, hacer una costura recta en la base cerrando la parte inferior de la yerbera.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza al revés */}
                    <path d="M 60,170 L 60,80 Q 60,35 160,35 Q 260,35 260,80 L 260,170 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Líneas de revés */}
                    {[80, 100, 120, 140, 160, 180, 200, 220, 240].map((x) => (
                      <line key={x} x1={x} y1="45" x2={x} y2="165" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    {/* Costura en la base */}
                    <line x1="72" y1="158" x2="248" y2="158" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="160" y="148" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">costura recta</text>
                    {/* Etiqueta revés */}
                    <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">REVÉS</text>
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">base cerrada</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser esquinas y aplicar bies</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cerrar las dos esquinas inferiores con costura recta. Cubrir esas costuras con bies para un acabado prolijo.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza base */}
                    <path d="M 60,170 L 60,80 Q 60,35 160,35 Q 260,35 260,80 L 260,170 Z" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Esquina izquierda — costura diagonal */}
                    <line x1="60" y1="155" x2="80" y2="170" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Bies en esquina izquierda */}
                    <path d="M 55,150 L 75,170" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
                    {/* Esquina derecha — costura diagonal */}
                    <line x1="260" y1="155" x2="240" y2="170" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Bies en esquina derecha */}
                    <path d="M 265,150 L 245,170" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
                    {/* Etiquetas */}
                    <text x="50" y="145" textAnchor="end" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">bies</text>
                    <text x="270" y="145" textAnchor="start" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">bies</text>
                    <text x="160" y="110" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cerrar y cubrir esquinas</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta y ajustar las esquinas</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Pasar la pieza por la abertura del cierre para dar vuelta. Ajustar las esquinas con cuidado para que queden bien definidas.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Yerbera terminada — vista 3D frontal */}
                    {/* Cuerpo */}
                    <path d="M 70,195 L 70,100 Q 70,45 160,45 Q 250,45 250,100 L 250,195 Z" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama cuadrillé sutil */}
                    {[88, 106, 124, 142, 160, 178, 196, 214, 232].map((x) => (
                      <line key={`v-${x}`} x1={x} y1="55" x2={x} y2="190" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.15" />
                    ))}
                    {[75, 95, 115, 135, 155, 175].map((y) => (
                      <line key={`h-${y}`} x1="75" x2="245" y1={y} y2={y} stroke="#1a1a1a" strokeWidth="0.5" opacity="0.15" />
                    ))}
                    {/* Bies en curva superior */}
                    <path d="M 70,100 Q 70,45 160,45 Q 250,45 250,100" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
                    {/* Cierre */}
                    <path d="M 80,102 Q 80,60 160,55 Q 240,60 240,102" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    {/* Deslizador */}
                    <rect x="148" y="54" width="24" height="16" rx="3" fill="#1a1a1a" opacity="0.7" />
                    {/* Base con perspectiva */}
                    <path d="M 70,195 L 60,205 L 250,205 L 240,195 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" />
                    {/* Etiqueta */}
                    <text x="160" y="20" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="serif" fontStyle="italic">Yerbera terminada</text>
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
                Elegí una tela con cuerpo para que la yerbera mantenga su forma. El bies en las esquinas no solo embellece: también refuerza las zonas de mayor tensión del bolso.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
