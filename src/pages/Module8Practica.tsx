import { useEffect, useState } from 'react';

const WORD = 'NECESER';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function NecesserIcon({ size = 16 }: { size?: number }) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

export function Module8Practica() {
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
    'Tela exterior con cuerpo — gabardina de algodón, cordura, jeans',
    'Tela interior — silver o tusor',
    'Cierre común o diente de perro',
    'Tira cierre (misma medida que el cierre)',
    'Bies en combinación',
    'Hilo del color de la tela',
    'Alfileres',
    'Para moldería: papel madera, regla/escuadra, tijera, lápiz, centímetro',
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
          Práctica · Módulo VIII
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
              src="/neceser1.jpg"
              alt="Neceser terminado"
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
              src="/neceser2.jpg"
              alt="Neceser detalle"
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

              {/* Rectángulo principal 54×40cm */}
              <rect x="20" y="20" width="340" height="200" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Cota ancho — 54cm */}
              <line x1="20" y1="232" x2="360" y2="232" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="20" y1="226" x2="20" y2="238" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="360" y1="226" x2="360" y2="238" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="190" y="240" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">54 cm</text>

              {/* Cota alto — 40cm */}
              <line x1="8" y1="20" x2="8" y2="220" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="20" x2="14" y2="20" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="220" x2="14" y2="220" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="0" y="120" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 0 120)">40 cm</text>

              {/* Interior layer (silver) */}
              <rect x="26" y="26" width="328" height="188" fill="none" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="5 3" />

              <text x="190" y="108" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Rectángulo 54 × 40 cm</text>
              <text x="190" y="126" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.55">1× tela exterior + 1× tela interior (silver)</text>

              {/* Cuadrado fuelle — separado a la derecha */}
              <rect x="410" y="60" width="60" height="60" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
              <text x="440" y="88" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">7,5</text>
              <text x="440" y="102" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a">cm</text>
              <text x="440" y="142" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">fuelle</text>
              <text x="440" y="154" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 4 esquinas</text>

              {/* Legend */}
              <text x="20" y="250" fontSize="9" fontFamily="monospace" fill="#1a1a1a">① Rectángulo: cortar × 1 exterior + × 1 interior y coser por todo el contorno</text>

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
                  <span className="text-dark"><NecesserIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Recortar rectángulo 54×40cm y unir capas</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Cortar un rectángulo de 54×40cm en tela exterior y otro en tela interior (silver). Coserlos por todo el contorno para que queden como una sola pieza.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    <rect x="20" y="20" width="230" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="26" y="26" width="218" height="98" fill="none" stroke="#1a1a1a" strokeWidth="0.9" strokeDasharray="4 3" />
                    <text x="135" y="72" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">54 × 40 cm</text>
                    <text x="135" y="86" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">exterior + interior · costura en todo el borde</text>
                    <text x="274" y="72" textAnchor="middle" fontSize="18" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="274" y="90" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">ext + int</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar bies en los laterales de 40cm</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  En los dos lados de 40cm (los laterales), colocar bies y fijarlo con costura recta. Esto termina esos bordes y prepara la base para el cierre.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    <rect x="40" y="20" width="240" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Bies izquierdo */}
                    <rect x="24" y="20" width="18" height="110" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Bies derecho */}
                    <rect x="278" y="20" width="18" height="110" rx="2" fill="#1a1a1a" opacity="0.7" />
                    <text x="160" y="80" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bies en laterales de 40cm</text>
                    <text x="14" y="80" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif" transform="rotate(-90 14 80)">bies</text>
                    <text x="287" y="80" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif" transform="rotate(90 287 80)">bies</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Coser el cierre sujetándolo del bies</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Coser el cierre sujetándolo del bies: mitad del cierre en cada lateral. Así el cierre queda uniendo ambos lados.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    <rect x="40" y="35" width="240" height="90" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Bies + cierre izquierdo */}
                    <rect x="24" y="35" width="18" height="90" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Bies + cierre derecho */}
                    <rect x="278" y="35" width="18" height="90" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Dientes cierre — izquierdo */}
                    {[40, 52, 64, 76, 88, 100].map((y, i) => (
                      <rect key={i} x="16" y={y} width="10" height="7" rx="1" fill="#1a1a1a" opacity="0.4" />
                    ))}
                    {/* Dientes cierre — derecho */}
                    {[40, 52, 64, 76, 88, 100].map((y, i) => (
                      <rect key={i} x="294" y={y} width="10" height="7" rx="1" fill="#1a1a1a" opacity="0.4" />
                    ))}
                    <text x="160" y="86" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">mitad del cierre en cada lateral</text>
                    <text x="160" y="148" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura recta sobre el bies</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Pasar tira cierre</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Pasar la tira cierre por el cierre. Recordá siempre que el cierre y la tira cierre tienen que ser de la misma medida.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 120" fill="none">
                    {/* Cierre horizontal */}
                    <rect x="20" y="45" width="260" height="20" rx="3" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" />
                    {/* Dientes */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <rect key={i} x={30 + i * 20} y="50" width="10" height="10" rx="1" fill="#1a1a1a" opacity="0.3" />
                    ))}
                    {/* Tira cierre (el cursor) */}
                    <rect x="130" y="38" width="40" height="34" rx="4" fill="#1a1a1a" opacity="0.85" />
                    <text x="150" y="59" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif">tira</text>
                    <text x="160" y="95" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">misma medida que el cierre</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta la pieza para costuras internas</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Una vez colocado el cierre, dar vuelta la pieza (la cara exterior queda hacia adentro) para realizar las costuras internas.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 140" fill="none">
                    <rect x="20" y="15" width="120" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="80" y="58" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">exterior visible</text>
                    {/* Arrow */}
                    <path d="M155 55 Q190 40 210 55" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
                    <polygon points="206,48 214,56 220,47" fill="#1a1a1a" opacity="0.7" />
                    <rect x="220" y="15" width="80" height="80" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="260" y="58" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">interior</text>
                    <text x="260" y="70" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">visible</text>
                    <text x="160" y="120" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">dar vuelta la pieza</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Medir centro y realizar piquetes</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Calcular la mitad del molde y realizar piquetes para que luego nos quede centrado el cierre con la pieza.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    <rect x="30" y="20" width="260" height="100" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Línea centro */}
                    <line x1="160" y1="20" x2="160" y2="120" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                    {/* Piquetes en los laterales */}
                    <line x1="30" y1="70" x2="44" y2="70" stroke="#1a1a1a" strokeWidth="2" />
                    <line x1="276" y1="70" x2="290" y2="70" stroke="#1a1a1a" strokeWidth="2" />
                    <text x="160" y="75" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">mitad = 27cm</text>
                    <text x="160" y="145" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">piquetes en laterales para centrar</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Centrar piquetes con el cierre y coser laterales</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Centrar esos piquetes con el cierre y pasar costura recta en los laterales para unir la bolsa.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    <rect x="60" y="20" width="200" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Cierre arriba centrado */}
                    <rect x="80" y="13" width="160" height="12" rx="2" fill="#1a1a1a" opacity="0.75" />
                    <text x="160" y="22" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">cierre centrado</text>
                    {/* Costuras laterales */}
                    <line x1="60" y1="20" x2="60" y2="130" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 2" opacity="0.7" />
                    <line x1="260" y1="20" x2="260" y2="130" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 2" opacity="0.7" />
                    <text x="160" y="82" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta en laterales</text>
                    <text x="160" y="150" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">piquetes alineados con centro del cierre</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Marcar y cortar cuadrados de 7,5cm para fuelle</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  En las 4 esquinas del neceser, marcar con lápiz cuadrados de 7,5cm y cortarlos para formar el fuelle que le da profundidad.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none">
                    <rect x="30" y="20" width="260" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Esquinas marcadas */}
                    <rect x="30" y="20" width="40" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <rect x="250" y="20" width="40" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <rect x="30" y="110" width="40" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <rect x="250" y="110" width="40" height="40" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    {/* Tijeras */}
                    <text x="50" y="44" textAnchor="middle" fontSize="13" fill="#1a1a1a">✂</text>
                    <text x="270" y="44" textAnchor="middle" fontSize="13" fill="#1a1a1a">✂</text>
                    <text x="50" y="134" textAnchor="middle" fontSize="13" fill="#1a1a1a">✂</text>
                    <text x="270" y="134" textAnchor="middle" fontSize="13" fill="#1a1a1a">✂</text>
                    {/* Medidas */}
                    <text x="50" y="28" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">7,5cm</text>
                    <text x="160" y="90" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">marcar y cortar 4 esquinas</text>
                    <text x="160" y="170" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">cuadrado 7,5cm en cada esquina</text>
                  </svg>
                </div>
              </div>

              {/* Paso 9 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar bies en los pequeños laterales del fuelle</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Una vez cortadas las esquinas, quedan dos pequeños laterales en cada esquina. Colocar bies en esos laterales antes de unir el fuelle.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Forma de la bolsa con esquinas cortadas */}
                    <path d="M70,20 L250,20 L250,60 L290,60 L290,120 L250,120 L250,140 L70,140 L70,120 L30,120 L30,60 L70,60 Z"
                      fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Bies en laterales fuelle izquierdo */}
                    <rect x="22" y="60" width="10" height="60" rx="1" fill="#1a1a1a" opacity="0.65" />
                    <rect x="282" y="60" width="10" height="60" rx="1" fill="#1a1a1a" opacity="0.65" />
                    <text x="160" y="85" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bies en laterales del fuelle</text>
                    <text x="160" y="150" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">antes de unir el fuelle</text>
                  </svg>
                </div>
              </div>

              {/* Paso 10 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar manija (opcional)</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Si deseás ponerle manija, es el momento. Centrás cinta mochilera o la manija que desees, alineando la mitad con la costura. Pasar la máquina. Se hace únicamente en uno de los laterales; en el otro se cose recto.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Lateral con manija */}
                    <rect x="20" y="20" width="80" height="120" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Manija */}
                    <rect x="45" y="10" width="30" height="14" rx="3" fill="#1a1a1a" opacity="0.8" />
                    <line x1="60" y1="24" x2="60" y2="36" stroke="#1a1a1a" strokeWidth="2" />
                    <text x="60" y="17" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">manija</text>
                    <text x="60" y="150" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">solo en un lateral</text>
                    {/* Lateral sin manija */}
                    <rect x="130" y="20" width="80" height="120" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <line x1="130" y1="20" x2="130" y2="140" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" />
                    <line x1="210" y1="20" x2="210" y2="140" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" />
                    <text x="170" y="85" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">costura recta</text>
                  </svg>
                </div>
              </div>

              {/* Paso 11 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar bies para dar mejor terminación</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Colocar bies alrededor para una mejor terminación, cubriendo las costuras y emprolijando todos los bordes del neceser.
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none">
                    <path d="M70,20 L250,20 L250,60 L290,60 L290,120 L250,120 L250,155 L70,155 L70,120 L30,120 L30,60 L70,60 Z"
                      fill="#F5F0E8" stroke="none" />
                    <path d="M70,20 L250,20 L250,60 L290,60 L290,120 L250,120 L250,155 L70,155 L70,120 L30,120 L30,60 L70,60 Z"
                      fill="none" stroke="#1a1a1a" strokeWidth="7" opacity="0.25" />
                    <path d="M70,20 L250,20 L250,60 L290,60 L290,120 L250,120 L250,155 L70,155 L70,120 L30,120 L30,60 L70,60 Z"
                      fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="160" y="92" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bies en todo el perímetro</text>
                    <text x="160" y="170" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">terminación prolija · cubre todas las costuras</text>
                  </svg>
                </div>
              </div>

              {/* Paso 12 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>12</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 12</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta desde el cierre — ¡listo!</h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed">
                  Dar vuelta el neceser desde el cierre y listo. ¡Tu neceser está terminado!
                </p>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 160" fill="none">
                    {/* Bolsa armada final */}
                    <rect x="60" y="30" width="200" height="100" rx="8" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Fuelle */}
                    <rect x="60" y="85" width="200" height="12" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="0.8" />
                    {/* Cierre arriba */}
                    <rect x="80" y="22" width="160" height="12" rx="3" fill="#1a1a1a" opacity="0.75" />
                    {/* Tira cierre */}
                    <rect x="140" y="16" width="40" height="20" rx="3" fill="#1a1a1a" opacity="0.85" />
                    <text x="160" y="30" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">cierre</text>
                    <text x="160" y="94" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="serif">¡Neceser terminado!</text>
                    <text x="160" y="150" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">dar vuelta desde el cierre ♥</text>
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
                El silver como forro no solo facilita la limpieza, también aporta cuerpo al neceser. Si usás entretela además del silver, vas a conseguir un neceser más estructurado y profesional.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
