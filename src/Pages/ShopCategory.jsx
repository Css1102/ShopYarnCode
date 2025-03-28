import React from 'react'
import {useState,useEffect,useContext,useRef} from 'react'
import dropdown_icon from '../assets/dropdown_icon.png'
import search_icon from '../assets/search.png'
import Item from '../components/Item/Item'
import './ShopCategory.css'

const ShopCategory = (props) => {
const butRef=useRef(null)
const filterMenu=["price","discount","Recent"]
// useEffect(()=>{
//   if(props.category==="men"){
//     gender_product=[...all_product.slice(13,25)]
//     setAllproduct(gender_product)
//   }
//   else if(props.category==="women"){
//     gender_product=[...all_product.slice(0,13)]
//    setAllproduct(gender_product)
//   }
//   else{
//     gender_product=[...all_product.slice(25,36)
//     ]
//     setAllproduct(gender_product)
//  } 
// },[])

const[toggle,setToggle]=useState(false)
const[allproduct,setAllproduct]=useState(props.gender_product)
useEffect(()=>{
setAllproduct(props.gender_product)
},[props.category])
const handleToggle=(e)=>{
window.scrollTo(500,500)
setToggle((prev)=>!prev)
}
const handleSort=(e)=>{
if(e.target.innerText==='price'){
  const newProduct=[...allproduct]
  console.log(allproduct)
  // console.log(newProduct)
 newProduct.sort((a,b)=>{return (a.new_price)-(b.new_price)})
 setAllproduct(newProduct)
}
else if(e.target.innerText==='discount'){
const discountArr=[...allproduct]
discountArr.sort((a,b)=>(b.old_price-b.new_price)-(a.old_price-a.new_price))
setAllproduct(discountArr)
}
}
  return (
  <div className="shop-category">
  <img className='shop-img' src={props.banner} alt="" />
  
   <div className="shopcategory-indexsort">
   <p className='text-class'>
   <span>Showing 1-12 </span> Out of 36 Products.</p>
    <br/>
    <div className="shopcategory-sort">
    <div className="btn-menu">
   <button className='sort-btn' onClick={handleToggle}>
   <p className="sort-msg">Sort by</p>
   <img className='filter-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGk8qlROXITq5otWgtvhvgm5Y3mfHCo2kaQ&usqp=CAU"  alt="" aria-expanded='false' data-expandable='true'/>
    </button>
    {toggle && (<div className="list-div">
    <ul className="list-class">
    {filterMenu.map((item,index)=>(
    <li key={index} value={item} onClick={handleSort} className='list-item'>{item}</li>
    ))
    }
    </ul>
    </div>
    )}  

    </div>
    <div className="search-bar">
    <img src={search_icon} alt="" className="search-icon" />
    <input type="text" placeholder='Search' className='text-bar'/>
    </div>
    </div>
   </div>
   <div className="shopcategory-products">
    {allproduct.map((item,i)=>{
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