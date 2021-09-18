import React from "react";
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
      from: { mm: "", yy: "" },
      to: { mm: "", yy: "" },
    },
    achievements: "",
    description: "",
  },
};

const Experience = (props) => {
  const [experience, setExperience] = useState(props.experience);

  const handleChange = (key, value) => {
    console.log(key, value);
    let fields = {};
    fields[key] = value;
    setExperience((fld) => ({ ...fld, ...fields }));
    props.handleExperiencesChange(key, experience, props.active);
  };

  const onDateChange = (key, value, max, e) => {
    let fields = experience;
    // setexperience(fld => ({ ...fld , ...fields}))

    if (max < parseInt(value)) {
      fields["duration"][key][e.target.name] =
        e.target.name == "mm" ? "12" : "2022";
    } else if (parseInt(value) <= 0) {
      fields["duration"][key][e.target.name] =
        e.target.name == "mm" ? "1" : "1980";
    } else {
      fields["duration"][key][e.target.name] = value;
    }
    setExperience((fld) => ({ ...fld, ...fields }));
    props.handleExperiencesChange("duration", experience, props.active);
  };

  const handleCurrentChange = (e) => {
    if (e.target.checked) {
      let fields = experience;
      // setexperience(fld => ({ ...fld , ...fields}))

      fields["duration"]["to"]["mm"] = new Date().getMonth() + 1;
      fields["duration"]["to"]["yy"] = new Date().getFullYear();
      setExperience((fld) => ({ ...fld, ...fields }));
      props.handleExperiencesChange("duration", experience, props.active);
    }
  };
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img
              src={rmfJobTitle}
              alt=""
              width="18px"
              height="18px"
            />
            Job Title/Position
          </label>
          <input type="text"  value={experience.title ? experience.title : "title"}
              onChange={(e) => handleChange("title", e.target.value)}
             name="" placeholder="" />
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
          <input
            type="text"
            name=""
            placeholder=""
            value={experience.company ? experience.company : "Company Name"}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
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
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24" >
              <label>
                <img src={rmfCalender} alt="" width="18px" height="18px" />

                Start date
              </label>
              <div style={{display:"flex"}}>
              <input
                type="number"
                id="from"
                style={{width:"50%"}}
                className="form-control"
                placeholder={"mm"}
                value={experience.duration.from.mm}
                min="1"
                max="12"
                name="mm"
                onChange={(e) => onDateChange("from", e.target.value, 12, e)}
              />
              <input
                    type="number"
                    className="form-control"
                    name="yy"
                    style={{width:"50%"}}
                    value={experience.duration.from.yy}
                    placeholder={"yyyy"}
                    min="1950"
                    max="2050"
                    onChange={(e) => onDateChange("from", e.target.value, 2030, e)}
                />
                </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                <img src={rmfCalender} alt="" width="18px" height="18px" />

                End Date
              </label>
              <div style={{display:"flex"}}>

              <input
              type="number"
              className="form-control"
              placeholder={"mm"}
              value={experience.duration.to.mm}
              min="1"
              max="12"
              name="mm"
              max={12}
              onChange={(e) => onDateChange("to", e.target.value, 12, e)}
              />
              <input
                type="number"
                className="form-control"
                name="yy"
                value={experience.duration.to.yy}
                placeholder={"yyyy"}
                min="1950"
                max="2050"
                onChange={(e) => onDateChange("to", e.target.value, 2030, e)}
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
                <img src={rmfFiMapPin} ahandleSavelt="" width="18px" height="18px" />
                Description
              </label>
              <ContentEditable 
                value={experience.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row">
              <button
                className="btn btn-danger m-2"
                onClick={() =>
                  props.handleExperienceDelete(props.active, "experience")
                }
              >
                {" "}
                Delete
              </button>
              <button
                className="btn btn-success m-2"
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
