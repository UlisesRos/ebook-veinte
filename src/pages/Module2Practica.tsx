import { useEffect, useState } from 'react';

const WORD = 'MANTEL';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function MantelIcon({ size = 16 }: { size?: number }) {
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
      <line x1="6" y1="4" x2="18" y2="16" />
      <path d="M6 4 Q5 5.5 6.5 6.5" />
      <ellipse cx="17" cy="15.5" rx="1.1" ry="1.1" transform="rotate(45 17 15.5)" />
      <path d="M17.8 16.8 Q15 20 11 21 Q8 21.5 6 20" />
    </svg>
  );
}

export function Module2Practica() {
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

  const materiales = ['Tusor', 'Hilo', 'Alfileres', 'Aguja', 'Papel madera', 'Lápiz'];

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
          Práctica · Módulo II
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

        {/* Two stacked frames — vertical overlap */}
        <div
          style={{
            position: 'relative',
            width: 'min(75vw, 380px)',
            height: 'clamp(360px, 72vw, 520px)',
            flexShrink: 0,
            marginTop: '-2vh',
          }}
        >
          {/* Marco superior — mantel3.png */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%) rotate(-2deg)',
              width: '130%',
              height: '50%',
              borderRadius: '10px',
              overflow: 'hidden',
              zIndex: 2,
              boxShadow: '0 4px 28px rgba(0,0,0,0.10)',
              outline: '1px solid hsl(var(--border))',
            }}
          >
            <img
              src="/mantel1.png"
              alt="Mantel 1"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Marco inferior — mantel4.png */}
          <div
            style={{
              position: 'absolute',
              bottom: -17,
              left: '50%',
              transform: 'translateX(-50%) rotate(2deg)',
              width: '130%',
              height: '57%',
              borderRadius: '10px',
              overflow: 'hidden',
              zIndex: 1,
              boxShadow: '0 6px 32px rgba(0,0,0,0.13)',
              outline: '1px solid hsl(var(--border))',
            }}
          >
            <img
              src="/mantel2.png"
              alt="Mantel 2"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── MOLDERÍA + MATERIALES + PASOS ── */}
      <section className="bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="space-y-2 text-center">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">01. Estructura</p>
            <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Moldería</h2>
          </div>

          <div className="w-full overflow-hidden bg-white" style={{ padding: '24px 16px' }}>
            <svg viewBox="0 0 560 220" style={{ width: '100%', height: 'auto', display: 'block' }} fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              {/* Rectángulo grande: 60×36 cm */}
              <rect x="40" y="40" width="240" height="144" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="280" y2="20" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="40" y1="15" x2="40" y2="25" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="280" y1="15" x2="280" y2="25" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="16" y1="40" x2="16" y2="184" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="11" y1="40" x2="21" y2="40" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="11" y1="184" x2="21" y2="184" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="160" y="14" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">60 cm</text>
              <text x="9" y="116" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 9 116)">36 cm</text>
              <text x="160" y="106" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Cuerpo del mantel</text>
              <text x="160" y="122" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">60 × 36 cm</text>
              {/* Rectángulo volado: 13×56 cm */}
              <rect x="340" y="60" width="180" height="42" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
              <line x1="340" y1="42" x2="520" y2="42" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="340" y1="37" x2="340" y2="47" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="520" y1="37" x2="520" y2="47" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="536" y1="60" x2="536" y2="102" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="531" y1="60" x2="541" y2="60" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="531" y1="102" x2="541" y2="102" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="430" y="36" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">56 cm</text>
              <text x="549" y="81" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 549 81)">13 cm</text>
              <text x="430" y="78" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Volado × 2</text>
              <text x="430" y="93" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">13 × 56 cm</text>
              {[360, 375, 390, 405, 420, 435, 450, 465, 480, 495, 510].map((x) => (
                <line key={`m-${x}`} x1={x} y1="65" x2={x} y2="97" stroke="#1a1a1a" strokeWidth="0.5" opacity="0.35" />
              ))}
            </svg>
          </div>

          {/* ── MATERIALES ── */}
          <div className="space-y-4">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">02. Lo que necesitás</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Materiales</h2>
            </div>
            <ul className="space-y-0 divide-y divide-border/30">
              {materiales.map((item, i) => (
                <li key={i} className="flex items-center gap-4 py-4">
                  <span className="text-dark"><MantelIcon size={18} /></span>
                  <span className="font-body text-base text-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── PASOS ── */}
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
                <h3 className="font-display text-xl text-dark leading-snug">Cortar el rectángulo base</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cortar en tela un rectángulo de 60 × 36 cm.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="40" width="240" height="108" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="40" y1="168" x2="280" y2="168" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="40" y1="163" x2="40" y2="173" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="280" y1="163" x2="280" y2="173" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="40" y1="148" x2="40" y2="168" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2"/>
                    <line x1="280" y1="148" x2="280" y2="168" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2"/>
                    <text x="160" y="182" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">60 cm</text>
                    <line x1="296" y1="40" x2="296" y2="148" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="291" y1="40" x2="301" y2="40" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="291" y1="148" x2="301" y2="148" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="280" y1="40" x2="296" y2="40" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2"/>
                    <line x1="280" y1="148" x2="296" y2="148" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2"/>
                    <text x="308" y="98" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" transform="rotate(90, 308, 98)">36 cm</text>
                    <text x="160" y="99" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">TELA</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Dobladillo e hilván en los extremos largos</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Doblar y hilvanar los dos laterales más largos (60 cm).</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="44" width="240" height="108" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="40" y1="58" x2="280" y2="58" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="40" y1="138" x2="280" y2="138" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="290" y1="44" x2="290" y2="58" stroke="#1a1a1a" strokeWidth="1"/>
                    <polygon points="290,57 286,50 294,50" fill="#1a1a1a"/>
                    <line x1="290" y1="152" x2="290" y2="138" stroke="#1a1a1a" strokeWidth="1"/>
                    <polygon points="290,139 286,146 294,146" fill="#1a1a1a"/>
                    <text x="160" y="53" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">dobladillo</text>
                    <text x="160" y="150" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">dobladillo</text>
                    <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">hilván</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Costura recta en ambos dobladillos</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Pasar costura recta a máquina en ambos dobladillos.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="44" width="240" height="108" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="40" y1="56" x2="280" y2="56" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
                    <line x1="40" y1="140" x2="280" y2="140" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
                    <line x1="40" y1="62" x2="280" y2="62" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="2 2"/>
                    <line x1="40" y1="134" x2="280" y2="134" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="2 2"/>
                    <text x="160" y="100" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura a máquina</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 — TIP */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Doblez doble en los laterales</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">En los lados de 36 cm, doblar dos dedos hacia adentro y volver a doblar.</p>
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Esto esconde los bordes del volado adentro.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" y="80" width="200" height="20" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <path d="M60,80 L30,60 L30,100 L60,100" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <path d="M30,60 L50,60 L50,80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="60" y1="75" x2="60" y2="105" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="30" y1="55" x2="30" y2="105" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <path d="M80,50 Q70,50 65,62" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
                    <polygon points="65,62 60,56 70,58" fill="#1a1a1a"/>
                    <text x="82" y="48" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">1er doblez</text>
                    <path d="M80,30 Q55,30 48,52" stroke="#1a1a1a" strokeWidth="1" fill="none"/>
                    <polygon points="48,52 43,46 53,48" fill="#1a1a1a"/>
                    <text x="82" y="28" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">2do doblez</text>
                    <line x1="50" y1="60" x2="50" y2="80" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
                    <text x="180" y="170" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.6">borde interior oculto</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Asegurar y coser los laterales</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Asegurar con alfileres, hilvanar y dar costura recta en ambos laterales de 36 cm.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="30" width="220" height="130" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="72" y1="30" x2="72" y2="160" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="248" y1="30" x2="248" y2="160" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="65" y1="30" x2="65" y2="160" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="2 2"/>
                    <line x1="255" y1="30" x2="255" y2="160" stroke="#1a1a1a" strokeWidth="1.2" strokeDasharray="2 2"/>
                    {[50, 85, 120].map((y) => (
                      <>
                        <line key={`pl-${y}`} x1="65" y1={y} x2="65" y2={y + 15} stroke="#1a1a1a" strokeWidth="1.2"/>
                        <circle key={`cl-${y}`} cx="65" cy={y - 2} r="3" fill="#1a1a1a"/>
                        <line key={`pr-${y}`} x1="255" y1={y} x2="255" y2={y + 15} stroke="#1a1a1a" strokeWidth="1.2"/>
                        <circle key={`cr-${y}`} cx="255" cy={y - 2} r="3" fill="#1a1a1a"/>
                      </>
                    ))}
                    <text x="160" y="102" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura + alfileres en laterales</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar los rectángulos para los volados</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cortar en tela dos rectángulos de 13 × 56 cm, uno para cada volado.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="70" y="20" width="60" height="150" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <rect x="190" y="20" width="60" height="150" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="70" y1="10" x2="130" y2="10" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="70" y1="7" x2="70" y2="13" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="130" y1="7" x2="130" y2="13" stroke="#1a1a1a" strokeWidth="1"/>
                    <text x="100" y="8" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">13 cm</text>
                    <line x1="58" y1="20" x2="58" y2="170" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="55" y1="20" x2="61" y2="20" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="55" y1="170" x2="61" y2="170" stroke="#1a1a1a" strokeWidth="1"/>
                    <text x="54" y="98" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle" transform="rotate(-90, 54, 98)">56 cm</text>
                    <line x1="190" y1="10" x2="250" y2="10" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="190" y1="7" x2="190" y2="13" stroke="#1a1a1a" strokeWidth="1"/>
                    <line x1="250" y1="7" x2="250" y2="13" stroke="#1a1a1a" strokeWidth="1"/>
                    <text x="220" y="8" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">13 cm</text>
                    <text x="160" y="100" fontSize="14" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle" fontWeight="700">× 2</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Terminar los laterales cortos del volado</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">En cada rectángulo, en los laterales de 13 cm, meter la tela ~0,5 cm hacia adentro y pasar costura recta.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="60" width="260" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="42" y1="60" x2="42" y2="140" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="46" y1="60" x2="46" y2="140" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="2 2"/>
                    <text x="10" y="98" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">0,5</text>
                    <text x="10" y="108" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">cm</text>
                    <line x1="278" y1="60" x2="278" y2="140" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <line x1="274" y1="60" x2="274" y2="140" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="2 2"/>
                    <text x="160" y="108" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">56 cm (largo)</text>
                    <text x="160" y="56" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">doblez + costura en extremos cortos</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Doblar cada rectángulo a la mitad</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Doblar cada rectángulo a la mitad manteniendo el largo de 56 cm. Quedará una tira de 6,5 × 56 cm.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrow8" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <rect x="20" y="30" width="180" height="70" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="20" y1="65" x2="200" y2="65" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3"/>
                    <text x="110" y="62" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">doblez</text>
                    <path d="M205 35 Q225 65 205 95" stroke="#1a1a1a" strokeWidth="1.2" fill="none" markerEnd="url(#arrow8)"/>
                    <rect x="240" y="65" width="60" height="35" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="240" y1="68" x2="300" y2="68" stroke="#1a1a1a" strokeWidth="0.5"/>
                    <text x="270" y="58" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">resultado</text>
                    <text x="270" y="115" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">6,5 cm</text>
                  </svg>
                </div>
              </div>

              {/* Paso 9 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>09</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 9</p>
                <h3 className="font-display text-xl text-dark leading-snug">Planchar para mejor terminación</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Pasar la plancha sobre cada pieza para fijar el doblez.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="130" width="260" height="36" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="30" y1="133" x2="290" y2="133" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="3 2"/>
                    <text x="160" y="175" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">tira doblada (6,5 × 56 cm)</text>
                    <path d="M80 115 L240 115 Q260 115 260 128 L80 128 Q60 128 60 120 Q60 115 80 115 Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1"/>
                    <rect x="145" y="100" width="30" height="16" rx="4" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1"/>
                    <path d="M120 95 Q123 88 120 81" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <path d="M160 93 Q163 86 160 79" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <path d="M200 95 Q203 88 200 81" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <text x="160" y="75" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">vapor</text>
                  </svg>
                </div>
              </div>

              {/* Paso 10 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>10</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 10</p>
                <h3 className="font-display text-xl text-dark leading-snug">Hilvanar la parte superior para fruncir</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Coser a mano con puntadas largas (hilván) a lo largo del borde superior del volado para luego tirar del hilo y fruncir.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrowTirar" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <rect x="30" y="70" width="260" height="80" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    {[38, 62, 86, 110, 134, 158, 182, 206, 230].map((x) => (
                      <path key={`h-${x}`} d={`M${x} 70 Q${x + 6} 62 ${x + 12} 70`} stroke="#1a1a1a" strokeWidth="1.2" fill="none"/>
                    ))}
                    <line x1="38" y1="70" x2="242" y2="70" stroke="#1a1a1a" strokeWidth="0.5"/>
                    <ellipse cx="34" cy="70" rx="3" ry="6" fill="#1a1a1a" transform="rotate(-30, 34, 70)"/>
                    <line x1="28" y1="66" x2="22" y2="58" stroke="#1a1a1a" strokeWidth="0.8"/>
                    <line x1="248" y1="70" x2="284" y2="70" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrowTirar)"/>
                    <text x="264" y="63" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">tirar</text>
                    <text x="264" y="55" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">del hilo</text>
                    <text x="140" y="116" fontSize="9" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">hilván a mano en borde superior</text>
                  </svg>
                </div>
              </div>

              {/* Paso 11 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>11</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 11</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar y coser el volado</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Una vez fruncido, insertar el volado entre los dos laterales del cuerpo del mantel y pasar costura recta.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <marker id="arrowCostura" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#1a1a1a"/>
                      </marker>
                    </defs>
                    <rect x="60" y="30" width="160" height="36" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <line x1="60" y1="38" x2="220" y2="38" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3"/>
                    <text x="246" y="50" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a">tela sup.</text>
                    <rect x="60" y="82" width="160" height="36" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    {[68, 74, 79, 84, 89, 94, 100, 106, 112, 118, 124, 130, 136, 142, 148, 154, 160, 166, 172, 178, 184, 190, 196, 202, 208].map((x, i) => (
                      <line key={i} x1={x} y1="82" x2={x + (i % 2 === 0 ? 2 : -2)} y2="118" stroke="#1a1a1a" strokeWidth="0.6" opacity="0.5"/>
                    ))}
                    <text x="246" y="103" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a">volado</text>
                    <text x="246" y="113" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a">fruncido</text>
                    <rect x="60" y="134" width="160" height="36" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5"/>
                    <text x="246" y="155" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a">tela inf.</text>
                    <line x1="90" y1="24" x2="90" y2="176" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="2 2"/>
                    <text x="90" y="190" fontSize="8" fontFamily="sans-serif" fill="#1a1a1a" textAnchor="middle">costura recta</text>
                  </svg>
                </div>
              </div>

              {/* TIP FINAL */}
              <div className="mt-10 bg-dark text-cream p-8">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-4">Tip</p>
                <p className="font-body text-cream text-base leading-relaxed mb-6">
                  Podés jugar con las medidas de los volados y su base para hacer variedad de mantelitos.
                </p>
                <div className="border-t border-cream/20 pt-6">
                  <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-3">Ejemplo de variación</p>
                  <p className="font-body text-cream text-sm leading-relaxed">Base: 50 × 36 cm</p>
                  <p className="font-body text-cream text-sm leading-relaxed">Volados: 90 × 16 cm</p>
                </div>
              </div>

            </div>{/* cierra space-y-12 */}
          </div>{/* cierra space-y-0 de pasos */}
        </div>{/* cierra max-w-3xl */}
      </section>

      {/* Botón flotante — volver al inicio */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cream whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
          Volver al inicio
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M3 4h10M3 8h7M3 12h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </a>

    </div>
  );
}
