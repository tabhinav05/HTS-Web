import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/header/header";

import Image from "../../assets/packing-list.png";
import Image1 from "../../assets/trolley.png";
import Image2 from "../../assets/boxes.png";
import Image3 from '../../assets/bitmap1.png';
import Image4 from '../../assets/bitmap3.png';
import Image5 from '../../assets/bitmap5.png';

import "./your-order.css";

const Yourorder = () => (
    <div class="wrap">

<div className="containerAa">
        <div className="bx">
        <div className ="rectangle1">
            <Link to="/" className="link logo-lk" ><span className="logo">LOGO</span></Link>
        </div>
        </div>
            
        <div className="bx b1">
            <img src={Image} alt="" />
            <p>PLACE AN ORDER</p>
            </div>
        <div className="bx b2">
            <img src={Image1} alt="" />
            <p>MY ORDER</p>
            </div>
        <div className="bx b3">
            <img src={Image2} alt="" />
            <p>INVENTORY</p>
            </div>
            
               
        </div>

        <div className="containerB">
        <Header />
        
        <div className="containerB2">
            <div className="status">
                <div className="dot ">
                    <div className="dt A"></div>
                    <p>Your Orders</p>
                </div>
                <div className="linee ">
                    <div className="lineee X" ></div>
                    <p></p>
                </div>
                <div className="dot ">
                    <div className="dt B"></div>
                    <p>Delivery Channel</p>
                </div>
                <div className="linee ">
                    <div className="lineee Y" ></div>
                    <p></p>
                </div>
                <div className="dot ">
                    <div className="dt C"></div>
                    <p>Order Summaries</p>
                </div>
                <div className="linee ">
                    <div className="lineee Z" ></div>
                    <p></p>
                </div>
                <div className="dot ">
                    <div className="dt D"></div>
                    <p>Order Confirmation</p>
                </div>
            </div>
            
            <div className="griddd">
            <div className="heading1">
                <h3>Your Order</h3>
            </div>
                
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image3} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Medium Pressure Audco Valves, Temperature of Media : High</b><br/><br/>
                        Available Unit/Qty: 824 Units </p>
                        </div>
                        <div className="select">
                            <div className="sl-box"><p>-</p></div>
                            <div className="sl-box"><p>5</p></div>
                            <div className="sl-box"><p>+</p></div>
                        </div>
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image4} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Mounted Ball Valves, Size: 25 mm</b><br/><br/>
                        Available Unit/Qty: 120 Units </p>
                        </div>
                        <div className="select">
                            <div className="sl-box"><p>-</p></div>
                            <div className="sl-box"><p>23</p></div>
                            <div className="sl-box"><p>+</p></div>
                        </div>
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image5} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Mounted Ball Valves, Size: 25 mm</b><br/><br/>
                        Available Unit/Qty: 120 Units </p>
                        </div>
                        <div className="select">
                            <div className="sl-box"><p>-</p></div>
                            <div className="sl-box"><p>1</p></div>
                            <div className="sl-box"><p>+</p></div>
                        </div>
                </div>
                <div className="grdd bxx2">
                <btn className="add-more"><p><b>Add More</b></p></btn>
                <Link to='/delivery' className="link"><div className="btn-checkout"><p>Begin Checkout</p></div></Link>
                    
                
                </div>
                    
                
            </div>
            <div className="footrr2"><p > © Con5 Online Ordering System, 2019 </p></div>
        </div>

        </div>
        
    </div>
)

export default Yourorder;