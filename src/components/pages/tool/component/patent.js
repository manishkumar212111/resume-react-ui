import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    patents : {
        title : "Title",
        application_no : "Application number",
        date : "Date",
        location : "Location",
        url : "https://",
        description: "Description",
    }
}

const Patent = (props) => {
    const [patents , setPublication] = useState(props.patents);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setPublication(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...patents , ...fields} , props.active);
    }

    useEffect(() => {
        setPublication(props.patents)
    }, [props.patents]);

    return(
        <div className="card">
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={patents.title ? patents.title : "Description"}
                            onChange={(value) => handleChange('title', value)}  
                            className="card-body"
            
                        />
                    </h3>
                </div>


            <div className="mt-4 form-inline">
                <input type="text" placeholder="Application Number" className="form-control" value={patents.application_no} onChange={(e) => handleChange('application_no' , e.target.value.toString())}></input>
            </div>
            
            <div className="mt-4 form-inline">
                <input type="date" placeholder="Date" className="form-control" value={patents.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            </div>
            
            <div className="mt-4 form-inline">
                <input type="text" placeholder="Location" className="form-control" value={patents.location} onChange={(e) => handleChange('location' , e.target.value.toString())}></input><br></br>
            </div>
            <div className="mt-4 form-inline">
                <input type="text" placeholder="Url" className="form-control" value={patents.url} onChange={(e) => handleChange('url' , e.target.value.toString())}></input><br></br>
            </div>
            
            <div className="card mt-4">   
                    <ContentEditable
                        value={patents.description ? patents.description : "Description"}
                        onChange={(value) => handleChange('description', value)} 
                        className="card-body"
        
                    />
            </div>
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handlePatentDelete(props.active, "patent")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
    </div>
       
        // <div>
        //     <ContentEditable
        //         value={patents.title ? patents.title : "Description"}
        //         onChange={(value) => handleChange('title', value)}  
        //     />
        //     <input type="text" placeholder="Application Number" value={patents.application_no} onChange={(e) => handleChange('application_no' , e.target.value.toString())}></input><br></br>
        //     <input type="date" placeholder="Date" value={patents.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input><br></br>
        //     <input type="text" placeholder="Location" value={patents.location} onChange={(e) => handleChange('location' , e.target.value.toString())}></input><br></br>
        //     <input type="text" placeholder="Url" value={patents.url} onChange={(e) => handleChange('url' , e.target.value.toString())}></input><br></br>
            
        //     <ContentEditable
        //         value={patents.description ? patents.description : "Description"}
        //         onChange={(value) => handleChange('description', value)} 
        //     />
        //     <span onClick={() =>  props.handlePatentsDelete(props.active, "patents")}>delete</span>
        // </div>
    )
}

Patent.defaultProps = defaultProps;
export default Patent;