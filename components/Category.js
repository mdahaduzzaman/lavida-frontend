import React from 'react'
import Image from 'next/image'

async function Category() {
    const response = await fetch('http://127.0.0.1:8000/api/v1/categories/')
    const categoryList = await response.json()
    const newcategory = categoryList * 2
    console.log(newcategory)

  return (
    <>
        <div className='flex justify-between mx-5'>
            <span>Choose Category</span>
            <span>See All</span>
        </div>

        <div className='flex gap-2 overflow-x-scroll m-2'>
            {categoryList.map((curElem)=>{
                return (
                    <div className='w-[5rem] h-[5rem] relative'>
                        <Image src="/girl.jpg" width={100} height={100} className='h-full w-[100%] object-cover rounded-md'/>
                        <span className='absolute bottom-0 left-[50%] translate-x-[-50%] text-white text-[10px]' >{ curElem.name.substring(0, 10) }</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Category