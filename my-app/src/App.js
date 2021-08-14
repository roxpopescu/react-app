import logo from './logo.svg';
import './App.css';
//install bootstrap - package.json
// npm install bootstrap - doc
// we will be having this available in all child components
import bootstrap from 'bootstrap';

// the component itself is a function which is typical for a react component
function App() {
  // the function returns the JSX that has to be rendered
  return (
    // what we see here for now are components that have an equivalent in HTML, but we will proceed in composing our own self-made components
    // everything must be contained in one node only
    <div className="App">
      <header className="App-header">
        {/* JSX !== HTML */}
        {/* attributes in JSX are actually props */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 
