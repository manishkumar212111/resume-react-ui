import Login from "../widgets/Login";
import React , { useEffect, useState , Fragment } from 'react';
import {loginUser , registerUser , GoogleLoginValidate} from "../../actions/auth";
import { connect } from "react-redux";
import Register from "../widgets/Register";
import { Link } from "react-router-dom";
import login from "../../scss/images/login.svg"
function Auth(props) {
    const [ showLogin , setShowLogin] = useState(props.showLogin);
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
        <div className="modal fade show" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">

                    <div className="modal-body pt-0 pl-0 pb-0">
                      <div className="row">
                          <div className="col-md-6"><img src={login} className="w-100"/> </div>
                          <div className="col-md-6">
                              <h3 className="f-20 mt-4">Get started for free...</h3>


                              <div className="row">
                                  <div className="col-12">
                                      <div className="nav nav-pills mb-4 mt-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                          <span className={`nav-link login text-center ml-0 ${!showLogin ? "active" : ''}`} id="v-pills-profile-tab" onClick={() => setShowLogin(false)} data-toggle="pill" href="#registertab" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sign-up</span>
                                          <span className={`nav-link login text-center ${showLogin ? "active" : ''}` } id="v-pills-home-tab" data-toggle="pill" href="#logintab" onClick={() => setShowLogin(true)} role="tab" aria-controls="v-pills-home" aria-selected="true">Login</span>


                                      </div>
                                  </div>
                                  <div className="col-12">
                                      <div className="tab-content" id="v-pills-tabContent">
                                        {showLogin ? <Login login_user_loading={props.login_user_loading} googleLoginCb = {googleLoginCb} SubmitCb = {SubmitCb} /> : <Register login_user_loading={props.login_user_loading} login_user_loading={props.login_user_loading} SubmitCb = {registerSubmitCb } googleLoginCb = {googleLoginCb}/>}      
                                      </div>
                                  </div>
                              </div>


                          </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
            // <span className="test" style={{"margin-left": "41%"}}>
            //     <span style={{padding: "32px" , cursor: "pointer"}} onClick={() => setShowLogin(true)}>Login</span><span style={{padding: "32px" , cursor: "pointer"}} onClick={() => setShowLogin(false)}>Register</span>
            //     {showLogin ? <Login googleLoginCb = {googleLoginCb} SubmitCb = {SubmitCb} /> : <Register SubmitCb = {registerSubmitCb }/>}
            //     <span className="psw" style={{"margin-right": "41%"}}><a href="forgot-password">Forgot password?</a></span>
                

            // </span>
        
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.auth.userDetail,
    login_user_loading: state.auth.login_user_loading
} );

const mapDispatchToProps = {
    loginUser,
    registerUser,
    GoogleLoginValidate
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );
