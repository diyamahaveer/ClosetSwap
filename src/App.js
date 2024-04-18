import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import LoginSignup from './Pages/LoginSignup';
import LoginIntro from './Pages/LoginIntro';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Products from './Components/Products/Products';
import Tile from './Components/Tile/Tile';
import './Components/Tile/Tile';
import banner_one from './Components/Assets/banner_one.jpg'
import Menswear from './Pages/ShopCategory/Menswear';
import Womenswear from './Pages/ShopCategory/Womenswear';
import Accessories from './Pages/ShopCategory/Accessories';
import SpecialEvents from './Pages/ShopCategory/SpecialEvents';
import ProductDetail from './Components/Products/ProductDetail';


function App() {
  return (
    <div>
      <BrowserRouter> 
          <Navbar />
        <Routes>
          <Route path = '/'element={<Products/>}/>
          <Route path = '/menswear'element={<Menswear/>}/>
          <Route path = '/womenswear'element={<Womenswear/>}/>
          <Route path = '/accessories'element={<Accessories/>}/>
          <Route path = '/specialevents'element={<SpecialEvents/>}/>
          {/* <Route path = "/product" element = {<Product/>}>
            <Route path = ':productID' element = {<Product/>}/>
          </Route> */}
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/favorites' element = {<Favorites/>}/>
          <Route path = '/loginintro' element = {<LoginIntro/>}/>
          <Route path = '/loginsignup' element = {<LoginSignup/>}/>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
