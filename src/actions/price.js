import { setAlert } from "./alert";
import API from "../API";
// import { clearPlanData } from '../utils/globals'

export const getPlans = ( currencyType ) => ( dispatch ) =>{
  
    dispatch({
        type : "PLAN_DETAIL_LOADING",
        data : {}
    })
    API.get('Plans', {page : 1 , currencyType : currencyType} , "" , function(res){
    dispatch( 
      { type: "PLAN_LIST",
        data : res.data
      }
    );

    dispatch({
        type : "REMOVE_LOADING",
        data : {}
    })
  })
}

export const GetPlanById = (planId, currencyType) => dispatch =>{
  try{
        dispatch({
            type : "PLAN_DETAIL_LOADING",
            data : {}
        })
    API.get('Plans' , {currencyType : currencyType , status : true}, planId , function(res){
      
      if(res && res.data){
          dispatch( { type: "PLAN_DETAIL",
            data : res.data
          });
        } else {
            console.log(res.data.message);
            dispatch(setAlert(res.data.message , 'danger'));    
        }

    })
    
  } catch (err) {

    dispatch({
        type : "REMOVE_LOADING",
        data : {}
    })
    console.log(err)
    console.log(err)
  }
}
