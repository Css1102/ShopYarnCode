import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ShopContextProvider from './Context/ShopContext'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
  <ShopContextProvider>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </ShopContextProvider>
  )
}

export default App
