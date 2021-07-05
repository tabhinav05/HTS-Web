import React from 'react';
import {Link} from 'react-router-dom';
import Nav from "../../components/nav/nav"
import "./home.css";

import Image from "../../assets/group.png";
import Image3 from "../../assets/packing-list.png";
import Image4 from "../../assets/trolley.png";
import Image5 from "../../assets/boxes.png";
import Image6 from "../../assets/delivery.png";
import Image7 from "../../assets/warehouse.png";
import Image8 from "../../assets/arrow.png";

const Home = () => (
    <div className="wrap">
    
        <div className="container1">
        <div className ="rectangle">
        <Link to="/" className="link logo-lk" ><span className="logo">LOGO</span></Link>
        </div>    
        <img src={Image}  className="group" alt=""/>
        </div>
        <div className="container2">
            <div className="nav1">
            <Nav />
            </div>
            
            <div className="all-items">

            <div className="heading"><p>Welcome to
            <br/><b>Con5 Online Ordering System</b></p></div>
            <div className="grid">
                <div className="g1">
                <div className="box bx1 ">
                    <img src={Image3}  alt="" />
                    <p>PLACE AN ORDER</p>
                    </div>
                <div className=" box bx2 ">
                    <img src={Image4} alt="" />   
                    <p>MY ORDER</p>    
                    </div>
                <div className=" box bx3">
                    <img src={Image5} alt="" />
                    <p>INVENTORY</p>
                    </div>
                </div>

                <div className="g2">
                <div className=" box2 bxa">
                    <img src={Image6} alt="" />
                    <p><b>On Site Delivery</b></p>
                    </div>
                <div className=" box2 bxb">
                    <img src={Image7} alt="" />
                    <p><b>Return</b></p>
                    </div>
                </div>
                <Link to="/listings-page" className="link" >
                <div className="cont-shp">
                    <p>Continue Shopping</p>
                    <img src={Image8} className="cnt-img" alt=""/>
                </div>
                </Link>
            </div>

            </div>
            

            <div className="footr"><p > © Con5 Online Ordering System, 2019 </p></div>
        </div>
       

    </div>    
    
)

export default Home;