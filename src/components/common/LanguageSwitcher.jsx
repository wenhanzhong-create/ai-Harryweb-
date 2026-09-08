import { useI18n } from '../../context/LanguageContext';

const LanguageSwitcher = ({ className = '' }) => {
  const { language, toggleLanguage } = useI18n();

  return (
    <button
      onClick={toggleLanguage}
      className={`glass-panel px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-primary/10 group ${className}`}
      aria-label="Toggle Language"
    >
      <span className="material-symbols-outlined text-sm">language</span>
      <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
        {language === 'en' ? '中文' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
