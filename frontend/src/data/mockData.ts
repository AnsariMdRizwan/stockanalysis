export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  chart: { time: string; price: number }[];
}

export const stockData: StockData[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 172.45,
    change: 2.34,
    changePercent: 1.37,
    volume: 78945612,
    marketCap: 2800000000000,
    chart: Array.from({ length: 20 }, (_, i) => ({
      time: `${i + 1}:00`,
      price: 170 + Math.random() * 5,
    })),
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 415.32,
    change: -1.23,
    changePercent: -0.30,
    volume: 45678912,
    marketCap: 3100000000000,
    chart: Array.from({ length: 20 }, (_, i) => ({
      time: `${i + 1}:00`,
      price: 414 + Math.random() * 3,
    })),
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.56,
    change: 0.78,
    changePercent: 0.55,
    volume: 34567891,
    marketCap: 1800000000000,
    chart: Array.from({ length: 20 }, (_, i) => ({
      time: `${i + 1}:00`,
      price: 141 + Math.random() * 4,
    })),
  },
];

export const marketIndices = [
  {
    name: 'S&P 500',
    value: 5021.34,
    change: 15.23,
    changePercent: 0.30,
  },
  {
    name: 'NASDAQ',
    value: 15834.67,
    change: 45.89,
    changePercent: 0.29,
  },
  {
    name: 'DOW JONES',
    value: 38654.12,
    change: -23.45,
    changePercent: -0.06,
  },
];

export const sectors = [
  { name: 'Technology', performance: 2.3 },
  { name: 'Healthcare', performance: -0.8 },
  { name: 'Finance', performance: 1.2 },
  { name: 'Energy', performance: -1.5 },
  { name: 'Consumer', performance: 0.7 },
]; 