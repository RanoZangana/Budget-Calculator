import React, { useState } from 'react';
import './App.css';
import './Items';
import Items from './Items';
import SearchForm from './Searchform';
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <h1>Flow</h1>
      <h2>Welcome to Flow! The number one Budgeting App</h2>
        <div className="container1">
          <SearchForm />
          <Items />
        </div>
      <Footer />
    </div>
  );
}

export default App;
