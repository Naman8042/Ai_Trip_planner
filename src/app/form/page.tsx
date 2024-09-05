"use client";
import { useState } from 'react';
import Activities from '../_components/Activities';
import Person from '../_components/Person';
import { chatSession } from '../_components/Aimodel';
import { useRouter } from 'next/navigation'
import axios from 'axios';

const Page = () => {
  const router = useRouter()
  const [places, setPlaces] = useState<string>("");  
  const [days, setDays] = useState<number>(0);
  const [activities, setActivities] = useState<string[]>(['Museums', 'Outdoor Events']);  
  const [totalPeople, setTotalPeople] = useState<number>(1);
  const [person, setPerson] = useState<string>('Family');

  async function onSubmit() {
    const text = `generate travel plan for location: ${places}, for ${days} days for ${person} with a cheap budget, give me a hotels options list with hotel name, address, price, hotel image, url, geo coordinates, rating, description and suggest itinerary list with place name, place details, place image url, geo coordinates, ticket pricing, time, travel each of the location for ${days} days with each day plan with best time to visit in JSON Format. I want itinerary should also be in array form`;
    console.log(text);
    
    try {
      const result = await chatSession.sendMessage(text);
      
      
      // Assuming result.response contains the JSON response directly as an object
      const responseData = result.response.text();
      console.log(JSON.parse(responseData))

      await axios.post("/api/data", {data:JSON.parse(responseData)})
      .then((res)=>(router.push(`/map/${res.data.data}`, { scroll: false })))
    } catch (error) {
      console.error("Error creating trip:", error);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col my-1">
      <div className='md:w-[550px] md:bg-white w-[90%]'>
        <h1 className='text-center text-3xl my-16'>Plan Your Next Adventure</h1>
        <h2 className="text-lg my-4">Where do you want to go?</h2>
        <input
          type="text"
          className="w-full p-2 text-sm text-gray-700 border-2 rounded-md"
          placeholder="Select A City"
          value={places}
          onChange={(e) => setPlaces(e.target.value)}
        />
        <h2 className="text-lg my-4">Enter total number of days</h2>
        <input
          type="text"
          className="w-full p-2 text-sm text-gray-700 border-2 rounded-md"
          placeholder="Enter number of days"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        />
       
        <div className='mt-16'>
          <h1 className='text-lg mb-3'>Select the kind of activities you want to do</h1>
          <Activities activities={activities} setActivities={setActivities} />
        </div>
       
        <div className='my-16'>
          <h1 className='text-lg my-4'>How Many People Are Going?</h1>
          <Person totalPeople={totalPeople} setTotalPeople={setTotalPeople} person={person} setPerson={setPerson} />
        </div>
        <div className='flex justify-center items-center my-[2%]'>
          <button className='md:w-40 bg-green-800 text-lg text-white rounded-2xl py-1 px-4 md:px-0' onClick={onSubmit}>Create New Trip</button>
        </div> 
      </div>
    </div>
  );
};

export default Page;
