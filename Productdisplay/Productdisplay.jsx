import React from 'react'
import "./Productdisplay.css"

const Productdisplay = (props) => {
    const {product} =props;
    return (
        <div className="productdisplay">
           <div className="productdis-left">
            <div className="productdis-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            </div>
            <div className="productdis-img">
            <img className="productdis-main-img" src={product.image} alt=""/>
            </div>
           </div> 
           <div className="productdis-right">
           <h1>{}</h1>
           </div>
        </div>
    )
}

export default Productdisplay
