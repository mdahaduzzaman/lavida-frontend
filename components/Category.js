import React from 'react'
import Image from 'next/image'

async function Category() {
    const response = await fetch('http://127.0.0.1:8000/api/v1/categories')
    const categoryList = await response.json()
    const newcategory = categoryList * 2

  return (
    <>
        <div className='flex justify-between mx-5 mt-2'>
            <span className='text-sm'>Choose Category</span>
            <span>See All</span>
        </div>

        <div className='flex gap-2 mx-3 img-Parent overflow-x-scroll'>
            {categoryList.map((curElem)=>{
                return (
                    <div className='min-w-[5rem] h-[7rem]' key={curElem.id}>
                        <Image src="/girl.jpg" width={100} height={100} alt="{curElem.name}" className='h-[5rem] w-[100%] object-cover rounded-md'/>
                        <div className='text-[10px] lh-0 text-center'>{curElem.name.charAt(0).toUpperCase() + curElem.name.slice(1)}</div>

                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Category