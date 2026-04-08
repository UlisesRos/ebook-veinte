import { useEffect } from 'react';

export function Module3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* Hero Section */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo III</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Forro y <br />
            <span className="italic text-dark font-normal block mt-2">
              Fuelle
            </span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
          <img
            src="/module3-hero.jpg"
            alt="Forro y Fuelle"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-dark">
          <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
          <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
          <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
        </div>
      </section>

      {/* Intro text */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-16">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display text-dark leading-snug">
              Interior y<br />
              <span className="italic lowercase text-dark font-normal block mt-2">
                volumen
              </span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              El forro y el fuelle son dos técnicas que transforman el interior y la estructura de una prenda o accesorio.
              Juntas, elevan la calidad, el confort y la funcionalidad de cualquier pieza cosida.
            </p>
          </div>
        </div>
      </section>

      {/* Índice */}
      <section id="indice" className="bg-cream mt-16 px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="uppercase text-center font-display text-dark mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400 }}>
            Contenido
          </h2>

          <div className="divide-y divide-border/40">
            {[
              { n: '01', title: 'Forrería', id: 'forreria' },
              { n: '02', title: 'Fuelle',   id: 'fuelle'   },
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

      {/* ─────────────────────────────────────── */}
      {/* 01. Forrería */}
      {/* ─────────────────────────────────────── */}
      <section id="forreria" className="bg-cream mt-16 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Interior prolijo</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              La <br />
              <span className="italic font-normal block mt-2">forrería</span>
            </h3>
          </div>

          {/* Intro */}
          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            La forrería consiste en colocar una tela interna dentro de una prenda o accesorio.
            No es solo un detalle estético: también mejora la estructura y el confort.
          </p>

          {/* Para qué sirve */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Para qué sirve
            </h4>
            <ul className="flex flex-col gap-5">
              {[
                'Oculta costuras internas',
                'Da prolijidad',
                'Mejora la caída de la prenda',
                'Aporta estructura',
                'Hace que la prenda sea más cómoda',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                  <p className="text-base text-dark leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Dónde se utiliza */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Dónde se utiliza
            </h4>
            <div className="flex flex-wrap gap-3">
              {['Bolsos', 'Neceseres', 'Sacos', 'Vestidos', 'Faldas', 'Camperas'].map((uso) => (
                <span key={uso} className="text-dark text-sm border border-dark px-5 py-2 rounded-full tracking-wide">
                  {uso}
                </span>
              ))}
            </div>
          </div>

          {/* Telas comunes para forro */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-0">
              Telas comunes para forro
            </h4>
            <div className="flex flex-col gap-0 divide-y divide-border/40">
              {[
                { n: '01', label: 'Tafeta',      desc: 'Liviana y resbaladiza.' },
                { n: '02', label: 'Acetato',     desc: 'Muy usado en indumentaria.' },
                { n: '03', label: 'Satén fino',  desc: 'Más delicado.' },
                { n: '04', label: 'Algodón',     desc: 'Ideal para bolsos y accesorios.' },
                { n: '05', label: 'Lienzo',      desc: 'Muy recomendada para interiores que necesiten estructura.' },
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

          {/* Tip — bloque oscuro con ! */}
          <div className="bg-dark text-cream px-8 py-8 mb-16 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">!</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Tip</p>
              <p className="text-cream text-base leading-relaxed">
                El forro suele ser más liviano que la tela principal, excepto en bolsos estructurados.
              </p>
            </div>
          </div>

        </div>

        {/* Imagen forrería — full width dentro de max-w-2xl */}
        <div className="max-w-2xl mx-auto px-6">
          <img
            src="/module3-forreria.jpg"
            alt="Ejemplo de forrería en bolso"
            className="w-full h-[65vh] object-cover"
          />
        </div>

      </section>

      {/* ─────────────────────────────────────── */}
      {/* 02. Fuelle */}
      {/* ─────────────────────────────────────── */}
      <section id="fuelle" className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">02. Volumen y espacio</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              El <br />
              <span className="italic font-normal block mt-2">fuelle</span>
            </h3>
          </div>

          {/* Intro */}
          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            El fuelle es una técnica que agrega volumen o espacio a una prenda o accesorio.
            Se logra incorporando una sección de tela que permite mayor amplitud.
          </p>

          {/* Para qué sirve */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Para qué sirve
            </h4>
            <ul className="flex flex-col gap-5">
              {[
                'Dar profundidad',
                'Permitir expansión',
                'Aumentar comodidad o movimiento',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                  <p className="text-base text-dark leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ejemplos — 3 cards */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-6">Ejemplos</p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { lugar: 'Mochila',   desc: 'Permite que el bolso se expanda.' },
                { lugar: 'Pollera',   desc: 'Agrega movimiento.' },
                { lugar: 'Pantalón',  desc: 'Mejora la comodidad.' },
              ].map((ej, i) => (
                <div key={i} className="bg-white border border-border/40 px-6 py-5 flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-cream border border-border/40 flex items-center justify-center">
                    <span className="font-display text-dark text-sm">0{i + 1}</span>
                  </div>
                  <div className="self-center">
                    <p className="font-display font-bold text-dark text-base mb-0.5">{ej.lugar}</p>
                    <p className="text-dark text-base leading-relaxed">{ej.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fuelle en base — editorial box */}
          <div className="relative border border-dark mb-16 px-8 py-10">
            <span className="absolute -top-3 left-6 bg-cream px-3 text-xs tracking-[0.2em] uppercase font-bold text-dark">
              Fuelle en base
            </span>
            <span aria-hidden="true" className="absolute -bottom-6 right-4 font-display text-[9rem] leading-none select-none pointer-events-none" style={{ color: 'rgba(0,0,0,0.04)' }}>
              02
            </span>
            <p className="font-display text-2xl md:text-3xl italic text-dark leading-snug mb-4">
              "Técnica para bolsos"
            </p>
            <p className="text-dark text-base leading-relaxed">
              Una forma común de crear profundidad es cortar un cuadrado en las esquinas inferiores de la pieza.
              Al coser, la pieza plana se transforma en una base con volumen.
            </p>
          </div>

          {/* Paso a paso — timeline */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-8">Paso a paso</p>

            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-dark" aria-hidden="true" />
              <ol className="space-y-0">
                {[
                  'Cortar la pieza rectangular o cuadrada.',
                  'Recortar un cuadrado igual en ambas esquinas inferiores.',
                  'Unir los bordes del corte enfrentando costura con costura.',
                  'Coser esa unión.',
                ].map((text, i) => (
                  <li key={i} className="relative flex items-start gap-6 pb-10 last:pb-0">
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-dark flex items-center justify-center">
                      <span className="font-display text-cream text-xs font-bold">0{i + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-dark text-base leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tabla de profundidad */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-0">
              Cuánta profundidad genera
            </h4>

            {/* Encabezado tabla */}
            <div className="grid grid-cols-2 bg-dark text-cream">
              <div className="px-6 py-4 text-xs tracking-[0.2em] uppercase font-bold">Tamaño del corte</div>
              <div className="px-6 py-4 text-xs tracking-[0.2em] uppercase font-bold border-l border-cream/20">Base aproximada</div>
            </div>

            {/* Filas */}
            <div className="divide-y divide-border/40 border border-t-0 border-border/40">
              {[
                { corte: '3 cm', base: '6 cm' },
                { corte: '5 cm', base: '10 cm' },
                { corte: '7 cm', base: '14 cm' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 bg-white">
                  <div className="px-6 py-5 font-display text-dark text-xl">{row.corte}</div>
                  <div className="px-6 py-5 font-display text-dark text-xl border-l border-border/40">{row.base}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Regla general — bloque oscuro */}
          <div className="bg-dark text-cream px-8 py-10 mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-4">Regla general</p>
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug text-center">
              La profundidad final suele ser aproximadamente el doble del lado del cuadrado.
            </p>
          </div>

        </div>

        {/* Imagen fuelle — full width */}
        <div className="max-w-2xl mx-auto px-6">
          <img
            src="/module3-fuelle.jpg"
            alt="Ejemplo de fuelle en bolso estructurado"
            className="w-full h-[65vh] object-cover"
          />
        </div>

      </section>

      {/* Botón volver al índice */}
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
