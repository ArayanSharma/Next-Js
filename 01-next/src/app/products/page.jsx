import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div>
        <div  className='flex justify-center gap-5'>
        <Link href="/products/men">Men Collection</Link>
        <Link href="/products/women">Women Collection</Link>
        </div>
        <h1>PRODUCTS page</h1>
      
    </div>
  )
}

export default page
