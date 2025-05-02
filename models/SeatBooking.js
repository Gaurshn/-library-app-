const mongoose = require("mongoose");

const seatBookingSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  bookingDate: { type: Date, required: true },
  timeSlot: {
    type: String,
    enum: ["7:00-11:00", "11:00-15:00", "15:00-19:00", "19:00-23:00"],
    required: true,
  },
  seatNumber: { type: Number, required: true },
});

const SeatBooking = mongoose.model("SeatBooking", seatBookingSchema);
module.exports = SeatBooking;
