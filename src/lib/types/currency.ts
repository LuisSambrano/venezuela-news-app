export interface Currency {
  code: string;
  name: string;
  buy: number;
  sell: number;
  variation?: number; // percentage change (e.g., 0.5 for +0.5%)
  timestamp: string; // ISO string
}

export type CurrencyFilter = "ALL" | "FAVORITES";
