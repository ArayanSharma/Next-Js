import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
        <div className='flex text-xl items-center mb-10 justify-between px-6 py-3 bg-green-900 text-white '>
            <h1>SHULYN</h1> 
        
        <div className='flex gap-6'>
            <Link href="/">Home</Link>
            <Link  href="/products">Products</Link> 
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            
        </div>

    </div>
  )
}

export default Navbar
