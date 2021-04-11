
import React from 'react';
import {sendResetLink} from "../../actions/auth";
import { connect } from "react-redux";
import ForgotPassword from "../widgets/forgotPassword"

function ForgotPsd(props) {
    
    const SubmitCb = (obj) => {
        props.sendResetLink(obj);
    }
    return(
        <ForgotPassword SubmitCb={SubmitCb}/>
    )
}


const mapStateToProps = ( state ) => ( {
    userDetail: state.auth.userDetail,
} );

const mapDispatchToProps = {
    sendResetLink
};

export default connect( mapStateToProps, mapDispatchToProps )( ForgotPsd );
