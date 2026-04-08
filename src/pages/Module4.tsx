import { useEffect } from 'react';

export function Module4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* Hero Section */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo IV</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Bies y <br />
            <span className="italic text-dark font-normal block mt-2">Cierres</span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
          <img
            src="/module4-hero.jpg"
            alt="Bies y Cierres"
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
              Borde, curva<br />
              <span className="italic lowercase text-dark font-normal block mt-2">y detalle</span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              El bies y los cierres son dos técnicas que transforman la terminación de cualquier proyecto.
              Uno domina las curvas y los bordes; el otro resuelve la funcionalidad con precisión.
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
              { n: '01', title: 'Para qué se usa el bies', id: 'para-que' },
              { n: '02', title: 'Tipos de bies',           id: 'tipos-bies' },
              { n: '03', title: 'Cómo hacer un bies',      id: 'como-hacer' },
              { n: '04', title: 'Cómo colocar un bies',    id: 'como-colocar' },
              { n: '05', title: 'Tipos de cierres',        id: 'cierres' },
              { n: '06', title: 'El número del cierre',    id: 'numero-cierre' },
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

      {/* ── 01. Para qué se usa el bies ── */}
      <section id="para-que" className="bg-cream mt-16 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Usos principales</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Para qué<br />
              <span className="italic font-normal block mt-2">se usa el bies</span>
            </h3>
          </div>

          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            El bies (o cinta al bies) es una tira de tela cortada en diagonal (a 45°) respecto al hilo de la tela.
            Al cortarse en diagonal, la tela queda más flexible y elástica, lo que permite que se adapte mejor a curvas.
          </p>

          {/* 3 usos numerados */}
          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Rematar bordes',
                desc: 'Escotes, dobladillos curvos, bordes de manteles o servilletas. Queda prolijo y evita que la tela se deshilache.',
              },
              {
                n: '02',
                label: 'Decorar',
                desc: 'Dar contraste de color, hacer terminaciones visibles, crear detalles en bolsos, ropa o mantas.',
              },
              {
                n: '03',
                label: 'Reforzar',
                desc: 'En zonas que se estiran mucho (como escotes), el bies ayuda a que no se deformen.',
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

      {/* ── 02. Tipos de bies ── */}
      <section id="tipos-bies" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">02. Variedades</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tipos de<br />
              <span className="italic font-normal block mt-2">bies</span>
            </h3>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Bies simple',
                desc: 'Se dobla una vez. Queda visible en el borde de la prenda.',
              },
              {
                n: '02',
                label: 'Bies doble (prefabricado)',
                desc: 'Viene ya doblado hacia adentro y listo para coser. El más fácil de usar.',
              },
              {
                n: '03',
                label: 'Bies con la misma tela',
                desc: 'Hecho a partir de la tela del proyecto. Ideal cuando querés que combine perfecto.',
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

      {/* ── 03. Cómo hacer un bies ── */}
      <section id="como-hacer" className="bg-cream mt-8 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">03. Proceso</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Cómo hacer<br />
              <span className="italic font-normal block mt-2">un bies con tu tela</span>
            </h3>
          </div>

          {/* Paso A: Cortar */}
          <div className="mb-12">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Cortar la tira
            </h4>
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-dark" aria-hidden="true" />
              <ol className="space-y-0">
                {[
                  'Extender la tela.',
                  'Buscar la diagonal (45° respecto al hilo).',
                  'Marcar tiras de 3 a 4 cm de ancho (para bies común).',
                  'Cortar siguiendo esa línea diagonal.',
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

          {/* Tip unión en diagonal */}
          <div className="border-l-2 border-dark pl-6 py-2 mb-12">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Tip</p>
            <p className="text-base text-dark leading-relaxed text-justify">
              Si necesitás tiras más largas, uní varias en diagonal, no recto. Así la unión no genera bulto al coser.
            </p>
          </div>

          {/* Paso B: Formar */}
          <div className="mb-8">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Formar el bies
            </h4>
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-dark" aria-hidden="true" />
              <ol className="space-y-0">
                {[
                  'Doblar la tira a lo largo.',
                  'Planchar.',
                  'Abrir y llevar los bordes hacia el centro.',
                  'Volver a planchar. Queda como el bies comprado.',
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

        </div>
      </section>

      {/* ── Imagen media ── */}
      <div className="max-w-2xl mx-auto px-6 mb-6">
        <img
          src="/module4-medio.jpg"
          alt="Repasadores con bies"
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* ── 04. Cómo colocar un bies ── */}
      <section id="como-colocar" className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">04. Aplicación</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Cómo colocar<br />
              <span className="italic font-normal block mt-2">un bies</span>
            </h3>
          </div>

          <p className="text-lg text-dark leading-relaxed text-center mb-12">
            Método prolijo, ideal para escotes o curvas.
          </p>

          {/* Timeline 5 pasos */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-dark" aria-hidden="true" />
              <ol className="space-y-0">
                {[
                  'Apoyar el bies abierto sobre el borde de la tela, derecho con derecho.',
                  'Coser por la primera marca del doblez.',
                  'Doblar el bies hacia el otro lado envolviendo el borde.',
                  'Sujetar con alfileres o hilván.',
                  'Coser por arriba cerca del borde.',
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

          {/* Tip curvas */}
          <div className="bg-dark text-cream px-8 py-8 mb-12 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">!</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">En curvas</p>
              <p className="text-cream text-base leading-relaxed">
                No estires el bies. Dejá que se adapte solo a la curva. Si lo tensás, la tela se fruncirá.
              </p>
            </div>
          </div>

          {/* Consejo según tela */}
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
            Consejo según tu tipo de tela
          </h4>
          <ul className="flex flex-col gap-5">
            {[
              'En tusor o lienzo queda muy prolijo porque son telas firmes.',
              'Si la tela es gruesa, hacé el bies un poco más ancho.',
              'Si es fina, 3 cm alcanza.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                <p className="text-base text-dark leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── 05. Tipos de cierres ── */}
      <section id="cierres" className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">05. Cremalleras</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tipos de<br />
              <span className="italic font-normal block mt-2">cierres</span>
            </h3>
          </div>

          <div className="flex flex-col gap-0 divide-y divide-border/40">
            {[
              {
                n: '01',
                label: 'Cierre común',
                desc: 'El más clásico. Se ven los dientes. Puede ser plástico o metálico y es fácil de colocar.',
                ideal: 'Bolsos, cartucheras, yerberas, neceseres.',
              },
              {
                n: '02',
                label: 'Cierre invisible',
                desc: 'Los dientes quedan ocultos. Queda muy prolijo y se usa mucho en ropa. Necesita prensatelas especial.',
                ideal: 'Vestidos, faldas.',
              },
              {
                n: '03',
                label: 'Cierre desmontable',
                desc: 'Se abre completamente, como en camperas. Tiene tope abajo que se separa y se divide en dos partes.',
                ideal: 'Camperas, abrigos.',
              },
              {
                n: '04',
                label: 'Cierre diente de perro',
                desc: 'Dientes grandes y bien marcados. Puede ser plástico o metal. Es resistente y llamativo, funcional y decorativo.',
                ideal: 'Mochilas, carteras, bolsos, camperas, accesorios.',
              },
              {
                n: '05',
                label: 'Cierre metálico',
                desc: 'Dientes de metal (aluminio, bronce o níquel). Firmes, resistentes, más pesados y de aspecto elegante o rústico.',
                ideal: 'Jeans, camperas, carteras, bolsos resistentes.',
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

        </div>
      </section>

      {/* ── 06. El número del cierre ── */}
      <section id="numero-cierre" className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">06. Talle del cierre</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              El número<br />
              <span className="italic font-normal block mt-2">del cierre</span>
            </h3>
          </div>

          <p className="text-lg text-dark leading-relaxed text-center mb-12">
            El número (3, 5, 8...) indica el grosor de los dientes. Cuanto más alto el número, más grande y resistente es el cierre.
          </p>

          {/* Tabla */}
          <div className="mb-16">
            {/* Header */}
            <div className="grid grid-cols-2 bg-dark text-cream">
              <div className="px-6 py-4 text-xs tracking-[0.2em] uppercase font-bold">Número</div>
              <div className="px-6 py-4 text-xs tracking-[0.2em] uppercase font-bold border-l border-cream/20">Características</div>
            </div>
            {/* Filas */}
            <div className="divide-y divide-border/40 border border-t-0 border-border/40">
              {[
                { num: 'Nº 3', desc: 'Fino, más delicado. Ideal para ropa y almohadones livianos.' },
                { num: 'Nº 5', desc: 'Mediano, más firme. Resiste mejor el uso diario. Ni muy grueso ni muy débil.' },
                { num: 'Nº 8 o más', desc: 'Dientes grandes, muy resistente, más pesado. Para mochilas o bolsos grandes.' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 bg-white">
                  <div className="px-6 py-5 font-display text-dark text-xl">{row.num}</div>
                  <div className="px-6 py-5 text-dark text-sm leading-relaxed border-l border-border/40">{row.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark box destacado */}
          <div className="bg-dark text-cream px-8 py-10">
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug text-center">
              El cierre que uses define tanto la funcionalidad como la estética del proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ── Imagen final ── */}
      <div className="max-w-2xl mx-auto px-6 mt-6">
        <img
          src="/module4-final.jpg"
          alt="Almohadones con bies ondulado"
          className="w-full h-[70vh] object-cover"
        />
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
