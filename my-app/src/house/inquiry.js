import {useState} from "react";

const Inquiry = () => {
    // we use a state hook to store the contact information
    // the state is initialized with an object that already contains properties
    // these properties are referenced in the relative JSX elements
    // even if we only have 1 state object, each individual property in that state object is actively monitored for changes by React
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: ""
    });

    // all functionality is encapsulated behaviour inside the component
    const onChange = (e) => {
        // spread operator: contactInfo as it is now with something added
        // e.target -> the actual element that was clicked (we are setting up specific ids)
        // each id matches a property name in the state object
        // with e.target.id we are overwritting that particular value
        // the value of the property is the value of the input
        setContactInfo({...contactInfo, [e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        // it prevents the default submit behaviour of the browser
        e.preventDefault();
        // we get this through the state, no need to pass it through the function
        console.log(contactInfo);
        // sent to server through an API request
    }

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    value={contactInfo.name}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    value={contactInfo.email}
                    // same onChange, the spread operator comes in handy, we do not need to write the event multiple times
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Remarks"
                    id="remarks"
                    value={contactInfo.remarks}
                    onChange={onChange}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                // the submit button will only be enabled when there is a value for both name and email
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
};

export default Inquiry;