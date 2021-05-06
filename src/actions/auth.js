import { setAlert } from "./alert";
import API from "../API"

export const loginUser = ( data ) => dispatch =>{
  try{
    dispatch( { type: "LOGIN_USER_LOADING",
      data : true
    });

    API.post('Login' , data, '' , function(res){
      
      if(res && res.data.user){
          dispatch( { type: "LOGIN_USER",
            data : res.data
          });
        } else {
            //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }
        dispatch( { type: "LOGIN_USER_LOADING",
          data : false
        });
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}

export const GoogleLoginValidate = ( data ) => dispatch =>{
  try{
    dispatch( { type: "LOGIN_USER_LOADING",
      data : true
    });
    API.post('GoogleLoginValidate' , data, '' , function(res){
      
      if(res && res.data.user){
          dispatch( { type: "LOGIN_USER",
            data : res.data
          });
        } else {
            //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }
        dispatch( { type: "LOGIN_USER_LOADING",
          data : false
        });
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}

export const registerUser = ( data ) => dispatch =>{
  try{
    dispatch( { type: "LOGIN_USER_LOADING",
      data : true
    });
    API.post('Register' , data, '' , function(res){
      
      if(res && res.data.user){
          dispatch( { type: "REGISTER_USER",
            data : res.data
          });
        } else {
            //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }
        dispatch( { type: "LOGIN_USER_LOADING",
          data : false
        });
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}


export const sendResetLink = ( data ) => dispatch =>{
  try{
    dispatch( { type: "LOGIN_USER_LOADING",
      data : true
    });
  
    API.post('Forgot_Password' , data, '' , function(res){
      console.log(res)
      if(res && !res.data.message){
        dispatch(setAlert("Reset link sent" , 'success'));    
      } else {
          //console.log(res.data.message);
          res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
      }
      dispatch( { type: "LOGIN_USER_LOADING",
        data : false
      });
      
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}

export const resetPassword = ( token , password ) => dispatch =>{
  try{
    dispatch( { type: "LOGIN_USER_LOADING",
      data : true
    });

    API.post('ResetPassword' , { token : token , password : password}, '' , function(res){
      if(res && !res.data.message){
        dispatch(setAlert("Password reset successfull" , 'success'));    

        } else {
            //console.log(res.data.message);
            res && res.data && dispatch(setAlert(res.data.message , 'danger'));    
        }
        dispatch( { type: "LOGIN_USER_LOADING",
          data : false
        });
      
    })
    
  } catch (err) {
    console.log(err)
    console.log(err)
  }
}