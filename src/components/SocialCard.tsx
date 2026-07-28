import { useId, type SVGProps } from '@esm.sh/react';

export type SocialCardLocale = 'en' | 'fr';

export interface SocialCardProps extends Omit<SVGProps<SVGSVGElement>, 'title'> {
  locale?: SocialCardLocale;
  brandTitle?: string;
  tagline?: string | readonly string[];
  phone?: string;
  logoSrc?: string;
  photoSrc?: string;
  accessibleTitle?: string;
  accessibleDescription?: string;
}

const localizedCopy: Record<SocialCardLocale, {
  tagline: readonly string[];
  title: string;
  description: string;
}> = {
  en: {
    tagline: ['THE WEST ISLAND’S', 'NEIGHBOURHOOD PIZZERIA'],
    title: 'Gigi Pizzeria social card',
    description: "The West Island's neighbourhood pizzeria.",
  },
  fr: {
    tagline: ['LA PIZZERIA DE QUARTIER', 'DE L’OUEST-DE-L’ÎLE'],
    title: 'Carte promotionnelle de Gigi Pizzeria',
    description: 'La pizzeria de quartier de l’Ouest-de-l’Île.',
  },
};

function normalizeTagline(tagline: string | readonly string[]) {
  return typeof tagline === 'string' ? [tagline] : tagline;
}

export function SocialCard({
  locale = 'en',
  brandTitle = 'GIGI PIZZERIA',
  tagline,
  phone = '(514) 697-4587',
  logoSrc = '/GigiLogo.png',
  photoSrc = '/Gigi-pizza-menu2-2025.jpg',
  accessibleTitle,
  accessibleDescription,
  className = '',
  ...props
}: SocialCardProps) {
  const copy = localizedCopy[locale];
  const taglineLines = normalizeTagline(tagline ?? copy.tagline);
  const instanceId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const titleId = `gigi-social-title-${instanceId}`;
  const descriptionId = `gigi-social-description-${instanceId}`;
  const backgroundId = `gigi-social-background-${instanceId}`;
  const shadeId = `gigi-social-shade-${instanceId}`;
  const clipId = `gigi-social-photo-clip-${instanceId}`;
  const shadowId = `gigi-social-logo-shadow-${instanceId}`;

  return (
    <svg
      {...props}
      className={`gigi-social-card ${className}`.trim()}
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      role="img"
      aria-labelledby={`${titleId} ${descriptionId}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={titleId}>{accessibleTitle ?? copy.title}</title>
      <desc id={descriptionId}>{accessibleDescription ?? `${copy.description} ${phone}`}</desc>

      <defs>
        <linearGradient id={backgroundId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#731316" />
          <stop offset="1" stopColor="#4d090b" />
        </linearGradient>
        <linearGradient id={shadeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4d090b" stopOpacity="0.42" />
          <stop offset="0.35" stopColor="#4d090b" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d="M625 0H1200V630H585C651 514 683 396 676 278C669 157 633 65 558 0Z" />
        </clipPath>
        <filter id={shadowId} x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="9" stdDeviation="11" floodColor="#240304" floodOpacity="0.36" />
        </filter>
      </defs>

      <rect width="1200" height="630" fill={`url(#${backgroundId})`} />

      <g clipPath={`url(#${clipId})`}>
        <image
          data-layer="food-photo"
          href={photoSrc}
          x="545"
          y="-32"
          width="720"
          height="694"
          preserveAspectRatio="xMidYMid slice"
        />
        <rect x="545" width="655" height="630" fill={`url(#${shadeId})`} />
      </g>

      <g filter={`url(#${shadowId})`}>
        <circle cx="159" cy="142" r="107" fill="#fffaf0" stroke="#e7b93f" strokeWidth="4" />
        <image
          data-layer="brand-logo"
          href={logoSrc}
          x="67"
          y="50"
          width="184"
          height="184"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      <g data-layer="editable-copy" fill="#fffaf0" fontFamily="DM Sans, Helvetica Neue, Arial, sans-serif">
        <text data-copy="brand-title" x="52" y="330" fontSize="64" fontWeight="800" letterSpacing="-2">
          {brandTitle}
        </text>
        <rect x="54" y="356" width="86" height="5" rx="2.5" fill="#e7b93f" />
        <text data-copy="tagline" x="54" y="405" fontSize="27" fontWeight="700" letterSpacing="0.4">
          {taglineLines.map((line, index) => (
            <tspan key={`${line}-${index}`} x="54" dy={index === 0 ? 0 : 36}>{line}</tspan>
          ))}
        </text>
        <text data-copy="phone" x="52" y="548" fontSize="54" fontWeight="800" letterSpacing="1">
          {phone}
        </text>
      </g>
    </svg>
  );
}
