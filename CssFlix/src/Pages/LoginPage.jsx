import React,{useState} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import cart_cross_icon from '../assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
const LoginPage=() => {
const[Input,setInput]=useState({
email:"",
password:"",
})
const navigate=useNavigate()
const handleLogin=(e)=>{
e.preventDefault()
let verify=localStorage.getItem("input")
if(verify.email===Input.email && verify.password===Input.password){
navigate("/shop")
}
else{
return <p><img src={cart_cross_icon} className="cross-style" alt="jaoge tum kabhi" />The password
or email you entered are incorrect. Please try again</p>
}
}
  return (
    <div className="loginpage">
    <div className="loginpage-container">
    <h1>Log In</h1>
    <form className="loginpage-fields" action="" onSubmit={handleLogin}>
    {/* <div className="loginpage-fields"> */}
<input type="email" name='email'  placeholder='Email adress' value={Input.email} onChange={(e)=>setInput({...Input,[e.target.email]:e.target.value})}/>
<input type="password" name='password'  placeholder='Password' value={Input.password} onChange={(e)=>setInput({...Input,[e.target.password]:e.target.value})}/>
  {/* </div> */}
<button type='submit'>Continue</button>
</form>
<p className="loginpage-login">New to the website? No worries<Link to='/signup'><span>Sign up here</span></Link></p>
<div className="loginpage-agree">
    <input type="checkbox" name='' id='' />
    <p>By continuing, I agree to the terms & the privacy policy.</p>
</div>
    </div>
    </div>

  )
}

export default LoginPage