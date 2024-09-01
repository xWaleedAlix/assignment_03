import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image  src="/House.jpg" alt='house-pic' width={500} height={500}  className="house"></Image>
      <p>Home page</p>
    </div>
  )
}

export default page
