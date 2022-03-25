import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const ExpenseDetails = ({ expense }) => {
    const { removeExpense } = useContext(ExpenseContext);
    return (
        <li onClick={() => removeExpense(expense.id)}>
            <div className="amount">{ expense.amount }</div>
            <div className="category">{ expense.category }</div>
            <div className="date">{ expense.date }</div>
        </li>
    )
}
export default ExpenseDetails;