import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import ExpenseDetails from './ExpenseDetails';

const ExpenseList = () => {
     const { expenses } = useContext(ExpenseContext);
    return expenses.length ? (
        <div className="expense-list">
            <ul>
                { expenses.map(expense => {
                    return ( <ExpenseDetails expense={expense} key={expense.id} /> );
                })}
            </ul>
        </div>
    ) : (
        <div className="noValue">Please add new expense</div>
    )
}

export default ExpenseList;