import React from "react";
import "./App.css"

function BudgetList({ budgets, category }){
    
    const handleClick = () => {

    }

    return (
        <div className="budget-list">
            <h2>{category}</h2>
            {budgets.map((budget) =>(
            <div budget-preview key={budget.id}>
                <h2>{budget.category}</h2>
                <p>{budget.currency}</p>
                <p>{budget.date}</p>
                <button onClick={handleClick}></button>
            </div>
            ))}
        </div>

    )
}

export default BudgetList;