'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col items-center gap-9  h-screen justify-center'>
     <p className='text-5xl text-red-500 font-extrabold'>Discover Your Next Adventure With AI:</p>
     <p className='text-5xl font-extrabold'>Personalized Itinaries at Your FingerTips</p>
     <p className='text-xl '>Your Personal trip planner and travel Curator,creating custom itinaries tailored to your interests and budget</p>   
     <button onClick={()=>router.push('/form')} className='px-3 py-2 rounded-md bg-black text-white'>Get Started It's Free</button>
    </div>
  )
}

export default Hero
