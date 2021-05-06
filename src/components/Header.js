import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../actions/user";
import { setLocalStorageItem , getLocalStorageItem} from "../utils/globals";
import logo from "./../scss/images/logo-dark.png"
import Auth from '../components/pages/Auth'
const Header = ( props ) => {
    const [ hashElement , sethashElement] = useState('');
    const [userDetail , setUserDetail] = useState(props.userDetail)
    useEffect(() => {
        props.auth();
            window.addEventListener('storage', () => {
                console.log("on storage change event listener");
               setUserDetail(localStorage.getItem('userDetail') ? localStorage.getItem('userDetail').user : {})   
            });            
    }, []);
    useEffect(() => {
        setUserDetail(getLocalStorageItem('userDetail'));
    } , [props])
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
                <a className="navbar-brand logo text-uppercase" href="/">
                    <img src={logo} alt="" height="22" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/templates" className="nav-link">Templates</a>
                        </li>
                        <li className="nav-item">
                            <a href="/pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Articles</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link">FAQs</Link>
                        </li>

                    </ul>
                    
                    {!(props.userDetail && props.userDetail.first_name) ? <div className="navbar-button d-none d-lg-inline-block">
                        <Link className="btn btn-sm btn-primary btn-round" to="#login" data-toggle="modal" onClick = {() => sethashElement('#login')} data-target="#login">Log In</Link>
                        <Link className="btn btn-sm btn-outline-primary btn-round"  to="#register" onClick = {() => sethashElement('#register')} data-toggle="modal">Register</Link>
                    </div> : 
                    <div class="navbar-button d-none d-lg-inline-block">
                        {localStorage.getItem('expires') == 'true' && <Link to="/pricing"><button class="btn btn-sm btn-warning btn-round"><span class="mdi mdi-lock-open-variant-outline"></span>Upgrade</button></Link>}
                        <Link to="/my-resumes" className="btn btn-sm btn-primary btn-round">My Resume</Link>
                        <Link to="/my-account"><div class="btn btn-sm btn-soft-dark btn-round pt-0 pb-0"><span>Hello, {props.userDetail.first_name} </span><span class="mdi mdi-account-circle mdi-24px"></span></div> </Link>
                        {/* <Link className="btn btn-sm btn-outline-primary btn-round"  to="/my-account">Hello {props.userDetail.first_name}</Link> */}
                    </div>}
                </div>
            </div>
        </nav>
        {getHashElement(hashElement)}

        </>
    )
    
}

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
    expires: state.user.expires,
    userDetail: state.user.userDetail
} );

const mapDispatchToProps = {
    auth,
};

export default connect( mapStateToProps, mapDispatchToProps )( Header );
