
const initialState = {
    users: [],
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case "STORE_DATA":
            return {...state, users :  data};
        default: return state;
    }
  }
  