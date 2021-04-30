
const initialState = {
    loading_tools: false,
    resume_detail : {}
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case "RESUME_DETAIL":
            return {...state, resume_detail :  data};

        case "LOADING_TOOLS":
            return {...state, loading_tools :  data};
        default: return state;
    }
  }
  