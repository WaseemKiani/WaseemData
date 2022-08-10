import React, { Fragment, useState } from 'react'
import {SpeedDial, SpeedDialAction} from "@material-ui/lab"
import profile from "../../../images/Profile.png" 
import "./UserOptions.css"
import {MdOutlineAccountBalance} from "react-icons/md"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"
import {logoutUser} from "../../../Redux/actions/userAction";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {logoutWorker} from "../../../Redux/actions/workerActions";


const UserOptions = ({user}) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const options= [
        { icon: <AiOutlineShoppingCart/> , name: "My Orders", func: Orders},
        { icon: <BiLogOut/>              , name: "Logout", func: Logout}
    ]
    console.log();
    if(user.role==="worker"){
        options.unshift({ icon: <MdOutlineAccountBalance/> , name: "My Profile", func: myProfile});
    }


    function Orders(){
        history("/myOrders")
    }
    function myProfile(){
        history("/Myprofile");
    }
    function Logout(){
        if(user && user.role==="user"){
            dispatch(logoutUser());
        }else{
            dispatch(logoutWorker());
        }
    }

    const [open, setOpen] = useState(true);
    return (
    <Fragment>
        <SpeedDial
        className='speedDial'
        ariaLabel='SpeedDial tooltip example'
        onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        open={open}
        direction="down"
        icon={<img className='speedDialIcon' src={profile} />}
        >
            {
                options.map((val)=>(
                    <SpeedDialAction  tooltipTitle={val.name} icon={val.icon} onClick={val.func}/>
                ))
            }
        </SpeedDial>
    </Fragment>
  )
}

export default UserOptions