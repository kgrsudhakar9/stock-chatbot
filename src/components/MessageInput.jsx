import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Import send icon

const MessageInput = ({ onUserInput }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Trigger onUserInput callback with the input
      console.log(onUserInput);
      onUserInput(input.trim());
      // Clear input field after submission
      setInput('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-4 flex">
      <input
        type="text"
        // className="flex-1 p-2 border rounded-l-lg"
        value={input}
        onChange={handleInputChange}
        placeholder="Type exchange or stock code..."
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button type="submit" className={`ml-2 font-bold py-2 px-4 rounded ${input.trim() ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-400 cursor-not-allowed'}`} disabled={!input.trim()}>
      <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default MessageInput;
