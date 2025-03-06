import React from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { stockData } from '../data/mockData';

const StockDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const stock = stockData.find((s) => s.symbol === symbol);

  if (!stock) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800">Stock not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y- mt-10">
      {/* Stock Header */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{stock.name}</h1>
            <p className="text-xl text-gray-600">{stock.symbol}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">${stock.price}</p>
            <p
              className={`text-lg ${stock.changePercent >= 0 ? 'text-success' : 'text-danger'
                }`}
            >
              {stock.change > 0 ? '+' : ''}
              {stock.change} ({stock.changePercent}%)
            </p>
          </div>
        </div>
      </div>

      {/* Price Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Price Chart</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stock.chart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke={stock.changePercent >= 0 ? '#22C55E' : '#EF4444'}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stock Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow mt-5">
          <h2 className="text-xl font-bold mb-4">Trading Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Volume</span>
              <span className="font-medium">{stock.volume.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Market Cap</span>
              <span className="font-medium">
                ${(stock.marketCap / 1000000000).toFixed(2)}B
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Day Range</span>
              <span className="font-medium">
                ${(stock.price - stock.change).toFixed(2)} - ${stock.price}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-5">
          <h2 className="text-xl font-bold mb-4">Key Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">52 Week High</span>
              <span className="font-medium">${(stock.price * 1.2).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">52 Week Low</span>
              <span className="font-medium">${(stock.price * 0.8).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Average Volume</span>
              <span className="font-medium">
                {(stock.volume * 0.9).toFixed(0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail; 