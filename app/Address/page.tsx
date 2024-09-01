import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image src="/Adress.jpg" alt='adress-pic' width="500" height="500"  className='house'></Image>
      <p>Thali Chock Bypass Road <br></br> <b> Rahim Yar Khan</b></p>
    </div>
  )
}

export default page