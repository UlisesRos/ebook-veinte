import { useEffect, useState } from 'react';

export function Module2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = ['/volado1.png', '/volado2.png', '/volado3.png'];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* Hero Section */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo II</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Técnicas <br />
            <span className="italic text-dark font-normal block mt-2">
              Fundamentales
            </span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
          <img
            src="/detalles-acabados.jpg"
            alt="Detalles y acabados"
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
              Detalles y<br />
              <span className="italic lowercase text-dark font-normal block mt-2">
                Acabados
              </span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              Los acabados determinan la prolijidad, la durabilidad y la calidad visual de una prenda o accesorio.
              En este módulo vamos a aprender las técnicas básicas que transforman una costura simple en un trabajo cuidado y profesional.
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
              { n: '01', title: 'El rol de la plancha',  id: 'plancha' },
              { n: '02', title: 'Margen de costura parejo',           id: 'margen' },
              { n: '03', title: 'Recortar exceso de tela',            id: 'recortar' },
              { n: '04', title: 'Remates prolijos',                   id: 'remates' },
              { n: '05', title: 'Esquinas limpias',                   id: 'esquinas' },
              { n: '06', title: 'Costura invisible',                  id: 'costura-invisible' },
              { n: '07', title: 'Volados',                            id: 'volados' },
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

      {/* 01. El rol de la plancha */}
      <section id="plancha" className="bg-cream mt-16 px-6 py-16">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Plancha y presión</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              El rol de la <br />
              <span className="italic font-normal block mt-2">plancha</span>
            </h3>
          </div>

          {/* Intro */}
          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            Planchar durante el proceso permite que las costuras se asienten correctamente y que la prenda conserve su forma.
          </p>

          {/* ¿Cuándo planchar? */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              ¿Cuándo planchar?
            </h4>

            <div className="flex flex-col gap-0 divide-y divide-border/40">
              {[
                { n: '01', label: 'Antes de coser', desc: 'Elimina arrugas y estabiliza la tela.' },
                { n: '02', label: 'Después de coser', desc: 'Fija la costura.' },
                { n: '03', label: 'Para abrir costuras', desc: 'Permite que la prenda quede plana y prolija.' },
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

          {/* Ejemplo */}
          <div className="border-l-2 border-dark pl-6 py-2">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Ejemplo</p>
            <p className="text-base text-dark leading-relaxed text-justify mb-4">
              Cuando unís dos piezas de tela, la costura queda con volumen.
            </p>
            <p className="text-base text-dark leading-relaxed text-justify">
              Si abrís esa costura con la plancha, la tela se aplana y la prenda adquiere una terminación más limpia.
            </p>
          </div>

          {/* Video */}
          <div className="mt-16 w-full overflow-hidden">
            <video
              src="/plancha.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* 02. Margen de costura parejo */}
      <section id="margen" className="bg-cream mt-8 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">02. Precisión al coser</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Margen de <br />
              <span className="italic font-normal block mt-2">costura parejo</span>
            </h3>
          </div>

          {/* Intro */}
          <p className="text-lg text-dark leading-relaxed text-center mb-4">
            El margen de costura es el espacio entre la línea de costura y el borde de la tela.
          </p>
          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            Mantenerlo parejo es fundamental para que la prenda conserve su forma y tamaño.
          </p>

          {/* Cómo lograrlo */}
          <div className="mb-16">
            <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
              Cómo lograrlo
            </h4>

            <ul className="flex flex-col gap-5">
              {[
                'Mantener siempre el mismo centímetro de costura.',
                'Usar las líneas guía de la placa de aguja de la máquina.',
                'Coser de forma constante y sin apurar la tela.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                  <p className="text-base text-dark leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Ejemplo */}
          <div className="border-l-2 border-dark pl-6 py-2">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Ejemplo</p>
            <p className="text-base text-dark leading-relaxed text-justify">
              Si en un lado cosés a 1 cm y en otro a 2 cm, las piezas no coincidirán y la prenda perderá simetría.
            </p>
          </div>

        </div>
      </section>

      {/* 03. Recortar exceso de tela */}
      <section id="recortar" className="bg-cream py-20">

        {/* Encabezado */}
        <div className="max-w-2xl mx-auto px-6 text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">03. Recorte y limpieza</p>
          <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
            Recortar exceso <br />
            <span className="italic font-normal block mt-2">de tela</span>
          </h3>
          <p className="text-lg text-dark leading-relaxed mt-6">
            Los pequeños detalles generan grandes diferencias en el resultado final.
          </p>
        </div>

        {/* Imagen */}
        <div className="max-w-2xl mx-auto px-6 mb-14">
          <img
            src="/recorte.png"
            alt="Técnica de recorte de exceso de tela"
            className="w-full h-[70vh] object-cover"
          />
        </div>

        {/* Subsección: Qué revisar siempre */}
        <div className="max-w-2xl mx-auto px-6 mb-14">
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-8">
            Qué revisar siempre
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {[
              'Emparejar bordes de tela.',
              'Recortar márgenes excesivos si generan volumen.',
              'Cortar hilos sueltos.',
            ].map((text, i) => (
              <div key={i} className="bg-white shadow-sm border border-border/40 px-6 py-5 flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cream border border-border/40 flex items-center justify-center">
                  <span className="font-display text-dark text-sm">0{i + 1}</span>
                </div>
                <p className="text-dark text-base leading-relaxed self-center">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ejemplo — banner fondo oscuro full-width */}
        <div className="bg-dark text-cream w-full py-10 px-6">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-cream block mb-3">
              Ejemplo práctico
            </span>
            <p className="text-base md:text-lg text-cream leading-relaxed">
              En una costura interna gruesa —por ejemplo en un bolso— recortar el excedente evita que se generen bultos al dar vuelta la pieza.
            </p>
          </div>
        </div>

      </section>

      {/* 04. Remates prolijos */}
      <section id="remates" className="py-8 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          {/* Encabezado */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">04. Terminaciones</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Remates <br />
              <span className="italic font-normal block mt-2">prolijos</span>
            </h3>
          </div>

          {/* Intro */}
          <p className="text-lg text-dark leading-relaxed text-center mb-16">
            Los remates aseguran que la costura no se desarme.
          </p>

          {/* Buenas prácticas — tipografía grande */}
          <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-dark border-b border-border/40 pb-4 mb-0">
            Buenas prácticas
          </h4>

          <div className="divide-y divide-border/40 border-b border-border/40 mb-16">
            {[
              'Asegurar inicio y final con retroceso.',
              'No dejar hilos largos.',
              'Cortar el hilo al ras.',
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 py-8">
                <span className="font-display text-6xl md:text-8xl leading-none text-dark/30 select-none shrink-0 w-12 text-right" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="font-display text-2xl md:text-3xl leading-tight text-dark">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Ejemplo — bloque oscuro */}
          <div className="bg-dark text-cream px-8 py-10">
            <p className="font-display text-xl md:text-2xl leading-snug text-cream italic text-center">
              Doblá el borde de la tela hacia adentro unos milímetros y luego hacé un segundo doblez para esconder el borde crudo.
              Planchá y cosé despacio para lograr un acabado prolijo y parejo.            
            </p>
          </div>

        </div>
      </section>

      {/* 05. Esquinas limpias */}
      <section id="esquinas" className="py-10 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">05. Forma y estructura</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Esquinas
              <span className="italic font-normal block mt-2">limpias</span>
            </h3>
            <p className="text-dark mt-6 text-base md:text-lg max-w-md mx-auto">
              Las esquinas bien formadas hacen que una prenda se vea prolija.
            </p>
          </div>

          {/* Técnica básica — timeline vertical */}
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-8">Técnica básica</p>

            <div className="relative">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-dark" aria-hidden="true" />
              <ol className="space-y-0">
                {[
                  'Coser la esquina normalmente.',
                  'Recortar el excedente en diagonal.',
                  'Dar vuelta la pieza.',
                  'Empujar suavemente la esquina con una herramienta, no con la punta de la tijera.',
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

          {/* Importante */}
          <div className="bg-dark text-cream px-8 py-8 mb-12 flex gap-5 items-start">
            <span className="font-display text-cream text-3xl leading-none mt-1 shrink-0">!</span>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-2">Importante</p>
              <p className="text-cream text-base leading-relaxed">
                No cortar demasiado cerca de la costura para evitar que la tela se rompa.
              </p>
            </div>
          </div>

          {/* Ejemplo — grid 2×2 */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">Ejemplo</p>
            <p className="text-dark text-sm mb-6">Esta técnica se utiliza mucho en:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Cuellos', 'Bolsillos', 'Neceseres', 'Almohadones'].map((label, i) => (
                <div key={label} className="bg-white border border-border/40 px-5 py-6 flex items-center gap-4">
                  <span className="font-display text-5xl leading-none select-none shrink-0 text-dark/[0.07]" aria-hidden="true">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <p className="font-display text-dark text-xl leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 06. Costura invisible */}
      <section id="costura-invisible" className="py-10 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">06. Puntada a mano</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Costura
              <span className="italic font-normal block mt-2">invisible</span>
            </h3>
          </div>

          <p className="text-dark text-lg leading-relaxed text-center mb-12">
            La costura invisible es una puntada que no se percibe desde el exterior. Se utiliza para cerrar aberturas o terminaciones sin que se vea la costura.
          </p>

          {/* Técnica destacada — cita editorial con borde */}
          <div className="relative border border-dark mb-16 px-8 py-10">
            <span className="absolute -top-3 left-6 bg-cream px-3 text-xs tracking-[0.2em] uppercase font-bold text-dark">
              La técnica
            </span>
            <span aria-hidden="true" className="absolute -bottom-6 right-4 font-display text-[9rem] leading-none select-none pointer-events-none" style={{ color: 'rgba(0,0,0,0.04)' }}>
              06
            </span>
            <p className="font-display text-2xl md:text-3xl italic text-dark leading-snug mb-4">
              "Puntada escondida a mano"
            </p>
            <p className="text-dark text-base leading-relaxed">
              Consiste en tomar pequeños hilos alternados de cada lado de la abertura.
              Cuando se ajusta el hilo, <strong className="font-bold">la costura desaparece.</strong>
            </p>
          </div>

          {/* Usos más comunes — chips */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-6">Usos más comunes</p>
            <div className="flex flex-wrap gap-3">
              {['Cerrar forros', 'Cerrar abertura al dar vuelta la prenda', 'Dobladillos delicados'].map((uso) => (
                <span key={uso} className="text-dark text-sm border border-dark px-5 py-2 rounded-full tracking-wide">
                  {uso}
                </span>
              ))}
            </div>
          </div>

          {/* Tips — bloque oscuro */}
          <div className="bg-dark text-cream px-8 py-10">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-8">Tips</p>
            <ul className="divide-y divide-cream/20">
              {[
                'Usar hilo del mismo color que la tela.',
                'Hacer puntadas pequeñas.',
                'No tensar demasiado el hilo.',
                'Planchar al finalizar para fijar el acabado.',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-6 py-5">
                  <span className="font-display text-xs tracking-widest text-cream/40 mt-0.5 shrink-0">0{i + 1}</span>
                  <p className="text-cream text-base leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 07. Volados */}
      <section id="volados" className="py-10 bg-cream">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">07. Volumen y detalle</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Volados
              <span className="italic font-normal block mt-2">paso a paso</span>
            </h3>
            <p className="text-dark text-base mt-6 max-w-md mx-auto leading-relaxed">
              Paso a paso para hacer volados con hilván a mano.
            </p>
          </div>

          {/* Grid de pasos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Cortar la tela', desc: 'El volado necesita ser más largo que la base (aprox. el doble para que quede bien fruncido).' },
              { title: 'Hacer el hilván', desc: 'Enhebrar la aguja sin hacer nudo muy grande. Hacer puntadas largas tipo sube y baja (línea discontinua). Coser a lo largo del borde superior de la tela.' },
              { title: 'Fruncir', desc: 'Tirar suavemente del hilo. La tela se va juntando sola. Distribuir los frunces con la mano hasta que queden parejos.' },
              { title: 'Ajustar a la medida', desc: 'Igualar el largo del volado con la pieza donde lo vas a coser. Hacer un nudito para que no se afloje.' },
            ].map((paso, i) => (
              <div key={i} className="bg-white border border-border/40 p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Paso</span>
                  <span className="font-display text-5xl text-dark leading-none">0{i + 1}</span>
                </div>
                <h4 className="font-display text-xl text-dark">{paso.title}</h4>
                <p className="text-dark text-base leading-relaxed">{paso.desc}</p>
              </div>
            ))}

            {/* Paso 05 — ancho completo */}
            <div className="bg-white border border-border/40 p-6 flex flex-col gap-4 md:col-span-2">
              <div className="flex justify-between items-start">
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Paso</span>
                <span className="font-display text-5xl text-dark leading-none">05</span>
              </div>
              <h4 className="font-display text-xl text-dark">Fijar el volado</h4>
              <p className="text-dark text-base leading-relaxed">
                Colocar el volado sobre la tela base. Sujetar con alfileres. Coser a máquina o a mano encima del hilván.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-dark text-cream p-8">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-cream mb-6">Tips</p>
            <ul className="flex flex-col gap-4">
              {[
                'No fruncir demasiado de golpe: hacerlo despacio para que no se corte el hilo.',
                'Si la tela es gruesa (tusor o lienzo), usar hilo fuerte.',
                'Cuanto más largo el volado, más volumen se logra.',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-display text-lg text-cream leading-none mt-0.5">—</span>
                  <p className="text-cream text-base leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Carrusel final — Volados */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="relative overflow-hidden">
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {slides.map((src, i) => (
                <div key={i} className="w-full shrink-0">
                  <img
                    src={src}
                    alt={`Volado ${i + 1}`}
                    className="w-full h-[60vw] max-h-[480px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Flechas */}
            <button
              onClick={() => setSlide(s => (s - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-dark/70 text-cream rounded-full flex items-center justify-center hover:bg-dark transition-colors"
              aria-label="Anterior"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setSlide(s => (s + 1) % slides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-dark/70 text-cream rounded-full flex items-center justify-center hover:bg-dark transition-colors"
              aria-label="Siguiente"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === slide ? 'bg-dark' : 'bg-dark/20'}`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Botón flotante — volver al índice */}
      <a
        href="#indice"
        className="fixed bottom-6 right-6 z-[100] group flex items-center gap-0 bg-dark text-cream rounded-full shadow-lg h-10 px-3 transition-all duration-300"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cream whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2 transition-all duration-300">
          Volver al índice
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
          <path d="M3 4h10M3 8h7M3 12h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </a>

    </div>
  );
}
