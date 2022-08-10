import {
        WORKER_LOGIN_REQUEST,
        WORKER_LOGIN_SUCCESS,
        WORKER_LOGIN_FAIL,
        REGISTER_WORKER_REQUEST,
        REGISTER_WORKER_SUCCESS,
        REGISTER_WORKER_FAIL,
        LOGOUT_SUCCESS,
        LOGOUT_FAIL
   } from "../Constrainsts/workerConstraints.js"


export const workerReducers = (state = {users:[] }, action )=>{
switch (action.type){
    case "CLEAR_ERRORS":
    return{
        ...state,
        error: null
    };
    case REGISTER_WORKER_REQUEST:
            return{
                loading: true
            };

    case REGISTER_WORKER_SUCCESS:
            return{
                loading: false,
                user: action.payload,
                isAuthenticatedWorker: true
            };

    case REGISTER_WORKER_FAIL:
        return{
            loading: false,
            error: action.payload
        };


    case WORKER_LOGIN_REQUEST:
            return{
                loading: true,
                user: {},
                isAuthenticated: false
            };

    case WORKER_LOGIN_SUCCESS:
        return{
            loading: false,
            user: action.payload,
            isAuthenticatedWorker: true
        };

    case WORKER_LOGIN_FAIL:
        return{
            loading: false,
            error: action.payload
        };

        
        case LOGOUT_SUCCESS:
            return{
                loading:false,
                user:null,
                isAuthenticatedWorker:false
            }

        case LOGOUT_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
    
    default: 
    return state
}
}