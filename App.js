import React from "react";
import ReactDOM from "react-dom/client";


// Create h1 tag using JSX(transpiled before it reaches the JS Engine) => transpiled by Parcel -> Package name Babel


// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1> 
const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1> 

// creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Jsx render
root.render(jsxHeading);