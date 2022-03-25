import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ExpenseContext = createContext();

const ExpenseContextProvider = (props) => {
    const [expenses, setExpenses] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("expenses");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const addExpense = (amount, category, date) => {
        setExpenses([...expenses, {amount, category, date, id: uuidv4() }]);
    };
    const removeExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    /*Local storage*/
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses]);

    return (
        <ExpenseContext.Provider value={{expenses, addExpense, removeExpense}}>
            { props.children }
        </ExpenseContext.Provider>
    )
}

export default ExpenseContextProvider;