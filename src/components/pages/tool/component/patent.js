import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    patents : {
        title : "Title",
        application_no : "Application number",
        date : "Date",
        location : "Location",
        url : "https://",
        description: "Description",
    }
}

const Patent = (props) => {
    const [patents , setPublication] = useState(props.patents);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setPublication(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...patents , ...fields} , props.active);
    }

    useEffect(() => {
        setPublication(props.patents)
    }, [props.patents]);

    return(
        <div>
            <ContentEditable
                value={patents.title ? patents.title : "Description"}
                onChange={(value) => handleChange('title', value)}  
            />
            <input type="text" placeholder="Application Number" value={patents.application_no} onChange={(e) => handleChange('application_no' , e.target.value.toString())}></input><br></br>
            <input type="date" placeholder="Date" value={patents.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Location" value={patents.location} onChange={(e) => handleChange('location' , e.target.value.toString())}></input><br></br>
            <input type="text" placeholder="Url" value={patents.url} onChange={(e) => handleChange('url' , e.target.value.toString())}></input><br></br>
            
            <ContentEditable
                value={patents.description ? patents.description : "Description"}
                onChange={(value) => handleChange('description', value)} 
            />
            <span onClick={() =>  props.handlePatentsDelete(props.active, "patents")}>delete</span>
        </div>
    )
}

Patent.defaultProps = defaultProps;
export default Patent;