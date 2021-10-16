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
          <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
              <button
                className="btn cancel_button m-2"
                onClick={() =>  props.handleAwardsDelete(props.active, "awards")}
              >
                {" "}
                Delete
              </button>
              <button
                className="btn submit_button m-2"
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