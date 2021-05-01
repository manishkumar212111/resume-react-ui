
const initialState = {
    loading_tools: false,
    resume_detail : {}
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case "RESUME_DETAIL":
            return {...state, resume_detail :  data.resume_detail , basic_info : data.basic_info};
        case "LOADING_TOOLS":
            return {...state, loading_tools :  data};
        case "RESUME_INFO_UPDATE":
            return {...state, basic_info : data, loading_tools :  data};
        default: return state;
    }
  }
  