import {GET_USER, LOGIN} from "../actions/user.action";

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type){
        case GET_USER:
            return action.payload
        case LOGIN:
            return action.payload
        default:
            return state
    }

}
