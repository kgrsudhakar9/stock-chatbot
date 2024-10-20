import React from 'react';

const StockDetail = ({ stock, onGoBack, onGoHome }) => {
  return (
    <div>
      <p className="mb-4">Stock Price of <strong>{stock.stockName}</strong> is <strong>${stock.price.toFixed(2)}</strong>.</p>
      <div className="space-y-2">
        <button
          className="py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          onClick={onGoHome}
        >
          Main Menu
        </button>
        <button
          className="py-2 w-full bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
          onClick={onGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default StockDetail;
