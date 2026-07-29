import { useLang } from '../i18n';

// A simple EN | FR toggle. Shows the language you'll switch TO.
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  const next = lang === 'en' ? 'fr' : 'en';
  return (
    <button
      type="button"
      className={`gigi-lang-toggle ${className}`.trim()}
      onClick={() => setLang(next)}
      aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
      lang={next}
    >
      {next.toUpperCase()}
    </button>
  );
}
