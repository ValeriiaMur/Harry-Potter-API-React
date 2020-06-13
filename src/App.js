import React, { useState } from 'react';
import './App.css';
import List from "./components/List"
import Search from "./components/Search"

const App = () => {
  


  return (
    <div className="App">
      <h1 className="Header">The Magic world of</h1>
      <div className = "Title">
        <img className = "HP" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png"}></img>
      </div>
      <List/>
    </div>
  );
}

export default App;
