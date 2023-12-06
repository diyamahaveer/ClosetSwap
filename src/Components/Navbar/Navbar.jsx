import React, { useState } from 'react'; // Import useState since you're using state in the component
import { Link } from 'react-router-dom';
import './Navbar.css';
import shoppingcart_icon from '../Assets/shoppingcart_icon.png';
import heart_icon from '../Assets/heart_icon.png';

const Navbar = () => {
    // State for tracking the active menu
    const [menu, setMenu] = useState(null);

    return (
        <div className='navbar'>
            <div className="nav-siteName">
                <Link to="/">
                    <button>ClosetSwap</button>
                </Link>
            </div>
            

            <div className='nav-signup-cart'> 
                <div className = 'favorites'>
                <Link to='/favorites'><img src={heart_icon} alt="Favorites" style={{ width: '20px' }} /></Link>
                </div>
                <div className = 'cart'>
                    <Link to='/cart'><img src={shoppingcart_icon} alt="Reserved Cart" style={{ width: '20px' }} /></Link>
                </div>
                <Link to='/loginintro'><button>Sign Up</button></Link>
            </div> 

            <section className="nav-product-list">
                <ul className="nav-menu">
                    <li
                        onMouseEnter={() => setMenu("mens")} 
                        onMouseLeave={() => setMenu(null)} 
                    >
                        <Link style={{ textDecoration: 'none' }} to='/menswear'>Menswear</Link>{menu === "mens" && <hr />}
                    </li>
                    <li
                        onMouseEnter={() => setMenu("womens")} 
                        onMouseLeave={() => setMenu(null)} 
                    >
                        <Link style={{ textDecoration: 'none' }} to='/womenswear'>Womenswear</Link>{menu === "womens" && <hr />}
                    </li>
                    <li
                        onMouseEnter={() => setMenu("accessories")} 
                        onMouseLeave={() => setMenu(null)} 
                    >
                        <Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{menu === "accessories" && <hr />}
                    </li>
                    <li
                        onMouseEnter={() => setMenu("special")} 
                        onMouseLeave={() => setMenu(null)} 
                    >
                        <Link style={{ textDecoration: 'none' }} to='/specialevents'>Special Events</Link>{menu === "special" && <hr />}
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Navbar;
