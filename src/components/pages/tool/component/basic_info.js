import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import validateUtility from "../../../../utils/ValidateUtility"
const BasicInfo = (props) => {
    const [fieldobj , setFieldObj] = useState(props.basic_info);
    const [errorObj , setErrorObj] = useState({ email : { error : true , msg : "Please enter valid email" } , 
        first_name : { error : true , msg : "This is required field" },
        last_name : { error : true , msg : "This is required field" },
        ccode : { error : true , msg : "Contact No should be valid" },
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
        <div>
            <lable>First Name</lable>
            <input type="text" name="first_name" value={fieldobj.first_name} onChange= { (e) => handleChange(e)}  />
            {!errorObj.first_name.error && <span className="error">{errorObj.first_name.msg}</span>}
        
            <lable>Last Name</lable>
            <input type="text" name="last_name" value={fieldobj.last_name} onChange= { (e) => handleChange(e)}  />
            {!errorObj.last_name.error && <span className="error">{errorObj.last_name.msg}</span>}
        
            <lable>Email</lable>
            <input type="email" name="email" value={fieldobj.email} onChange= { (e) => handleChange(e)}  />
            {!errorObj.email.error && <span className="error">{errorObj.email.msg}</span>}
        
            <input type="checkbox" onChange={(e) => handleAddressCheckbox(e)} checked={fieldobj.address.status}></input><label>Address - Home</label>
            <input type="text" name="address" value={fieldobj.address.address} onChange={(e) => handleAddressChange(e , 'address')} />


            <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'city')} checked={fieldobj.address.city.status}></input><label>City</label>
            <input type="text" name="city" value={fieldobj.address.city.value} onChange={(e) => handleAddressChange(e , 'city')} />


            <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'state')} checked={fieldobj.address.state.status}></input><label>City</label>
            <input type="text" name="state" value={fieldobj.address.state.value} onChange={(e) => handleAddressChange(e , 'state')} />

            <input type="checkbox" onChange={(e) => handleAddressCheckbox(e , 'country')} checked={fieldobj.address.country.status}></input><label>country</label>
            <input type="text" name="country" value={fieldobj.address.country.value} onChange={(e) => handleAddressChange(e , 'country')} />

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
                <input type="text" name="ccode" value={fieldobj.ccode} onChange= { (e) => handleChange(e)}  />
                {!errorObj.ccode.error && <span className="error">{errorObj.ccode.msg}</span>}
            
                <input type="text" name="contact" value={fieldobj.contact} onChange= { (e) => handleChange(e)}  onKeyDown={ (e) => validateUtility.stopDefault(e)} data-vu-type="number" />
                {!errorObj.contact.error && <span className="error">{errorObj.contact.msg}</span>}
            
            </div>
            <input type="checkbox" checked={fieldobj.willing_to_relocate} onChange = {(e) => handleWillingToRelocate(e)} ></input> Willing to relocate
            <h2>
                Social Accounts
            </h2>
            {
                fieldobj.social_account.map((itm , index) => (
                    <div>
                    <input type="checkbox" name={itm.type} onChange = {(e) => onSocialAccountChange(e , e.target.checked , index , 'status') } checked={itm.status} />
                    {itm.type}
                    <input type="input" name={itm.type} value={itm.url} onChange = {(e) => onSocialAccountChange(e , e.target.value , index , 'url') } />

                    </div>   
                ))
            }
            <button onClick={handleClick}> Submit </button>
        </div>
    )
}

export default BasicInfo;