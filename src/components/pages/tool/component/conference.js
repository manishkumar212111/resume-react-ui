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
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={conference.title ? conference.title : "Institute Name"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable
                        className="card-body"
                        value={conference.description ? conference.description : "Institute Name"}
                        onChange={(value) => handleChange('description', value)} 
                    />
                    
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" className="form-control" value={conference.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>            
            </div>
            
            <div className="mt-4 form-inline">
                <input type="date" className="form-control" placeholder="Date" value={conference.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            </div>
            
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleConferenceDelete(props.active, "conference")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Conference.defaultProps = defaultProps;
export default Conference;