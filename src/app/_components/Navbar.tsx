import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-2 shadow-sm absolute top-0 w-screen'>
      <p className='font-bold text-2xl'>Logoipsum</p>
      <button className='px-3 py-2 rounded-md bg-black text-white'>Sign In</button>
    </div>
  )
}

export default Navbar
