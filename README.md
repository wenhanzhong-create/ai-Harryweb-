# AI Harry Web - Content Creation Platform

A modern content creation platform powered by artificial intelligence, featuring instant bilingual support (English/Chinese), built with React and Vite.

![AI Harry](https://img.shields.io/badge/AI-Harry-Blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge)

## ✨ Features

- 🌍 **Instant Bilingual Support**: Switch between English and Chinese without page reload
- 🎨 **Beautiful Dark Theme**: Based on the GLACIER design system with glassmorphism effects
- ⚡ **Lightning Fast**: Built with Vite for optimal development and production performance
- 📱 **Fully Responsive**: Perfect experience on desktop, tablet, and mobile devices
- 🤖 **AI-Powered**: Content creation tools and intelligent assistance
- 📝 **Rich Editor**: Advanced text editor with AI integration
- 📚 **Content Library**: Organize and manage all your content
- 🎯 **Intuitive Navigation**: Easy-to-use sidebar and bottom navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Clone or navigate to the project
cd ai-harry-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and visit `http://localhost:5173` (or the port shown in terminal).

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
ai-harry-web/
├── public/
│   └── locales/           # Language files (en.json, zh.json)
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/        # Navbar, Sidebar, LanguageSwitcher, etc.
│   │   ├── editor/        # Editor-related components
│   │   └── layout/        # Layout components
│   ├── pages/             # Page components
│   │   ├── Home/          # Landing page
│   │   ├── Dashboard/     # User dashboard
│   │   ├── Editor/        # Content editor
│   │   ├── Library/       # Content library
│   │   ├── AIAssistant/   # AI assistant panel
│   │   ├── Profile/       # User profile
│   │   ├── Settings/      # Settings page
│   │   └── About/         # About page
│   ├── context/           # React Context (LanguageContext)
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles and Tailwind config
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js     # Tailwind configuration with GLACIER colors
└── vite.config.js         # Vite configuration
```

## 🎨 Design System

### Colors (GLACIER Theme)

- **Primary**: `#7dd3fc` (Ice Blue)
- **Secondary**: `#88b4cc` (Light Cyan)
- **Tertiary**: `#c8a0f0` (Purple)
- **Background**: `#0a0e1a` (Deep Navy)
- **Surface**: `#0f1524`
- **Error**: `#ff6b6b`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Icons**: Material Symbols Outlined

### Effects

- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Glow Effects**: Subtle shadows and highlights for depth
- **Smooth Transitions**: Consistent 300ms animations

## 🌐 Internationalization (i18n)

The platform uses a custom i18n system built with React Context:

### Adding New Translations

1. Edit language files in `public/locales/`:
   - `en.json` for English
   - `zh.json` for Chinese

2. Use the `useI18n` hook in components:

```javascript
import { useI18n } from '../context/LanguageContext';

function MyComponent() {
  const { t, language, toggleLanguage } = useI18n();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? '中文' : 'English'}
      </button>
    </div>
  );
}
```

## 📄 Available Pages

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Landing page with platform overview |
| `/dashboard` | Dashboard | User dashboard with stats and activity |
| `/editor` | Editor | Content creation editor with AI assistance |
| `/library` | Library | Content library and management |
| `/ai` | AI Assistant | AI-powered content tools |
| `/profile` | Profile | User profile and account settings |
| `/settings` | Settings | App settings and preferences |
| `/about` | About | About AI Harry and team |

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **Icons**: Material Symbols Outlined
- **Fonts**: Google Fonts (Inter)

## 🔧 Customization

### Modify Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ... other colors
    }
  }
}
```

### Add New Pages

1. Create a new page component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add navigation links in `src/components/common/Navbar.jsx` and `Sidebar.jsx`

## 📝 License

MIT License - feel free to use this project for your own purposes!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**AI Harry Team**

---

Built with ❤️ using React, Vite, and Tailwind CSS
