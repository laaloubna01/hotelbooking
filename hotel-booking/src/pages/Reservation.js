// src/pages/ReservationForm.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './ReservationForm.css';

const ReservationForm = () => {
  const location = useLocation();
  const { hotel } = location.state || {};

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return (
    <div className="reservation-form-container">
      <h1>Reservation for {hotel.name}</h1>
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <form className="reservation-form">
        <label>
          Start Date:
          <input type="date" name="start-date" required />
        </label>
        <label>
          End Date:
          <input type="date" name="end-date" required />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" min="1" required />
        </label>
        <label>
          Number of Nights:
          <input type="number" name="nights" min="1" required />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;



