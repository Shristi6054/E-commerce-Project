import React from 'react';
import { BrowserRouter as Router, Link, Routes,Route} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Category from './Category';
import Cart from './Cart';
import Inquiry from './Inquiry';

function Navbar() {
    return(
        <Router>
            <div className='Nav-header'>
                <div className='App-logo'>
                    <h1>Logo</h1>
                </div>
                <nav className='Navbar'>
                    <ul className='nav-links'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/category">Categories</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/inquiry">Inquiry</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path='/' Component={Home}/>
                    <Route path='/product' Component={Product}/>
                    <Route path='/category' Component={Category}/>
                    <Route path='/cart' Component={Cart}/>
                    <Route path='/inquiry' Component={Inquiry}/>
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;