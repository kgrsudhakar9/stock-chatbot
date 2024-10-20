import React from 'react';

const StockMenu = ({ exchange, onSelectStock, onGoHome }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Please select a stock.</h3>
      <ul className="space-y-2">
        {exchange.topStocks.map((stock) => (
          <li key={stock.code}>
            <button
              onClick={() => onSelectStock(stock.code)}
              className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-center rounded-lg transition-all"
            >
              {stock.stockName}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        onClick={onGoHome}
      >
        Main Menu
      </button>
    </div>
  );
};

export default StockMenu;
