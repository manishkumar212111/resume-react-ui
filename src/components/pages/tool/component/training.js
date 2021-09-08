import React, { useEffect, useState } from "react";
import ContentEditable from "../../../elements/contentEditable";

import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";

const defaultProps = {
  trainings: {
    title: "Title",
    providers: "Training Providers and Location",
    date: "",
    location: "",
    description: "",
  },
};

const Training = (props) => {
  const [training, setTraining] = useState(props.trainings);

  const handleChange = (key, value) => {
    let fields = {};
    fields[key] = value;
    setTraining((fld) => ({ ...fld, ...fields }));
    props.handleChange(key, { ...training, ...fields }, props.active);
  };

  useEffect(() => {
    setTraining(props.trainings);
  }, [props.trainings]);

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
            Training Title
          </label>
          <input
            type="text"
            value={training.title ? training.title : "Certificate Title"}
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Enter traning title"
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
          <div className="rmfInputfiled m24">
            <label>
              <img src={rmfOnceRif} alt="" width="18px" height="18px" />
              Name of providors
            </label>
            <input
              type="text"
              placeholder="Training Provider"
              value={
                training.providers
                  ? training.providers
                  : ""
              }
              onChange={(e) => handleChange("providers", e.target.value)}
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
            value={training.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Certificate No"
            placeholder="City, Country"
          />
        </div>
      </div>
      {/* <div className="col-12 col-md-3">
                    <div className="rmfInputfiled m24">
                      <label>Start Date</label>
                      <span className="rmf-calendar-icon">
                        <img src={rmfCalender} alt="" />
                      </span>
                      <input type="text" name="" placeholder="MM/YYY" />
                    </div>
                  </div> */}
      <div className="col-12 col-md-6">
        <div className="rmfInputfiled rmfInputwitCheck m24">
          <label>
            Date
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
            type="date"
            name="date"
            value={training.date}
            onChange={(e) => handleChange("date", e.target.value)}
            placeholder="MM/YYY"
          />
        </div>
      </div>

      <div className="col-12 col-md-12">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfFiMapPin} alt="" width="18px" height="18px" />
            Description
          </label>
          <ContentEditable 
            value={training.description}
            onChange={(value) => handleChange('description', value)}  
          />
        </div>
      </div>
      <div className="row">
          <button
            className="btn btn-danger m-2"
            onClick={() =>
              props.handleTrainingsDelete(props.active, "trainings")
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

Training.defaultProps = defaultProps;
export default Training;
