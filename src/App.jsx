// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'

function App() {

  return (
    <>
      <NavItems/>
      <Outlet/>
    </>
  )
}

export default App
