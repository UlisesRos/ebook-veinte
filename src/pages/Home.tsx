import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const cycleImages = [
  "/maquina.png",
  "/tijera.png",
  "/hilo.png"
];

export function Home() {
  const [cycleIdx, setCycleIdx] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.hero-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-image-wrap',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.5)' },
        '-=0.5'
      );
  }, []);

  // Cycling images
  useEffect(() => {
    const interval = setInterval(() => {
      setFadingOut(true);
      setTimeout(() => {
        setCycleIdx((prev) => (prev + 1) % cycleImages.length);
        setFadingOut(false);
      }, 350);
    }, 1000); // Ligeramente más lento que original para mejor lectura en tamaño grande
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-2xl mx-auto space-y-12">
      <div className="space-y-6 mt-12">
        <h1 className="hero-text text-5xl md:text-6xl font-display text-dark tracking-tight flex flex-col items-center justify-center gap-4">
          Bienvenido a
          <img src="/logo.png" alt="Veinte Studio Logo" className="h-16 md:h-20 object-contain invert" />
        </h1>
        <p className="hero-text text-lg text-muted-foreground font-body leading-relaxed">
          Este es nuestro webbook interactivo. Aquí encontrarás todo el material, clases y módulos de nuestro studio diseñados para que aprendas a tu propio ritmo.
        </p>
      </div>

      <div className="hero-image-wrap relative w-48 h-48 md:w-[260px] md:h-[260px] mx-auto">
        <div className="absolute inset-0 bg-mint/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

        {cycleImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
            style={{
              filter: "grayscale(100%)",
              opacity: i === cycleIdx ? (fadingOut ? 0 : 1) : 0,
              transition: "opacity 0.35s ease",
            }}
          />
        ))}
      </div>

      <div className="hero-text pt-8 pb-16">
        <Link
          to="/module1"
          className="inline-flex items-center justify-center gap-2 bg-dark text-cream px-8 py-4 rounded-full font-body font-medium hover:bg-lime hover:text-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Comenzar Modulo I <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
