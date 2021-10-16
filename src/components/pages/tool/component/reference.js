import React, { useEffect, useState } from "react";
import ContentEditable from "../../../elements/contentEditable";

import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
import rmFiMail from "./../form/images/icons-image/rmf-fi_mail.svg";
import rmfPositionReference from "./../form/images/icons-image/rmf-Position-Refrence.svg"
const defaultProps = {
  value: {
    name: "name",
    company: "Company reference",
    location: "location",
    position: "Position of reference",
    contact: "",
  },
};

const Reference = (props) => {
  const [reference, setReference] = useState(props.value);


  useEffect(() => {
    setReference(props.value)
  }, [props.value]);

  const handleChange = (key, value) => {
    let fields = {};
    fields[key] = value;
    setReference((fld) => ({ ...fld, ...fields }));
    props.handleChange(key, { ...reference, ...fields }, props.active);
  };

  useEffect(() => {
    setReference(props.value);
  }, [props.value]);

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
            Person Name
          </label>
          <input
            type="text"
            value={reference.name ? reference.name : "Name"}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter person name"
          />
        </div>
      </div>

      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfFiMapPin} alt="" width="18px" height="18px" />
            Company Name
          </label>
          <input
            type="text"
            value={reference.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="company"
            placeholder="City, Country"
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
            value={reference.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="City, Country"
          />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfPositionReference} alt="" width="18px" height="18px" />
            Position Of Reference
          </label>
          <input
            type="text"
            value={reference.position}
            onChange={(e) => handleChange("position", e.target.value)}
            placeholder="Manager ..."
          />
        </div>
      </div>


      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmFiMail} alt="" width="18px" height="18px" />
            Contact Details
          </label>
          <input
            type="text"
            value={reference.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            placeholder="email/phone ..."
          />
        </div>
      </div>

      <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
        <button
          className="btn cancel_button m-2"
          onClick={() =>
            props.handleReferencesDelete(props.active, "references")
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

Reference.defaultProps = defaultProps;
export default Reference;
