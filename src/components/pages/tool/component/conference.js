
    
    import React, { useEffect, useState } from "react";
    import ContentEditable from "../../../elements/contentEditable";
    
    import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
    import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
    import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
    import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
    import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
    
    const defaultProps = {
        conference : {
            title : "Title",
            location: "",
            date: "",
            description : "Description"
        }
    };
    
    const Conference = (props) => {
      const [conference, setConference] = useState(props.value);
    

      useEffect(() => {
        setConference(props.value)
      }, [props.value]);
      
      const handleChange = (key, value) => {
        let fields = {};
        fields[key] = value;
        setConference((fld) => ({ ...fld, ...fields }));
        props.handleChange(key, { ...conference, ...fields }, props.active);
      };
    
      useEffect(() => {
        setConference(props.value);
      }, [props.value]);
    
      return (
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Conference Title
              </label>
              <input
                type="text"
                value={conference.title ? conference.title : "Certificate Title"}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Enter traning title"
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
                value={conference.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Certificate No"
                placeholder="City, Country"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                Date
              </label>
              <input
                type="month"
                name="date"
                value={conference.date}
                onChange={(e) => handleChange("date", e.target.value)}
                placeholder="MM/YYY"
              />
            </div>
          </div>
    
          <div className="col-12 col-md-12">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfFiMapPin} ahandleSavelt="" width="18px" height="18px" />
                Description
              </label>
              <ContentEditable 
                value={conference.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
              <button
                className="btn cancel_button m-2"
                onClick={() =>
                  props.handleConferencesDelete(props.active, "conference")
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
    
    Conference.defaultProps = defaultProps;
    export default Conference;
    