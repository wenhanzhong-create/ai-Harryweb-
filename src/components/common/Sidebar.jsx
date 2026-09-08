import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';

const Sidebar = () => {
  const { t } = useI18n();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/dashboard', icon: 'dashboard', label: t('nav.dashboard') },
    { path: '/editor', icon: 'edit_note', label: t('nav.editor') },
    { path: '/library', icon: 'library_books', label: t('nav.library') },
    { path: '/ai', icon: 'smart_toy', label: t('nav.ai') },
    { path: '/hof', icon: 'military_tech', label: t('nav.hof') },
    { path: '/market', icon: 'shopping_bag', label: t('nav.market') },
    { path: '/vault', icon: 'inventory_2', label: t('nav.vault') },
  ];

  const bottomItems = [
    { path: '/settings', icon: 'settings', label: t('nav.settings') },
    { path: '/about', icon: 'info', label: t('nav.about') },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 fixed left-0 top-16 bottom-0 glass-elevated border-r border-primary/10 z-40">
      {/* User Profile Section */}
      <div className="p-4 border-b border-primary/10">
        <div className="flex items-center gap-3 p-3 glass-panel rounded-xl">
          <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl">person</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-on-surface truncate">AI Harry User</p>
            <p className="text-xs text-on-surface-variant truncate">user@example.com</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-primary/20 text-primary border-r-4 border-primary'
                : 'text-on-surface-variant hover:bg-surface-bright/50 hover:text-on-surface hover:translate-x-1'
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-primary/10 space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-primary/20 text-primary'
                : 'text-on-surface-variant hover:bg-surface-bright/50 hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
          </Link>
        ))}

        {/* AI Assist Button */}
        <button className="w-full mt-4 btn-primary flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">bolt</span>
          <span className="font-semibold text-sm">AI Assist</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
