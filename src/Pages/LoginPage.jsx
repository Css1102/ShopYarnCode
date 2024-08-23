import React,{useState,useContext} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import cart_cross_icon from '../assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {toggleLogged} from '../Slice/shopSlice'
const LoginPage=() =>{
const[LogInput,setLogInput]=useState({
email:"",
password:"",
})
const navigate=useNavigate()
const logged=useSelector((state)=>state.dukan.islogged)
const dispatch=useDispatch()
const handleLogin=(e)=>{
e.preventDefault()
let verify=JSON.parse(localStorage.getItem("input"))
if(verify.email===LogInput.email && verify.password===LogInput.password){
dispatch(toggleLogged(LogInput.email.charAt(0)))
navigate("/shop")
}
else{
alert("signup first before logging in")
}
}
  return (
    <div className="loginpage">
    <div className="loginpage-container">
    <h1>Log In</h1>
    <form className="loginpage-fields" action="" onSubmit={handleLogin}>
    {/* <div className="loginpage-fields"> */}
<input type="email" name='email'  placeholder='Email adress' value={LogInput.email} onChange={(e)=>setLogInput({...LogInput,email:e.target.value})}/>
<input type="password" name='password'  placeholder='Password' value={LogInput.password} onChange={(e)=>setLogInput({...LogInput,password:e.target.value})}/>
  {/* </div> */}
<button type='submit'>Continue</button>
</form>
<p className="loginpage-login">New to the website? No worries<Link to='/signup'><span>Sign up here</span></Link></p>
<div className="loginpage-agree">
    <input type="checkbox" name='' id='' />
    <p>By continuing, I agree to the terms & the privacy policy.</p>
</div>
{/* <p ch><img src={cart_cross_icon} className="cross-style" alt="jaoge tum kabhi" />The password */}
{/* or email you entered are incorrect. Please try again</p> */}
    </div>
    </div>

  )
}

export default LoginPage