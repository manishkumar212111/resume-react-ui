import React, { useEffect } from 'react';

const Skills = (props) => {
    const handleChange = (key , value) => {
        props.handleSkillsChange(key , value, props.active)
    }

    return(
        <div>
            <input type="text" placeholder="Enter New Skills" value={props.value.name} onChange={(e) => handleChange('name', e.target.value)}></input>
            <span onClick={() => props.handleSkillDelete(props.active, "skills")}>Delete</span>
            <span onClick={() => props.handleDone(props.active)}>Done</span>

        </div>
    )
}

export default Skills;