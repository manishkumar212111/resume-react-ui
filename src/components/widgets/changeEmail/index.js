import React , { useState , useEffect , Fragment } from "react";
import validateUtility from "../../../utils/ValidateUtility"
// import "./resetPassword.css"
const ChangeEmail = (props) => {
    const [fieldobj , setFieldObj] = useState({old_password : "", email : ""});
    const [errorObj , setErrorObj] = useState({ 
        old_password : { error : true , msg : "Enter correct password" } , 
        email : { error : true , msg : "Enter correct email" } 
     })
    
        const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "old_password" :
                return  validateUtility.required(value);
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
        let requiredObj = ['old_password' ,'email'];
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
        props.SubmitCb(fieldobj.old_password , fieldobj.email)  

    }
    return (
        <div className="login-container">
            <span onClick={() => props.closeCb(false)}>Close</span>    
            <div className=" container">
                <label for="uname"><b>Your Old password</b></label>
                    <span className="error">{!errorObj.old_password.error && errorObj.old_password.msg}</span>
                    <input type="password" placeholder="Enter Password" name="old_password" value={fieldobj.old_password} onChange={(e) => handleChange(e)} required />
                
                <label for="uname"><b>Your New email</b></label>
                    <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
                    <input type="text" placeholder="Enter email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
                
                <button type="submit" onClick={handleClick}>Change Email</button>
                {/* <a href="/auth">Login </a> */}

            </div>
        </div>
    )
}

export default ChangeEmail;
