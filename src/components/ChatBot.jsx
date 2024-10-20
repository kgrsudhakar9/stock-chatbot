import React, { useState } from 'react';
import MenuExchange from './MenuExchange';
import StockMenu from './StockMenu';
import StockDetail from './StockDetail';
import InputMessage from './InputMessage';
import StockData from '../assets/data/chatbot_stock_data.json';

const ChatBot = () => {
  // view state values are used like home,stocks, stockDetail
  const [view, setView] = useState('home');
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

   // Handle to select exchange or type input
  const handleSelectExchange = (exchangeInput) => {
    const selectedExchangeInput = exchangeInput.trim().toUpperCase();
    const exchange = StockData.find((ex) => ex.code === selectedExchangeInput || ex.stockExchange.toUpperCase() === selectedExchangeInput);
    if (exchange) {
      setSelectedExchange(exchange);
      setView('stocks');
    } else {
      alert('Exchange not found');
    }
  };

  // Handle to select stock or type input
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

   // Handle user input from InputMessage component
   const handleUserInput = (input) => {
    if (view === 'home') {
      handleSelectExchange(input);
    } else if (view === 'stocks' && selectedExchange) {
      handleSelectStock(input);
    }
  };

  // Back Button
  const handleGoBack = () => {
    setView('stocks');
  };

  // Home Button
  const handleGoHome = () => {
    setView('home');
    setSelectedExchange(null);
    setSelectedStock(null);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white bg-blue-500 p-2 rounded-lg">LSEG chatbot</h2>
      {view === 'home' && <MenuExchange onSelectExchange={handleSelectExchange} />}
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
      {/* Pass handleUserInput to InputMessage */}
      < InputMessage onUserInput={handleUserInput} />
    </div>
  );
};

export default ChatBot;
