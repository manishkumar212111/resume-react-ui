import React , { useState , useEffect , Fragment } from "react";
import "./register.css";
import validateUtility from "../../../utils/ValidateUtility"

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
    return (
        <div class="tab-pane fade show active" id="registertab" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <div class="row">
                <div class="col-md-6 form-group mt-1"><input name="name" placeholder="First Name" id="name" class="form-control f-12" type="text"/></div>
                <div class="col-md-6 form-group mt-1"><input name="name" placeholder="Last Name" id="name" class="form-control f-12" type="text"/></div>
                <div class="col-md-6 form-group mt-1"><input name="name" placeholder="Email" id="name" class="form-control f-12" type="email"/></div>
                <div class="col-md-6 form-group mt-1"><input name="name" placeholder="Password" id="name" class="form-control f-12" type="password"/></div>
                <div class="col-md-12 "><p class="f-12"><span class="mdi mdi-check"></span> By clicking this you agree our terms, and privacy policy</p></div>
                <div class="col-md-12"><a href="#" class="btn btn-primary d-block shadow">Register</a> </div>
                <div class="col-md-12"><div class="option text-center"><span>or</span></div></div>
                <div class="col-md-12"><a href="#" class="btn btn-outline-muted d-block mt-4 shadow"><img src="images/google.svg"/> Sign-up with Google</a> </div>
            </div>
        </div>
        // <div className="login-container">    
        //     <div className="container">
        //         <label for="uname"><b>First Name</b></label>
        //             <span className="error">{!errorObj.first_name.error && errorObj.first_name.msg}</span>
        //             <input type="text" placeholder="Enter First Name" name="first_name" value={fieldobj.first_name} onChange={(e) => handleChange(e)} required />
        //         <label for="uname"><b>Last Name</b></label>
        //             <span className="error">{!errorObj.last_name.error && errorObj.last_name.msg}</span>
        //             <input type="text" placeholder="Enter Last Name" name="last_name" value={fieldobj.last_name} onChange={(e) => handleChange(e)} required />
        //         <label for="uname"><b>Email</b></label>
        //             <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>
        //             <input type="text" placeholder="Enter Email" name="email" value={fieldobj.email} onChange={(e) => handleChange(e)} required />
        //         <label for="psw"><b>Password</b></label>
        //             <span className="error">{!errorObj.password.error && errorObj.password.msg}</span>
        //             <input type="password" placeholder="Enter Password" name="password" value={fieldobj.password} onChange={(e) => handleChange(e)} required />
        //         <button type="submit" onClick={handleClick}>Register</button>
        //         {/* <span className="psw">Forgot <a href="#">password?</a></span> */}

        //     </div>
        // </div>
    )
}

export default Login;
