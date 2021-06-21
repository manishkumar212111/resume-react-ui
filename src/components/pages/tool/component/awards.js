import React, { useEffect } from 'react';

const Awards = (props) => {
    const handleChange = (key , value) => {
        props.handleAwardsChange(key , value, props.active)
    }

    return(
        <div>
            <input type="text" placeholder="Enter New Awards" value={props.value.title} onChange={(e) => handleChange('title', e.target.value)}></input>
            <span onClick={() => props.handleAwardsDelete(props.active, "awards")}>Delete</span>
            <span onClick={() => props.handleDone(props.active)}>Done</span>

        </div>
    )
}

export default Awards;