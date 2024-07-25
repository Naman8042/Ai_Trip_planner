import mongoose from 'mongoose';
import Place from './Place';

const itinerarySchema = new mongoose.Schema({
  day: String,
  title: String,
  description: String,
  places: [Place.schema],
});

export default mongoose.models.Itinerary || mongoose.model('Itinerary', itinerarySchema);