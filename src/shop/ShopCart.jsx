import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useDispatch, useSelector } from 'react-redux'
import delImgUrl from "/images/shop/del.png";
import { decreaseQty, increaseQty, removeItems } from '../utilis/cartSlice';

const shopCart = () => {


  const cartItems = useSelector((store) => store.cart.cartItems);

 const dispatch = useDispatch();

  const totalQty = cartItems.reduce((prevQty, current) => prevQty + current.quantity, 0)
  const totalPrice = cartItems.reduce((prevPrice, current) => prevPrice + current.price*current.quantity, 0)

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item) =>
                      <tr key={item.id}>
                        <td className="product-item cat-product">
                          <div className="p-thumb">
                            <Link to="/shop-single">
                              <img src={item.img} alt="" />
                            </Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop-single">{item.name}</Link>
                          </div>
                        </td>
                        <td className="cat-price">${item.price}</td>
                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec-btn btn"   onClick={() => dispatch(decreaseQty(item))}>-</div>
                            <span>{item.quantity}</span>
                            <div className="inc-btn btn" onClick={() => dispatch(increaseQty(item))}>+</div>
                          </div>
                        </td>
                        <td className="cat-toprice">
                          $ {item.price * item.quantity}
                        </td>
                        <td className="cat-edit">
                          <a onClick={() => dispatch(removeItems(item))}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    )
                  }
                   
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon" action="/">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout" action="/">
                  <input type="submit" value="Update Cart" />
                  {/* <Link to="/check-out"><input type="submit" value="Proceed to Checkout" /></Link> */}
                  <div>
                    {/* <CheckoutPage /> */}
                  </div>
                </form>
              </div>

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* shipping  */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="volvo">United Kingdom (UK)</option>
                          <option value="saab">Bangladesh</option>
                          <option value="saab">Pakisthan</option>
                          <option value="saab">India</option>
                          <option value="saab">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="volvo">State/Country</option>
                          <option value="saab">Dhaka</option>
                          <option value="saab">Benkok</option>
                          <option value="saab">Kolkata</option>
                          <option value="saab">Kapasia</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Total</button>
                    </div>
                  </div>

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">{totalPrice}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {totalPrice}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default shopCart