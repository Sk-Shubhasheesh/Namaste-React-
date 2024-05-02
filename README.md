# Namaste React🙏🙏🙏

## Episod 01 - Inception
### What is Emmet ?
* It basically generate some code for us inside VsCode.
### What is CND?
* CDN is stand for Content Delivery Network.It is a geographically distributed group of servers that work together to deliver internet content, such as web pages, videos, images, and other resources, to users in a faster and more efficient manner.

### What is CND React?
* These are the website where React has been hosted, we are just pulling React from there and using in our project.

### Why we use CDN as a software devloper ?
* One of the primary reasons for using a CDN is to deliver content faster to users. CDNs have servers distributed across different geographical locations. When a user requests content from a website, the CDN serves that content from the server that is closest to the user's location. This reduces latency and load times, making the website or application faster and more responsive.
* Since CDNs have multiple servers, if one server goes down or experiences issues, the CDN can automatically route traffic to another available server. This helps to improve the overall availability and reliability of the website or application.

### What is crossorigin ?
* CrossOrigin" (short for "Cross-Origin Resource Sharing") is a security feature implemented in web browsers to allow resources (like JavaScript, fonts, CSS, etc.) on a web page to be requested from another domain outside the domain from which the resource originated. This is important for web applications that need to fetch resources from different domains. It is a HTTP feature.

### Why there are two files in CDN link of React ?
* First file is the core of the react, this is the core react framework algorithm.
* Second file is for React dom, this is the react library which is usefull for DOM Operation.

### Why did React make different file for both of them ?
* React doesn't only work on browser react also works for mobiles phone so there are different places where react is used so there are different function methods which are being used inside React native, browser or different places that is why there are two files.

### What is React ?
* DOM (Document Object Model) manipulation is one of the more expensive operations in a web browser 😑.
* So all these Frameworks & Libraries are trying to optimize this. React is also comes with a philosophy that whenever you need to do anything on a webpage do it using JavaScript so that is why react give you these helper function to made this things in a work in a very performent way.

### What is props ?
* props is nothing but atrribute + children.🤣
```.js
const heading = React.createElement(
"h1", 
 {id: "heading", xyz: "abc"}, // Atrribute 
 "Hello World From React!"); // Children
```

### What is React.createElement() ?
*  It's a function used to create React elements, which are the building blocks of React applications.
* But at the end of the day it is just a object😊

### What is the job of root.render() ?
* Its job is basically to take this object create the tag which the browser understand and put the inside the root element.

### Why we call React as a library ?
* React can be apply to a small portation of a web page itself, React can work only header, React can only work with footer, React can be work only sidebar also. 😊



## Episod 02 - Igniting Our App

### Can React making our App is fast ?
* Lot of Devlopers say that react is making my app fast but no there are lot of other pacakges that are required to make our production ready app.
* Lot of other libraries, lot of other code javscript makes our code fats and scalable and production ready not just React.

### What is NPM ?
* Its  doesn't stands for Node Pacakge Manager 😊. NPM does not have a full form 😆.
* Basically NPM manage packages behind the scenes works as a node package manager but its not stand for Node Pacakge Manager .
* NPM is a standerd repository for all the packages.
Any package you neet to install in your project you get use npm beacuse all the packages utilities is hosted here.


### What is Bundler ?
* A bundler is a tools that takes all our JavaScript code along with any other assets like css or images and combine them into a single file that can be served to the browser.

### What is Parcel/Webpack ?
* Parcel and Webpack are both module bundlers used in web devlopment. We need bundler beacuse they do bundle assest, code splitting & performance optimization.

### npm install -D parcel, what is -D ?
* There are two dependency:
   1. Dev Dependency - It is only needed for local development and testing.
   The devDependencies object maps the packages that you will only need during the development of your project. You don't need them to run your code in production. For example, a testing framework like Jest.

   2. Normal Dependency -It's required by your application in production.

