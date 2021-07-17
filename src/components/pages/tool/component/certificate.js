import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    certifications : {
        title : "Title",
        providers :"Training Providers and Location",
        date : "",
        location: "Location",
        certificate_no:"Certificate number"
    }
}

const Certification = (props) => {
    const [certification , setCertification] = useState(props.certifications);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setCertification(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...certification , ...fields} , props.active);
    }

    useEffect(() => {
        setCertification(props.certifications)
    }, [props.certifications]);

    return(
        <div className="card" style={{color : "black" , width : "224px"}}>
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={certification.title ? certification.title : "Certificate Title"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable
                        className="card-body"
                        value={certification.providers ? certification.providers : "Certificate Provider"}
                        onChange={(value) => handleChange('providers', value)} 
                    />
                    
                </div>


            <div className="mt-4 form-group">
                <input type="date" className="form-control" placeholder="Date" value={certification.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            
            </div>
            
            <div className="mt-4 form-group">
                <input type="text" className="form-control" placeholder="Certification No" value={certification.certificate_no} onChange={(e) => handleChange('certificate_no' , e.target.value)}></input>
            </div>
            
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleCertificationsDelete(props.active, "certifications")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Certification.defaultProps = defaultProps;
export default Certification;