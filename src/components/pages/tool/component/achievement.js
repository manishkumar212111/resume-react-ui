
    
    import React, { useEffect, useState } from "react";
    import ContentEditable from "../../../elements/contentEditable";
    
    import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
    import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
    import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
    import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
    import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
    
    const defaultProps = {
        achievement : {
            title : "Title",
            location: "",
            date: "",
            description : "Description"
        }
    };
    
    const Achievement = (props) => {
      const [achievement, setAchievement] = useState(props.achievements);
    
      const handleChange = (key, value) => {
        let fields = {};
        fields[key] = value;
        setAchievement((fld) => ({ ...fld, ...fields }));
        props.handleChange(key, { ...achievement, ...fields }, props.active);
      };
    
      useEffect(() => {
        setAchievement(props.achievements);
      }, [props.achievements]);
    
      return (
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Achievement Title
              </label>
              <input
                type="text"
                value={achievement.title ? achievement.title : "Certificate Title"}
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
                value={achievement.location}
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
                type="date"
                name="date"
                value={achievement.date}
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
                value={achievement.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row">
              <button
                className="btn btn-danger m-2"
                onClick={() =>
                  props.handleAchievementsDelete(props.active, "achievement")
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
    
    Achievement.defaultProps = defaultProps;
    export default Achievement;
    