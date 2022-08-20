import React from 'react';
import classes from './Expenses.module.css';

const Income = (props) => {
  return (
    <div className={classes.expenses}>
      <h2>History</h2>
      <h3>Income</h3>
      <ul>
        {props.incomes.map((income) => (
          <div key={income.id}>
            <li>
              <h4>{income.title}</h4>
              <h4>${income.amount}</h4>
              <button onClick={props.onDeleteItem}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Income;
