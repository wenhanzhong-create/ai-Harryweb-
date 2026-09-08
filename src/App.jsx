// HashRouter: GitHub Pages static hosting can't rewrite deep-link URLs,
// hash routing keeps /#/hof etc. working on refresh everywhere.
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Editor from './pages/Editor/Editor';
import Library from './pages/Library/Library';
import AIAssistant from './pages/AIAssistant/AIAssistant';
import HallOfFame from './pages/HallOfFame/HallOfFame';
import Market from './pages/Market/Market';
import ProductDetail from './pages/Market/ProductDetail';
import Vault from './pages/Vault/Vault';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import About from './pages/About/About';

import './styles/globals.css';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="editor" element={<Editor />} />
            <Route path="library" element={<Library />} />
            <Route path="ai" element={<AIAssistant />} />
            <Route path="hof" element={<HallOfFame />} />
            <Route path="market" element={<Market />} />
            <Route path="market/:id" element={<ProductDetail />} />
            <Route path="vault" element={<Vault />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
