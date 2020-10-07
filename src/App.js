import React from "react";
import "./App.css";
import Dinner from "./dinner.js";

function App() {
  return (
    <div className='App'>
      <Dinner dishName='Nihaari' sweetDish='Kheer' />
      <Dinner dishName='Biryani' sweetDish='Ras Malai' />
      <Dinner dishName='Qourma' sweetDish='Gajar ka halwa' />
    </div>
  );
}

export default App;
