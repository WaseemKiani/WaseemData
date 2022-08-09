import {
    GET_ALL_MECHANIC_REQUEST,
    GET_ALL_MECHANIC_SUCCESS,
    GET_ALL_MECHANIC_FAIL
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