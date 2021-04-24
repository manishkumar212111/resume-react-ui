import React , { useEffect, useState , Fragment } from 'react';
import {GetUserById , UpdateUserById, changePassword , changeEmail, deleteMyAccount} from "../../actions/user";
import { connect } from "react-redux";
import { getCurrentLoggedInUserId , setLocalStorageItem , getLocalStorageItem , getUserData} from "../../utils/globals";
import  EditUserDetail from '../widgets/EditUserDetail';
import ChangePassword from "../widgets/changePassword";
import ChangeEmail from "../widgets/changeEmail";
import { sendResetLink } from ".././../actions/auth"
import UserChoiceNotif from "../widgets/UserChoiceNotif"
import { Link } from 'react-router-dom';
import account from "../../scss/images/account.svg"
import Shimmer from "../widgets/shimmerEffect";
function MyAccount(props) {
    const [currentUserDetail , setCurrentUserDetail] = useState({});
    const [showEditUser , setShowEditUser ] = useState(false);
    const [showChangePassword , setShowChangePassword ] = useState(false);
    const [showChangeEmail , setShowChangeEmail ] = useState(false);


    useEffect( () => {
        if(props.userDetail && props.userDetail && props.userDetail.id ){
            setCurrentUserDetail(props.userDetail);
            let users = getLocalStorageItem('userDetail');
            users.user = props.userDetail;
            console.log(users)
            setLocalStorageItem('userDetail' , users);
        }    }, [props.userDetail] );

    useEffect(() => {
        if(!getCurrentLoggedInUserId()){
            alert("No token")
        } else {
            props.GetUserById(getCurrentLoggedInUserId());
        }
    } , [props.GetUserById])
    
    const handleUserUpdate = (fieldobj) => {
        props.UpdateUserById(getCurrentLoggedInUserId() , fieldobj);
        setShowEditUser(false);
    }
    const sendResetPasswordLink = () => {
        props.sendResetLink({email : getUserData('email')});
    }

    const changePassword = (old_password , new_password) => {
        props.changePassword({ new_password : new_password , password : old_password});
        setShowChangePassword(false);
    }

    const changeEmail = (old_password , email) => {
        props.changeEmail({ password : old_password , email : email});
        setShowChangeEmail(false);
    }

    const downloadData = () => {
        return"text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getUserData()));
    }

    const updateNotification = (fieldobj) => {
        props.UpdateUserById(getCurrentLoggedInUserId() , fieldobj);
        
    }

    const deleteMyAct = () => {
        if(typeof window !== 'undefined'){
            if(window.confirm("You really want to delete your account it will delete all your data")){
                console.log("fdvdjfvdfkj jk");
              
                props.deleteMyAccount(getCurrentLoggedInUserId())
            };
        }
    }
    if(props.loading) {
        return ( <Shimmer />)
    }
    return (
    <>    
    <section className="align-items-center pt-5">
        <div className="container">
            <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                <div className="col-lg-12"> <h1 className="home-title">Account Setting</h1></div>
            </div>
        <div className="row">
            <div className="col-lg-8">
                 {/* edit user detail */}
                 <EditUserDetail loading_account_info_edit={props.loading_account_info_edit} handleUserUpdate = { handleUserUpdate } closeCb={setShowEditUser} email = {currentUserDetail.email} first_name= {currentUserDetail.first_name} last_name={currentUserDetail.last_name} dob = {currentUserDetail.dob}  />
                <div className="row">
                <div className="col-md-6">
                    <h6 className="mt-3"><span className="mdi mdi-security"></span> Security</h6>
                    <div className="bg-light p-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                    <label className="text-muted">Email</label>
                                    <input type="email" value={currentUserDetail.email}  className="form-control mb-4"/>
                                </div>
                                <div className="col-md-4 pt-2"> <button onClick={() => setShowChangeEmail(!showChangeEmail)} className="btn btn-primary btn-sm mt-4">Change</button></div>
                                {showChangeEmail && <div className="col-md-12">
                                    <ChangeEmail SubmitCb={changeEmail} />
                                </div>}
                            </div>
                            <div className="row">
                                <div className="col-md-8"> <label className="text-muted mt-2 f-13">Request password change?</label></div>
                                <div className="col-md-4" onClick={() => sendResetPasswordLink()}> <button className={`${props.login_user_loading ? 'btnDisabled' : ''} btn btn-primary btn-sm`} disabled={props.login_user_loading ? true : false}>Request</button></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <h6 className="mt-3"><span className="mdi mdi-database"></span> Personal data</h6>
                    <div className="bg-light p-4">
                    <div className="row">
                    <div className="col-md-12 text-center">
                        <label className="text-muted">you can download your data from your resumes</label>
                        <a className="btn btn-primary btn-sm mt-3" href={"data:"+downloadData()} download="data.json">Download as JSON</a>
                        {/* <button >Download as JSON</button> */}
                    </div>
                    </div>
                    </div>
                    <h6 className="mt-3" onClick={() => deleteMyAct()}><span className="mdi mdi-trash-can"></span> Delete account</h6>
                    <div className="bg-light p-4">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <label className="text-muted">Once you delete your account, It cannot be undone. This is permanent.</label>
                            <button className="btn btn-light mt-1 ">Delete</button>
                        </div>
                    </div>
                    </div>
                </div>
                <UserChoiceNotif submitCb={updateNotification} notifications = { currentUserDetail.notification } />
                </div>
            </div>

            <div className="col-lg-4">

                    <h6> <span className="mdi mdi-hail"></span> Plan and offerings</h6>

                <div className="bg-light p-4">
                        <div className="row">
                            <div className="col-md-12 text-center align-items-center mt-5 pb-5">
                            <label className="mt-5 d-block">Hello, {currentUserDetail.first_name} !</label>
                                <label className="mt-4">Account type : {currentUserDetail && currentUserDetail.subscription && currentUserDetail.subscription.type == 'free' ? 'Basic' : 'Pro'}</label>
                                {currentUserDetail && currentUserDetail.subscription && currentUserDetail.subscription.type == 'free' && <><label className="mt-4">Take your career to next level with
                                    our premium features</label>

                                    <label className="mt-5">Unlock additional 19 features</label>

                                    <button className="btn btn-warning">Upgrad now</button>

                                    <label className="mt-5">We highly encourage you to
                                        compare our plans to be benefited</label>

                                    <Link className="btn btn-warning mb-5" to='/pricing'>Compare plans</Link></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4"><img src={account}/> </div>
                <div class="col-md-5"><h1 class="home-title mt-5">30% Discount on annual plans</h1> </div>
                <div class="col-md-3"><button class="btn btn-danger mt-5">Switch to yearly plans</button></div>
            </div>
        </div>
    </section>
    </>
        // <div>My account
        //     <div>Section 1 : </div> 
        //     { currentUserDetail && currentUserDetail.subscription ? currentUserDetail.subscription.type == 'free' ? 'Free (upgrade to pro)' : currentUserDetail.subscription.type : "" }
        //     <div>Section 2 Account detail : 
        //         <span onClick={() => setShowEditUser(true)}>Edit</span>
        //         <p>email = {currentUserDetail.email} </p>
        //         <p>first_name= {currentUserDetail.first_name} </p>
        //         <p>last_name={currentUserDetail.last_name} </p>
        //         {currentUserDetail.dob ? <p>dob = {new Date(currentUserDetail.dob).getMonth() + 1 + "/" + + new Date(currentUserDetail.dob).getDate() + "/" + new Date(currentUserDetail.dob).getFullYear()}</p> : "" }</div> 
        //     <div>Section 3 Password changes and email changes : <span onClick={() => sendResetPasswordLink()}>click here to change password</span>
        //     <span onClick={() => setShowChangeEmail(true)}>click here to change Email</span>
        //     </div> 
        //     <div>
        //         section 4 : Update notification preferences : <UserChoiceNotif submitCb={updateNotification} notifications = { currentUserDetail.notification } />
        //     </div>
        //     <div>Section 5 Download my data : <a href={"data:"+downloadData()} download="data.json">Download Data</a>  </div> 
        //     <div>Section 6 Delete my account : <span onClick={() => deleteMyAct()}>Click here to delete your account</span></div> 
        //     { showEditUser && <EditUserDetail handleUserUpdate = { handleUserUpdate } closeCb={setShowEditUser} email = {currentUserDetail.email} first_name= {currentUserDetail.first_name} last_name={currentUserDetail.last_name} dob = {currentUserDetail.dob}  />}
        //     { showChangePassword && <ChangePassword closeCb={setShowChangePassword} SubmitCb={changePassword} />}
        //     { showChangeEmail && <ChangeEmail closeCb={setShowChangeEmail} SubmitCb={changeEmail} />}
        // </div>        
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.user.userDetail,
    loading : state.user.user_detail_loading,
    loading_account_info_edit : state.user.loading_account_info_edit,
    login_user_loading : state.auth.login_user_loading
} );

const mapDispatchToProps = {
    GetUserById,
    UpdateUserById,
    changePassword,
    deleteMyAccount,
    sendResetLink,
    changeEmail
};

export default connect( mapStateToProps, mapDispatchToProps )( MyAccount );