### What is Difference between tilde ( ~ ) and caret ( ^ ) in package.json ?
*Caret (^) notation: It automatically updates both minor and patch updates.Example: The ^1.2.4 will update all the future Minor and patch updates, for example, ^1.2.4 will automatically change the dependency to 1.x.x if any update occurs.
* tilde ( ~ ) notation: It will install the major version automatically.
But always safe to put it caret, because some timewhen we have a major upgrade a lot ot things bring in our app.

### What is transitive dependecy ?
* Parcel as a project has its own dependencies & those dependecies can have there own dependencies, this is known as transitive dependecy.

### What in npx ?
* For installing any package we use NPM but for executing the pacakges we used npx.

### What is the way of getting React in our app ?
* Firt way is to getting react in our app is using CDN Link but another way is getting react to our project is using NPM.

### What does parcel for us ?
* It create for us:
     - Dev Build
     - Local Server
     - HMR(Hot Module Replacement) => automitaclly refresh our page
     - Faster Buildes because of Caching
     - Its also do the Image Optimization
     -Minification of files
     - Bundling 
     - Compress
     - Consistent Hashing
     - Code Splitting
     - Differential Bundling -- support older browser
     - Diagnostic -- If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.
     - Error Handling
     - Give ways to host app in HTTPS
     - Tree Shaking -- It statically analyzes the imports and exports of each module, and removes everything that isn't used.
     - Different dev & production bundles
* It is basically reading all these file, it is keeping a track ,parcel is done these things by using File Watching Alogorithm which is written in C++.
* So Parcel is such a beast.

### What is dist folder ?
* The dist(distribution) folder is where the bundled and optimized files for production are stored. It contain the final version of the application that can be deployed.


## Episod 03 - Laying The Foundation
### What is JSX ?
* JSX(JavaScript XML) is a JavaScript syntax which is easier way to create React element. 
* JSX is not a part of React because react is different and jsx is different. We can write React without JSX.
* JSX is not HTML inside JavaScript. JSX is different from HTML but its syntax is like HTML.
```.js
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1> 
```
* The above code is not pure JavaScript code our js engine is not understand these JSX because js engine only understand ecmascript.
* Before reache the code js engine, it is transpiled by Parcel and in parcel there are lot of packages so one package which is known as Babel doing this job to convert Jsx code to React code which our browser will be understand.
* If you have to give attribute to JSX, you have to use camelCase.
* If you write single line Jsx code it is good if you want to multiline JSX the wrapped it inside parenthesis beacuse babel is need to understand where JSX is started.

### What is a React Component ?
* Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
* There are two types of component in react:
   1. Class Based Component - OLD way to writing code. It use JS classes for creating component.
   2. Functional Component - NEW way to writing code. It use JS functions for creating component. It is a just normal JavaScript function which return some JSX code/element. We can also say a functon which return react element is called Functional Component.
   ```.js
   const HeadingComponent = ()=>{
    return <h1>Namste React Functional Component</h1>}
    ```
   sometime pepole does not use return so that is also correct and valid syntex
   ```.js
   const HeadingComponent = () => (
      <div id="container">
         <h1 className="heading">Namste React Functional Component</h1>
      </div> );
   ```
* Everything inside react is component.

### What is Component composition ?
* Putting component inside the component is called component composition.
```.js
const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste React using Title
    </h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Namste React Functional Component</h1>
  </div>
);
```


## Episod 04 - Talk is Cheap, Show me the code

### How to make our app card dynamic ?
* For making our app card dynamic we use props.

### What is props ?
* Props is the short form for properties. Properties is something which we pass to the component. Suppose i pass dynamically data to component, we can pass it as props.
* At the end of the day props is just a normal argument to a function.
* Passing a props to a component just like as passing argument to a function.

