import React, { useState, useEffect } from 'react';
import ExchangeMenu from './ExchangeMenu';
import StockMenu from './StockMenu';
import StockDetail from './StockDetail';
import MessageInput from './MessageInput';
import data from '../assets/chatbot_stock_data.json';

const ChatBot = () => {
  const [view, setView] = useState('home'); // 'home', 'stocks', 'stockDetail'
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSelectExchange = (exchangeInput) => {
    const selectedInput = exchangeInput.trim().toUpperCase();
    const exchange = data.find((ex) => ex.code === selectedInput || ex.stockExchange.toUpperCase() === selectedInput);
    if (exchange) {
      setSelectedExchange(exchange);
      setView('stocks');
    } else {
      alert('Exchange not found');
    }
  };

  const handleSelectStock = (stockCode) => {
    if (selectedExchange) {
      const selectedStockInput = stockCode.trim().toUpperCase();
      const stock = selectedExchange.topStocks.find(
        (stk) => stk.code === selectedStockInput || stk.stockName?.toUpperCase() === selectedStockInput
      );
      if (stock) {
        setSelectedStock(stock);
        setView('stockDetail');
      } else {
        alert('Stock not found in selected exchange');
      }
    } else {
      alert('Please select an exchange first');
    }
  };

   // Handle user input from MessageInput component
   const handleUserInput = (input) => {
    if (view === 'home') {
      handleSelectExchange(input); // User input might be an exchange code
    } else if (view === 'stocks' && selectedExchange) {
      handleSelectStock(input); // User input might be a stock code
    }
  };

  const handleGoBack = () => {
    setView('stocks');
  };

  const handleGoHome = () => {
    setView('home');
    setSelectedExchange(null);
    setSelectedStock(null);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-white bg-blue-600 p-2 rounded-lg">LSEG chatbot</h1>
      {view === 'home' && <ExchangeMenu onSelectExchange={handleSelectExchange} />}
      {view === 'stocks' && selectedExchange && (
        <StockMenu
          exchange={selectedExchange}
          onSelectStock={handleSelectStock}
          onGoHome={handleGoHome}
        />
      )}
      {view === 'stockDetail' && selectedStock && (
        <StockDetail
          stock={selectedStock}
          onGoBack={handleGoBack}
          onGoHome={handleGoHome}
        />
      )}
      {/* Pass handleUserInput to MessageInput */}
      < MessageInput onUserInput={handleUserInput} />
    </div>
  );
};

export default ChatBot;
