import React,{useState,useEffect} from "react";
import './Button.css'
import {incrementCart,removeToCart} from '../Slice/shopSlice'
import { useDispatch } from "react-redux";
const Button=(curobj)=>{
// const {count}=curobj.count
const dispatch=useDispatch()
return(
<div>
<div className="button-parent">
<div className="child-one" onClick={()=>dispatch(removeToCart(curobj.id))}>-
</div>
<div className="child-two">{curobj.count}
</div>
<div className="child-three" onClick={()=>dispatch(incrementCart(curobj.id))}>+</div>
</div>
</div>
)
}

export default Button;