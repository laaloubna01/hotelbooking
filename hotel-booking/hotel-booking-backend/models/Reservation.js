// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  hotelId: String,
  startDate: Date,
  endDate: Date,
  guests: Number,
  nights: Number,
  email: String,
  creditCard: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
