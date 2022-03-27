import React,{useState} from "react";
import './App.css';

function SeeCategory({getCategory}) {
    const [categoryInput, setCategoryInput] = useState("");
    const handleSubmit = e=>{
      e.preventDefault();
      getCategory(categoryInput);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <select
            required
            onChange={(e)=> setCategoryInput(e.target.value)}
          >
            <option value="" >Choose Category</option>
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
          <button id='category-button'>Get category</button>
        </form>
      </div>
    );
  }

export default SeeCategory;