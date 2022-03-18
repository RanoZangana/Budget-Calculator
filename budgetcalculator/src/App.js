import React, { useState } from 'react';
import './App.css';
import './Items';
import Items from './Items';
import SearchForm from './Searchform';
import Grid from './Grid'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <h1>Flow</h1>
      <h2>Welcome to Flow! The number one Budgeting App</h2>
      <Grid />
      <SearchForm />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
