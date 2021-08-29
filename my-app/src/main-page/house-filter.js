import { useHistory } from "react-router-dom";

const HouseFilter = ({allHouses}) => {
    const history = useHistory();
    // filter the distinct countries from the houses json
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    countries.unshift(null);

    // what do we want to do when a value is selected in the select
    const onSearchChange = (e) => {
        // we want to know which country was selected by extracting the value from the arguments
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    };

    return(
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for you dream house in country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {/* the options for the select component are rendered by creating an option component for each item in the list of countries we created above */}
                    {/* c is each item we have available at each map iteration */}
                    {/* inside JSX we use {} to execute code */}
                    {countries.map((c) => (
                        // React need a key prop when we work with loops in order to create the association between array item and rendered item, these should be unique values
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default HouseFilter;