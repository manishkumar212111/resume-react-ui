import React, { useEffect } from 'react';

const Hobbies = (props) => {
    const handleChange = (key , value) => {
        props.handleHobbiesChange(key , value, props.active)
    }

    return(
        <div>
            <input type="text" placeholder="Enter New Hobbies" value={props.value} onChange={(e) => handleChange('name', e.target.value)}></input>
            <span onClick={() => props.handleHobbiesDelete(props.active, "hobbies")}>Delete</span>
            <span onClick={() => props.handleDone(props.active)}>Done</span>

        </div>
    )
}

export default Hobbies;