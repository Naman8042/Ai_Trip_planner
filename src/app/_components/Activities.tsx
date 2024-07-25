import { Dispatch,SetStateAction } from "react";
import { FaChild } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { GiIndianPalace } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { FaParachuteBox } from "react-icons/fa6";

interface activities{
    activities:string[],
    setActivities:Dispatch<SetStateAction<string[]>>
}

const Activities = ({activities,setActivities}:activities) => {
    const handleClick1 = (itemName:string) => {
        if (activities.includes(itemName)) {
          setActivities(activities.filter(item => item !== itemName));
        } else {
          setActivities([...activities, itemName]);
        }
      };
  return (
    <div>
      <div className='flex flex-wrap  gap-1 justify-center'>
          <div
            className={`cursor-pointer flex  justify-center items-center border-2 border-gray text-gray-400 rounded-xl md:px-3 px-5 py-1 gap-1 ${activities.includes('Kid Friendly') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Kid Friendly')}
          >
            <FaChild />
            <h1>Kid Friendly</h1>
          </div>
          <div
            className={`cursor-pointer flex  justify-center items-center border-2 border-gray text-gray-400 rounded-xl md:px-3 px-5 py-1 gap-1 ${activities.includes('Museums') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Museums')}
          >
            <RiBankFill />
            <h1>Museums</h1>
          </div>
          <div
            className={`cursor-pointer flex  justify-center items-center border-2 border-gray text-gray-400 rounded-xl md:px-3 px-5 py-1 gap-1 ${activities.includes('Shopping') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Shopping')}
          >
            <FaShoppingBag />
            <h1>Shopping</h1>
          </div>
          <div
            className={`cursor-pointer flex  justify-center items-center border-2 border-gray text-gray-400 rounded-xl md:px-3 px-5 py-1 gap-1 ${activities.includes('Historical') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Historical')}
          >
            <GiIndianPalace />
            <h1>Historical</h1>
          </div>
          <div
            className={`cursor-pointer flex justify-center items-center border-2 border-gray text-gray-400 rounded-xl md:px-3 px-5 py-1 gap-1 ${activities.includes('Outdoor Events') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Outdoor Events')}
          >
            <FaCloudSun />
            <h1>Outdoor Events</h1>
          </div>
          <div
            className={`cursor-pointer flex justify-center items-center border-2 border-gray text-gray-400 rounded-xl px-2 md:px-3  py-1 gap-1 ${activities.includes('Art & Cultural') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Art & Cultural')}
          >
            <FaPaintBrush />
            <h1>Art & Cultural</h1>
          </div>
          <div
            className={`cursor-pointer flex justify-center items-center border-2 border-gray text-gray-400 rounded-xl px-2 md:px-3  py-1 gap-1 ${activities.includes('Amusement Park') ? 'bg-lime-200 text-gray-800 border-green-500' : ''}`}
            onClick={() => handleClick1('Amusement Park')}
          >
            <FaParachuteBox />
            <h1>Amusement Park</h1>
          </div>
        </div>
    </div>
  )
}

export default Activities
