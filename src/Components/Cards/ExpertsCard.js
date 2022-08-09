import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import "./ExpertCard.css"

const ExpertsCard = ({product}) => {
    
  const options= {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 18: 20,
    value: 3,
    isHalf: true
}
  return (
    /* 
    <Link className='productCard' to={`/products/${product._id}`}> */
    <Link className='productCard' to={product._id}>
    <img src={product.image} alt="Product Pic"/>
    <p>{product.name}</p>
    <h7>{`Category: ${product.category}`}</h7>
    <div>
        <ReactStars {...options}/> <span>({product.numOfReviews} Reviews)</span>
    </div>
    <span>{`Hour Rate: ${product.perHourRate}`}</span>

    </Link>
  )
}

export default ExpertsCard
///////////////////                 Styling of this Product Card is also lies in Home.Css