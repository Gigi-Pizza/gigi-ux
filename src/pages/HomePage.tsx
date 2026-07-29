import { useCopy } from '../i18n';
import { LanguageToggle } from '../components/LanguageToggle';
import { MenuCategoryIcon, type MenuCategoryIconType } from '../components/MenuCategoryIcon';

export interface HomePageProps {
  logoSrc?: string;
  pizzaImageSrc?: string;
  menuPageOneSrc?: string;
  menuPageTwoSrc?: string;
  menuPdfHref?: string;
}

const phoneDisplay = '(514) 697-4587';
const phoneHref = 'tel:+15146974587';
const mapHref = 'https://goo.gl/maps/hMTYoC9iVwdtvm9NA';
const menuCategoryIcons: readonly MenuCategoryIconType[] = ['pizza', 'submarine', 'pasta', 'extras'];

export function HomePage({
  logoSrc = '/GigiLogo.png',
  pizzaImageSrc = '/Gigi-pizza-menu2-2025.jpg',
  menuPageOneSrc = '/Gigi-pizza-menu2-2025.jpg',
  menuPageTwoSrc = '/Gigi-pizza-menu1-2025.jpg',
  menuPdfHref = '/Gigi-pizza-menu.pdf',
}: HomePageProps) {
  const t = useCopy();

  return (
    <div className="home-page">
      <a className="home-skip-link" href="#main-content">{t.skip}</a>

      <header className="home-header">
        <a className="home-brand" href="#top" aria-label="Gigi Pizzeria">
          <img src={logoSrc} alt="" />
          <span><strong>Gigi</strong><small>{t.brand.sub}</small></span>
        </a>
        <nav className="home-nav" aria-label="Primary">
          <a href="#menu">{t.nav.menu}</a>
          <a href="#delivery">{t.nav.delivery}</a>
          <a href="#visit">{t.nav.visit}</a>
        </nav>
        <div className="home-header-actions">
          <LanguageToggle />
          <a className="home-header-cta" href={phoneHref}>{t.nav.order}</a>
        </div>
      </header>

      <main id="main-content">
        <section className="home-hero" id="top">
          <div className="home-hero__copy">
            <span className="home-kicker">{t.hero.kicker}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <div className="home-actions">
              <a className="home-button home-button--primary" href={phoneHref}><span>{t.actions.call} {phoneDisplay}</span><span aria-hidden="true">→</span></a>
              <a className="home-button home-button--secondary" href="#menu">{t.hero.exploreMenu}</a>
            </div>
            <ul className="home-service-list" aria-label="Services">
              <li><span>01</span> {t.service.takeout}</li>
              <li><span>02</span> {t.service.delivery}</li>
              <li><span>03</span> {t.service.westIsland}</li>
            </ul>
          </div>

          <div className="home-hero__visual">
            <img src={pizzaImageSrc} alt={t.hero.pizzaAlt} />
            <div className="home-hero__logo-card">
              <img src={logoSrc} alt="Gigi Pizzeria" />
            </div>
            <div className="home-hero__address-card">
              <span>{t.hero.findUs}</span>
              <strong>{t.hero.address}</strong>
            </div>
          </div>
        </section>

        <section className="home-order-strip" aria-label="Order">
          <p>{t.orderStrip.label}</p>
          <a href={phoneHref}>{phoneDisplay}</a>
          <span>{t.orderStrip.items}</span>
        </section>

        <section className="home-section home-menu-section" id="menu">
          <div className="home-section-heading">
            <div>
              <span className="home-kicker">{t.menu.kicker}</span>
              <h2>{t.menu.title}</h2>
            </div>
            <p>{t.menu.desc}</p>
          </div>

          <div className="home-menu-categories" aria-label="Menu categories">
            {t.menu.categories.map((cat, index) => (
              <article key={cat.title}>
                <MenuCategoryIcon type={menuCategoryIcons[index] ?? 'extras'} />
                <h3>{cat.title}</h3>
                <p>{cat.detail}</p>
              </article>
            ))}
          </div>

          <div className="home-menu-preview">
            <a href={menuPageOneSrc} target="_blank" rel="noreferrer" aria-label={t.menu.pizzaMenuLabel}>
              <img src={menuPageOneSrc} alt={t.menu.pizzaMenuAlt} />
              <span>{t.menu.pizzaMenuLabel} <b aria-hidden="true">↗</b></span>
            </a>
            <a href={menuPageTwoSrc} target="_blank" rel="noreferrer" aria-label={t.menu.subsLabel}>
              <img src={menuPageTwoSrc} alt={t.menu.subsAlt} />
              <span>{t.menu.subsLabel} <b aria-hidden="true">↗</b></span>
            </a>
          </div>

          <div className="home-menu-actions">
            <a className="home-button home-button--primary" href={menuPdfHref} target="_blank" rel="noreferrer">{t.menu.viewFull}</a>
            <a className="home-text-link" href={phoneHref}>{t.menu.readyToOrder} {phoneDisplay} <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="home-delivery" id="delivery">
          <div className="home-delivery__copy">
            <span className="home-kicker home-kicker--light">{t.delivery.kicker}</span>
            <h2>{t.delivery.title}</h2>
            <p>{t.delivery.desc}</p>
            <a className="home-button home-button--gold" href={phoneHref}>{t.delivery.cta} <span aria-hidden="true">→</span></a>
          </div>
          <ul className="home-zone-list">
            {t.zones.map((zone, index) => (
              <li key={zone}><span>{String(index + 1).padStart(2, '0')}</span>{zone}</li>
            ))}
          </ul>
        </section>

        <section className="home-section home-visit" id="visit">
          <div className="home-visit__card">
            <span className="home-kicker">{t.visit.kicker}</span>
            <h2>{t.visit.title}</h2>
            <address>302 Chemin du Bord-du-Lac-Lakeshore<br />Pointe-Claire, QC H9S 4L5</address>
            <div className="home-visit__actions">
              <a className="home-button home-button--primary" href={mapHref} target="_blank" rel="noreferrer">{t.visit.maps}</a>
              <a className="home-text-link" href={phoneHref}>{phoneDisplay}</a>
            </div>
          </div>
          <a className="home-map-card" href={mapHref} target="_blank" rel="noreferrer" aria-label={t.visit.maps}>
            <span className="home-map-card__pin" aria-hidden="true">●</span>
            <span className="home-map-card__road home-map-card__road--one" />
            <span className="home-map-card__road home-map-card__road--two" />
            <strong>Gigi Pizzeria</strong>
            <small>302 Lakeshore · Pointe-Claire</small>
          </a>
        </section>

        <section className="home-final-cta">
          <img src={logoSrc} alt="" />
          <div>
            <span className="home-kicker home-kicker--light">{t.finalCta.kicker}</span>
            <h2>{t.finalCta.title}</h2>
          </div>
          <a className="home-button home-button--gold" href={phoneHref}>{phoneDisplay}</a>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-brand home-brand--footer">
          <img src={logoSrc} alt="" />
          <span><strong>Gigi Pizzeria</strong><small>{t.footer.brandSub}</small></span>
        </div>
        <div><strong>{t.footer.order}</strong><a href={phoneHref}>{phoneDisplay}</a><a href={menuPdfHref} target="_blank" rel="noreferrer">{t.footer.viewMenu}</a></div>
        <div><strong>{t.footer.visit}</strong><a href={mapHref} target="_blank" rel="noreferrer">302 Lakeshore<br />Pointe-Claire, QC H9S 4L5</a></div>
        <p>© {new Date().getFullYear()} Gigi Pizzeria</p>
      </footer>
    </div>
  );
}
