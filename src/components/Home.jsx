// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Pillow</h1>
      <p>Find your dream home today.</p>

      {/* Buttons */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#4CAF50', color: 'white' }}>
          Log In
        </button>
        <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '8px', border: 'none', backgroundColor: '#2196F3', color: 'white' }}>
          Sign Up
        </button>
      </div>
    </main>
  );
};

export default Home;
