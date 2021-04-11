
const initialState = {
    userDetail: [],
    user_detail_loading : true
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    switch ( type ) {
        case 'USER_DETAIL_LOADING' : 
            return {...state , user_detail_loading : true};
        case 'USER_DETAIL':
          return {...state , userDetail : data , user_detail_loading : false};
        
        default: return state;
    }
  }
  