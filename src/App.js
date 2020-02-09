import React, { useState } from 'react';

import './App.css';
import restaurantData from './restaurants.json';
import alphabeticalCompare from './common/utils'
import RestaurantCard from './components/RestaurantCard'

const App = () => {
  const [restaurants, setRestaurants] = useState(restaurantData.restaurants)

  const handleSortAscending = () => {
    setRestaurants([...restaurants.sort(alphabeticalCompare)])
  }

  const handleSortDescending = () => {
    setRestaurants([...restaurants.sort(alphabeticalCompare).reverse()])
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sort
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={() => handleSortAscending()}>By Name (ascending)</button>
              <button className="dropdown-item" type="button" onClick={() => handleSortDescending()}>By Name (descending)</button>
            </div>
          </div>
        </header>
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {restaurants
          && restaurants.map((restaurant) => (
            <div key={restaurant.name} className="col-md-4">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
