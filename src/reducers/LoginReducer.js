export const LoginReducer = (state={user: {}}, action) => {
    switch(action.type){
        case "LOGIN":
            return {user: action.payload};
        
        case "LOGOUT":
            return {user: action.payload};

        default:
            return state;
    }
}
