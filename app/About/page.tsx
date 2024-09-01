import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image src="/About.jpg" alt='about-pic' width="500" height="500"  className='house'></Image>
      <p> <b>Name</b>= Waleed Ali</p>
      <p> <b>Roll-No</b>= 2234</p>
      <p> Currently Learning AI</p>
    </div>
  )
}

export default page