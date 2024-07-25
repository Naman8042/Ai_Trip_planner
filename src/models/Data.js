import mongoose from 'mongoose';
import HotelOption from './hotelOption';
import Itinerary from './Itinary';

const dataSchema = new mongoose.Schema({
  hotel_options: [HotelOption.schema],
  itinerary: [Itinerary.schema],
});

export default mongoose.models.Data || mongoose.model('Data', dataSchema);