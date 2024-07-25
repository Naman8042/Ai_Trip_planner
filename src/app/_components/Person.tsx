import React,{Dispatch,SetStateAction} from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import { TbFriends } from "react-icons/tb";
import { MdFamilyRestroom } from "react-icons/md";

interface Person{
    totalPeople: number
    setTotalPeople: Dispatch<SetStateAction<number>>
    person: string
    setPerson: Dispatch<SetStateAction<string>>
}

const Person = ({totalPeople,setTotalPeople,person,setPerson}:Person) => {
    
    const handleClick2 = (itemName:string) => {
        if (person!==itemName) {
          setPerson(itemName);
        } 
      };
  return (
    <div>
      <div className='flex justify-between rounded-xl  border-2 px-4 py-2'>
          <div className='flex gap-2 justify-center items-center'>
            <div className='w-10 h-7 border-2 text-center rounded-lg bg-lime-200 border-green-500'>{totalPeople}</div>
            <h1>Person</h1>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <button className='w-12 h-7 border-2 rounded-lg flex items-center justify-center' onClick={() => setTotalPeople(totalPeople + 1)}><FaPlus size={10} className='text-gray-400 font-bold' /></button>
            <button className='w-12 h-7 border-2 flex items-center justify-center rounded-lg' onClick={() => setTotalPeople(totalPeople - 1)}><FaMinus size={10} className='text-gray-400 font-bold' /></button>
          </div>
        </div>

        {totalPeople > 1 && (
          <div className='mb-16'>
            <h1 className='text-lg mb-2'>Who is traveling with you?</h1>
            {totalPeople === 2 &&
              <div className='flex justify-between gap-2 my-[2%]'>
                <div className={`cursor-pointer w-1/3 flex justify-center items-center gap-1 border-2 border-gray text-gray-400 rounded-lg px-3 py-[1.5%] ${person.includes('Couple') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`} onClick={() => handleClick2('Couple')}><FaHeart />Couple</div>
                <div className={`cursor-pointer w-1/3 flex justify-center items-center gap-1 border-2 border-gray text-gray-400 rounded-lg px-3 py-[1.5%] ${person.includes('Friends') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`} onClick={() => handleClick2('Friends')}><TbFriends /><h1>Friends</h1></div>
                <div className={`cursor-pointer w-1/3 flex justify-center items-center gap-1 border-2 border-gray text-gray-400 rounded-lg px-3 py-[1.5%] ${person.includes('Family') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`} onClick={() => handleClick2('Family')}><MdFamilyRestroom />Family</div>
              </div>
            }
            {totalPeople > 2 &&
              <div className='flex justify-between gap-1 my-[2%]'>
                <div className={`cursor-pointer w-1/2 flex justify-center items-center gap-1 border-2 border-gray text-gray-400 rounded-lg px-3 py-[1.5%] ${person.includes('Friends') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`} onClick={() => handleClick2('Friends')}><TbFriends /><h1>Friends</h1></div>
                <div className={`cursor-pointer w-1/2 flex justify-center items-center gap-1 border-2 border-gray text-gray-400 rounded-lg px-3 py-[1.5%] ${person.includes('Family') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`} onClick={() => handleClick2('Family')}><MdFamilyRestroom />Family</div>
              </div>
            }
          </div>
        )}
    </div>
  )
}

export default Person
