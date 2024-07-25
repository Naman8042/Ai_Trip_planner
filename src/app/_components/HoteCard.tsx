import React from 'react'

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

const HoteCard = ({hotel}:HotelOption) => {
  return (
    <div>
      
    </div>
  )
}

export default HoteCard
