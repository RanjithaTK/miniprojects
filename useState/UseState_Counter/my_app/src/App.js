import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(17); //initial condition
  
  const Add = () => {
    setCount(count + 1);
    // count++ wrong
  };
  
  const Subtract = () => {
    setCount(count - 1);
    // count-- wrong
  };
  
  return (
    <div>
      <h1>MY COUNTING APP</h1>
      <h2>The count is : {count}</h2>
      <button onClick={Add}>+</button>
      <button onClick={Subtract}>-</button>
    </div>
  );
}

export default App;
