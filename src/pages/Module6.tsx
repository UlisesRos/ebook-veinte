import { useEffect } from 'react';

export function Module6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero Section ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo VI</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Piquetes<br />
            <span className="italic text-dark font-normal block mt-2">en moldería</span>
          </h1>
        </div>

        {/* Hero image */}
        <div className="w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/portabolsa.png"
            alt="Porta bolsa terminado"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-dark">
          <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
          <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
          <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
        </div>
      </section>

      {/* ── Intro text ── */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-16 px-6">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display text-dark leading-snug">
              Marcas que<br />
              <span className="italic lowercase text-dark font-normal block mt-2">guían el armado</span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              En moldería, los piquetes son pequeñas marcas —generalmente cortes mínimos en el margen de costura—
              que sirven como guías de armado. Saber usarlos es la diferencia entre un proyecto prolijo y uno desalineado.
            </p>
          </div>
        </div>
      </section>

      {/* ── Índice ── */}
      <section id="indice" className="bg-cream mt-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h2
            className="uppercase text-center font-display text-dark mb-2"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400 }}
          >
            Contenido
          </h2>
          <div className="divide-y divide-border/40">
            {[
              { n: '01', title: 'Piquetes — ¿para qué se usan?',      id: 'piquetes-uso'  },
              { n: '02', title: '¿Cómo hacerlos correctamente?',       id: 'piquetes-como' },
              { n: '03', title: '¿Cómo distinguir el derecho del revés?', id: 'derecho-reves' },
            ].map((item) => (
              <a
                key={item.n}
                href={`#${item.id}`}
                className="flex items-start gap-6 py-8 no-underline group"
              >
                <span
                  className="font-display text-dark leading-none shrink-0 group-hover:opacity-60 transition-opacity"
                  style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', fontWeight: 400 }}
                >
                  {item.n}
                </span>
                <div className="pt-2">
                  <h3
                    className="font-display text-dark uppercase mt-2 md:mt-10 group-hover:opacity-60 transition-opacity"
                    style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', fontWeight: 700, letterSpacing: '0.08em' }}
                  >
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01. ¿Para qué se usan? ── */}
      <section id="piquetes-uso" className="bg-cream mt-16 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Funciones esenciales</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              ¿Para qué<br />
              <span className="italic font-normal block mt-2">se usan?</span>
            </h3>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Unir piezas correctamente',
                desc: 'Indican qué parte de una pieza coincide con otra. Por ejemplo, delantero con espalda, manga con sisa.',
              },
              {
                n: '02',
                label: 'Marcar centros o mitades',
                desc: 'Señalan el centro de una manga, el centro delantero o trasero, o el punto medio de cualquier pieza.',
              },
              {
                n: '03',
                label: 'Ubicar detalles',
                desc: 'Sirven para saber exactamente dónde colocar bolsillos, pinzas, cierres, tablas o frunces.',
              },
              {
                n: '04',
                label: 'Diferenciar delantero y espalda',
                desc: 'Una sola marca puede indicar espalda y doble marca, delantero (o viceversa, según el sistema de moldería que se use).',
              },
              {
                n: '05',
                label: 'Guiar frunces',
                desc: 'Marcan desde dónde hasta dónde fruncir o embutir tela en una costura, garantizando que quede bien distribuido.',
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-6 py-6">
                <span
                  className="font-display text-dark leading-none shrink-0 opacity-30"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400 }}
                >
                  {item.n}
                </span>
                <div className="pt-1">
                  <p className="font-display font-bold uppercase text-dark tracking-wide text-sm mb-1">{item.label}</p>
                  <p className="text-dark text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Imagen centro.png (antes de la sección 02) ── */}
      <div className="max-w-2xl mx-auto px-6 my-6">
        <div className="w-full overflow-hidden" style={{ height: '70vh' }}>
          <img
            src="/centro.png"
            alt="Centro de pieza marcado con piquete"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── 02. ¿Cómo hacerlos correctamente? ── */}
      <section id="piquetes-como" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">02. Técnica</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              ¿Cómo hacerlos<br />
              <span className="italic font-normal block mt-2">correctamente?</span>
            </h3>
          </div>

          {/* 3 reglas con círculos */}
          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                rule: 'Corte de 2 mm máximo',
                detail: 'El piquete es un corte pequeñísimo. No más de 2 mm de profundidad: lo suficiente para que se vea, no más.',
              },
              {
                n: '02',
                rule: 'Siempre dentro del margen de costura',
                detail: 'Si tu margen es 1 cm, el piquete va dentro de ese centímetro. Nunca más adentro de la línea de costura.',
              },
              {
                n: '03',
                rule: 'Nunca demasiado profundo',
                detail: 'Un piquete profundo puede debilitar o romper la costura al tensar. Menos profundidad, más seguridad.',
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-6 py-8">
                <div className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center shrink-0 mt-1">
                  <span className="font-display font-bold text-dark text-sm leading-none">{item.n}</span>
                </div>
                <div className="pt-1">
                  <p className="font-display font-bold uppercase text-dark tracking-wide text-sm mb-2">{item.rule}</p>
                  <p className="text-dark text-base leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cita oscura */}
          <div className="bg-dark text-cream px-8 py-10 mt-10">
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug text-center">
              Un piquete bien hecho guía.<br />Un piquete mal hecho, rompe.
            </p>
          </div>

        </div>
      </section>

      {/* ── 03. ¿Cómo distinguir el derecho del revés? ── */}
      <section id="derecho-reves" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">03. Referencia visual</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              ¿Cómo distinguir el<br />
              <span className="italic font-normal block mt-2">derecho del revés?</span>
            </h3>
          </div>

          <p className="text-lg text-dark leading-relaxed text-center mb-12">
            Al principio puede costar, pero hay varios trucos simples que se usan en costura para identificar el derecho de la tela.
          </p>

          {/* Imágenes derecho / revés — lado a lado en desktop, apiladas en mobile */}
          <div className="flex flex-col md:flex-row gap-3 mb-12">
            <div className="w-full md:w-1/2 overflow-hidden" style={{ height: '55vh' }}>
              <img
                src="/derecho.png"
                alt="Derecho de la tela"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 overflow-hidden" style={{ height: '55vh' }}>
              <img
                src="/reves.png"
                alt="Revés de la tela"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Grid 2×2 — trucos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              {
                n: '01',
                label: 'Mirar el dibujo o color',
                desc: 'El derecho tiene el color más intenso o el dibujo más nítido. El revés se ve más opaco o apagado.',
              },
              {
                n: '02',
                label: 'Mirar la textura',
                desc: 'Pasá la mano: el derecho suele ser más suave o más prolijo. El revés puede sentirse un poco más áspero.',
              },
              {
                n: '03',
                label: 'Mirar los bordes (orillo)',
                desc: 'Los pequeños agujeritos del orillo sobresalen hacia el revés. Del lado donde sentís más liso suele ser el derecho.',
              },
              {
                n: '04',
                label: 'En telas lisas como el lienzo',
                desc: 'A veces derecho y revés son casi iguales. En ese caso elegís un lado como derecho y trabajás siempre con ese mismo.',
              },
            ].map((item) => (
              <div key={item.n} className="bg-white border border-border/40 p-6 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Truco</span>
                  <span className="font-display text-5xl text-dark leading-none">{item.n}</span>
                </div>
                <h4 className="font-display text-lg text-dark">{item.label}</h4>
                <p className="text-dark text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tip final */}
          <div className="border-l-2 border-dark pl-6 py-2">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Tip</p>
            <p className="text-base text-dark leading-relaxed">
              Cuando decidís cuál es el derecho, marcá el revés con una tiza o un alfiler, así no te confundís mientras cosés.
            </p>
          </div>

        </div>
      </section>

      {/* Floating back to index */}
      <a
        href="#indice"
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300"
        aria-label="Volver al índice"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cream whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
          Volver al índice
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

    </div>
  );
}
