const SearchResultsRow = ({house}) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    )
};

export default SearchResultsRow;