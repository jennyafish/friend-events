const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  startTime: Date
  endTime: Date
});

module.exports = mongoose.model("Event", eventSchema)