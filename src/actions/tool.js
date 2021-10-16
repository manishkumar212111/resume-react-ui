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

export const updateResume = (id , updateBody) => dispatch => {
  try{
    dispatch({
        type : "LOADING_TOOLS",
        data : true
    })
    // delete updateBody.id;
    delete updateBody.updatedAt;
    delete updateBody.createdAt;

    let h = {};

    for(var i in updateBody) {
      if(updateBody[i] && i!= 'id' && i != 'default'){
        h[i] = updateBody[i];
      }
    }
    
    API.patch('Tool' , h , id , function(res){
      
      if(res && res.data && res.data.id){
          dispatch(setAlert("Data updated successfully" , 'success'));
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

export const updateUserProfileImage = (id , image) => dispatch => {
  try{
    dispatch({
        type : "LOADING_TOOLS",
        data : true
    })
    // delete updateBody.id;
    let formData = new FormData();
    if(image){
      formData.append("file" , image)
    }
    API.post(image ? 'profileImageUpload' : 'profileImageDelete' , formData , id , function(res){
      
      if(res && res.data){
        dispatch(getResumeById(id))
          dispatch(setAlert("Data updated successfully" , 'success'));
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


export const getResumeForDownload = (id) => dispatch =>{
  try{
      dispatch({
          type : "LOADING_TOOLS",
          data : true
      })
    API.get('ProductDownLoad' , {}, id , function(res){
      
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

export const downLoadResume = (id) => dispatch =>{
  try{
      dispatch({
          type : "LOADING_TOOLS",
          data : true
      })
    API.get('download' , {product_id : id}, '' , function(res){
      if(res){
        console.log(res , res.file);

        var blob = res.request.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "PdfName-" + new Date().getTime() + ".pdf";
        document.body.appendChild(link);
        console.log(link, "fdvdfkvjfdkj");
        link.click();

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
            type : "RESUME_DETAIL_DETAIL",
            data : data
        })
    } catch (err) {
      console.log(err)
      console.log(err)
    }
  }

  export const updateFontState = (data) => dispatch =>{
    try{
        dispatch({
            type : "FONT_DETAIL",
            data : data
        })
    } catch (err) {
      console.log(err)
      console.log(err)
    }
  }

