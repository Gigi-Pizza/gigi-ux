import type { MenuCategory } from '../types';
import { Button } from './Button';
import { MenuCategoryIcon, type MenuCategoryIconType } from './MenuCategoryIcon';

const categoryIcons: Record<MenuCategory, MenuCategoryIconType> = {
  Pizza: 'pizza',
  Subs: 'submarine',
  Pasta: 'pasta',
  Extras: 'extras',
  Drinks: 'drinks',
};

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
          leadingIcon={<MenuCategoryIcon type={categoryIcons[category]} />}
          aria-pressed={category === active}
          onClick={() => onChange?.(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  );
}
