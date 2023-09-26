import './App.css';
import React, { useState } from 'react';


function App() {
  const [Count, setCount] = useState(0);

  const increment = () => {
    setCount(Count + 1);
  };
  const decrement = () => {
    setCount(Count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  
  
  return (
    <div className="Myapp">
    <body> 
      <div className='Counter'>
        <h1>Counter</h1>
      </div>
        
      <div className='Count'><p>{Count}</p></div>

      <div className='Buttons'>
      <button onClick={increment}>INCR</button>
      <button onClick={Reset}> Reset </button>
      <button onClick={decrement}>DECR</button>
      </div>
      </body>  
    </div>
  );
}
export default App;
