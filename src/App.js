import React from 'react';
import { useState } from 'react';
import Tours from './Components/Tours';
import data from "./data"


function App() {
  const [tours,setTours] = useState(data)
  function removeTourHandler(id){
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
}
  return (
    <div>
      <Tours tours = {tours} removeTour = {removeTourHandler} ></Tours>
    </div>
  );
}

export default App;
