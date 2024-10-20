import React from 'react';

const ExchangeMenu = ({ onSelectExchange }) => {
  const exchanges = [
    { code: 'LSE', name: 'London Stock Exchange' },
    { code: 'NYSE', name: 'New York Stock Exchange' },
    { code: 'NASDAQ', name: 'NASDAQ Stock Exchange' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Hello! Welocome to LSEG. I'm here to help you.</h3>
      <h3 className="text-lg font-semibold mb-3">Please select a Stock Exchange.</h3>
      <ul className="space-y-2">
        {exchanges.map((exchange) => (
          <li key={exchange.code}>
            <button
              onClick={() => onSelectExchange(exchange.code)}
              className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-center rounded-lg transition-all"
            >
              {exchange.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeMenu;
