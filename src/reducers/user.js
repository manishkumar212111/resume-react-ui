
const initialState = {
    userDetail: [],
    user_detail_loading : true,
    expires : true
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    console.log(data);
    switch ( type ) {
        case 'USER_DETAIL_LOADING' : 
            return {...state , user_detail_loading : true};
        case 'USER_DETAIL':
          return {...state , userDetail : data , user_detail_loading : false};
        case 'USER_DETAIL_AUTH':
          return {...state , userDetail : data.user , expires : data.expires};

        default: return state;
    }
  }
  