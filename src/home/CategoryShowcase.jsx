import React, { useState } from 'react'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import logo from '/images/logo/logo.png'


const title = "Our Products";

const categoryList = [
   {
      cateId: 1,
      category: 'Shoes'
   },
   {
      cateId: 2,
      category: 'Bags'
   },
   {
      cateId: 3,
      category: 'Phones'
   },
   {
      cateId: 4,
      category: 'Beauty'
   },
]

const ProductData = [
  {
    imgUrl: 'images/categoryTab/01.jpg',
    cate: 'Shoes',
    title: 'Nike Premier X',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 1,
  },
  {
    imgUrl: 'images/categoryTab/02.jpg',
    cate: 'Bags',
    title: 'Asthetic Bags',
    author: 'assets/images/course/author/02.jpg',
    brand: 'D&J Bags',
    price: '$199.00',
    id: 2,
  },
  {
    imgUrl: 'images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    author: 'src/assets/images/categoryTab/brand/apple.png',
    brand: 'Apple',
    price: '$199.00',
    id: 3,
  },
  {
    imgUrl: 'images/categoryTab/04.jpg',
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    author: 'assets/images/course/author/04.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 4,
  },
  {
    imgUrl: 'images/categoryTab/05.jpg',
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    author: 'assets/images/course/author/05.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 5,
  },
  {
    imgUrl: 'images/categoryTab/06.jpg',
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    author: 'assets/images/course/author/06.jpg',
    brand: 'Zaara',
    price: '$199.00',
    id: 6,
  },
  {
    imgUrl: 'images/categoryTab/07.jpg',
    cate: 'Bags',
    title: 'Look Less Chanel Bag ',
    author: 'assets/images/course/author/01.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 7,
  },
  {
    imgUrl: 'images/categoryTab/08.jpg',
    cate: 'Shoes',
    title: 'Casual Sneakers',
    author: 'assets/images/course/author/02.jpg',
    brand: 'Bata',
    price: '$199.00',
    id: 8,
  },
]

const CategoryShowcase = () => {

  const [productItems, setProductItems] = useState(ProductData);

  const filterItem = (cateValue) => {
      const filterdProducts = ProductData.filter((fItem, i) => cateValue.toLowerCase() === fItem.cate.toLowerCase())
      setProductItems(filterdProducts)
  }

  return (
    <div className='course-section style-3 padding-tb'>
        <div className='course-shape one'>
            <img src="images/shape-img/icon/01.png" alt='shape'></img>
        </div>
        <div className='course-shape two'>
            <img src="images/shape-img/icon/02.png" alt='shape'></img>
        </div>

      {/* Main content */}
      <div className='container'>
        <div className='section-header'>
            <h2 className='title'>{title}</h2>
            <div className='course-filter-group'>
               <ul className='lab-ul'>
                  <li onClick={()=> setProductItems(ProductData)}>All</li>
                  {
                     categoryList.map((cateValue, i) => 
                        <li onClick={()=> filterItem(cateValue.category)}>{cateValue.category}</li>)
                  }

               </ul>
            </div>
        </div>
        <div className='section-wrapper'>
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {
               productItems.map((product, i) => <div key={product.id} className='col'>
                  <div className='course-item style-4'>
                     <div className='course-inner'>
                        <div className='course-thumb'>
                           <img src={product.imgUrl} alt=""></img>
                           <div className='course-category'>
                              <div className='course-cate'>
                                 <a href='#'>{product.cate}</a>
                              </div>
                              <div className='course-review'>
                                 <Rating/>
                              </div>
                           </div>
                        </div>

                        {/* content */}
                        <div className='course-content'>
                           <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                           <div className='course-footer'>
                           <div className='course-author'>
                              <Link to="/" className='ca-name'>{product.brand}</Link>
                           </div>
                           <div className='course-price'>
                              {product.price}
                           </div>
                        </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
               )
            }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryShowcase