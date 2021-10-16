
    
    import React, { useEffect, useState } from "react";
    import ContentEditable from "../../../elements/contentEditable";
    
    import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
    import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
    import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
    import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
    import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
    
    const defaultProps = {
        value : {
            title : "Title",
            location: "",
            startDate: "",
            endDate: "",
            description : "Description"
        }
    };
    
    const Volunteer = (props) => {
      const [volunteer, setVolunteer] = useState(props.value);
    

      useEffect(() => {
        setVolunteer(props.value)
      }, [props.value]);

      const handleChange = (key, value) => {
        let fields = {};
        fields[key] = value;
        setVolunteer((fld) => ({ ...fld, ...fields }));
        props.handleChange(key, { ...volunteer, ...fields }, props.active);
      };
    
      return (
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Organisation Name
              </label>
              <input
                type="text"
                value={volunteer.title ? volunteer.title : "Certificate Title"}
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
                value={volunteer.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Certificate No"
                placeholder="City, Country"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                Start Date
              </label>
              <input
                type="month"
                name="startDate"
                value={volunteer.startDate}
                onChange={(e) => handleChange("startDate", e.target.value)}
                placeholder="MM/YYY"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="rmfInputfiled rmfInputwitCheck m24">
              <label>
                End Date
              </label>
              <input
                type="month"
                name="endDate"
                value={volunteer.endDate}
                onChange={(e) => handleChange("endDate", e.target.value)}
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
                value={volunteer.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
              <button
                className="btn cancel_button m-2"
                onClick={() =>
                  props.handleVolunteersDelete(props.active, "volunteer")
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
    
    Volunteer.defaultProps = defaultProps;
    export default Volunteer;
    