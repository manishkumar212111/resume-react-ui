import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    custom_field : {
        title : "Title",
        location: "",
        date: "",
        description : "Description"
    }
}

const Custom_field = (props) => {
    const [custom_field , setCustom_field] = useState(props.custom_field);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setCustom_field(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...custom_field , ...fields} , props.active);
    }

    useEffect(() => {
        setCustom_field(props.custom_field)
    }, [props.custom_field]);

    return(
        <div>
            <ContentEditable
                value={custom_field.title ? custom_field.title : "Institute Name"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={custom_field.description ? custom_field.description : "Institute Name"}
                onChange={(value) => handleChange('description', value)} 
            />
            <input type="text" placeholder="Location" value={custom_field.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>
            <input type="date" placeholder="Date" value={custom_field.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            <span onClick={() =>  props.handleCustom_fieldDelete(props.active, "custom_field")}>delete</span>
        </div>
    )
}

Custom_field.defaultProps = defaultProps;
export default Custom_field;