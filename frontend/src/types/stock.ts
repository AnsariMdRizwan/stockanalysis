export interface Stock {
  symbol: string;
  name: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
}

export interface StockChartData {
  date: string;
  price: number;
  volume: number;
}

export interface WatchlistStock extends Stock {
  addedAt: string;
}

export interface MarketOverview {
  totalMarketCap: number;
  marketChange: number;
  marketChangePercent: number;
  activeStocks: number;
  topGainers: Stock[];
  topLosers: Stock[];
} 