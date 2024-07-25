"use client"
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Card from "./Card";
import Hotel from "./Hotel";

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

interface Daylistdata {
  data: Data;
  selectedDayIndex: number | null;
  setSelectedDayIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Daylist = ({
  data,
  selectedDayIndex,
  setSelectedDayIndex,
}: Daylistdata) => {
  const colors: string[] = [
    "#e879f9",
    "#fb923c",
    "#84cc16",
    "brown",
    "#9400D3",
    "#1E90FF",
    "#FFD700",
    "#708090",
  ];
  let day: number = 1;
  const toggleDay = (index: number) => {
    if (selectedDayIndex === index) {
      setSelectedDayIndex(null); // Deselect if clicked again
    } else {
      setSelectedDayIndex(index); // Select the new day
    }
  };
  return (
    <div className="w-[100%] mt-1">

      <ul>
        {data.itinerary.map((Day, index) => (
          <li
            key={index}
            className="mb-2 border-b-2 border-secondary text-2xl pb-2"
          >
            <div className="flex justify-center items-center">
              <button
                className="py-4 px-2 rounded w-full  text-left text-xl flex items-center outline-none"
                onClick={() => toggleDay(index)}
              >
                {selectedDayIndex === index ? (
                  <FaChevronDown className="mr-3 text-secondary" size={20} />
                ) : (
                  <FaChevronRight className="mr-3 text-secondary" size={20} />
                )}
                <FaLocationDot
                  color={colors[index]}
                  size={15}
                  className="mr-2"
                />
                Day {day++}
              </button>
            </div>
            {selectedDayIndex === index && (
              <>
                <Hotel hotel={data.hotel_options} />  
                <Card DayData={Day} color={colors[index]} />
                <div className="flex justify-center items-center">
                  {/* <button className='md:hidden text-sm rounded-md bg-green-500 text-white py-1 px-2' onClick={()=>setShowOnMap(true)}>Show On Map</button> */}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Daylist;
