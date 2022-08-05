import {
        GET_ALL_MECHANIC_REQUEST,
        GET_ALL_MECHANIC_SUCCESS,
        GET_ALL_MECHANIC_FAIL
   } from "../Constrainsts/workerConstraints.js"


export const workerReducers = (state = {users:[] }, action )=>{
switch (action.type){
    case GET_ALL_MECHANIC_REQUEST:
        return{
            loading: true,
            user: []
        };
    case GET_ALL_MECHANIC_SUCCESS:
    return{
        loading: false,
        user: action.payload,
        data: true
    };

    case GET_ALL_MECHANIC_FAIL:
    return{
        loading: false,
        error: action.payload
    };

    case "CLEAR_ERRORS":
    return{
        ...state,
        error: null
    };
    
    default: 
    return state
}
}