import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "../Constrainsts/userConstraints";

import axios from "axios";


export const login =(email,password)=> async(dispatch)=>{
    try{
        dispatch({ type: LOGIN_REQUEST });                               //  FIRST REQUEST THE USER

        const config = {headers: {"Content-Type":"application/json"}}
        
        const data = await axios.post(`api/v1/login`,{email,password},config);
        console.log(data.data);
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

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })             //  SECONF SUCCESSFULLY GET THE USER

    }catch(error){
        dispatch({
            type: REGISTER_USER_FAIL,
            payload:error.response.data.message,
        }) 
    }
}
