import React, { useEffect } from 'react';
import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";

const Awards = (props) => {
    const handleChange = (key , value) => {
        props.handleAwardsChange(key , value, props.active)
    }

    return(
        <div className="">
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Awards Title
              </label>
              <input
                type="text"
                value={props.value.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="Enter awards title"
              />
            </div>
          </div>
          <div className="row">
              <button
                className="btn btn-danger m-2"
                onClick={() =>  props.handleAwardsDelete(props.active, "awards")}
              >
                {" "}
                Delete
              </button>
              <button
                className="btn btn-success m-2"
                onClick={() => props.handleDone(props.active)}
              >
                {" "}
                Submit
              </button>
            </div>
        </div>
    )
}

export default Awards;