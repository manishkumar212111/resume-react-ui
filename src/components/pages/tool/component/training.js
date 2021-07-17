import React, { useEffect, useState } from 'react';
import ContentEditable from "../../../elements/contentEditable";
const defaultProps = {
    trainings : {
        title : "Title",
        providers :"Training Providers and Location",
        date : "",
        description:""
    }
}

const Training = (props) => {
    const [training , setTraining] = useState(props.trainings);

    const handleChange = (key , value) => {
        let fields = {};
        fields[key] = value;
        setTraining(fld => ({ ...fld , ...fields}));
        props.handleChange(key,{ ...training , ...fields} , props.active);
    }

    useEffect(() => {
        setTraining(props.trainings)
    }, [props.trainings]);

    return(
        <div className="card" style={{color : "black" , width : "224px"}}>
            <div className="card-body">
                <div className="card">   
                    <h3>
                        <ContentEditable
                            value={training.title ? training.title : "Training Title"}
                            onChange={(value) => handleChange('title', value)}   
                            className="card-body"
            
                        />
                    </h3>
                </div>

                <div className="card mt-4">   
                    <h3>
                        <ContentEditable
                            value={training.providers ? training.providers : "Training Provider"}
                            onChange={(value) => handleChange('providers', value)}   
                            className="card-body"
            
                        />
                    </h3>
                </div>
            

            <div className="mt-4 form-group">
                <input type="date" placeholder="Date" value={training.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>            
            </div>
            
            <div className="card">   
                    <ContentEditable
                        value={training.description ? training.description : "Description"}
                        onChange={(value) => handleChange('description', value)}  
                        className="card-body"
                    />
            </div>
            
            <span class="btn btn-sm btn-danger mt-4" onClick={() =>  props.handleTrainingsDelete(props.active, "trainings")}>delete</span>    
            <span class="btn btn-sm btn-success mt-4 ml-4" onClick={() =>  props.handleSave('')}>Save</span>    
            
            </div>
        </div>
        
    )
}

Training.defaultProps = defaultProps;
export default Training;