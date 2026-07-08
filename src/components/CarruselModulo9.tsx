import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const IMAGES = [
  { src: '/Carrusel-Modulo9/Almohad%C3%B3n%20pr%C3%A1ctica.jpg', alt: 'Almohadón práctica' },
  { src: '/Carrusel-Modulo9/Almohad%C3%B3n_practica(1).PNG', alt: 'Almohadón práctica variante' },
  { src: '/Carrusel-Modulo9/Almohad%C3%B3n_practica.PNG', alt: 'Almohadón práctica detalle' },
  { src: '/Carrusel-Modulo9/Bies.jpg', alt: 'Bies decorativo' },
  { src: '/Carrusel-Modulo9/Borlas%20fucsias.jpg', alt: 'Borlas fucsias' },
  { src: '/Carrusel-Modulo9/Borlas.jpg', alt: 'Borlas decorativas' },
  { src: '/Carrusel-Modulo9/Botones%20forrados.PNG', alt: 'Botones forrados' },
  { src: '/Carrusel-Modulo9/Botones%20forrados_.jpg', alt: 'Botones forrados detalle' },
  { src: '/Carrusel-Modulo9/Flecos.jpg', alt: 'Flecos decorativos' },
  { src: '/Carrusel-Modulo9/IMG_3475.PNG', alt: 'Detalle de decoración' },
  { src: '/Carrusel-Modulo9/IMG_3476.PNG', alt: 'Detalle de decoración' },
  { src: '/Carrusel-Modulo9/IMG_5978.PNG', alt: 'Almohadón terminado' },
  { src: '/Carrusel-Modulo9/IMG_5979.PNG', alt: 'Almohadón terminado detalle' },
  { src: '/Carrusel-Modulo9/Mo%C3%B1os_.jpg', alt: 'Moños decorativos' },
  { src: '/Carrusel-Modulo9/Para%20atar.jpg', alt: 'Tiras para atar' },
  { src: '/Carrusel-Modulo9/Pompones.jpg', alt: 'Pompones decorativos' },
  { src: '/Carrusel-Modulo9/Variado.jpg', alt: 'Variado de decoraciones' },
  { src: '/Carrusel-Modulo9/Vivo%20o%20ribete.jpg', alt: 'Vivo o ribete' },
  { src: '/Carrusel-Modulo9/Volados.jpg', alt: 'Volados decorativos' },
] as const;

const TOTAL = IMAGES.length;
const ease = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 4000;

