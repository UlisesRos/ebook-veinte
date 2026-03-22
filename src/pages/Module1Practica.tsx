import { useEffect, useState } from 'react';

const WORD = 'TOTEBAG';
const TYPE_SPEED  = 120;
const ERASE_SPEED = 70;

function TotebagIcon({ size = 16 }: { size?: number }) {
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
      <path d="M5 8h14l-1.5 11H6.5L5 8z" />
      <path d="M9 8c0-1.657 1.343-3 3-3s3 1.343 3 3" />
    </svg>
  );
}

export function Module1Practica() {
  const [displayed, setDisplayed] = useState('');
  const [erasing, setErasing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [diagramOpen, setDiagramOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (diagramOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [diagramOpen]);

  // Typewriter loop
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

  // Cursor parpadeante
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const materiales = [
    'Tela con un poco de cuerpo — tropical mecánico, tusor',
    'Hilo del color de la tela',
    'Agujas',
    'Alfileres',
    'Hilo de hilván',
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
          Práctica · Módulo I
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

        {/* Two photos */}
        <div
          style={{
            position: 'relative',
            width: 'min(88vw, 580px)',
            height: 'clamp(260px, 50vw, 440px)',
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
            <img src="/tote-rayada.png" alt="Totebag rayada"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }} />
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
            <img src="/tote-cruda.png" alt="Totebag cruda"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '5px' }} />
          </div>
        </div>
      </div>

      {/* ── MOLDERÍA ── */}
      <section className="bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="space-y-2 text-center">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">01. Estructura</p>
            <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Moldería</h2>
          </div>

          {/* Imagen molderia */}
          <div className="w-full overflow-hidden">
            <img
              src="/molderia.png"
              alt="Molderia"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                imageRendering: 'crisp-edges',
              }}
            />
          </div>
            
          {/* ── MATERIALES ── */}
          <div className="space-y-4">
            <div className="space-y-1 text-center">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">02. Lo que necesitás</p>
              <h2 className="text-4xl md:text-5xl font-display text-dark leading-tight">Materiales</h2>
            </div>
            <ul className="space-y-0 divide-y divide-border/30">
              {materiales.map((item, i) => (
                <li key={i} className="flex items-center gap-4 py-4 group">
                  <span className="text-dark">
                    <TotebagIcon size={18} />
                  </span>
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

            {/* Paso 1 */}
            <div className="space-y-4">

                <div className="p-8 space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    01
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 1</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Cortar en tela doble
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Doblar la tela (derechos adentro) 
                    </p>
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Cortar 60 × 40 cm + margen
                    </p>
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Al abrir quedará un rectángulo de 1,20 × 0,40m
                    </p>
                  </div>
                </div>

              {/* Imagen paso 1 */}
              <div className="w-full overflow-hidden pb-6">
                <img
                  src="/paso1-cortar.png"
                  alt="Paso 1 — Cortar en tela doble"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    imageRendering: 'crisp-edges',
                  }}
                />
              </div>

            </div>

            {/* ── PASOS 2–5 en grid ── */}
            <div className="space-y-12">
              <div>

                {/* Paso 2 */}
                <div className="pt-0 space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    02
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Dobladillo en todos los laterales
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Hilvanar y coser laterales <br /> de 1,20 m → máquina
                    </p>
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Hilvanar y coser laterales <br /> de 0,40 m → máquina
                    </p>
                  </div>

                  {/* Imagen paso 2 */}
                  <div className="w-full overflow-hidden pb-6 pt-6">
                    <img
                      src="/paso2-cortar.png"
                      alt="Paso 2 — Dobladillo en todos los laterales"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>

                {/* Paso 3 */}
                <div className="pt-0 space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    03
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 3</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Nudo en el centro de la tela
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Con costura recta terminada.
                    </p>
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      No presionar fuerte.
                    </p>
                  </div>

                  {/* Imagen paso 3 */}
                  <div className="w-full overflow-hidden pb-6 pt-6">
                    <img
                      src="/paso3-cortar.png"
                      alt="Paso 3 — Nudo en el centro de la tela"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>

                {/* Paso 4 */}
                <div className="pt-0  space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    04
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 4</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Enfrentar derechos y coser los laterales
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Coser ambos lados desde la base, aprox. 25 cm de alto.
                    </p>
                  </div>

                  {/* Imagen paso 4 */}
                  <div className="w-full overflow-hidden pb-6 pt-6">
                    <img
                      src="/paso4-cortar.png"
                      alt="Paso 4 — Enfrentar derechos y coser los laterales"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>

                {/* Paso 5 */}
                <div className="pt-0 pb-0 space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    05
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 5</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Enfrentar costuras y unir la base
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Alinear las costuras laterales entre sí y coser la base a máquina.
                    </p>
                  </div>

                  {/* Imagen paso 5  */}
                  <div className="w-full overflow-hidden pb-6 pt-6">
                    <img
                      src="/paso5-cortar.png"
                      alt="Paso 5 — Enfrentar costuras y unir la base"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>

                {/* Paso 6 */}
                <div className="pt-0 space-y-4 text-center">
                  <span
                    className="font-display text-dark/30 select-none leading-none"
                    style={{ fontSize: '2.5rem', fontWeight: 700 }}
                  >
                    06
                  </span>
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Paso N° 2</p>
                  <h3 className="font-display text-xl text-dark leading-snug">
                    Dar vuelta
                  </h3>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark/70 leading-relaxed">
                      Pasar la pieza por la abertura superior con cuidado
                    </p>
                  </div>

                  {/* Imagen paso 6 */}
                  <div className="w-full overflow-hidden pt-6">
                    <img
                      src="/paso6-cortar.png"
                      alt="Paso 6 — Dar vuelta"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        imageRendering: 'crisp-edges',
                      }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MODAL DIAGRAMA ── */}
      {diagramOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            padding: '5vh 5vw',
          }}
          onClick={() => setDiagramOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '90vw',
              maxWidth: '700px',
              maxHeight: '90svh',
            }}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/30 shrink-0">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] font-bold text-dark">Moldería</p>
                <p className="font-display text-lg text-dark leading-tight">Totebag · 60 × 40 cm</p>
              </div>
              <button
                onClick={() => setDiagramOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-cream transition-colors duration-150 text-dark/60 hover:text-dark"
                aria-label="Cerrar"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14" />
                </svg>
              </button>
            </div>

            {/* Imagen completa */}
            <div
              className="flex items-center justify-center p-5 md:p-8"
              style={{ flex: 1, minHeight: 0 }}
            >
              <img
                src="/molderia-totebag.png"
                alt="Diagrama moldería totebag"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}