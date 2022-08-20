import React from 'react';
import Card from '../UI/Card';
import classes from './Dashboard.module.css';

const Dashboard = ({ addIncome, addExpense }) => {
  const sum = (arr) => arr.reduce((acc, curr) => acc + +curr.amount, 0);

  const totalIncome = sum(addIncome);
  const totalExpense = sum(addExpense);
  const totalAmount = totalIncome - totalExpense;

  return (
    <Card className={classes.dashboard}>
      <div className={classes.total}>
        <h3>Total Balance</h3>
        <h3>${totalAmount.toLocaleString()}</h3>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.income}>
          <h4>Income</h4>
          <h4>${totalIncome.toLocaleString()}</h4>
        </div>
        <div className={classes.expenses}>
          <h4>Expenses</h4>
          <h4>${totalExpense.toLocaleString()}</h4>
        </div>
      </div>
    </Card>
  );
};

export default Dashboard;
