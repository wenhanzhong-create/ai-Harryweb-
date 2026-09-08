import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import { VAULT_ITEMS } from '../../data/market';

const FILTERS = ['all', 'gear', 'playbooks', 'playerCards'];

// Static rarity classes (never interpolate)
const RARITY_CLASSES = {
  elite: {
    border: 'rarity-elite',
    badge: 'border-primary/30 text-primary',
    dot: 'bg-primary animate-pulse',
    bar: 'bg-primary',
    barText: 'text-primary/70',
  },
  pro: {
    border: 'rarity-pro',
    badge: 'border-tertiary/30 text-tertiary',
    dot: 'bg-tertiary',
    bar: 'bg-tertiary',
    barText: 'text-tertiary/70',
  },
  rookie: {
    border: 'rarity-rookie',
    badge: 'border-outline/30 text-on-surface-variant',
    dot: 'bg-on-surface-variant',
    bar: 'bg-on-surface-variant',
    barText: 'text-on-surface-variant/70',
  },
};

const Vault = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');

  const items = filter === 'all'
    ? VAULT_ITEMS
    : VAULT_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="relative z-10 px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">
            {t('vault.title')}
          </h1>
          <p className="text-on-surface-variant font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">folder_special</span>
            {t('vault.stats')}
            <span className="text-surface-variant mx-1">•</span>
            <span className="text-primary">{t('vault.eliteCount')}</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center glass-panel rounded-full p-1.5">
          <div className="flex space-x-1">
            {FILTERS.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-1.5 rounded-full font-semibold text-sm transition-all ${
                  filter === key
                    ? 'bg-primary text-on-primary shadow-glow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest/50 font-medium'
                }`}
              >
                {t(`vault.filters.${key}`)}
              </button>
            ))}
          </div>
          <div className="h-6 w-px bg-primary/10 hidden sm:block mx-1" />
          <button className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors px-2">
            {t('vault.sortRarity')}
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </button>
        </div>
      </header>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-in">
        {items.map((item) => {
          const rarity = RARITY_CLASSES[item.rarity];

          return (
            <article
              key={item.id}
              className={`glass-panel rounded-xl overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${rarity.border}`}
            >
              {/* Cover */}
              <div className="relative aspect-square overflow-hidden bg-surface-container-lowest">
                {item.category === 'playbooks' ? (
                  /* Tactical diagram cover for playbooks */
                  <div className="relative w-full h-full p-6 flex flex-col justify-center items-center border-b border-tertiary/10">
                    <div className="absolute inset-0 bg-tertiary/5 group-hover:bg-tertiary/10 transition-colors" />
                    <div className="relative w-full h-40 border-2 border-tertiary/20 rounded-lg p-2 mb-4">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 border-b-2 border-l-2 border-r-2 border-tertiary/20 rounded-b-full" />
                      <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-tertiary shadow-glow-tertiary" />
                      <div className="absolute bottom-14 right-10 w-3 h-3 rounded-full border-2 border-tertiary" />
                      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 30 130 Q 60 50 130 80" fill="none" stroke="rgba(200,160,240,0.5)" strokeDasharray="4 4" strokeWidth="2" />
                        <polygon fill="rgba(200,160,240,0.5)" points="130,80 122,74 125,84" />
                      </svg>
                    </div>
                    <div className={`absolute top-3 right-3 z-20 flex items-center gap-1 bg-surface-container-highest/80 backdrop-blur-md px-2 py-1 rounded-md border ${rarity.badge}`}>
                      <span className={`w-2 h-2 rounded-full ${rarity.dot}`} />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {t(`vault.rarity.${item.rarity}`)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className={`absolute top-3 right-3 z-20 flex items-center gap-1 bg-surface-container-highest/80 backdrop-blur-md px-2 py-1 rounded-md border ${rarity.badge}`}>
                      <span className={`w-2 h-2 rounded-full ${rarity.dot}`} />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        {t(`vault.rarity.${item.rarity}`)}
                      </span>
                    </div>
                    <button
                      aria-label="favorite"
                      className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full glass-elevated flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300"
                    >
                      <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    {item.category === 'playerCards' && (
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="text-4xl font-black text-on-surface opacity-30 -mb-2">PG</div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-on-surface truncate pr-2">{item.name}</h3>
                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                    {item.icon}
                  </span>
                </div>

                {item.category === 'gear' && (
                  <>
                    <p className="text-sm text-on-surface-variant font-medium mb-4">
                      {t('vault.acquired')}: {item.acquired}
                    </p>
                    <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className={`h-full ${rarity.bar} shadow-glow-sm`}
                        style={{ width: `${item.condition}%` }}
                      />
                    </div>
                    <div className={`mt-2 text-[10px] text-right font-semibold uppercase tracking-widest ${rarity.barText}`}>
                      {item.condition === 100
                        ? t('vault.maxCondition')
                        : `${item.condition}% ${t('vault.condition')}`}
                    </div>
                  </>
                )}

                {item.category === 'playbooks' && (
                  <>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">
                      {t('vault.offensivePlay')}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div
                            className={`h-full ${rarity.bar}`}
                            style={{ width: `${item.mastery}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-on-surface-variant font-medium whitespace-nowrap">
                        {t('vault.mastery')}: {item.mastery}%
                      </span>
                    </div>
                  </>
                )}

                {item.category === 'playerCards' && (
                  <div className="flex items-center gap-6 text-sm text-on-surface-variant font-medium mt-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-outline">OVR</span>
                      <span className="font-bold text-on-surface">{item.ovr}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-outline">POT</span>
                      <span className="font-bold text-primary">{item.pot}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Load More */}
      <div className="mt-12 flex justify-center pb-20">
        <button className="px-6 py-2.5 rounded-full border border-primary/20 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-medium text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">refresh</span>
          {t('vault.loadMore')}
        </button>
      </div>
    </div>
  );
};

export default Vault;
