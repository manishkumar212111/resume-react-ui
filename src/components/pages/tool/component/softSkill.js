import React, { useEffect } from "react";
import RangeSlider from "./elements/rangeSlider";
import DeleteIcon from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";
import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";

const SoftSkills = (props) => {
  const handleChange = (key, value) => {
    console.log(key, value);
    props.handleSoftSkillsChange(key, value, props.active);
  };

  return (
    <div className="">
      <div className="col-12 col-md-12">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
            Enter New SoftSkills
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter New SoftSkills"
            value={props.value.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <RangeSlider
          value={props.value.score ? props.value.score : 0}
          handleChange={(value) => handleChange("score", value)}
        />
      </div>
      <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
        <button
          className="btn cancel_button m-2"
          onClick={() => props.handleSoftSkillDelete(props.active, "softSkills")}
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
  );
};

export default SoftSkills;
