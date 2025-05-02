import React from 'react'; //import from react

const ListingCard = ({ listing }) => { // functional component with one prop, listing.
  return ( //begins the jsx block.  Looks like HTML, it's actually javascript
  
    <div className="listing-card"> //
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
      </div>
    </div>
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