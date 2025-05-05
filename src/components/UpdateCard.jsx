import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateListingForm = ({ onUpdateComplete }) => { //React component with two props, id & onUpdateComplete to notify Listing Form.
  const [formData, setFormData] = useState({ title: '', price: '', bedrooms: '' }); //sets state for formData
  //empty strings for the defaults.
  const { id } = useParams();
    //Side effect that runs on first render and anytime the id prop changes.
  useEffect(() => {
    const fetchListing = async () => { //async function to get data from backend
      const res = await fetch(`http://18.217.185.247:7007/listing/${id}/`); //get request
      const data = await res.json(); //extract useable JS data from the get request.
      setFormData({ //should pre-fill the form, I don't believe this is working atm.
        title: data.title,
        price: data.price,
        bedrooms: data.bedrooms,
      });
    };
    fetchListing();//immediately calls fetch listing
  }, []); //run the above everytime the id prop changes, this should let us display all the cards at once.

  const handleChange = (update) => { //Event handler for form input changes.
    setFormData(prev => ({
      ...prev, //updates the changed field while keeping the others in tact
      [update.target.name]: update.target.value //uses the name attribute to update the correct key in the form data
    }));
  };

  

  const handleSubmit = async (submit) => { //handles submission
    submit.preventDefault(); //prevents page reload.  Necessary for keeping React state?
    console.log('Submitting update:', formData);
    const res = await fetch(`http://18.217.185.247:7007/listing/${id}/`, { //PUT request
      method: 'PATCH',
      headers: { //tells the server how to parse the incoming data
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(formData),
    }); //sends the form data and ends the fetch call

    if (res.ok) { //checks if response was successful
      const updatedListing = await res.json(); //parsing response JSON into variable
      onUpdateComplete(updatedListing); // pass updated listing back to parent
    } else {
      console.error('Update failed'); //Lets me know if the patch didn't works
    }
  };
  //What is displayed on the page.
  return ( 
    <form onSubmit={handleSubmit} className="update-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="number"
        name="bedrooms"
        value={formData.bedrooms}
        onChange={handleChange}
        placeholder="Bedrooms"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UpdateListingForm;
