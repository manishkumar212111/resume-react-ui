
const initialState = {
    loading_tools: false,
    resume_detail : {},
    font_detail : {
        bold : false,
        italic: false,
        underline: false
    }
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case "RESUME_DETAIL":
            return {...state, resume_detail :  data.product , basic_info : data.basic_info};
        case "LOADING_TOOLS":
            return {...state, loading_tools :  data};
        case "RESUME_INFO_UPDATE":
            return {...state, basic_info : data, loading_tools :  data};
        case "RESUME_DETAIL_DETAIL":
            return {...state, resume_detail : data};
        case "FONT_DETAIL":
            return {...state, font_detail : {...state.font_detail , ...data}};

        default: return state;
    }   
  }
  