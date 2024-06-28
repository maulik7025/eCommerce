import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';


const title = (
    <h2>search Your One free <span> Thousand </span>of Products</h2>
  );
  const desc = ("we have the largest collection of products");
  
  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
    ];

const Banner = () => {

  const [searchInput, setSearchInput] = useState("")
  const [filteredProducts, setfilteredProducts] = useState(productData)

  const searchHandle = e => {
    let searchValue = e.target.value;
    setSearchInput(searchValue);

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    setfilteredProducts(filtered);
  }


  return (
    <section className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                {title}
                <form>
                  <SelectedCategory select={"all"}/>
                  <input onChange={searchHandle} type='text' name='search' id='search' 
                  placeholder='Search Your Product' value={searchInput} />
                  <button><i className='icofont-search'></i></button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                  {
                    searchInput && filteredProducts.map((productName, i) => <li key={i}>
                      <Link to={`/shop/${productName.id}`}>{productName.name}</Link>
                    </li>)
                  }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Banner