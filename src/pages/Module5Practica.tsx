import { useEffect, useState } from 'react';

const WORD = 'TOTEBAG';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function ToteBagIcon({ size = 16 }: { size?: number }) {
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
      <path d="M5 7 L3 22 L21 22 L19 7 Z" />
      <path d="M9 7 Q9 3 12 3 Q15 3 15 7" />
    </svg>
  );
}

export function Module5Practica() {
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
    'Tela exterior con cuerpo — gabardina algodón, jeans, lienzo, cordura, lona',
    'Tela interior para forro — lienzo para darle cuerpo',
    'Cinta mochilera para manijas',
    'Abrojo autoadhesivo',
    'Aguja',
    'Hilo del mismo color de la tela',
    'Para moldería: papel madera, escuadra, lápiz, centímetro',
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
          Práctica · Módulo V
        </p>

        <div
          className="font-display text-dark text-center leading-none select-none"
          style={{
            fontSize: 'clamp(2.8rem, 11vw, 8rem)',
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
              src="/bag.jpg"
              alt="Tote bag terminada"
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
              src="/bag2.jpg"
              alt="Tote bag detalle interior"
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
            <svg viewBox="0 0 560 280" style={{ width: '100%', height: 'auto', display: 'block' }} fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">

              {/* Rectángulo principal 35×41cm */}
              <rect x="60" y="40" width="200" height="220" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Dimensión ancho */}
              <line x1="60" y1="272" x2="260" y2="272" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="60" y1="266" x2="60" y2="278" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="260" y1="266" x2="260" y2="278" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="160" y="280" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">35 cm</text>

              {/* Dimensión alto */}
              <line x1="30" y1="40" x2="30" y2="260" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="24" y1="40" x2="36" y2="40" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="24" y1="260" x2="36" y2="260" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="18" y="155" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 18 155)">41 cm</text>

              {/* Label */}
              <text x="160" y="150" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Cuerpo principal</text>
              <text x="160" y="168" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">cortar × 2 en tela exterior</text>
              <text x="160" y="184" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">cortar × 2 en forro</text>

              {/* Cuadrado 8×8cm — fuelle inferior */}
              <rect x="360" y="100" width="100" height="100" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Dimensión cuadrado */}
              <line x1="360" y1="215" x2="460" y2="215" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="360" y1="210" x2="360" y2="220" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="460" y1="210" x2="460" y2="220" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="410" y="228" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">8 cm</text>

              <line x1="330" y1="100" x2="330" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="324" y1="100" x2="336" y2="100" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="324" y1="200" x2="336" y2="200" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="318" y="155" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 318 155)">8 cm</text>

              {/* Label cuadrado */}
              <text x="410" y="148" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Fuelle</text>
              <text x="410" y="165" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">inferior</text>

              {/* Línea diagonal del cuadrado (indica que se cose) */}
              <line x1="360" y1="200" x2="460" y2="100" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />

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
                  <span className="text-dark"><ToteBagIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Cortar molde en tela exterior × 2</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Trazar el rectángulo de 35×41cm en papel madera. Cortar en tela exterior, obteniendo 2 piezas idénticas.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo tela exterior */}
                    <rect x="20" y="20" width="120" height="140" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="80" y="88" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">tela exterior</text>
                    <text x="80" y="102" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">35 × 41 cm</text>
                    {/* Tijera */}
                    <text x="160" y="100" textAnchor="middle" fontSize="16" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    {/* Dos piezas resultado */}
                    <rect x="195" y="20" width="50" height="60" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="255" y="20" width="50" height="60" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="220" y="115" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">× 2 piezas</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar molde en tela interior × 2</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Usar el mismo molde y cortar en la tela de forro. Obtener 2 piezas. El lienzo le dará cuerpo al bolso.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Rectángulo forro */}
                    <rect x="20" y="20" width="120" height="140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama para indicar forro */}
                    {[35, 55, 75, 95, 115].map((x) => (
                      <line key={x} x1={x} y1="25" x2={x} y2="155" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.25" />
                    ))}
                    <text x="80" y="88" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">forro / interior</text>
                    <text x="80" y="102" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">35 × 41 cm</text>
                    {/* Tijera */}
                    <text x="160" y="100" textAnchor="middle" fontSize="16" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    {/* Resultado */}
                    <rect x="195" y="20" width="50" height="60" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="255" y="20" width="50" height="60" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="220" y="115" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">× 2 piezas</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Enfrentar derechos y coser laterales y base</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Colocar las 2 piezas de tela exterior con los derechos enfrentados. Coser con costura recta los dos laterales y la base.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pieza A */}
                    <rect x="30" y="20" width="100" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="80" y="88" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">DERECHO</text>
                    {/* Pieza B encima/enfrentada */}
                    <rect x="190" y="20" width="100" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="240" y="88" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">DERECHO</text>
                    {/* Flechas de unión */}
                    <defs>
                      <marker id="arr5a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                      <marker id="arr5b" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
                        <path d="M6,0 L0,3 L6,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <line x1="135" y1="85" x2="185" y2="85" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr5a)" />
                    {/* Indicadores costura (laterales y base) */}
                    <line x1="30" y1="25" x2="30" y2="145" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.5" strokeDasharray="5 3" />
                    <line x1="130" y1="25" x2="130" y2="145" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.5" strokeDasharray="5 3" />
                    <line x1="35" y1="145" x2="125" y2="145" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.5" strokeDasharray="5 3" />
                    <text x="80" y="175" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">laterales y base</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir fuelles con costura recta</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Una vez cocidos los laterales y la base, cortar fuelles de 8×8cm y coser con costura recta para darle volumen al bolso.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bolso armado (vista base) */}
                    <rect x="80" y="30" width="160" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Esquina inferior izquierda — fuelle marcado */}
                    <rect x="80" y="122" width="38" height="38" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 2" />
                    {/* Diagonal del fuelle izq */}
                    <line x1="80" y1="122" x2="118" y2="160" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Esquina inferior derecha — fuelle marcado */}
                    <rect x="202" y="122" width="38" height="38" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 2" />
                    {/* Diagonal del fuelle der */}
                    <line x1="240" y1="122" x2="202" y2="160" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Labels fuelles — separados del borde de la figura */}
                    <text x="99" y="178" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">fuelle 8×8</text>
                    <text x="221" y="178" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">fuelle 8×8</text>
                    <text x="160" y="90" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">base del bolso</text>
                    <text x="160" y="200" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">Cortar y coser en diagonal</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Repetir procedimiento en forro con abertura</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Realizar el mismo proceso de costura en las 2 piezas de forro, dejando en uno de sus laterales una abertura de 5 cm sin coser para poder dar vuelta el bolso.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Forro armado */}
                    <rect x="80" y="20" width="160" height="140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama forro */}
                    {[95, 115, 135, 155, 175, 195, 215].map((x) => (
                      <line key={x} x1={x} y1="25" x2={x} y2="155" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    {/* Costura lateral izquierda (completa) */}
                    <line x1="83" y1="25" x2="83" y2="155" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
                    {/* Costura lateral derecha con abertura */}
                    <line x1="237" y1="25" x2="237" y2="75" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
                    {/* Abertura 5cm */}
                    <line x1="237" y1="75" x2="237" y2="105" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="2 4" opacity="0.3" />
                    <line x1="237" y1="105" x2="237" y2="155" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
                    {/* Label abertura */}
                    <line x1="237" y1="75" x2="260" y2="75" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="237" y1="105" x2="260" y2="105" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="258" y1="75" x2="258" y2="105" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="265" y="93" textAnchor="start" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">5 cm</text>
                    <text x="265" y="104" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">abertura</text>
                    {/* Costura base */}
                    <line x1="85" y1="153" x2="235" y2="153" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
                    <text x="160" y="175" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">forro con fuelles</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar 2 tiras de 50 cm de cinta mochilera</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cortar dos tiras de cinta mochilera de 50 cm cada una. Serán las manijas del tote bag.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Tira 1 */}
                    <rect x="20" y="30" width="280" height="18" rx="3" fill="#1a1a1a" opacity="0.7" />
                    <line x1="20" y1="52" x2="300" y2="52" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="20" y1="47" x2="20" y2="57" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="300" y1="47" x2="300" y2="57" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="160" y="65" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="sans-serif">50 cm</text>
                    {/* Tira 2 */}
                    <rect x="20" y="78" width="280" height="18" rx="3" fill="#1a1a1a" opacity="0.7" />
                    <text x="160" y="112" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">× 2 tiras de cinta mochilera</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar forro dentro de la tela exterior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Introducir el forro armado dentro del bolso exterior, enfrentando los derechos de ambas telas hacia adentro.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bolso exterior */}
                    <rect x="60" y="50" width="140" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="130" y="125" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">tela exterior</text>
                    {/* Forro adentro */}
                    <rect x="75" y="60" width="110" height="115" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 2" />
                    {/* Trama forro */}
                    {[88, 106, 124, 142, 160].map((x) => (
                      <line key={x} x1={x} y1="65" x2={x} y2="170" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.25" />
                    ))}
                    <text x="130" y="105" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">forro</text>
                    {/* Flecha hacia abajo */}
                    <defs>
                      <marker id="arrDown5" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
                        <path d="M0,0 L6,0 L3,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <line x1="240" y1="30" x2="240" y2="55" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arrDown5)" />
                    <text x="240" y="22" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">introducir</text>
                    <text x="130" y="190" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">derechos enfrentados</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar manijas a 8 cm de los laterales</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Medir 8 cm desde cada costura lateral hacia adentro para colocar las cintas mochileras en ambas piezas (exterior y forro).</p>
                </div>

                {/* TIP */}
                <div className="border-l-2 border-dark pl-4 text-left py-2">
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-1">Tip</p>
                  <p className="text-sm text-dark leading-relaxed">
                    Coser con puntada zig-zag para sujetar las manijas y evitar que la cinta se deshilache en los extremos.
                  </p>
                </div>

                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Vista superior del borde del bolso */}
                    <rect x="20" y="60" width="280" height="60" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Costura lateral izquierda */}
                    <line x1="20" y1="60" x2="20" y2="120" stroke="#1a1a1a" strokeWidth="2" />
                    {/* 8cm desde lateral izquierdo */}
                    <line x1="20" y1="40" x2="76" y2="40" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="20" y1="35" x2="20" y2="45" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="76" y1="35" x2="76" y2="45" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="48" y="34" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">8 cm</text>
                    {/* Manija izquierda */}
                    <rect x="72" y="52" width="10" height="76" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Costura zig-zag izq */}
                    <polyline points="73,56 75,60 73,64 75,68 73,72 75,76 73,80 75,84 73,88 75,92 73,96 75,100 73,104 75,108 73,112 75,116 73,120" stroke="white" strokeWidth="1" fill="none" />
                    {/* 8cm desde lateral derecho */}
                    <line x1="244" y1="40" x2="300" y2="40" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="244" y1="35" x2="244" y2="45" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="300" y1="35" x2="300" y2="45" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="272" y="34" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">8 cm</text>
                    {/* Costura lateral derecha */}
                    <line x1="300" y1="60" x2="300" y2="120" stroke="#1a1a1a" strokeWidth="2" />
                    {/* Manija derecha */}
                    <rect x="238" y="52" width="10" height="76" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Costura zig-zag der */}
                    <polyline points="239,56 241,60 239,64 241,68 239,72 241,76 239,80 241,84 239,88 241,92 239,96 241,100 239,104 241,108 239,112 241,116 239,120" stroke="white" strokeWidth="1" fill="none" />
                    <text x="160" y="155" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">vista superior del borde</text>
                  </svg>
                </div>
              </div>

              {/* Paso 9 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir ambas telas con costura recta en la parte superior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Con las manijas colocadas y los derechos enfrentados, coser con costura recta todo el borde superior, uniendo el bolso exterior y el forro en una sola vuelta.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Exterior */}
                    <rect x="40" y="60" width="240" height="100" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Forro */}
                    <rect x="55" y="70" width="210" height="85" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="4 2" />
                    {/* Costura superior */}
                    <line x1="45" y1="63" x2="275" y2="63" stroke="#1a1a1a" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.8" />
                    <text x="160" y="52" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">costura recta superior</text>
                    {/* Manijas que salen por arriba */}
                    <rect x="85" y="20" width="10" height="50" rx="2" fill="#1a1a1a" opacity="0.7" />
                    <rect x="225" y="20" width="10" height="50" rx="2" fill="#1a1a1a" opacity="0.7" />
                    <text x="160" y="170" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">unión borde superior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 10 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dar vuelta por la abertura del forro</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Buscar la abertura de 5 cm que dejamos en el lateral del forro y pasar todo el bolso a través de ella, dándolo vuelta con cuidado.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bolso al revés */}
                    <rect x="50" y="20" width="140" height="120" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama revés */}
                    {[65, 85, 105, 125, 145, 165].map((x) => (
                      <line key={x} x1={x} y1="25" x2={x} y2="135" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.25" />
                    ))}
                    <text x="120" y="80" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">REVÉS</text>
                    {/* Abertura */}
                    <rect x="185" y="55" width="15" height="40" fill="white" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" />
                    <text x="210" y="72" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">abertura</text>
                    <text x="210" y="82" textAnchor="start" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">5 cm</text>
                    {/* Flecha dar vuelta */}
                    <defs>
                      <marker id="arrRight5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <path d="M 100 155 Q 160 175 220 155" stroke="#1a1a1a" strokeWidth="1.5" fill="none" markerEnd="url(#arrRight5)" strokeDasharray="5 3" />
                    {/* Bolso terminado */}
                    <rect x="230" y="60" width="70" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="265" y="100" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif">dado vuelta</text>
                    <text x="160" y="190" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">pasar por la abertura con cuidado</text>
                  </svg>
                </div>
              </div>

              {/* Paso 11 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cerrar la abertura del forro</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Coser con costura recta la abertura de 5 cm que dejamos en el forro para que quede totalmente cerrado y prolijo.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Lateral del forro con abertura */}
                    <rect x="80" y="30" width="160" height="50" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama forro */}
                    {[95, 115, 135, 155, 175, 195, 215].map((x) => (
                      <line key={x} x1={x} y1="35" x2={x} y2="75" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.25" />
                    ))}
                    {/* Zona abertura resaltada */}
                    <rect x="140" y="30" width="40" height="50" fill="white" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                    {/* Costura cerrando */}
                    <line x1="142" y1="55" x2="178" y2="55" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="160" y="45" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">costura recta</text>
                    <text x="160" y="105" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">cerrar abertura del forro</text>
                  </svg>
                </div>
              </div>

              {/* Paso 12 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>12</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 12</p>
                <h3 className="font-display text-xl text-dark leading-snug">Realizar pespunte en la parte superior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Realizar un pespunte en todo el borde superior del bolso para que la unión entre el exterior y el forro quede prolija, firme y bien definida.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bolso terminado — vista frontal */}
                    <rect x="60" y="50" width="200" height="110" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Manijas */}
                    <rect x="95" y="10" width="10" height="50" rx="2" fill="#1a1a1a" opacity="0.7" />
                    <rect x="215" y="10" width="10" height="50" rx="2" fill="#1a1a1a" opacity="0.7" />
                    {/* Pespunte superior */}
                    <line x1="65" y1="57" x2="255" y2="57" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="5 3" />
                    {/* Label pespunte */}
                    <text x="160" y="40" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">pespunte</text>
                    <line x1="160" y1="43" x2="160" y2="52" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="160" y="175" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">recorrer todo el borde superior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 13 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>13</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 13</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar abrojo autoadhesivo</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Pegar abrojo autoadhesivo de aproximadamente 5 cm en la parte interna superior del bolso para cerrar el tote bag.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Vista interior del bolso abierto */}
                    <rect x="40" y="30" width="240" height="140" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Trama interior */}
                    {[60, 85, 110, 135, 160, 185, 210, 235, 260].map((x) => (
                      <line key={x} x1={x} y1="35" x2={x} y2="165" stroke="#1a1a1a" strokeWidth="0.4" opacity="0.2" />
                    ))}
                    <text x="160" y="105" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.4">INTERIOR</text>
                    {/* Abrojo en zona superior — pieza A */}
                    <rect x="110" y="35" width="100" height="18" rx="2" fill="#1a1a1a" opacity="0.5" />
                    {/* Textura abrojo */}
                    {[115, 122, 129, 136, 143, 150, 157, 164, 171, 178, 185, 192, 199].map((x) => (
                      <line key={x} x1={x} y1="37" x2={x} y2="50" stroke="white" strokeWidth="0.8" opacity="0.5" />
                    ))}
                    <text x="160" y="68" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">abrojo ≈ 5 cm</text>
                    {/* Flechas indicando adhesivo */}
                    <line x1="110" y1="55" x2="110" y2="44" stroke="#1a1a1a" strokeWidth="0.8" />
                    <line x1="210" y1="55" x2="210" y2="44" stroke="#1a1a1a" strokeWidth="0.8" />
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">parte interna superior del bolso</text>
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
                Elegí una tela exterior con cuerpo para que el tote bag mantenga su estructura. El forro de lienzo refuerza el bolso desde adentro y le da una terminación impecable.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
