import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import ExpenseDetails from './ExpenseDetails';

const ExpenseList = () => {
     const {expenses} = useContext(ExpenseContext);
    return (
        <div className="Expense-list">
            <ul>
                { expenses.map(expense => {
                    return ( <ExpenseDetails expense={expense} key={expense.id} /> );
                })}
            </ul>
        </div>
    );
}

export default ExpenseList;