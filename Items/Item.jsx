import React from 'react'
import"./Item.css"
import { Link } from 'react-router-dom';
const Item = (props) => {
    return (
        <div className="item">
        <Link to={`/Product/${props.id}`}><img src={props.image} alt=""/></Link>
        
        <p>{props.name}</p>
        <div className="item-prices">
        <div classNam="item-new-price">
        <h4>   ${props.new_price}</h4>
        </div>
        <div className="item-old-price">
               {props.old_price}
        </div>

        </div>
            
        </div>
    )
}

export default Item
