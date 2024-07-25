"use client"
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
}
const createNumberedIcon = (stop: number, color: string) => {
  return L.divIcon({
    html: `<div className="marker-pin flex h-[32px] w-[32px] rotate-[-45deg] cursor-pointer items-center justify-center rounded-full !rounded-bl-none border-4 border-solid border-white p-1 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.43)]" style="background-color: ${color}; opacity: 1;">
              <p className="w-[10px] rotate-[45deg] text-base font-bold text-white">${stop}</p>
            </div>`,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};


const Map = ({ data, selectedDayIndex }: Daylistdata) => {
  const [allMarkers, setAllMarkers] = useState<{ place: Place, dayIndex: number, placeIndex: number }[]>([]);

  useEffect(() => {
    
      let markers: { place: Place, dayIndex: number, placeIndex: number }[] = [];
      data.itinerary.forEach((day, dayIndex) => {
        day.places.forEach((place, placeIndex) => {
          markers.push({ place, dayIndex, placeIndex });
        });
      });
      setAllMarkers(markers);
    
  }, [data]);

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

  const markersToShow = selectedDayIndex === null ? allMarkers : data.itinerary[selectedDayIndex].places.map((place, placeIndex) => ({ place, dayIndex: selectedDayIndex, placeIndex }));

  const selectedDayPolyline = selectedDayIndex !== null ? data.itinerary[selectedDayIndex].places.map(place => place.geo_coordinates) : [];

  return (
    <MapContainer center={[28.6448, 77.2090]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markersToShow.map(({ place, dayIndex, placeIndex }) => (
        <Marker
          key={`${dayIndex}-${placeIndex}`}
          position={place.geo_coordinates}
          icon={createNumberedIcon(placeIndex + 1, colors[dayIndex % colors.length])}
        >
          <Popup>
            <div>
              <h3>{place.name}</h3>
              <p>{place.details}</p>
              <p>{place.ticket_pricing}</p>
              <img src={place.image_url} alt={place.name} style={{ width: '100%', height: 'auto' }} />
            </div>
          </Popup>
        </Marker>
      ))}
      {/* {selectedDayPolyline.length > 1 && (
        <Polyline 
          positions={selectedDayPolyline.map(coord => [coord[0], coord[1]])} 
          color="blue"
          />
      )} */}
    </MapContainer>
    // <></>
  );
};

export default Map;
