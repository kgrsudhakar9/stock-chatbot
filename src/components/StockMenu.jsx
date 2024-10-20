import React from 'react';

const StockMenu = ({ exchange, onSelectStock, onGoHome }) => {
  return (
    <div>
      <h6 className="text-sm mb-3">Please select a stock.</h6>
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
        className="mt-4 py-1 w-full bg-gray-300 hover:bg-gray-400 rounded-lg"
        onClick={onGoHome}
      >
        Main Menu
      </button>
    </div>
  );
};

export default StockMenu;
