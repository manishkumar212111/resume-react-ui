import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../actions/user";
import { setLocalStorageItem , getLocalStorageItem} from "../utils/globals";
import logo from "./../scss/images/logo-dark.png"
import Auth from '../components/pages/Auth'
const Header = ( props ) => {
    const [ hashElement , sethashElement] = useState('');
    useEffect(() => {
        props.auth();
    }, []);
    useEffect(() => {

    })
    useEffect(() => {
        setLocalStorageItem('expires' , props.expires)
    }, [props.expires])

    const getHashElement = (key) => {
        console.log(key);
        switch(key){
          case '#login':
              return <Auth showLogin={true}/>
            break;
          case '#register':
            return <Auth showLogin={false}/>
            break;
        }
      }

    return(
       <> 
       <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
            <div className="container">
                <a className="navbar-brand logo text-uppercase" href="index.html">
                    <img src={logo} alt="" height="22" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Templates</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a href="#testimonial" className="nav-link">FAQs</a>
                        </li>

                    </ul>
                    <div className="navbar-button d-none d-lg-inline-block">
                        <Link className="btn btn-sm btn-primary btn-round" to="#login" data-toggle="modal" onClick = {() => sethashElement('#login')} data-target="#login">Log In</Link>
                        <Link className="btn btn-sm btn-outline-primary btn-round"  to="#register" onClick = {() => sethashElement('#register')} data-toggle="modal">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
        {getHashElement(hashElement)}

        </>
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