### What is config-driven UI ?
* In a configuration-driven UI, the layout, styles, and other properties of UI elements are defined in a configuration file or database, which can be easily modified without requiring changes to the codebase. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.
* The configuration file or database may also define the data sources and the data to be displayed in the UI, as well as the interactions and behavior of the UI components. This allows for greater flexibility and adaptability of the UI to different use cases, as the configuration data can be easily modified or replaced without affecting the underlying application logic


## Episod 05 - Let's Get Hooked

### How many way we use import/exports in js ?
* In JS there is two way of Export/Import:-
   1. Default Export/Import
         export default Component;
         import Component from "path";
   2. Named Export/Import
         export const Component;
         import {Component} from "path";

### What is React Hook ?
* Hooks is a nothing but a normal javascript utility function which is give to us by react out of the box😊. It is a pre-build.
* They are a normal Js function written by Facebook Devlopers that give us some superpowers in our react code.
* There are two very important Hooks in react -
    1. useState() - * It basically use to generate Superpowerful State Variable in react. When we called, it    returns an array of two things: [state, setState].
    Here is two things because there need to be a trigger to start the diff algorithm and update the UI thats why we need the second function. Whenever we call the second function( setState) it will be automatically re render the component.
    * 'state' being the state variable and 'setState()' being the state-updating function.

    * Whenever a statevariable update, react re-render the components.
    2. useEffect()
### What is Virtal DOM ?
* A logical representation of actual DOM in the form of React Elements.
* A programming concept where a virtual representation of the UI is kept in the memory.It is an object that has React Elements to represent the UI.

### What is the diff Algorithm ?
* Whenever the state or props get updated, an updated VDOM tree is generated.
* Diff algorithm calculate the difference between 2VDOMs(the previous VDOM and the updated VDOM)
* After calculating this diff only the actual DOM updated. This makes React capable of doing fast DOM manipulations.

### What is Reconciliation(React Fiber) ?
* The process of computing the diff between the 2 VDOMs is called Reconciliation


## Episod 06 - Exploring The World

### What is Monolithic Architecture ?
* Monolith is also an architecture. Monolith architecture is all about how you set up the project. For example : think about the BookMyShow application there are multiple different big big components. There should be some payment module that handles all payment, bookings, authentication , reminders etc . If we make one project that is BMS(BookMyShow) and then write all the payment logic, booking logic, authentication logic etc in the same folder then this kind of structure is called a monolith.

### What is MicroService Architecture ?
* Microservices architecture is a software development approach where an application is composed of small, independent services that work together to fulfill a specific business function. Each service in a microservices architecture is responsible for a specific task or functionality and can be developed, deployed, and scaled independently of other services.

### How webApps or UI Application fetch the data from backend ?
* There are two ways that can be follow : -
  1. As soon as our page load we can make a api call and when we get the data then we can render it on to UI.
  2. * As soon as our page loads we will just render our UI, after the we make a api call and as soon as we get the result back from api, now we will re-render our apllication with the new data. In react we will always use this approach because this is the better approach.
  * In this approach we rendering twice but it doesn't matter.Because the render cycle of reeact is very fast, react has the one of the best render machanisam. React render our UI is very fats.

### What is useEffect() ?
* useEffect() hook is another utility fuction provided by react out of the box. It has take two argument one is callback function and another is dependancy Array. The callback function is called after your component is render.
```.js
useEffect(()=>{
    console.log("useEffect Called");
  }, []);
```
* When we want some similar UI to be render first quickly, then make an API call, and then re-render the component with the actual data.

### what is CORS Policy ?
* Browsers do not allow us to call an API present on the other origins from our origin.
* This is a web standard that makes resource sharing safe across different origin.


### What is optional Chaining ?
*  It is a JS concept wherein we use the '?.' operator while reading some property from an object or calling a function.
* If the object accessed/ function called evaluates to null/undefined, the expression short-circuits and evaluates to undefined rather than throwing an error. So use it when there is a possibility that a reference might be missing.

### What is Shimmer UI ?
* Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don't want to block rendering the rest of the UI.

