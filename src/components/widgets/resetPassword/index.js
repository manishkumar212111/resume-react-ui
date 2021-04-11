import React , { useState , useEffect , Fragment } from "react";
import validateUtility from "../../../utils/ValidateUtility"
import "./resetPassword.css"
const ResetPassword = (props) => {
    const [fieldobj , setFieldObj] = useState({ password : "" , repeat_password : ""});
    const [errorObj , setErrorObj] = useState({ repeat_password : { error : true , msg : "Repeated password is not same" } , 
                                                password : { error : true , msg : "Password don't match" } })
    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "password" :
                return  validateUtility.required(value);
            case "repeat_password":
                return  validateUtility.required(value) && fieldobj.password == value;
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
        let requiredObj = ['password', "repeat_password"];
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
        props.SubmitCb(fieldobj.password)  

    }
    return (
        <div className="login-container">    
            <div className=" container">
                <label for="uname"><b>Your New password</b></label>
                    <span className="error">{!errorObj.password.error && errorObj.password.msg}</span>
                    <input type="password" placeholder="Enter Password" name="password" value={fieldobj.password} onChange={(e) => handleChange(e)} required />
                <label for="uname"><b>Repeat your password</b></label>
                    <span className="error">{!errorObj.repeat_password.error && errorObj.repeat_password.msg}</span>
                    <input type="password" placeholder="Enter Password" name="repeat_password" value={fieldobj.repeat_password} onChange={(e) => handleChange(e)} required />
                
                <button type="submit" onClick={handleClick}>Reset password</button>
                <a href="/auth">Login </a>

            </div>
        </div>
    )
}

export default ResetPassword;