function useVisibleCount(): number {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const update = () =>
      setCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export function CarruselModulo9() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = useVisibleCount();
  const maxIndex = TOTAL - visibleCount;

  useEffect(() => {
    setCurrentIndex(prev => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isHovered || lightboxIndex !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, lightboxIndex, maxIndex, autoplayKey]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex(l => (l !== null && l > 0 ? l - 1 : l));
      if (e.key === 'ArrowRight') setLightboxIndex(l => (l !== null && l < TOTAL - 1 ? l + 1 : l));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex]);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setCurrentIndex(prev => Math.min(Math.max(prev + dir, 0), maxIndex));
      setAutoplayKey(k => k + 1);
    },
    [maxIndex],
  );

  const goTo = useCallback(
    (i: number) => {
      setCurrentIndex(Math.min(Math.max(i, 0), maxIndex));
      setAutoplayKey(k => k + 1);
    },
    [maxIndex],
  );

  const xPercent = -(currentIndex * 100) / TOTAL;

  return (
    <>
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="mb-12 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-bold text-dark/40 mb-3">
              04 — Inspiración
            </p>
            <h2
              className="font-display text-dark leading-tight"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 3.6rem)', fontWeight: 400 }}
            >
              Decoraciones<br />
              <span className="italic">en detalle</span>
            </h2>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease }}
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Overflow mask */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `${xPercent}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
                  style={{ width: `${(TOTAL * 100) / visibleCount}%` }}
                >
                  {IMAGES.map((img, i) => (
                    <div
                      key={img.src}
                      style={{ width: `${100 / TOTAL}%`, flexShrink: 0, padding: '0 5px' }}
                    >
                      <motion.div
                        className="overflow-hidden rounded-2xl cursor-zoom-in"
                        style={{
                          aspectRatio: '4/3',
                          boxShadow: '0 2px 14px rgba(0,0,0,0.06)',
                        }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 14px 42px rgba(0,0,0,0.14)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                        onClick={() => setLightboxIndex(i)}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Left arrow */}
              <AnimatePresence>
                {currentIndex > 0 && (
                  <motion.button
                    key="prev"
                    initial={{ opacity: 0, x: 10, scale: 0.84 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.84 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                    onClick={() => navigate(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-dark/10 cursor-pointer"
                    style={{
                      background: 'rgba(250, 248, 243, 0.84)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft size={20} strokeWidth={1.75} className="text-dark" />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Right arrow */}
              <AnimatePresence>
                {currentIndex < maxIndex && (
                  <motion.button
                    key="next"
                    initial={{ opacity: 0, x: -10, scale: 0.84 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.84 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                    onClick={() => navigate(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-dark/10 cursor-pointer"
                    style={{
                      background: 'rgba(250, 248, 243, 0.84)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight size={20} strokeWidth={1.75} className="text-dark" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div
              className="flex justify-center items-center gap-1.5 mt-7"
              role="tablist"
              aria-label="Navegación del carrusel"
            >
              {Array.from({ length: maxIndex + 1 }).map((_, i) => {
                const distance = Math.abs(i - currentIndex);
                return (
                  <motion.button
                    key={i}
                    role="tab"
                    aria-selected={i === currentIndex}
                    aria-label={`Posición ${i + 1} de ${maxIndex + 1}`}
                    onClick={() => goTo(i)}
                    className="rounded-full bg-dark cursor-pointer flex-shrink-0"
                    animate={{
                      width: i === currentIndex ? 18 : distance === 1 ? 7 : 5,
                      height: 5,
                      opacity:
                        distance === 0
                          ? 1
                          : distance === 1
                          ? 0.42
                          : distance === 2
                          ? 0.26
                          : distance === 3
                          ? 0.15
                          : 0.09,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6"
            style={{ background: 'rgba(10, 12, 10, 0.88)' }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Blur layer */}
            <div className="absolute inset-0 backdrop-blur-sm pointer-events-none" />

            {/* Image + counter */}
            <motion.div
              initial={{ scale: 0.86, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 10 }}
              transition={{ type: 'spring', stiffness: 310, damping: 28 }}
              onClick={e => e.stopPropagation()}
              className="relative z-10 flex flex-col items-center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  src={IMAGES[lightboxIndex].src}
                  alt={IMAGES[lightboxIndex].alt}
                  className="rounded-xl object-contain"
                  style={{
                    maxHeight: '88vh',
                    maxWidth: '88vw',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
                  }}
                  draggable={false}
                />
              </AnimatePresence>

              <p className="mt-4 font-body text-white/32 text-xs tracking-[0.18em]">
                {lightboxIndex + 1} / {TOTAL}
              </p>
            </motion.div>

            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 420, damping: 26, delay: 0.08 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-20 flex items-center justify-center w-11 h-11 rounded-full border border-white/20 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}
              aria-label="Cerrar"
            >
              <X size={18} strokeWidth={1.75} className="text-white" />
            </motion.button>

            {/* Lightbox prev */}
            {lightboxIndex > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                onClick={e => {
                  e.stopPropagation();
                  setLightboxIndex(l => (l !== null && l > 0 ? l - 1 : l));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={22} strokeWidth={1.75} className="text-white" />
              </motion.button>
            )}

            {/* Lightbox next */}
            {lightboxIndex < TOTAL - 1 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 420, damping: 26 }}
                onClick={e => {
                  e.stopPropagation();
                  setLightboxIndex(l => (l !== null && l < TOTAL - 1 ? l + 1 : l));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)' }}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={22} strokeWidth={1.75} className="text-white" />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
