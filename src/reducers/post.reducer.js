import {ADD_POST, EDIT_POST, GET_POSTS} from "../actions/post.action";

const initialState = {}

export default function postReducer(state = initialState, action) {
    // recupere les actions du post
    switch (action.type) {
        // si laction est getpost
        case GET_POSTS:
            // get le payload (result)
            return action.payload
        case ADD_POST:
            console.log("action.payload",action.payload)
            console.log('state', state)
            // [action.payload, ...state] recupere toutes les data du state + add new post
            return [action.payload, ...state.publications]
        default:
            return state
    }
}

