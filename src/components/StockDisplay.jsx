import React, { useState, useEffect } from 'react';
import stockData from '../assets/chatbot_stock_data.json';  // Import the JSON file directly

const StockDisplay = ({ selectedExchange }) => {
  const [exchangeData, setExchangeData] = useState(null);

  useEffect(() => {
    // Find the selected exchange from the stockData array
    const exchange = stockData.find((item) => item.code === selectedExchange);
    setExchangeData(exchange);
  }, [selectedExchange]);

  return (
    <div className="mt-4">
      {exchangeData ? (
        <>
          <h2 className="text-lg font-bold">{exchangeData.stockExchange} Top Stocks</h2>
          <ul className="mt-2">
            {exchangeData.topStocks.map((stock) => (
              <li key={stock.code} className="mt-2">
                <strong>{stock.stockName}</strong> ({stock.code}): ${stock.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockDisplay;
