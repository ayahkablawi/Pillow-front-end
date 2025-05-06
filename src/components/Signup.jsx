import React from 'react';

const Signup = () => {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}> 
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
      <input type="email" placeholder="Email" style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
      <input type="password" placeholder="Password" style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
      <button style={{ padding: '0.5rem 1rem' }}>Register</button>
    </main>
  );
};
export default Signup; //akes the component available for use in the app (like in a route or navbar)
//overall needs a handlesubmit() function like the login form