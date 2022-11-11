import SearchResultsRow from "./search-results-row";
// another useful hook
import { useParams } from "react-router-dom";
import { useContext } from "react";
import HousesContext from "../context/houseContext";

const SearchResults = () => {
    // data we have sent along in the URL
    const {country} = useParams();
    const allHouses = useContext(HousesContext);
    const filteredHouses = allHouses.filter((h) => h.country === country);

    return(
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {
                        filteredHouses.map((h) => (
                            <SearchResultsRow key={h.id} house={h} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default SearchResults;