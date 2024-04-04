const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  busName:  {
    type: String,
    default: "GSRTC",
  },
  ticketNo:  {
    type: Number,
    default: "",
  },
  mobileNumber:  {
    type: Number,
    default: "",
  },
  seat:  {
    type: Number,
    default:"",
  },
  status: {
    type: String,
    default: "open",
  },
});

const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = Ticket;
