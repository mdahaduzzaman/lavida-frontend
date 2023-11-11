import React from 'react'
import Image from 'next/image'

async function Category() {
    const response = await fetch('http://127.0.0.1:8000/api/v1/categories')
    const categoryList = await response.json()

  return (
    <>
        <div className='flex justify-between mx-3 mt-2 mb-1'>
            <span className='text-sm font-semibold'>Choose Category</span>
            <span className='text-[.8rem] font-medium'>See All</span>
        </div>

        <div className='flex gap-2 mx-3 img-Parent overflow-x-scroll'>
            {categoryList.map((curElem)=>{
                return (
                    <div className='min-w-[4rem] max-w-[4rem] h-[6rem]' key={curElem.id}>
                        <Image src="/girl.jpg" width={100} height={100} alt="{curElem.name}" className='h-[4rem] w-[100%] object-cover rounded-md'/>
                        <div className='text-[10px] lh-0 text-center font-medium'>{curElem.name.charAt(0).toUpperCase() + curElem.name.slice(1)}</div>

                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Category