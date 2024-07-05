// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
