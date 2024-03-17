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
