import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <nav style={{
        display: 'flex',
        gap: '2rem',
        padding: '1.5rem',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/profile">Profile</Link>}
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
      </nav>

      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/buy" element={<h1>Buy a Home</h1>} />
          <Route path="/sell" element={<h1>Sell Your Home</h1>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
