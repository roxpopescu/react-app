import { useMemo } from "react";
// in this case the hooks take in a parameter which is the array of houses
const useFeaturedHouse = (allHouses) => {
    const featuredHouse = useMemo(() => {
        if(allHouses.length) {
          const randomIndex = Math.floor(Math.random() * allHouses.length);
          return allHouses[randomIndex];
        };
      }, [allHouses]);

      return featuredHouse;
};

export default useFeaturedHouse;