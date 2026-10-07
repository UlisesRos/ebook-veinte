import { useSyncExternalStore } from 'react';
import { estaAutorizada, suscribir } from '../lib/acceso';

/** `true` si este dispositivo ya ingresó con un email de la lista. Se actualiza solo. */
export function useAcceso(): boolean {
  return useSyncExternalStore(suscribir, estaAutorizada);
}
