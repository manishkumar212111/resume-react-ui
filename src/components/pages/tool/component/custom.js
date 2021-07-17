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
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={custom_field.title ? custom_field.title : "Institute Name"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable
                        className="card-body"
                        value={custom_field.description ? custom_field.description : "Institute Name"}
                        onChange={(value) => handleChange('description', value)} 
                    />
                    
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" className="form-control" value={custom_field.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>            
            </div>
            
            <div className="mt-4 form-inline">
                <input type="date" className="form-control" placeholder="Date" value={custom_field.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            </div>
            
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleCustom_fieldDelete(props.active, "custom_field")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Custom_field.defaultProps = defaultProps;
export default Custom_field;