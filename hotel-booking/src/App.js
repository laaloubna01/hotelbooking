// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Navbar from './componant/Navbar';
import ReservationForm from './pages/ReservationForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reservation/:id" element={<ReservationForm />} />
      </Routes>
    </Router>
  );
};

export default App;




