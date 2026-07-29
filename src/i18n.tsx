import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from '@esm.sh/react';
import copy from './copy/copy.json';

export type Lang = 'en' | 'fr';
// The shape of one language's copy — both languages share it.
export type Copy = (typeof copy)['en'];

const STORAGE_KEY = 'gigi-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    /* localStorage may be unavailable */
  }
  const nav = (typeof navigator !== 'undefined' && navigator.language) || 'en';
  return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

/**
 * Wraps the app so every component (host, Home, and slices — they share this one
 * @gigi/ux module) reads the same language. Persists the choice to localStorage
 * and keeps <html lang> in sync.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: (copy as Record<Lang, Copy>)[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): { lang: Lang; setLang: (lang: Lang) => void } {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>');
  return { lang: ctx.lang, setLang: ctx.setLang };
}

/** Returns the copy strings for the current language. */
export function useCopy(): Copy {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useCopy must be used within <LanguageProvider>');
  return ctx.t;
}
