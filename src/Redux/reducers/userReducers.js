import {
        REGISTER_USER_REQUEST,
        REGISTER_USER_SUCCESS,
        REGISTER_USER_FAIL,
        CLEAR_ERRORS,
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        LOGOUT_SUCCESS,
        LOGOUT_FAIL,
        USER_ORDER_REQUEST,
        USER_ORDER_SUCCESS,
        USER_ORDER_FAIL
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
            user: action.payload.user,
            isAuthenticated: true
        };

        case REGISTER_USER_REQUEST:
            return{
                loading: true
            };

        case REGISTER_USER_SUCCESS:
            return{
                loading: false,
                user: action.payload,
                isAuthenticated: true
            };

        case LOGOUT_SUCCESS:
            return{
                loading:false,
                user:null,
                isAuthenticated:false
            }

        case LOGOUT_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        
        case USER_ORDER_REQUEST:
            return{
                loading: true
            };
        
        case USER_ORDER_SUCCESS:
            return{
                loading: false,
                user: action.payload.user,
                order: action.payload.order,
                isAuthenticated: true,
                isOrdered: true
            };


        case USER_ORDER_FAIL:
        case REGISTER_USER_FAIL:
        case LOGIN_FAIL:
        return{
            loading: false,
            error: action.payload
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