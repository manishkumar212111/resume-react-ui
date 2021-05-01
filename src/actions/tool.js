import { setAlert } from "./alert";
import API from "../API";

export const createResume = (data) => dispatch =>{
  try{
      dispatch({
          type : "LOADING_TOOLS",
          data : true
      })
    API.post('Tool' , data, '' , function(res){
      
      if(res && res.data){
          dispatch( { type: "LOADING_TOOLS",
            data : true
          });
          dispatch( { type: "RESUME_DETAIL",
            data : res.data
          });
        } else {
            // //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }

      dispatch({
        type : "LOADING_TOOLS",
        data : false
        })
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
} 

export const getResumeById = (id) => dispatch =>{
  try{
      dispatch({
          type : "LOADING_TOOLS",
          data : true
      })
    API.get('Tool' , {}, id , function(res){
      
      if(res && res.data){
          dispatch( { type: "LOADING_TOOLS",
            data : true
          });
          dispatch( { type: "RESUME_DETAIL",
            data : res.data
          });
        } else {
            // //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }

      dispatch({
        type : "LOADING_TOOLS",
        data : false
        })
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
} 

export const updateUserInfo = (data) => ( dispatch ) =>{
  try {
    
  dispatch({
      type : "LOADING_TOOLS",
      data : true
  })
  API.post('ResumeList', data , "" , function(res){
    if(res && res.data && res.data.id){
      dispatch( { type: "RESUME_INFO_UPDATE",
        data : res.data
      });
      dispatch(setAlert("Basic details updated successfully" , 'success'));

    } else {
        // //console.log(res.data.message);
        res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
    }

      dispatch({
          type : "LOADING_TOOLS",
          data : false
      })
  })
} catch (error) {
  console.log(error);
}
}

export const updateLocalState = (data) => dispatch =>{
    try{
        dispatch({
            type : "RESUME_DETAIL",
            data : data
        })
    } catch (err) {
      console.log(err)
      console.log(err)
    }
  }

