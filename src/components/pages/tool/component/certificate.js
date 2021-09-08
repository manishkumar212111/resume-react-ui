import React, { useEffect, useState } from "react";
import ContentEditable from "../../../elements/contentEditable";
import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
const defaultProps = {
  certifications: {
    title: "Title",
    providers: "Training Providers and Location",
    date: "",
    location: "Location",
    certificate_no: "Certificate number",
  },
};

const Certification = (props) => {
  const [certification, setCertification] = useState(props.certifications);

  const handleChange = (key, value) => {
    let fields = {};
    fields[key] = value;
    setCertification((fld) => ({ ...fld, ...fields }));
    props.handleChange(key, { ...certification, ...fields }, props.active);
  };

  useEffect(() => {
    setCertification(props.certifications);
  }, [props.certifications]);

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
            Name of Certificate
          </label>
          <input
            type="text"
            value={
              certification.title ? certification.title : "Certificate Title"
            }
            onChange={(e) => handleChange("title", e.target.value)}
            placeholder="Enter certifcate title"
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfCerifNo} alt="" width="18px" height="18px" />
            Certification Number
          </label>
          <input
            type="text"
            value={certification.certificate_no}
            onChange={(e) => handleChange("certificate_no", e.target.value)}
            placeholder="Certificate No"
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
            value={certification.location}
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
            value={certification.date}
            onChange={(e) => handleChange("date", e.target.value)}
            placeholder="MM/YYY"
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="rmfInputfiled m24">
          <label>
            <img src={rmfOnceRif} alt="" width="18px" height="18px" />
            Name of Certifying Body or Agency
          </label>
          <input
            type="text"
            value={
              certification.providers
                ? certification.providers
                : "Certificate Provider"
            }
            onChange={(e) => handleChange("providers", e.target.value)}
          />
        </div>
      </div>
      {/* <div className="row">
        <button
          className="btn btn-danger m-2"
          onClick={() =>
            props.handleCertificationsDelete(props.active, "certifications")
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
      </div> */}
    </div>
  );
};

Certification.defaultProps = defaultProps;
export default Certification;
