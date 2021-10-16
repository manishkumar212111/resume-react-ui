import React, { useEffect } from "react";
import RangeSlider from "./elements/rangeSlider";
import DeleteIcon from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";
import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";

const Skills = (props) => {
  const handleChange = (key, value) => {
    console.log(key, value);
    props.handleSkillsChange(key, value, props.active);
  };

  return (
    <div className="">
      <div className="col-12 col-md-12">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
            Enter New Skills
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Skills"
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
          onClick={() => props.handleSkillDelete(props.active, "skills")}
        >
          {" "}
          Delete
        </button>
        <button
          className="btn submit_button m-2"
          onClick={() => {props.value.name ? props.handleDone(props.active) : () => {}}}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

export default Skills;
