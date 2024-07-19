import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({item}) => {

    
    const {name, id, price, seller, quantity, ratingsCount, img} = item;

    const [preQuantity, setPreQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")

    const handleSize = (e) => {
        setSize(e.target.value)
    }

    const handleColor = (e) => {
        setColor(e.target.value)
    }

    const handleDecrease = (e) => {
        if(preQuantity > 1){
            setPreQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = (e) => {
        setPreQuantity(preQuantity + 1)
    }

    const handleSubmit = (e) => {        
        e.preventDefault();
        const productDetail = {
            id: id, 
            name: name,
            img: img,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon
        }


      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProductIndex = existingCart.findIndex((item) => item.id === id);
      if(existingProductIndex !== -1){
        existingCart[existingProductIndex].quantity += preQuantity;
      }
      else{
        existingCart.push(productDetail);
      }

    //   Update Local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Empty data
    setCoupon("");
    setPreQuantity(1);
    setSize("Select Size")
    setColor("Select Color")
    }
  return (
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingsCount} Review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Velit nam sit eius amet iure hic excepturi officiis dolorem nisi debitis deserunt ratione.</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='select-product size'>
                        <select value={size} onChange={handleSize}>
                            <option>Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className='select-product size'>
                        <select value={color} onChange={handleColor}>
                            <option>Select Color</option>
                            <option value="White">White</option>
                            <option value="Red">Red</option>
                            <option value="Orange">Orange</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                            <option value="Green">Green</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type='text' value={preQuantity} 
                        onChange={(e) => setPreQuantity(parseInt(e.target.value))} id='quantity' name='qtybutton' />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>

                    <div className='discount-code mb-2'>
                        <input type="text" placeholder="Enter Discount Code" name='discountCode' value={coupon}
                        onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    <button type='submit' className='lab-btn'>
                        <span>Add To Cart</span>
                    </button>
                    <Link to="/cart-page" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay