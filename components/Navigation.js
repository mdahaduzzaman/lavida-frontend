import Link from 'next/link'
import React from 'react'

function Navigation() {
    let navList = ["Popular", "Discount", "Exclusive"]
    return (
        <div className='mx-2'>
            {
            navList.map((curElem)=>(<Link href='/' className='m-2 font-semibold text-sm'>{curElem}</Link>))
            }
        </div>
    )
}

export default Navigation