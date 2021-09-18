    
    import React, { useEffect, useState } from "react";
    import ContentEditable from "../../../elements/contentEditable";
    
    import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
    import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
    import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
    import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
    import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
    
    const defaultProps = {
        patents : {
            title : "Title",
            application_no : "Application number",
            date : "Date",
            location : "Location",
            url : "https://",
            description: "Description",
        }
    };
    
    const Patent = (props) => {
      const [patent, setPatent] = useState(props.patents);
    
      const handleChange = (key, value) => {
        let fields = {};
        fields[key] = value;
        setPatent((fld) => ({ ...fld, ...fields }));
        props.handleChange(key, { ...patent, ...fields }, props.active);
      };
    
      useEffect(() => {
        setPatent(props.patents);
      }, [props.patents]);
    
      return (
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Patent Title
              </label>
              <input
                type="text"
                value={patent.title ? patent.title : "Certificate Title"}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter traning title"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
              <div className="rmfInputfiled m24">
                <label>
                  <img src={rmfOnceRif} alt="" width="18px" height="18px" />
                  Application No
                </label>
                <input
                  type="text"
                  placeholder="Application Number"
                  value={
                    patent.application_no
                      ? patent.application_no
                      : ""
                  }
                  onChange={(e) => handleChange("application_no", e.target.value)}
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
                value={patent.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Certificate No"
                placeholder="City, Country"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                Filling Date
              </label>
              <input
                type="date"
                name="date"
                value={patent.date}
                onChange={(e) => handleChange("date", e.target.value)}
                placeholder="MM/YYY"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                Url
              </label>
              <input
                type="text"
                name="url"
                value={patent.url}
                onChange={(e) => handleChange("url", e.target.value)}
                placeholder="Any url"
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
                value={patent.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row">
              <button
                className="btn btn-danger m-2"
                onClick={() =>
                  props.handlePatentsDelete(props.active, "patents")
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
    
    Patent.defaultProps = defaultProps;
    export default Patent;
    