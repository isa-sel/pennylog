export type Category = 'food' | 'transport' | 'shopping' | 'bills' | 'other';

export type Expense = {
  id: string;
  title: string;
  amount: number; // in KM
  category: Category;
  date: string; // '2026-11-02'
  note?: string;
  receiptUrl?: string;
};