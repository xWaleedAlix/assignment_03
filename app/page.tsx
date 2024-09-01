import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image  src="/House.jpg" alt='house-pic' width={500} height={500}  className="house"></Image>
      <p>Home page</p>
      <h4>Use these links </h4>
      <h3>
      http://localhost:3000/Home <br></br>
      http://localhost:3000/About<br></br>
      http://localhost:3000/Address<br></br>
      http://localhost:3000/Contact<br></br>

      </h3>
    </div>
  )
}

export default page
