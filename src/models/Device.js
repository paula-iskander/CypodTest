import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  id: String,
  name: String,
  temperature: String,
  humidity: String,
  status: String,
  lat: Number,
  lng: Number,
  totalPowerConsumption: String,
  monthlyPowerConsumption: {
    jan: String,
    feb: String,
    march: String,
    april: String,
    may: String,
    june: String,
    july: String,
    august: String,
    september: String,
    october: String,
    november: String,
    december: String,
  },
});

export default mongoose.model("Device", deviceSchema);
