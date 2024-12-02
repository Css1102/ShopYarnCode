import React from 'react'
import NewCollections from '../components/NewCollections/NewCollections'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import { useRef } from 'react'
const Shop = () => {
  const newRef=useRef(null)
  return (
<div>
<Hero refProp={newRef}/>
<Popular/>
<Offers/>
<NewCollections ref={newRef}/>
<NewsLetter/>
</div>
  )
}

export default Shop