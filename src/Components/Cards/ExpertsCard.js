import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import "./ExpertCard.css"

const ExpertsCard = ({product}) => {
    console.log(product)
    
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
    <Link className='productCard' to={"/requestMechanic"}>
    <img src={product.images[0].url} alt="Product Pic"/>
    <p>{product.name}</p>
    <div>
        <ReactStars {...options}/> <span>({product.numOfReviews} Reviews)</span>
    </div>
    <span>{`$${product.price}`}</span>

    </Link>
  )
}

export default ExpertsCard
///////////////////                 Styling of this Product Card is also lies in Home.Css