import React from 'react'
import Link from 'next/link'
import { BsGrid } from 'react-icons/bs'
import { VscBell } from 'react-icons/vsc'

function Topbar() {
  return (
    <header className='flex items-center mt-5'>
        <Link href="/">
          <BsGrid className='m-3 text-lg'/>
        </Link>
        <input type="text" placeholder="Search" className="rounded-full bg-slate-200 h-[2rem] outline-none px-4 w-full" />
        <Link href="/">
          <VscBell className='m-3 text-xl'/>
        </Link>
    </header>
  )
}

export default Topbar