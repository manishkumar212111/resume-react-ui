import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {GOOGLE_LOGIN_CLIENT_ID} from "../../../configs"
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
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLoginButton;