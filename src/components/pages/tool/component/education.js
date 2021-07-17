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
        <div className="card" style={{color: "black", width: "224px"}}>
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable 
                            className="card-body"
                            value={education.degree ? education.degree : "Study Program"}
                            onChange={(value) => handleChange('degree', value)}  
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable 
                        className="card-body"
                        value={education.institute_name ? education.institute_name : "Institute Name"}
                        onChange={(value) => handleChange('institute_name', value)}  

                    />
                </div>
            <div className="mt-4 form-inline ml-4">
                <div className="row">
                    <label for="from">From:</label>
                     <input type="number" className="form-control" placeholder={"mm"} value={education.duration.from.mm} min= "1" max="12" name="mm" onChange={(e) => onDateChange("from", e.target.value, 12,e )}/>
                     <input type="number" className="form-control" name="yy" value={education.duration.from.yy} placeholder={"yyyy"}  min= "1950" max="2050" onChange={(e) => onDateChange("from", e.target.value, 2030,e )} />-
         
                </div>
            </div>

            <div className="mt-4 form-inline ml-4">
                <div className="row">
                    <label for="from">To</label>
                    <input type="number" className="form-control" placeholder={"mm"} value={education.duration.to.mm}  min= "1" max="12" name="mm" max={12} onChange={(e) => onDateChange("to", e.target.value, 12,e )} />
                    <input type="number" className="form-control" name="yy" value={education.duration.to.yy} placeholder={"yyyy"} min= "1950" max="2050" onChange={(e) => onDateChange("to", e.target.value, 2030,e )}/>
                </div>
            </div>

            <div className="mt-4 form-inline">
                <input placeholder="Location" className="form-control" type="text" value={education.location} onChange={(e) => handleChange('location', e.target.value)}/>
            </div>

            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleEducationDelete(props.active, "education")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Education.defaultProps = defaultProps;

export default Education;