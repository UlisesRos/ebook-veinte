/*
 * Huella de un email, compartida por el navegador (src/lib/acceso.ts) y por el
 * script que arma la lista (scripts/generar-accesos.mjs). Está en un solo archivo
 * a propósito: si las dos puntas calcularan distinto, nadie podría ingresar.
 *
 * Por qué una huella y no el email: el repo y el sitio son públicos, así que la
 * lista de alumnas no puede viajar en claro. PBKDF2 con muchas iteraciones hace
 * que adivinar emails a partir de la lista sea carísimo.
 */

export const ITERACIONES = 100_000;

const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Minúsculas y sin espacios en los bordes: "  María@Gmail.com " === "maría@gmail.com". */
export function normalizarEmail(email) {
  return String(email).trim().toLowerCase();
}

export function esEmailValido(email) {
  return FORMATO_EMAIL.test(normalizarEmail(email));
}

/** Devuelve la huella (hex de 64 caracteres) de un email, usando `sal` como sal. */
export async function hashEmail(email, sal) {
  const texto = new TextEncoder();
  const clave = await crypto.subtle.importKey(
    'raw',
    texto.encode(normalizarEmail(email)),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: texto.encode(sal), iterations: ITERACIONES },
    clave,
    256,
  );
  return Array.from(new Uint8Array(bits), (b) => b.toString(16).padStart(2, '0')).join('');
}
