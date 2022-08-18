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
} from "../Constrainsts/workerConstraints"

import axios from "axios";


export const getWorkers=()=>async(dispatch)=>{
    try {
        dispatch({
            type:GET_ALL_MECHANIC_REQUEST,
        })

        const {data} = await axios.get("api/v1/getallworkers");
        dispatch({
            type:GET_ALL_MECHANIC_SUCCESS,
            payload: data.user    
        })
        
    } catch (error) {
        dispatch({
            type:GET_ALL_MECHANIC_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const serviceRequest=(id)=> async(dispatch)=>{
    try{
        dispatch({ type: SERVICE_REQUEST }); 

        const data= await axios.get(`api/v1/getWorker/${id}`);

        dispatch({ type: SERVICE_SUCCESS, payload: data.data.worker })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({  
            type: SERVICE_FAIL,
            payload:error.response.data.message,
        }) 
    }
};




export const getUserOrders=(id)=> async(dispatch)=>{
    console.log("req is called");
    try{
        dispatch({ type: GET_USER_ORDERS_REQUEST }); 

        const data= await axios.get(`http://localhost:4000/api/v1/getAllUserOrder/${id}`);

        dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({  
            type: GET_USER_ORDERS_FAIL,
            payload:error.response.data.message,
        }) 
    }
};


export const getWorkerOrders=(id)=> async(dispatch)=>{
    try{
        dispatch({ type: GET_WORKER_ORDERS_REQUEST }); 

        const data= await axios.get(`http://localhost:4000/api/v1/getAllWorkerOrder/${id}`);

        dispatch({ type: GET_WORKER_ORDERS_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({  
            type: GET_WORKER_ORDERS_FAIL,
            payload:error.response.data.message,
        }) 
    }
}



export const clearOrderData=()=> async(dispatch)=>{
    try{
      
        dispatch({ type: CLEAR_ORDER_SUCCESS })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({  
            type: CLEAR_ORDER_FAIL,
        }) 
    }
};