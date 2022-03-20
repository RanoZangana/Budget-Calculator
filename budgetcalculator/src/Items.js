import React from 'react';
import {useParams} from "react-router-dom"
import './App.css';
import BudgetList from './BudgetList.js'
import useFetch from './useFetch';


function Items() {
    const id = useParams();
    const { data: budget, isPending, error} = useFetch("http://localhost:8000/budget/");

    const handleClick = () => {
        fetch("http://localhost:8000/budget/" + id, {
            method:"DELETE"
        })
    }

    
    return (
        <div className="Items">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {budget && <BudgetList budgets={budget} category={budget.category} />}
            <button onClick={handleClick}>X</button>
        </div>
    );
}

export default Items;