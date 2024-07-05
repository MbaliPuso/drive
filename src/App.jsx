import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllCars from './pages/AllCars';
import ApplyNow from './pages/ApplyNow';
import CarDetails from './pages/CarDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-cars' element={<AllCars />} />
        <Route path='/apply-now' element={<ApplyNow />} />
        <Route path='/car-details' element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
