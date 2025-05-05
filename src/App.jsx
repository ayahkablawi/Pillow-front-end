import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import ListingCard from './components/ListingCard'
import UpdateCard from './components/UpdateCard'
import './App.css';

const listing = () => {
  // Mock data for testing
  const listing = {
    title: "Modern Apartment",
    price: "250000000.00",
    image: "http://localhost:8000/media/listing_images/white_walled/apartment.jpg",
    bedrooms: 2,
    listed_by: "joe_dirt",
  };
}


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
        <Link to="/listing">Buy</Link>
        <Link to="/sell">Sell</Link>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/login">
          <button style={{ padding: '0.75rem 1.5rem' }}>Log In</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '0.75rem 1.5rem' }}>Sign Up</button>
        </Link>
        
      </div>
      </nav>

     
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/buy" element={<h1>Buy a Home</h1>} />
          <Route path="/sell" element={<h1>Sell Your Home</h1>} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listing" element={<ListingCard listing={listing} />} />
          <Route path="/update" element={<UpdateCard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
