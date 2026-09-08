import { Link } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const Home = () => {
  const { t } = useI18n();

  const features = [
    {
      icon: 'auto_awesome',
      title: t('home.features.ai.title'),
      description: t('home.features.ai.description'),
      colorClass: 'bg-primary/20',
      iconClass: 'text-primary',
    },
    {
      icon: 'groups',
      title: t('home.features.collaborate.title'),
      description: t('home.features.collaborate.description'),
      colorClass: 'bg-secondary/20',
      iconClass: 'text-secondary',
    },
    {
      icon: 'rocket_launch',
      title: t('home.features.publish.title'),
      description: t('home.features.publish.description'),
      colorClass: 'bg-tertiary/20',
      iconClass: 'text-tertiary',
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="material-symbols-outlined text-primary text-sm">star</span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              AI-Powered Content Creation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-on-surface tracking-tight leading-tight">
            {t('home.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base text-on-surface-variant/70 max-w-xl mx-auto">
            {t('home.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/editor"
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2 shadow-glow"
            >
              <span className="material-symbols-outlined">edit</span>
              {t('home.cta')}
            </Link>
            <Link
              to="/about"
              className="btn-secondary px-8 py-4 text-lg flex items-center gap-2"
            >
              <span className="material-symbols-outlined">info</span>
              {t('common.learnMore')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">10K+</div>
              <div className="text-sm text-on-surface-variant">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-tertiary mb-2">50K+</div>
              <div className="text-sm text-on-surface-variant">Articles Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary mb-2">1M+</div>
              <div className="text-sm text-on-surface-variant">AI Generations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-on-surface mb-4">
              {t('about.features')}
            </h2>
            <p className="text-lg text-on-surface-variant">
              Everything you need to create amazing content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-in">
            {features.map((feature, index) => (
              <GlassCard
                key={index}
                elevated
                interactive
                className="group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`material-symbols-outlined text-4xl ${feature.iconClass}`}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard elevated className="text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">
              Ready to Start Creating?
            </h2>
            <p className="text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              Join thousands of creators who are already using AI Harry to
              transform their content creation workflow.
            </p>
            <Link
              to="/editor"
              className="btn-primary px-8 py-4 text-lg inline-flex items-center gap-2 shadow-glow"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              {t('common.getStarted')}
            </Link>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-panel border-t border-primary/10 py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                </div>
                <span className="text-xl font-bold text-primary">AI Harry</span>
              </div>
              <p className="text-on-surface-variant text-sm max-w-sm">
                {t('home.description')}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link to="/editor" className="link-secondary">Editor</Link></li>
                <li><Link to="/library" className="link-secondary">Library</Link></li>
                <li><Link to="/ai" className="link-secondary">AI Assistant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link to="/about" className="link-secondary">About</Link></li>
                <li><Link to="/settings" className="link-secondary">Settings</Link></li>
                <li><Link to="/profile" className="link-secondary">Profile</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 mt-8 pt-8 text-center text-sm text-on-surface-variant">
            <p>&copy; 2024 AI Harry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
