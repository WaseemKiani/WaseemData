import {
    WORKER_LOGIN_REQUEST,
    WORKER_LOGIN_SUCCESS,
    WORKER_LOGIN_FAIL,
    REGISTER_WORKER_REQUEST,
    REGISTER_WORKER_SUCCESS,
    REGISTER_WORKER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../Constrainsts/workerConstraints"

import axios from "axios";



export const registerWorker =(userData)=> async(dispatch)=>{
    try{
        dispatch({ type: REGISTER_WORKER_REQUEST });                               //  FIRST REQUEST THE REGISTER_USER

        const config = {headers: {"Content-Type":"application/json"}}
        
        const data = await axios.post(`api/v1/newWorker`,userData,config);

        dispatch({ type: REGISTER_WORKER_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: REGISTER_WORKER_FAIL,
            payload:error.response.data.message,
        }) 
    }
}





export const workerlogin =(email,password)=> async(dispatch)=>{
    try{
        dispatch({ type: WORKER_LOGIN_REQUEST });                               //  FIRST REQUEST THE USER

        const config = {headers: {"Content-Type":"application/json"}}
        
        const data = await axios.post(`api/v1/workerlogin`,{email,password},config);
        
        dispatch({ type: WORKER_LOGIN_SUCCESS, payload: data.data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: WORKER_LOGIN_FAIL,
            payload:error.response.data.message,
        }) 
    }
};


export const logoutWorker =()=> async(dispatch)=>{
    try{
        
        await axios.get(`api/v1/logoutWorker`);
        
        dispatch({ type: LOGOUT_SUCCESS })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: LOGOUT_FAIL,
            payload:error.response.data.message,
        }) 
    }
};
