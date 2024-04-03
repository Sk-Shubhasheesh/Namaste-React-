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