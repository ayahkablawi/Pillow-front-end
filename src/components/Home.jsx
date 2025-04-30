import React from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './listingCard.jsx'

const Home = () => {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Pillow</h1>
      <p>Find your dream home today.</p>
      <ListingCard/>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/login">
          <button style={{ padding: '0.75rem 1.5rem' }}>Log In</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '0.75rem 1.5rem' }}>Sign Up</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
