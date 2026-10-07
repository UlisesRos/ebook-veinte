import accesos from '../data/accesos.json';
import { esEmailValido, hashEmail, normalizarEmail } from './emailHash';

/*
 * Control de acceso sin backend ni contraseña.
 *
 * - La lista habilitada (src/data/accesos.json) tiene sólo huellas de emails.
 * - Al ingresar un email válido se guarda su huella en este dispositivo y listo.
 * - Es un portero, no una caja fuerte: evita que el link reenviado sea de libre
 *   acceso, pero el contenido sigue viajando al navegador. Para algo estricto hace
 *   falta verificar del lado del servidor.
 */

const CLAVE = 'ebook_acceso';
const HASHES = new Set<string>(accesos.hashes);

// Atajo para trabajar en local: `.env.local` con VITE_ACCESO_ABIERTO=1. En producción no existe.
const MODO_ABIERTO = import.meta.env.DEV && import.meta.env.VITE_ACCESO_ABIERTO === '1';

export const WHATSAPP_VISIBLE = '+54 9 3416 05-3777';
const WHATSAPP_NUMERO = '5493416053777';

export function enlaceWhatsApp(email?: string): string {
  const saludo = 'Hola, quisiera sumarme al grupo de costura para acceder a los módulos del ebook.';
  const texto = email ? `${saludo} Mi email es ${email}.` : saludo;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

/* ── Sesión guardada ── */

// Respaldo por si localStorage no está disponible (navegación privada, datos bloqueados):
// el acceso dura mientras la pestaña siga abierta.
let enMemoria: string | null = null;
const oyentes = new Set<() => void>();

function leer(): string | null {
  try {
    const guardado = localStorage.getItem(CLAVE);
    if (guardado) return guardado;
  } catch {
    // sin almacenamiento: se usa el respaldo en memoria
  }
  return enMemoria;
}

function avisar() {
  oyentes.forEach((fn) => fn());
}

/** Se vuelve a validar contra la lista vigente: si la quitan, el acceso guardado deja de servir. */
export function estaAutorizada(): boolean {
  if (MODO_ABIERTO) return true;
  const huella = leer();
  return huella !== null && HASHES.has(huella);
}

/** Para useSyncExternalStore. También escucha otras pestañas (login/logout se reflejan solos). */
export function suscribir(fn: () => void): () => void {
  oyentes.add(fn);
  const alCambiarStorage = (e: StorageEvent) => {
    if (e.key === CLAVE || e.key === null) fn();
  };
  window.addEventListener('storage', alCambiarStorage);
  return () => {
    oyentes.delete(fn);
    window.removeEventListener('storage', alCambiarStorage);
  };
}

/* ── Verificación ── */

export type Verificacion =
  | { estado: 'ok'; huella: string }
  | { estado: 'invalido' | 'no-registrada' | 'error' };

/** Comprueba el email contra la lista, sin guardar nada todavía. */
export async function verificarEmail(email: string): Promise<Verificacion> {
  const limpio = normalizarEmail(email);
  if (!esEmailValido(limpio)) return { estado: 'invalido' };
  try {
    const huella = await hashEmail(limpio, accesos.sal);
    return HASHES.has(huella) ? { estado: 'ok', huella } : { estado: 'no-registrada' };
  } catch {
    // crypto.subtle no existe fuera de https/localhost o en navegadores muy viejos
    return { estado: 'error' };
  }
}

export function guardarAcceso(huella: string) {
  enMemoria = huella;
  try {
    localStorage.setItem(CLAVE, huella);
  } catch {
    // queda sólo en memoria
  }
  avisar();
}

export function salir() {
  enMemoria = null;
  try {
    localStorage.removeItem(CLAVE);
  } catch {
    // nada que borrar
  }
  avisar();
}
