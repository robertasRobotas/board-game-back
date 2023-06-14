const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  date: { type: String, required: true, min: 3 },
  time: { type: String, required: true, min: 3 },
  author: { type: String, required: true, min: 3 },
  requiredPlayers: { type: Number, required: true },
  address: { type: String, required: true, min: 3 },
  boardgameName: { type: String, required: true, min: 3 },
  boardgameImage: { type: String, required: true, min: 10 },
  joinedPlayers: { type: Array, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
