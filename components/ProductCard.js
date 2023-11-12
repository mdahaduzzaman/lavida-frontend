import React from 'react'
import Image from 'next/image'
function ProductCard({product}) {
  const { price, title, productImage } = product;
  return (
    <div className='w-[10.8rem]'>
        <Image src={productImage[0].image} height={200} width={200} className='h-[9rem] w-full object-cover rounded-lg'/>
        <div>{title.charAt(0).toUpperCase() + title.slice(1, 30)}</div>
        <span className='font-bold'>৳{price}</span>
    </div>
  )
}

export default ProductCard