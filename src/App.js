import React from 'react';
import {useState} from 'react';
import Tours from './Components/Tours';
import data from "./data"


const App = () => {
  const [tours,setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
}
if(tours.length === 0){
  return (
    <div className='empty-tour-div'> 
      <h2> No Tours Left</h2>
      <button onClick={()=>setTours(data)} className='refersh-btn'> Refresh</button>
    </div>
  );
}
  return (
    <div> 
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
}

export default App;
