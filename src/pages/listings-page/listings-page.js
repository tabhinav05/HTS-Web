import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../../components/header/header";

import "./listings-page.css";

import Image from "../../assets/packing-list.png";
import Image1 from "../../assets/trolley.png";
import Image2 from "../../assets/boxes.png";
import Image6 from "../../assets/shoppingcart.png";
import Image7 from "../../assets/search.png";
import Image8 from "../../assets/group-5.png"
import Image9 from "../../assets/bitmap4.png"
import Image10 from "../../assets/group-8.png"
import Image11 from "../../assets/bitmap1.png"
import Image12 from "../../assets/bitmap2.png"
import Image13 from "../../assets/bitmap5.png"
import Image14 from "../../assets/bitmap3.png"


const ListingsPage = () => (
    <div class="wrap">

        <div className="containerA1">
        <div className="bx">
        <div className ="rectangle1">
            <span className="logo">LOGO</span>
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
        <div className="containerB1">
            <p>Valves</p>
            <img src={Image6} alt="" />
            <div className="line2a" ></div>
            <input className="search-box" name="search" type="text" />
            <div className="sr-oval"><img src={Image7} className="search" alt="" /></div>
            <div className="line2b"></div>
            <div className="shp-crt"><img src={Image8} alt="" /></div>
            <div className="shp-crt1"><p>3</p></div>
           
        </div>
        <div className="containerB2">
            <div className="heading1">
                <Link to="/your-order" className='link'><h3>Valves</h3></Link>
                <p>Showing 1-30 of 101</p>
                
            </div>
            
                
            <div className="griddd">
                <div className="grdd bxx1">
                    <div className="img-fr">
                        <img src={Image9} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>White Upvc Threaded Ball Valve, Size: 15 Mm To 50 Mm</b><br/><br/>
                        Available Unit/Qty: 500 Units </p>
                        </div>
                        <div className="btn-add"><p>ADD</p></div>
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image10} class="fr-img" alt="" />
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
                        <img src={Image11} class="fr-img" alt="" />
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
                <div className="grdd bxx1">
                <div className="img-fr">
                        <img src={Image12} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Payal Pvc Three Way Ball Valve, Size: 1 To 2.5 Inch</b><br/><br/>
                        Available Unit/Qty: 1302 Units </p>
                        </div>
                        <div className="btn-add"><p>ADD</p></div>
                </div>
                <div className="grdd bxx2">
                <div className="img-fr">
                        <img src={Image13} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Stainless Steel Screwed Ends Ball Valves</b><br/><br/>
                        Available Unit/Qty: 1398 Units </p>
                        </div>
                        <div className="select">
                            <div className="sl-box"><p>-</p></div>
                            <div className="sl-box"><p>1</p></div>
                            <div className="sl-box"><p>+</p></div>
                        </div>
                </div>
                <div className="grdd bxx1">
                <div className="img-fr">
                        <img src={Image14} class="fr-img" alt="" />
                    </div>
                    <div className=" p-details">
                        <p><b>Ball Valve for Chemical Industry</b><br/><br/>
                        Available Unit/Qty: 500 Units </p>
                        </div>
                        <div className="btn-add"><p>ADD</p></div>
                </div>
            </div>
            <div className="footrr1"><p > © Con5 Online Ordering System, 2019 </p></div>
        </div>

        </div>
        
    </div>
)

export default ListingsPage;