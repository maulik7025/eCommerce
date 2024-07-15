import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductSearch = ({products}) => {

    const [searchItems, setSearchItems] = useState("");
    
    const searchProducts = products.filter((product) => product.name.toLowerCase().includes(searchItems.toLowerCase()))


    console.log(searchProducts)
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
            <input type='text' name='search' placeholder='Search...' defaultValue={searchItems} id='search' 
            onChange={(e) => setSearchItems(e.target.value)}/>
            <button type="submit">
                <i className='icofont-search-2'></i>
            </button>
        </form>

        {/* search content */}
        <div>
            {
                searchItems && searchProducts.map((sItems) => (
                    <Link key={sItems.id} to={`/shop/${sItems.id}`}>
                        <div className='d-flex gap-3 p-2'>
                            <div>
                                <div className='pro-thumb h-25'>
                                    <img src={sItems.img} alt={sItems.img} width={70} className='flex={grow|shrink}-0'/>
                                </div>
                            </div>
                            <div className='product-content'>
                                <p>
                                    <Link to={`/shop/${sItems.id}`}>{sItems.name}</Link>
                                </p>
                                <h6>$ {sItems.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>


    </div>

  )
}

export default ProductSearch