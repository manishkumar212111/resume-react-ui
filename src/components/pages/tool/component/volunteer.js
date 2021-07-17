import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    volunteer : {
        title : "Title",
        location: "",
        date: "",
        description : "Description"
    }
}

const Volunteer = (props) => {
    const [volunteer , setVolunteer] = useState(props.volunteer);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setVolunteer(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...volunteer , ...fields} , props.active);
    }

    useEffect(() => {
        setVolunteer(props.volunteer)
    }, [props.volunteer]);

    return(
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={volunteer.title ? volunteer.title : "Institute Name"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable
                        className="card-body"
                        value={volunteer.description ? volunteer.description : "Institute Name"}
                        onChange={(value) => handleChange('description', value)} 
                    />
                    
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" className="form-control" value={volunteer.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>            
            </div>
            
            <div className="mt-4 form-inline">
                <input type="date" className="form-control" placeholder="Date" value={volunteer.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            </div>
            
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleVolunteerDelete(props.active, "volunteer")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
       
    )
}

Volunteer.defaultProps = defaultProps;
export default Volunteer;