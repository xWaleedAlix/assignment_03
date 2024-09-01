import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image  src="/House.jpg" alt='house-pic' width={500} height={500}  className="house"></Image>
      <p>Home page</p>
      <h4>Use these links </h4>
      <h3>
      At the end of the url:/Home <br></br>
      At the end of the url:/About<br></br>
      At the end of the url:/Address<br></br>
      At the end of the url:/Contact<br></br>

      </h3>
    </div>
  )
}

export default page
