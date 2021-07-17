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
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable 
                            className="card-body"
                            value={experience.title ? experience.title : "Job Title"}
                            onChange={(value) => handleChange('title', value)}  
                        />
                    </h3>
                </div>
                <div className="card mt-4">
                    <ContentEditable 
                        className="card-body"
                        value={experience.institute_name ? experience.institute_name : "Company Name"}
                        onChange={(value) => handleChange('company', value)}  
                    />
                </div>
            <div className="mt-4 form-inline ml-4">
                <div className="row">
                    <label for="from">Working From:</label>
                    <input type="number" id="from" className="form-control" placeholder={"mm"} value={experience.duration.from.mm} min= "1" max="12" name="mm" onChange={(e) => onDateChange("from", e.target.value, 12,e )}/>
                    <input type="number" className="form-control" name="yy" value={experience.duration.from.yy} placeholder={"yyyy"}  min= "1950" max="2050" onChange={(e) => onDateChange("from", e.target.value, 2030,e )} />

                </div>
            </div>

            <div className="mt-4 form-inline ml-4">
                <div className="row">
                    <label for="from">Worked Upto:</label>
                    <input type="number" className="form-control" placeholder={"mm"} value={experience.duration.to.mm}  min= "1" max="12" name="mm" max={12} onChange={(e) => onDateChange("to", e.target.value, 12,e )} />
                    <input type="number" className="form-control" name="yy" value={experience.duration.to.yy} placeholder={"yyyy"} min= "1950" max="2050" onChange={(e) => onDateChange("to", e.target.value, 2030,e )}/>
                </div>
                <div className="ml-4 float-right">
                    <input type="radio" className="form-control" value="currently_working" onChange={(e) => handleCurrentChange(e)}></input> Currenlty Working here
                </div>
            </div>

            <div className="mt-4 form-inline">
                <input placeholder="Location" className="form-control" type="text" value={experience.location} onChange={(e) => handleChange('location', e.target.value)}/>
            </div>
            <div className="card mt-4">

                <ContentEditable 
                    className="card-body"
                    value={experience.institute_name ? experience.institute_name : "Enter description here"}
                    onChange={(value) => handleChange('description', value)}  
                />
            </div>

            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleExperienceDelete(props.active, "experience")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
    )
}

Experience.defaultProps = defaultProps;

export default Experience;