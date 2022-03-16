import React, { useState } from 'react';
import './App.css';
import Items from './Items';
import CurrencyInput from 'react-currency-input-field';

function SearchForm() {

    const [currency, setCurrency] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const report = {currency, category, date};
        console.log(report);
    }
    return (
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <CurrencyInput
                    id='price'
                    placeholder='Enter a certain amount'
                    required
                    decimalsScale={2}
                    defaultValue={0}
                    maxLength = {10}
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled selected>Choose Category</option>
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
                    required
                    min="1000-01-01"
                    max="9999-12-31"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button>Add Report</button>
            </form>
            <Items />
        </div>
    );
}

export default SearchForm;