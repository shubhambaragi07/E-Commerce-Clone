import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
 const [menu,setmenu]=useState("shop")
 let changeshop=()=>{
     setmenu("shop")
 }
 let changemen=()=>{
    setmenu("men")
}
let changewomen=()=>{
    setmenu("women")
}

let changekids=()=>{
    setmenu("kid")
}
    return (
        <div className="Navbar">
          <div className="nav-logo">
               <img src={logo} alt=""/>
               <p>SHOOPING</p>
          </div>
         
          <ul className="nav-menu">
              <li onClick={changeshop}><Link style={{textDecoration : "none",color : "#626262"}} to="/" >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
              <li onClick={changemen}><Link style={{textDecoration : "none",color : "#626262"}} to="/mens"> Men</Link>{menu==="men"?<hr/>:<></>}</li>
              <li onClick={changewomen}><Link style={{textDecoration : "none",color : "#626262"}} to="/womens">Women</Link>{menu==="women"?<hr/>:<></>}</li>
              <li onClick={changekids}><Link style={{textDecoration : "none",color : "#626262"}} to="/kids">Kid</Link>{menu==="kid"?<hr/>:<></>}</li>
          </ul>
         
          <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link>   
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>  
          <div className="nav-cart-count">0</div>
          </div>
        </div>
    )
}

export default Navbar
