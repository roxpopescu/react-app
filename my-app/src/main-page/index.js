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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from "../context/houseContext";

function App() {
  // the App component is much cleaner now, it only concerns itself with the rendering part, the rest of the logic being DELEGATED to the custom hooks
  // there is another advantage when working with custom hooks, nothing is preventing other componnets to also use these hooks, which opens up a lot of possibilities for reuse
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);
  
  return (
    <Router>
      {/* the context object that we created contains a component called a Provider */}
      {/* the value prop will be optionally accessibile by ALL child components, so we can stop using prop drilling and code clustering */}
      <HousesContext.Provider value={allHouses}>
        {/* what we add directly in the Router will always be displayed no matter what the URL in the browser is */}
        {/* this is a bootstrap class */}
        <div className="container">
          {/* we can pass on multiple properties */}
          <Header 
            subtitle="Providing houses all over the world" 
            title="Some title"
          />
          {/* in order to use the provider value we need to modify the cild components that might need to use this */}
          <HouseFilter />
          {/* Switch will check the child Route component to see if there is a match between the actual URL in the browser and the path specified by the Route */}
          <Switch>
            {/* we will be specifying the route path in the Route component */}
            <Route exact path="/">
              <FeaturedHouse house={featuredHouse} />
            </Route>
            {/* because of the > React knows that country is a value that is passed into the URL and it also knows how to call it */}
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App; 
