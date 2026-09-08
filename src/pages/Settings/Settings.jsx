import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';
import LanguageSwitcher from '../../components/common/LanguageSwitcher';

const Settings = () => {
  const { t, language } = useI18n();

  const settingsSections = [
    {
      title: t('settings.language'),
      items: [
        {
          label: 'Interface Language',
          description: 'Choose your preferred language',
          component: <LanguageSwitcher />,
        },
      ],
    },
    {
      title: t('settings.theme'),
      items: [
        {
          label: 'Dark Mode',
          description: 'Use dark theme across the application',
          component: (
            <div className="w-12 h-6 bg-primary/20 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full" />
            </div>
          ),
        },
      ],
    },
    {
      title: t('settings.notifications'),
      items: [
        {
          label: 'Email Notifications',
          description: 'Receive updates via email',
          component: (
            <div className="w-12 h-6 bg-primary/20 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full" />
            </div>
          ),
        },
        {
          label: 'Push Notifications',
          description: 'Receive push notifications in browser',
          component: (
            <div className="w-12 h-6 bg-surface-bright/50 rounded-full relative cursor-pointer">
              <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full" />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-on-surface mb-2">
          {t('settings.title')}
        </h1>
        <p className="text-lg text-on-surface-variant">
          Customize your experience
        </p>
      </div>

      {/* Current Language Display */}
      <GlassCard elevated className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-on-surface mb-1">Current Language</h3>
            <p className="text-sm text-on-surface-variant">
              {language === 'en' ? 'English (United States)' : '中文（简体）'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">language</span>
            <span className="text-2xl font-bold text-primary">
              {language === 'en' ? 'EN' : '中'}
            </span>
          </div>
        </div>
      </GlassCard>

      {/* Settings Sections */}
      {settingsSections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">settings</span>
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <GlassCard key={itemIndex} elevated>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-on-surface mb-1">{item.label}</h3>
                    <p className="text-sm text-on-surface-variant">{item.description}</p>
                  </div>
                  <div className="ml-4">{item.component}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      ))}

      {/* Danger Zone */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-error mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined">warning</span>
          Danger Zone
        </h2>
        <GlassCard className="border-error/30">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-on-surface mb-1">Delete Account</h3>
              <p className="text-sm text-on-surface-variant">
                Permanently delete your account and all data
              </p>
            </div>
            <button className="px-4 py-2 bg-error/10 text-error border border-error/30 rounded-lg hover:bg-error/20 transition-colors font-medium text-sm">
              Delete
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Settings;
