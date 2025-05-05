import {React, useState} from 'react';

const Home = () => {

  const [newListing, setListingForm] = useState({ // new review form state variable
    title: '',
    price: '', 
    // image: '', 
    bedrooms: ''})

const handleChange = (evt) => { // handles the form submission values that the user is inputting
    evt.preventDefault()
    setListingForm({ ...newListing, [evt.target.name]: evt.target.value})
    console.log(newListing)
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const res = await fetch('http://localhost:8000/listing/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: newListing.title,
          price: parseInt(newListing.price),
          // image: newListing.image,
          bedrooms: parseInt(newListing.bedrooms),
        })
      })

      setListingForm({title: '', price: '', bedrooms: ''})
    } catch(err){
      console.log(err)
    }
    }
  
   
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Pillow</h1>
      <p>Find your dream home today.</p>

    </main>
  );
};

export default Home;
