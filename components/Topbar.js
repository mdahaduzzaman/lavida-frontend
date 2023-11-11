import React from 'react'
import Link from 'next/link'

import { BellOutlined, AppstoreOutlined, SearchOutlined } from '@ant-design/icons';

function Topbar() {
  return (
    <header className='flex items-center mt-5 relative'>
        <Link href="/">
          <AppstoreOutlined className='mx-3 text-lg grid place-content-center'/>
        </Link>
        <input type="text" placeholder="Search here" className="rounded-full bg-slate-200 h-[2rem] outline-none px-4 w-full" />
        <span>
          <SearchOutlined className='absolute top-[.5rem] right-[3.5rem] text-slate-400' />
        </span>
        <Link href="/">
          <BellOutlined  className='mx-3 text-xl grid place-content-center' />
        </Link>
    </header>
  )
}

export default Topbar