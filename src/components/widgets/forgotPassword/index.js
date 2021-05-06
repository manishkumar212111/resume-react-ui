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
        <section className="align-items-center pt-5">
            <div className="container">
                <div className="row align-items-center mt-5 pt-2 mb-4 text-center">
                    <div className="col-lg-12"> <h1 className="home-title">Forgot Password</h1></div>
                </div>
                <p>Enter email associated with your account to get reset password link over email</p>
                <div className="col-md-6 form-group mt-1">
                <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
                    <input className="form-control f-12" type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
                    <button className="btn btn-primary mt-3" disabled={props.login_user_loading} type="button" onClick={handleClick}>Send Email</button>                
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;
