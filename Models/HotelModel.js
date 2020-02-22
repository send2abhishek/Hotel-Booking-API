const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema;

const userHotelSchema = new HotelSchema({
  _id: mongoose.Schema.Types.ObjectId,
  regId: { type: Number, required: true },
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Location: { type: String, required: true },
  Price: { type: Number, required: true },
  Aminity: { type: String, required: true },
  status: { type: Boolean }
});

module.exports = mongoose.model("Hotel", userHotelSchema);
