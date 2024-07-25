"use client"
import { useParams } from 'next/navigation'
import axios from 'axios'


const page = () => {
  const params = useParams()
  async function onClickHandler(){
   await axios.post("/api/user/verify",{token:params.id})
  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <button onClick={onClickHandler} className='w-56 bg-black text-white rounded-xl py-2 '>Verify</button>
    </div>
  )
}

export default page
