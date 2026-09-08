import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useI18n();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/dashboard', label: t('nav.dashboard') },
    { path: '/editor', label: t('nav.editor') },
    { path: '/library', label: t('nav.library') },
    { path: '/ai', label: t('nav.ai') },
    { path: '/hof', label: t('nav.hof'), wide: true },
    { path: '/market', label: t('nav.market'), wide: true },
    { path: '/vault', label: t('nav.vault'), wide: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-elevated border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">AI Harry</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${item.wide ? 'hidden xl:flex' : ''} px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-primary/20 text-primary border border-primary/30 shadow-glow-sm'
                    : 'text-on-surface-variant hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/profile"
              className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 border border-primary/20 items-center justify-center hover:bg-primary/20 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary">account_circle</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-elevated border-t border-primary/10 rounded-t-xl z-50">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col flex-1 min-w-0 items-center justify-center gap-1 px-1 py-2 rounded-lg transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-primary bg-primary/10'
                  : 'text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                {getIconForPath(item.path)}
              </span>
              <span className="text-[10px] font-medium">{getShortLabel(item.path)}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Helper function to get icon for path
const getIconForPath = (path) => {
  const icons = {
    '/': 'home',
    '/dashboard': 'dashboard',
    '/editor': 'edit',
    '/library': 'library_books',
    '/ai': 'smart_toy',
    '/hof': 'military_tech',
    '/market': 'shopping_bag',
    '/vault': 'inventory_2',
  };
  return icons[path] || 'circle';
};

// Helper function to get short label for mobile
const getShortLabel = (path) => {
  const labels = {
    '/': 'Home',
    '/dashboard': 'Dash',
    '/editor': 'Edit',
    '/library': 'Lib',
    '/ai': 'AI',
    '/hof': 'HOF',
    '/market': 'Market',
    '/vault': 'Vault',
  };
  return labels[path] || '';
};

export default Navbar;
