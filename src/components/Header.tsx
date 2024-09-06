import React from 'react'
import Link from 'next/link'  

const Header = () => {
  return (
    <div className='bg' >
      <Link href="\" className='bg_pic'>Home</Link>
      <Link href="\About"className='bg_pic'>About</Link>
      <Link href="\Address"className='bg_pic'>Address</Link>
      <Link href="\Contact"className='bg_pic'>Contact</Link>
    </div>
  )
}

export default Header
