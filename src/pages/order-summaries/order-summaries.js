import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/header/header";

import Image1 from '../../assets/group-2.png';
import Image2 from '../../assets/group-3.png';
import Image3 from '../../assets/group-6.png';
import Image4 from "../../assets/group-7.png";

import Image8 from "../../assets/packing-list.png";
import Image9 from "../../assets/trolley.png";
import Image10 from "../../assets/boxes.png";

import "./order-summaries.css";

const OrderSummaries = () => (
    <div class="wrap">

<div className="containerAb0">
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
                <h3>Order Summaries</h3>
            </div>

            <div className="grdd delivery">
                <h3>Delivery details</h3>
                <div className="dt-table">
                    <div className='column'>
                        <div className="head-row">
                            <p>Required by Date </p>
                        </div>
                        <div className="down-row">
                            <div className="tb-details" >
                            <img src={Image1} alt="" />
                            <p>25-10-2019</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='column'>
                        <div className="head-row">
                            <p>Delivery Address</p>
                        </div>
                        <div className="down-row">
                            <div className="tb-details">
                            <img src={Image2} alt="" />
                            <p>Southbank, Great Wilson St,<br/>Leeds LS11 5AD,<br/>United Kingdom</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='column'>
                        <div className="head-row">
                            <p>Site Contact Name and Number</p>
                        </div>
                        <div className="down-row">
                            <div className="tb-details">
                            <img src={Image3} alt="" />
                            <p>Brendan wright</p>
                            </div>
                            <div className="tb-details">
                            <img src={Image4} alt="" />
                            <p>+44 113 243 5435</p>
                            </div>
                           
                        </div>
                    </div>
                      
                </div>

                <h3>Delivery Instructions</h3>
                <p className="type">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud exercitation ullam. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem</p>
                
                <h3>Delivery Details</h3>
                <div className="dt-table">
                    <div className="column1">
                        <div className="head-row1">
                            <p>No</p>
                        </div>
                        <div className="down-row1">
                            <p>1</p>
                        </div>
                        <div className="down-row1">
                            <p>2</p>
                        </div>
                        <div className="down-row1">
                            <p>3</p>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="head-row1">
                            <p>Item Name</p>
                        </div>
                        <div className="down-row1">
                            <p>Stainless Steel Medium Pressure Audco Valves, Temperature of Media : High</p>
                        </div>    
                        <div className="down-row1">    
                            <p>Stainless Steel Mounted Ball Valves, Size: 25 mm</p>
                        </div>
                        <div className="down-row1">
                            <p>Stainless Steel Screwed Ends Ball Valves</p>
                        </div>
                    </div>
                    <div className="column3">
                        <div className="head-row1">
                            <p>Quantity</p>
                        </div>
                        <div className="down-row1">
                            <p>5</p>
                        </div>
                        <div className="down-row1">
                            <p>23</p>
                        </div>
                        <div className="down-row1">
                            <p>1</p>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                <btn className="edit-order"><p><b>Cancel/Edit</b></p></btn>
                <Link to='/' className="link"><div className="confirm-order"><p>Confirm Order</p></div></Link>
                </div>
            
            </div>       
            </div>
            <div className="footrr3a"><p > © Con5 Online Ordering System, 2019 </p></div>
        </div>

        </div>
        
    </div>
)

export default OrderSummaries;