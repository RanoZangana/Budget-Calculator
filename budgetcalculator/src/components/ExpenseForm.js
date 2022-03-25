import React, { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const NewExpenseForm = () => {
    const { addExpense } = useContext(ExpenseContext);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(amount, category, date);
        setAmount('');
        setCategory('');
        setDate('');
    }

    return (
        <form id='expense-form' onSubmit={handleSubmit}>
            <input id='amount-input'type="number" placeholder="Amount" 
            value={amount} onChange={(e) => setAmount(e.target.value)} required />

            <select id='category-input'
            value={category} onChange={(e) => setCategory(e.target.value)} required >

                <option value="" disabled selected hidden>Choose Category</option>
                
                <option value="Housing">Housing</option>
                <option value="Utilities">Utilities</option>
                <option value="Food">Food</option>
                <option value="Insurance">Insurance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Savings">Savings</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>

            <input id='date-input' type="date"
                    min="1000-01-01"
                    max="9999-12-31"
                    value={date} onChange={(e) => setDate(e.target.value)} required />

            <button id='add-button'>+</button>
        </form>

        
    );
}

export default NewExpenseForm;