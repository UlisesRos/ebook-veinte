# Lista de alumnas

Quién puede entrar a los módulos del ebook. Sin contraseña: la persona escribe su
email y, si figura acá, ingresa y queda guardado en su dispositivo.

## Cómo cargar o quitar a alguien

1. Abrí `alumnas/alumnas.csv` (con Excel, Google Sheets o el bloc de notas).
   Si todavía no existe, copiá `alumnas.ejemplo.csv` con ese nombre.
2. Una fila por persona, con estas columnas: `nombre`, `apellido`, `email`, `celular`.
   Para quitar a alguien, borrá su fila.
3. Guardá como **CSV** y corré:

   ```bash
   npm run alumnas
   ```

4. Subí **solo** `src/data/accesos.json` (commit + push). Vercel publica solo en ~1 minuto.

## Qué viaja al sitio y qué no

- `alumnas/alumnas.csv` (nombres, celulares, emails) **no se sube a GitHub**: está en
  `.gitignore`. El repositorio es público, así que esta lista nunca debe subirse.
- `src/data/accesos.json` solo contiene huellas (hash) de los emails. No se puede leer
  un email a partir de ahí.
- Guardá una copia de `alumnas.csv` en un lugar seguro (Drive, por ejemplo): vive
  únicamente en tu computadora.

## Detalles útiles

- Da igual mayúsculas o espacios de más: `  Maria@Gmail.com ` y `maria@gmail.com` son lo mismo.
- Si alguien se registró con un email y después escribe otro, no va a entrar: tiene que
  usar el que figura en la lista.
- Quitar a alguien le cierra el acceso en la próxima visita (después de publicar), aunque
  ya hubiera ingresado antes.
- Mientras trabajás en local podés saltear el control creando `.env.local` con
  `VITE_ACCESO_ABIERTO=1`. Solo funciona con `npm run dev`; en producción se ignora.
