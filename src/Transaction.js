function Transaction({name, month, amount, points}) {
    return (
      <div>
        <ol>
            <li>{name}</li>
            <li>{month}</li>
            <li>{amount}</li>
            <li>{points}</li>
        </ol> 
      </div>
    );
  }
  
  export default Transaction;