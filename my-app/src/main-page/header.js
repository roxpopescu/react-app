import logo from './logo.png';

// an arrow function that returns JSX -> a function component
// the first argument passed into the function by react is a props object
// we can also use destructuring to read from props object: {subtitle, title} and use it directly
const Header = (props) => {
    return (
        // what we return in a function component must always have a root node
        // bootstrap grid system
        <header className="row">
            <div className="col-md-5">
                {/* we are referencing the imported logo here, webpack will make sure this works by pasting in the URL to the image here */}
                <img src={logo} className="logo" alt="logo" />
            </div>
            {/* we use the {} to indicate an expression */}
            {/* remember, props is an OBJECT */}
            {/* here we READ from it, we do have to PASS it somewhere - the component that uses the header - App.js will provide a value for the subtitle porperty of the props object */}
            <div className="col-md-7 mt-5 subtitle">{props.subtitle}</div>
        </header>
    )
};

// this is a module therefor we need to export it in order to be able to use it
// each component should have a name starting with a capital letter (common practice for custom components)
export default Header;