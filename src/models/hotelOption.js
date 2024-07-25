import mongoose from 'mongoose';

const hotelOptionSchema = new mongoose.Schema({
  name: String,
  address: String,
  price: String,
  image_url: String,
  url: String,
  geo_coordinates: [Number],
  rating: Number,
  description: String,
});

export default mongoose.models.HotelOption || mongoose.model('HotelOption', hotelOptionSchema);
