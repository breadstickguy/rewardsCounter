import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. 

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction 

// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). 

// Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and total. 



// · Use React JS (do not use TypeScript) 

// · Simulate an asynchronous API call to fetch data 

// · Make up a data set to best demonstrate your solution 

// · Check solution into GitHub

const transactions = [
  {name: "John", month: new Date().getMonth('July 20'), amount: 150 },
  {name: "Bev", month: new Date().getMonth('July 20'), amount: 67 },
  {name: "John", month: new Date().getMonth('July 20'), amount: 75 },
  {name: "Bev", month: new Date().getMonth('July 20'), amount: 300 },
  {name: "John", month: new Date().getMonth('July 20'), amount: 250 },
  {name: "Bev", month: new Date().getMonth('July 20'), amount: 32 },
  {name: "John", month: new Date().getMonth('July 20'), amount: 80 },
  {name: "Bev", month: new Date().getMonth('July 20'), amount: 400 }
];


// transaction is a single objects containing transaction data
const calculateRewards = transaction => {
  console.log(transaction)
  
  // calc the over 100 transactions first
  if (transaction.amount > 100) {
    return (transaction.amount - 100) * 2 + 50;
  }

  // calc under 100, but over 50
  if (transaction.amount > 50) {
    return transaction.amount - 50;
  }

  // if it's under 50, return 0
  return 0;
}

console.log(transactions.forEach(transaction => console.log(calculateRewards(transaction))));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
