import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'
function Header(){
const navigate=useNavigate();
const navItems=[{
name:'Home',
slug:'/',
isActive:true
},
{
name:Men,
slug:'/men',
isActive:true
},
{
  name:Women,
  slug:'/women',
  isActive:true
},
{

}
]
  return (
  <div className="mb-4 px-3 py-2 text-2xl text-white shadow-md">
   <div className='icon'>
    <img src="https://cdn-icons-png.freepik.com/256/1144/1144760.png" alt="img not found" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX6VZaMEXvtwkUmemrf4s8wfQGh99NxgatiENbEpJXw&s" 
    alt="wish puri nhi ho payegi" />

   </div>
  </div>
  )
}

export default Header