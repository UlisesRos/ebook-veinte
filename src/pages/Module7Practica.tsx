import { useEffect, useState } from 'react';

const WORD = 'SOBRE';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function SobreIcon({ size = 16 }: { size?: number }) {
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
      <rect x="2" y="6" width="20" height="14" rx="1" />
      <path d="M2 6 L12 14 L22 6" />
    </svg>
  );
}

export function Module7Practica() {
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
    'Tela exterior con cuerpo — gabardina / cordura',
    'Tela interior — silver o el mismo material exterior',
    'Bies',
    'Hilo',
    'Abrojo autoadhesivo',
    'Para moldería: papel madera, regla/escuadra, lápiz, goma, tijera',
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
          Práctica · Módulo VII
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
              src="/sobre.png"
              alt="Sobre terminado"
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
              src="/sobre2.png"
              alt="Sobre detalle"
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

              {/* ── Pieza 1: 43×23cm — bordes curvos en los 4 esquinas ── */}
              <rect x="20" y="30" width="280" height="160" rx="18" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />

              {/* Cota ancho */}
              <line x1="20" y1="208" x2="300" y2="208" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="20" y1="202" x2="20" y2="214" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="300" y1="202" x2="300" y2="214" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="160" y="226" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">43 cm</text>

              {/* Cota alto */}
              <line x1="8" y1="30" x2="8" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="30" x2="14" y2="30" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="2" y1="190" x2="14" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="0" y="115" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(-90 0 115)">23 cm</text>

              <text x="160" y="103" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Cuerpo del sobre</text>
              <text x="160" y="121" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">bordes curvos en los 4 lados</text>
              <text x="160" y="140" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 1 exterior + × 1 interior</text>

              {/* ── Pieza 2: 28×23cm — bordes curvos solo inferiores ── */}
              <path
                d="M330,30 L530,30 L530,168 Q530,190 508,190 L352,190 Q330,190 330,168 Z"
                fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5"
              />

              {/* Cota ancho */}
              <line x1="330" y1="208" x2="530" y2="208" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="330" y1="202" x2="330" y2="214" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="530" y1="202" x2="530" y2="214" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="430" y="226" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a">28 cm</text>

              {/* Cota alto */}
              <line x1="542" y1="30" x2="542" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="536" y1="30" x2="548" y2="30" stroke="#1a1a1a" strokeWidth="0.9" />
              <line x1="536" y1="190" x2="548" y2="190" stroke="#1a1a1a" strokeWidth="0.9" />
              <text x="552" y="115" textAnchor="middle" fontSize="11" fontFamily="serif" fill="#1a1a1a" transform="rotate(90 552 115)">23 cm</text>

              <text x="430" y="103" textAnchor="middle" fontSize="12" fontFamily="serif" fill="#1a1a1a">Solapa</text>
              <text x="430" y="121" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">bordes curvos solo inferiores</text>
              <text x="430" y="140" textAnchor="middle" fontSize="10" fontFamily="serif" fill="#1a1a1a" opacity="0.6">× 1 exterior + × 1 interior</text>

              {/* Leyenda */}
              <text x="20" y="268" fontSize="9" fontFamily="monospace" fill="#1a1a1a">① Cuerpo: cortar × 1 tela exterior + × 1 tela interior</text>
              <text x="20" y="284" fontSize="9" fontFamily="monospace" fill="#1a1a1a">② Solapa: cortar × 1 tela exterior + × 1 tela interior</text>

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
                  <span className="text-dark"><SobreIcon size={18} /></span>
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
                <h3 className="font-display text-xl text-dark leading-snug">Cortar molde 43×23cm en tela exterior e interior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Trazar el rectángulo de 43×23 cm con bordes curvos en los cuatro lados. Cortar una pieza en tela exterior y otra en tela interior.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="200" height="110" rx="14" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="120" y="82" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">43 × 23 cm</text>
                    <text x="120" y="96" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bordes curvos en los 4 lados</text>
                    <text x="268" y="82" textAnchor="middle" fontSize="18" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="268" y="100" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">ext + int</text>
                  </svg>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>02</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                <h3 className="font-display text-xl text-dark leading-snug">Cortar molde 28×23cm en tela exterior e interior</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Trazar el rectángulo de 28×23 cm con bordes curvos solo en los dos lados inferiores. Cortar una pieza en tela exterior y otra en tela interior.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40,25 L240,25 L240,128 Q240,143 225,143 L55,143 Q40,143 40,128 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="140" y="78" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">28 × 23 cm</text>
                    <text x="140" y="92" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bordes curvos solo inferiores</text>
                    <text x="278" y="82" textAnchor="middle" fontSize="18" fill="#1a1a1a" fontFamily="sans-serif">✂</text>
                    <text x="278" y="100" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">ext + int</text>
                  </svg>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>03</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                <h3 className="font-display text-xl text-dark leading-snug">Unir tela interior con exterior del molde 43×23cm</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Enfrentar el revés de la tela interior con la tela exterior y unir con costura recta por todo el borde, así nos queda una sola pieza.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="200" height="110" rx="14" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="26" y="26" width="188" height="98" rx="11" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" />
                    <text x="120" y="72" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">revés interior + exterior</text>
                    <text x="120" y="155" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta en todo el borde</text>
                  </svg>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>04</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                <h3 className="font-display text-xl text-dark leading-snug">Repetir el mismo procedimiento con el molde 28×23cm</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Enfrentar el revés de la tela interior con la tela exterior del molde de 28×23 cm y unir con costura recta por todo el borde.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40,20 L260,20 L260,118 Q260,133 245,133 L55,133 Q40,133 40,118 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <path d="M46,26 L254,26 L254,115 Q254,127 242,127 L58,127 Q46,127 46,115 Z" fill="none" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 3" />
                    <text x="150" y="73" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif">revés interior + exterior</text>
                    <text x="150" y="155" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta en todo el borde</text>
                  </svg>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>05</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar bies en la parte superior de la solapa</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Cortar un bies de 23 cm y coserlo en la parte superior de la pieza de 28×23 cm, para terminar ese borde antes de unir ambas piezas.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40,40 L260,40 L260,135 Q260,150 245,150 L55,150 Q40,150 40,135 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="40" y="22" width="220" height="20" rx="3" fill="#1a1a1a" opacity="0.8" />
                    <text x="150" y="35" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif">Bies 23 cm</text>
                    <text x="150" y="165" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">borde superior de la solapa terminado</text>
                  </svg>
                </div>
              </div>

              {/* Paso 6 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>06</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 6</p>
                <h3 className="font-display text-xl text-dark leading-snug">Superponer la solapa sobre el cuerpo y coser laterales y base</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Colocar la pieza de 28×23 cm (solapa) por encima de la pieza de 43×23 cm (cuerpo) y pasar costura recta por los laterales y la base para unir ambas piezas.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Cuerpo */}
                    <rect x="20" y="20" width="260" height="155" rx="14" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    <text x="150" y="168" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">cuerpo 43×23</text>
                    {/* Solapa encima */}
                    <path d="M50,20 L250,20 L250,115 Q250,130 235,130 L65,130 Q50,130 50,115 Z" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    <rect x="50" y="13" width="200" height="10" rx="2" fill="#1a1a1a" opacity="0.7" />
                    <text x="150" y="72" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif">solapa 28×23</text>
                    {/* Costuras laterales */}
                    <line x1="50" y1="20" x2="50" y2="130" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
                    <line x1="250" y1="20" x2="250" y2="130" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 2" opacity="0.8" />
                    <text x="150" y="190" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta en laterales y base</text>
                  </svg>
                </div>
              </div>

              {/* Paso 7 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>07</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 7</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar bies en todos los bordes del sobre</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Para tapar las costuras y emprolijar los bordes, colocar bies con costura recta alrededor de todo el perímetro del sobre.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="25" width="260" height="155" rx="14" fill="#F5F0E8" stroke="none" />
                    <rect x="22" y="17" width="276" height="171" rx="16" fill="none" stroke="#1a1a1a" strokeWidth="6" opacity="0.3" />
                    <rect x="65" y="17" width="190" height="8" rx="2" fill="#1a1a1a" opacity="0.6" />
                    <text x="160" y="108" textAnchor="middle" fontSize="9" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">bies en todo el perímetro</text>
                    <text x="160" y="185" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="sans-serif" opacity="0.5">costura recta · cubre y protege todos los bordes</text>
                  </svg>
                </div>
              </div>

              {/* Paso 8 */}
              <div className="pt-0 space-y-4 text-center">
                <span className="font-display text-dark/30 select-none leading-none" style={{ fontSize: '2.5rem', fontWeight: 700 }}>08</span>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 8</p>
                <h3 className="font-display text-xl text-dark leading-snug">Colocar abrojo autoadhesivo en la solapa</h3>
                <div className="space-y-2 pt-1">
                  <p className="font-body text-sm text-dark/70 leading-relaxed">Para finalizar el sobre, colocar abrojo autoadhesivo en la parte interior de la solapa y en el cuerpo del sobre para poder abrirlo y cerrarlo fácilmente.</p>
                </div>
                <div className="w-full overflow-hidden pt-6">
                  <svg width="100%" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Cuerpo */}
                    <rect x="30" y="50" width="260" height="130" rx="14" fill="#F5F0E8" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Solapa curva */}
                    <path d="M65,50 Q160,8 255,50" fill="#EDE8DC" stroke="#1a1a1a" strokeWidth="1.5" />
                    {/* Abrojo en solapa */}
                    <rect x="115" y="22" width="90" height="14" rx="3" fill="#1a1a1a" opacity="0.75" />
                    <text x="160" y="32" textAnchor="middle" fontSize="7" fill="white" fontFamily="sans-serif">abrojo</text>
                    {/* Abrojo correspondiente en cuerpo */}
                    <rect x="115" y="54" width="90" height="14" rx="3" fill="#1a1a1a" opacity="0.2" />
                    <text x="160" y="175" textAnchor="middle" fontSize="10" fill="#1a1a1a" fontFamily="serif">¡Sobre terminado!</text>
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
                El bies no es solo decorativo: protege todos los bordes del sobre, da una terminación profesional y evita que la tela se deshilache con el uso.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
