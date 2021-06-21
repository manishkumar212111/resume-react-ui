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
        <div>
            <ContentEditable
                value={volunteer.title ? volunteer.title : "Institute Name"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={volunteer.description ? volunteer.description : "Institute Name"}
                onChange={(value) => handleChange('description', value)} 
            />
            <input type="text" placeholder="Location" value={volunteer.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>
            <input type="date" placeholder="Date" value={volunteer.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            <span onClick={() =>  props.handleVolunteerDelete(props.active, "volunteer")}>delete</span>
        </div>
    )
}

Volunteer.defaultProps = defaultProps;
export default Volunteer;