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
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={achievement.title ? achievement.title : "Institute Name"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable
                        className="card-body"
                        value={achievement.description ? achievement.description : "Institute Name"}
                        onChange={(value) => handleChange('description', value)} 
                    />
                    
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" className="form-control" value={achievement.location} onChange={(e) => handleChange('location' , e.target.value)}></input><br></br>            
            </div>
            
            <div className="mt-4 form-inline">
                <input type="date" className="form-control" placeholder="Date" value={achievement.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            </div>
            
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleAchievementDelete(props.active, "achievement")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Achievement.defaultProps = defaultProps;
export default Achievement;