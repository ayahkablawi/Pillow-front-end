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
        gap: '12rem',
        alignItems: 'flex-end',
        padding: '2rem 4rem', 
        backgroundColor: '#E6F4F1',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        fontSize: '1.5rem',
      }}>
        <img src="/logo.png" alt="Logo" style={{ height: '70px' }} />
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/profile">Profile</Link>}
        <Link to="/buy">Buy</Link>
        <Link to="/sell">Sell</Link>
      </nav>

      <div style={{ marginTop: '100px'}}>
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
