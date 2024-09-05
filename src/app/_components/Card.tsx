import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCar } from "react-icons/fa6"

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

interface Daylistdata {
    DayData: ItineraryDay;
    color:string,
    
}

const Card = ({ DayData,color}:Daylistdata) => {
  console.log(DayData)
  const [travelTimes, setTravelTimes] = useState({});
  const[loader,setLoader] = useState(false)
  let day = 1;
  const handleClick = (latitude:number,longitude:number) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    // window.open(googleMapsUrl, '_blank');
  };
  const colors = ["#e879f9", "#fb923c", "#84cc16", "brown", "#9400D3", "#1E90FF", "#FFD700", "#708090"];

//   useEffect(() => {
//     const ORS_API_KEY = '5b3ce3597851110001cf6248e186aea9949c4c15b20df6ae702ccc56';

    // const fetchTravelTime = async (start, end, mode) => {
    //   try {
    //     setLoader(true)
    //     const response = await axios.get(`https://api.openrouteservice.org/v2/directions/${mode}`, {
    //       params: {
    //         api_key: ORS_API_KEY,
    //         start: `${start.lng},${start.lat}`, // Correct format for start coordinates
    //         end: `${end.lng},${end.lat}` // Correct format for end coordinates
    //       }
    //     });
    //     const route = response.data.features[0].properties.summary.duration;
    //     console.log(route)
    //     const travelTime = route / 60;
    //     setLoader(false)
    //     return travelTime.toFixed();
    //   } catch (error) {
    //     console.error(`Error fetching ${mode} route:`, error);
    //     return 'Error';
    //   }
    // };

    // const fetchTravelTimes = async () => {
    //   const times = {};

      // Fetch travel times for start to each waypoint
    //   for (let i = 0; i < data.waypoints.length; i++) {
    //     const waypoint = data.waypoints[i];
    //     const mode = 'driving-car'; // You can adjust the mode as needed
    //     const time = await fetchTravelTime(data.start, waypoint, mode);
    //     times[`waypoint${i}`] = time;
    //   }

      // Fetch travel time from last waypoint to end
    //   const lastWaypoint = data.waypoints[data.waypoints.length - 1];
    //   const endMode = 'driving-car'; // Adjust mode as needed
    //   times['end'] = await fetchTravelTime(lastWaypoint, data.end, endMode);

    //   setTravelTimes(times);
    // };

//     fetchTravelTimes();
//   }, [day]);
  let Daycount = 1;
  return (
    <div className='md:px-10 px-5 mt-2 text-xl'>
        {
            DayData.places.map((day)=>(
                <>
              
              <div className='flex bg-slate-100 p-3 md:text-lg text-base rounded-lg'>
                <div className='w-[20%] flex h-full  items-center'>
                <div className="marker-pin flex h-[32px] w-[32px] rotate-[-45deg] cursor-pointer items-center justify-center rounded-full !rounded-bl-none border-4 border-solid border-white p-1 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.43)]" style={{ backgroundColor: color }}  >
                  <p className="w-[10px] rotate-[45deg] text-base font-bold text-white">{Daycount++}</p>
                </div>
                </div>
                  <div className='w-[80%]'>
                  <h1 className='font-semibold'>{day.name}</h1>
                  <p>{day.details}</p>
                  <div className='flex  items-center mt-2'>
                  <button className='bg-green-500 text-white p-2 my-1 text-sm hidden md:block' onClick={()=>handleClick(day.geo_coordinates[0],day.geo_coordinates[1])}>Show On Google Maps</button>
                  </div>
                </div>
                </div>
                <div className='border-l-2 h-10 border-gray-200 ml-8 gap-2 flex items-center'>
              <FaCar className='ml-4' size={20}/>
              {/* <p className='text-lg'>{travelTimes[`waypoint${wpIndex}`]} minutes</p> */}
              </div>
                </>
            ))
        }
    </div> 
  );
};

export default Card;
