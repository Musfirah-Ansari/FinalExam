import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaptopList from './components/LaptopList';
import LaptopDetails from './components/LaptopDetails';

function App() {
  return (
    <Router>
      <div className="tagline">
        Explore the Future of Laptops, One Click at a Time!
      </div>
      <Routes>
        <Route path="/" element={<LaptopList />} />
        <Route path="/laptop/:id" element={<LaptopDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
