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
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Módulo I</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Costura Creativa <br />
            <span className="italic text-muted-foreground/80 font-normal block mt-2">
              Inicial
            </span>
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
          <img
            src="/gallery-1.jpg"
            alt="Detalle textil"
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-muted-foreground">
          <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
          <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
          <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
        </div>
      </section>

      {/* Intro text */}
      <section className="relative z-20 bg-cream py-24 px-6 border-t border-cream">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-16">
          <div className="space-y-6 max-w-2xl">
            <h2 className="uppercase text-3xl md:text-5xl font-display text-dark leading-snug">
              Introducción<br />
              al mundo textil
            </h2>
            <p className="text-lg text-dark leading-relaxed">
              Entender las herramientas es el primer paso antes de diseñar.
            </p>
          </div>
        </div>
      </section>

      {/* Partes de la Maquina */}
      <section className="relative z-30 bg-cream py-24 px-6 border-t border-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">01. Conociendo el equipo</p>
            <h3 className="text-4xl md:text-5xl font-display">
              Partes de la Máquina
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Superior */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                Parte Superior
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <li><strong className="text-dark">1. Porta carrete:</strong> Donde se coloca el hilo superior.</li>
                <li><strong className="text-dark">2. Guía hilos:</strong> Ganchos por donde pasa el hilo.</li>
                <li><strong className="text-dark">3. Tensor de hilo:</strong> Regula la tensión. Número alto = más tensión. (Punto medio: 4).</li>
                <li><strong className="text-dark">4. Palanca tira hilo:</strong> Sube y baja al coser. Tira del hilo.</li>
                <li><strong className="text-dark">5. Volante:</strong> Rueda lateral. Siempre se gira hacia vos.</li>
              </ul>
            </div>

            {/* Zona Costura */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                Zona de Costura
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <li><strong className="text-dark">6. Aguja:</strong> Perfora la tela y forma la puntada.</li>
                <li><strong className="text-dark">7. Prensatelas:</strong> Sujeta la tela mientras cose.</li>
                <li><strong className="text-dark">8. Palanca prensatelas:</strong> Sube y baja el prensatelas.</li>
                <li><strong className="text-dark">9. Placa de aguja:</strong> Base metálica con guías en centímetros.</li>
                <li><strong className="text-dark">10. Dientes de arrastre:</strong> Mueven la tela hacia atrás. Nunca tires de la tela.</li>
              </ul>
            </div>

            {/* Inferior */}
            <div className="space-y-6">
              <h4 className="text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                Inferior y Controles
              </h4>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <li><strong className="text-dark">11. Canilla o bobina:</strong> Carrete pequeño interior.</li>
                <li><strong className="text-dark">12. Porta canilla:</strong> Lugar para la canilla.</li>
                <li><strong className="text-dark">13. Selector de puntada:</strong> Elige recta, zigzag, etc.</li>
                <li><strong className="text-dark">14. Regulador de largo:</strong> Largo o corto de puntada.</li>
                <li><strong className="text-dark">15. Pedal:</strong> Controla velocidad y presión.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full width image breaker */}
      <section className="relative z-[35] bg-dark py-12 px-6">
        <div className="max-w-6xl mx-auto w-full h-80 md:h-[60vh] overflow-hidden">
          <img src="/gallery-2.jpg" alt="Textura de tela" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Rules / Tips */}
      <section className="relative z-40 bg-white py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h3 className="text-3xl md:text-5xl font-display italic text-muted-foreground pb-4">
            "Los tips de VEINTE<br />
            antes de coser"
          </h3>
          <ul className="text-lg md:text-xl space-y-6 text-dark mx-auto">
            <li className="border-b border-cream pb-6">Revisar que la aguja esté bien colocada y acorde a la tela.</li>
            <li className="border-b border-cream pb-6">Chequear tener hilo suficiente en la bobina.</li>
            <li className="border-b border-cream pb-6">Verificar constantemente la tensión y el largo de puntada.</li>
          </ul>
        </div>
      </section>

      {/* Tipos de Telas y Agujas */}
      <section className="relative z-50 bg-cream py-32 px-6 border-t border-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32 space-y-8">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">02. Materiales</p>
            <h3 className="text-4xl md:text-6xl font-display text-dark">
              Tipos de Telas y Agujas
            </h3>
            <p className="text-xl text-muted-foreground">
              La regla básica del diseño textil: tela fina requiere aguja fina, tela gruesa requiere aguja gruesa.
            </p>
            <div className="aspect-[4/3] overflow-hidden mt-8">
              <img src="/telas.png" alt="Muestras" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-16 pt-8">
            <div>
              <h4 className="text-2xl font-display mb-2">Telas Planas</h4>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">No estiran</p>
              <p className="text-muted-foreground mb-6 text-lg">Ejemplos: Algodón, Lienzo, Jean, Gabardina, Poplin.</p>
              <div className="bg-white p-8 text-sm shadow-sm">
                <p className="font-bold mb-4 uppercase tracking-wide">Agujas Universales:</p>
                <div className="space-y-3 text-muted-foreground text-base">
                  <p>70/10 — Telas finas</p>
                  <p>80/12 — Algodón común</p>
                  <p>90/14 — Telas medianas</p>
                  <p>100/16 — Jean o gruesas</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-display mb-2">Telas de Punto</h4>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Elásticas</p>
              <p className="text-muted-foreground mb-6 text-lg">Ejemplos: Jersey, Modal, Interlock, Rib.</p>
              <div className="bg-white p-8 text-sm shadow-sm">
                <p className="font-bold mb-4 uppercase tracking-wide">Aguja Punta Bola:</p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  75/11 o 80/12 según el grosor. La punta bola no corta la fibra, se mete entre los hilos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-display mb-2">Telas Pesadas</h4>
                <p className="text-muted-foreground text-base mb-4">Jean, lona, corderoy.</p>
                <p className="text-base text-dark font-bold">Agujas: 90/14, 100/16, 110/18</p>
              </div>
              <div>
                <h4 className="text-2xl font-display mb-2">Telas Delicadas</h4>
                <p className="text-muted-foreground text-base mb-4">Gasa, voile, seda, satén.</p>
                <p className="text-base text-dark font-bold">Agujas: 60/8, 70/10 Microtex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primer Muestrario */}
      <section className="relative z-[60] bg-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">03. Análisis</p>
            <h3 className="text-5xl font-display">
              Primer Muestrario de Telas
            </h3>
            <p className="italic text-2xl text-muted-foreground font-display pt-4">
              "Hoy no vamos a coser por coser, vamos a mirar, tocar y analizar telas porque no todas sirven para todos los proyectos."
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-4 h-[1200px] md:h-[600px] w-full">
            {/* Algodón */}
            <div
              onClick={() => setActiveSwatch(activeSwatch === 0 ? null : 0)}
              className={`group cursor-pointer relative overflow-hidden flex flex-col transition-all duration-500 ${activeSwatch === 0
                ? 'md:w-[60%] h-[600px] md:h-full'
                : activeSwatch === null
                  ? 'md:w-[33.33%] h-[400px] md:h-full'
                  : 'md:w-[20%] h-[200px] md:h-full'
                }`}
            >
              <div className="absolute inset-0 bg-cream z-0">
                <img src="/algodon.png" alt="Algodón" className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeSwatch === 0 ? 'opacity-0' : activeSwatch === null ? 'opacity-0 hover:opacity-10' : 'opacity-60'}`} />
              </div>

              <div className={`relative z-10 w-full mt-auto p-8 transition-all duration-500 ${activeSwatch === 0 ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
                <h4 className="text-2xl font-display mb-2">Algodón</h4>
                <div className={`text-base space-y-3 text-muted-foreground overflow-hidden transition-all duration-500 ${activeSwatch === 0 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p>+ Fácil, ideal principiantes.</p>
                  <p>- Se arruga, sin caída.</p>
                  <p className="text-dark font-medium pt-3">Uso: Neceseres, manteles.</p>
                </div>
              </div>
            </div>

            {/* Lienzo */}
            <div
              onClick={() => setActiveSwatch(activeSwatch === 1 ? null : 1)}
              className={`group cursor-pointer relative overflow-hidden flex flex-col transition-all duration-500 ${activeSwatch === 1
                ? 'md:w-[60%] h-[600px] md:h-full'
                : activeSwatch === null
                  ? 'md:w-[33.33%] h-[400px] md:h-full'
                  : 'md:w-[20%] h-[200px] md:h-full'
                }`}
            >
              <div className="absolute inset-0 z-0 bg-[#e5e5e5]">
                <img src="/lienzo.png" alt="Lienzo" className="w-full h-full object-cover grayscale-[30%]" />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeSwatch === 1 ? 'opacity-0' : activeSwatch === null ? 'opacity-0 hover:opacity-10' : 'opacity-60'}`} />
              </div>

              <div className={`relative z-10 w-full mt-auto p-8 transition-all duration-500 ${activeSwatch === 1 ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
                <h4 className="text-2xl font-display mb-2">Lienzo</h4>
                <div className={`text-base space-y-3 text-muted-foreground overflow-hidden transition-all duration-500 ${activeSwatch === 1 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p>+ Firme, estructurado.</p>
                  <p>- Duro de manejar.</p>
                  <p className="text-dark font-medium pt-3">Uso: Bolsos con cuerpo.</p>
                </div>
              </div>
            </div>

            {/* Jean */}
            <div
              onClick={() => setActiveSwatch(activeSwatch === 2 ? null : 2)}
              className={`group cursor-pointer relative overflow-hidden flex flex-col transition-all duration-500 ${activeSwatch === 2
                ? 'md:w-[60%] h-[600px] md:h-full'
                : activeSwatch === null
                  ? 'md:w-[33.33%] h-[400px] md:h-full'
                  : 'md:w-[20%] h-[200px] md:h-full'
                }`}
            >
              <div className="absolute inset-0 z-0 bg-[#3b4b5c]">
                <img src="/jean.png" alt="Denim" className="w-full h-full object-cover grayscale-[30%]" />
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeSwatch === 2 ? 'opacity-0' : activeSwatch === null ? 'opacity-0 hover:opacity-10' : 'opacity-60'}`} />
              </div>

              <div className={`relative z-10 w-full mt-auto p-8 transition-all duration-500 ${activeSwatch === 2 ? 'bg-white/95 backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
                <h4 className="text-2xl font-display mb-2">Jeans / Denim</h4>
                <div className={`text-base space-y-3 text-muted-foreground overflow-hidden transition-all duration-500 ${activeSwatch === 2 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p>+ Resistencia extrema.</p>
                  <p>- Requiere aguja exacta.</p>
                  <p className="text-dark font-medium pt-3">Uso: Avanzados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminaciones y Ejercicios */}
      <section className="relative z-[70] bg-cream py-32 px-6 border-t border-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">04. Técnicas</p>
              <h3 className="text-4xl font-display text-dark mb-10">
                Terminaciones
              </h3>
              <div className="space-y-10">
                <div className="border-l-2 border-dark pl-8">
                  <h4 className="text-xl font-bold mb-3">Remate de costura</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">Realiza 2-3 puntadas hacia adelante, luego 2-3 hacia atrás, y continúa. Evita que todo se desarme.</p>
                </div>
                <div className="border-l-2 border-dark pl-8">
                  <h4 className="text-xl font-bold mb-3">Zig Zag al borde</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">Ideal para telas planas, previene el deshilachado de los bordes. Funcional, más que estético.</p>
                </div>
                <div className="border-l-2 border-dark pl-8">
                  <h4 className="text-xl font-bold mb-3">Dobladillo simple</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">Doblar 1 cm, volver a doblar, planchar y coser recto. Limpio y prolijo.</p>
                </div>
              </div>
            </div>

            <div className="bg-dark text-cream p-12">
              <h4 className="text-3xl font-display mb-6 italic">El Bies</h4>
              <p className="text-base text-cream/80 leading-relaxed">
                Tira de tela cortada en diagonal a 45°. Aporta elasticidad y se adapta a curvas dinámicas sin fruncir el tejido. Se utiliza para prolijar escotes, decorar prendas y proteger áreas de alto desgaste.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="aspect-[4/3] overflow-hidden bg-white">
              <img src="/terminaciones.png" alt="Ejercicios" className="w-full h-full object-cover" />
            </div>

            <div>
              <h3 className="text-3xl font-display text-dark mb-8">
                Ejercicios de Costura Recta
              </h3>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-base">
                <div className="border-t border-white pt-6">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-3">I. Sin Hilo</h5>
                  <p className="text-muted-foreground leading-relaxed">Dominar velocidad sobre papel, seguir líneas impresas.</p>
                </div>
                <div className="border-t border-white pt-6">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-3">II. Paralelas</h5>
                  <p className="text-muted-foreground leading-relaxed">Mantener la distancia, usando las guías de la placa.</p>
                </div>
                <div className="border-t border-white pt-6">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-3">III. Rectángulos</h5>
                  <p className="text-muted-foreground leading-relaxed">Aprender a frenar y girar siempre con aguja abajo.</p>
                </div>
                <div className="border-t border-white pt-6">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-3">IV. A 1cm</h5>
                  <p className="text-muted-foreground leading-relaxed">No mirar la aguja, el secreto es mirar el borde de la tela.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
