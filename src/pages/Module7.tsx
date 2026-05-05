import { useEffect } from 'react';

interface TelaData {
  id: string;
  n: string;
  nombre: string;
  descripcion: string;
  usos: string[];
  ventajas: string[];
  desventajas: string[];
  costura: string[];
  imagen: string;
}

const TELAS: TelaData[] = [
  {
    id: 'gabardina',
    n: '01',
    nombre: 'Gabardina',
    descripcion: 'Tela resistente de trama tipo sarga (diagonal), con grosor medio y poca elasticidad. Suele tener estampados decorativos y mantiene bien la forma.',
    usos: ['Bolsos', 'Cartucheras', 'Mochilas livianas', 'Delantales', 'Manteles'],
    ventajas: ['Resistente y duradera', 'Fácil de coser'],
    desventajas: ['Puede encoger en el primer lavado.'],
    costura: ['Aguja universal Nº 11 / 12 / 14'],
    imagen: '/gabardina.png',
  },
  {
    id: 'lienzo',
    n: '02',
    nombre: 'Lienzo',
    descripcion: 'Tela de algodón o mezcla con trama firme. Es una de las telas más recomendadas para aprender a coser.',
    usos: ['Totebags', 'Manteles', 'Delantales', 'Organizadores'],
    ventajas: ['Muy resistente', 'Fácil de cortar y coser', 'Ideal para principiantes'],
    desventajas: ['Puede arrugarse o encoger.'],
    costura: ['Aguja universal Nº 11 / 12 / 14'],
    imagen: '/lienzo.png',
  },
  {
    id: 'tropical',
    n: '03',
    nombre: 'Tropical Mecánico',
    descripcion: 'Tela de poliéster de tejido plano con ligera elasticidad mecánica. Es liviana, suave y con buena caída.',
    usos: ['Pantalones de vestir', 'Polleras', 'Blazers livianos', 'Uniformes'],
    ventajas: ['No se arruga fácilmente', 'Durable y de fácil mantenimiento'],
    desventajas: ['Menos transpirable que telas naturales.'],
    costura: ['Aguja universal Nº 11 / 12 / 14', 'Puntada recta 2,5 – 3.'],
    imagen: '/tropicalmecanico.png',
  },
  {
    id: 'tusor',
    n: '04',
    nombre: 'Tusor',
    descripcion: 'Tela de algodón de aspecto rústico con pequeñas irregularidades que aportan un estilo natural.',
    usos: ['Cortinas', 'Fundas de almohadones', 'Manteles', 'Bolsos decorativos'],
    ventajas: ['Resistente', 'Fácil de coser'],
    desventajas: ['Puede encoger y arrugarse.'],
    costura: ['Aguja universal Nº 14'],
    imagen: '/tusor.png',
  },
  {
    id: 'lino',
    n: '05',
    nombre: 'Lino',
    descripcion: 'Tela natural de fibras de lino o mezclas. Es fresca, transpirable y con textura ligeramente rústica.',
    usos: ['Vestidos', 'Camisas', 'Blusas', 'Manteles', 'Cortinas livianas'],
    ventajas: ['Muy transpirable', 'Apariencia elegante y natural'],
    desventajas: ['Se arruga fácilmente.'],
    costura: ['Aguja Nº 11 (lino liviano)', 'Aguja Nº 14 (lino medio).'],
    imagen: '/lino.png',
  },
  {
    id: 'lona',
    n: '06',
    nombre: 'Lona',
    descripcion: 'Tela gruesa y firme de alta resistencia. Mantiene la forma y soporta peso.',
    usos: ['Bolsos', 'Mochilas', 'Delantales', 'Almohadones'],
    ventajas: ['Muy duradera', 'Soporta peso'],
    desventajas: ['Puede ser difícil de coser si es muy gruesa.'],
    costura: ['Aguja Nº 16 / 18', 'Puntada recta 3 – 3,5.'],
    imagen: '/lona.png',
  },
  {
    id: 'gabardina-impermeable',
    n: '07',
    nombre: 'Gabardina Impermeable',
    descripcion: 'Tela firme con tratamiento impermeable o repelente al agua.',
    usos: ['Mochilas', 'Bolsos', 'Neceseres', 'Fundas'],
    ventajas: ['Impermeable', 'Resistente'],
    desventajas: ['No transpirable', 'Puede marcarse con alfileres.'],
    costura: ['Aguja Nº 14 / 16', 'Usar clips en lugar de alfileres.'],
    imagen: '/gabardinaimpermeable.png',
  },
  {
    id: 'alpillera',
    n: '08',
    nombre: 'Alpillera',
    descripcion: 'Tela de fibras naturales (generalmente yute) con trama abierta y aspecto rústico.',
    usos: ['Decoración', 'Bolsas', 'Caminos de mesa', 'Manualidades'],
    ventajas: ['Muy resistente', 'Estética natural'],
    desventajas: ['Se deshilacha fácilmente', 'Textura áspera.'],
    costura: ['Aguja Nº 14 / 16', 'Puntada 3 – 3,5.'],
    imagen: '/alpillera.png',
  },
  {
    id: 'cristal',
    n: '09',
    nombre: 'Cristal PVC Transparente',
    descripcion: 'Material plástico transparente, flexible e impermeable.',
    usos: ['Neceseres', 'Bolsos transparentes', 'Portacosméticos'],
    ventajas: ['Impermeable', 'Fácil de limpiar'],
    desventajas: ['Puede pegarse al prensatelas', 'No permite descoser.'],
    costura: ['Aguja Nº 14 / 16', 'Puntada 3 – 3,5.'],
    imagen: '/cristal.png',
  },
  {
    id: 'silver',
    n: '10',
    nombre: 'Silver',
    descripcion: '100% poliéster o sintética, muy resistente al desgaste. Repelente al agua (muchos modelos funcionan como impermeables o semi-impermeables). Liviana, flexible y resistente a manchas.',
    usos: ['Forros de bolsos, mochilas y accesorios', 'Fundas y cobertores', 'Camperas y rompevientos'],
    ventajas: ['Repelente al agua', 'Liviana y flexible', 'Fácil de limpiar con paño húmedo'],
    desventajas: ['Menos transpirable.'],
    costura: ['Aguja universal 80/12 o 90/14', 'Si es más gruesa → aguja para jean 90/14', 'Hilo de poliéster 100%'],
    imagen: '/silver.png',
  },
  {
    id: 'gasa-panialera',
    n: '11',
    nombre: 'Gasa Pañalera',
    descripcion: 'Tela muy liviana de algodón, suave y altamente transpirable.',
    usos: ['Baberos', 'Mantas para bebé', 'Pañales de tela', 'Ropa liviana infantil'],
    ventajas: ['Muy suave', 'Absorbente'],
    desventajas: ['Tela delicada', 'Puede deformarse al coser.'],
    costura: ['Aguja Nº 9 / 11', 'Puntada 2 – 2,5.'],
    imagen: '/gasapañalera.png',
  },
  {
    id: 'waffle',
    n: '12',
    nombre: 'Waffle',
    descripcion: 'Tela con relieve en forma de pequeños cuadrados tipo panal. Suave y absorbente.',
    usos: ['Toallas', 'Batas', 'Mantas', 'Accesorios para bebé'],
    ventajas: ['Absorbente', 'Textura decorativa'],
    desventajas: ['Puede encoger.'],
    costura: ['Aguja Nº 11 / 14', 'Puntada 2,5 – 3.'],
    imagen: '/wafle.png',
  },
  {
    id: 'cuadrille-poliester',
    n: '13',
    nombre: 'Cuadrillé Poliéster',
    descripcion: 'Tela liviana con diseño de cuadros. El poliéster reduce arrugas y facilita el mantenimiento.',
    usos: ['Camisas', 'Delantales', 'Manteles', 'Cortinas livianas'],
    ventajas: ['Resistente', 'Se arruga poco'],
    desventajas: ['Menos transpirable que el algodón.'],
    costura: ['Aguja Nº 11 / 14'],
    imagen: '/cuadrille.png',
  },
  {
    id: 'cuadrille-algodon',
    n: '14',
    nombre: 'Cuadrillé Algodón',
    descripcion: 'Tela de algodón con patrón de cuadros. Suave, fresca y natural.',
    usos: ['Vestidos livianos', 'Camisas', 'Manteles', 'Proyectos de costura'],
    ventajas: ['Transpirable', 'Fácil de coser'],
    desventajas: ['Puede arrugarse o encoger.'],
    costura: ['Aguja Nº 11 / 14'],
    imagen: '/cuadrillealgodon.png',
  },
  {
    id: 'nobuck',
    n: '15',
    nombre: 'Nobuck',
    descripcion: 'Material con acabado aterciopelado, suave al tacto y aspecto similar al cuero. Flexible pero con cierta firmeza. Puede ser sintético o mezcla de fibras.',
    usos: ['Tapicería', 'Mochilas y bolsos', 'Fundas', 'Calzado', 'Detalles decorativos'],
    ventajas: ['Apariencia elegante', 'No se arruga fácilmente', 'Más económica que el cuero real'],
    desventajas: ['Puede marcarse con el roce', 'Algunas versiones absorben manchas', 'Puede ser difícil de limpiar'],
    costura: ['Aguja universal 90/14 o 100/16 (según grosor)'],
    imagen: '/nobuk.png',
  },
];

