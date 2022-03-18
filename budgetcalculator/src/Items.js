import React, { useState, useEffect } from 'react';
import './App.css';
import BudgetList from './BudgetList.js'


function Items() {
    const [budget, setBudget] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/budget').then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
            setBudget(data);
        })
    }, []);
    return (
        <div className="Items">
            {budget && <BudgetList budgets={budget} category={budget.category} />}
        </div>
    );
}

export default Items;