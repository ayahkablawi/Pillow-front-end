import { React, useState } from 'react';

const Sell = () => {
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
        <>
            <h1>Sell Your Home</h1> 
            <h3>Create listing:</h3>
            <form onSubmit={handleSubmit}>
                <label for="title">Listing Title: </label>
                <input type='text' name="title" value={newListing.title} onChange={handleChange}></input>
                <label for="price">Price: </label>
                <input type='text' name="price" value={newListing.price} onChange={handleChange}></input>
                {/* <label for="image">Image Link(Optional): </label> input type='text' name="image" onChange={handleChange}></input> */}
                <label for="bedrooms">Bedrooms: </label>
                <input type='text' name="bedrooms" value={newListing.bedrooms} onChange={handleChange}></input>
                <button type='submit'>Submit Listing</button>
            </form>
        </>
    )
}

export default Sell;