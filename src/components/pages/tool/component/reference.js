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
        <div>
            <ContentEditable
                value={references.title ? references.title : "Description"}
                onChange={(value) => handleChange('title', value)}  
            />
            
            <input type="text" placeholder="Company Name" value={references.company} onChange={(e) => handleChange('company' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Location" value={references.location} onChange={(e) => handleChange('location' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Position of reference" value={references.position} onChange={(e) => handleChange('position' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Phone No." value={references.phone} onChange={(e) => handleChange('phone' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Email" value={references.email} onChange={(e) => handleChange('email' , e.target.value.toString())}></input><br></br>
            
            <span onClick={() =>  props.handleReferencesDelete(props.active, "references")}>delete</span>
        </div>
    )
}

Reference.defaultProps = defaultProps;
export default Reference;