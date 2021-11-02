import React, { useEffect } from "react";
import { useState } from "react";
import ContentEditable from "../../../elements/contentEditable";
import MonthPicker from "month-year-picker";
import rmfJobTitle from "./../form/images/icons-image/rmf-job-title.svg";

import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";

const defaultProps = {
  experience: {
    title: "",
    company: "",
    location: "",
    duration: {
      from: "",
      to: "",
    },
    achievements: "",
    description: "",
    areaOfWork: "",
    currentCompany: false
  },
};

const Experience = (props) => {
  const [experience, setExperience] = useState(props.experience);

  useEffect(() => {
    setExperience(experience);
  }, [props.experience]);
  
  const handleChange = (key, value) => {
    console.log(key, value);
    let fields = {};
    fields[key] = value;
    setExperience((fld) => ({ ...fld, ...fields }));
    props.handleExperiencesChange(key, experience, props.active);
  };

  const handleDateChange = (key, value) => {
    console.log(key, value);
    let fields = experience.duration;
    fields[key] = value;
    setExperience((fld) => ({ ...fld, duration:fields }));
    props.handleExperiencesChange(key, experience, props.active);
  };


  const handleCurrentChange = (e) => {
      let fields = experience;
      // setexperience(fld => ({ ...fld , ...fields}))
      fields['currentCompany'] = e.target.checked;
      // fields["duration"]["to"]["mm"] = new Date().getMonth() + 1;
      // fields["duration"]["to"]["yy"] = new Date().getFullYear();
      setExperience((fld) => ({ ...fld, ...fields }));
      props.handleExperiencesChange("duration", experience, props.active);
  };
  console.log(experience, props.active);
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfJobTitle} alt="" width="18px" height="18px" />
            Job Title/Position
          </label>
          <input
            type="text"
            value={experience.title ? experience.title : ""}
            onChange={(e) => handleChange("title", e.target.value)}
            name=""
            placeholder="Job Title"
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img
              src="images/icons-image/rmf-city.svg"
              alt=""
              width="18px"
              height="18px"
            />
            Company/Employer{" "}
          </label>
          <input
            type="text"
            name=""
            placeholder="Company Name"
            value={experience.company ? experience.company : ""}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
      </div>
      {/* <div className="row"> */}
        <div className="col-12 col-md-6">
          <div className="rmfInputfiled m24">
            <label>
              <img
                src="images/icons-image/rmf-city.svg"
                alt=""
                width="18px"
                height="18px"
              />
              Area Of Work
            </label>
            <input
              type="text"
              name=""
              placeholder="Area of Work/Experience"
              value={experience.areaOfWork ? experience.areaOfWork : ""}
              onChange={(e) => handleChange("areaOfWork", e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="rmfInputfiled m24">
            <label>
              <img src={rmfFiMapPin} alt="" width="18px" height="18px" />
              Location
            </label>
            <input
              type="text"
              value={experience.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="City, Country"
            />
          </div>
        </div>
      {/* </div> */}

      <div className="col-12 col-md-6">
        <div className="rmfInputfiled rmfInputwitCheck m24">
          <label>
            <img src={rmfCalender} alt="" width="18px" height="18px" />
            Start date
          </label>
          <div style={{ display: "flex" }}>
            <input
              type="month"
              id="from"
              className="form-control"
              value={experience.duration.from}
              onChange={(e) => handleDateChange("from", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="rmfInputfiled rmfInputwitCheck m24">
          <label>
            <img src={rmfCalender} alt="" width="18px" height="18px" />
            End Date
            <label class="rmf_control rmf_checkbox">Currently Working Here
                <input type="checkbox" checked={experience.currentCompany} onChange={(e) => handleCurrentChange(e)}/>
                <span class="rmf_control__indicator"></span>
            </label>
          </label>
          <div style={{ display: "flex" }}>
            <input
              type="month"
              className="form-control"
              placeholder={"mm"}
              value={experience.duration.to}
              onChange={(e) => handleDateChange("to", e.target.value)}
            />
            
          </div>
        </div>
        {/* <input
                type="radio"
                className="form-control"
                value="currently_working"
                onChange={(e) => handleCurrentChange(e)}
          ></input>
          Currenlty Working here */}
      </div>
      <div className="col-12 col-md-12">
        <div className="rmfInputfiled m24">
          <label>
            <img
              src={rmfFiMapPin}
              ahandleSavelt=""
              width="18px"
              height="18px"
            />
            Description
          </label>
          <ContentEditable
            value={experience.description}
            onChange={(value) => handleChange("description", value)}
          />
        </div>
      </div>
      <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
        <button
          className="btn cancel_button m-2"
          onClick={() =>
            props.handleExperienceDelete(props.active, "experience")
          }
        >
          {" "}
          Delete
        </button>
        <button
          className="btn submit_button m-2"
          onClick={() => props.handleSave(props.active)}
        >
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

Experience.defaultProps = defaultProps;

export default Experience;

{
  /* 
    <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-title.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Job Title/Position
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-city.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Company/Employer{" "}
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Start Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>End Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-settings.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Area of Work/Industry
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Job Description{" "}
                    </label>
                    <textarea rows="6">E.g. Finance or IT</textarea>
                  </div>
                </div>
                } */
}
