# Stock Exchange Chatbot

A simple React-based chatbot that allows users to interactively select stock exchanges (LSEG, NASDAQ, NYSE) and view the latest stock prices. The chatbot provides an intuitive interface to navigate through stock exchanges and their respective stocks.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Select from three stock exchanges: LSEG, NASDAQ, NYSE.
- View top stocks traded on the selected exchange.
- Retrieve stock details and latest prices by entering stock codes or names.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **Font Awesome**: For using icons (e.g., the send icon).
- **JavaScript**: For client-side scripting.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   git clone https://github.com/kgrsudhakar9/stock-chatbot.git

2. **Install dependencies**
    npm install
    
3. **Run the application**:
    npm run dev
    
    Open your browser and navigate to http://localhost:5173

4. **Usage**:
Created here 5 functonal components. ChatBot.jsx is base component for chatbot have child components like StockMenu, StockDetail, InputMessage, MenuExchange.
On the home screen, you can select a stock exchange by typing its name (e.g., LSEG) or code (e.g., LSE).
After selecting an exchange, you'll see a list of top stocks traded on that exchange.
You can view stock details by entering the stock code or name in the message input field and clicking the send icon.