### What is Conditional rendering ?
* Conditional rendering in React refers to the process of delivering elements and components based on certain conditions.
```.js
if(ListOfRestaurants.length === 0){
   return <Shimmer />
```


## Episod 07 - Finding The Path

### When useEffect() is called ?
* It's is called after every render of the component. Inside the useEffect we put thr dependecy array which change the behaviour of it. But dependency array is not mendatory. if we do not put it useEffect is called on every render.
* If the dependency array is the empty then useEffect is called only its inital render(just once). 
* If we put somthing inside in dependancy array then it will only be call when the dependancy changes. for ex: if dependancy array is [btnNameReact] then it called everytime when btnNameReact is updated.

Note : - Never create a state variable using useState outside of the component. and never put hook inside the if and else condition, loop & function.


### What is React Router ?
* React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

### What is React Router DOM ?
* React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

### What is the use case of <Link/> component?
* <Link></Link> component is a superpower given to us by 'react-router-dom'. Use it when you want to make links in your app such that on clicking them, the entire webpage does not reload.
*It just refreshes the components that are required to be loaded into the DOM. So it helps in performing Client-Side Rendering.

### What is SPA ?
* SPA stands for Single Page Application.
* A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application.
* An application that has a single HTML page being rendered to the DOM.All the new pages that we see are just "Components interchanging themselves".

### How many types of routing in Web Apps ?
* There are two types of routing in webApps :
    1. Client Side Routing - When we click an anchor tag, it reloads the entire app, sends a network call to that page fetches the HTML, and renders it on the webpage.
    2. Server Side Routing - When we click some link/anchor tag, no network call is made because all the components are already loaded into the browser. So, we just render the required component in that place where needed in the DOM. The entire webpage is not reloaded.

### What is dynamic routing ?
*  It means creating routes that have dynamic paths rather than hardcoded paths.
* React Router is a popular library used for implementing dynamic routing in React applications.
* Dynamic routing in ReactJS involves using the React Router library to define routes within a single-page application, mapping URLs to specific React components for rendering based on navigation.

## Episod 08 - Let's get Classy
### What is class based component ?
* Class components are basically JavaScript Object Oriented classes with functions.
* Inside it , there is a render method which return some peace of JSX

** Props with Function component
```.js
const User = (props) => {
    return(
    <div className="user-card">
       <h2>Name:{props.name}</h2> 
    </div>
    )
}
```
** Props with Class Based component
```.js
import React from "react";
class UserClass extends React.Component {
    constructor(props){
       super(props) 
    }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}
```

### Why do we use super(props) in constructor inside class based component?
*  Every Class component is a child of the 'React.Component' parent class.
* We know in our class components, the 1st method to be called is constructor( ) and in it, super(props) should be the very first line.
* super( ) is a call to the Parent class's constructor i.e. to the React.Component's constructor.
* We know in React class components, we will be using {this.props}. The 'this' object is actually coming from the parent class 'React.Component'. To use it, we must first initialize it. We can't use {this.props} unless the 'this.props' has been initialized in the parent class. So super(props) actually initializes the 'this.props'.

### How to way create state variable inside function & class based component ?
* Inside function component
```.js
import { useState } from "react";

const User = (props) => {
    const[count] = useState(0)
    const [count2] = useState(1)
    return(
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
       <h2>Name:{props.name}</h2> 
    </div>
    )
}
```
* Inside class based
```.js
import React from "react";
class UserClass extends React.Component {
    constructor(props){
       super(props);
       this.state = {
        count: 0,
        count2: 2
       } 
    }
  render() {
    // desturcuting
    const {count2} = this.state
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}
```

