import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Expenses from './components/expenses/Expenses';
import Income from './components/expenses/Income';
import ExpenseForm from './components/forms/ExpenseForm';
import IncomeForm from './components/forms/IncomeForm';
import Header from './components/header/Header';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [addExpense, setAddExpense] = useState([]);
  const [addIncome, setAddIncome] = useState([]);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const addExpenseHandler = (num, text) => {
    setAddExpense((prevExpense) => {
      return [
        ...prevExpense,
        {
          amount: num,
          title: text,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const addIncomeHandler = (num, text) => {
    setAddIncome((prevIncome) => {
      return [
        ...prevIncome,
        {
          amount: num,
          title: text,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const deleteIncomeHandler = (incomeId) => {
    setAddIncome((prevIncome) => {
      const newIncomes = [...prevIncome];
      newIncomes.splice(incomeId, 1);
      return newIncomes;
    });
  };

  const deleteExpenseHandler = (incomeId) => {
    setAddExpense((prevIncome) => {
      const newIncomes = [...prevIncome];
      newIncomes.splice(incomeId, 1);
      return newIncomes;
    });
  };

  return (
    <React.Fragment>
      <Header />
      {!showForm && <Dashboard {...{ addExpense, addIncome }} />}
      {!showForm && (
        <Income incomes={addIncome} onDeleteItem={deleteIncomeHandler} />
      )}
      {!showForm && (
        <Expenses
          onShow={showFormHandler}
          expenses={addExpense}
          onDeleteItem={deleteExpenseHandler}
        />
      )}
      {showForm && (
        <IncomeForm onHide={hideFormHandler} onAddToIncome={addIncomeHandler} />
      )}
      {showForm && <ExpenseForm onAddToExpense={addExpenseHandler} />}
    </React.Fragment>
  );
};

export default App;
