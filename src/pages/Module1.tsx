import { useEffect, useState } from 'react';

export function Module1() {
  const [activeSwatch, setActiveSwatch] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* Hero Section */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo I</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Costura Creativa <br />
            <span className="italic text-dark font-normal block mt-2">
              Inicial
            </span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
          <img
            src="/module1.png"
            alt="Detalle textil"
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
              Introducción<br />
              <span className="italic lowercase text-dark font-normal block mt-2">
                al mundo textil
              </span>
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              Entender las herramientas es el primer paso antes de diseñar.
            </p>
          </div>
        </div>
      </section>

      {/* Indice */}
      <section id="indice" className="bg-cream mt-16 px-6">
        <div className="max-w-2xl mx-auto">

          <h2 className="uppercase text-center font-display text-dark mb-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400 }}>
            Contenido
          </h2>

          <div className="divide-y divide-border/40">
            {[
              { n: '01', title: 'Máquina de coser',          id: 'maquina' },
              { n: '02', title: 'Agujas de la máquina',       id: 'agujas' },
              { n: '03', title: 'Cómo enhebrar la máquina',   id: 'enhebrar' },
              { n: '04', title: 'Cómo cargar la bobina',      id: 'bobina' },
              { n: '05', title: 'Tensión de la máquina',      id: 'tension' },
              { n: '06', title: 'Tipos de puntadas básicas',  id: 'puntadas' },
              { n: '07', title: 'Telas',                      id: 'telas' },
              { n: '08', title: 'Dobladillo',                 id: 'dobladillo' },
              { n: '09', title: 'Hilvan',                     id: 'hilvan' },
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

      {/* Partes de la Maquina */}
      <section id="maquina" className="relative z-30 bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-4">01. Conociendo el equipo</p>
            <h3 className="text-4xl md:text-6xl font-display">
              Partes de la Máquina <br />
              <span className="font-normal block mt-2">
                de Coser
              </span>
            </h3>
          </div>

          {(() => {
            const columns = [
              {
                title: 'Parte Superior',
                items: [
                  { label: 'Porta carrete', desc: 'Lugar donde se coloca el hilo superior.' },
                  { label: 'Guía hilos', desc: 'Pequeños ganchos por donde pasa el hilo antes de llegar a la aguja.' },
                  { label: 'Tensor de hilo', desc: 'Regula la tensión del hilo superior. Número más alto: más tensión. Número más bajo: menos tensión.' },
                  { label: 'Palanca tira hilo', desc: 'Sube y baja al coser arriba de la aguja. Es la que "tira" del hilo en cada puntada.' },
                  { label: 'Volante', desc: 'Rueda lateral que mueve la aguja manualmente. Siempre se gira hacia vos.' },
                ],
              },
              {
                title: 'Zona de Costura',
                items: [
                  { label: 'Aguja', desc: 'Perfora la tela y forma la puntada junto con la canilla.' },
                  { label: 'Prensatelas', desc: 'Pieza que sujeta la tela contra los dientes de arrastre mientras la aguja cose.' },
                  { label: 'Palanca prensatelas', desc: 'Sube y baja el prensatelas.' },
                  { label: 'Placa de aguja', desc: 'Base metálica con guías en centímetros justo debajo de la aguja. Ayuda a mantener el margen de costura.' },
                  { label: 'Dientes de arrastre', desc: 'Pequeños "dientitos" que mueven la tela hacia atrás mientras cose. No hay que tirar la tela, la máquina la mueve sola.' },
                ],
              },
              {
                title: 'Parte Inferior',
                items: [
                  { label: 'Canilla o bobina', desc: 'Carrete pequeño que lleva el hilo inferior.' },
                  { label: 'Porta canilla', desc: 'Lugar donde se coloca la canilla.' },
                  { label: 'Selector de puntada', desc: 'Elige el tipo de puntada: recta, zigzag, etc.' },
                  { label: 'Regulador de largo', desc: 'Define si la puntada es larga o corta.' },
                  { label: 'Pedal', desc: 'Controla la velocidad y la presión al coser.' },
                ],
              },
            ];

            let letterIndex = 0;

            return (
              <div className="flex flex-col gap-12">
                {columns.map((col) => (
                  <div key={col.title}>
                    <h4 className="text-md uppercase text-dark font-display font-bold border-b border-border/40 pb-4 mb-6">
                      {col.title}
                    </h4>
                    <ul className="space-y-5">
                      {col.items.map((item) => {
                        const letter = String.fromCharCode(97 + letterIndex);
                        letterIndex++;
                        return (
                          <li key={item.label} className="flex items-start gap-3">
                            <span className="text-md font-body font-bold text-dark mt-0.5 shrink-0 uppercase">
                              {letter}.
                            </span>
                            <span className="text-md text-dark leading-relaxed text-justify">
                              {item.label} {item.desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>

      {/* Full width image breaker */}
      <section className="relative z-[35] bg-cream py-12 px-6 pt-0">
        <div className="max-w-6xl mx-auto w-full h-80 md:h-[120vh] overflow-hidden">
          <img src="/maquina1.png" alt="Textura de tela" className="w-full h-full object-cover grayscale" />
        </div>
      </section>

      {/* Agujas de la Máquina */}
      <section id="agujas" className="relative z-50 bg-cream mt-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-16 items-start">
          <div className="sticky text-center top-32 space-y-8">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">02. Puntadas</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark">
              Agujas de la Máquina
            </h3>
            <p className="text-md text-black text-center">
              La aguja es un elemento fundamental para lograr una costura prolija. Elegir la aguja correcta evita problemas como puntadas salteadas, roturas de hilo o daño en la tela. <br />
              <span className="mt-4">
                Las agujas se diferencian principalmente por su tamaño y por el tipo de punta.
              </span>
            </p>
            <div className="aspect-[4/3] overflow-hidden mt-8">
              <img src="/aguja.png" alt="Muestras" className="w-full h-full object-cover grayscale" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-md font-display font-bold mb-2">Tamaño de la aguja</h4>
              <p className="text-md text-dark mb-4 text-justify">El tamaño se indica con un número. Cuanto mayor es el número, más gruesa es la aguja.</p>
              <p className="text-dark font-bold font-display mb-6 text-md">Ejemplos de usos comunes</p>
              <div className="bg-white p-4 text-md shadow-sm">
                <div className="space-y-3 text-dark text-md">
                  <p>Aguja 70/80 — Telas finas</p>
                  <p>Aguja 80/90 — Telas medianas</p>
                  <p>Aguja 90/100 — Telas gruesas</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-md font-display font-bold mb-2">Tipos de agujas</h4>
              <div className="bg-white p-4 text-md shadow-sm">
                <p className="font-bold text-dark mb-2 font-display tracking-wide">Aguja Universal:</p>
                <p className="text-dark text-justify text-base leading-relaxed">
                  Es la más utilizada. Funciona bien con la mayoría de las telas.
                </p>
              </div>
              <div className="bg-white p-4 pt-0 text-md shadow-sm">
                <p className="font-bold text-dark mb-2 font-display tracking-wide">Aguja para telas elásticas:</p>
                <p className="text-dark text-justify text-base leading-relaxed">
                  Tiene una punta especial que evita que el tejido se dañe o se deforme.
                </p>
              </div>
              <div className="bg-white p-4 pt-0 text-md shadow-sm">
                <p className="font-bold text-dark mb-2 font-display tracking-wide">Aguja para jeans o telas gruesas:</p>
                <p className="text-dark text-justify text-base leading-relaxed">
                  Es más resistente y está diseñada para atravesar telas pesadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla: Número de Aguja por Tipo de Tela */}
      <section className="relative z-[55] bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-display text-dark leading-tight">
              Número de aguja<br />
              <span className="italic font-normal text-dark">según la tela</span>
            </h3>
            <p className="text-base text-dark font-body max-w-xl mx-auto leading-relaxed pt-2">
              Cuanto mayor es el número, más gruesa es la aguja. Usá esta tabla como referencia rápida al momento de preparar tu máquina.
            </p>
          </div>

          <div className="w-full font-body">
            <div className="grid grid-cols-[auto_1fr] gap-x-12 border-b-2 border-dark pb-3 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-display font-bold text-dark w-28">Nº de aguja</span>
              <span className="text-xs uppercase tracking-[0.2em] font-display font-bold text-dark">Tipo de tela</span>
            </div>
            {[
              { num: '9',  tela: 'Telas muy finas (batista, voile, seda)' },
              { num: '11', tela: 'Telas livianas' },
              { num: '12', tela: 'Telas livianas a medias' },
              { num: '14', tela: 'Telas medianas (lienzo, tusor, gabardina)' },
              { num: '16', tela: 'Telas gruesas (jean, corderoy)' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-x-12 items-center py-5 border-b border-border/30 group">
                <div className="w-28 flex items-center gap-3">
                  <span className="text-2xl font-display font-medium text-dark">{row.num}</span>
                </div>
                <span className="text-base text-dark font-body leading-snug">{row.tela}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Punta — Tarjetitas */}
      <section className="relative z-[56] bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-dark font-body">Tipos de aguja</p>
            <h3 className="text-4xl md:text-5xl font-display text-dark leading-tight">
              Tipos de Punta
            </h3>
            <p className="text-base text-dark font-body max-w-xl mx-auto leading-relaxed pt-2">
              Cada aguja tiene una punta diseñada para un tipo de tela. Conocerlas evita errores y mejora el resultado final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { num: '01', tipo: 'Universal',   caracteristica: 'Punta ligeramente afilada.',                      telas: 'Algodón, tusor, lino, gabardina.' },
              { num: '02', tipo: 'Punta Bola',  caracteristica: 'Punta redondeada.',                               telas: 'Jersey, telas de punto.' },
              { num: '03', tipo: 'Stretch',     caracteristica: 'Especial para telas elásticas.',                  telas: 'Lycra, telas deportivas, trajes de baño.' },
              { num: '04', tipo: 'Microtex',    caracteristica: 'Punta fina y filosa.',                            telas: 'Seda, microfibra.' },
              { num: '05', tipo: 'Jeans',       caracteristica: 'Aguja fuerte que atraviesa telas gruesas.',       telas: 'Jeans, lona, gabardina gruesa.' },
              { num: '06', tipo: 'Cuero',       caracteristica: 'Punta cortante que abre el material.',            telas: 'Cuero, cuerina.' },
            ].map((card) => (
              <div key={card.num} className="bg-white border border-border/50 p-6 flex flex-col justify-between gap-6 min-h-[220px] relative group hover:border-dark/30 transition-colors duration-300 rounded-lg">
                <div className="space-y-4">
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-dark">Tipo de punta</p>
                  <h4 className="font-display text-2xl text-dark leading-tight">{card.tipo}</h4>
                  <div className="space-y-2 pt-1">
                    <p className="font-body text-sm text-dark leading-relaxed">
                      <span>Característica:</span> <span>{card.caracteristica}</span>
                    </p>
                    <p className="font-body text-sm text-dark leading-relaxed">
                      <span>Telas:</span> <span>{card.telas}</span>
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-5">
                  <span className="font-display text-4xl md:text-5xl text-dark/8 select-none leading-none">{card.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como enhebrar la máquina */}
      <section id="enhebrar" className="relative z-[58] bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">03. Técnica esencial</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Cómo enhebrar<br />
              <span className="italic font-normal">la máquina</span>
            </h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              El enhebrado correcto es esencial para que la máquina funcione bien. Un error en este paso suele ser la causa de muchos problemas de costura.
            </p>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto">
              Siempre enhebrar la máquina con el prensatelas levantado. Esto permite que el hilo se ubique correctamente en el sistema de tensión.
            </p>
          </div>

          <div className="w-full h-px bg-border/40" />

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">
              Enhebrado del hilo superior
            </h4>
            <ol>
              {[
                'Colocar el carrete de hilo en el portacarrete.',
                'Pasar el hilo por las guías indicadas en la máquina.',
                'Llevar el hilo hacia el tensor.',
                'Continuar el recorrido hasta la aguja.',
                'Enhebrar la aguja de adelante hacia atrás.',
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4 py-4 border-b border-border/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark shrink-0" />
                  <span className="font-body text-base text-dark leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="aspect-[8/7] overflow-hidden mt-8">
            <img src="/enhebrar.png" alt="enhebrar" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Como cargar la bobina */}
      <section id="bobina" className="relative z-[59] bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">04. Instrucciones</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Cómo cargar<br />
              <span className="italic font-normal">la bobina</span>
            </h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              La bobina contiene el hilo inferior que se entrelaza con el hilo superior para formar la puntada.
            </p>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto">
              Una vez cargada, la bobina se coloca dentro del portabobina siguiendo el sentido indicado por la máquina.
            </p>
          </div>

          <div className="w-full h-px bg-border/40" />

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">
              Pasos para cargar la bobina
            </h4>
            <div className="space-y-0">
              {[
                { text: 'Colocar el hilo en el portacarrete.',               img: '/bobina-1.png' },
                { text: 'Pasar el hilo por el guía hilo de la bobinadora.',  img: '/bobina-2.png' },
                { text: 'Insertar el hilo en la bobina vacía.',              img: '/bobina-3.png' },
                { text: 'Colocar la bobina en el sistema de bobinado.',      img: '/bobina-4.png' },
                { text: 'Accionar la máquina hasta que la bobina se llene.', img: '/bobina-5.png' },
              ].map((step, i) => (
                <div key={i} className={`flex items-center gap-6 py-5 border-b border-border/30 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-30 h-30 shrink-0 overflow-hidden">
                    <img src={step.img} alt={step.text} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-body text-base text-dark leading-relaxed">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tension de la máquina */}
      <section id="tension" className="relative z-[59] bg-cream px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">05. Configuración</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tensión<br />
              <span className="italic font-normal">de la máquina</span>
            </h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              La tensión regula la forma en que los hilos superior e inferior se unen dentro de la tela.
              Cuando la tensión es correcta, la puntada queda equilibrada y ambos hilos se encuentran en el centro de la tela.
            </p>
          </div>


          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">
              Problemas comunes de tensión
            </h4>
            <div>
              {[
                { problema: 'Tensión superior muy baja', resultado: 'Se forman bucles o lazadas debajo de la tela.' },
                { problema: 'Tensión superior muy alta', resultado: 'El hilo inferior se ve en la parte superior de la tela.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark shrink-0 mt-2" />
                  <span className="font-body text-base text-dark leading-relaxed">
                    <strong>{item.problema}:</strong> {item.resultado}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full font-body">
            <div className="grid grid-cols-[auto_1fr] gap-x-12 border-b-2 border-dark pb-3 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-display font-bold text-dark w-28">Tensión</span>
              <span className="text-xs uppercase tracking-[0.2em] font-display font-bold text-dark">Para qué sirve</span>
            </div>
            {[
              { num: '3 – 4', uso: 'Telas finas' },
              { num: '4 – 5', uso: 'Costura común' },
              { num: '5 – 6', uso: 'Telas un poco más gruesas' },
              { num: '6 – 7', uso: 'Varias capas de tela' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-x-12 items-center py-5 border-b border-border/30">
                <div className="w-28 flex items-center gap-3">
                  <span className="text-2xl font-display font-medium text-dark">{row.num}</span>
                </div>
                <span className="text-base text-dark font-body leading-snug">{row.uso}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de puntadas básicas */}
      <section id="puntadas" className="relative z-[59] bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">06. Puntadas</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">
              Tipos de puntadas<br />
              <span className="italic font-normal">básicas</span>
            </h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              Las máquinas de coser suelen ofrecer diferentes tipos de puntadas. Sin embargo, para comenzar solo es necesario conocer algunas básicas.
            </p>
          </div>

          <div className="space-y-0">
            {[
              { titulo: 'Puntada recta', desc: 'Es la puntada más utilizada. Se emplea para unir telas y realizar la mayoría de las costuras.', img: '/puntada-recta.png' },
              { titulo: 'Zigzag',        desc: 'Se utiliza para rematar bordes, evitar que la tela se deshilache y trabajar con telas elásticas.', img: '/zigzag.png' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 py-8 border-b border-border/30">
                <div className="w-full h-48 overflow-hidden">
                  <img src={item.img} alt={item.titulo} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-2xl text-dark">{item.titulo}</h4>
                  <p className="font-body text-base text-dark leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">Largo de puntada</h4>
            <p className="text-base text-dark font-body leading-relaxed text-center max-w-xl mx-auto">
              Controla la distancia entre cada puntada.
            </p>
            <div>
              {[
                { tipo: 'Puntada corta', desc: 'Más firme y compacta.' },
                { tipo: 'Puntada larga', desc: 'Más suelta y visible.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark shrink-0 mt-2" />
                  <span className="font-body text-base text-dark leading-relaxed">
                    <strong>{item.tipo}:</strong> {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Telas — Muestrario */}
      <section id="telas" className="relative z-[60] bg-cream px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">07. Muestrario</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">Telas</h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              Las telas son el material principal del trabajo de costura. Cada tipo de tela tiene características diferentes que influyen en el resultado final.
            </p>
          </div>

          {(() => {
            const telas = [
              { label: 'Algodón',       img: '/algodon.png' },
              { label: 'Lienzo',        img: '/lienzo.png' },
              { label: 'Jeans / Denim', img: '/jean.png' },
              { label: 'Cristal',       img: '/cristal.png' },
              { label: 'Lino',          img: '/lino.png' },
              { label: 'Tusor',         img: '/tusor.png' },
              { label: 'Wafle',         img: '/wafle.png' },
              { label: 'Toalla',        img: '/toalla.png' },
              { label: 'Gabardina',     img: '/gabardina.png' },
              { label: 'Cordura',       img: '/cordura.png' },
              { label: 'Arpillera',     img: '/arpillera.png' },
              { label: 'Cuadrille',     img: '/cuadrille.png' },
            ];
            const rows = [telas.slice(0,3), telas.slice(3,6), telas.slice(6,9), telas.slice(9,12)];
            return (
              <div className="flex flex-col gap-4">
                {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex gap-3 h-[280px] md:h-[320px] w-full">
                    {row.map((tela, colIdx) => {
                      const globalIdx = rowIdx * 3 + colIdx;
                      const isActive = activeSwatch === globalIdx;
                      const sameRow = activeSwatch !== null && Math.floor(activeSwatch / 3) === rowIdx;
                      return (
                        <div
                          key={globalIdx}
                          onClick={() => setActiveSwatch(isActive ? null : globalIdx)}
                          className={`group cursor-pointer relative overflow-hidden flex flex-col transition-all duration-500 ${
                            isActive ? 'w-[60%]' : sameRow ? 'w-[20%]' : 'w-[33.33%]'
                          }`}
                        >
                          <div className="absolute inset-0">
                            <img src={tela.img} alt={tela.label} className="w-full h-full object-cover" />
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                              isActive ? 'opacity-0' : sameRow ? 'opacity-50' : 'opacity-0 group-hover:opacity-10'
                            }`} />
                          </div>
                          <div className={`relative z-10 w-full mt-auto p-4 transition-all duration-500 ${
                            isActive ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
                          }`}>
                            <h4 className="font-display text-base md:text-lg text-dark truncate">{tela.label}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Dobladillo */}
      <section id="dobladillo" className="relative z-[59] bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">08. Terminaciones</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">Dobladillo</h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              El dobladillo es la terminación que se hace en el borde de una tela doblándola y cosiéndola, para que no se deshile y quede prolija.
            </p>
          </div>

          <div className="w-full h-px bg-border/40" />

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">Qué hace el dobladillo</h4>
            <div>
              {['Esconde el borde crudo de la tela.', 'Evita que se deshile.', 'Da una terminación prolija.'].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark shrink-0 mt-2" />
                  <span className="font-body text-base text-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-lg mx-auto flex flex-col gap-0 pt-8">
            {[
              { n: '01', text: 'Doblás el borde de la tela hacia adentro 1 cm aprox.', side: 'left' },
              { n: '02', text: 'Volvés a doblar otro 1–2 cm para esconder el borde.',  side: 'right' },
              { n: '03', text: 'Sujetás con alfileres o planchás.',                    side: 'left' },
              { n: '04', text: 'Cosés con puntada recta cerca del borde.',             side: 'right' },
            ].map((step, i) => (
              <div key={i} className={`relative flex flex-col ${step.side === 'right' ? 'items-end' : 'items-start'}`}>
                <div className="bg-white border border-border/40 rounded-[2rem] px-6 py-5 w-[58%] shadow-sm">
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-dark font-bold mb-1">{step.n}</p>
                  <p className="font-body text-sm text-dark leading-relaxed">{step.text}</p>
                </div>
                {i < 3 && (
                  <div className={`w-full flex ${step.side === 'left' ? 'justify-center pl-[30%]' : 'justify-center pr-[30%]'}`}>
                    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className={step.side === 'left' ? '' : 'scale-x-[-1]'}>
                      <path d="M10 0 C10 20, 70 30, 65 55" stroke="#2d2d2d" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                      <path d="M58 52 L65 58 L70 50" stroke="#2d2d2d" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-10">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">Dónde se usa</h4>
            <div>
              {['Pantalones', 'Polleras', 'Mangas', 'Cortinas', 'Manteles'].map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-border/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark shrink-0 mt-2" />
                  <span className="font-body text-base text-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white pl-6 pr-6 py-5 text-center">
            <p className="font-body text-sm text-dark leading-relaxed">
              <span className="font-bold uppercase tracking-wide text-xs block mb-1">Truco de costura</span>
              Si planchás el doblez antes de coser, el dobladillo queda mucho más recto y prolijo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 max-w-3xl mx-auto">
          <div className="aspect-square overflow-hidden">
            <img src="/dobladillo-1.png" alt="Dobladillo con alfileres" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden">
            <img src="/dobladillo-2.png" alt="Dobladillo en esquina" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Hilván */}
      <section id="hilvan" className="relative z-[59] bg-cream px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark font-body">09. Técnica</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark leading-tight">Hilván</h3>
            <p className="text-base text-dark font-body leading-relaxed max-w-xl mx-auto pt-1">
              El hilván es una costura provisoria hecha a mano con puntadas largas, que se usa para sujetar telas antes de coserlas definitivamente con la máquina.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body">Para qué sirve el hilván</h4>
            <div className="bg-white border border-border/40 rounded-xl overflow-hidden">
              {['Mantener las telas en su lugar.', 'Probar cómo queda una costura.', 'Reemplazar los alfileres.', 'Evitar que la tela se mueva al coser.'].map((item, i, arr) => (
                <div key={i} className={`flex items-center gap-4 px-5 py-4 ${i < arr.length - 1 ? 'border-b border-border/30' : ''}`}>
                  <div className="w-5 h-5 rounded-full border-2 border-border/50 shrink-0" />
                  <span className="font-body text-sm text-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body">Cómo es la puntada</h4>
            <div className="bg-white border border-border/40 rounded-xl overflow-hidden">
              {['Puntadas largas y separadas.', 'Se hacen a mano con aguja e hilo.', 'Después se retira fácilmente.'].map((item, i, arr) => (
                <div key={i} className={`flex items-center gap-4 px-5 py-4 ${i < arr.length - 1 ? 'border-b border-border/30' : ''}`}>
                  <div className="w-5 h-5 rounded-full border-2 border-border/50 shrink-0" />
                  <span className="font-body text-sm text-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body text-center">Cómo hacer un hilván</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '01', text: 'Enhebrá la aguja.' },
                { n: '02', text: 'Uní las telas que querés sujetar.' },
                { n: '03', text: 'Hacé puntadas largas (1–2 cm) entrando y saliendo de la tela.' },
                { n: '04', text: 'No hace falta rematar fuerte porque después se va a sacar.' },
              ].map((card) => (
                <div key={card.n} className="bg-white border border-border/40 rounded-xl p-5 flex flex-col justify-between min-h-[140px] relative">
                  <p className="font-body text-sm text-dark leading-relaxed">{card.text}</p>
                  <span className="font-display text-2xl text-dark/30 select-none leading-none absolute bottom-3 right-4">{card.n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-dark font-body">Dónde se usa mucho</h4>
            <div className="bg-white border border-border/40 rounded-xl overflow-hidden">
              {['Colocar cierres.', 'Marcar dobladillos.', 'Unir telas antes de coser a máquina.', 'Acomodar pinzas o pliegues.'].map((item, i, arr) => (
                <div key={i} className={`flex items-center gap-4 px-5 py-4 ${i < arr.length - 1 ? 'border-b border-border/30' : ''}`}>
                  <div className="w-5 h-5 rounded-full border-2 border-border/50 shrink-0" />
                  <span className="font-body text-sm text-dark leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl">
            <img src="/hilvan.png" alt="Hilván" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-dark/50" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="font-display text-xl md:text-2xl text-white leading-tight uppercase">
                Cuando terminás de coser a máquina, el hilván se corta y se retira tirando del hilo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante — volver al índice */}
      <a
        href="#indice"
        className="fixed bottom-6 right-6 z-[100] w-10 h-10 bg-dark text-white rounded-full flex items-center justify-center shadow-lg hover:bg-dark/70 transition-colors"
        title="Volver al índice"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 4h10M3 8h7M3 12h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </a>

    </div>
  );
}