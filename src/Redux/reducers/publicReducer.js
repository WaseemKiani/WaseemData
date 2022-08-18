import {
    GET_ALL_MECHANIC_REQUEST,
    GET_ALL_MECHANIC_SUCCESS,
    GET_ALL_MECHANIC_FAIL,
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAIL,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAIL,
    GET_WORKER_ORDERS_REQUEST,
    GET_WORKER_ORDERS_SUCCESS,
    GET_WORKER_ORDERS_FAIL,
    CLEAR_ORDER_SUCCESS,
    CLEAR_ORDER_FAIL
} from "../Constrainsts/workerConstraints.js"


export const publicReducers = (state = {mechanics:[] }, action )=>{
switch (action.type){
    
case GET_USER_ORDERS_REQUEST:
case GET_WORKER_ORDERS_REQUEST:
case GET_ALL_MECHANIC_REQUEST:
    return{
        loading: true,
        mechanics: []
    };

case GET_ALL_MECHANIC_SUCCESS:
return{
    loading: false,
    mechanics: action.payload,
    data: true
};

case GET_ALL_MECHANIC_FAIL:
return{
    loading: false,
    error: action.payload
};

case SERVICE_REQUEST:
return{
     loading: true,
     mechanic: {}
};

case SERVICE_SUCCESS:
return{
    loading: false,
    mechanic: action.payload,
};

case SERVICE_FAIL:
return{
    loading: false,
    error: action.payload
};

case GET_WORKER_ORDERS_SUCCESS:
case GET_USER_ORDERS_SUCCESS:
return{
    loading: false,
    orders: action.payload.orders,
};

case GET_WORKER_ORDERS_FAIL:
case GET_USER_ORDERS_FAIL:
return{
    loading: false,
    error: action.payload
};

case CLEAR_ORDER_SUCCESS:
return{
    loading: false,
    orders: null,
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