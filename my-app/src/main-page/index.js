// this is our old App.js top level component
import './main-page.css';
// we will be having this available in all child components, in other words the whole app
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
// we import useEffect hook from the react library to load the data into index.js (houses.json in our case)
// this is the specific naming convention for hooks in react
// useEffect enables us to create side effects when the state of a component changes
import { useEffect, useState, useMemo } from "react";

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
      // the houses variable is now just local to the fetchHouses function, we need to store it somewhere, because we want to access the houses array from elsewhere in the component too
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
    // this is a bootstrap class
    <div className="container">
      {/* we can pass on multiple properties */}
      <Header 
        subtitle="Providing houses all over the world" 
        title="Some title"
      />
      <FeaturedHouse house={featuredHouse} />
    </div>
  );
}

export default App; 
