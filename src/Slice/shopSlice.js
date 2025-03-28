import { createSlice,nanoid } from "@reduxjs/toolkit"
import all_product from '../assets/all_product'

const initialState={
cartInit:[],
cartAmount:0,
islogged:false,
all_product,
initchar:"",
}

export const shopSlice=createSlice({
name:'dukan',
initialState,
reducers:{
addToCart:(state,action)=>{
const item=state.all_product.find((iter)=>iter.id===(action.payload))
if(state.cartInit.length===0 && item!==undefined){
state.cartInit.push(item)
state.cartAmount+=item.new_price*item.count
}
else if(state.cartInit.length>0 && item!==undefined){
const item_cart=state.cartInit.find((itercart)=>itercart.id===item.id);
if(item_cart===undefined){
state.cartInit.push(item)
state.cartAmount+=item.new_price*item.count
}
// else{
// // state.cartInit=[...state.cartInit,{...item_cart,count:item_cart.count+1}]
// const index=state.cartInit.findIndex((inditer)=>inditer.id===item_cart.id)
// state.cartInit[index].count+=1;
// state.cartAmount+=item_cart.new_price

// }
}
},
removeToCart:(state,action)=>{
let item=state.all_product.find((iter)=>iter.id===action.payload);
if(state.cartInit.length>0){
const item_remove=state.cartInit.find((iter)=>iter.id===item.id)
if(item_remove!==undefined && item_remove.count===1){
state.cartInit=state.cartInit.filter((iter)=>iter.id!==item_remove.id)
state.cartAmount-=item_remove.new_price
}
else if(item_remove!==undefined && item_remove.count>1){
    state.cartAmount-=item_remove.new_price
    const index=state.cartInit.findIndex((inditer)=>inditer.id===item_remove?.id)
    state.cartInit[index].count-=1;
// state.cartInit=[...state.cartInit,{...item_remove,count:item_remove.count-1}]
}
}
},
toggleLogged:(state,action)=>{
state.initchar+=action.payload;
state.islogged=!state.islogged
},
incrementCart:(state,action)=>{
const item=state.cartInit.find((it)=>it.id===action.payload)
const itemInd=state.cartInit.findIndex((it)=>it.id===action.payload)
state.cartInit[itemInd].count+=1;
state.cartAmount+=item.new_price
},
removeFromCart:(state,action)=>{
console.log("reducer called")
const remInd=state.cartInit.find((it)=>it.id===action.payload)
// const newArr=state.cartInit.slice(remInd,remInd+1);
state.cartInit=state.cartInit.filter((it)=>it.id!==remInd.id)
console.log(state.cartInit)
}
}
})

export default shopSlice.reducer
export const {addToCart,removeToCart,toggleLogged,incrementCart,removeFromCart}=shopSlice.actions
