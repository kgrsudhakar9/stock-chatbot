import React from 'react';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
          <ChatBot />
        </div>
      </div>
      </>
  );
}

export default App;
