
function Customer({name, onclick}) {
    
    return (
      <div className="buttons">
            <button onClick={() => onclick(name)}>Customer Name: {name}</button>
      </div>
    );
  }
  
  export default Customer;