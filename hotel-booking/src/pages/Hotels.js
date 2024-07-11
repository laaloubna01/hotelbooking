// src/pages/Hotels.js
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import hotel11 from '../images/hotel11.jpg';
import hotel12 from '../images/hotel12.jpg';
import hotel13 from '../images/hotel13.jpg';
import '../pages/Hotels.css'; // Assurez-vous d'importer le fichier CSS
import Reservation from './Reservation';  

const hotels = [
  {
    id: 1,
    name: 'Hotel Luxe',
    location: 'Paris, France',
    price: 200,
    stars: 5,
    description: 'Un hôtel de luxe au cœur de Paris.',
    image: hotel11,
  },
  {
    id: 2,
    name: 'Beach Resort',
    location: 'Nice, France',
    price: 150,
    stars: 4,
    description: 'Un resort sur la plage avec toutes les commodités.',
    image: hotel12,
  },
  {
    id: 3,
    name: 'Mountain Retreat',
    location: 'Chamonix, France',
    price: 180,
    stars: 5,
    description: 'Un hôtel de montagne avec une vue imprenable.',
    image: hotel13,
  },
];

const Hotels = () => {
  const navigate = useNavigate();

  const handleHotelClick = (id) => {
    navigate(`/reservation/${id}`);
  };

  return (
    <div className="hotels-container">
      
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="hotel-card"
          onClick={() => handleHotelClick(hotel.id)}
        >
          <img src={hotel.image} alt={hotel.name} />
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>${hotel.price} per night</p>
            <p className="hotel-stars">
              {Array(hotel.stars)
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </p>
            <p>{hotel.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
*/

// src/pages/Hotels.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hotel11 from '../images/hotel11.jpg';
import hotel12 from '../images/hotel12.jpg';
import hotel13 from '../images/hotel13.jpg';
import './Hotels.css';

const hotels = [
  {
    id: 1,
    name: 'Hotel Mamounia',
    location: 'Marrakech, Maroc',
    price: 200,
    stars: 5,
    description: 'Un hôtel de luxe au cœur de Marrakech.',
    image: hotel11,
  },
  {
    id: 2,
    name: 'Hotel Royal Mansour',
    location: 'Marrakech, Maroc',
    price: 150,
    stars: 4,
    description: 'Ce palais au cœur de Marrakech offre aux voyageurs une expérience unique.',
    image: hotel12,
  },
  {
    id: 3,
    name: 'Hotel Hilton',
    location: 'Tanger, Maroc',
    price: 180,
    stars: 5,
    description: 'Un hôtel de montagne avec une vue imprenable.',
    image: hotel13,
  },
];

const Hotels = () => {
  const navigate = useNavigate();

  const handleHotelClick = (hotel) => {
    navigate(`/reservation/${hotel.id}`, { state: { hotel } });
  };

  return (
    <div className="hotels-container">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="hotel-card"
          onClick={() => handleHotelClick(hotel)}
        >
          <img src={hotel.image} alt={hotel.name} />
          <h2>{hotel.name}</h2>
          <p>Location: {hotel.location}</p>
          <p>Price: ${hotel.price} per night</p>
          <p>
            {Array(hotel.stars)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </p>
          <p>{hotel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
