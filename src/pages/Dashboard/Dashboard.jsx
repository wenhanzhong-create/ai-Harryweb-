import { Link } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const Dashboard = () => {
  const { t } = useI18n();

  const stats = [
    { label: t('dashboard.stats.articles'), value: '24', icon: 'article', colorClass: 'bg-primary/20', iconClass: 'text-primary' },
    { label: t('dashboard.stats.drafts'), value: '8', icon: 'draft', colorClass: 'bg-secondary/20', iconClass: 'text-secondary' },
    { label: t('dashboard.stats.published'), value: '16', icon: 'check_circle', colorClass: 'bg-tertiary/20', iconClass: 'text-tertiary' },
    { label: t('dashboard.stats.views'), value: '12.5K', icon: 'visibility', colorClass: 'bg-primary/20', iconClass: 'text-primary' },
  ];

  const quickActions = [
    { to: '/editor', icon: 'edit_note', label: t('editor.newDocument'), colorClass: 'bg-primary/20', iconClass: 'text-primary' },
    { to: '/ai', icon: 'smart_toy', label: t('nav.ai'), colorClass: 'bg-tertiary/20', iconClass: 'text-tertiary' },
    { to: '/library', icon: 'library_books', label: t('nav.library'), colorClass: 'bg-secondary/20', iconClass: 'text-secondary' },
  ];

  const recentActivity = [
    { title: 'Getting Started with AI Writing', time: '2 hours ago', type: 'draft' },
    { title: '10 Tips for Better Content', time: '1 day ago', type: 'published' },
    { title: 'The Future of AI in Publishing', time: '3 days ago', type: 'published' },
  ];

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-on-surface mb-2">
          {t('dashboard.title')}
        </h1>
        <p className="text-lg text-on-surface-variant">
          {t('dashboard.welcome')}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <GlassCard key={index} elevated>
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.colorClass} flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-2xl ${stat.iconClass}`}>
                  {stat.icon}
                </span>
              </div>
            </div>
            <div className="text-3xl font-black text-on-surface mb-1">{stat.value}</div>
            <div className="text-sm text-on-surface-variant">{stat.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">bolt</span>
          {t('dashboard.quickActions')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.to}
              className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:bg-surface-bright/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg ${action.colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <span className={`material-symbols-outlined text-xl ${action.iconClass}`}>
                  {action.icon}
                </span>
              </div>
              <span className="font-medium text-on-surface">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">history</span>
          {t('dashboard.recent')}
        </h2>
        <GlassCard elevated>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-surface-bright/30 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg ${
                    activity.type === 'published' ? 'bg-tertiary/20' : 'bg-secondary/20'
                  } flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-lg">
                      {activity.type === 'published' ? 'check_circle' : 'edit'}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-on-surface group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant">{activity.time}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
