
const initialState = {
    resumeDetail: [],
    resume_detail_loading : false,
    resumes: [],
    totalPages:1
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case 'RESUME_DETAIL_LOADING' : 
            return {...state , resume_detail_loading : true};
        // case 'RESUME_DETAIL' : 
        //   return {...state, resume_detail :  data, resume_detail_loading : false};

        case "RESUME_LIST":
          return {...state, resumes :  data , resume_detail_loading : false};
        
        default: return state;
    }
  }
  