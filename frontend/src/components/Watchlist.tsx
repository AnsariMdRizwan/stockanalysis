import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { stockData } from '../data/mockData';

interface WatchlistItem {
  symbol: string;
  isWatched: boolean;
}

const Watchlist: React.FC = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(() => {
    const saved = localStorage.getItem('watchlist');
    return saved
      ? JSON.parse(saved)
      : stockData.map((stock) => ({
        symbol: stock.symbol,
        isWatched: false,
      }));
  });

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatch = (symbol: string) => {
    setWatchlist((prev) =>
      prev.map((item) =>
        item.symbol === symbol ? { ...item, isWatched: !item.isWatched } : item
      )
    );
  };

  const watchedStocks = stockData.filter((stock) =>
    watchlist.find((item) => item.symbol === stock.symbol && item.isWatched)
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Watchlist</h1>

      {watchedStocks.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-gray-600">
            Your watchlist is empty. Add stocks to track them here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {watchedStocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <Link
                  to={`/stock/${stock.symbol}`}
                  className="text-lg font-semibold hover:text-primary"
                >
                  {stock.name} ({stock.symbol})
                </Link>
                <p className="text-gray-600">${stock.price}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg ${stock.changePercent >= 0 ? 'text-success' : 'text-danger'
                    }`}
                >
                  {stock.change > 0 ? '+' : ''}
                  {stock.change} ({stock.changePercent}%)
                </p>
                <button
                  onClick={() => toggleWatch(stock.symbol)}
                  className="text-primary hover:text-primary-dark"
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">All Stocks</h2>
        <div className="grid grid-cols-1 gap-4">
          {stockData
            .filter(
              (stock) =>
                !watchlist.find(
                  (item) => item.symbol === stock.symbol && item.isWatched
                )
            )
            .map((stock) => (
              <div
                key={stock.symbol}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <Link
                    to={`/stock/${stock.symbol}`}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    {stock.name} ({stock.symbol})
                  </Link>
                  <p className="text-gray-600">${stock.price}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-lg ${stock.changePercent >= 0 ? 'text-success' : 'text-danger'
                      }`}
                  >
                    {stock.change > 0 ? '+' : ''}
                    {stock.change} ({stock.changePercent}%)
                  </p>
                  <button
                    onClick={() => toggleWatch(stock.symbol)}
                    className="text-primary hover:text-primary-dark"
                  >
                    Add to Watchlist
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist; 