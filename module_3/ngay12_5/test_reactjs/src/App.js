import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Example1 from './components/Example1';
// import Example2 from './components/Example2';
// import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
function App() {
  // //create React Element basic
  // const element1 = React.createElement('h1', null, 'Hello ReactJS')
  // const element2 = React.createElement('div',
  //   {
  //     id: 'getting-container',
  //     className: 'container'
  //   },
  //   "Hello"
  // )
  // const element3 = React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'h2',
  //     null,
  //     'Day la the h2 ben trong 1 the div'
  //   )
  // )
  // const element4 = React.createElement(
  //   'ul',
  //   {className: 'item-list'},
  //   React.createElement('li', null, 'Item so 1'),
  //   React.createElement('li', null, 'Item so 2'),
  //   React.createElement('li', null, 'Item so 3'),
  // )
  return (
  //   <div>
  //       {/* <div>{element1}</div> */}
  //       {/* <div>{element2}</div> */}
  //       {/* <div>{element3}</div> */}
  //       <div>kjshdfjkhsdjkfhhdkjsj: {element4}</div>0
  //   </div>
       <div className="App">
      <Example4 />
    </div>
  );
}
export default App;