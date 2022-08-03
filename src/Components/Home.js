import React from 'react'
import Banner from './Banner'
import "./Home.css"
import ExpertsCard from "./../Components/Cards/ExpertsCard.js"


const Home = () => {
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
    }]
    console.log(options);

  return (
    <>
    <Banner/>
    <div className='homeContainer'>
    
    <h2 className="homeHeading">Services</h2>
    <div className='cardContainer'>
    {options && options.map((val,ind)=>(
            <ExpertsCard product={val}/>
        ))}
        </div>
    </div>
    </>
  )
}

export default Home