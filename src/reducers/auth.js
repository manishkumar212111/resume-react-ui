
import LOGIN_USER from "../actions/types"
const initialState = {
    userDetail: [],
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    console.log(type , data)
    switch ( type ) {
        case 'REGISTER_USER':
          return {...state, userDetail :  data};
        case 'LOGIN_USER':
            return {...state, userDetail :  data};
        default: return state;
    }
  }
  