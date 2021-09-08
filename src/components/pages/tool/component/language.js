import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';

const Languages = (props) => {
    const handleChange = (key , value) => {
        props.handleLanguagesChange(key , value, props.active)
    }

    return(<>
        <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                      <input type="text" className="form-control" placeholder="Enter New Languages" value={props.value} onChange={(e) => handleChange('name', e.target.value)}></input>
            </div>
        </div>
        <div className="row">
            <button className="btn btn-danger m-2" onClick={() => props.handleLanguagesDelete(props.active, "languages")}> Delete</button>
            <button className="btn btn-success m-2" onClick={() => props.handleDone(props.active)}> Submit</button>
        </div>
        {/* <div className="col-12 col-md-12 m24">
            <div className="range-slider-group range-slider-group-blue">
            <input
                type="range"
                min="0"
                max="255"
                value="121"
                data-color="#00f"
                className="range-slider range-slider-blue"
                id="range-slider-blue"
            />
            </div>
        </div> */}
        </>
        
    )
}

export default Languages;