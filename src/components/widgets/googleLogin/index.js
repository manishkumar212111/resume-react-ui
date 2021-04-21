import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {GOOGLE_LOGIN_CLIENT_ID} from "../../../configs"
import google from "../../../scss/images/google.svg"

const GoogleLoginButton = (props) => {
    const handleLogin = googleData => {
        // const res = await fetch("/api/v1/auth/google", {
        //     method: "POST",
        //     body: JSON.stringify({
        //     token: googleData.tokenId
        //   }),
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // })
        // const data = await res.json()
        // store returned user somehow
        props.loginCb(googleData.tokenId)
    }

    return (
        <GoogleLogin
            clientId={GOOGLE_LOGIN_CLIENT_ID}
            // buttonText= { props.buttonText}
            render={renderProps => (
                <button className="btn btn-outline-muted d-block mt-4 shadow" onClick={renderProps.onClick}> <img src={google} /> { props.buttonText}</button>
            )}
            onSuccess={handleLogin}
            onFailure={handleLogin}
            // width={140}
            // height={40}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginButton;