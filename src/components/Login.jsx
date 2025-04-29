import React from 'react';

const Login = () => {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Log In</h2>
      <input type="text" placeholder="Username" style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
      <input type="password" placeholder="Password" style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
      <button style={{ padding: '0.5rem 1rem' }}>Submit</button>
    </main>
  );
};

export default Login;