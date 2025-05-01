import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
     // fake login check
     if (username && password) {
      setIsLoggedIn(true); // tell the app we're logged in
      navigate('/profile'); // go to profile page
    } else {
      alert('Try again');
    }
  };

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem' }}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem' }}
        /><br />

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;