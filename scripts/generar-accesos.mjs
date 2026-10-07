/*
 * Convierte la lista de alumnas (CSV) en src/data/accesos.json, que es lo único
 * que viaja al sitio: huellas de los emails, nunca nombres ni celulares.
 *
 *   npm run alumnas                 → lee alumnas/alumnas.csv
 *   npm run alumnas -- otra.csv     → lee otro archivo
 *
 * Columnas (la primera fila son los títulos, el orden no importa):
 *   nombre, apellido, email, celular
 * Sólo "email" es obligatoria. Acepta CSV con coma o punto y coma (Excel en
 * español guarda con punto y coma) y con o sin BOM.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { randomBytes, webcrypto } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { esEmailValido, hashEmail, normalizarEmail } from '../src/lib/emailHash.js';

if (!globalThis.crypto) globalThis.crypto = webcrypto;

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const entrada = resolve(raiz, process.argv[2] ?? 'alumnas/alumnas.csv');
const salida = resolve(raiz, 'src/data/accesos.json');

const COLUMNAS_EMAIL = ['email', 'e-mail', 'mail', 'correo', 'correo electronico'];

function sinAcentos(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function parsearCSV(texto) {
  texto = texto.replace(/^﻿/, '');
  const primera = texto.split(/\r?\n/, 1)[0];
  const cuenta = (c) => primera.split(c).length - 1;
  const sep = cuenta(';') > cuenta(',') ? ';' : ',';

  const filas = [];
  let fila = [];
  let campo = '';
  let entreComillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (entreComillas) {
      if (c !== '"') campo += c;
      else if (texto[i + 1] === '"') { campo += '"'; i++; }
      else entreComillas = false;
    } else if (c === '"') entreComillas = true;
    else if (c === sep) { fila.push(campo); campo = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++;
      fila.push(campo); filas.push(fila); fila = []; campo = '';
    } else campo += c;
  }
  if (campo !== '' || fila.length) { fila.push(campo); filas.push(fila); }
  return filas.filter((f) => f.some((x) => x.trim() !== ''));
}

if (!existsSync(entrada)) {
  console.error(`No encuentro la lista: ${entrada}`);
  console.error('Copiá alumnas/alumnas.ejemplo.csv como alumnas/alumnas.csv y completala.');
  process.exit(1);
}

const [titulos, ...filas] = parsearCSV(readFileSync(entrada, 'utf8'));
const idxEmail = titulos.findIndex((t) => COLUMNAS_EMAIL.includes(sinAcentos(t).trim().toLowerCase()));
if (idxEmail === -1) {
  console.error(`Falta la columna "email" en la primera fila. Encontré: ${titulos.join(' | ')}`);
  process.exit(1);
}

// La sal se conserva entre ejecuciones: así las huellas ya generadas siguen siendo válidas.
let sal;
try { sal = JSON.parse(readFileSync(salida, 'utf8')).sal; } catch { /* primera vez */ }
sal ||= randomBytes(16).toString('hex');

const emails = new Set();
const avisos = [];
filas.forEach((fila, i) => {
  const linea = i + 2; // +1 por los títulos, +1 porque las filas se cuentan desde 1
  const email = normalizarEmail(fila[idxEmail] ?? '');
  if (!email) return avisos.push(`fila ${linea}: sin email, se omite`);
  if (!esEmailValido(email)) return avisos.push(`fila ${linea}: el email no parece válido, se omite`);
  if (emails.has(email)) return avisos.push(`fila ${linea}: email repetido, se cuenta una sola vez`);
  emails.add(email);
});

const hashes = (await Promise.all([...emails].map((e) => hashEmail(e, sal)))).sort();
writeFileSync(salida, JSON.stringify({ sal, hashes }, null, 2) + '\n');

avisos.forEach((a) => console.warn(`⚠  ${a}`));
console.log(`✔ ${hashes.length} ${hashes.length === 1 ? 'alumna habilitada' : 'alumnas habilitadas'} → src/data/accesos.json`);
console.log('  Para que se vea en el sitio: commit + push de ese archivo (Vercel redeploya solo).');
