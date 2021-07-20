import {combineReducers} from "redux";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
import {RESET_STORE} from "../actions/actionType.action";


export default combineReducers({
    postReducer,
    userReducer
})
