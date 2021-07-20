import {RESET_STORE} from "./actionType.action";

export const GET_USER = 'GET_USER'
export const LOGIN = 'LOGIN'
export const url = 'http://localhost:3001/'

export const getUser = (userId) => {
    return async (dispatch) => {
        const response = await fetch(url + 'users/' + userId, {})
        let result = await response.json()
        return response.status >= 200 && response.status < 300 ? dispatch({
            type: GET_USER,
            payload: result
        }) : console.log((err) => console.log(err))
        //console.log(dispatcher)
    }
}

export const login = (data) => {
    return async (dispatch) => {
        const response =  await fetch(url + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                data
            )
        })
        let result = await response.json()
        return response.status >= 200 && response.status < 300 ? dispatch({
            type: LOGIN,
            payload: result
        }) : console.log((err) => console.log(err))
        //console.log(dispatcher)
    }
}

// to reset the state of redux store
export const resetStore = () => {
    return {
        type: RESET_STORE
    }
}
