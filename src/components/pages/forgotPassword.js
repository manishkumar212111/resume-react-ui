
import React from 'react';
import {sendResetLink} from "../../actions/auth";
import { connect } from "react-redux";
import ForgotPassword from "../widgets/forgotPassword"

function ForgotPsd(props) {
    
    const SubmitCb = (obj) => {
        props.sendResetLink(obj);
    }
    return(
        <ForgotPassword SubmitCb={SubmitCb} login_user_loading={props.login_user_loading}/>
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.auth.userDetail,
    login_user_loading: state.auth.login_user_loading

} );

const mapDispatchToProps = {
    sendResetLink
};

export default connect( mapStateToProps, mapDispatchToProps )( ForgotPsd );
