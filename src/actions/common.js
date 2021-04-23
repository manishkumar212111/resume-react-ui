import { setAlert } from "./alert";
import API from "../API";

export const sendEnquiry = (data) => dispatch =>{
  try{
      dispatch({
          type : "UPDATING_ENQUIRY",
          data : true
      })
    API.post('Enquiry' , data, '' , function(res){
      
      if(res && res.data){
          dispatch( { type: "ENQUIRY_SUCCESS",
            data : true
          });
        } else {
            console.log(res.data.message);
            dispatch(setAlert(res.data.message , 'danger'));    
        }

      dispatch({
        type : "UPDATING_ENQUIRY",
        data : false
        })
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}