### What is the order of lifecycle method calls in Class-Based Components?
* During the execution of a class-based component, we have 5 Lifecycle methods executed in the following order:
 1. constructor() -> 
       * Whenever a new instance of the class    component is created, the constructor is called. 
       * The best place to define a state for the class component since it is the first to be called upon the loading of the class component.
 2. render() -> 
       * It does not mount the component to the DOM. It just generates the component's Virtual DOM representation based on the current props and state.
 3. componentDidMount() -> 
       *  It executes after the component has been completely mounted to the DOM.
       * It is the best place to make API calls/fetch calls.
 4. componentDidUpdate() -> 
       * The componentDidUpdate() method allows us to execute the React code when the component is updated. All the network requests that are to be made when the props passed to the component changes are coded here.
 5. compononentWillUnmount()
      * It is useful for doing any CLEAN-UP like clearing the interval, or timeout that we might have set earlier while mounting that component.
      * This is very important for building SCALABLE and PERFORMANT APPS.


## Episod 09 - Optimizing Our App

### What is Single Responsibility Principle ?
* Single Responsibility Principle(SRP) is a Computer Programming Principle where each entity(class/function) should have just one single responsibility.
* Eg: <RestaurantCard/> component should just be concerned about rendering the Restaurant card. It should not be concerned about fetching those restaurant details from an API.

### What is the Modularity of Code ?
* Modularity means breaking our code into different small modules that are related to each other.
* Breaking the code into smaller pieces makes it more Reusable, Maintainable, and Testable.
* We can easily reuse the modules anytime, anywhere instead of writing the same code again and again.
* If we encounter any bug in a particular functionality of our Modular code, we have a localized bug i.e. we can easily figure out that the bug arises from which module.

### What is Custom Hooks ?
*We know that hooks like useState, and useEffect are reusable components. Sometimes we make components that we have to reuse again and again in the application. In this case, we can convert the component to hooks by extracting logic from it.
* Just as we have React Hooks as utility functions provided by React developers, similarly, we can write our own Custom Hooks to be used as utilities in our code.The main reason why you should be using Custom hooks is to maintain the concept of DRY(Don’t Repeat Yourself) in your React apps.
* Whenever we find a single component dealing with more than 1 responsibility, we must think of abstracting some "utility functionality" outside it.
* Writing Custom Hooks helps us abstract out the extra responsibility from the component. And they can now be re-used anywhere in our app, any number of times.

### What is meant by 'Linting'?
* Linting is a process of running your code through a tool to analyze for potential errors. It throws an error if you don't follow the conventions set by the linter.
* We can plugin linters into our project to make sure the conventions and best practices are being followed.

### What is Chunking or Code Spliting or Dynamic Bundling ?

* To brackdown to our app in small logical chunks.

### What is lazy loading() or on demand loading or daynamic import ?
* Use the lazy() method when you wish to not load everything into the browser in the beginning, instead, load the components only on-demand.

* It allows the developer to break down an application into chunks (modules) per route and loads only the module(s) required for the route being visited.

* Key principle being: "Load only what you need when you need it."

### What is React suspense ?
* React suspense is a built-in React component which lets you temporarily render a fallback UI while its children are still loading. Content delivery and site performance are important factors for web applications. You must deliver content quickly and effectively for better user experience.

## Episod 10 - Jo Dikhta ha vo Bikta ha

### What are the ways to apply styling to our web app?
♦️ Vanilla CSS:
✨️ We can use plain CSS to give styles to our app.
✨️ We create an index.css file and add all the CSS rules there.

♦️ SASS / SCSS :
✨️ SASS stands for Syntactically Awesome StyleSheets.
✨️ A stylesheet language that is compiled into CSS.
✨️ Allows us to make use of Nested rules, variables, and functions.
✨️ SCSS: The SCSS syntax uses curly braces and semi-colon syntax.
✨️ SASS: Uses indentation instead of curly braces, and line-end instead of semicolon.

♦️ Styled Components:
✨️ Allows us to write styles just as we write React components.
✨️ This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

♦️ Using External CSS Libraries like Material UI, Tailwind CSS, BootStrap, Ant Design, Chakra UI, etc.
✨️ They give pre-styled components.
✨️ They export such components that are already beautiful. We can simply import and use them.
✨️ Tailwind CSS is the most modern method being used extensively in the industry to style web apps.

