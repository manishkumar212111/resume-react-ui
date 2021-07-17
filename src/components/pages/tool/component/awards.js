import React, { useEffect } from 'react';

const Awards = (props) => {
    const handleChange = (key , value) => {
        props.handleAwardsChange(key , value, props.active)
    }

    return(
        
        <div className="card">
            <div className="card-body">
                <div className="form-inline">
                    <input type="text" className="form-control" placeholder="Enter New Awards" value={props.value.title} onChange={(e) => handleChange('title', e.target.value)}></input>
                </div>
                <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleAwardsDelete(props.active, "awards")}>delete</span>    
                <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleDone(props.active)}>Save</span>    
            
            </div>
        </div>
    )
}

export default Awards;