import React from 'react';

const RestaurantCard = (props) => {
  const {restaurant} = props;

  return (
    <div className="card mb-4 shadow-sm" style={{ height:'22rem' }} >
      <img 
      alt={""}
      width="100%" 
      height="225" 
      src={restaurant.image} 
      />
      <div className="card-body">
        <h5 className="card-text text-center">{restaurant.name}</h5>
        <div className="d-flex flex-column justify-content-between align-items-center">
        {restaurant.tags.map((tag, i) => <small key={i} className="text-muted">{tag}<br/></small>)}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;
