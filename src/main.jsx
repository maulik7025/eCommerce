import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import './index.css'
import Blog from './blog/Blog.jsx'
import Shop from './shop/Shop.jsx'
import Contact from './contactUs/Contact.jsx'
import SingleProduct from './shop/SingleProduct.jsx'


import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShopCart from './shop/ShopCart.jsx'
import AboutUs from './aboutUs/AboutUs.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[ 
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <AboutUs/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/ShopCart",
        element: <ShopCart/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
