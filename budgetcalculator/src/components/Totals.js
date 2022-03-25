import { useContext } from "react";
import { ExpenseContext } from '../contexts/ExpenseContext';
import { ExpenseList } from '../components/ExpenseList';


/** Fungerar inte än!!! */

const Totals = () => {
  const {expenses} = useContext(ExpenseContext);
  function findTotal () {
          let a = 0;
          expenses.map(({amount}) => a = a + amount)
          return a;
  }
 return (
     <div className="Total">
        a;
     </div>
 );
}

// function findTotal (){

//   let a = 0;
//   expenses.map(({amount}) => a = a + amount)
//   return a;
// }

// const Totals = findTotal();

// console.log('Totals',Totals)

export default Totals;
