import { useState } from "react";
import "./App.css";

function App() {
  // let counter=1
  const [Count, setCount] = useState(0);

  function addValue() {
   setCount((prevCount)=>{
    if (prevCount>=20) {
      alert("You have reached the limit")
      return prevCount
      
    }
    return prevCount+1
   })
  
  }

  function removeValue() {
    setCount((prevCount)=>{
      if (prevCount <=0) {
        return 0
        
      }
      return prevCount-1
    })
  }
  return (
    <>
      <h1>Counter Project</h1>
      <p>Count: {Count}</p>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
