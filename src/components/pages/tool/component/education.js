import React from 'react';
import { useState } from 'react';
import ContentEditable from '../../../elements/contentEditable';
import MonthPicker from 'month-year-picker';

const defaultProps = {
    education : {
        awards: [],
        courses: [],
        degree: "Study Program",
        degree_major: "",
        duration: {from: {month : "" , year : ""}, to: {month : "" , year : ""}},
        institute_name: "Institute Name",
        location: "",
        marks: {value: "", type: ""},
        projects: [],
        thesis: [],
    }
}

const Education = (props) => {
    const [education , setEducation] = useState(props.education);
    
    const handleChange = (key , value) => {
        console.log(key , value)
        let fields = {};
        fields[key] = value;
        setEducation(fld => ({ ...fld , ...fields}));
        props.handleChange(key,education , props.active);
    }
    
    const onDateChange = (key, value, max,e) => {
        let fields = education;
        setEducation(fld => ({ ...fld , ...fields}))
    
        if(max < parseInt(value)){
            fields["duration"][key][e.target.name] = e.target.name == "mm" ? "12" : "2022";
        } else if(parseInt(value) <= 0 ){
            fields["duration"][key][e.target.name] = e.target.name == "mm" ? "1" : "1980";
        } else {
            fields["duration"][key][e.target.name] = value;
        }
        setEducation(fld => ({ ...fld , ...fields}));
        props.handleChange('duration',education , props.active);

    }
    return(
        <div>
            <ContentEditable 
                value={education.degree ? education.degree : "Study Program"}
                onChange={(value) => handleChange('degree', value)}  
            />
            <ContentEditable 
                value={education.institute_name ? education.institute_name : "Institute Name"}
                onChange={(value) => handleChange('institute_name', value)}  
            />
        <input type="number" placeholder={"mm"} value={education.duration.from.mm} min= "1" max="12" name="mm" onChange={(e) => onDateChange("from", e.target.value, 12,e )}/>/
        <input type="number" name="yy" value={education.duration.from.yy} placeholder={"yyyy"}  min= "1950" max="2050" onChange={(e) => onDateChange("from", e.target.value, 2030,e )} />-
        <input type="number" placeholder={"mm"} value={education.duration.to.mm}  min= "1" max="12" name="mm" max={12} onChange={(e) => onDateChange("to", e.target.value, 12,e )} />/
        <input type="number" name="yy" value={education.duration.to.yy} placeholder={"yyyy"} min= "1950" max="2050" onChange={(e) => onDateChange("to", e.target.value, 2030,e )}/>
        
        <input placeholder="Location" type="text" value={education.location} onChange={(e) => handleChange('location', e.target.value)}/>
        <span onClick={() =>  props.handleEducationDelete(props.active, "education")}>delete</span>    
        {/* <MonthPicker
          name="MonthYear"
          hintText="MM/YY"
          onChange={(e) => handleChange("from" , e)}
        //   allowedYears={{ "after": new Date().getFullYear() - 2 }}
        /> */}
        </div>
    )
}

Education.defaultProps = defaultProps;

export default Education;