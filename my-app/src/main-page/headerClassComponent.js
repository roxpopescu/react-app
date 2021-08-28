// class components have to derive from the class COMPONENT that is in the react package which has to be imported
import {Component} from ""
import logo from './logo.png';

class Header extends Component {
    // the render method outputs the exact code JSX
    render() {
        return (
            <header className="row">
                <div className="col-md-5">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                {/* in this case the props object can be accessed as a property of the class */}
                {/* the this keyworkd is not needed when using functions */}
                <div className="col-md-7 mt-5 subtitle">{this.props.subtitle}</div>
            </header>
        )
    }
};

export default Header;
