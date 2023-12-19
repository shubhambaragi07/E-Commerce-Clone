import React from 'react'
import "./Fotter.css"
import big_logo from "../Assets/logo_big.png"
import insta_icon from "../Assets/instagram_icon.png"
import pintest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
const Fotter = () => {
    return (
        <div className="fotter">
            <div className="fotter_logo">
            <img src={big_logo} alt=""/>
            <p>SHOPPER</p>
            </div>
            <div>
            <ul className="fotter-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            </div>
            <div className="fotter-social-icon">
                        <div className="fotter-icon-container"> 
                          <img src={insta_icon} alt=""/>
                        </div>
                        <div className="fotter-icon-container"> 
                            <img src={pintest_icon} alt=""/>
                        </div>
                        <div className="fotter-icon-container"> 
                            <img src={whatsapp_icon} alt=""/>
                        </div>    
            </div>
           
            <div className="fotter-copyright">
            <hr/>
                        {/* <p>Copyright @ 2023 All Right Reserved </p> */}
                        <marquee behavior="" direction="">Copyright @ 2023 All Right Reserved</marquee>
                        </div>
        </div>
    )
}

export default Fotter
