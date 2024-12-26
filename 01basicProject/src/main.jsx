import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

// function MyApp(){
//   return (
//     <>
//     <h1>My App</h1>
//     </>
//   )
// }

  //  const anotherElement = (
  // <a href="https://google.com" target='_blank'>Visit google</a>
  //  )
const username="Akshay"

const DomElement = React.createElement(
  "a", 
  {
  href: "https://google.com",
  target: "_blank",
},
`click me to visit google ${username}`,
);

createRoot(document.getElementById("root")).render(
  DomElement

  // anotherElement
);
