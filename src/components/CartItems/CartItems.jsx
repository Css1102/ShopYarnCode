import React,{useState} from 'react'
import { useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,removeToCart} from '../../Slice/shopSlice'
import './CartItems.css'
import Trash_font_awesome from '../../assets/Trash_font_awesome.svg.png'
const CartItems = () => {
const dispatch=useDispatch()
const cartInit=useSelector((state)=>state.dukan.cartInit)
const addValtoCart=useSelector((state)=>state.dukan.cartAmount);
console.log(addValtoCart)
const[promo,setPromo]=useState("")
function addDisc(){
let discount=0;
let perc=Number(promo[4]+promo[5])-Number(promo[1])
discount+=(perc/100)*addValtoCart
return discount
}
  return (
  <div className="cartitems">
  <div className="cartitems-format-main">
  <p>Products</p>
  <p>Title</p>
  <p>Price</p>
  <p>Quantity</p>
  <p>Total</p>
  <p>Remove</p>
  </div>
  <hr/>
  {console.log(cartInit)}
  <ul className='cart-list'>
  {cartInit.map((e,index)=>{
  if(cartInit.length>0){
  return (
  <li key={e.id}>
  <div className="cartitems-format cartitems-format-main">
<img src={e.image} alt="" className='carticon-product-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className="cartitems-quantity">{e.count}</button>
<p>${e.count*e.new_price}</p>
<img className='cartitems-remove-icon' src={Trash_font_awesome} width='40px' height='20px' onClick={()=>{dispatch(removeToCart(e.id))}}/>
</div>
<hr/>
</li>
  )
  }
  })}
  </ul>
  <div className="cartitems-down">
   <div className="cartitems-total">
    <h1>cart Totals</h1>
    <div>
    <div className="cartitems-total-items">
    <p>Subtotal:</p>
    <p>${addValtoCart}</p>
    </div>
    <hr/>
    <div className="cartitems-total-items">
      <p>Shiping Fee</p>
      <p>Free</p>
    </div>
    <hr/>
    <div className="cartitems-total-items">
      <p>Discount:</p>
      <p>${addDisc()>0? addDisc():0}</p>
    </div>
    <hr/>
    <div className="cartitems-total-items">
    <h3>Total</h3>
    <h3>${addDisc()>0 ?addValtoCart-addDisc():addValtoCart}</h3>
    </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
   </div>
   <div className="cartitems-promocode">
   <p>If you have a promocode,enter it here</p>
   <div className="cartitems-promobox">
    <input type="text" placeholder='ENTER CODE'value={promo} onChange={(e)=>setPromo(e.target.value)}/>
    <button onClick={addDisc} >Submit</button>
   </div>
   </div>
  </div>
  </div>
  )
}

export default CartItems