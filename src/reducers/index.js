import { combineReducers } from "redux";

import Home from "./home";
import alert from "./alert";
import auth from "./auth";
import user from "./user"
import price from "./price";
import common from "./common";
import tool from "./tool";
import blog from "./blog";
import resume from "./resume";

const sessionReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const appReducers = combineReducers({
    Home,
    sessionReducer,
    alert,
    auth,
    user,
    price,
    common,
    tool,
    blog,
    resume
});

const rootReducer = (state, action) => {
    return appReducers(state, action);
}

export default rootReducer;