import { useCopy } from '../i18n';
import { LanguageToggle } from './LanguageToggle';

const phoneHref = 'tel:+15146974587';

export interface SiteHeaderProps {
  logoSrc?: string;
  /**
   * Prefix for the in-page anchor links so the same header works away from the
   * home page. Default "" keeps them as `#menu` (home); pass "/" on a sub-route
   * (e.g. the ordering slice) so they become `/#menu` and navigate back home.
   */
  hrefBase?: string;
}

/**
 * The shared Gigi site header (brand + primary nav + language toggle + call CTA).
 * Used by the home page AND rendered by the host above every slice so the whole
 * app wears one consistent header. Styling lives in gigi-static (`.home-header`).
 */
export function SiteHeader({ logoSrc = '/GigiLogo.png', hrefBase = '' }: SiteHeaderProps) {
  const t = useCopy();
  return (
    <header className="home-header">
      <a className="home-brand" href={`${hrefBase}#top`} aria-label="Gigi Pizzeria">
        <img src={logoSrc} alt="" />
        <span><strong>Gigi</strong><small>{t.brand.sub}</small></span>
      </a>
      <nav className="home-nav" aria-label="Primary">
        <a href={`${hrefBase}#menu`}>{t.nav.menu}</a>
        <a href={`${hrefBase}#delivery`}>{t.nav.delivery}</a>
        <a href={`${hrefBase}#visit`}>{t.nav.visit}</a>
      </nav>
      <div className="home-header-actions">
        <LanguageToggle />
        <a className="home-header-cta" href={phoneHref}>{t.nav.order}</a>
      </div>
    </header>
  );
}
