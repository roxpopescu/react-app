// this is our old App.js top level component
import './main-page.css';
// we will be having this available in all child components, in other words the whole app
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
// we import useEffect hook from the react library to load the data into index.js (houses.json in our case)
// this is the specific naming convention for hooks in react
// useEffect enables us to create side effects when the state of a component changes
import { useEffect, useState, useMemo } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// we want to load data only just when the component is rendered for the first time, to avoid re-renderes and improve performance
function App() {
  // default value specified in useState
  const [allHouses, setAllHouses] = useState([]);
  // a hook is a function so we can call it
  // its' first parameter is a function
  useEffect(() => {
    // the rest of the code continues execution while the houses are loaded
    const fetchHouses = async() => {
      const rsp = await fetch("/houses.json");
      // the houses variable is now just locat to the fetchHouses function, we need to store it somewhere, because we want to access the houses array from elsewhere in the component too
      const houses = await rsp.json();
      // we are storing the fetched houses in the components' state
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  // we want to remember the featuredHouse once it is determined
  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    };
  }, [allHouses]);
  
  return (
    <Router>
      {/* what we add directly in the Router will always be displayed no matter what the URL in the browser is */}
      {/* this is a bootstrap class */}
      <div className="container">
        {/* we can pass on multiple properties */}
        <Header 
          subtitle="Providing houses all over the world" 
          title="Some title"
        />
        <HouseFilter allHouses={allHouses} />
        {/* Switch will check the child Route component to see if there is a match between the actual URL in the browser and the path specified by the Route */}
        <Switch>
          {/* we will be specifying the route path in the Route component */}
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
          {/* because of the > React knows that country is a value that is passed into the URL and it also knows how to call it */}
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App; 
