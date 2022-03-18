import React, { useState } from 'react';
import './App.css';
import Items from './Items';
import CurrencyInput from 'react-currency-input-field';

function SearchForm() {

    const [currency, setCurrency] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [items, setItems] = useState([]);

    function addItem(currency, category, date){
        const newItems = [...items, { currency, category, date}];
        setItems(newItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const report = { currency, category, date };
        console.log(report);
        addItem( currency, category, date);
    }
    return (
        <div className="SearchForm">
            <form onSubmit={handleSubmit}>
                <input 
                type="number" 
                onChange={(e) => setCurrency(e.target.value)} 
                step="any"
                required
                ></input>
                <select
                    required
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
                <button>+</button>
            </form>
            <Items />
        </div>
    );
}
export default SearchForm;