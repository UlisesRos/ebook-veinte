import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Menu, X, Scissors, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [module1Open, setModule1Open] = useState(() => location.pathname.startsWith('/module1'));
  const [module2Open, setModule2Open] = useState(() => location.pathname.startsWith('/module2'));
  const [prevLocation, setPrevLocation] = useState(location);

  // Derived state during render (React-approved pattern — no useEffect needed)
  if (prevLocation !== location) {
    setPrevLocation(location);
    setIsOpen(false);
    if (location.pathname.startsWith('/module1')) setModule1Open(true);
    if (location.pathname.startsWith('/module2')) setModule2Open(true);
  }

  const toggleSidebar = () => setIsOpen(!isOpen);

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
        <div className="p-6 border-b border-border flex items-center justify-center">
          <img src="/logodos.png" alt="Veinte Studio Logo" className="h-16 object-contain invert" />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">

          {/* Inicio */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "sidebar-item flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-dark/95 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-white/60 hover:text-dark"
              )
            }
          >
            <Home size={18} />
            <span className="font-body">Inicio</span>
          </NavLink>

          {/* Módulo I — collapsible group */}
          <div>
            <button
              onClick={() => setModule1Open((v) => !v)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname.startsWith('/module1')
                  ? "bg-dark/95 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-white/60 hover:text-dark"
              )}
            >
              <Scissors size={18} className="shrink-0" />
              <span className="font-body flex-1 text-left">Módulo I: Costura Inicial</span>
              <ChevronDown
                size={14}
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  module1Open ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            {/* Sub-items */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                module1Open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pl-4 pt-1 space-y-1">
                {/* Go to module1 page */}
                <NavLink
                  to="/module1"
                  end
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 border-l-2",
                      isActive
                        ? "border-dark text-dark bg-dark/5"
                        : "border-border/40 text-muted-foreground hover:text-dark hover:bg-white/60 hover:border-dark/30"
                    )
                  }
                >
                  <span className="font-body">Teoría</span>
                </NavLink>

                {/* Práctica Módulo I */}
                <NavLink
                  to="/module1/practica"
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 border-l-2",
                      isActive
                        ? "border-dark text-dark bg-dark/5"
                        : "border-border/40 text-muted-foreground hover:text-dark hover:bg-white/60 hover:border-dark/30"
                    )
                  }
                >
                  <span className="font-body">Práctica</span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* Módulo II — collapsible group */}
          <div>
            <button
              onClick={() => setModule2Open((v) => !v)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                location.pathname.startsWith('/module2')
                  ? "bg-dark/95 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-white/60 hover:text-dark"
              )}
            >
              <Scissors size={18} className="shrink-0" />
              <span className="font-body flex-1 text-left">Módulo II: Técnicas Fundamentales</span>
              <ChevronDown
                size={14}
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  module2Open ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            {/* Sub-items */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                module2Open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pl-4 pt-1 space-y-1">
                <NavLink
                  to="/module2"
                  end
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 border-l-2",
                      isActive
                        ? "border-dark text-dark bg-dark/5"
                        : "border-border/40 text-muted-foreground hover:text-dark hover:bg-white/60 hover:border-dark/30"
                    )
                  }
                >
                  <span className="font-body">Teoría</span>
                </NavLink>

                <NavLink
                  to="/module2/practica"
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 border-l-2",
                      isActive
                        ? "border-dark text-dark bg-dark/5"
                        : "border-border/40 text-muted-foreground hover:text-dark hover:bg-white/60 hover:border-dark/30"
                    )
                  }
                >
                  <span className="font-body">Práctica</span>
                </NavLink>
              </div>
            </div>
          </div>

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