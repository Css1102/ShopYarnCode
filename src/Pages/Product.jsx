import React from 'react'
import { useContext } from 'react'
import all_product from '../assets/all_product'
import {useParams} from 'react-router-dom'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

function Product() {
    const{productId}=useParams()
    const product=all_product.find((key)=> key.id===Number(productId))
    console.log(product)
  return (
<div>
<Breadcrumb product={product}/>
<ProductDisplay product={product}/>
<DescriptionBox/>
<RelatedProducts/>
</div>
  )
}

export default Product