export function Module7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

      {/* ── Hero Section ── */}
      <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
        <div className="space-y-4 max-w-3xl pt-16">
          <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark">Módulo VII</p>
          <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
            Tipos de<br />
            <span className="italic text-dark font-normal block mt-2">Telas</span>
          </h1>
        </div>

        {/* Hero image */}
        <div className="w-full max-w-md mx-auto overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img
            src="/tipotelas.png"
            alt="Tipos de Telas"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-3 gap-8 w-full max-w-2xl border-t border-border/40 pt-8 mt-12 text-sm uppercase tracking-widest text-dark">
          <div><span className="block text-dark font-bold mb-1">Modalidad</span>Presencial</div>
          <div><span className="block text-dark font-bold mb-1">Cupos</span>5 personas</div>
          <div><span className="block text-dark font-bold mb-1">Duración</span>3 horas</div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-16 px-6">
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg text-dark leading-relaxed">
              Conocer la tela que usás es el primer paso para un proyecto exitoso. Cada material tiene su carácter: cómo se corta, cómo se cose, cómo se comporta. Acá encontrás una guía de referencia para las 15 telas que más usamos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Índice ── */}
      <section id="indice" className="bg-cream mt-8 px-6">
        <div className="max-w-2xl mx-auto">
          <h2
            className="uppercase text-center font-display text-dark mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 400 }}
          >
            Contenido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {TELAS.map((tela) => (
              <a
                key={tela.id}
                href={`#${tela.id}`}
                className="flex items-center gap-3 py-3 px-4 no-underline group border border-border/30 hover:border-dark/30 transition-colors"
              >
                <span
                  className="font-display text-dark leading-none shrink-0 group-hover:opacity-60 transition-opacity"
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 400 }}
                >
                  {tela.n}
                </span>
                <span
                  className="font-display text-dark uppercase group-hover:opacity-60 transition-opacity"
                  style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', fontWeight: 700, letterSpacing: '0.06em' }}
                >
                  {tela.nombre}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catálogo de telas ── */}
      {TELAS.map((tela, idx) => (
        <section
          key={tela.id}
          id={tela.id}
          className="bg-cream mt-16 px-6 py-8"
        >
          <div className="max-w-2xl mx-auto">

            {/* Header */}
            <div className="flex items-start gap-6 mb-6 border-b border-border/40 pb-6">
              <span
                className="font-display text-dark leading-none shrink-0"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 400 }}
              >
                {tela.n}
              </span>
              <div className="pt-2">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/50 mb-1">Tela</p>
                <h3
                  className="font-display text-dark leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 400 }}
                >
                  {tela.nombre}
                </h3>
              </div>
            </div>

            {/* Image */}
            <div className="w-full overflow-hidden mb-8" style={{ height: '45vh' }}>
              <img
                src={tela.imagen}
                alt={tela.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descripción */}
            <p className="text-lg text-dark leading-relaxed mb-8">
              {tela.descripcion}
            </p>

            {/* Grid: Usos / Ventajas / Desventajas / Costura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Usos */}
              <div className="border border-border/40 p-5">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">Usos comunes</p>
                <ul className="space-y-1">
                  {tela.usos.map((uso, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark text-sm leading-relaxed">
                      <span className="text-dark/40 mt-0.5 shrink-0">—</span>
                      <span>{uso}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Costura */}
              <div className="border border-border/40 p-5">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">Recomendación de costura</p>
                <ul className="space-y-1">
                  {tela.costura.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark text-sm leading-relaxed">
                      <span className="text-dark/40 mt-0.5 shrink-0">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ventajas */}
              <div className="border border-border/40 p-5">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">Ventajas</p>
                <ul className="space-y-1">
                  {tela.ventajas.map((v, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark text-sm leading-relaxed">
                      <span className="text-dark/40 mt-0.5 shrink-0">✔</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desventajas */}
              <div className="border border-border/40 p-5">
                <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark mb-3">Desventajas</p>
                <ul className="space-y-1">
                  {tela.desventajas.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark text-sm leading-relaxed">
                      <span className="text-dark/40 mt-0.5 shrink-0">✘</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Separador entre telas (excepto el último) */}
            {idx < TELAS.length - 1 && (
              <div className="mt-16 border-t-2 border-dark/10" />
            )}

          </div>
        </section>
      ))}

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
