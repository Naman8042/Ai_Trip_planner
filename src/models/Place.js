import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: String,
  details: String,
  image_url: String,
  geo_coordinates: [Number],
  ticket_pricing: String,
  time: String,
});

export default mongoose.models.Place || mongoose.model('Place', placeSchema);
