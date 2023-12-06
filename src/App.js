import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Favorites from './Pages/Favorites';
import LoginSignup from './Pages/LoginSignup';
import LoginIntro from './Pages/LoginIntro';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Components/Products/Products';
import Tile from './Components/Tile/Tile';
import './Components/Tile/Tile';
import banner_one from './Components/Assets/banner_one.jpg'


function App() {
  return (
    <div>
      <BrowserRouter> 
          <Navbar />
        <Routes>
          <Route path = '/'element={<Products/>}/>
          <Route path = '/menswear'element={<ShopCategory category = "mens"/>}/>
          <Route path = '/womenswear'element={<ShopCategory category = "womens"/>}/>
          <Route path = '/accessories'element={<ShopCategory category = "accessories"/>}/>
          <Route path = '/specialevents'element={<ShopCategory category = "specialevents"/>}/>
          {/* <Route path = "/product" element = {<Product/>}>
            <Route path = ':productID' element = {<Product/>}/>
          </Route> */}
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/favorites' element = {<Cart/>}/>
          <Route path = '/myfavorites' element = {<Favorites/>}/>
          <Route path = '/loginintro' element = {<LoginIntro/>}/>
          <Route path = '/loginsignup' element = {<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
