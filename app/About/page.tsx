import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>{<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 div_01">
      <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/About.jpg" alt="" width="384" height="512"></Image>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
          My name in Waleed Ali.I am artificial intellegance student.I am 21 years old.Thank you fot giving me this oppertunity.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Waleed Ali
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Roll no.2234
          </div>
        </figcaption>
      </div>
    </figure>}
    
    </div>
  )
}

export default page
