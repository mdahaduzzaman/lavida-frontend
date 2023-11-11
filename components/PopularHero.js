import React from 'react'
import ProductCard from './ProductCard'

async function PopularHero() {
  const response = await fetch('http://127.0.0.1:8000/api/v1/products')
  const productsList = await response.json()
  
  return (
    <div className='flex flex-wrap gap-4 mx-3 mt-5'>
      {
        productsList.map((curElem)=>{
          return <ProductCard key={curElem.id} product={curElem}/>
        })
      }
    </div>
  )
}

export default PopularHero