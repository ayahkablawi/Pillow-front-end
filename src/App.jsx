// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '5rem', padding: '2rem', backgroundColor: '#f5f5f5', width: '100%', position: 'fixed', top: 0, left: 0, }}>

        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy" element={<h1>Buy a Home</h1>} />
        <Route path="/sell" element={<h1>Sell Your Home</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

