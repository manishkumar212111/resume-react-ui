import React, { useEffect, useState } from 'react';

let draggedId = '';
const Layout = (props) => {
    const [sample_map , setSampleMap] = useState(props.sample_map);
    
    console.log(props)
    
    const handleDrag = (e) => {
        console.log(e);
        draggedId = e.target.id;
    }
    
    const handleInActiveDrop = (e) => {

        if(e.target.id && sample_map[draggedId] && draggedId){
            let field = {};
            field[draggedId] = false;
            setSampleMap(obj => ({...obj , ...field}));
            setTimeout(() => {
                props.handleSidebar({...sample_map, ...field} , 'sample_map');                
            }, 10);
        }
    }

    const handleActiveDrop = (e) => {
        if(e.target.id && !sample_map[draggedId] && draggedId){
            console.log(e.target.id, "in drop" , sample_map[draggedId]);
            let field = {};
            field[draggedId] = true;
            setSampleMap(obj => ({...obj , ...field}));
            setTimeout(() => {
                props.handleSidebar({...sample_map, ...field} , 'sample_map');                
            }, 10);

        }
    }
    const getData = (status) => {
        let h = [];
        for(var key in sample_map){
            if(sample_map[key] == status){
                h.push(<li 
                    id={key} 
                    draggable={true} 
                    onDragOver={(ev) => ev.preventDefault()}
                    onDragStart={handleDrag}
                    
                >{key}</li>)
            }
        }
        if(h.length == 0){
            h.push(<li 
                style={{listStyle : "none"}}
                id={0} 
                draggable={true} 
                onDragOver={(ev) => ev.preventDefault()}
                onDragStart={handleDrag}
                
            >Empty</li>
            )
        }
        return h;
    }
    
    return(
    <div>
        Active
       <div id="active" onDrop={handleActiveDrop}>
        <span>
           {getData(true)}
           </span>
       </div>
       Inactive
       <div 
        id="inactive" 
        onDrop={handleInActiveDrop}
       >
         <span>  
        {getData(false)}   
        </span>
        </div> 
    </div>
    )
}

export default Layout;