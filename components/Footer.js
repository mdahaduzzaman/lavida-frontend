import React from 'react'
import Link from 'next/link'
import Icon, { HomeOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <footer className='fixed bottom-0 w-full'>
      <div className='flex bg-slate-200 justify-around py-4 mt-5'>
        <div className="home">
          <Link href="/">
            <HomeOutlined className='text-xl'/>
          </Link>
        </div>

        <div className="favourite">
          <Link href="/">
            <HeartOutlined className='text-xl'/>
          </Link>
        </div>

        <div className="cart">
          <Link href="/">
            <ShoppingCartOutlined className='text-xl'/>
          </Link>
         </div>
        <div className="profile">
          <Link href="/">
            <UserOutlined className='text-xl' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer