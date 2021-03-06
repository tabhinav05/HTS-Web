import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/header/header";

import Image1 from '../../assets/bitmap1.png';
import Image2 from '../../assets/bitmap3.png';
import Image3 from '../../assets/bitmap5.png';
import Image6 from "../../assets/delivery.png";
import Image7 from "../../assets/warehouse.png";
import Image8 from "../../assets/packing-list.png";
import Image9 from "../../assets/trolley.png";
import Image10 from "../../assets/boxes.png";

import "./delivery.css";

const Delivery = () => (
    <div class="wrap">

<div className="containerAb">
        <div className="bx">
        <div className ="rectangle1">
        <Link to="/" className="link logo-lk" ><span className="logo">LOGO</span></Link>
        </div>
        </div>
            
        <div className="bx b1">
            <img src={Image8} alt="" />
            <p>PLACE AN ORDER</p>
            </div>
        <div className="bx b2">
            <img src={Image9} alt="" />
            <p>MY ORDER</p>
            </div>
        <div className="bx b3">
            <img src={Image10} alt="" />
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
                <h3>Delivery Channel and Address</h3>
            </div>

            <div className="grdd delivery">
                <div className="g2">
                <div className=" box2 bxa1">
                    <img src={Image6} alt="" />
                    <p><b>On Site Delivery</b></p>
                    </div>
                <div className=" box2 bxb1">
                    <img src={Image7} alt="" />
                    <p><b>Return</b></p>
                    </div>
                </div>
                <div className="dd1">
                    <div className="delivery-details">
                    <p>Delivery To:</p>
                    </div>
                    
               
                <div className="delivery-details">
                <select value={""}>
                <option value="A">Building</option>
                </select>
                <select value={""}>
                <option value="A">Floor</option>
                </select>
                <select value={""}>
                <option value="A">Room</option>
                </select>
                <select value={""}>
                <option value="A">Zone</option>
                </select>
                </div>
                <div className="delivery-details">
                    <p>Delivery Date:</p>
                </div>
                <div className="delivery-details">
                    <input className="input-date" type="date" />
                </div>
                <div className="delivery-details">
                    <p>Delivery Instructions</p>
                </div>
                <div className="delivery-details">
                    <input className="input-text" type="text" />
                </div>
                </div>
            
            </div>
            
                
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image1} class="fr-img" alt="" />
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
                        <img src={Image2} class="fr-img" alt="" />
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
                        <img src={Image3} class="fr-img" alt="" />
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
                <Link to='/collect-from-store' className="link"><div className="place-order"><p>Place Order</p></div></Link>
                    
                
                </div>
                    
                
            </div>
            <div className="footrr3"><p > ?? Con5 Online Ordering System, 2019 </p></div>
        </div>

        </div>
        
    </div>
)

export default Delivery;