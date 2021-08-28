import House from '../house/index';

const FeaturedHouse = ({house}) => {
    if(house) {
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md12 text-center">Featured House</h3>
                </div>
                {/* prop drilling */}
                <House house={house} />
            </div>
        );
    };
    return <div>No featured house at this time</div>;
};

export default FeaturedHouse;