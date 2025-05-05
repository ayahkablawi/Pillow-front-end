import { React, useState } from 'react';

const Sell = () => {
    return (
        <>
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