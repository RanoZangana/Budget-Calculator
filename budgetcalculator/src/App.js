import React, { useState } from 'react';
import './App.css';
import './Items';
import Items from './Items';
import SearchForm from './Searchform';
import Footer from './Footer'
import ItemForm from './ItemForm';
import Item from './Item'


function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItems = [...items, { item }];
    setItems(newItems);
  }
  return (
    <div className="App">
      <h1>Flow</h1>
      <h2>Welcome to Flow! The number one Budgeting App</h2>
      <div className="container1">
        {/* <ItemForm addItem={addItem} />
        <div>
          {items.map((item, index) => (
            <Item key={index} index={index} item={item} />
          ))}
        </div> */}
        <SearchForm />
        <Items /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
