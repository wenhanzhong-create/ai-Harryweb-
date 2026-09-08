import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const Editor = () => {
  const { t } = useI18n();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const toolbarButtons = [
    { icon: 'format_bold', label: 'Bold' },
    { icon: 'format_italic', label: 'Italic' },
    { icon: 'format_underlined', label: 'Underline' },
    { icon: 'format_list_bulleted', label: 'Bullet List' },
    { icon: 'format_list_numbered', label: 'Numbered List' },
    { icon: 'format_quote', label: 'Quote' },
    { icon: 'link', label: 'Link' },
    { icon: 'image', label: 'Image' },
  ];

  const aiFeatures = [
    { icon: 'auto_awesome', label: t('ai.features.generate'), colorClass: 'bg-primary/20', iconClass: 'text-primary' },
    { icon: 'edit', label: t('ai.features.improve'), colorClass: 'bg-secondary/20', iconClass: 'text-secondary' },
    { icon: 'translate', label: t('ai.features.translate'), colorClass: 'bg-tertiary/20', iconClass: 'text-tertiary' },
    { icon: 'summarize', label: t('ai.features.summarize'), colorClass: 'bg-primary/20', iconClass: 'text-primary' },
  ];

  return (
    <div className="relative z-10 h-full flex">
      {/* Main Editor Area */}
      <div className="flex-1 p-6 lg:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-black text-on-surface mb-2">
              {t('editor.title')}
            </h1>
            <p className="text-sm text-on-surface-variant">
              Create and edit your content
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary px-6 py-3 flex items-center gap-2">
              <span className="material-symbols-outlined">save</span>
              {t('editor.save')}
            </button>
            <button className="btn-primary px-6 py-3 flex items-center gap-2 shadow-glow">
              <span className="material-symbols-outlined">publish</span>
              {t('editor.publish')}
            </button>
          </div>
        </div>

        {/* Editor */}
        <GlassCard elevated className="h-full flex flex-col">
          {/* Toolbar */}
          <div className="flex items-center gap-1 p-2 border-b border-primary/10 overflow-x-auto">
            {toolbarButtons.map((button, index) => (
              <button
                key={index}
                className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-200"
                title={button.label}
              >
                <span className="material-symbols-outlined text-lg">{button.icon}</span>
              </button>
            ))}
            <div className="w-px h-6 bg-primary/20 mx-2" />
            <button className="btn-ghost px-3 py-2 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add_photo_alternate</span>
              <span className="text-sm">{t('editor.insert')}</span>
            </button>
          </div>

          {/* Title Input */}
          <div className="p-6 border-b border-primary/10">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t('editor.title')}
              className="w-full bg-transparent text-2xl font-bold text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none"
            />
          </div>

          {/* Content Area */}
          <div className="flex-1 p-6">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t('editor.content')}
              className="w-full h-full bg-transparent text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none resize-none leading-relaxed"
            />
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-primary/10 text-xs text-on-surface-variant">
            <div className="flex items-center gap-4">
              <span>{content.split(/\s+/).filter(Boolean).length} words</span>
              <span>{content.length} characters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
              <span>Saved</span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* AI Assistant Panel */}
      <div className="hidden xl:block w-80 border-l border-primary/10 p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-on-surface mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">smart_toy</span>
            {t('ai.title')}
          </h2>
          <p className="text-sm text-on-surface-variant">
            {t('ai.subtitle')}
          </p>
        </div>

        {/* AI Features */}
        <div className="space-y-3 mb-6">
          {aiFeatures.map((feature, index) => (
            <button
              key={index}
              className="w-full glass-panel p-4 rounded-lg text-left hover:bg-surface-bright/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${feature.colorClass} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-lg ${feature.iconClass}`}>
                    {feature.icon}
                  </span>
                </div>
                <span className="font-medium text-sm text-on-surface group-hover:text-primary transition-colors">
                  {feature.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* AI Chat */}
        <GlassCard>
          <div className="h-64 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="glass-panel p-3 rounded-lg">
                <p className="text-sm text-on-surface-variant">
                  Hello! I'm your AI writing assistant. How can I help you today?
                </p>
              </div>
            </div>
            <div className="p-3 border-t border-primary/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={t('ai.prompt')}
                  className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
                />
                <button className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Editor;
