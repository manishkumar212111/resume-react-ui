import React , { useState , useEffect , Fragment } from "react";
import "./login.css";
import validateUtility from "../../../utils/ValidateUtility"
import GoogleLoginButton from "../../widgets/googleLogin";

const Login = (props) => {
    const [fieldobj , setFieldObj] = useState({ email : "manish.kumar212111@gmail.com" , password : "Password@123" });
    const [errorObj , setErrorObj] = useState({ email : { error : true , msg : "Please enter valid email" } , 
                                                password : { error : true , msg : "Please enter valid password" } })
    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "email" :
                return  validateUtility.email(value)
            case "password" :
                return  validateUtility.required(value)
                
            default :
                return true;
        }
    }
    const handleChange = (e) => {
        let field = fieldobj;
        field[e.target.name] = e.target.value;
        setFieldObj(fieldOb => ({...fieldOb , ...field}))

        let errOb = errorObj;
        errOb[e.target.name].error = validateField(e.target.name);

        setErrorObj( errorOb => ( { ...errorOb , errOb}))
    }
    
    const handleClick = () => {
        let requiredObj = ['email' , 'password'];
        let errOb = errorObj;

        let status = true;
        requiredObj.forEach(element => {
            let errorStatus = validateField(element);
            errOb[element].error = errorStatus;
            status = status && errorStatus;
        })
        setErrorObj( errorOb => ( { ...errorOb , errOb}))
        if(!status)
            return;
        
        console.log(fieldobj);  
        props.SubmitCb(fieldobj)  

    }

    const loginCb = (token) => {
        props.googleLoginCb(token);
    }
    return (
        <div className="login-container">  
            <GoogleLoginButton loginCb = {loginCb}/>  
            <div className="container">
                <label for="uname"><b>Email</b></label>
                    <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
                    <input type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
                <label for="psw"><b>Password</b></label>
                    <span className="error">{!errorObj.password.error && errorObj.password.msg}</span>
                    <input type="password" placeholder="Enter Password" name="password" value={fieldobj.password} onChange={(e) => handleChange(e)} required />
                <button type="submit" onClick={handleClick}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>
        </div>
    )
}

export default Login;