### Pros of Tailwind CSS ?
♦️ We have all our styles in the JS files. No need to move to and fro between JS and CSS files thus making the development quite quick.

♦️ Very lightweight library: Only the classes that we use are included in the CSS bundle of our build. Unused CSS is never shipped.

♦️ Builds any complex UI with Tailwind.

♦️ Builds absolutely responsive UIs without writing media queries.

♦️ Preventing Redundancy: If we want two exactly the same UI objects in our app, we can use the same classes for both of them. Behind the scenes, the CSS code for that class will be imported just once by Tailwind. So we won't have redundant classes as we had in Vanilla CSS.

### Cons of Tailwind CSS?
♦️ When we add a lot of CSS classes to our HTML/JS code, it becomes less readable, lengthy, and clumsy.
♦️ It comes with a lot of initial learning curve, as we need to know which class is to be used for which property.

### In tailwind.config.js, what do all the keys "content", "theme", and "plugins" mean ?

♦️ "content": We configure the paths to HTML and JS components that contain tailwind classes.

♦️ "theme": The section where you define your project’s color palette, type scale, fonts, breakpoints, etc.

♦️ "plugins": Here, we register new styles by injecting them into the user’s stylesheet using JavaScript instead of CSS.


## Episod 11 - Data is the new Oil
### What is a Higher-Order Component ?
♦️ A function that takes an existing component as an argument and then enhances that component(adds some extra features to it), and returns this enhanced component.
♦️ They are Pure Functions. They never modify the component, but just add extra features on top of it.

### What makes the Data Layer of our app?

♦️ In a very generic way to see our React app, we can say it is composed of 2 Main Layers: Data Layer and UI Layer.
♦️ The Data Layer consists of state, props, local variables, and whatever data our app deals with.
♦️ It powers the UI layer of our app.

### What is Lifting the State Up?

♦️ Sometimes, we don't want to give the power of managing the state variable to the child component. Instead, we want to keep the state variable in the parent and pass its value as a prop from the parent component to the child component.

♦️ This way, the child component does not maintain its own state but is being controlled by its parent. This is known as 'Lifting the State Up'.

### What are Controlled and Uncontrolled Components?
♦️ Controlled Component: The Component that is being controlled by some other component. It is not able to maintain its own state.

♦️ UnControlled Component: The Component that itself has its single source of truth i.e. 'state' managed by itself is an Uncontrolled Component. It is not being controlled by any other component and is independently maintaining its own state variable.

### What is Props Drilling?
♦️ Sometimes, we need to pass down data from one component to another through multiple nested levels of components.

♦️ This is a problem as we are unnecessarily passing props even to those components that never need them. This is not a good way of managing the Data Layer. This problem is called 'Props Drilling'.


### What is a Context Provider?
* For avoiding the props driling we use react context.
♦️ We use it to provide the context to some portion of our app, along with specifying some value for the context.

♦️ The <SomeContext.Provider/> component is used to provide the value for the context. And we wrap some parts of our app/whole app with this component.

♦️ It takes the 'value' prop where we can pass in the data we want to keep in the context. This data will override the default context value.

### What is Context Consumer?
♦️ We use the component <SomeContext.Consumer/> to subscribe to a context. It lets us read the context value.

♦️ This component takes a function as a child, which takes the current context value and returns a React node.



## Episod 12 - Let's Bulid our store

### What about Redux ?
* Redux is an open-source JavaScript library for managing and centralizing application state. 
* Redux is work on data layer of our application.
* Actually Reduc is not mendatory in our apllication. You don't need to use redux if you are using a small/mid-level application. But if you are using a large scale apllication where data is havily used a lot of read & write operations are happening then using Redux make sense.
* Reduc and React are different library.
* There is another library like redux, *ZUSTAND* which gaining popularity a lot. 
* Redux offers easy debugging.
