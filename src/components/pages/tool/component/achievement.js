import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    achievement : {
        title : "Title",
        location: "",
        date: "",
        description : "Description"
    }
}

const Achievement = (props) => {
    const [achievement , setAchievement] = useState(props.achievement);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setAchievement(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...achievement , ...fields} , props.active);
    }

    useEffect(() => {
        setAchievement(props.achievement)
    }, [props.achievement]);

    return(
        <div>
            <ContentEditable
                value={achievement.title ? achievement.title : "Institute Name"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={achievement.description ? achievement.description : "Institute Name"}
                onChange={(value) => handleChange('description', value)} 
            />
            <input type="text" placeholder="Location" value={achievement.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>
            <input type="date" placeholder="Date" value={achievement.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>

            <span onClick={() =>  props.handleAchievementDelete(props.active, "achievement")}>delete</span>
        </div>
    )
}

Achievement.defaultProps = defaultProps;
export default Achievement;