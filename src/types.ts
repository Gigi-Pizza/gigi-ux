export type MenuCategory = 'Pizza' | 'Subs' | 'Pasta' | 'Extras' | 'Drinks';

export interface SizeOption {
  id: string;
  label: string;
  price: number;
  quantity: number;
}

export interface InstructionItem {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
}

export interface SummaryLine {
  label: string;
  value: string;
  emphasized?: boolean;
}
