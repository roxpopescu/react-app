// move the logic out the App component - a component should be about RENDERING and not about fetching data
// if we were to apply at its best the principle of separations of concerns this would highly increase the testability and reusability of our code
import { useEffect, useState } from "react";
// a hook (custom OR predefined) is just a function
// the convention is always to prefix the hook with "use" si it will be clear that we are dealing with a hook
const useHouses = () => {
    // hooks can use other hooks so the use of useState and useEffect remain as it is
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async() => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

//   just like a component, a hook RETURNS something, but this time is not just JSX, it can be also a value or object
  return allHouses;
};

// this is a module too so we are exporting the function
export default useHouses;