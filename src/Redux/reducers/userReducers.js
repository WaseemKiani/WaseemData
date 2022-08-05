import {
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,
        REGISTER_USER_FAIL,
        CLEAR_ERRORS,
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_FAIL
       } from "../Constrainsts/userConstraints.js"


export const userReducers = (state = {users:{} }, action )=>{
    switch (action.type){
        case LOGIN_REQUEST:
            return{
                loading: true,
                user: {},
                isAuthenticated: false
            };
        case LOGIN_SUCCESS:
        return{
            loading: false,
            user: action.payload,
            isAuthenticated: true
        };

        case LOGIN_FAIL:
        return{
            loading: false,
            error: action.payload
        };

        case REGISTER_USER_REQUEST:
            return{
                loading: true
            };

        case REGISTER_USER_SUCCESS:
            return{
                loading: false,
                response: action.payload
            };

        case CLEAR_ERRORS:
        return{
            ...state,
            error: null
        }
        
        default: 
        return state
    }
}