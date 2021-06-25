import React, { useEffect } from 'react';

const Languages = (props) => {
    const handleChange = (key , value) => {
        props.handleLanguagesChange(key , value, props.active)
    }

    return(
        <div>
            <input type="text" placeholder="Enter New Languages" value={props.value} onChange={(e) => handleChange('name', e.target.value)}></input>
            <span onClick={() => props.handleLanguagesDelete(props.active, "languages")}>Delete</span>
            <span onClick={() => props.handleDone(props.active)}>Done</span>
        </div>
    )
}

export default Languages;