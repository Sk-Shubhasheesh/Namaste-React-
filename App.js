import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTMLElement(render )
const heading = React.createElement("h1", {id: "heading"}, "Namaste React🚀");

// creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render
root.render(heading);