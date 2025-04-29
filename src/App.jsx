import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        gap: '22rem',
        padding: '1.5rem',
        backgroundColor: '#f5f5f5',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
      </nav>

      {/* Main Content */}
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buy" element={<h1>Buy a Home</h1>} />
          <Route path="/sell" element={<h1>Sell Your Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
