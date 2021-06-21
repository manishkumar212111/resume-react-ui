import React , { useState} from "react";
import Helmet from "react-helmet";
import img from "../../scss/images/contact.svg";
import validateUtility from "../../utils/ValidateUtility";
import { sendEnquiry } from "../../actions/common";
import { connect } from "react-redux";

const Contact = (props) => {
    const [fieldobj , setFieldObj] = useState({ subject : "general", name : "",  email : "" , message : "" });
    const [errorObj , setErrorObj] = useState({ subject : { error : true , msg : "Subject is required" } , 
                                                name : { error : true , msg : "This is required field" },
                                                email : { error : true , msg : "This is required field" },
                                                message : { error : true , msg : "This is required field" },
                                             })
    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "subject":
                return  validateUtility.required(value)
            case "name":
                return  validateUtility.required(value)
            case "email" :
                return  validateUtility.email(value)
            case "message" :
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
        let requiredObj = ['subject', 'name' , 'email' , 'message'];
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
        props.sendEnquiry(fieldobj)  

    }
    if(props.enquiry_success){
        return(
            <section className="align-items-center mt-5 pt-5">
            <div className="container">

                <div className="row mt-5 pt-5 mb-5">
                    <div className="col-md-6">
                        <h5 className="home-title">Get In Touch</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h4 style={{'color' : 'green'}}>Your message has been sent. Our executive will react to you as soon as possible</h4>
                        <div className="option text-center mt-5"><span>or</span></div>
                        <div className="col-md-12 text-center mt-4">
                        <a href="#" className="text-primary">Email us At : Contact@123</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img} className="w-100"/>

                    </div>

                </div>


            </div>
        </section>
 
        )
    }
    return(
        <section className="align-items-center mt-5 pt-5">
            <div className="container">

                <div className="row mt-5 pt-5 mb-5">
                    <div className="col-md-6">
                        <h5 className="home-title">Get In Touch</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="w-100 bg-white shadow p-4">
                        <div className="row">
                            <div className="col-md-6 form-group mt-1"><label>Subject</label>
                                <span className="error">{!errorObj.subject.error && errorObj.subject.msg}</span>          
                                <select className="form-control" value={fieldobj.subject} id="subject" onChange={(e) => handleChange(e)} name="subject">
                                    <option value="general">General</option>
                                    <option value="payment">Payment</option>
                                    <option value="website">Website</option>
                                    <option value="plan">Plan</option>

                                </select>
                                {/* <input name="subject" className="form-control f-12" type="text" /> */}
                            </div>
                            <div className="col-md-6 form-group mt-1"><label>Name</label>
                                <span className="error">{!errorObj.name.error && errorObj.name.msg}</span>          
                                <input name="name"  id="name" className="form-control f-12" value={fieldobj.name} onChange={(e) => handleChange(e)} type="text" />
                            </div>
                            <div className="col-md-12 form-group mt-1"><label>Email</label>
                                <span className="error">{!errorObj.email.error && errorObj.email.msg}</span>          
                                <input name="email"  id="name" className="form-control f-12" type="email" value={fieldobj.email} onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="col-md-12 form-group mt-1">
                                <label>Message</label>
                                <span className="error">{!errorObj.message.error && errorObj.message.msg}</span>          
                                <textarea className="form-control" name="message" value={fieldobj.message} onChange={(e) => handleChange(e)}></textarea>
                                </div>
                            <div className="col-md-12" onClick={handleClick}><button style={{float : "right"}} className={`btn btn-primary ${props.updating_enquiry ? 'btnDisabled' : ''}`} disabled={props.updating_enquiry}>Get In Touch <span className="mdi mdi-arrow-right"></span></button></div>
                        </div>
                        </div>
                        <div className="option text-center mt-5"><span>or</span></div>
                        <div className="col-md-12 text-center mt-4">
                        <a href="#" className="text-primary">Email us At : Contact@123</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img} className="w-100"/>

                    </div>

                </div>


            </div>
        </section>

    )
}


const mapStateToProps = ( state ) => ( {
    updating_enquiry: state.common.updating_enquiry,
    enquiry_success : state.common.enquiry_success
} );

const mapDispatchToProps = {
    sendEnquiry
};
export default connect( mapStateToProps, mapDispatchToProps )( Contact );

