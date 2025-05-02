import React, { useState, useEffect } from 'react'; //import from react

const ListingCard = (props) => { // functional component with one prop, listing.

  const [isFavorited, setIsFavorited] = useState(false); //track if it's favorited
  const [listings, setListings] = useState([]);
  //Toggle the state
  const toggleFavorite = () => {
    setIsFavorited(prev => !prev);
  };

  //useEffect = 'on page load' in useEffect we define the function
  useEffect(() => {

    const getListings = async () => {
      try {
        const res = await fetch('http://18.217.185.247:7007/listing/')
        const JSONdata = await res.json()
        console.log(JSONdata)
        setListings(JSONdata)
      } catch {
        console.log('error')
      }
    }
    getListings();
  }, []);


  return ( //begins the jsx block.  Looks like HTML, it's actually javascript      
    <>
      {listings.map((listing, index) => (
        <div className="listing-card" key={index}>
          {listing.image && ( //conditional rendering statement.  If there's no image it won't be mad.
            <img
              src={listing.image} //sets the image url
              alt={listing.title} //provides accessible text description if it fails to load.
              className="listing-image" // class for css.
            />
          )}

          {/* creates a div to hold text. */}
          <div className="listing-details">
            <h2 className="listing-title">{listing.title}</h2>
            <p className="listing-price"> {Number(listing.price).toLocaleString()}</p>
            {/* ^ converts price to a number in case it was stored as a string */}
            <p className="listing-bedrooms"> {listing.bedrooms} bedrooms</p>
            <p className="listing-by">Listed by: {listing.listed_by}</p>
            <button
              onClick={toggleFavorite}
              className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
            />
            {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
            {/* TIL Windows + . opens the emoji panel. */}
          </div>
        </div>
      ))
      }
    </>
  );
};

export default ListingCard;

// Should return JSON like this.
//{
//   "id": 1,
//   "title": "Modern Apartment",
//   "price": "250000000.00",
//  "image": "http://localhost:8000/media/listing_images/white_walled/apartment.jpg",
//  "bedrooms": 2,
//   "listed_by": "joe_dirt"
//  }