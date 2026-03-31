import { useState } from "react";

interface EmailGateProps {
  onAccess: (name: string, email: string) => void;
}

export function EmailGate({ onAccess }: EmailGateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await fetch("https://formspree.io/f/mwvwodgg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "ebook-gate",
        }),
      });
    } catch {
      // Si Formspree falla, damos acceso igual para no bloquear al usuario
    }

    onAccess(name, email);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Veinte Studio" className="h-10 brightness-0" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-dark text-center mb-2">
          Accedé al Ebook Gratuito
        </h2>
        <p className="font-body text-sm text-dark/60 text-center mb-8">
          Ingresá tu nombre y email para acceder al contenido completo de costura creativa.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-body text-xs text-dark uppercase tracking-widest">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Tu nombre"
              className="bg-transparent border-b border-dark/30 focus:border-dark outline-none py-2 font-body text-sm text-dark placeholder-dark/40 transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-body text-xs text-dark uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tu@email.com"
              className="bg-transparent border-b border-dark/30 focus:border-dark outline-none py-2 font-body text-sm text-dark placeholder-dark/40 transition-colors duration-200"
            />
          </div>

          {error && (
            <p className="font-body text-xs text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-dark text-white font-body text-sm px-8 py-3 rounded-full hover:bg-dark/80 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Acceder al Ebook"}
          </button>
        </form>

        <p className="font-body text-xs text-dark/40 text-center mt-6">
          No compartimos tu información con terceros.
        </p>
      </div>
    </div>
  );
}
