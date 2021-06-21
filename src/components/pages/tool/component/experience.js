import React from 'react';
import { useState } from 'react';
import ContentEditable from '../../../elements/contentEditable';
import MonthPicker from 'month-year-picker';

const defaultProps = {
       experience : {
            title : "",
            company : "",
            location : "",
            duration : {
                from : {mm:"",yy:""},
                to: {mm:"",yy:""}
            },
            achievements : "",
            description: ""
        }
}

const Experience = (props) => {
    const [experience , setExperience] = useState(props.experience);
    
    const handleChange = (key , value) => {
        console.log(key , value)
        let fields = {};
        fields[key] = value;
        setExperience(fld => ({ ...fld , ...fields}));
        props.handleChange(key,experience , props.active);
    }
    
    const onDateChange = (key, value, max,e) => {
        let fields = experience;
        // setexperience(fld => ({ ...fld , ...fields}))
    
        if(max < parseInt(value)){
            fields["duration"][key][e.target.name] = e.target.name == "mm" ? "12" : "2022";
        } else if(parseInt(value) <= 0 ){
            fields["duration"][key][e.target.name] = e.target.name == "mm" ? "1" : "1980";
        } else {
            fields["duration"][key][e.target.name] = value;
        }
        setExperience(fld => ({ ...fld , ...fields}));
        props.handleChange('duration',experience , props.active);

    }

    const handleCurrentChange =(e) => {
        if(e.target.checked){
            let fields = experience;
            // setexperience(fld => ({ ...fld , ...fields}))
        
            fields["duration"]["to"]["mm"] = new Date().getMonth() + 1;
            fields["duration"]["to"]["yy"] = new Date().getFullYear();
            setExperience(fld => ({ ...fld , ...fields}));
            props.handleChange('duration',experience , props.active);
        }
    }
    return(
        <div>
            <h3><ContentEditable 
                value={experience.title ? experience.title : "Job Title"}
                onChange={(value) => handleChange('title', value)}  
            /></h3>
            <ContentEditable 
                value={experience.institute_name ? experience.institute_name : "Company Name"}
                onChange={(value) => handleChange('company', value)}  
            />
        <input type="number" placeholder={"mm"} value={experience.duration.from.mm} min= "1" max="12" name="mm" onChange={(e) => onDateChange("from", e.target.value, 12,e )}/>/
        <input type="number" name="yy" value={experience.duration.from.yy} placeholder={"yyyy"}  min= "1950" max="2050" onChange={(e) => onDateChange("from", e.target.value, 2030,e )} />-
        <input type="number" placeholder={"mm"} value={experience.duration.to.mm}  min= "1" max="12" name="mm" max={12} onChange={(e) => onDateChange("to", e.target.value, 12,e )} />/
        <input type="number" name="yy" value={experience.duration.to.yy} placeholder={"yyyy"} min= "1950" max="2050" onChange={(e) => onDateChange("to", e.target.value, 2030,e )}/>
        <input type="radio" value="currently_working" onChange={(e) => handleCurrentChange(e)}></input> Currenlty Working here

        <input placeholder="Location" type="text" value={experience.location} onChange={(e) => handleChange('location', e.target.value)}/>
        <ContentEditable 
            value={experience.institute_name ? experience.institute_name : "Enter description here"}
            onChange={(value) => handleChange('description', value)}  
        />
        <span onClick={() =>  props.handleExperienceDelete(props.active, "experience")}>delete</span>    
        {/* <MonthPicker
          name="MonthYear"
          hintText="MM/YY"
          onChange={(e) => handleChange("from" , e)}
        //   allowedYears={{ "after": new Date().getFullYear() - 2 }}
        /> */}
        </div>
    )
}

Experience.defaultProps = defaultProps;

export default Experience;