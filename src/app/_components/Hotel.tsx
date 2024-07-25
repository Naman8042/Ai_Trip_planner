import React, { useState } from "react";
import HotelImage from '../../assets/Hotel.jpeg'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";

interface HotelOption {
  name: string;
  address: string;
  price: string;
  image_url: string;
  url: string;
  geo_coordinates: [number, number];
  rating: number;
  description: string;
}
interface Data {
  hotel: HotelOption[];
}

const Hotel = ({ hotel }: Data) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleHotelsCount = 3;

  const handleLeftClick = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleRightClick = () => {
    setStartIndex((prevIndex) =>
      prevIndex < hotel.length - visibleHotelsCount ? prevIndex + 1 : prevIndex
    );
  };

  const visibleHotels = hotel.slice(
    startIndex,
    startIndex + visibleHotelsCount
  );

  return (
    <div className="mb-5">
  <div className="flex justify-end px-5 gap-2 mb-2">
  <FaArrowCircleLeft size={30} onClick={handleLeftClick} color="gray"/>
  <FaArrowCircleRight size={30} onClick={handleRightClick} color="gray"/>
  </div>
  <div className='grid grid-cols-3 px-5 justify-items-center  w-full '>
      {
        visibleHotels.map((hotels)=>(
            <div className='w-[90%] rounded-xl border-2'>
            <div className='flex justify-center items-center mb-2'>
              <Image src={HotelImage} alt=''className='w-full h-40 rounded-t-xl'  /> 
            </div>
            <p className='px-1 text-base'>{hotels.name.slice(0,20)}</p>
            <p className='text-sm p-1'>{hotels.address.slice(0,40)}...</p>
            <p className='px-1 font-semibold text-base'>{hotels.price}</p>
            </div>
        ))
      }
    </div>

  </div>
  )
  
};

export default Hotel;
