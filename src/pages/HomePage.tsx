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

export function HomePage({
  logoSrc = '/GigiLogo.png',
  pizzaImageSrc = '/Gigi-pizza-menu2-2025.jpg',
  menuPageOneSrc = '/Gigi-pizza-menu2-2025.jpg',
  menuPageTwoSrc = '/Gigi-pizza-menu1-2025.jpg',
  menuPdfHref = '/Gigi-pizza-menu.pdf',
}: HomePageProps) {
  return (
    <div className="home-page">
      <a className="home-skip-link" href="#main-content">Skip to content</a>

      <header className="home-header">
        <a className="home-brand" href="#top" aria-label="Gigi Pizzeria home">
          <img src={logoSrc} alt="" />
          <span><strong>Gigi</strong><small>Pizzeria · Pointe-Claire</small></span>
        </a>
        <nav className="home-nav" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#delivery">Delivery</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="home-header-cta" href={phoneHref}>Call to order</a>
      </header>

      <main id="main-content">
        <section className="home-hero" id="top">
          <div className="home-hero__copy">
            <span className="home-kicker">Pointe-Claire · Depuis 1970</span>
            <h1>The West Island’s neighbourhood pizzeria.</h1>
            <p>Pizza, submarines, pasta and more—made for takeout and delivery from our Pointe-Claire kitchen.</p>
            <div className="home-actions">
              <a className="home-button home-button--primary" href={phoneHref}><span>Call {phoneDisplay}</span><span aria-hidden="true">→</span></a>
              <a className="home-button home-button--secondary" href="#menu">Explore the menu</a>
            </div>
            <ul className="home-service-list" aria-label="Available services">
              <li><span>01</span> Takeout</li>
              <li><span>02</span> Delivery</li>
              <li><span>03</span> West Island</li>
            </ul>
          </div>

          <div className="home-hero__visual" aria-label="Gigi pizza">
            <img src={pizzaImageSrc} alt="A cheese-covered Gigi pizza" />
            <div className="home-hero__logo-card">
              <img src={logoSrc} alt="Gigi Pizzeria" />
            </div>
            <div className="home-hero__address-card">
              <span>Find us in Pointe-Claire</span>
              <strong>302 Lakeshore</strong>
            </div>
          </div>
        </section>

        <section className="home-order-strip" aria-label="Order information">
          <p>Call for takeout or delivery</p>
          <a href={phoneHref}>{phoneDisplay}</a>
          <span>Pizza · Subs · Pasta · Extras · Drinks</span>
        </section>

        <section className="home-section home-menu-section" id="menu">
          <div className="home-section-heading">
            <div>
              <span className="home-kicker">Our menu</span>
              <h2>Local favourites, built your way.</h2>
            </div>
            <p>Choose from classic pizzas, signature submarines, baked pasta, poutine, fries and drinks. Pizza is available in four sizes and submarines in three.</p>
          </div>

          <div className="home-menu-categories" aria-label="Menu categories">
            {[
              ['Pizza', 'Small 10” · Medium 12” · Large 14” · X-Large 16”'],
              ['Submarines', '7” · 10” · 14”'],
              ['Pasta', 'Spaghetti · Lasagna · Baked favourites'],
              ['Extras', 'Poutine · Fries · Salad · Drinks'],
            ].map(([title, detail], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>

          <div className="home-menu-preview">
            <a href={menuPageOneSrc} target="_blank" rel="noreferrer" aria-label="Open pizza menu page">
              <img src={menuPageOneSrc} alt="Gigi Pizzeria pizza menu" />
              <span>Pizza menu <b aria-hidden="true">↗</b></span>
            </a>
            <a href={menuPageTwoSrc} target="_blank" rel="noreferrer" aria-label="Open submarines, pasta, extras and drinks menu page">
              <img src={menuPageTwoSrc} alt="Gigi Pizzeria submarines, pasta, extras and drinks menu" />
              <span>Subs, pasta & more <b aria-hidden="true">↗</b></span>
            </a>
          </div>

          <div className="home-menu-actions">
            <a className="home-button home-button--primary" href={menuPdfHref} target="_blank" rel="noreferrer">View the full menu</a>
            <a className="home-text-link" href={phoneHref}>Ready to order? Call {phoneDisplay} <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="home-delivery" id="delivery">
          <div className="home-delivery__copy">
            <span className="home-kicker home-kicker--light">Delivery area</span>
            <h2>Serving the West Island.</h2>
            <p>Delivery zones include Pointe-Claire, Beaconsfield, Baie-D’Urfé, Kirkland and Dorval.</p>
            <a className="home-button home-button--gold" href={phoneHref}>Call for delivery <span aria-hidden="true">→</span></a>
          </div>
          <ul className="home-zone-list">
            {['Pointe-Claire', 'Beaconsfield', 'Baie-D’Urfé', 'Kirkland', 'Dorval'].map((zone, index) => (
              <li key={zone}><span>{String(index + 1).padStart(2, '0')}</span>{zone}</li>
            ))}
          </ul>
        </section>

        <section className="home-section home-visit" id="visit">
          <div className="home-visit__card">
            <span className="home-kicker">Visit Gigi</span>
            <h2>Right in the heart of Pointe-Claire.</h2>
            <address>302 Chemin du Bord-du-Lac-Lakeshore<br />Pointe-Claire, QC H9S 4L5</address>
            <div className="home-visit__actions">
              <a className="home-button home-button--primary" href={mapHref} target="_blank" rel="noreferrer">Open in Google Maps</a>
              <a className="home-text-link" href={phoneHref}>{phoneDisplay}</a>
            </div>
          </div>
          <a className="home-map-card" href={mapHref} target="_blank" rel="noreferrer" aria-label="Open Gigi Pizzeria in Google Maps">
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
            <span className="home-kicker home-kicker--light">Takeout or delivery</span>
            <h2>Good pizza is one call away.</h2>
          </div>
          <a className="home-button home-button--gold" href={phoneHref}>{phoneDisplay}</a>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-brand home-brand--footer">
          <img src={logoSrc} alt="" />
          <span><strong>Gigi Pizzeria</strong><small>Restaurant</small></span>
        </div>
        <div><strong>Order</strong><a href={phoneHref}>{phoneDisplay}</a><a href={menuPdfHref} target="_blank" rel="noreferrer">View menu</a></div>
        <div><strong>Visit</strong><a href={mapHref} target="_blank" rel="noreferrer">302 Lakeshore<br />Pointe-Claire, QC H9S 4L5</a></div>
        <p>© {new Date().getFullYear()} Gigi Pizzeria</p>
      </footer>
    </div>
  );
}
