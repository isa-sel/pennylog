import type { Expense } from '@/types';

export const expenses: Expense[] = [
  {
    id: '1',
    title: 'Burek and yogurt',
    amount: 3.5,
    category: 'food',
    date: '2026-11-02',
    receiptUrl: 'https://picsum.photos/seed/burek/600/400',
  },
  {
    id: '2',
    title: 'Bus ticket',
    amount: 1.8,
    category: 'transport',
    date: '2026-11-02',
    receiptUrl: 'https://picsum.photos/seed/bus/600/400',
  },
  {
    id: '3',
    title: 'Phone bill',
    amount: 25,
    category: 'bills',
    date: '2026-11-01',
    note: 'Monthly plan',
    receiptUrl: 'https://picsum.photos/seed/phone/600/400',
  },
  {
    id: '4',
    title: 'Notebook and pens',
    amount: 6.4,
    category: 'shopping',
    date: '2026-10-30',
    receiptUrl: 'https://picsum.photos/seed/notebook/600/400',
  },
  {
    id: '5',
    title: 'Groceries',
    amount: 32.4,
    category: 'food',
    date: '2026-10-29',
    note: 'Weekly shop',
  },
];