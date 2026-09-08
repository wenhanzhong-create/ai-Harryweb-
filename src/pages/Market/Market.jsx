import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';
import { MARKET_ITEMS } from '../../data/market';

const FILTERS = ['all', 'jerseys', 'cards', 'shoes', 'accessories'];

// Static Tailwind classes per item tag (never interpolate class names)
const TAG_CLASSES = {
  legendary: 'text-primary',
  holo: 'text-tertiary',
  footwear: 'text-secondary',
};

const Market = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState('all');

  const items = filter === 'all'
    ? MARKET_ITEMS
    : MARKET_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="relative z-10 px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Page Header & Filters */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-2 tracking-tight">
            {t('market.title')}
          </h1>
          <p className="text-on-surface-variant">{t('market.subtitle')}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {FILTERS.map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                filter === key
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'glass-panel text-on-surface-variant hover:text-on-surface hover:bg-surface-bright/50'
              }`}
            >
              {t(`market.filters.${key}`)}
            </button>
          ))}
          <button
            aria-label={t('common.filter')}
            className="flex items-center justify-center w-10 h-10 rounded-full glass-panel text-on-surface-variant hover:text-on-surface ml-2"
          >
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-in">
        {items.map((item) =>
          item.featured ? (
            /* Highlighted Item — spans 2 columns */
            <Link
              key={item.id}
              to={`/market/${item.id}`}
              className="md:col-span-2 glass-panel glass-sheen rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer shadow-glow relative"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <div className="bg-surface-dim/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-primary/20 text-xs font-bold text-primary">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  {t('market.verified')}
                </div>
              </div>

              <div className="h-64 md:h-80 w-full relative overflow-hidden bg-surface-container-lowest">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent" />
              </div>

              <div className="p-5 flex justify-between items-end absolute bottom-0 left-0 w-full">
                <div>
                  <div className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">
                    {t(`market.tag.${item.tag}`)}
                  </div>
                  <h3 className="text-xl font-bold text-on-surface">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold border border-primary/10 text-on-surface">
                      {item.seller.slice(1, 3).toUpperCase()}
                    </div>
                    <span className="text-sm text-on-surface-variant">{item.seller}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-error font-black text-2xl tracking-tighter">
                    {item.price.toLocaleString()}{' '}
                    <span className="text-sm font-medium">{t(`market.${item.currency}`)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            /* Standard Card Item */
            <Link
              key={item.id}
              to={`/market/${item.id}`}
              className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer shadow-glow flex flex-col"
            >
              <div className="relative h-48 w-full p-4 flex items-center justify-center">
                <div className="absolute top-3 right-3 bg-surface-dim/80 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 border border-primary/20 text-[10px] font-bold text-primary">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-primary/10 mt-auto bg-surface-dim/30">
                <div className={`text-[10px] mb-1 font-semibold uppercase tracking-wider ${TAG_CLASSES[item.tag]}`}>
                  {t(`market.tag.${item.tag}`)}
                </div>
                <h3 className="font-bold text-on-surface text-sm truncate">{item.name}</h3>
                <div className="flex justify-between items-center mt-3">
                  <div className="w-5 h-5 rounded-full bg-surface-bright flex items-center justify-center text-[10px] font-bold border border-primary/10 text-on-surface">
                    {item.seller.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="text-error font-bold">
                    {item.price.toLocaleString()}{' '}
                    <span className="text-xs">{t(`market.${item.currency}`)}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Market;
