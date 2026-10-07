import { useEffect, useId, useRef, useState } from 'react';
import type { FormEvent, ReactNode, Ref } from 'react';
import { createPortal } from 'react-dom';
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useAnimationControls,
  useReducedMotion,
} from 'framer-motion';
import { ArrowLeft, ArrowRight, LoaderCircle, Lock, MessageCircle, X } from 'lucide-react';
import { enlaceWhatsApp, verificarEmail, WHATSAPP_VISIBLE } from '../../lib/acceso';

const ease = [0.22, 1, 0.36, 1] as const;
const ACCENT = '#9B4B57';

type Fase = 'form' | 'no-registrada' | 'ok';

const MENSAJES_ERROR = {
  invalido: 'Revisá el email: parece que falta algo, por ejemplo la @ o el dominio.',
  error: 'No pudimos verificar tu email en este navegador. Probá abrir el ebook desde Chrome o Safari actualizado.',
} as const;

const estiloBoton =
  'group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-dark px-5 font-body text-[15px] font-bold tracking-wide text-cream ' +
  'transition-[transform,opacity] duration-150 ease-out active:scale-[0.97] disabled:opacity-80 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark';

const estiloEnlace =
  'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md px-2 font-body text-[14px] text-dark underline decoration-dark/30 underline-offset-4 ' +
  'transition-[text-decoration-color] duration-150 hover:decoration-dark ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark';

/* Anima la altura de la tarjeta cuando cambia el contenido (sin saltos entre estados) */
function AlturaSuave({ children }: { children: ReactNode }) {
  const interior = useRef<HTMLDivElement>(null);
  const [alto, setAlto] = useState<number | null>(null);

  useEffect(() => {
    const el = interior.current;
    if (!el) return;
    const observador = new ResizeObserver(() => setAlto(el.offsetHeight));
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  // El padding de 4px deja espacio al aro de foco, que si no el overflow lo recortaría.
  return (
    <div
      style={{ height: alto === null ? 'auto' : alto + 8 }}
      className="-mx-1 -my-1 overflow-hidden px-1 py-1 transition-[height] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none"
    >
      <div ref={interior}>{children}</div>
    </div>
  );
}

const vista = {
  initial: { opacity: 0, filter: 'blur(3px)' },
  animate: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.22, ease } },
  exit: { opacity: 0, filter: 'blur(3px)', transition: { duration: 0.12, ease: 'easeOut' as const } },
};

function Titulo({
  id,
  children,
  tabIndex,
  ref,
}: {
  id: string;
  children: ReactNode;
  tabIndex?: number;
  ref?: Ref<HTMLHeadingElement>;
}) {
  return (
    <h2
      id={id}
      ref={ref}
      tabIndex={tabIndex}
      className="mb-3 text-center font-display text-[1.65rem] font-normal leading-[1.15] text-dark outline-none sm:text-[1.85rem]"
    >
      {children}
    </h2>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-center font-body text-[11px] font-bold uppercase tracking-[0.3em] text-dark/60">
      {children}
    </p>
  );
}

/* ── Estado 1: pedir el email ── */

