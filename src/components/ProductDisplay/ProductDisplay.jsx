import React from 'react'
import { useContext,useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import cart_cross_icon from '../../assets/cart_cross_icon.png'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart,} from '../../Slice/shopSlice'
function ProductDisplay(props) {
const {product}=props;
const allow=useSelector((state)=>state.dukan.islogged)
// console.log(product)
const dispatch=useDispatch()
const addCartHandler=()=>{
allow ?dispatch(addToCart(product.id)): alert("please login first")
}
 return (
<div className="productdisplay">
<div className="productdisplay-left">
<div className="productdisplay-img-list">
<img src={product?.image} alt="" />
<img src={product?.image} alt="" />
<img src={product?.image} alt="" />
<img src={product?.image} alt="" />
</div>
<div className="productdisplay-img">
<img src={product?.image} alt="" className="productdisplay-main-img" />
</div>
</div>
<div className="productdisplay-right">
<h1>{product?.name}</h1>
<div className="productdisplay-right-stars">
<img src={star_icon} alt="" />
<img src={star_icon} alt="" />
<img src={star_icon} alt="" />
<img src={star_icon} alt="" />
<img src={star_dull_icon} alt="" />
<p>(122)</p>
</div>
<div className="productdisplay-right-prices">
<div className="productdisplay-right-price-old">${product?.old_price}</div>
<div className="productdisplay-right-price-new">${product?.new_price}</div>
</div>
<div className="productdisplay-right-description">
A lightweight, usually knitted,pull-over shirt, close fitting, having a round neckline
and short sleeves, worn as a under shirt or as an outer garment.
</div>
<div className="productdisplay-right-size">
<h1>Select Size</h1>
<div className="productdisplay-right-size">
<div>S</div>
<div>M</div>
<div>L</div>
<div>XL</div>
<div>XXL</div>
</div>
</div>
<button className='productdisplay-btn1' onClick={addCartHandler}>ADD TO CART</button>
{/* <img src={cart_cross_icon} onClick={removeToCart(product.id)} alt="" />
<p>Remove from cart</p> */}
<p className="productdisplay-right-category"><span>Category:</span>Women,T-Shirt,Crop Top</p>
<p className="productdisplay-right-category"><span>Tags:</span>Mordern,Latest</p>
</div>
</div>
  )
}

export default ProductDisplay