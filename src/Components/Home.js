import React, { useEffect } from 'react'
import Banner from './Banner'
import "./Home.css"
import ExpertsCard from "./../Components/Cards/ExpertsCard.js"
import {useSelector, useDispatch} from "react-redux"
import {getUser} from "../Redux/actions/workerActions";

import axios from 'axios'

const Home = () => {


    const dispatch = useDispatch();
    const {user , data} = useSelector((state)=>state.Worker);
    console.log("Home", user , data); 

    useEffect(() => {
        
        dispatch(getUser());

    }, [])
    

  return (
    <>
    <Banner/>
    <div className='homeContainer'>
    
    <h2 className="homeHeading">Services</h2>
-

    {data ? <div className='cardContainer'>
        {user && user.map((val,ind)=>(
            <ExpertsCard product={val} key={ind}/>
        ))}   
        </div>: <h1>Not Loaded</h1> }
    </div>
    </>
  )
}

export default Home






























/* 
const options = [{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
},
{
    name: " Waseem Kiani",
    numOfReviews: 4,
    price: 2000,
    images: [{
        url: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg"
    }]
}] */