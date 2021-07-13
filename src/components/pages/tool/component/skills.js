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
        <div>
            <input type="text" placeholder="Enter New Skills" value={props.value.name} onChange={(e) => handleChange('name', e.target.value)}></input>
            <RangeSlider value={props.value.score ? props.value.score : 50} handleChange={(value) => handleChange('score', value)}/>
            <span onClick={() => props.handleSkillDelete(props.active, "skills")}><DeleteIcon style={{ color: "red", cursor: "pointer" }} /></span>
            <span onClick={() => props.handleDone(props.active)}><Done style={{ color: "green",cursor: "pointer" }}/></span>

        </div>
    )
}

export default Skills;