import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Myprofile.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {useParams,useNavigate, Link} from "react-router-dom";
import {serviceRequest} from "../../../Redux/actions/publicActions";
import {sendMyOrder} from "../../../Redux/actions/userAction";



const Myprofile = () => {
    
    const [data, setData] = useState({
        name:"",
        category:"",
        email:"",
        perHourRate:0,
        role:"",
        image:""
    });
    const {loading, user ,isAuthenticatedWorker} = useSelector((state)=>state.Worker);
    
    var worker;    
    
    if(isAuthenticatedWorker){
            worker = user.user;
        }
    
        useEffect(()=>{
            if(worker){
            setData({
                name:worker.name,
                category:worker.category,
                email:worker.email,
                perHourRate:worker.perHourRate,
                role:worker.role,
                image:worker.image
            })
        } 
        },[worker])

       
    return (
            
                <div className="container bootstrap snippets bootdey">
        <div className="panel-body inf-content">
            <div className="row">
                <div className="col-md-4">
                    <img alt="" style={{width:"600px"}} title="" className="img-circle img-thumbnail isTooltip image" src={worker.image} data-original-title="Usuario"/> 
                    <ul title="Ratings" className="list-inline ratings text-center">
                        <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                    </ul>
                </div>
                <div className="col-md-6 containerDetails">
                    <strong>Information</strong> {/* This is the Point */}
                    <div className="table-responsive">
                    <table className="table table-user-information">
                        <tbody>
                        <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                        User ID                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker && worker._id}     
                                </td>
                            </tr>
                            <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                        Name                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker.name}     
                                </td>
                            </tr>
                            <tr>    
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-user  text-primary"></span>    
                                        Category                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                {worker.category}     
                                </td>
                            </tr>
                            <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                        Email                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker.email}  
                                </td>
                            </tr>
        
                            <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-bookmark text-primary"></span> 
                                        Role                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker.role} 
                                </td>
                            </tr>
        
        
                            <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-eye-open text-primary"></span> 
                                        Hourly Rate                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker.perHourRate}
                                </td>
                            </tr>
                            <tr>        
                                <td>
                                    <strong>
                                        <span className="glyphicon glyphicon-envelope text-primary"></span> 
                                        Completed Orders                                                
                                    </strong>
                                </td>
                                <td className="text-primary">
                                    {worker.completedOrders}  
                                </td>
                            </tr>
                                                                
                        </tbody>
                        <Link to="/Myprofile/editWorkerProfile"><Button className='buttonEdit' variant="primary" size="lg">Edit</Button></Link>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
    }

export default Myprofile



/* 

<Fragment>{
    isAuthenticatedWorker?<Fragment>
    
    <div className="container rounded bg-white mt-5 mb-5">
<div className="row">
    <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{data.name}</span><span className="text-black-50">{data.email}</span><span> </span></div>
    </div>
    <div className="col-md-7 border-right">
        <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Enter Name" value={data.name}/></div>
              </div>
            <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Category</label><input type="text" className="form-control" placeholder="Enter Category" value={data.category}/></div>
                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Enter  Email Address" value={data.email}/></div>
                <div className="col-md-12"><label className="labels">Per Hour Rate:</label><input type="number" className="form-control" placeholder="Enter Per Hour Rate" value={data.perHourRate}/></div>
                <div className="col-md-12"><label className="labels">Role</label><input type="text" className="form-control" placeholder="Enter Role" value={data.role}/></div>
                <div className="col-md-12"><label className="labels">Image</label><input type="url" className="form-control" placeholder="Enter Image URL" value={data.image}/></div>
            </div>
            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
        </div>
    </div>
</div>
</div>
</Fragment>:<div className='noData'><h2>Please Login to Worker Account</h2></div>
}
</Fragment>  */