import React, { useState } from 'react';
import './App.css';
import Items from './Items';
import CurrencyInput from 'react-currency-input-field';

function SearchForm() {

  const [currency, setCurrency] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  return (
    <div className="SearchForm">
      <form>
        <CurrencyInput
          id='price'
          placeholder='Enter a certain amount'
          required
          decimalsLimit={2}
          defaultValue={0}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled selected>Choose Category</option>
          <option value="housing">Housing</option>
          <option value="utilities">Utilities</option>
          <option value="insurance">Insurance</option>
          <option value="healthcare">Healthcare</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="savings">Savings</option>
          <option value="miscellanous">Miscellanous</option>
          
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
        <button onClick={submitInput} >Add</button>
      </form>
      <Items />
    </div>
  );
}
const submitInput = event => {
  event.preventDefault();
  alert('hello');
}

export default SearchForm;