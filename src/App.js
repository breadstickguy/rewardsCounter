import './App.css';
import { useEffect, useState } from 'react';
import Customer from './Customer';
import TransactionList from './TransactionList';
import Transaction from './Transaction';



// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. 

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction 

// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points). 

// Given a record of every transaction during a three-month period, calculate the reward points earned for each customer per month and total. 

// · Use React JS (do not use TypeScript) 

// · Simulate an asynchronous API call to fetch data 

// · Make up a data set to best demonstrate your solution 

// · Check solution into GitHub

const transactionData = [
  {name: "John", month: "July", amount: 150 },
  {name: "Bev", month: "August", amount: 67 },
  {name: "Larry", month: "Sept", amount: 75 },
  {name: "Bev", month: "July", amount: 300 },
  {name: "John", month: "August", amount: 250 },
  {name: "Larry", month: "Sept", amount: 32 },
  {name: "John", month: "August", amount: 80 },
  {name: "Bev", month: "July", amount: 400 },
  {name: "Larry", month: "August", amount: 234 }
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
const getTransactionsByCustomer = (transactions, customer = "John") => transactions.filter(t => t.name === customer);

// get transactions by month
const getTransactionsByMonth = (transactions, month = "July") => transactions.filter(t => t.month === month);

// sums up the total rewards points for the values passed in. Must have been mapped first
const totalRewardsPoints = transactions => transactions.reduce((total, obj) => {
  return total + obj.points;
}, 0);

console.log(mapped);
console.log(getTransactionsByCustomer(mapped, "Bev"));

function App() {
  const [customerState, setCustomerState] = useState('');
  const [transactionsState, setTransState] = useState([]);

  useEffect(() => { console.log(customerState)}, [customerState]);
  // console.log(customerState);

  function handleClick(name) {
    setCustomerState(name);
    // console.log(customerState);
  };
  return (
    <div className="App">
        {[...getCustomerNames(mapped)].map(name => <Customer name={name} onclick={handleClick}/>)}
      <TransactionList>
        {getTransactionsByCustomer(mapped).map(t => <Transaction 
                                                      name={t.name} 
                                                      month={t.month} 
                                                      amount={t.amount} 
                                                      points={t.points}/>
                                              )
        }
        {getTransactionsByMonth(mapped).map(t => <Transaction 
                                                      name={t.name} 
                                                      month={t.month} 
                                                      amount={t.amount} 
                                                      points={t.points}/>
                                              )
        }
      </TransactionList>
    </div>
  );
}

export default App;
