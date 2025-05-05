import React, { useState, useEffect } from 'react'; //import from react
import { useNavigate } from 'react-router-dom';

const ListingCard = (props) => { // functional component with one prop, listing.
  const [listings, setListings] = useState([]);
  const [favoritedMap, setFavoritedMap] = useState({});
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    setFavoritedMap(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getListings = async () => {
    try {
      const res = await fetch('http://18.217.185.247:7007/listing/')
      const JSONdata = await res.json()
      console.log(JSONdata)
      setListings(JSONdata)
    } catch {
      console.error('failed to fetch listings:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://18.217.185.247:7007/listing/${id}/`, {
        method: 'DELETE',
      });
      if (res.ok) {
        // Remove deleted listing from state
        setListings(prev => prev.filter(listing => listing.id !== id));
        console.log(`Deleted listing with id: ${id}`);
      } else {
        console.error(`Failed to delete listing with id ${id}`);
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleUpdate = (cardId) => {
    navigate('/update', {id:cardId});
  };

  useEffect(() => {
    getListings();
  }, []);


  return ( //begins the jsx block.  Looks like HTML, it's actually javascript      
    <>
      {listings.map((listing, index) => (
        <div className="listing-card" key={listing.id}>
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

          <div className='listing-actions'>
            <button
              onClick={() => toggleFavorite(listing.id)}
              className={`favorite-button ${favoritedMap[listing.id] ? 'favorited' : ''}`}
            >
              {favoritedMap[listing.id] ? '❤️ Favorited' : '🤍 Favorite'}
            </button>

            <button onClick={() => handleUpdate(listing.id)} className="update-button">
              ✏️ Update
            </button>

            <button onClick={() => handleDelete(listing.id)} className="delete-button">
              🗑️ Delete
            </button>
          </div>  

          </div>
        </div>
      ))}
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