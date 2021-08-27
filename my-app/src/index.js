// React looks for installed npm packages with the specified name: React, ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
// these are in the src folder - navigation topic
import './index.css';
// file extensions are omitted for other modules
// it imports a default member, {} are missing here
// webpack knows that it has to use index.js (previously App.js)
import App from './main-page';
import reportWebVitals from './reportWebVitals';

// this is the actual entry point which calls as follows
// ReactDOM is an object that was exported from react-dom module and imported in this module
ReactDOM.render(
  // this represents the top level component of our app that should be rendered -> JSX syntax which will be translated into React.createElement JS code
  <React.StrictMode>
    {/* Top level or root component, child node of React.StrictMode */}
    <App />
  </React.StrictMode>,
  // this is the HTML component where the App component should be rendered in (can be found in index.html file)
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
