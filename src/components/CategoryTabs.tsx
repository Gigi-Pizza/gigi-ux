import type { MenuCategory } from '../types';
import { Button } from './Button';

export interface CategoryTabsProps {
  categories?: MenuCategory[];
  active: MenuCategory;
  onChange?: (category: MenuCategory) => void;
}

export function CategoryTabs({
  categories = ['Pizza', 'Subs', 'Pasta', 'Extras', 'Drinks'],
  active,
  onChange,
}: CategoryTabsProps) {
  return (
    <nav className="gigi-category-tabs" aria-label="Menu categories">
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === active ? 'primary' : 'subtle'}
          size="small"
          aria-pressed={category === active}
          onClick={() => onChange?.(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  );
}
