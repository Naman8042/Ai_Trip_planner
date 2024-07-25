import React from 'react'
import Delhi from '@/assets/Delhi.jpeg'
import Image from 'next/image'
import Tomb from '@/assets/Tomb.jpg'

const Profile = () => {
  return (
    <div className='h-96 relative'>
      <Image src={Tomb} alt='' className='w-full h-96'/>
      <p className='text-6xl mb-2 font-extrabold text-white absolute top-[50%] left-[2.5%]'>Delhi</p>
      <div className='absolute top-[74%] left-[2.5%] flex gap-3'>
        <div className='text-white bg-green-500 px-5 py-0.5 rounded-xl'>
            7 Days
        </div>
        <div className='text-white bg-green-500 px-5 py-0.5 rounded-xl'>
            3 Person
        </div>
      </div>
    </div>
  )
}

export default Profile
