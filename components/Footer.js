import React from 'react'
import Link from 'next/link'
import { GoHome } from 'react-icons/go'
import Icon, { HomeFilled } from '@ant-design/icons';
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

function Footer() {
  return (
    <footer className='fixed bottom-0 w-full'>
      <div className='flex bg-slate-200 justify-around py-4 mt-5'>
        <div className="home">
          <Link href="/">
            <HomeFilled />
            {/* <GoHome className='text-2xl' /> */}
          </Link>
        </div>

        <div className="favourite">
          <Link href="/">
            <AiOutlineHeart className='text-2xl'/>
          </Link>
        </div>

        <div className="cart">
          <Link href="/">
            <FiShoppingCart className='text-2xl'/>
          </Link>
         </div>
        <div className="profile">
          <Link href="/">
            <BiUser className='text-2xl' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer