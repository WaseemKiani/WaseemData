import React, { Fragment , useEffect, useState } from 'react'
import "./RequestPage.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {useSelector,useDispatch} from "react-redux";
import {useParams,useNavigate} from "react-router-dom";
import {serviceRequest} from "../../../Redux/actions/publicActions";
import {sendMyOrder} from "../../../Redux/actions/userAction";


const RequestPage = () => {
  const history = useNavigate();
  const worker = useParams().id;
  const dispatch = useDispatch();


  const {loading, mechanic} = useSelector((state)=>state.Public);
  
  const {isAuthenticated, user} = useSelector((state)=>state.User);


  const [startDuration, setstartDuration]= useState();
  const [endDuration, setendDuration]= useState();



  const [orderData, setOrderData] = useState({
    name:"",
    address:"",
    problemDiscription:"",
    offer:0,
    startDuration: new Date,
    endDuration: new Date,
    worker:""
  })

  const orderDataChange = (e)=>{
    setOrderData({...orderData, [e.target.name]:e.target.value});
    
  }

  const orderSubmit=(e)=>{
    e.preventDefault();
      setOrderData({...orderData, ["startDuration"]:startDuration});
      setOrderData({...orderData, ["endDuration"]:endDuration});
      dispatch(sendMyOrder(orderData));
      history(`/myOrders/${user._id}`);
      alert("Order is Posted Successfully");
  }


  const onChangeFirst = date =>{
    setstartDuration(date.value)

  }

  const onChangeSecond = date =>{
    setendDuration(date.value)
    
  }
  

  useEffect(() => {
    dispatch(serviceRequest(worker));
    setOrderData({...orderData, ["worker"]:worker});

  }, [worker]);
  


  return (
    <Fragment>
    <div className='mainContainter'>


    {
      mechanic ? <Fragment>
      
      <div className="container bootstrap snippets bootdey">
<div className="panel-body inf-content">
    <div className="row">
        <div className="col-md-4">
            <img alt="" style={{width:"600px"}} title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario"/> 
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
                            {mechanic && mechanic._id}     
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
                            {mechanic.name}     
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
                        {mechanic.category}     
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
                            {mechanic.email}  
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
                            {mechanic.role} 
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
                            {mechanic.perHourRate}
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
                            {mechanic.completedOrders}  
                        </td>
                    </tr>
                                                        
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div> 

      </Fragment>:<h2> User Not Available Currently</h2>
    }
<h2 className="homeHeading">Order Form</h2>


{/* ================================================================================================== */}

{ isAuthenticated? <Fragment>
    <div className='formDiv'>
    <Form onSubmit={orderSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" name='name' onChange={orderDataChange} value={orderData.name} placeholder="Enter Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name='address' onChange={orderDataChange} value={orderData.address} placeholder="Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Problem Details</Form.Label>
        <Form.Control as="textarea" rows={3} name='problemDiscription' onChange={orderDataChange} value={orderData.problemDiscription}/>
      </Form.Group>




      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Offer </Form.Label>
        <Form.Control type="number" name='offer' value={orderData.offer} onChange={orderDataChange} placeholder="Enter Offer" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>





                                                  {/* DATE */}
      <div className='dateTimeBox'>
        
        <div className='DateTime'>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Duration From</Form.Label>
            <DateTimePickerComponent placeholder='Select Duration (From)' min={startDuration} onChange={onChangeFirst} value={startDuration}/>
          </Form.Group>
        </div>

        <div className='DateTime'>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Duration To</Form.Label>
            <DateTimePickerComponent placeholder='Select Duration (To)' min={endDuration} onChange={onChangeSecond} value={endDuration}/>
          </Form.Group>
        </div>

      </div>









      <div className="d-grid gap-1 formButton">
      <Button variant="primary" size="lg" type="submit">
        Submit
      </Button>
    </div>
    </Form>
    </div>
    </Fragment>:<h1 className='statement'> Please Login as User to Request Services </h1>}









</div>
    </Fragment>
  )
}

export default RequestPage