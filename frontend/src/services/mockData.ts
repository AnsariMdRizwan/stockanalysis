import { Stock, StockChartData, MarketOverview } from '../types/stock';

export const mockStocks: Stock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 175.43,
    change: 2.34,
    changePercent: 1.35,
    volume: 52345678,
    marketCap: 2750000000000
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    currentPrice: 142.89,
    change: -1.23,
    changePercent: -0.85,
    volume: 23456789,
    marketCap: 1800000000000
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    currentPrice: 338.11,
    change: 3.45,
    changePercent: 1.03,
    volume: 34567890,
    marketCap: 2500000000000
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    currentPrice: 145.67,
    change: 1.89,
    changePercent: 1.31,
    volume: 45678901,
    marketCap: 1500000000000
  },
  {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    currentPrice: 334.56,
    change: 4.56,
    changePercent: 1.38,
    volume: 56789012,
    marketCap: 850000000000
  }
];

export const generateMockChartData = (days: number = 30): StockChartData[] => {
  const data: StockChartData[] = [];
  const today = new Date();
  let basePrice = 100;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const price = basePrice + (Math.random() - 0.5) * 10;
    basePrice = price;
    
    data.push({
      date: date.toISOString().split('T')[0],
      price: Number(price.toFixed(2)),
      volume: Math.floor(Math.random() * 1000000)
    });
  }

  return data;
};

export const mockMarketOverview: MarketOverview = {
  totalMarketCap: 25000000000000,
  marketChange: 150000000000,
  marketChangePercent: 0.6,
  activeStocks: 3500,
  topGainers: mockStocks.slice(0, 3),
  topLosers: mockStocks.slice(3)
}; 