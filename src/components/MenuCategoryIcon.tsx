import type { SVGProps } from 'react';

export type MenuCategoryIconType = 'pizza' | 'submarine' | 'pasta' | 'extras';

export interface MenuCategoryIconProps extends SVGProps<SVGSVGElement> {
  type: MenuCategoryIconType;
  label?: string;
}

function PizzaGlyph() {
  return (
    <>
      <circle cx="48" cy="48" r="23" />
      <path d="M48 48 67 35M48 48v23" />
      <circle cx="43" cy="34" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="58" cy="48" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="37" cy="57" r="3.2" fill="currentColor" stroke="none" />
    </>
  );
}

function SubmarineGlyph() {
  return (
    <>
      <path d="M23 47c2-11 11-18 25-18s23 7 25 18H23Z" />
      <path d="M22 54h52c-2 9-11 14-26 14S24 63 22 54Z" />
      <path d="m26 50 9 4 9-4 9 4 9-4 10 4" />
      <path d="m37 37 3-2m8 1 3-2m8 4 3-1" />
    </>
  );
}

function PastaGlyph() {
  return (
    <>
      <path d="M31 31c-5 5 5 8 0 13m16-15c-5 6 5 9 0 15m17-13c-5 5 4 8 0 13" />
      <path d="M24 48h48c0 15-10 23-24 23S24 63 24 48Z" />
      <path d="M30 55c5 4 10-4 15 0s10-4 15 0 8-2 10 0" />
      <path d="M30 72h36" />
    </>
  );
}

function ExtrasGlyph() {
  return (
    <>
      <path d="M24 36h25l-3 34H28l-4-34Z" />
      <path d="m29 36-2-13m9 13V21m7 15 3-12" />
      <path d="M56 38h17l-2 32H58l-2-32Z" />
      <path d="M58 45h13m-6-7 4-11m0 0h7" />
      <path d="M30 53h15" />
    </>
  );
}

const glyphs: Record<MenuCategoryIconType, () => React.JSX.Element> = {
  pizza: PizzaGlyph,
  submarine: SubmarineGlyph,
  pasta: PastaGlyph,
  extras: ExtrasGlyph,
};

export function MenuCategoryIcon({
  type,
  label,
  className = '',
  ...props
}: MenuCategoryIconProps) {
  const Glyph = glyphs[type];
  const accessibility = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': true as const };

  return (
    <svg
      {...props}
      {...accessibility}
      className={`home-menu-category-icon ${className}`.trim()}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      data-icon={type}
    >
      <circle cx="48" cy="48" r="44" fill="var(--home-gold, #f6bd4a)" stroke="var(--home-red, #981b1e)" strokeWidth="6" />
      <circle cx="48" cy="48" r="36.5" fill="none" stroke="var(--home-cream, #fff4dc)" strokeWidth="3" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="var(--home-red, #981b1e)"
      >
        <Glyph />
      </g>
    </svg>
  );
}
