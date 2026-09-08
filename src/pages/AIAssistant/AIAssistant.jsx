import { useState } from 'react';
import { useI18n } from '../../context/LanguageContext';
import GlassCard from '../../components/common/GlassCard';

const AIAssistant = () => {
  const { t } = useI18n();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help you create better content today?' }
  ]);
  const [input, setInput] = useState('');

  const features = [
    {
      icon: 'auto_awesome',
      title: t('ai.features.generate'),
      description: 'Generate new content ideas and drafts',
      colorClass: 'bg-primary/20',
      iconClass: 'text-primary',
    },
    {
      icon: 'edit',
      title: t('ai.features.improve'),
      description: 'Enhance and refine your existing content',
      colorClass: 'bg-secondary/20',
      iconClass: 'text-secondary',
    },
    {
      icon: 'translate',
      title: t('ai.features.translate'),
      description: 'Translate content to multiple languages',
      colorClass: 'bg-tertiary/20',
      iconClass: 'text-tertiary',
    },
    {
      icon: 'summarize',
      title: t('ai.features.summarize'),
      description: 'Create concise summaries of long text',
      colorClass: 'bg-primary/20',
      iconClass: 'text-primary',
    },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: 'I understand you need help with "' + input + '". Let me assist you with that...'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="relative z-10 p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-on-surface mb-2">
          {t('ai.title')}
        </h1>
        <p className="text-lg text-on-surface-variant">
          {t('ai.subtitle')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <GlassCard
            key={index}
            elevated
            interactive
            className="text-center group"
          >
            <div className={`w-16 h-16 rounded-2xl ${feature.colorClass} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <span className={`material-symbols-outlined text-3xl ${feature.iconClass}`}>
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

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-2">
          <GlassCard elevated className="h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-primary/20 text-on-surface rounded-2xl rounded-tr-sm'
                      : 'glass-panel text-on-surface rounded-2xl rounded-tl-sm'
                  } p-4`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-primary/10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('ai.prompt')}
                  className="flex-1 bg-surface-bright/50 border border-primary/10 rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/30 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-primary px-6 rounded-xl flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  {t('ai.send')}
                </button>
              </div>
            </form>
          </GlassCard>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-on-surface mb-4">
            Quick Actions
          </h3>

          <button className="w-full glass-panel p-4 rounded-xl text-left hover:bg-surface-bright/50 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
              </div>
              <span className="font-medium text-sm text-on-surface">Generate Ideas</span>
            </div>
            <p className="text-xs text-on-surface-variant">Get creative content suggestions</p>
          </button>

          <button className="w-full glass-panel p-4 rounded-xl text-left hover:bg-surface-bright/50 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary">spellcheck</span>
              </div>
              <span className="font-medium text-sm text-on-surface">Check Grammar</span>
            </div>
            <p className="text-xs text-on-surface-variant">Improve grammar and style</p>
          </button>

          <button className="w-full glass-panel p-4 rounded-xl text-left hover:bg-surface-bright/50 transition-all group">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">title</span>
              </div>
              <span className="font-medium text-sm text-on-surface">Generate Titles</span>
            </div>
            <p className="text-xs text-on-surface-variant">Create catchy headlines</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
