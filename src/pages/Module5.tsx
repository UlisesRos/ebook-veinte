import { useEffect } from 'react';

export function Module5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* Hero Section */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo V</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Abrojos y<br />
            <span className="italic text-dark font-normal block mt-2">Broches</span>
          </h1>
        </div>

        {/* Hero image */}
        <div
          className="w-full max-w-md mx-auto overflow-hidden"
          style={{ aspectRatio: '4/5' }}
        >
          <img
            src="/manijas.jpg"
            alt="Manijas de cinta mochilera"
            className="w-full h-full object-cover"
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
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-16 px-6">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display text-dark leading-snug">
              Adherir,<br />
              <span className="italic lowercase text-dark font-normal block mt-2">presionar y fijar</span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              Los abrojos y broches son los cierres que más usamos en marroquinería y costura creativa.
              Cada uno tiene su carácter: algunos se cosen, otros se prensan, y todos resuelven con firmeza.
            </p>
          </div>
        </div>
      </section>

      {/* Índice */}
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
              { n: '01', title: 'Abrojos — ¿para qué se usan?', id: 'abrojos-uso' },
              { n: '02', title: 'Tipos de abrojos',              id: 'tipos-abrojos' },
              { n: '03', title: 'Tipos de broches',              id: 'tipos-broches' },
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

      {/* ── 01. Abrojos — ¿para qué se usan? ── */}
      <section id="abrojos-uso" className="bg-cream mt-16 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Usos principales</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Abrojos<br />
              <span className="italic font-normal block mt-2">¿para qué se usan?</span>
            </h3>
          </div>

          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            Los abrojos (también conocidos como Velcro) son un sistema de cierre compuesto por dos tiras:
            una con ganchitos y otra suave con felpa o bucles. Al presionarlas juntas se adhieren
            y permiten abrir y cerrar fácilmente.
          </p>

          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Cierres prácticos',
                desc: 'En bolsos, neceseres, cartucheras, fundas y ropa infantil. Cierran rápido y abren sin esfuerzo.',
              },
              {
                n: '02',
                label: 'Ajustes regulables',
                desc: 'En cinturones, mochilas, delantales o prendas adaptables. Permiten ajustar el tamaño con facilidad.',
              },
              {
                n: '03',
                label: 'Productos infantiles',
                desc: 'Son fáciles de manipular, ideales para que los niños puedan abrirlos y cerrarlos solos.',
              },
              {
                n: '04',
                label: 'Manualidades y deco',
                desc: 'Almohadones desmontables, organizadores, accesorios y proyectos decorativos de todo tipo.',
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

      {/* ── Imagen media ── */}
      <div className="max-w-2xl mx-auto px-6 mb-6">
        <div className="w-full overflow-hidden" style={{ height: '70vh' }}>
          <img
            src="/abrojo.jpg"
            alt="Abrojos en un neceser"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── 02. Tipos de abrojos ── */}
      <section id="tipos-abrojos" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">02. Variedades</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tipos de<br />
              <span className="italic font-normal block mt-2">abrojos</span>
            </h3>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Abrojo para coser',
                desc: 'Viene en tiras o círculos. Se fija con costura recta o zigzag. Es el más resistente y duradero.',
                ideal: 'Bolsos, neceseres, mochilas, ropa infantil, productos que se lavan o tienen uso frecuente.',
              },
              {
                n: '02',
                label: 'Abrojo autoadhesivo',
                desc: 'Tiene adhesivo en la parte trasera. Se pega directamente sobre superficies lisas sin necesidad de costura.',
                ideal: 'Manualidades, decoración, organizadores, superficies rígidas como madera, plástico o pared.',
              },
              {
                n: '03',
                label: 'Abrojo industrial o extra fuerte',
                desc: 'Mayor agarre, más rígido y soporta más peso que el abrojo estándar.',
                ideal: 'Mochilas grandes, equipamiento, productos más pesados.',
              },
              {
                n: '04',
                label: 'Abrojo ancho o angosto',
                desc: 'Se consigue en distintos anchos (1 cm, 2 cm, 5 cm y más), según la necesidad de sujeción del proyecto.',
                ideal: 'Cualquier proyecto donde el ancho de la fijación sea un factor clave.',
              },
            ].map((item) => (
              <div key={item.n} className="flex items-start gap-6 py-8">
                <span
                  className="font-display text-dark leading-none shrink-0 opacity-30"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400 }}
                >
                  {item.n}
                </span>
                <div className="pt-1">
                  <p className="font-display font-bold uppercase text-dark tracking-wide text-sm mb-1">{item.label}</p>
                  <p className="text-dark text-base leading-relaxed mb-2">{item.desc}</p>
                  <div className="border-l-2 border-dark/30 pl-4">
                    <p className="text-xs tracking-[0.15em] uppercase font-bold text-dark/50 mb-0.5">Ideal para</p>
                    <p className="text-sm text-dark leading-relaxed">{item.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="border-l-2 border-dark pl-6 py-2 mt-10">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Tip</p>
            <p className="text-base text-dark leading-relaxed">
              Si tu proyecto se va a lavar frecuentemente, siempre elegí el abrojo para coser.
              El autoadhesivo puede despegarse con el calor y la humedad.
            </p>
          </div>

        </div>
      </section>

      {/* ── 03. Tipos de broches ── */}
      <section id="tipos-broches" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">03. Cierres a presión</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tipos de<br />
              <span className="italic font-normal block mt-2">broches</span>
            </h3>
          </div>

          {/* Grid 2×2 — primeros 4 broches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              {
                n: '01',
                label: 'Broche a presión plástico (tipo snap)',
                desc: 'Se coloca con pinza o prensa. Cierre firme pero fácil de abrir. Vienen en muchos colores y tamaños.',
                ideal: 'Neceseres, baberos, portachupetes, bolsillos internos, productos infantiles.',
              },
              {
                n: '02',
                label: 'Broche a presión metálico',
                desc: 'Sistema de encastre con clic. Se coloca con prensa o a golpe. Muy firme y resistente.',
                ideal: 'Bolsos, carteras, tapas de neceser, billeteras.',
              },
              {
                n: '03',
                label: 'Broche imantado (magnético)',
                desc: 'Cierre con imán. Fácil de abrir y cerrar. Queda más prolijo y discreto que los mecánicos.',
                ideal: 'Solapas de carteras, bolsos, organizadores.',
              },
              {
                n: '04',
                label: 'Broche tipo botón metálico',
                desc: 'Se cose como un botón común. Más decorativo que estructural, aporta estética al proyecto.',
                ideal: 'Detalles estéticos o refuerzo liviano.',
              },
            ].map((item) => (
              <div key={item.n} className="bg-white border border-border/40 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Tipo</span>
                  <span className="font-display text-5xl text-dark leading-none">{item.n}</span>
                </div>
                <h4 className="font-display text-xl text-dark">{item.label}</h4>
                <p className="text-dark text-base leading-relaxed">{item.desc}</p>
                <div className="border-l-2 border-dark/20 pl-4 mt-auto">
                  <p className="text-xs tracking-[0.15em] uppercase font-bold text-dark/50 mb-0.5">Ideal para</p>
                  <p className="text-sm text-dark leading-relaxed">{item.ideal}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tipo 05 — ancho completo */}
          <div className="bg-white border border-border/40 p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Tipo</span>
              <span className="font-display text-5xl text-dark leading-none">05</span>
            </div>
            <h4 className="font-display text-xl text-dark">Broche automático (remachable)</h4>
            <p className="text-dark text-base leading-relaxed">
              Se coloca con prensa. Más industrial y resistente. Muy usado en jeans y camperas.
            </p>
            <div className="border-l-2 border-dark/20 pl-4">
              <p className="text-xs tracking-[0.15em] uppercase font-bold text-dark/50 mb-0.5">Ideal para</p>
              <p className="text-sm text-dark leading-relaxed">Productos que necesitan mucha firmeza y resistencia al uso intensivo.</p>
            </div>
          </div>

          {/* Dark box destacado */}
          <div className="bg-dark text-cream px-8 py-10 mt-16">
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug text-center">
              El broche que elegís define cómo se usa y cómo se ve el proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ── Imagen final ── */}
      <div className="max-w-2xl mx-auto px-6 mt-6">
        <div className="w-full overflow-hidden" style={{ height: '100vh' }}>
          <img
            src="/broche.jpg"
            alt="Broche automático"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

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
