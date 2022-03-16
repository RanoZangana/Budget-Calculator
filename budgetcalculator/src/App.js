import React, { useState } from 'react';
import './App.css';
import './Items';
import Items from './Items';
import CurrencyInput from 'react-currency-input-field';

function App() {

  const [currency, setCurrency] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  return (
    <div className="App">
      <h1>Hellow</h1>
      <form>
        <CurrencyInput
          id='price'
          placeholder='Enter a certain amount'
          decimalsLimit={2}
          defaultValue={0}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose Category</option>
          <option value="entertainment">Entertainment</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="food">Food</option>
          <option value="insurance">Insurance</option>
          <option value="healthcare">Healthcare</option>
          <option value="savings">Savings</option>
          <option value="utilities">Utilities</option>
          <option value="miscellanous">Miscellanous</option>
        </select>
        <input
          id='date'
          type="date"
          min="1000-01-01"
          max="9999-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={submitInput} >button</button>
      </form>
      <Items />
    </div>
  );
}
const submitInput = event => {
  event.preventDefault();
  alert('hello');
}

export default App;
