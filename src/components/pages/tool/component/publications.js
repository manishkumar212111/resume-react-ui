import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    publications : {
        title : "Title",
        date: "",
        description : "Description"
    }
}

const Publication = (props) => {
    const [publications , setPublication] = useState(props.publications);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setPublication(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...publications , ...fields} , props.active);
    }

    useEffect(() => {
        setPublication(props.publications)
    }, [props.publications]);

    return(
        <div className="card" style={{color : "black" , width : "224px"}}>
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={publications.title ? publications.title : "Description"}
                            onChange={(value) => handleChange('title', value)}   
                            className="card-body"
            
                        />
                    </h3>
                </div>
            

            <div className="mt-4 form-group">
                <input type="date" className="form-control" placeholder="Date" value={publications.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            
            </div>
            
            <div className="card">   
                    <ContentEditable
                        value={publications.description ? publications.description : "Description"}
                        onChange={(value) => handleChange('description', value)}  
                        className="card-body"
                    />
            </div>
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handlePublicationsDelete(props.active, "publications")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>                
            </div>
    </div>
    )
}

Publication.defaultProps = defaultProps;
export default Publication;