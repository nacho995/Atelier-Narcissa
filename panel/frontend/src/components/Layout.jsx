import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();

  const navItems = [
    { to: '/', label: 'Dashboard', icon: '📊' },
    { to: '/ingresos', label: 'Ingresos', icon: '💰' },
    { to: '/gastos', label: 'Gastos', icon: '📉' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif text-brand-800">
            Atelier Narcisa
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-brand-600">{user?.name}</span>
            <button onClick={logout} className="text-sm text-brand-500 hover:text-brand-700">
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-6 py-4 font-medium transition-colors border-b-2 ${
                    isActive
                      ? 'border-brand-600 text-brand-700'
                      : 'border-transparent text-brand-500 hover:text-brand-700'
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

