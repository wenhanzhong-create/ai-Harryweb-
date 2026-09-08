import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import { HALL_OF_FAME_PLAYERS } from '../../data/players';

const FILTERS = ['all', 'legends', 'stars', 'rising'];

// Category badge classes (static — never interpolate)
const CATEGORY_CLASSES = {
  legends: 'border-primary/30 text-primary',
  stars: 'border-secondary/40 text-secondary',
  rising: 'border-tertiary/30 text-tertiary',
};

const HallOfFame = () => {
  const { t, language } = useI18n();
  const [filter, setFilter] = useState('all');

  const players = filter === 'all'
    ? HALL_OF_FAME_PLAYERS
    : HALL_OF_FAME_PLAYERS.filter((p) => p.category === filter);

  return (
    <div className="relative z-10 px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-10 text-center md:text-left md:flex md:items-end md:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="material-symbols-outlined text-primary text-sm">workspace_premium</span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              GLACIER · {HALL_OF_FAME_PLAYERS.length} {t('hof.players')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2 flex items-center gap-3 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary text-4xl">military_tech</span>
            {t('hof.title')}
          </h1>
          <p className="text-on-surface-variant">{t('hof.subtitle')}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center md:justify-end">
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
              {t(`hof.filters.${key}`)}
            </button>
          ))}
        </div>
      </header>

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-in">
        {players.map((player) => (
            <article
              key={player.id}
              className="glass-panel glass-sheen rounded-xl overflow-hidden group hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              {/* Portrait */}
              <div className="relative h-64 overflow-hidden bg-surface-container-lowest">
                <img
                  src={player.image}
                  alt={player.name[language]}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent" />

                {/* Category Badge */}
                <div
                  className={`absolute top-3 right-3 bg-surface-dim/80 backdrop-blur-md px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${CATEGORY_CLASSES[player.category]}`}
                >
                  {t(`hof.filters.${player.category}`)}
                </div>

                {/* GLACIER Icon Badge (featured) */}
                {player.featured && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-surface-dim/90 backdrop-blur-md px-3 py-1 rounded-full border border-primary/40 text-xs font-bold text-primary shadow-glow-sm">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                    {t('hof.icon')}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-on-surface leading-snug">
                    {player.name[language]}
                  </h3>
                  <span className="text-xs text-primary/70 font-semibold whitespace-nowrap">
                    {player.nickname}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 text-sm text-primary font-medium mb-3">
                  <span>{player.team[language]}</span>
                  <span className="text-surface-variant">|</span>
                  <span>{player.position[language]}</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-grow">
                  {player.bio[language]}
                </p>

                {/* Honor Tags */}
                <div className="flex flex-wrap gap-2">
                  {player.tags.map((tag) => (
                    <span
                      key={tag.en}
                      className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full border border-primary/20 font-medium"
                    >
                      {tag[language]}
                    </span>
                  ))}
                </div>
              </div>
            </article>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
