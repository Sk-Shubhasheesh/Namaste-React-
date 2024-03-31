import React from "react";
import ReactDOM from "react-dom/client";


const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namste React Functional Component</h1>
  </div>
);
const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
        <HeadingComponent/>
    </h1>
);

// //In JSX We can inject any javascript code inside {}
// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namste React Functional Component</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));


// rendering React Functional Component
// root.render(<HeadingComponent/>);
root.render(title);
