import React from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { GrFavorite } from 'react-icons/gr'
import { FiShoppingCart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

function Footer() {
  return (
    <footer className='flex bg-red-200 justify-around py-4 mt-5'>
        <div className="home"><GrHomeRounded className='text-[1.1rem]'/></div>
        <div className="favourite"><GrFavorite className='text-xl'/></div>
        <div className="cart"><FiShoppingCart className='text-xl'/></div>
        <div className="profile"><BiUser className='text-xl'/></div>
    </footer>
  )
}

export default Footer