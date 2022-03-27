import { useContext, useState, setState } from "react";
import { ExpenseContext } from '../contexts/ExpenseContext';
import { ExpenseList } from '../components/ExpenseList';
import React from "react";


/** Fungerar inte än!!! */

const Totals = () => {
  const { expenses } = useContext(ExpenseContext);
  const uniqueYearsList = [];

  for (let i = 0; i < expenses.length; i++) {
    let year = new Date(expenses[i].date).getFullYear();
    if (!uniqueYearsList.includes(year)) {
      uniqueYearsList.push(year);
    }
  }

  const monthsExpenses = [];
  const uniqueMonthList = [];

  const MonthList = (e) => {

    for (let i = 0; i < expenses.length; i++) {

      let year = new Date(expenses[i].date).getFullYear();

      if (year == e) {
        monthsExpenses.push(expenses[i]);
        let month = (new Date(expenses[i].date).getMonth() + 1);

        if (!uniqueMonthList.includes(month)) {
          console.log(month);
          uniqueMonthList.push(month);
        }
      }
    }
    setMonthState(uniqueMonthList);
  }

  const getInitialState = () => {
    const value = "Choose a Year";
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const [monthState, setMonthState] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    MonthList(e.target.value);
    //setMonthState(MonthList());
  };

  return (


    <div className='Totals'>
      <h3>Please select a Year and a Month you would like to view a Total of: </h3>

      <select id="select-year" value={value} onChange={handleChange}>
        <option>Choose a Year</option>
        {uniqueYearsList.map(val => <option value={val}>{val}</option>)}
      </select>

      <p>{`You selected ${value}`}</p>

      <select id="select-month" monthState ={setMonthState}>
        <option>Choose a Month</option >
        {uniqueMonthList.map(val => <option value={val}>{val}</option>)}
      </select>
      <p>{`Unique months ${monthState}`}</p>
      <h3 id='total-dates'>Total: </h3>

      {/* <select id='select-category'>

      </select> */}

    </div>

  );
}

export default Totals;


