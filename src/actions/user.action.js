export const GET_USER = 'GET_USER'
export const url = 'http://localhost:3000/'

export const getUser = () => {
    return async (dispatch) => {
        const response = await fetch(url + 'users', {})
        let result = await response.json()
        return response.status >= 200 && response.status < 300 ? dispatch({
            type: GET_USER,
            payload: result
        }) : console.log((err) => console.log(err))
        //console.log(dispatcher)
    }

}
