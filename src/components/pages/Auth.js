import Login from "../widgets/Login";
import React , { useEffect, useState , Fragment } from 'react';
import {loginUser , registerUser , GoogleLoginValidate} from "../../actions/auth";
import { connect } from "react-redux";
import Register from "../widgets/Register";
import { Link } from "react-router-dom";

function Auth(props) {
    const [ showLogin , setShowLogin] = useState(props.location.hash == '#login' ? true : false);
    const SubmitCb = (obj) => {
        props.loginUser(obj);
    }
    const registerSubmitCb = (obj) => {
        props.registerUser(obj);
    }

    const googleLoginCb = (token) => {
        props.GoogleLoginValidate({token : token})
    }
    useEffect(() => {
        if(props.userDetail && props.userDetail.user){
            typeof localStorage !== 'undefined' &&  localStorage.setItem('userDetail', JSON.stringify(props.userDetail))
            window.location.href = '/';
        }
        
    }, [props.userDetail])
    return(
            <span className="test" style={{"margin-left": "41%"}}>
                <span style={{padding: "32px" , cursor: "pointer"}} onClick={() => setShowLogin(true)}>Login</span><span style={{padding: "32px" , cursor: "pointer"}} onClick={() => setShowLogin(false)}>Register</span>
                {showLogin ? <Login googleLoginCb = {googleLoginCb} SubmitCb = {SubmitCb} /> : <Register SubmitCb = {registerSubmitCb }/>}
                <span className="psw" style={{"margin-right": "41%"}}><a href="forgot-password">Forgot password?</a></span>
                

            </span>
        
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.auth.userDetail,
} );

const mapDispatchToProps = {
    loginUser,
    registerUser,
    GoogleLoginValidate
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
