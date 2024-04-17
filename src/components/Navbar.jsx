import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Navbar = () => {

 

  const tl = gsap.timeline({
    repeat:-1,
    repeatDelay:1,
    yoyo:"true"
  })

  useGSAP(()=>{

    tl.from(".box",{
      opacity:0,
      y:100,

    })
    .from("h1",{
      opacity:0,
      x:-100,
    })

  },[])

  return (
    <div className='h-screen w-full flex-col bg-neutral-900 relative flex justify-center items-center gap-3'>
      <div className="box w-40 h-40 bg-red-800"></div>
      <div className="box w-40 h-40 bg-red-800"></div>
      <h1 className='text-[4vw] font-semibold font-[monument]'>Hello world!</h1>
      
    </div>
  )
}

export default Navbar;
