import React from 'react'
import {useState,useEffect} from 'react'
import './Signup.css'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
function Signup() {
  const[formInput,setformInput]=useState({
  name:"",
  email:"",
  password:"",
  confirm_password:""
  })
  const[errors,setErrors]=useState({})
  const[submit,setIsSubmit]=useState(false)

const navigate=useNavigate();
const dispatch=useDispatch();

const validationSchema=Yup.object({
name:Yup.string().required("Name is required!"),
email:Yup.string().required("Email is required!").email("Please enter valid email"),
password:Yup.string().required("Password is required!").min(8,"password must be atleast 8 character long")
.matches(/[!@#$%^&*(),.?":{}|<>]/,  "Password must contain at least one symbol").
matches(/[0-9]/, "Password must contain at least one number")
.matches(/[A-Z]/, "Password must contain at least one uppercase letter"),
confirm_password:Yup.string().oneOf([Yup.ref("password")],"Passwords must match").required("Confirm password is required")
})
// function formValidate(formInput){
//     if (formInput.name.length == 0) {
     
//       return false
//     }

//     if (formInput.email.length == 0) {
      
//       return false
//     }

//     if (formInput.password.length < 8) {
//       return false
//     }

//     let countUpperCase = 0
//     let countLowerCase = 0
//     let countDigit = 0
//     let countSpecialCharacters = 0

//     for (let i = 0; i < formInput.password.length; i++) {
//       const specialChars = [
//         '!',
//         '@',
//         '#',
//         '$',
//         '%',
//         '^',
//         '&',
//         '*',
//         '(',
//         ')',
//         '_',
//         '-',
//         '+',
//         '=',
//         '[',
//         '{',
//         ']',
//         '}',
//         ':',
//         ';',
//         '<',
//         '>',
//       ]

//       if (specialChars.includes(formInput.password[i])) {
//         countSpecialCharacters++
//       } else if (!isNaN(formInput.password[i] * 1)) {
//         // this means that the character is a digit, so increment countDigit
//         countDigit++
//       } else {
//         if (formInput.password[i] == formInput.password[i].toUpperCase()) {
//           // this means that the character is an upper case character, so increment countUpperCase
//           countUpperCase++
//         }
//         if (formInput.password[i] == formInput.password[i].toLowerCase()) {
//           // this means that the character is lowercase, so increment countUpperCase
//           countLowerCase++
//         }
//       }
//     }

//     if (countLowerCase == 0) {
      
//       return false
//     }

//     if (countUpperCase == 0) {
//       return false
//     }

//     if (countDigit == 0) {

//       return false
//     }

//     if (countSpecialCharacters == 0) {

//       return false
//     }

//     // if all the conditions are valid, this means that the form is valid

//     alert('Form is valid')
//     return true;
// }
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const signObj=JSON.parse(localStorage.getItem("input"))
    try{
const isValid=await validationSchema.validate(formInput,{abortEarly:false})
console.log(isValid)
localStorage.setItem("input",JSON.stringify({...formInput}))
setIsSubmit(true)
navigate('/login')
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
    <div className="loginsignup">
    <div className="loginsignup-container">
    <h1>Sign Up</h1>
    {submit && <p className='submit-action'>Sucessfully submitted</p>}
    <form className="loginsignup-fields" action="" onSubmit={handleSubmit}>
    {/* <div className="loginsignup-fields"> */}
<input type="text" name='name' placeholder='Enter your name' value={formInput.name} onChange={(e)=>setformInput({...formInput,[e.target.name]:e.target.value})} />
{errors.name && <div className="error">{errors.name}</div>}
<input type="email" name='email'  placeholder='Email adress' value={formInput.email} onChange={(e)=>setformInput({...formInput,email:e.target.value})}/>
{errors.email && <div className="error">{errors.email}</div>}
<input type="password" name='password'  placeholder='Password' value={formInput.password} onChange={(e)=>setformInput({...formInput,password:e.target.value})}/>
{errors.password && <div className="error">{errors.password}</div>}
<input type="password" name='password'  placeholder='Confirm Password' value={formInput.confirm_password} onChange={(e)=>setformInput({...formInput,confirm_password:e.target.value})}/>
{errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
  {/* </div> */}
<button type='submit'>Continue</button>
</form>
<p className="loginsignup-login">Already have an account?<Link to='/login'><span>Login here</span></Link></p>
<div className="loginsignup-agree">
</div>
    </div>
    </div>
  )
}

export default Signup