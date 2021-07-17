import React from 'react';
import Plus from '@material-ui/icons/Add';

const AddNew = (props) => {
    return(
        <div className="p-2" style={{ cursor: "pointer"}} onClick={() => props.handleAddNew(props.activeElement)}><Plus style={{ color: "green" }}></Plus>Add New</div>
    )
}

export default AddNew;