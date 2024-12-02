import React,{useState,useContext,useRef,useEffect} from 'react'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
import cart_cross_icon from '../assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { useSelector,useDispatch } from 'react-redux'
import {toggleLogged} from '../Slice/shopSlice'
const LoginPage=() =>{
const[LogInput,setLogInput]=useState({
email:"",
password:"",
})
const[errors,setErrors]=useState(false)
const[submiterr,setSubmiterr]=useState("")
const[ischecked,setIschecked]=useState(false)
// const[checkerr,setCheckerr]=useState("")
const[isall,setIsall]=useState({
mail:false,
password:false,
checked:false
})
const handleCheck=()=>{
setIschecked((prev)=>!prev)
}
// const checkref=useRef(null)
// useEffect(()=>{
// const refcheck=window.addEventListener("change",()=>{
// checkref.current.checked=!checkref.current.checked
// })
const navigate=useNavigate()
const dispatch=useDispatch()
const logged=useSelector((state)=>state.dukan.islogged)
const validationSchema=Yup.object({
  email:Yup.string().required("Email is required!").email("Please enter valid email").
  matches(/^\S+@\S+\.\S+$/,"Invalid email"),
  password:Yup.string().required("Password is required!").min(8,"password must be atleast 8 character long")
  .matches(/[!@#$%^&*(),.?":{}|<>]/,  "Password must contain at least one symbol").
  matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
  })
  
const handleMail=(e)=>{
  setLogInput({...LogInput,email:e.target.value})
}
const handlePass=(e)=>{
  setLogInput({...LogInput,password:e.target.value})
}
const handleLogin=async(e)=>{
e.preventDefault()
try{
let verify=JSON.parse(localStorage.getItem("input"))
const isValid=await validationSchema.validate(LogInput,{abortEarly:false})
if(verify.email===LogInput.email && verify.password===LogInput.password && ischecked && Object.keys(isValid).length!==0){
dispatch(toggleLogged(LogInput.email.charAt(0)))
navigate("/shop")
}
else if(!ischecked){
  setSubmiterr("click agree to policy and terms")
}
else{
setSubmiterr("No user with given credentials detected. Sign up before logging in")

}
}
catch(error){
  const newErrors={}
  error.inner.forEach((err)=>{
    console.log(error)
  newErrors[err.path]=err.message;
  })

  setErrors(newErrors)
}

}

  return (
    <div className="loginpage">
    <div className="loginpage-container">
    <h1>Log In</h1>
    {submiterr.length>0 && <p className='submit-err'>{submiterr}</p>}

    <form className="loginpage-fields" action="" onSubmit={handleLogin}>
    {/* <div className="loginpage-fields"> */}
<input type="email" name='email'  placeholder='Email adress' value={LogInput.email} onChange={handleMail}/>
{errors.email && <div className="error">{errors.email}</div>}
<input type="password" name='password'  placeholder='Password' value={LogInput.password} onChange={handlePass}/>
{errors.password && <div className="error">{errors.password}</div>}

  {/* </div> */}
<button type='submit'>Continue</button>
</form>
<p className="loginpage-login">New to the website? No worries<Link to='/signup'><span>Sign up here</span></Link></p>
<div className="loginpage-agree">
    <input type="checkbox" name=''  id='' checked={ischecked} onChange={handleCheck}/ >
    <p>By continuing, I agree to the terms & the privacy policy.</p>
</div>
{/* <p ch><img src={cart_cross_icon} className="cross-style" alt="jaoge tum kabhi" />The password */}
{/* or email you entered are incorrect. Please try again</p> */}
    </div>
    </div>

  )
}

export default LoginPage