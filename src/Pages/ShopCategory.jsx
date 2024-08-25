import React from 'react'
import {useState,useEffect,useContext} from 'react'
import dropdown_icon from '../assets/dropdown_icon.png'
//   </select>
 import Item from '../components/Item/Item'
import './ShopCategory.css'
import all_product from '../assets/all_product'

const ShopCategory = (props) => {
//  const renderOptions=(a)=>{
//   if(a!==null){
//   <select className="list-option">
//   {a.map((item,i)=>{return <option key={i}>{...item.options}</option>})}

// }
let expr=undefined;
if(props.category==="men"){
  expr="1-12"
}
else if(props.category==="women"){
  expr="12-24"

}
else{
  expr="24-36"
}
  return (
  <div className="shop-category">
  <img className='shop-img' src={props.banner} alt="" />
   <div className="shopcategory-indexsort">
   <p>
   <span>Showing {`${expr}`} </span> Out of 36 Products.</p>
    <br/>
    <div className="shopcategory-sort">
   
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