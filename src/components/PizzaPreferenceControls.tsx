import type { ComponentProps } from 'react';
import { CycleButton } from './CycleButton';

export type PizzaPreferenceId = 'doneness' | 'cheeseAmount' | 'sauceAmount' | 'crust';
export type PizzaPreferenceValues = Partial<Record<PizzaPreferenceId, string | null>>;

type PreferenceCopy = {
  label: string;
  original: string;
  options: readonly { id: string; label: string }[];
};

const copy: Record<'en' | 'fr', Record<PizzaPreferenceId, PreferenceCopy>> = {
  en: {
    doneness: { label: 'Doneness', original: 'Original', options: [
      { id: 'well-done', label: 'Well done' },
      { id: 'beyond-well-done', label: 'Beyond well done' },
    ] },
    cheeseAmount: { label: 'Cheese', original: 'Original', options: [
      { id: 'easy-cheese', label: 'Easy cheese' },
      { id: 'extra-cheese', label: 'Extra cheese' },
    ] },
    sauceAmount: { label: 'Sauce', original: 'Original', options: [
      { id: 'easy-sauce', label: 'Easy sauce' },
      { id: 'extra-sauce', label: 'Extra sauce' },
    ] },
    crust: { label: 'Crust', original: 'Original', options: [
      { id: 'thin-crust', label: 'Thin crust' },
      { id: 'thick-crust', label: 'Thick crust' },
    ] },
  },
  fr: {
    doneness: { label: 'Cuisson', original: 'Originale', options: [
      { id: 'well-done', label: 'Bien cuite' },
      { id: 'beyond-well-done', label: 'Très bien cuite' },
    ] },
    cheeseAmount: { label: 'Fromage', original: 'Original', options: [
      { id: 'easy-cheese', label: 'Peu de fromage' },
      { id: 'extra-cheese', label: 'Fromage supplémentaire' },
    ] },
    sauceAmount: { label: 'Sauce', original: 'Originale', options: [
      { id: 'easy-sauce', label: 'Peu de sauce' },
      { id: 'extra-sauce', label: 'Sauce supplémentaire' },
    ] },
    crust: { label: 'Croûte', original: 'Originale', options: [
      { id: 'thin-crust', label: 'Croûte mince' },
      { id: 'thick-crust', label: 'Croûte épaisse' },
    ] },
  },
};

export interface PizzaPreferenceButtonProps extends Omit<ComponentProps<typeof CycleButton>, 'label' | 'ariaLabel' | 'originalLabel' | 'options'> {
  lang?: 'en' | 'fr';
}

function preferenceProps(id: PizzaPreferenceId, lang: 'en' | 'fr') {
  const preference = copy[lang][id];
  return {
    label: preference.label,
    ariaLabel: preference.label,
    originalLabel: preference.original,
    originalAriaLabel: preference.original,
    options: preference.options.map((option) => ({ ...option, ariaLabel: option.label })),
  };
}

export function PizzaDonenessButton({ lang = 'en', ...props }: PizzaPreferenceButtonProps) {
  return <CycleButton {...preferenceProps('doneness', lang)} {...props} />;
}

export function PizzaCheeseButton({ lang = 'en', ...props }: PizzaPreferenceButtonProps) {
  return <CycleButton {...preferenceProps('cheeseAmount', lang)} {...props} />;
}

export function PizzaSauceButton({ lang = 'en', ...props }: PizzaPreferenceButtonProps) {
  return <CycleButton {...preferenceProps('sauceAmount', lang)} {...props} />;
}

export function PizzaCrustButton({ lang = 'en', ...props }: PizzaPreferenceButtonProps) {
  return <CycleButton {...preferenceProps('crust', lang)} {...props} />;
}

export interface PizzaPreferenceControlsProps {
  lang?: 'en' | 'fr';
  values?: PizzaPreferenceValues;
  onChange?: (id: PizzaPreferenceId, value: string | null) => void;
  className?: string;
}

export function PizzaPreferenceControls({
  lang = 'en',
  values = {},
  onChange,
  className = '',
}: PizzaPreferenceControlsProps) {
  const shared = (id: PizzaPreferenceId) => ({
    lang,
    value: values[id] ?? null,
    onChange: (value: string | null) => onChange?.(id, value),
  });

  return (
    <div className={`gigi-choice-grid gigi-choice-grid--compact gigi-pizza-preferences ${className}`.trim()} role="group" aria-label={lang === 'fr' ? 'Préférences de pizza' : 'Pizza preferences'}>
      <PizzaDonenessButton {...shared('doneness')} />
      <PizzaCheeseButton {...shared('cheeseAmount')} />
      <PizzaSauceButton {...shared('sauceAmount')} />
      <PizzaCrustButton {...shared('crust')} />
    </div>
  );
}
