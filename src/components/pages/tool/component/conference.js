import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    conference : {
        title : "Title",
        location: "",
        date: "",
        description : "Description"
    }
}

const Conference = (props) => {
    const [conference , setConference] = useState(props.conference);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setConference(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...conference , ...fields} , props.active);
    }

    useEffect(() => {
        setConference(props.conference)
    }, [props.conference]);

    return(
        <div>
            <ContentEditable
                value={conference.title ? conference.title : "Institute Name"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={conference.description ? conference.description : "Institute Name"}
                onChange={(value) => handleChange('description', value)} 
            />
            <input type="text" placeholder="Location" value={conference.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>
            <input type="date" placeholder="Date" value={conference.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            <span onClick={() =>  props.handleConferenceDelete(props.active, "conference")}>delete</span>
        </div>
    )
}

Conference.defaultProps = defaultProps;
export default Conference;