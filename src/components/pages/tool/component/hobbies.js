import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';

const Hobbies = (props) => {
    const handleChange = (key , value) => {
        props.handleHobbiesChange(key , value, props.active)
    }

    return(
        
        <div className="card" style={{width : "224px", color : "black"}}>
            <div className="card-body">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter New Hobbies" value={props.value} onChange={(e) => handleChange('name', e.target.value)}></input>
                
                </div>
                <div className="row float-right">
                    <span onClick={() => props.handleHobbiesDelete(props.active, "hobbies")}><DeleteIcon style={{ color: "red", cursor: "pointer" }} /></span>
                    <span onClick={() => props.handleDone(props.active)}><Done style={{ color: "green",cursor: "pointer" }}/></span>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;