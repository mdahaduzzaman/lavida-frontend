'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Icon, { HomeOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons';

function Footer() {
  const pathname = usePathname();

  return (
    <footer className='fixed bottom-0 w-full'>
      <div className='flex bg-slate-200 justify-around py-4 mt-5'>
        
        <div className="home">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
              <HomeOutlined className='text-xl '/>
          </Link>
        </div>

        <div className="favourite">
          <Link href="/products" className={pathname === '/products' ? 'active' : ''}>
            <HeartOutlined className='text-xl'/>
          </Link>
        </div>

        <div className="cart">
          <Link href="/carts" className={pathname === '/carts' ? 'active' : ''}>
            <ShoppingCartOutlined className='text-xl'/>
          </Link>
        </div>
        
        <div className="profile">
          <Link href="/profile" className={pathname === '/profile' ? 'active' : ''}>
            <UserOutlined className='text-xl' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer