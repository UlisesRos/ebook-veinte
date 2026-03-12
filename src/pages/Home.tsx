import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center max-w-2xl mx-auto space-y-12">
      <div className="space-y-6 mt-12">
        <h1 className="text-5xl md:text-6xl font-display text-dark tracking-tight flex flex-col items-center justify-center gap-4">
          Ebook
          <img src="/logo.png" alt="Veinte Studio Logo" className="h-16 md:h-20 object-contain invert" />
        </h1>
        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          Este es nuestro webbook interactivo. Aquí encontrarás todo el material, clases y módulos de nuestro studio diseñados para que aprendas a tu propio ritmo.
        </p>
      </div>

      <div className="relative w-48 h-48 md:w-[260px] md:h-[260px] mx-auto">
        <div className="absolute inset-0 bg-mint/50 rounded-full blur-3xl -z-10"></div>
        <img
          src="/maquina.png"
          alt="Máquina de coser"
          className="absolute inset-0 w-full h-full object-contain drop-shadow-xl grayscale"
        />
      </div>

      <div className="pt-8 pb-16">
        <Link
          to="/module1"
          className="inline-flex items-center justify-center gap-2 bg-dark text-cream px-8 py-4 rounded-full font-body font-medium hover:bg-lime hover:text-dark transition-colors"
        >
          Comenzar Modulo I <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
