import React from 'react'
import Navbar from '../Molecules/Navbar'
import BreastCancer from '../Organisms/BreastCancer'
import HeartDisease from '../Organisms/HeartDisease'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Organisms/Home';

function FinalPage() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/hd" element={ <HeartDisease/> } />
         <Route path="/bc" element={ <BreastCancer/> } />
      </Routes>
    </Router>
  );
}

export default FinalPage