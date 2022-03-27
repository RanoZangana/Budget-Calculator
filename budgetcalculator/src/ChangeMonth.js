import React, { useState } from 'react';
import './App.css';

function ChangeMonth({ getMonth }) {
    const [monthInput, setMonthInput] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      getMonth(monthInput);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="month" value={monthInput} onChange={(e) => setMonthInput(e.target.value)}></input>
          <button>Get month</button>
        </form>
      </div>
    );
  }
  export default ChangeMonth;