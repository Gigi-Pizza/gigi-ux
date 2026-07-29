// CSS now lives in the sibling gigi-static (Option A); imported here for the
// standalone site preview (see vite.site.config.ts server.fs.allow).
import '../../gigi-static/src/css/ux.css';
import '../../gigi-static/src/css/home.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from './i18n';
import { HomePage } from './pages/HomePage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  </StrictMode>,
);
