import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../../context/LanguageContext';
import { MARKET_ITEMS } from '../../data/market';

const SIZES = ['8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

const ProductDetail = () => {
  const { t } = useI18n();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('10.5');

  const item = MARKET_ITEMS.find((m) => m.id === id);

  if (!item) {
    return (
      <div className="relative z-10 px-4 md:px-8 py-24 max-w-7xl mx-auto text-center">
        <span className="material-symbols-outlined text-error text-6xl mb-4">search_off</span>
        <h1 className="text-2xl font-bold text-on-surface mb-4">{t('product.notFound')}</h1>
        <Link to="/market" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          {t('product.backToMarket')}
        </Link>
      </div>
    );
  }

  return (
    <div className="relative z-10 px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
        <Link to="/market" className="link-secondary flex items-center gap-1">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t('product.backToMarket')}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="glass-elevated rounded-2xl overflow-hidden relative group">
          <div className="aspect-square w-full bg-surface-container-lowest flex items-center justify-center p-8">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <button className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-full text-sm font-medium text-primary flex items-center gap-2 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[18px]">threed_rotation</span>
            {t('product.view360')}
          </button>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-4">
            {item.badge && (
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold text-primary uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
                {t('product.badge')}
              </div>
            )}
            {item.collection && (
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full glass-panel text-xs font-bold text-tertiary uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">ac_unit</span>
                {t('product.collection')}
              </div>
            )}
          </div>

          {/* Title & Price */}
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-3">
            {item.name}
          </h1>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-black text-primary tracking-tighter">
              ${item.price.toFixed(2)}
            </span>
            <span className="text-sm font-medium text-on-surface-variant">
              {t('market.usd')}
            </span>
            <div className="ml-auto flex items-center gap-1 text-xs font-bold text-primary">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              {t('product.seller')}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">
                {t('product.selectSize')}
              </h3>
              <button className="text-xs text-on-surface-variant hover:text-primary transition-colors underline">
                {t('product.sizeGuide')}
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-primary/20 text-primary border border-primary/40'
                      : 'glass-panel text-on-surface-variant hover:text-on-surface hover:border-primary/20'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button className="btn-secondary flex-1 py-3.5 px-6 flex items-center justify-center gap-2 font-semibold">
              <span className="material-symbols-outlined">add_shopping_cart</span>
              {t('product.addToCart')}
            </button>
            <button className="btn-primary flex-1 py-3.5 px-6 flex items-center justify-center gap-2 font-semibold shadow-glow">
              <span className="material-symbols-outlined">bolt</span>
              {t('product.buyNow')}
            </button>
          </div>

          {/* Specs Grid */}
          {item.specs && (
            <div className="glass-panel rounded-xl p-6 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">speed</span>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    {t('product.specs.rating')}
                  </div>
                  <div className="font-bold text-on-surface">{t('product.specs.ratingValue')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">shield</span>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    {t('product.specs.protection')}
                  </div>
                  <div className="font-bold text-on-surface">{t('product.specs.protectionValue')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">scale</span>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    {t('product.specs.weight')}
                  </div>
                  <div className="font-bold text-on-surface">{t('product.specs.weightValue')}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">timeline</span>
                <div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                    {t('product.specs.traction')}
                  </div>
                  <div className="font-bold text-on-surface">{t('product.specs.tractionValue')}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
