import React from 'react';
import ExpenseContextProvider from './contexts/ExpenseContext';
import HeaderLogo from './components/HeaderLogo';
import NewExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Totals from './components/Totals';
import BarChart from './components/BarChart';
import Footer from './components/Footer';



function App() {
  return(
    <div className="App">
      <ExpenseContextProvider>
        <HeaderLogo />
        <div className="Container1">
          <NewExpenseForm />
          <ExpenseList />
          <Totals />
        </div>
        {/* <BarChart /> */}
        <Footer />
      </ExpenseContextProvider>
    </div>
  );
  
}
export default App;