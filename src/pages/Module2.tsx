import { useEffect } from 'react';

export function Module2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full font-body text-dark overflow-hidden bg-cream pb-32">

            {/* Hero Section */}
            <section className="relative z-10 bg-cream min-h-[85vh] flex flex-col justify-center items-center text-center space-y-12 py-20 px-6">
                <div className="space-y-4 max-w-3xl pt-16">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Módulo II</p>
                    <h1 className="text-5xl md:text-7xl font-display text-dark leading-tight pb-2">
                        Técnicas Fundamentales
                    </h1>
                </div>

                <div className="w-full max-w-md mx-auto aspect-[4/5] overflow-hidden">
                    <img
                        src="/gallery-2.jpg"
                        alt="Técnicas fundamentales"
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
            <section className="relative z-20 bg-white py-24 px-6 border-t border-cream">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-display text-dark leading-snug">
                            Clase II:<br />
                            Detalles y Acabados
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Aprender desde cero el uso de la máquina de coser y crear tus primeras piezas textiles funcionales y estéticas.
                        </p>
                    </div>
                    <div className="aspect-square overflow-hidden bg-cream">
                        <img src="/noticiauno.png" alt="Detalles textiles" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Detalles y Acabados List */}
            <section className="relative z-30 bg-cream py-24 px-6 border-t border-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">01. Secretos de taller</p>
                        <h3 className="text-4xl md:text-5xl font-display">
                            Detalles que Transforman
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Plancha & Margen */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Plancha (El secreto invisible)
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
                                    <li>✔ Planchar antes de coser.</li>
                                    <li>✔ Planchar después de coser.</li>
                                    <li>✔ Abrir costuras con plancha.</li>
                                </ul>
                                <p className="text-sm italic mt-2 text-muted-foreground">
                                    "La plancha es la mitad del resultado." Sin plancha, nada se ve realmente prolijo.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Margen Parejo
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li>Mantener siempre el mismo centímetro de costura.</li>
                                    <li>Guiarse por la placa de aguja.</li>
                                    <li>Hace que la prenda conserve forma y tamaño.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Recortar & Remates */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Recortar Exceso de Tela
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li>Emparejar bordes.</li>
                                    <li>Cortar hilos sueltos.</li>
                                    <li>Pequeño detalle que cambia mucho la terminación.</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Remates Prolijos
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li>No dejar hilos largos.</li>
                                    <li>Cortar al ras.</li>
                                    <li>Asegurar inicio y final.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Esquinas & Terminacion Interna */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Esquinas Limpias
                                </h4>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                    <li>No cortar demasiado cerca.</li>
                                    <li>Recortar en diagonal el excedente antes de dar vuelta.</li>
                                    <li>Empujar suavemente con herramienta (no con la punta de la tijera).</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="border-b-0 text-sm uppercase tracking-widest text-dark font-bold border-b border-border/40 pb-4">
                                    Terminación Interna
                                </h4>
                                <p className="text-sm text-muted-foreground">Aunque no se vea…</p>
                                <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
                                    <li>✔ Zig zag prolijo.</li>
                                    <li>✔ Bordes parejos.</li>
                                </ul>
                                <p className="text-sm text-muted-foreground mt-2">Porque lo interno también habla de tu trabajo.</p>
                            </div>
                        </div>

                    </div>

                    {/* Highlight quote */}
                    <div className="mt-24 text-center max-w-3xl mx-auto space-y-6">
                        <h3 className="text-3xl md:text-5xl font-display italic text-muted-foreground pb-4">
                            "Coser no es solo unir telas.<br />
                            El detalle es lo que transforma algo simple en algo cuidado."
                        </h3>
                        <p className="text-xl text-dark">
                            Cuando aprendemos a mirar los acabados, empezamos a coser distinto.
                        </p>
                    </div>
                </div>
            </section>

            {/* Full width image breaker */}
            <section className="relative z-[35] bg-dark py-12 px-6">
                <div className="max-w-6xl mx-auto w-full h-80 md:h-[60vh] overflow-hidden">
                    <img src="/gallery-1.jpg" alt="Acabados textiles" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Costura Invisible */}
            <section className="relative z-40 bg-white py-32 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-32 space-y-8">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">02. Técnicas Especiales</p>
                        <h3 className="text-4xl md:text-6xl font-display text-dark">
                            ¿Qué es una costura invisible?
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Es una costura que no se ve desde el exterior or queda casi imperceptible. Se usa para cerrar aberturas, dobladillos finos o forrería sin que se note la puntada.
                        </p>
                        <div className="bg-cream p-8 mt-8 space-y-4 shadow-sm">
                            <p className="font-bold uppercase tracking-wide text-dark">VEINTE TIPS</p>
                            <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
                                <li>Usar hilo del mismo color.</li>
                                <li>Puntadas pequeñas.</li>
                                <li>No tensar demasiado.</li>
                                <li>Planchar al final.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-16 pt-8">
                        <div>
                            <h4 className="text-2xl font-display mb-2">La más usada</h4>
                            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Puntada escondida a mano</p>

                            <div className="mt-8 space-y-6">
                                <div>
                                    <h5 className="font-bold text-dark mb-2">Ideal para:</h5>
                                    <ul className="space-y-2 text-muted-foreground list-disc pl-4">
                                        <li>Cerrar forros.</li>
                                        <li>Cerrar una abertura después de dar vuelta.</li>
                                        <li>Dobladillos delicados.</li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-dark pl-6 mt-8">
                                    <h5 className="font-bold text-dark mb-2">¿Cómo se hace?</h5>
                                    <p className="text-muted-foreground">
                                        Se toma un pequeño hilo de un lado y otro del otro lado, alternando. Cuando se ajusta, el hilo desaparece.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="aspect-[4/3] overflow-hidden mt-8">
                            <img src="/terminaciones.png" alt="Costura invisible" className="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Forrería */}
            <section className="relative z-50 bg-cream py-32 px-6 border-t border-white">
                <div className="max-w-6xl mx-auto space-y-20">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">03. Estructura</p>
                        <h3 className="text-5xl font-display text-dark">
                            ¿Qué es la forrería?
                        </h3>
                        <p className="text-xl text-muted-foreground pt-4">
                            La forrería es colocar una tela interna (forro) dentro de una prenda o accesorio. No es solo decoración, cumple función estética y estructural.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                        <div className="space-y-6">
                            <h4 className="text-xl font-display mb-4 text-dark border-b border-border/40 pb-2">¿Para qué sirve?</h4>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex gap-2"><span>✔</span> Oculta costuras internas</li>
                                <li className="flex gap-2"><span>✔</span> Da prolijidad</li>
                                <li className="flex gap-2"><span>✔</span> Mejora la caída</li>
                                <li className="flex gap-2"><span>✔</span> Aporta estructura</li>
                                <li className="flex gap-2"><span>✔</span> Hace que la prenda sea más cómoda</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-display mb-4 text-dark border-b border-border/40 pb-2">¿Dónde se usa?</h4>
                            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                                <ul className="space-y-4">
                                    <li>Bolsos</li>
                                    <li>Neceseres</li>
                                    <li>Sacos</li>
                                </ul>
                                <ul className="space-y-4">
                                    <li>Vestidos</li>
                                    <li>Faldas</li>
                                    <li>Camperas</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-display mb-4 text-dark border-b border-border/40 pb-2">Tipos de telas</h4>
                            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Depende del proyecto:</p>
                            <ul className="space-y-4 text-muted-foreground text-sm">
                                <li><strong className="text-dark">Tafeta</strong> — liviana y resbaladiza</li>
                                <li><strong className="text-dark">Acetato</strong> — común en indumentaria</li>
                                <li><strong className="text-dark">Satén fino</strong> — más delicado</li>
                                <li><strong className="text-dark">Algodón</strong> — ideal para bolsos y accesorios</li>
                            </ul>
                        </div>

                    </div>

                    <div className="max-w-3xl mx-auto bg-white p-10 text-center shadow-sm">
                        <p className="font-bold uppercase tracking-wide text-dark mb-4">VEINTE TIPS</p>
                        <p className="text-lg text-muted-foreground">
                            El forro suele ser más liviano que la tela principal (salvo en bolsos estructurados).
                        </p>
                    </div>
                </div>
            </section>

            {/* Fuelle */}
            <section className="relative z-[60] bg-white py-32 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                    <div className="space-y-16">
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">04. Volumen</p>
                            <h3 className="text-5xl font-display text-dark mb-8">
                                Fuelle
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Un fuelle es como un “pedacito extra de tela” que agregamos para que algo tenga más espacio o se pueda abrir. No es decoración solamente, cumple una función: dar lugar y libertad.
                            </p>

                            <div className="space-y-6">
                                <h4 className="font-bold text-dark">Por ejemplo:</h4>
                                <ul className="space-y-4 text-muted-foreground list-disc pl-5">
                                    <li className="pl-2"><strong>En una mochila:</strong> es lo que hace que pueda expandirse.</li>
                                    <li className="pl-2"><strong>En una pollera:</strong> es lo que le da más movimiento.</li>
                                    <li className="pl-2"><strong>En un pantalón:</strong> ayuda a que sea más cómodo.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-cream p-10">
                            <h4 className="text-2xl font-display mb-4">Fuelle en Base</h4>
                            <p className="text-base text-muted-foreground mb-4">
                                Se hace cortando un cuadrado en las esquinas para dar profundidad. Cuando cortás un cuadrado en las esquinas inferiores de una pieza (por ejemplo en una bolsa o mochila), lo que estás haciendo es preparar la tela para que, al unir esos bordes, se forme un fuelle que genera volumen.
                            </p>
                            <p className="text-base text-dark font-bold">
                                Ese corte no es decorativo: es lo que transforma una pieza plana en algo con profundidad.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16 pt-4">

                        <div className="space-y-8">
                            <h3 className="text-3xl font-display text-dark mb-6">
                                ¿Cómo funciona?
                            </h3>
                            <ol className="space-y-6 text-muted-foreground list-decimal pl-5">
                                <li className="pl-2">Tenés tu pieza rectangular o cuadrada.</li>
                                <li className="pl-2">Cortás un cuadrado igual en ambas esquinas inferiores.</li>
                                <li className="pl-2">Luego unís los bordes del corte enfrentando costura con costura.</li>
                                <li className="pl-2">Al coser esa unión… se forma la base con amplitud. Automáticamente aparece profundidad.</li>
                            </ol>
                        </div>

                        <div className="space-y-8 border-t border-cream pt-12">
                            <h3 className="text-3xl font-display text-dark mb-6">
                                ¿Cuánta amplitud da?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                La medida del cuadrado que cortás define la profundidad:
                            </p>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex justify-between border-b border-cream pb-2">
                                    <span>Cuadrado de 3 cm</span> <strong className="text-dark">base de 6 cm aprox.</strong>
                                </li>
                                <li className="flex justify-between border-b border-cream pb-2">
                                    <span>Cuadrado de 5 cm</span> <strong className="text-dark">base de 10 cm aprox.</strong>
                                </li>
                                <li className="flex justify-between border-b border-cream pb-2">
                                    <span>Cuadrado de 7 cm</span> <strong className="text-dark">base de 14 cm aprox.</strong>
                                </li>
                            </ul>
                            <div className="bg-dark text-cream p-6 mt-8 text-center text-sm uppercase tracking-widest font-bold">
                                La profundidad final es aproximadamente el doble del lado del cuadrado.
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

