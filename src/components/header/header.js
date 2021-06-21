import React from "react";
import Nav from "../nav/nav";
import "./header.css";
import Image4 from "../../assets/rectangle-839.png";
import Image5 from "../../assets/page-1.png";

const Header = () => (
    <div className="nav">
            <div className="details">
            <img src={Image4} className="img1" alt="" />
            <img src={Image5} className="img2" alt="" />
            <p><b>My Address</b><br/> 
            Southbank, Great Wilson St, Leeds LS11 5AD, UK</p>
            </div>
            <Nav />
        </div>
)

export default Header;