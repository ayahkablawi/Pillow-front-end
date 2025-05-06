import {React, useState} from 'react'; // Brings in React so you can use JSX. useState is a hook that lets you create a piece of state 

const Profile = () => {
  const [showFavs, setShowFavs] = useState(false);

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Your Profile</h1>
      <h2>Your saved listings!</h2>
      <p>Member since: April 2025</p>

      <button onClick={() => setShowFavs(!showFavs)} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        {showFavs ? 'Hide Favorites' : 'Show Favorites'}
      </button>

      {showFavs && ( //This section only renders if showFavs is true
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          maxWidth: '400px',
          marginInline: 'auto',
        }}>
          <h3>Favorites</h3> 
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>🏠 Modern Loft in NYC</li>
            <li>🌲 Cozy Cabin in Washington</li>
            <li>🏖️ Beach House in Miami</li>
          </ul>
        </div>
      )}
    </main>
  );
};

export default Profile; //Makes this component available to use in routes (like in App.jsx)