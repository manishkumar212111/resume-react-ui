import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    vustom_field : {
        title : "Title",
        location: "",
        date: "",
        description : "Description"
    }
}

const Custom_field = (props) => {
    const [vustom_field , setCustom_field] = useState(props.vustom_field);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setCustom_field(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...vustom_field , ...fields} , props.active);
    }

    useEffect(() => {
        setCustom_field(props.vustom_field)
    }, [props.vustom_field]);

    return(
        <div>
            <ContentEditable
                value={vustom_field.title ? vustom_field.title : "Institute Name"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={vustom_field.description ? vustom_field.description : "Institute Name"}
                onChange={(value) => handleChange('description', value)} 
            />
            <input type="text" placeholder="Location" value={vustom_field.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>
            <input type="date" placeholder="Date" value={vustom_field.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            <span onClick={() =>  props.handleCustom_fieldDelete(props.active, "vustom_field")}>delete</span>
        </div>
    )
}

Custom_field.defaultProps = defaultProps;
export default Custom_field;