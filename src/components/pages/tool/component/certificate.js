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
        <div>
            <ContentEditable
                value={certification.title ? certification.title : "Certificate Title"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={certification.providers ? certification.providers : "Certificate Provider"}
                onChange={(value) => handleChange('providers', value)} 
            />
            <input type="date" placeholder="Date" value={certification.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            <input type="text" placeholder="Certification No" value={certification.certificate_no} onChange={(e) => handleChange('certificate_no' , e.target.value)}></input>

            <span onClick={() =>  props.handleCertificationsDelete(props.active, "certifications")}>delete</span>
        </div>
    )
}

Certification.defaultProps = defaultProps;
export default Certification;