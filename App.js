import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1 className="head">Namaste React using JSX 🚀</h1>;


// React Functional Component
const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste React using Title
    </h1>
);


const HeadingComponent = () => (
    // Render Title component inside HeadingComponent
  <div id="container">
    
    <Title/>
    <h1 className="heading">Namste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));


// rendering React Functional Component
root.render(<HeadingComponent/>);
