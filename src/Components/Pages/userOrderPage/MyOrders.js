import React, { Fragment, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import "./MyOrders.css";
import { useSelector,useDispatch } from "react-redux"
import {useParams,useNavigate} from "react-router-dom";
import {getUserOrders, getWorkerOrders} from "../../../Redux/actions/publicActions"

const MyOrders = () => {
  const history = useNavigate();
  const userId = useParams().id;

    const dispatch = useDispatch();

    const {isAuthenticated,user} = useSelector((state)=>state.User);
    const {orders} = useSelector((state)=>state.Public);

    const workerState = useSelector((state)=>state.Worker);
    const isAuthenticatedWorker = workerState.isAuthenticatedWorker;
    const worker=workerState.user;

    useEffect(() => {
      if(isAuthenticated || isAuthenticatedWorker ){
      if(isAuthenticated && userId){
        dispatch(getUserOrders(userId));
      }
      if(isAuthenticatedWorker && userId){
        dispatch(getWorkerOrders(userId));
        alert("Mec Call");
      }
    }
    },[dispatch,isAuthenticated, isAuthenticatedWorker]);
  
    

  return (
    <Fragment>
    <h2 className="homeHeading">My Orders</h2>
    {orders && (user || worker)?<Fragment>
        <div className='container'>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Order No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Problem Discription</th>
                <th>Offer</th>
                </tr>
            </thead>
            {orders.map((val,index)=>(
              <tbody>
                <tr>
                <td>{index}</td>
                <td>{val.name}</td>
                <td>{val.address}</td>
                <td>{val.problemDiscription}</td>
                <td>{val.offer}</td>
                </tr>
            </tbody>

            ))}

            </Table>
        </div></Fragment>:<h1 className='alignment'>No Orders Found</h1>}


    </Fragment>
  )
}

export default MyOrders