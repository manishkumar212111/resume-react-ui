
const initialState = {
    updating_enquiry: false,
    enquiry_success : false,
  };
  
  export default function(state = initialState, action) {
    const { type , data } = action;
    console.log(data);
    switch ( type ) {
        case 'UPDATING_ENQUIRY' : 
            return {...state , updating_enquiry : data};
        case 'ENQUIRY_SUCCESS':
          return {...state , enquiry_success : true };
        default: return state;
    }
  }
  