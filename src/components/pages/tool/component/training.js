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
        <div>
            <ContentEditable
                value={training.title ? training.title : "Training Title"}
                onChange={(value) => handleChange('title', value)}  
            />
            <ContentEditable
                value={training.providers ? training.providers : "Training Provider"}
                onChange={(value) => handleChange('providers', value)} 
            />
            <input type="date" placeholder="Date" value={training.date} onChange={(e) => handleChange('date' , e.target.value.toString())}></input>
            <ContentEditable
                value={training.description ? training.description : "Description"}
                onChange={(value) => handleChange('description', value)} 
            />
            <span onClick={() =>  props.handleTrainingsDelete(props.active, "trainings")}>delete</span>
        </div>
    )
}

Training.defaultProps = defaultProps;
export default Training;