import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // send the login info to the backend
    try {
      const res = await fetch('http://18.217.185.247:7007/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: username,
          password: password
        })
      });
  
      const data = await res.json();
  
      if (res.ok) {
        // login worked
        setIsLoggedIn(true);
        navigate('/profile');
      } else {
        // login didn't work
        alert(data.message || 'Login failed.');
      }
     } catch (err) {
        console.error('Error logging in:', err);
        alert(err.message || 'Something went wrong. Please try again.');
      }
  };

  return (
   <main className="login-main">
      <h2>Log In</h2>

      <form onSubmit={handleSubmit}>
        <input
        name= 'name'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem' }}
        /><br />

        <input
        name= 'password'
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