import React, { useState } from 'react'; //use state (you’ll use this for tracking the username/password)
import { useNavigate } from 'react-router-dom'; // gives you a way to programmatically navigate to another page

const Login = ({ setIsLoggedIn }) => {//defining the log in component
  const [username, setUsername] = useState(''); //username = current value of the username input
  const [password, setPassword] = useState(''); //setUsername() = function to update it
  const navigate = useNavigate(); //navigate function redirects user back to profile after log in

  const handleSubmit = async (e) => { // runs when user submits form
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
  
      const data = await res.json(); //waits for server response and stores the JSON it returns
  
      if (res.ok) {
        // login worked
        setIsLoggedIn(true);
        navigate('/profile'); //takes you to profile
      } else {
        // login didn't work
        alert(data.message || 'Login failed.'); 
      }
     } catch (err) {
        console.error('Error logging in:', err);
        alert(err.message || 'Something went wrong. Please try again.'); //error message i keep getting but only happens if something crashes
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
        name= 'password' //works the same way as username but hides the typed characters
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

export default Login; //lets you use it in other files