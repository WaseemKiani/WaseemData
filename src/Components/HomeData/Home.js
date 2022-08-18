import React, { useEffect } from 'react'
import Banner from './Banner'
import "./Home.css"
import ExpertsCard from "./../../Components/Cards/ExpertsCard.js"
import {useSelector, useDispatch} from "react-redux"
import {getWorkers} from "../../Redux/actions/publicActions";

import axios from 'axios'

const Home = () => {


    const dispatch = useDispatch();
    const {mechanics , data} = useSelector((state)=>state.Public);

    useEffect(() => {
        
        dispatch(getWorkers());

    }, [])
    

  return (
    <>
    <Banner/>
    <div className='homeContainer'>
    
    <h2 className="homeHeading">Services</h2>


    {data ? <div className='cardContainer'>
        {mechanics && mechanics.map((val,ind)=>(
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