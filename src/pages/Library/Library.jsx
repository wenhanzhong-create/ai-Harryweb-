import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const Library = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filters = [
    { id: 'all', label: t('library.all') },
    { id: 'drafts', label: t('library.drafts') },
    { id: 'published', label: t('library.published') },
    { id: 'archived', label: t('library.archived') },
  ];

  const documents = [
    {
      id: 1,
      title: 'Getting Started with AI Writing',
      excerpt: 'Learn how to leverage AI to enhance your writing workflow...',
      status: 'published',
      date: 'Aug 15, 2024',
      views: 1245,
    },
    {
      id: 2,
      title: '10 Tips for Better Content Creation',
      excerpt: 'Discover the best practices for creating engaging content...',
      status: 'published',
      date: 'Aug 12, 2024',
      views: 892,
    },
    {
      id: 3,
      title: 'The Future of AI in Publishing',
      excerpt: 'Exploring how artificial intelligence is transforming...',
      status: 'draft',
      date: 'Aug 10, 2024',
      views: 0,
    },
    {
      id: 4,
      title: 'Content Marketing Strategies',
      excerpt: 'Effective strategies for content marketing in 2024...',
      status: 'draft',
      date: 'Aug 8, 2024',
      views: 0,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-tertiary bg-tertiary/20 border-tertiary/30';
      case 'draft': return 'text-secondary bg-secondary/20 border-secondary/30';
      case 'archived': return 'text-on-surface-variant bg-surface-bright/50 border-outline/30';
      default: return '';
    }
  };

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-on-surface mb-2">
          {t('library.title')}
        </h1>
        <p className="text-lg text-on-surface-variant">
          Manage all your content in one place
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                filter === f.id
                  ? 'bg-primary/20 text-primary border border-primary/40'
                  : 'glass-panel text-on-surface-variant hover:bg-surface-bright/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-md sm:ml-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('library.search')}
            className="w-full pl-12 pr-4 py-3 glass-panel rounded-full text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* Documents Grid */}
      {documents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <GlassCard
              key={doc.id}
              elevated
              interactive
              className="group"
            >
              {/* Status Badge */}
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(doc.status)}`}>
                  {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                </span>
                <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-on-surface-variant text-sm">more_vert</span>
                </button>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {doc.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                {doc.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-on-surface-variant pt-4 border-t border-primary/10">
                <span>{doc.date}</span>
                {doc.status === 'published' && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    {doc.views}
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      ) : (
        <GlassCard elevated className="text-center py-16">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">
            folder_open
          </span>
          <h3 className="text-xl font-bold text-on-surface mb-2">
            {t('library.noResults')}
          </h3>
          <p className="text-on-surface-variant mb-6">
            Try adjusting your filters or search query
          </p>
        </GlassCard>
      )}
    </div>
  );
};

export default Library;
