"use client"
import React, { useState, useEffect } from 'react';
import DayList from '../../_components/Daylist';
import Map from '../../_components/Map';
import Profile from '../../_components/Profile';
import { useParams } from 'next/navigation'
import axios from 'axios';

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

interface Place {
  name: string;
  details: string;
  image_url: string;
  geo_coordinates: [number, number];
  ticket_pricing: string;
  time: string;
}

interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  places: Place[];
}

interface Data {
  hotel_options: HotelOption[];
  itinerary: ItineraryDay[];
}


const Page: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<null | number>(null);
  const params = useParams<{ id: string}>()
  const [data, setData] = useState<Data>({
    hotel_options: [],
    itinerary: []
  });

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.post("/api/getData", { id: params.id });
        setData(res.data.findData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div className='flex w-full h-screen overflow-hidden top-15 fixed'>
      <div className='w-1/2 h-[90%] overflow-y-auto'>
        <Profile />
        <DayList data={data} selectedDayIndex={selectedDayIndex} setSelectedDayIndex={setSelectedDayIndex} />
      </div>

      <div className='w-1/2 h-[92%] overflow-hidden'>
        <Map data={data} selectedDayIndex={selectedDayIndex} />
      </div>
    </div>
  );
};

export default Page;
