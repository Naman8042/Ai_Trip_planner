import Image from 'next/image'
import Delhi from '@/assets/P1.jpeg'
import Mumbai from '@/assets/Mumbai.jpg'
import Agra from '@/assets/agra.jpeg'
import Kashmir from '@/assets/kashmir.jpeg'

const Populardestination = () => {
  return (
    <div className='mb-20'>
       <p className='pl-20'>WHERE TO GO</p>
       <p className='text-4xl font-bold pl-20'>Popular Destination</p> 
      <div className='flex justify-between px-20 my-5 '>
      <div className='relative flex '>
        <Image src={Delhi} alt='' width={270}  className='brightness-50 h-96 rounded-xl hover:brightness-100  '/>
        <div className='absolute bottom-8   flex flex-col items-center justify-center w-full '>
        <h1 className='text-white text-lg font-bold'>Delhi </h1>
        <h1 className='text-white'>India</h1>
        </div>
      </div>
      <div className='relative'>
        <Image src={Agra} alt='' width={270}  className='h-96 rounded-xl brightness-50 hover:brightness-100'/>
        <div className='absolute bottom-8   flex flex-col items-center justify-center w-full '>
        <h1 className='text-white text-lg font-bold'>Agra</h1>
        <h1 className='text-white'>India</h1>
        </div>
      </div>
      <div className='relative'>
        <Image src={Mumbai} alt='' width={270}  className='h-96 rounded-xl brightness-50 hover:brightness-100'/>
        <div className='absolute bottom-8   flex flex-col items-center justify-center w-full '>
        <h1 className='text-white text-lg font-bold'>Mumbai</h1>
        <h1 className='text-white'>India</h1>
        </div>
      </div>
      <div className='relative'>
        <Image src={Kashmir} alt=''  width={270} className='h-96 rounded-xl brightness-50 hover:brightness-100'/>
        <div className='absolute bottom-8   flex flex-col items-center justify-center w-full '>
        <h1 className='text-white text-lg font-extrabold'>Kashmir</h1>
        <h1 className='text-white'>India</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Populardestination
