import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 lg:pl-72 transition-all duration-300 relative w-full">
        {/* Main content container with max-width for readability */}
        <div className="max-w-4xl mx-auto p-6 md:p-10 lg:p-16 min-h-screen w-full relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
