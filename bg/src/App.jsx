import React, { useState } from "react";
import "./App.css"

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div id="first" style={{ backgroundColor: color , height: "100vh",width:"100%"  , display: "flex", // Center buttons vertically and horizontally
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", }}>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <button onClick={()=>setColor("yellow")}>Yellow</button>
      </div>
    </>
  );
}

 export default App;
