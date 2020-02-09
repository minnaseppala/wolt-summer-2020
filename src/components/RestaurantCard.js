import React, { useState } from 'react';
import { Blurhash, BlurhashCanvas } from "react-blurhash";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const [isLoading, setIsLoading] = useState(0)

  const handleLoad = () => {
    console.log("image loaded")
    const newvalue = isLoading +1
    setIsLoading(newvalue)
    console.log(isLoading)
  }

  return (
    <div className="card mb-4 shadow-sm" style={{ height: '22rem' }}>
      <img
        alt=""
        width="100%"
        height="225"
        src={restaurant.image}
        className="card-image"
        onLoad={handleLoad}
      />
      <div className="card-body">
        <h5 className="card-text text-center">{restaurant.name}</h5>
        <div className="d-flex flex-column justify-content-between align-items-center tags">
          {restaurant.tags.map((tag, i) => (
            <small key={i} className="text-muted">
              {tag}
              <br />
            </small>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard;
