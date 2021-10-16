
    
    import React, { useEffect, useState } from "react";
    import ContentEditable from "../../../elements/contentEditable";
    
    import rmfNameOnCertificate from "./../form/images/icons-image/rmf-nameoncertificate.svg";
    import rmfCerifNo from "./../form/images/icons-image/rmf-cerif-no.svg";
    import rmfFiMapPin from "./../form/images/icons-image/rmf-fi_map-pin.svg";
    import rmfCalender from "./../form/images/icons-image/rmf-calendar.svg";
    import rmfOnceRif from "./../form/images/icons-image/rmf-oncerifName.svg";
    
    const defaultProps = {
        custom_field : {
            title : "Title",
            location: "",
            date: "",
            description : "Description"
        }
    };
    
    const Custom_field = (props) => {
      const [custom_field, setCustom_field] = useState(props.custom_fields);
    

      useEffect(() => {
        setCustom_field(props.value)
      }, [props.value]);
      const handleChange = (key, value) => {
        let fields = {};
        fields[key] = value;
        setCustom_field((fld) => ({ ...fld, ...fields }));
        props.handleChange(key, { ...custom_field, ...fields }, props.active);
      };
    
      useEffect(() => {
        setCustom_field(props.custom_fields);
      }, [props.custom_fields]);
    
      return (
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="rmfInputfiled m24">
              <label>
                <img src={rmfNameOnCertificate} alt="" width="18px" height="18px" />
                Custom_field Title
              </label>
              <input
                type="text"
                value={custom_field.title ? custom_field.title : "Certificate Title"}
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
                value={custom_field.location}
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
                value={custom_field.date}
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
                value={custom_field.description}
                onChange={(value) => handleChange('description', value)}  
              />
            </div>
          </div>
          <div className="row col-12" style={{justifyContent: "flex-end", marginBottom: 7}} >
              <button
                className="btn cancel_button m-2"
                onClick={() =>
                  props.handleCustom_fieldsDelete(props.active, "custom_field")
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
    
    Custom_field.defaultProps = defaultProps;
    export default Custom_field;
    