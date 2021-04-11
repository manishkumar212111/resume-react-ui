import React , { useEffect, useState , Fragment } from 'react';
import {GetUserById , UpdateUserById, changePassword , changeEmail, deleteMyAccount} from "../../actions/user";
import { connect } from "react-redux";
import { getCurrentLoggedInUserId , setLocalStorageItem , getLocalStorageItem , getUserData} from "../../utils/globals";
import  EditUserDetail from '../widgets/EditUserDetail';
import ChangePassword from "../widgets/changePassword";
import ChangeEmail from "../widgets/changeEmail";
import { sendResetLink } from ".././../actions/auth"
import UserChoiceNotif from "../widgets/UserChoiceNotif"
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
        return (<div>
            Loading
        </div>)
    }
    console.log(currentUserDetail.notification)
    return (
        <div>My account
            <div>Section 1 : </div> 
            { currentUserDetail && currentUserDetail.subscription ? currentUserDetail.subscription.type == 'free' ? 'Free (upgrade to pro)' : currentUserDetail.subscription.type : "" }
            <div>Section 2 Account detail : 
                <span onClick={() => setShowEditUser(true)}>Edit</span>
                <p>email = {currentUserDetail.email} </p>
                <p>first_name= {currentUserDetail.first_name} </p>
                <p>last_name={currentUserDetail.last_name} </p>
                {currentUserDetail.dob ? <p>dob = {new Date(currentUserDetail.dob).getMonth() + 1 + "/" + + new Date(currentUserDetail.dob).getDate() + "/" + new Date(currentUserDetail.dob).getFullYear()}</p> : "" }</div> 
            <div>Section 3 Password changes and email changes : <span onClick={() => sendResetPasswordLink()}>click here to change password</span>
            <span onClick={() => setShowChangeEmail(true)}>click here to change Email</span>
            </div> 
            <div>
                section 4 : Update notification preferences : <UserChoiceNotif submitCb={updateNotification} notifications = { currentUserDetail.notification } />
            </div>
            <div>Section 5 Download my data : <a href={"data:"+downloadData()} download="data.json">Download Data</a>  </div> 
            <div>Section 6 Delete my account : <span onClick={() => deleteMyAct()}>Click here to delete your account</span></div> 
            { showEditUser && <EditUserDetail handleUserUpdate = { handleUserUpdate } closeCb={setShowEditUser} email = {currentUserDetail.email} first_name= {currentUserDetail.first_name} last_name={currentUserDetail.last_name} dob = {currentUserDetail.dob}  />}
            { showChangePassword && <ChangePassword closeCb={setShowChangePassword} SubmitCb={changePassword} />}
            { showChangeEmail && <ChangeEmail closeCb={setShowChangeEmail} SubmitCb={changeEmail} />}
        </div>        
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.user.userDetail,
    loading : state.user.user_detail_loading
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
