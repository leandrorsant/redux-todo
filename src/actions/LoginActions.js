export const userLogin = ({username, password}) => (dispatch, getState) => {
        dispatch({
            type: "LOGIN",
            payload: {username, password}
        })
}


export const userLogout = () => (dispatch, getState) =>{
    dispatch({
        type: "LOGOUT",
        payload: {}
    })
}