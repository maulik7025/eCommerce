// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './utilis/appStore'

function App() {

  return (
    <Provider store={store}>
        <NavItems/>
        <main className='min-vh-100'>
          <Outlet/>
        </main>
        <Footer/>
    </Provider>
  )
}

export default App
