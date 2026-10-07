import { useRef, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from '../../pages/Home';
import { useAcceso } from '../../hooks/useAcceso';
import { guardarAcceso } from '../../lib/acceso';
import { ModalAcceso } from './ModalAcceso';

/*
 * Qué se ve cuando alguien sin acceso intenta entrar a un módulo: la portada de
 * fondo y el modal encima. Se queda en la URL pedida, así un link directo a un
 * módulo funciona: ingresa el email y cae justo ahí.
 */
function PuertaDeAcceso() {
  const navigate = useNavigate();
  const [abierta, setAbierta] = useState(true);
  const huellaPendiente = useRef<string | null>(null);

  // Se resuelve cuando el modal terminó de irse, para no cortar su animación de salida.
  const alTerminarSalida = () => {
    if (huellaPendiente.current) guardarAcceso(huellaPendiente.current);
    else navigate('/', { replace: true });
  };

  return (
    <>
      <div inert aria-hidden="true">
        <Home />
      </div>
      <AnimatePresence onExitComplete={alTerminarSalida}>
        {abierta && (
          <ModalAcceso
            onValidada={(huella) => {
              huellaPendiente.current = huella;
              setAbierta(false);
            }}
            onCerrar={() => setAbierta(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export function RutaProtegida() {
  const tieneAcceso = useAcceso();
  return tieneAcceso ? <Outlet /> : <PuertaDeAcceso />;
}
