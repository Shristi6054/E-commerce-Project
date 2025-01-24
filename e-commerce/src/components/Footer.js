import React from "react";
import { BrowserRouter as Link, Router,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Category from "./Category";
import Cart from "./Cart";
import Inquiry from "./Inquiry";

function footer() {
    return(
        <Router>
            <div className='footer'>
          <div className='address'>
            <h1>Contact us</h1>
            <p>Email : shristimahato6054@gmail.com
            <br/>Phone : +977 9817538939
            <br/>Address : Kathmandu, putalisadak</p>
          </div>
          <div className='about'>
            <h1>About Us</h1>
            <p>We are a team dedicated to providing the best products <br/>and services to our customers.</p>
          </div>
          <div className='quick-links'>
            <h1>Quick Links</h1>
            <ul className='links'>
              <li><Link to ='/'>Home</Link></li>
              <li><Link to ='/product'>Product</Link></li>
              <li><Link to = '/category'>Category</Link></li>
              <li><Link to = '/cart'>Cart</Link></li>
              <li><Link to = '/inquiry'>Inquiry</Link></li>
            </ul>
            <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/product' Component={Product}/>
          <Route path='/category' Component={Category}/>
          <Route path='/cart' Component={Cart}/>
          <Route path='/inquiry' Component={Inquiry}/>
        </Routes>
          </div>
          {/* <div className='social-icons'>
            <h1>Social Platforms</h1>
            <div className='foot-icons'>
            <div className='facebook'>
              <FaFacebook/>
            </div>
            <div className='twitter'>
              <FaTwitter/>
            </div>
            <div className='youtube'>
              <FaYoutube/>
            </div>
            <div className='insta'>
              <FaInstagram/>
            </div>
            </div>
          </div> */}
        </div>
        </Router>   
    );
}

export default footer;