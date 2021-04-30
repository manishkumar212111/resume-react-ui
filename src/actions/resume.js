import { setAlert } from "./alert";
import API from "../API";
// import { clearBlogData } from '../utils/globals'

export const getResume = () => ( dispatch ) =>{
  
    dispatch({
        type : "RESUME_DETAIL_LOADING",
        data : {}
    })
    API.get('ResumeList', {} , "" , function(res){
    dispatch( 
      { type: "RESUME_LIST",
        data : res.data
      }
    );

    dispatch({
        type : "REMOVE_LOADING",
        data : {}
    })
  })
}

export const deleteResume = (id) => ( dispatch ) =>{
  
    dispatch({
        type : "RESUME_DETAIL_LOADING",
        data : {}
    })
    API.delete('Resume', {} , id , function(res){
        dispatch( 
            setAlert("Resume deleted successfully" , 'success')
        );
    dispatch({
        type : "REMOVE_LOADING",
        data : {}
    })
  })
}
