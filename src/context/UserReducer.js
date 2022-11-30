import { GET_PRODUCTS, GET_USERS, LOGIN_USER } from "./types";

export const UserReducer = (state, action) => {

    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLogged: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}