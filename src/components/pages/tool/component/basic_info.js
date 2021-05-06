import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import validateUtility from "../../../../utils/ValidateUtility";

const socialIcon = {
    "linkedin" : "mdi-linkedin",
    "github" : "mdi-github",
    "instagram" : "mdi-instagram",
    "facebook" : "mdi-facebook",
    "twitter" : "mdi-twitter",
    "gitlab" : "mdi-gitlab"
}
const BasicInfo = (props) => {
    const [fieldobj , setFieldObj] = useState(props.basic_info);
    const [errorObj , setErrorObj] = useState({ email : { error : true , msg : "Please enter valid email" } , 
        first_name : { error : true , msg : "This is required field" },
        last_name : { error : true , msg : "This is required field" },
        ccode : { error : true , msg : "Country code invalid" },
        contact : { error : true , msg : "Contact No should be valid" },
    })

    const validateField = (key , value) => {
        value = value ? value : fieldobj[key] 
        switch(key) {
            case "first_name":
                return  validateUtility.required(value)
            case "last_name":
                return  validateUtility.required(value)
            case "contact" :
                return  validateUtility.required(value)
            case "ccode" :
                return  validateUtility.required(value)
            
            case "email" :
                return  validateUtility.email(value)
            case "password" :
                return  validateUtility.required(value)
                
            default :
                return true;
        }
    }

    const handleClick = () => {
        let requiredObj = ['first_name' , 'email', 'ccode' , 'contact'];
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
        
        props.basicInfoUpdate(fieldobj)  
    }

    const handleChange = (e) => {
        let field = fieldobj;
        field[e.target.name] = e.target.value;
        setFieldObj(fieldOb => ({...fieldOb , ...field}))

        let errOb = errorObj;
        errOb[e.target.name].error = validateField(e.target.name);

        setErrorObj( errorOb => ( { ...errorOb , errOb}))
    }
    
    const handleAddressCheckbox = (e, type) => {
        let field = fieldobj;
        if(!type)
            field['address'].status = e.target.checked;
        else
            field['address'][type].status = e.target.checked;

        setFieldObj(fieldOb => ({...fieldOb , ...field}))

    }

    const handleWillingToRelocate = (e) => {
        let field = fieldobj;
        // console.log(e)
        field['willing_to_relocate'] = e.target.checked;
        setFieldObj(fieldOb => ({...fieldOb , ...field}))
    }

    const handleDobChange = (e) => {
        let field = fieldobj;
        // console.log(e)
        field['dob'] = e;
        setFieldObj(fieldOb => ({...fieldOb , ...field}))
    }

    const onSocialAccountChange = (e , value , key, fld) => {
        let field = fieldobj;
        // console.log(e)
        field['social_account'][key][fld] = value;
        setFieldObj(fieldOb => ({...fieldOb , ...field}))
    }
    const handleAddressChange = (e , type) => {
        let field = fieldobj;
        if(type == 'address'){
            field['address'].address = e.target.value;
        } else {
            field['address'][type].value = e.target.value;
        } 
        setFieldObj(fieldOb => ({...fieldOb , ...field}))    
        
    }
    console.log(fieldobj)
    return(
        <>
        <div className="row">
            <div className="col-md-12 form-group mt-1">
                <button className="btn btn-primary" onClick={handleClick} style={{"float" : "right"}}>Update</button>
            </div>
            <div className="col-md-6 form-group mt-1">
                <input className="form-control f-12" type="text" placeholder="First Name" name="first_name" value={fieldobj.first_name} onChange= { (e) => handleChange(e)}  />
                {!errorObj.first_name.error && <span className="error">{errorObj.first_name.msg}</span>}
            </div>
            <div className="col-md-6 form-group mt-1">
                <input className="form-control f-12" type="text" placeholder="Last Name" name="last_name" value={fieldobj.last_name} onChange= { (e) => handleChange(e)}  />
                {!errorObj.last_name.error && <span className="error">{errorObj.last_name.msg}</span>}
            </div>
            <div className="col-md-12 form-group mt-1">
                <input className="form-control f-12" type="email" placeholder="Email" name="email" value={fieldobj.email} onChange= { (e) => handleChange(e)}  />
                {!errorObj.email.error && <span className="error">{errorObj.email.msg}</span>}    
            </div>
            <div className="col-md-12 form-group mt-1">
                <input type="checkbox" onChange={(e) => handleAddressCheckbox(e)} checked={fieldobj.address.status}></input><label>Address - Home</label>
                <input className="form-control f-12" type="text" name="address" placeholder="Address" value={fieldobj.address.address} onChange={(e) => handleAddressChange(e , 'address')} />

            </div>
            <div className="col-md-6 form-group mt-1">
                <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'city')} checked={fieldobj.address.city.status}></input><label>City</label>
                <input className="form-control f-12" type="text" name="city" placeholder="city" value={fieldobj.address.city.value} onChange={(e) => handleAddressChange(e , 'city')} />
 
            </div>
            <div className="col-md-6 form-group mt-1">
                <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'state')} checked={fieldobj.address.state.status}></input><label>City</label>
                <input className="form-control f-12" type="text" name="state" placeholder="State" value={fieldobj.address.state.value} onChange={(e) => handleAddressChange(e , 'state')} />
 
            </div>
            <div className="col-md-6 form-group mt-1">
                <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'country')} checked={fieldobj.address.country.status}></input><label>country</label>
                <input className="form-control f-12" type="text" name="country" placeholder="country" value={fieldobj.address.country.value} onChange={(e) => handleAddressChange(e , 'country')} />

            </div>
            <div className="col-md-6 form-group mt-1">
                <label>dob</label>
                <DatePicker
                    onChange={handleDobChange}
                    value={fieldobj.dob ? new Date(fieldobj.dob) : ""}
                    name='dob'
                    style={{"background-color": "#EDF1F4",
                        "border": "0px solid #ced4da !imporant"}}
                    // className="form-control f-12"
                    maxDate={new Date('01/01/2005')}
                />
                {/* <input className="form-control f-12" name="name"  id="name" className="form-control f-12" type="date" /> */}
                
            </div>
            <div className="col-md-3 form-group mt-1">
                <input className="form-control f-12" type="text" name="ccode" value={fieldobj.ccode} onChange= { (e) => handleChange(e)}  />
                {!errorObj.ccode.error && <span className="error">{errorObj.ccode.msg}</span>}
            </div>
            <div className="col-md-9 form-group mt-1">
                <input className="form-control f-12" type="text" name="contact" value={fieldobj.contact} onChange= {(e) => handleChange(e)} />
                {/* onKeyDown={ (e) => validateUtility.stopDefault(e)} data-vu-type="number" */}
                {!errorObj.contact.error && <span className="error">{errorObj.contact.msg}</span>}
            </div>
            <div className="col-md-12"> 
                <label>Social Account</label>
            </div>
            {
                fieldobj.social_account.map((itm , index) => (
                    <div className="row mt-2">
                        <div className="col-md-3">

                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" name={itm.type} onChange = {(e) => onSocialAccountChange(e , e.target.checked , index , 'status') } checked={itm.status} />
                                <label className="" for="customCheck1"><i className={`mdi ${socialIcon[itm.type]}`}></i></label>
                            </div>
                        </div>

                        <div className="col-md-9">

                            <input className="form-control f-12" type="text" placeholder="url" name={itm.type} value={itm.url} onChange = {(e) => onSocialAccountChange(e , e.target.value , index , 'url') } />

                        </div>
                    </div>   
                ))
            }
            {/* <div className="col-md-12"> <div className="custom-control custom-checkbox">
                <input className="form-control f-12" type="checkbox" className="custom-control-input" id="customCheck1" name="example1" />
                <label className="custom-control-label" for="customCheck1"><i className="mdi mdi-twitter"></i></label>
            </div> </div>
                    <div className="col-md-12"> <div className="custom-control custom-checkbox">
                <input className="form-control f-12" type="checkbox" className="custom-control-input" id="customCheck2" name="example1" />
                <label className="custom-control-label" for="customCheck2"><i className="mdi mdi-linkedin"></i></label>
            </div> </div>
                        <div className="col-md-12"> <div className="custom-control custom-checkbox">
                <input className="form-control f-12" type="checkbox" className="custom-control-input" id="customCheck3" name="example1" />
                <label className="custom-control-label" for="customCheck3"><i className="mdi mdi-skype-business"></i></label>
            </div> </div>
                            <div className="col-md-12">  <div className="custom-control custom-checkbox">
                <input className="form-control f-12" type="checkbox" className="custom-control-input" id="customCheck4" name="example1" />
                <label className="custom-control-label" for="customCheck4"><i className="mdi mdi-facebook"></i></label>
            </div> 
        </div>
            <div className="col-md-12">  <div className="custom-control custom-checkbox">
                <input className="form-control f-12" type="checkbox" className="custom-control-input" id="customCheck5" name="example1"/>
                <label className="custom-control-label" for="customCheck5"><i className="mdi mdi-instagram"></i></label>
                </div>
            </div> */}

        </div>
        {/* <div>
            <lable>First Name</lable>
            <input className="form-control f-12" type="text" name="first_name" value={fieldobj.first_name} onChange= { (e) => handleChange(e)}  />
            {!errorObj.first_name.error && <span className="error">{errorObj.first_name.msg}</span>}
        
            <lable>Last Name</lable>
            <input className="form-control f-12" type="text" name="last_name" value={fieldobj.last_name} onChange= { (e) => handleChange(e)}  />
            {!errorObj.last_name.error && <span className="error">{errorObj.last_name.msg}</span>}
        
            <lable>Email</lable>
            <input className="form-control f-12" type="email" name="email" value={fieldobj.email} onChange= { (e) => handleChange(e)}  />
            {!errorObj.email.error && <span className="error">{errorObj.email.msg}</span>}
        
            <input className="form-control f-12" type="checkbox" onChange={(e) => handleAddressCheckbox(e)} checked={fieldobj.address.status}></input><label>Address - Home</label>
            <input className="form-control f-12" type="text" name="address" value={fieldobj.address.address} onChange={(e) => handleAddressChange(e , 'address')} />


            <input className="form-control f-12" type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'city')} checked={fieldobj.address.city.status}></input><label>City</label>
            <input className="form-control f-12" type="text" name="city" value={fieldobj.address.city.value} onChange={(e) => handleAddressChange(e , 'city')} />


            <input className="form-control f-12" type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'state')} checked={fieldobj.address.state.status}></input><label>City</label>
            <input className="form-control f-12" type="text" name="state" value={fieldobj.address.state.value} onChange={(e) => handleAddressChange(e , 'state')} />

            <input className="form-control f-12" type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'country')} checked={fieldobj.address.country.status}></input><label>country</label>
            <input className="form-control f-12" type="text" name="country" value={fieldobj.address.country.value} onChange={(e) => handleAddressChange(e , 'country')} />

            <div>
            <DatePicker
                onChange={handleDobChange}
                value={fieldobj.dob}
                name='dob'
                maxDate={new Date('01/01/2005')}
            />
            </div>
            <div>
                
                <lable>Phone No.</lable>
                <input className="form-control f-12" type="text" name="ccode" value={fieldobj.ccode} onChange= { (e) => handleChange(e)}  />
                {!errorObj.ccode.error && <span className="error">{errorObj.ccode.msg}</span>}
            
                <input className="form-control f-12" type="text" name="contact" value={fieldobj.contact} onChange= { (e) => handleChange(e)}  onKeyDown={ (e) => validateUtility.stopDefault(e)} data-vu-type="number" />
                {!errorObj.contact.error && <span className="error">{errorObj.contact.msg}</span>}
            
            </div>
            <input className="form-control f-12" type="checkbox" checked={fieldobj.willing_to_relocate} onChange = {(e) => handleWillingToRelocate(e)} ></input> Willing to relocate
            <h2>
                Social Accounts
            </h2>
            {
                fieldobj.social_account.map((itm , index) => (
                    <div>
                    <input className="form-control f-12" type="checkbox" name={itm.type} onChange = {(e) => onSocialAccountChange(e , e.target.checked , index , 'status') } checked={itm.status} />
                    {itm.type}
                    <input className="form-control f-12" type="input" name={itm.type} value={itm.url} onChange = {(e) => onSocialAccountChange(e , e.target.value , index , 'url') } />

                    </div>   
                ))
            }
            <button onClick={handleClick}> Submit </button>
        </div> */}
        </>
    )
}

export default BasicInfo;