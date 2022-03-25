import React from 'react';
import ExpenseContextProvider from './contexts/ExpenseContext';
import HeaderLogo from './components/HeaderLogo';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';
import ColumnChart from './components/ColumnChart';
import NewExpenseForm from './components/ExpenseForm';

function App() {
  return(
    <div className="App">
      <ExpenseContextProvider>
        <HeaderLogo />
        <NewExpenseForm />
        <ExpenseList />
        <Footer />
      </ExpenseContextProvider>
    </div>
  );
  
}
export default App;