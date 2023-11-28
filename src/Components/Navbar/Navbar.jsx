import React, { useState } from 'react'
import './Navbar.css'
import shoppingcart_icon from '../Assets/shoppingcart_icon.png'
import { Link } from 'react-router-dom'
import heart_icon from '../Assets/heart_icon.png'
import search_icon from '../Assets/search_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("none");
  return (
    <div className = 'navbar'>
        <div className = "nav-siteName">
            <p className='text-left'>ClosetSwap </p>
        </div>

        <div className = "nav-divider"></div>

        <div className = 'nav-signup-cart'>
            <input
            type = "text"
            className="search-input"
            placeholder = "Seach here"
            
            />
            <img src = {heart_icon} alt=""style={{ width: '20px' }}/>
            <Link to= '/cart'><img src = {shoppingcart_icon} alt = ""style={{ width: '20px' }}/></Link>
            <Link to= '/login'><button>Sign Up</button></Link>
        </div>
        <section className = "nav-product list">
            <ul className = "nav-menu">
                <li 
                onMouseEnter={() => { setMenu("mens") }}
                onMouseLeave={() => { setMenu(null) }}
                >
                <Link style = {{ textDecoration: 'none'}} to = '/menswear'>Menswear</Link>{menu === "mens" ? <hr /> : <></>}
                </li>
                <li 
                onMouseEnter={() => { setMenu("womens") }}
                onMouseLeave={() => { setMenu(null) }}
                >
                <Link style = {{ textDecoration: 'none'}}to='/womenswear'>Womenswear</Link>{menu === "womens" ? <hr /> : <></>}
                </li>
                <li 
                onMouseEnter={() => { setMenu("accessories") }}
                onMouseLeave={() => { setMenu(null) }}
                >
                <Link style = {{ textDecoration: 'none'}}to='/accessories'>Accessories</Link>{menu === "accessories" ? <hr /> : <></>}
                </li>
                <li 
                onMouseEnter={() => { setMenu("special") }}
                onMouseLeave={() => { setMenu(null) }}
                >
                <Link style = {{ textDecoration: 'none'}}to= '/specialevents'>Special Events</Link>{menu === "special" ? <hr /> : <></>}
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Navbar
