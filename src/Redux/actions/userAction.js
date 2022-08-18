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
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAIL,
    USER_ORDER_REQUEST,
    USER_ORDER_SUCCESS,
    USER_ORDER_FAIL,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAIL
} from "../Constrainsts/userConstraints";

import axios from "axios";


export const login =(email,password)=> async(dispatch)=>{
    try{
        dispatch({ type: LOGIN_REQUEST });                               //  FIRST REQUEST THE USER

        const config = {headers: {"Content-Type":"application/json"}}
        
        const data = await axios.post(`api/v1/login`,{email,password},config);
        
        dispatch({ type: LOGIN_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload:error.response.data.message,
        }) 
    }
};



export const registerUser =(userData)=> async(dispatch)=>{
    try{
        dispatch({ type: REGISTER_USER_REQUEST });                               //  FIRST REQUEST THE REGISTER_USER

        const config = {headers: {"Content-Type":"application/json"}}
        
        const data = await axios.post(`api/v1/registerUser`,userData,config);

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: REGISTER_USER_FAIL,
            payload:error.response.data.message,
        }) 
    }
}



export const logoutUser =()=> async(dispatch)=>{
    try{
        await axios.get(`api/v1/logoutUser/`);
        
        dispatch({ type: LOGOUT_SUCCESS })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: LOGOUT_FAIL,
            payload:error.response.data.message,
        }) 
    }
};


                               /* ORDER ACTION */



export const sendMyOrder =(userData)=> async(dispatch)=>{
    try{
        dispatch({ type: USER_ORDER_REQUEST });                               //  FIRST REQUEST THE REGISTER_USER

        const config = {headers: {
                                "Content-Type":"application/json",
                                "withCredentials": true
                            }}


        const data = await axios.post(`api/v1/newUserOrder`,userData,config);

        dispatch({ type: USER_ORDER_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: USER_ORDER_FAIL,
            payload:error.response.data.message,
        }) 
    }
}


