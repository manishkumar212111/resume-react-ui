
const initialState = {
    blogDetail: [],
    blog_detail_loading : false,
    blogs: [],
    totalPages:1
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case 'BLOG_DETAIL_LOADING' : 
            return {...state , blog_detail_loading : true};
        case 'BLOG_DETAIL' : 
          return {...state, blogDetail :  data, blog_detail_loading : false};

        case "BLOG_LIST":
          return {...state, blogs :  data , blog_detail_loading : false};
        
        default: return state;
    }
  }
  