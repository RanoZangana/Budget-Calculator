import React, {useState} from 'react';
import './App.css';
import './Items';
import Items from './Items';

function App() {

  return (
    <div className="App">
      <h1>Hellow</h1>
      <form>
        <input type="text" placeholder="Hello" />
        {/* Fylls på */}
        <select >
          <option value="nocategory">Choose Category</option>
          <option value="entertainment">Entertainment</option>
          <option value="rent">rent</option> 
        </select>
        <input type="date" />
        <button onClick={submitInput} > button</button>
      </form>
      <Items/>
    </div>
  );
}
const submitInput = event => {
  event.preventDefault();
alert('hello');
}

export default App;
