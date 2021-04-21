import React , { useState , useEffect , Fragment } from "react";
import "./register.css";
import validateUtility from "../../../utils/ValidateUtility"
import GoogleLoginButton from "../../widgets/googleLogin";

const Login = (props) => {
    const [fieldobj , setFieldObj] = useState({ first_name : "", last_name : "",  email : "manish.kumar212111@gmail.com" , password : "Password@123" });
    const [errorObj , setErrorObj] = useState({ email : { error : true , msg : "Please enter valid email" } , 
                                                password : { error : true , msg : "Please enter valid password" },
                                                first_name : { error : true , msg : "This is required field" },
                                                last_name : { error : true , msg : "This is required field" },
                                             })
    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "first_name":
                return  validateUtility.required(value)
            case "last_name":
                return  validateUtility.required(value)
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
        let requiredObj = ['first_name', 'last_name' , 'email' , 'password'];
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
        console.log(token);
        props.googleLoginCb(token);
    }

    return (
        <div className="tab-pane fade show active" id="registertab" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div className="row">
                <div className="col-md-6 form-group mt-1">
                    <span className="error">{!errorObj.first_name.error && errorObj.first_name.msg}</span>          
                    <input className="form-control f-12" type="text" placeholder="Enter First Name" name="first_name" value={fieldobj.first_name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="col-md-6 form-group mt-1">
                    <span className="error">{!errorObj.last_name.error && errorObj.last_name.msg}</span>
                    <input className="form-control f-12" placeholder="Enter Last Name" name="last_name" value={fieldobj.last_name} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="col-md-6 form-group mt-1">
                    <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
                    <input className="form-control f-12" type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="col-md-6 form-group mt-1">
                    <span className="error">{!errorObj.password.error && errorObj.password.msg}</span>
                    <input className="form-control f-12" type="password" placeholder="Enter Password" name="password" value={fieldobj.password} onChange={(e) => handleChange(e)}/>
                </div>
                <div className="col-md-12 ">
                    <p className="f-12"><span className="mdi mdi-check"></span> By clicking this you agree our terms, and privacy policy</p></div>
                <div className="col-md-12" onClick={handleClick}>
                    <button  className="btn btn-primary d-block shadow" disabled={props.login_user_loading}>Register</button>
                </div>
                <div className="col-md-12"><div className="option text-center"><span>or</span></div></div>
                <div className="col-md-12">
                    <GoogleLoginButton loginCb = {loginCb} buttonText="Signup with Google" /> 
                    {/* <a href="#" className="btn btn-outline-muted d-block mt-4 shadow"><img src={google} /> Signup with Google</a>  */}
                </div>
            </div>
        </div>
        // <div classNameName="login-container">    
        //     <div classNameName="container">
        //         <label for="uname"><b>First Name</b></label>
        //             <span className="error">{!errorObj.first_name.error && errorObj.first_name.msg}</span>
        //             <input type="text" placeholder="Enter First Name" name="first_name" value={fieldobj.first_name} onChange={(e) => handleChange(e)} required />
        //         <label for="uname"><b>Last Name</b></label>
        //             <span classNameName="error">{!errorObj.last_name.error && errorObj.last_name.msg}</span>
        //             <input type="text" placeholder="Enter Last Name" name="last_name" value={fieldobj.last_name} onChange={(e) => handleChange(e)} required />
        //         <label for="uname"><b>Email</b></label>
        //             <span classNameName="error">{!errorObj.email.error && errorObj.email.msg}</span>
        //             <input type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
        //         <label for="psw"><b>Password</b></label>
        //             <span classNameName="error">{!errorObj.password.error && errorObj.password.msg}</span>
        //             <input type="password" placeholder="Enter Password" name="password" value={fieldobj.password} onChange={(e) => handleChange(e)} required />
        //         <button type="submit" onClick={handleClick}>Register</button>
        //         {/* <span classNameName="psw">Forgot <a href="#">password?</a></span> */}

        //     </div>
        // </div>
    )
}

export default Login;
