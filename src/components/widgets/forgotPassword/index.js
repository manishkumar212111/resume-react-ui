import React , { useState , useEffect , Fragment } from "react";
import validateUtility from "../../../utils/ValidateUtility"

const ForgotPassword = (props) => {
    const [fieldobj , setFieldObj] = useState({ email : "manish.kumar212111@gmail.com"});
    const [errorObj , setErrorObj] = useState({ email : { error : true , msg : "Please enter valid email" } })
    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "email" :
                return  validateUtility.email(value);
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
        let requiredObj = ['email'];
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
    return (
        <div className="login-container">    
            <div className="container">
                <p>Enter Email associated with your account to get reset password link over email</p>
                <label for="uname"><b>Email</b></label>
                    <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
                    <input type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
                <button type="submit" onClick={handleClick}>Send Email</button>
            </div>
        </div>
    )
}

export default ForgotPassword;
