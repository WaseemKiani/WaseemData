import React, { Fragment, useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {UpdateWorkerInfo} from "../../../Redux/actions/workerActions";
import "./EditWorkerProfile.css"

const EditWorkerProfile = () => {
  const history = useNavigate();  
  const dispatch = useDispatch();

  const {loading, user ,isAuthenticatedWorker} = useSelector((state)=>state.Worker);
  const data= user.user;
  
const [name,setName] = useState(data.name);
const [category,setCategory] = useState(data.category);
const [email,setEmail] = useState(data.email);
const [perHourRate,setPerHourRate] = useState(data.perHourRate);
const [image,setImage] = useState(data.image);

const sendEditRequest = ()=>{
  const newData = {
    name,category,email,perHourRate,image
  }
  dispatch(UpdateWorkerInfo(newData));

  alert("Data is Saved", name, category,email, perHourRate, image);
  history("/"); 
}


/* 
const updateChanges = (e)=>{
  setEditedData({...editedData,[e.target.name]:e.target.value})
  console.log("Changes",name)
} */





  return (
    <Fragment>
    
    <div id='mainContainer' className="container rounded bg-white mt-5 mb-5 ">
    <div className="row">
    <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img className="rounded-circle mt-5" width="150px" src={image} alt="Worker Image"/><span className="font-weight-bold">{name}</span><span className="text-black-50">{email}</span><span> </span></div>
    </div>
    <div className="col-md-7 border-right">
        <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name}/></div>
              </div>
            <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Category</label><input type="text"  className="form-control" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)} value={category}/></div>
                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Enter  Email Address" onChange={(e)=>setEmail(e.target.value)} value={email}/></div>
                <div className="col-md-12"><label className="labels">Per Hour Rate:</label><input type="number" className="form-control" placeholder="Enter Per Hour Rate" onChange={(e)=>setPerHourRate(e.target.value)} value={perHourRate}/></div>
                <div className="col-md-12"><label className="labels">Role</label><input type="text" className="form-control" placeholder="Enter Role" value="Worker" disabled/></div>
                <div className="col-md-12"><label className="labels">Image</label><input type="url" className="form-control" placeholder="Enter Image URL" onChange={(e)=>setImage(e.target.value)} value={image}/></div>
            </div>
            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={sendEditRequest}>Save Profile</button></div>
        </div>
    </div>
</div>
</div>
</Fragment>
  )
}

export default EditWorkerProfile