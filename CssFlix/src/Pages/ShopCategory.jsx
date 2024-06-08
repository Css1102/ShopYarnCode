import React from 'react'
import {useState,useEffect,useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
//   </select>
 import Item from '../components/Item/Item'
import './ShopCategory.css'

const ShopCategory = (props) => {
 const {all_product,sortOption}=useContext(ShopContext)
 const[open,setOpen]=useState(false)
//  const renderOptions=(a)=>{
//   if(a!==null){
//   <select className="list-option">
//   {a.map((item,i)=>{return <option key={i}>{...item.options}</option>})}

// }
  return (
  <div className="shop-category">
  <img src={props.banner} alt="" />
   <div className="shopcategory-indexsort">
    <p>
    <span>Showing 1-12 </span> Out of 36 Products.
    </p>
    <div className="shopcategory-sort">
    Sort by <img onClick={()=>setOpen(!open)} src={dropdown_icon} alt="" />
  {open && <div className="list-option">
 <ul className='list-styl'>
  {sortOption.map((item_1,i)=>(
   <li  key={i}>{item_1.name}</li>
  )
  )}
  </ul>
  
  </div>
  }
    </div>
   </div>
   <div className="shopcategory-products">
    {all_product.map((item,i)=>{
    if(props.category===item.category){
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else{
    return null;
    }
    })}
   </div>
   <div className="shopcategory-loadmore">
    Explore More
   </div>
  </div>
  )
}

export default ShopCategory