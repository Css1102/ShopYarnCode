import React from 'react'
import {useState,useEffect} from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const[formInput,setformInput]=useState({
  name:"",
  email:"",
  password:"",
  })
const navigate=useNavigate();
function formValidate(formInput){
    if (formInput.name.length == 0) {
     
      return false
    }

    if (formInput.email.length == 0) {
      
      return false
    }

    if (formInput.password.length < 8) {
      return false
    }

    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < formInput.password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(formInput.password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(formInput.password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (formInput.password[i] == formInput.password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (formInput.password[i] == formInput.password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      
      return false
    }

    if (countUpperCase == 0) {
      return false
    }

    if (countDigit == 0) {

      return false
    }

    if (countSpecialCharacters == 0) {

      return false
    }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
    return true;
}

useEffect(()=>{
localStorage.setItem("input",JSON.stringify({...formInput}))
  },[formInput])
  const handleSubmit=(e)=>{
    e.preventDefault()
    const signObj=JSON.parse(localStorage.getItem("input"))
  if(signObj.name===formInput.name && signObj.email===formInput.email && signObj.password===formInput.password && formValidate(formInput)){
  navigate("/login")
  }
  // else{
  //  return <p><img src={cart_cross_icon} className="cross-style" alt="jaoge tum kabhi" />The password
  //  or email you entered are incorrect. Please try again</p>
  // }
  }

  
  
  return (
    <div className="loginsignup">
    <div className="loginsignup-container">
    <h1>Sign Up</h1>
    <form className="loginsignup-fields" action="" onSubmit={handleSubmit}>
    {/* <div className="loginsignup-fields"> */}
<input type="text" name='name' placeholder='Enter your name' value={formInput.name} onChange={(e)=>setformInput({...formInput,[e.target.name]:e.target.value})} />
<input type="email" name='email'  placeholder='Email adress' value={formInput.email} onChange={(e)=>setformInput({...formInput,email:e.target.value})}/>
<input type="password" name='password'  placeholder='Password' value={formInput.password} onChange={(e)=>setformInput({...formInput,password:e.target.value})}/>
  {/* </div> */}
<button type='submit'>Continue</button>
</form>
<p className="loginsignup-login">Already have an account?<span>Login here</span></p>
<div className="loginsignup-agree">
</div>
    </div>
    </div>
  )
}

export default Signup