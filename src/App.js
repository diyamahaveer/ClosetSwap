import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Components/Products/Products';
import Tile from './Components/Tile/Tile';
import MyFavorites from './Pages/MyFavorites';
import './Components/Tile/Tile';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path = '/'element={<Shop/>}/>
          <Route path = '/menswear'element={<ShopCategory category = "mens"/>}/>
          <Route path = '/womenswear'element={<ShopCategory category = "womens"/>}/>
          <Route path = '/accessories'element={<ShopCategory category = "accessories"/>}/>
          <Route path = '/specialevents'element={<ShopCategory category = "specialevents"/>}/>
          {/* <Route path = "/product" element = {<Product/>}>
            <Route path = ':productID' element = {<Product/>}/>
          </Route> */}
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/myfavorites' element = {<MyFavorites/>}/>
          <Route path = '/signup' element = {<LoginSignup/>}/>
        </Routes>
        <Products/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
