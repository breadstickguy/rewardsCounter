import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Customer from './Customer';

// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. 

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction 

// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). 

// Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and total. 



// · Use React JS (do not use TypeScript) 

// · Simulate an asynchronous API call to fetch data 

// · Make up a data set to best demonstrate your solution 

// · Check solution into GitHub

const transactionData = [
  {name: "John", month: new Date('July 20').getMonth(), amount: 150 },
  {name: "Bev", month: new Date('August 20').getMonth(), amount: 67 },
  {name: "Larry", month: new Date('Sept 20').getMonth(), amount: 75 },
  {name: "Bev", month: new Date('July 20').getMonth(), amount: 300 },
  {name: "John", month: new Date('August 20').getMonth(), amount: 250 },
  {name: "Larry", month: new Date('Sept 20').getMonth(), amount: 32 },
  {name: "John", month: new Date('August 20').getMonth(), amount: 80 },
  {name: "Bev", month: new Date('July 20').getMonth(), amount: 400 },
  {name: "Larry", month: new Date('August 20').getMonth(), amount: 234 }
];

// transaction is a single object containing transaction data
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

const mapRewardsPoints = transactions => transactions.map(t => ({...t, points: calculateRewards(t)}));

const mapped = mapRewardsPoints(transactionData);

// finds all customer names. In a larger dataset, this should be accomplished with a DB query as doing it in app will not be performant
// transactions is the transaction data containing customer names, returns a unique set of names
const getCustomerNames = transactions => [...new Set(transactions.map(t => t.name))];

// gets all transactions for a particular customer, transactions is an array of transaction data, customer is the particular name you are looking for
const getTransactionsByCustomer = (transactions, customer) => transactions.filter(t => t.name === customer);

// get transactions by month
const getTransactionsByMonth = (transactions, month) => transactions.filter(t => t.month === month);

// sums up the total rewards points for the values passed in. Must have been mapped first
const totalRewardsPoints = transactions => transactions.reduce((total, obj) => {
  return total + obj.points;
}, 0);

console.log(mapped);
console.log(totalRewardsPoints(getTransactionsByCustomer(mapped, "Bev")));


function App() {
  return (
    <div className="App">
      {[...getCustomerNames(mapped)].map(name => <Customer name={name}/>)}
    </div>
  );
}

export default App;
