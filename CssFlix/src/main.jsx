import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import Signup from './Pages/Signup.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import ShopContextProvider from './Context/ShopContext'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
const routeArr=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App/>}>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/>}/>
  <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>}/>
  <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
  <Route path="product/" element={<Product/>}>
  <Route path=":productId" element={<Product/>}/>
  </Route>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/cart" element={<Cart/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={routeArr}/>
)
