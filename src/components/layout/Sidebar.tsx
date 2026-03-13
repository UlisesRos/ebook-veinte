import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Menu, X, Scissors } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close sidebar on mobile when navigating
    setIsOpen(false);
  }, [location]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { to: '/', label: 'Inicio', icon: Home },
    { to: '/module1', label: 'Módulo I: Costura Inicial', icon: Scissors },
    { to: '/module2', label: 'Módulo II: Técnicas Fundamentales', icon: Scissors },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden text-dark hover:bg-white transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-dark/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Area */}
        <div className="p-6  border-b border-border flex items-center justify-center">
          <img src="/logodos.png" alt="Veinte Studio Logo" className="h-16 object-contain invert" />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "sidebar-item flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-dark/95 text-white shadow-sm"
                      : "text-muted-foreground hover:bg-white/60 hover:text-dark"
                  )
                }
              >
                <Icon size={18} />
                <span className="font-body">{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Area */}
        <div className="p-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Veinte Studio
          </p>
        </div>
      </aside>
    </>
  );
}
