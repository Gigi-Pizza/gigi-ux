import { Button } from './Button';

const defaultLogoSrc = new URL(/* @vite-ignore */ './GigiLogo.png', import.meta.url).href;

export interface BrandHeaderProps {
  brandName?: string;
  language?: string;
  logoSrc?: string;
  onBack?: () => void;
  onLanguageChange?: () => void;
}

export function BrandHeader({
  brandName = 'Gigi Pizzeria',
  language = 'FR',
  logoSrc = defaultLogoSrc,
  onBack,
  onLanguageChange,
}: BrandHeaderProps) {
  return (
    <header className="gigi-brand-header">
      <Button variant="subtle" size="small" aria-label="Back to restaurant website" onClick={onBack}>‹</Button>
      <img className="gigi-brand-header__logo" src={logoSrc} alt="Gigi Pizzeria" />
      <span className="gigi-brand-header__name">{brandName}</span>
      <button className="gigi-language" type="button" onClick={onLanguageChange}>{language}</button>
    </header>
  );
}
