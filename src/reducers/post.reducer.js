import {ADD_POST, EDIT_POST, GET_POSTS} from "../actions/post.action";

const initialState = {
    error:'',
    posts:[]
}

export default function postReducer(state = initialState, action) {
    // recupere les actions du post
    switch (action.type) {
        // si laction est getpost
        case GET_POSTS:
            // get le payload (result)
            return action.payload
        case ADD_POST:
            // [action.payload, ...state] recupere toutes les data du state + add new post
            return [action.payload, ...state]
        case EDIT_POST:
            // [action.payload, ...state] recupere toutes les data du state + add new post
            return [action.payload, ...state]
        default:
            return state
    }
}

