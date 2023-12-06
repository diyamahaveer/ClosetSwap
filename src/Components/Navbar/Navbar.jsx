import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import shoppingcart_icon from '../Assets/shoppingcart_icon.png';
import heart_icon from '../Assets/heart_icon.png';
import { supabase } from '../../supabaseClient';
import search_icon from '../Assets/search_icon.png'


const Navbar = () => {
    const [menu, setMenu] = useState("none");
    const [searchInput, setSearchInput] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Fetch products from Supabase
        const fetchProducts = async () => {
            let { data: fetchedProducts, error } = await supabase
                .from('Products') // Replace 'products' with your actual table name
                .select('*');

            if (error) console.log('Error fetching products', error);
            else setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter products based on search input
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(searchInput.toLowerCase()) // Adjust according to your product structure
        );
        setFilteredProducts(filtered);
    }, [searchInput, products]);

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className='navbar'>
            <div className="nav-siteName">
                    <Link to="/">
                    <button>ClosetSwap</button>
                    </Link>
                </div>
            <div className="nav-divider"></div>

            <div className='nav-signup-cart'>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleSearchChange}
                />
                <img src={heart_icon} alt="" style={{ width: '20px' }} />
                <Link to='/cart'><img src={shoppingcart_icon} alt="" style={{ width: '20px' }} /></Link>
                <Link to='/loginintro'><button>Sign Up</button></Link>
            </div>
            <section className="nav-product list">
                <ul className="nav-menu">
                    <li
                        onMouseEnter={() => { setMenu("mens") }}
                        onMouseLeave={() => { setMenu(null) }}
                    >
                        <Link style={{ textDecoration: 'none' }} to='/menswear'>Menswear</Link>{menu === "mens" ? <hr /> : <></>}
                    </li>
                    <li
                        onMouseEnter={() => { setMenu("womens") }}
                        onMouseLeave={() => { setMenu(null) }}
                    >
                        <Link style={{ textDecoration: 'none' }} to='/womenswear'>Womenswear</Link>{menu === "womens" ? <hr /> : <></>}
                    </li>
                    <li
                        onMouseEnter={() => { setMenu("accessories") }}
                        onMouseLeave={() => { setMenu(null) }}
                    >
                        <Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{menu === "accessories" ? <hr /> : <></>}
                    </li>
                    <li
                        onMouseEnter={() => { setMenu("special") }}
                        onMouseLeave={() => { setMenu(null) }}
                    >
                        <Link style={{ textDecoration: 'none' }} to='/specialevents'>Special Events</Link>{menu === "special" ? <hr /> : <></>}
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Navbar