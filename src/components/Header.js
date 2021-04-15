import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../actions/user";
import { setLocalStorageItem , getLocalStorageItem} from "../utils/globals";

const Header = ( props ) => {
    useEffect(() => {
        props.auth();
    }, []);
    
    useEffect(() => {
        setLocalStorageItem('expires' , props.expires)
    }, [props.expires])
    console.log(props.expires)
    return(
    <div>
        This is Header
        {/* <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
        { loggedIn && <Link to="/secret" className="link">Secret</Link> } */}
    </div>
    )
    
}

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
    expires: state.user.expires
} );

const mapDispatchToProps = {
    auth,
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );
