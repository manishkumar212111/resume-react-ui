import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    references : {
        title : "Title",
        company : "Company reference",
        location: "Location",
        position: "Position of reference",
        phone: "",
        email : ""
    }
}

const Reference = (props) => {
    const [references , setPublication] = useState(props.references);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setPublication(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...references , ...fields} , props.active);
    }

    useEffect(() => {
        setPublication(props.references)
    }, [props.references]);

    return(
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={references.title ? references.title : "Description"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Company Name" value={references.company} onChange={(e) => handleChange('company' , e.target.value.toString())}></input>
            </div>
            
            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" value={references.location} onChange={(e) => handleChange('location' , e.target.value.toString())}></input>

            </div>
            

            <div className="mt-4 form-inline">
                <input type="text" placeholder="Position of reference" value={references.position} onChange={(e) => handleChange('position' , e.target.value.toString())}></input>
            </div>

            <div className="mt-4 form-inline">
             <input type="text" placeholder="Phone No." value={references.phone} onChange={(e) => handleChange('phone' , e.target.value.toString())}></input>

            </div>

            <div className="mt-4 form-inline">
             <input type="text" placeholder="Email" value={references.email} onChange={(e) => handleChange('email' , e.target.value.toString())}></input>

            </div>
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleReferenceDelete(props.active, "reference")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
       
    )
}

Reference.defaultProps = defaultProps;
export default Reference;