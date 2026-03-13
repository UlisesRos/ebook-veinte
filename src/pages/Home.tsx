export function Home() {
  return (
    <div
      className="bg-white flex flex-col items-center justify-center px-6"
      style={{ minHeight: '100svh', paddingTop: '8vh', paddingBottom: '8vh' }}
    >

      {/* Eyebrow */}
      <p
        className="font-body uppercase text-dark font-bold text-center"
        style={{ fontSize: '11px', letterSpacing: '0.3em', marginBottom: '1.2rem' }}
      >
        ¿Cómo dar tus primeros pasos en costura?
      </p>

      {/* Main title */}
      <h1
        className="font-display text-dark text-center"
        style={{
          fontSize: 'clamp(4.5rem, 15vw, 9rem)',
          fontWeight: 400,
          lineHeight: 1,
          letterSpacing: '-0.01em',
          marginBottom: '1.4rem',
        }}
      >
        WEBBOOK
      </h1>

      {/* Subtitle */}
      <p
        className="font-body text-dark text-center leading-relaxed"
        style={{ fontSize: 'clamp(13px, 2vw, 16px)', maxWidth: '340px', marginBottom: '6vh' }}
      >
        Planificá estratégicamente y encontrá razones para crear con confianza.
      </p>

      {/* Three photos */}
      <div
        style={{
          position: 'relative',
          /* Desktop: casi todo el ancho disponible, alto generoso */
          width: 'min(88vw, 680px)',
          height: 'clamp(280px, 55vw, 480px)',
          flexShrink: 0,
        }}
      >

        {/* Left photo */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44%',
            height: '82%',
            background: 'white',
            borderRadius: '10px',
            padding: '7px',
            outline: '1px solid hsl(var(--border))',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          <img
            src="/home-3.jpg"
            alt="Costura"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '5px',
            }}
          />
        </div>

        {/* Right photo */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44%',
            height: '82%',
            background: 'white',
            borderRadius: '10px',
            padding: '7px',
            outline: '1px solid hsl(var(--border))',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          <img
            src="/home-1.png"
            alt="Materiales"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '5px',
            }}
          />
        </div>

        {/* Center photo — on top, full height */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '100%',
            background: 'white',
            borderRadius: '10px',
            padding: '7px',
            outline: '1px solid hsl(var(--border))',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          <img
            src="/home-2.png"
            alt="Técnica textil"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '5px',
            }}
          />
        </div>

      </div>

    </div>
  );
}