function VistaForm({
  tituloId,
  emailInicial,
  enfocarInput,
  onNoRegistrada,
  onValidada,
}: {
  tituloId: string;
  emailInicial: string;
  enfocarInput: boolean;
  onNoRegistrada: (email: string) => void;
  onValidada: (huella: string) => void;
}) {
  const ayudaId = useId();
  const errorId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const tituloRef = useRef<HTMLHeadingElement>(null);
  const sacudir = useAnimationControls();
  const [email, setEmail] = useState(emailInicial);
  const [error, setError] = useState<string | null>(null);
  const [verificando, setVerificando] = useState(false);

  useEffect(() => {
    // En celular no abrimos el teclado solos: taparía el texto. Se enfoca el título y listo.
    const conMouse = window.matchMedia('(pointer: fine)').matches;
    if (enfocarInput || conMouse) {
      inputRef.current?.focus({ preventScroll: true });
      if (enfocarInput) inputRef.current?.select();
    } else {
      tituloRef.current?.focus({ preventScroll: true });
    }
  }, [enfocarInput]);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (verificando) return;
    setError(null);
    setVerificando(true);
    const resultado = await verificarEmail(email);
    setVerificando(false);

    if (resultado.estado === 'ok') return onValidada(resultado.huella);
    if (resultado.estado === 'no-registrada') return onNoRegistrada(email.trim());

    setError(MENSAJES_ERROR[resultado.estado]);
    inputRef.current?.focus();
    sacudir.start({ x: [0, -7, 7, -4, 4, 0], transition: { duration: 0.4, ease: 'easeOut' } });
  }

  return (
    <motion.div {...vista}>
      <Eyebrow>Acceso al ebook</Eyebrow>
      <Titulo id={tituloId} ref={tituloRef} tabIndex={-1}>
        Ingresá con tu <span className="italic">email</span>
      </Titulo>
      <p className="mx-auto mb-6 max-w-[21rem] text-center font-body text-[15px] leading-relaxed text-dark/75">
        Los módulos son para quienes forman parte del grupo de costura. No necesitás contraseña, alcanza con tu email.
      </p>

      <form onSubmit={enviar} noValidate>
        <label htmlFor="acceso-email" className="mb-2 block font-body text-[13px] font-bold text-dark">
          Tu email
        </label>
        <motion.div animate={sacudir}>
          <input
            ref={inputRef}
            id="acceso-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
            placeholder="nombre@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : ayudaId}
            style={error ? { borderColor: ACCENT } : undefined}
            className="h-12 w-full rounded-lg border border-input bg-white px-4 font-body text-[16px] text-dark placeholder:text-dark/40 transition-[border-color,box-shadow] duration-150 focus:border-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-dark/15"
          />
          <AnimatePresence initial={false}>
            {error && (
              <motion.p
                id={errorId}
                role="alert"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="mt-2 font-body text-[13px] leading-snug"
                style={{ color: ACCENT }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
        {!error && (
          <p id={ayudaId} className="mt-2 font-body text-[13px] leading-snug text-muted-foreground">
            Usá el mismo email con el que te registraste en el taller.
          </p>
        )}

        <button type="submit" disabled={verificando} className={`${estiloBoton} mt-5`}>
          {verificando ? (
            <>
              <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
              Verificando
            </>
          ) : (
            <>
              Ingresar
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </form>

      <div className="mt-5 border-t border-dashed border-dark/15 pt-3 text-center font-body text-[13px] text-muted-foreground">
        ¿Todavía no sos parte del grupo?
        <br />
        <a href={enlaceWhatsApp()} target="_blank" rel="noopener noreferrer" className={estiloEnlace}>
          Escribinos por WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

/* ── Estado 2: el email no está en la lista ── */

function VistaNoRegistrada({
  tituloId,
  email,
  onReintentar,
}: {
  tituloId: string;
  email: string;
  onReintentar: () => void;
}) {
  const tituloRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    tituloRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.div {...vista}>
      <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-dark/30 text-dark">
        <Lock size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <Eyebrow>Acceso restringido</Eyebrow>
      <h2
        id={tituloId}
        ref={tituloRef}
        tabIndex={-1}
        className="mb-3 text-center font-display text-[1.5rem] font-normal leading-[1.2] text-dark outline-none sm:text-[1.7rem]"
      >
        Este contenido es exclusivo del <span className="italic">grupo de costura</span>
      </h2>
      <p className="mx-auto mb-2 max-w-[22rem] text-center font-body text-[15px] leading-relaxed text-dark/75">
        El email <strong className="break-all font-bold text-dark">{email}</strong> todavía no figura entre las
        personas habilitadas. Para ingresar a los módulos es necesario formar parte del grupo.
      </p>
      <p className="mx-auto mb-6 max-w-[22rem] text-center font-body text-[13px] leading-relaxed text-muted-foreground">
        Si ya participás, probá con el email con el que te registraste. Si todavía no, escribinos y te ayudamos a
        sumarte.
      </p>

      <a href={enlaceWhatsApp(email)} target="_blank" rel="noopener noreferrer" className={estiloBoton}>
        <MessageCircle size={18} aria-hidden="true" />
        Escribir por WhatsApp
        <span className="sr-only">(se abre en una pestaña nueva)</span>
      </a>
      <p className="mt-2 text-center font-body text-[13px] tabular-nums text-muted-foreground">{WHATSAPP_VISIBLE}</p>

      <div className="mt-2 text-center">
        <button type="button" onClick={onReintentar} className={estiloEnlace}>
          <ArrowLeft size={14} aria-hidden="true" />
          Probar con otro email
        </button>
      </div>
    </motion.div>
  );
}

/* ── Estado 3: ingresó ── */

function VistaOk({ tituloId }: { tituloId: string }) {
  return (
    <motion.div {...vista} role="status" className="py-2">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-dark text-cream">
        <motion.svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <motion.path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
          />
        </motion.svg>
      </div>
      <Titulo id={tituloId}>
        ¡Listo, ya podés <span className="italic">ingresar</span>!
      </Titulo>
      <p className="mx-auto max-w-[19rem] text-center font-body text-[15px] leading-relaxed text-dark/75">
        Te recordamos en este dispositivo para que no tengas que escribir tu email cada vez.
      </p>
    </motion.div>
  );
}

/* ── Modal ── */

export function ModalAcceso({
  onValidada,
  onCerrar,
}: {
  onValidada: (huella: string) => void;
  onCerrar: () => void;
}) {
  const reduce = useReducedMotion();
  const tituloId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const bloqueado = useRef(false);
  const temporizador = useRef<number | undefined>(undefined);
  const [fase, setFase] = useState<Fase>('form');
  const [emailProbado, setEmailProbado] = useState('');
  const [reintento, setReintento] = useState(false);

  // Sin scroll de fondo mientras está abierto (compensando el ancho de la barra para que nada se corra).
  useEffect(() => {
    const { body, documentElement } = document;
    const overflowPrevio = body.style.overflow;
    const paddingPrevio = body.style.paddingRight;
    const barra = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (barra > 0) body.style.paddingRight = `${barra}px`;
    return () => {
      body.style.overflow = overflowPrevio;
      body.style.paddingRight = paddingPrevio;
    };
  }, []);

  // Escape cierra y el foco no se escapa del diálogo.
  useEffect(() => {
    function alTeclear(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (!bloqueado.current) onCerrar();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const enfocables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (enfocables.length === 0) return;
      const primero = enfocables[0];
      const ultimo = enfocables[enfocables.length - 1];
      const activo = document.activeElement;
      if (!panel.contains(activo)) {
        e.preventDefault();
        primero.focus();
      } else if (e.shiftKey && activo === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && activo === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    }
    document.addEventListener('keydown', alTeclear);
    return () => document.removeEventListener('keydown', alTeclear);
  }, [onCerrar]);

  useEffect(() => () => window.clearTimeout(temporizador.current), []);

  function alValidar(huella: string) {
    bloqueado.current = true;
    setFase('ok');
    // Se muestra el "listo" un instante antes de pasar al módulo.
    temporizador.current = window.setTimeout(() => onValidada(huella), reduce ? 400 : 900);
  }

  function cerrar() {
    if (!bloqueado.current) onCerrar();
  }

  return createPortal(
    <MotionConfig reducedMotion="user">
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <motion.div
          aria-hidden="true"
          onClick={cerrar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } }}
          exit={{ opacity: 0, transition: { duration: 0.15, ease: 'easeOut' } }}
          className="absolute inset-0 bg-dark/45 backdrop-blur-[6px]"
        />

        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={tituloId}
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', duration: 0.5, bounce: 0.15 } }}
          exit={{ opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.16, ease: 'easeOut' } }}
          className="relative flex max-h-[calc(100svh-2rem)] w-full max-w-[26rem] flex-col rounded-[22px] bg-white shadow-[0_1px_0_hsl(var(--dark)/0.04),0_30px_70px_-20px_hsl(var(--dark)/0.45)]"
        >
          {/* Borde punteado: se "cose" de izquierda a derecha al abrir */}
          <motion.div
            aria-hidden="true"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.15, ease }}
            className="pointer-events-none absolute inset-2.5 rounded-xl border border-dashed border-dark/25"
          />

          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-3.5 top-3.5 z-10 flex h-11 w-11 items-center justify-center rounded-full text-dark/60 transition-[transform,color,background-color] duration-150 ease-out hover:bg-dark/5 hover:text-dark active:scale-[0.94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-dark"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <div className="overflow-y-auto overscroll-contain px-7 pb-7 pt-9 sm:px-9 sm:pb-9">
            <img
              src="/logodos.png"
              alt="Veinte Studio"
              className="mx-auto mb-6 h-11 object-contain invert"
              draggable={false}
            />
            <AlturaSuave>
              <AnimatePresence mode="wait" initial={false}>
                {fase === 'form' && (
                  <VistaForm
                    key="form"
                    tituloId={tituloId}
                    emailInicial={emailProbado}
                    enfocarInput={reintento}
                    onNoRegistrada={(email) => {
                      setEmailProbado(email);
                      setFase('no-registrada');
                    }}
                    onValidada={alValidar}
                  />
                )}
                {fase === 'no-registrada' && (
                  <VistaNoRegistrada
                    key="no-registrada"
                    tituloId={tituloId}
                    email={emailProbado}
                    onReintentar={() => {
                      setReintento(true);
                      setFase('form');
                    }}
                  />
                )}
                {fase === 'ok' && <VistaOk key="ok" tituloId={tituloId} />}
              </AnimatePresence>
            </AlturaSuave>
          </div>
        </motion.div>
      </div>
    </MotionConfig>,
    document.body,
  );
}
