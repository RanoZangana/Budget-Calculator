import React, { useState } from 'react';
import './App.css';
import './Items';
import Items from './Items';
import SearchForm from './Searchform';
import Footer from './Footer'

function Item({ item, index }) {

  return (
    <div className='Item'>
      {item.item.currency}  {item.item.category}  {item.item.date}
    </div>
  );
}

function ItemForm({ addItem }) {
  const [money, setMoney] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { currency: money, category: category, date: date }
    console.log(newItem);
    addItem(newItem);
  }
  return (
    <div className="SearchForm">
      <form id='form' onSubmit={handleSubmit}>
        <input
          id='amount-input'
          type="number"
          onChange={(e) => setMoney(e.target.value)}
          step="any"
          required
        ></input>
        <select
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" >Choose Category</option>
          <option value="entertainment">Entertainment</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="food">Food</option>
          <option value="insurance">Insurance</option>
          <option value="healthcare">Healthcare</option>
          <option value="savings">Savings</option>
          <option value="utilities">Utilities</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <input
          id='date'
          type="date"
          required
          min="1000-01-01"
          max="9999-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button>onSubmit</button>
        {/* {!isPending && <button id='add-button'>+</button>}
        {isPending && <button id='add-button'>+...</button>} */}

      </form>
    </div>
  );

}
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
        <ItemForm addItem={addItem} />
        <div>
          {items.map((item, index)=> (
            <Item key={index} index={index} item={item}/>
          ))}
        </div>
        {/* <SearchForm />
        <Items /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
