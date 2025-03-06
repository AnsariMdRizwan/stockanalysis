import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { stockData, marketIndices, sectors } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-300 min-h-screen mt-10">
      {/* Market Indices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketIndices.map((index) => (
          <div key={index.name} className="bg-white p-5 rounded-xl shadow-lg border hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-gray-800">{index.name}</h3>
            <p className="text-3xl font-semibold text-gray-900">{index.value.toLocaleString()}</p>
            <p className={`text-lg font-medium ${index.changePercent >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {index.change > 0 ? '+' : ''}{index.change} ({index.changePercent}%)
            </p>
          </div>
        ))}
      </div>

      {/* Sector Performance */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Sector Performance</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {sectors.map((sector) => (
            <div key={sector.name} className="text-center bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg shadow">
              <p className="font-medium text-gray-800">{sector.name}</p>
              <p className={`text-lg font-semibold ${sector.performance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {sector.performance > 0 ? '+' : ''}{sector.performance}%
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stock Listings */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Top Stocks</h2>
        <div className="grid grid-cols-1 gap-5">
          {stockData.map((stock) => (
            <Link
              to={`/stock/${stock.symbol}`}
              key={stock.symbol}
              className="p-5 border rounded-lg flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{stock.name}</h3>
                <p className="text-gray-600 text-sm">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">${stock.price}</p>
                <p className={`text-lg font-medium ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {stock.change > 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
                </p>
              </div>
              <div className="w-32 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stock.chart}>
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke={stock.changePercent >= 0 ? '#22C55E' : '#EF4444'}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
