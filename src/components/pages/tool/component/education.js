import React, { useEffect } from "react";
import { useState } from "react";
import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
import rmfDegreeName from "./../form/images/icons-image/rmf-degree-name.svg";
import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
import rmfDegreeMazor from "./../form/images/icons-image/rmf-degree-major.svg";
import rmfShoolBuilding from "./../form/images/icons-image/rmf-school-building.svg";
import rmfDescription from "./../form/images/icons-image/rmf-job-disp.svg";
import ContentEditable from "../../../elements/contentEditable";

const defaultProps = {
  education: {
    awards: [],
    courses: [],
    degree: "",
    degree_major: "",
    startDate: "",
    endDate: "",
    institute_name: "",
    location: "",
    marks: { value: "", type: "" },
    projects: [],
    thesis: [],
    description : "",
  },
};

const Education = (props) => {
  const [education, setEducation] = useState(props.education);

  useEffect(() => {
    setEducation(education)
  }, [props.education]);
  const handleChange = (key, value) => {
    console.log(key, value);
    let fields = {};
    fields[key] = value;
    setEducation((fld) => ({ ...fld, ...fields }));
    props.handleEducationsChange(key, { ...education, ...fields }, props.active);
  };

  //   const onDateChange = (key, value, max, e) => {
  //     let fields = education;
  //     setEducation((fld) => ({ ...fld, ...fields }));

  //     if (max < parseInt(value)) {
  //       fields["duration"][key][e.target.name] =
  //         e.target.name == "mm" ? "12" : "2022";
  //     } else if (parseInt(value) <= 0) {
  //       fields["duration"][key][e.target.name] =
  //         e.target.name == "mm" ? "1" : "1980";
  //     } else {
  //       fields["duration"][key][e.target.name] = value;
  //     }
  //     setEducation((fld) => ({ ...fld, ...fields }));
  //     props.handleChange("duration", education, props.active);
  //   };
  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfDegreeName} alt="" width="18px" height="18px" />
            Degree Name
          </label>
          <input
            type="text"
            value={education.degree ? education.degree : ""}
            onChange={(e) => handleChange("degree", e.target.value)}
            placeholder="E. g. Bachlors/Masters"
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfDegreeMazor} alt="" width="18px" height="18px" />
            Degree Major
          </label>
          <input
            type="text"
            name=""
            value={
              education.degree_major ? education.degree_major : ""
            }
            onChange={(value) =>
              handleChange("degree_major", value.target.value)
            }
            placeholder="E. g. Finance, Electronic "
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
            name=""
            value={education.location ? education.location : ""}
            onChange={(value) => handleChange("location", value.target.value)}
            placeholder="City, Country"
          />
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="rmfInputfiled m24">
          <label>Start Date</label>
          {/* <span className="rmf-calendar-icon">
            <img src={rmfCalender} alt="" />
          </span> */}
          <input
            type="month"
            name="date"
            value={education.startDate ? education.startDate : ""}
            onChange={(value) => handleChange("startDate", value.target.value)}
            // placeholder="MM/YYY"
          />
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="rmfInputfiled rmfInputwitCheck m24">
          <label>
            End Date
            {/* <label className="rmf_control rmf_checkbox">
              Present
              <input type="checkbox" />
              <span className="rmf_control__indicator"></span>
            </label> */}
          </label>
          {/* <span className="rmf-calendar-icon">
            <img src={rmfCalender} alt="" />
          </span> */}
          <input
            type="month"
            name=""
            value={education.endDate ? education.endDate : ""}
            onChange={(value) => handleChange("endDate", value.target.value)}
            placeholder="MM/YYY"
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfShoolBuilding} alt="" width="18px" height="18px" />
            School/College/University
          </label>
          <input
            type="text"
            value={
              education.institute_name
                ? education.institute_name
                : "Study Program"
            }
            onChange={(value) =>
              handleChange("institute_name", value.target.value)
            }
            name=""
            placeholder=""
          />
        </div>
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
            value={education.description ? education.description : "description"}
            onChange={(value) => handleChange("description", value)}
          />
        </div>
      </div>
      <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
        <button
          className="btn cancel_button m-2"
          onClick={() => props.handleEducationDelete(props.active, "education")}
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

Education.defaultProps = defaultProps;

export default Education;
