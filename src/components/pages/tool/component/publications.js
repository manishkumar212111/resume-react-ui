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
        <div>
            <ContentEditable
                value={publications.title ? publications.title : "Description"}
                onChange={(value) => handleChange('title', value)}  
            />
            <input type="date" placeholder="Date" value={publications.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            <ContentEditable
                value={publications.description ? publications.description : "Description"}
                onChange={(value) => handleChange('description', value)} 
            />
            <span onClick={() =>  props.handlePublicationsDelete(props.active, "publications")}>delete</span>
        </div>
    )
}

Publication.defaultProps = defaultProps;
export default Publication;