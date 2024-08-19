import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import './App.css'

function App() {

  return (
  <Provider store={store}>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </Provider>
  )
}

export default App
