import {React,createContext,useContext,useState} from 'react'
import all_product from '../assets/all_product.js'

export const ShopContext=createContext(null)
// const getDefaultCart=()=>{
// let cart=[]
// for(let it=0; it<all_product.length;it++){
// cart.push(all_product[it])
// }
// return cart;
// }
const ShopContextProvider=(props)=>{
const[cartInit,setCartInit]=useState([])
let addToCart=(itemId)=>{
setCartInit((prev)=>([...prev,prev.push(all_product.find((aidi)=>aidi.id===itemId))]))
addValtoCart()
}
let removeToCart=(itemId)=>{
setCartInit((prev)=>([...prev,prev.filter((rem)=>(rem.id!==itemId))]))
}
    
const sortOption=[
{
name:"color",
},
{
name:"size",
}
]

let addValtoCart=()=>{
let totalamt=0;
for(let item in cartInit){
// console.log(cartInit[item].id)
let itemInfo=all_product.find((prod)=>prod.id===Number(cartInit[item].id));
console.log(itemInfo)
console.log(cartInit)
if(itemInfo!==undefined){
totalamt+=itemInfo.new_price;
}
}
return totalamt;
}

const countCart=()=>{
let count=0;
for(let item in cartInit){
if(cartInit[item].id>0){
count+=1
}
}
return count;
}
const context_value={sortOption,addValtoCart,countCart,all_product,cartInit,addToCart,removeToCart};


return(
<ShopContext.Provider value={context_value}>
    {props.children}
</ShopContext.Provider>
)
}
export default ShopContextProvider;