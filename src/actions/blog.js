import { setAlert } from "./alert";
import API from "../API";
// import { clearBlogData } from '../utils/globals'

export const getBlogs = ( {page=1} ) => ( dispatch ) =>{
  
    dispatch({
        type : "BLOG_DETAIL_LOADING",
        data : {}
    })
    API.get('Blog', {page : parseInt(page)} , "" , function(res){
    dispatch( 
      { type: "BLOG_LIST",
        data : res.data
      }
    );

    dispatch({
        type : "REMOVE_LOADING",
        data : {}
    })
  })
}

export const GetBlogById = (blogId, currencyType) => dispatch =>{
  try{
        dispatch({
            type : "BLOG_DETAIL_LOADING",
            data : {}
        })
    API.get('Blog' , '', blogId , function(res){
      
      if(res && res.data){
          dispatch( { type: "BLOG_DETAIL",
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
