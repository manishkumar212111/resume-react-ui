import React, { useEffect } from 'react';
import RangeSlider from './elements/rangeSlider';
import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';


const Skills = (props) => {
    const handleChange = (key , value) => {
        console.log(key, value)
        props.handleSkillsChange(key , value, props.active)
    }

    return(
        
        <div className="card" style={{width : "224px", color : "black"}}>
            <div className="card-body">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter New Skills" value={props.value.name} onChange={(e) => handleChange('name', e.target.value)}></input>
                </div>
                <RangeSlider value={props.value.score ? props.value.score : 50} handleChange={(value) => handleChange('score', value)}/>
                <div className="row float-right">
                    <span onClick={() => props.handleSkillDelete(props.active, "skills")}><DeleteIcon style={{ color: "red", cursor: "pointer" }} /></span>
                    <span onClick={() => props.handleDone(props.active)}><Done style={{ color: "green",cursor: "pointer" }}/></span>
                </div>
            </div>
        </div>
    )
}

export default Skills;