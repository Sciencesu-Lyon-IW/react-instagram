export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_LIKE = 'ADD_LIKE'
export const url = 'http://localhost:3001/'

// Acition Get
export const getPosts = () => {
    return async (dispatch) => {
        const response = await fetch(url + 'publications', {})
        let result = await response.json()
        return response.status >= 200 && response.status < 300 ? dispatch({
            type: GET_POSTS,
            payload: result
        }) : console.log((err) => console.log(err))
    }
}

// Action add
export const addPost = (data) => {
    console.log('data actions',data)
    console.log("data", JSON.stringify(data))
    return async (dispatch) => {
        const response = await fetch(url + 'publications/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data

        })
        console.log('response', response)
        let result = await response.json()
        return dispatch({
            type: ADD_POST,
            payload: data
        })
        /*return response.status >= 200 && response.status < 300 ? dispatch({
            type: ADD_POSTS,
            payload: result.data
        }) : console.log((err) => console.log(err))*/
        //console.log(dispatcher)
    }
}

// Action edit
export const editPost = (data) => {
    console.log('data', data)
    return async (dispatch) => {
        const response = await fetch(url + 'publications/' + data.id + '/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let result = await response.json()
        // ...data = spread operator
        return dispatch({
            type: EDIT_POST,
            payload: {...data}})
        /*return response.status >= 200 && response.status < 300 ? dispatch({
            type: ADD_POSTS,
            payload: result.data
        }) : console.log((err) => console.log(err))*/
        //console.log(dispatcher)
    }
}

// ACTION delete
export const deletePost = (postId) => {
    return async (dispatch) => {
        const response = await fetch(url + 'publications/' + postId + '/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let result = await response.json()
        return dispatch({
            type: DELETE_POST,
            payload: {postId}})
    };
};

// ACTION Like
export const addLike = (data) => {
    return async (dispatch) => {
        const response = await fetch(url + 'publications/' + data.id + '/like', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {...data}
        })
        let result = await response.json()
        return dispatch({
            type: ADD_LIKE,
            payload: {...data}})
    };
};
