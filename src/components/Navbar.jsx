import React from 'react'
import { useContext } from 'react'
import logo from '../assets/logo-no-background.png'
import cart_icon from '../assets/cart_icon.png'
import './Nav.css'
import { useSelector } from 'react-redux'
import {toggleLogged} from '../Slice/shopSlice'
import { Link } from 'react-router-dom'
function Navbar() {
  const[pointer,setPointer]=React.useState('shop')
  const logged=useSelector((state)=>state.dukan.islogged)
// const {countCart}=useContext(ShopContext)
return(
<div className="navbar">
<div className="nav-logo">
<img src={logo} height='80px' width='120px' alt="mu?" />
{/* <p className='para'>dienKAPDA</p> */}
</div>
<ul className="nav-menu">
<li onClick={()=>{setPointer("shop")}} ><Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{pointer==='shop' ? <hr/>:<></>}</li>
<li onClick={()=>{setPointer("mens")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{pointer==='mens' ? <hr/>:<></>}</li>
<li onClick={()=>{setPointer("womens")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{pointer==='womens' ? <hr/>:<></>}</li>
<li onClick={()=>{setPointer("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{pointer==='kids' ? <hr/>:<></>}</li>
</ul>
<div className="nav-cart-icon">
{console.log(logged)}
 {!logged ? <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>:
 <Link style={{textDecoration:'none'}} to='/'><button className="button-log">V</button></Link>}
<Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="nhi mila bhai" /></Link>
{/* <div className="nav-bar-count">{countCart()}</div> */}
</div>
</div>
  )
}

export default Navbar