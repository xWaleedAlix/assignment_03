import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image src="/Contact.jpg" alt='contact-pic' width="500" height="500"  className='house'></Image>
      <p> <b>Mobile number</b>= +923250081460</p>
      <p> <b>Email</b>= waleedali534363279@gmail.com</p>
    </div>
  )
}

export default page