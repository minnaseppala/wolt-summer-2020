import React, { useState } from 'react';
//import { Blurhash } from "react-blurhash";

import './App.css';
import restaurantData from './restaurants.json';


const App = () => {

  const alphabetical = (a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA > nameB) return 1;
    else return -1;
  }

  const [restaurants, setRestaurants] = useState(restaurantData.restaurants)

  const handleSortAscending = () => {
    setRestaurants([...restaurants.sort(alphabetical)])
  }

  const handleSortDescending = () => {
    setRestaurants([...restaurants.sort(alphabetical).reverse()])
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
          {restaurants &&
          restaurants.map(restaurant =>
          <div key={restaurant.name} className="col-md-4">
            <div className="card mb-4 shadow-sm">
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
          </div>
          )
          }
        </div> 
        
      </div> 
      </div> 
    </>
  );
}

export default App;
