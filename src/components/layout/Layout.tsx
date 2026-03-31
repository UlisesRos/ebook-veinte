import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useEbookAccess } from '../../hooks/useEbookAccess';
import { EmailGate } from '../EmailGate';

export function Layout() {
  const { hasAccess, grantAccess } = useEbookAccess();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Mostrar gate solo en páginas de módulos (no en Home)
  const showGate = !isHome && !hasAccess;

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar />
      <main className="flex-1 lg:pl-72 transition-all duration-300 relative w-full">
        {/* Main content container with max-width for readability */}
        <div className="max-w-4xl mx-auto p-6 md:p-10 lg:p-16 min-h-screen w-full relative">
          <Outlet />
        </div>
      </main>

      {showGate && <EmailGate onAccess={grantAccess} />}
    </div>
  );
}
