import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const About = () => {
  const { t } = useI18n();

  const team = [
    { name: 'Harry Chen', role: 'Founder & CEO', avatar: 'HC' },
    { name: 'Sarah Johnson', role: 'Lead Engineer', avatar: 'SJ' },
    { name: 'Mike Wang', role: 'AI Researcher', avatar: 'MW' },
    { name: 'Emily Davis', role: 'Product Designer', avatar: 'ED' },
  ];

  const features = [
    { icon: 'auto_awesome', title: 'AI-Powered', description: 'Advanced artificial intelligence for content creation' },
    { icon: 'speed', title: 'Lightning Fast', description: 'Optimized performance for seamless experience' },
    { icon: 'security', title: 'Secure', description: 'Enterprise-grade security for your content' },
    { icon: 'devices', title: 'Cross-Platform', description: 'Works on any device, anywhere' },
  ];

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="material-symbols-outlined text-primary text-sm">info</span>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            About Us
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6">
          {t('about.title')}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      {/* Mission */}
      <GlassCard elevated className="mb-16 text-center py-16">
        <span className="material-symbols-outlined text-6xl text-primary mb-6">rocket_launch</span>
        <h2 className="text-3xl font-black text-on-surface mb-4">
          {t('about.mission')}
        </h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          {t('about.missionText')}
        </p>
      </GlassCard>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-black text-on-surface mb-8 text-center">
          {t('about.features')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={index} elevated interactive className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-primary">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-black text-on-surface mb-8 text-center">
          {t('about.team')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <GlassCard key={index} elevated interactive className="text-center group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-black text-primary">{member.avatar}</span>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-on-surface-variant">{member.role}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-16">
        <GlassCard elevated className="text-center py-12">
          <h2 className="text-2xl font-bold text-on-surface mb-4">
            Get in Touch
          </h2>
          <p className="text-on-surface-variant mb-6">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:hello@aiharry.com" className="btn-primary px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">email</span>
              Contact Us
            </a>
            <a href="https://github.com/aiharry" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">code</span>
              GitHub
            </a>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default About;
