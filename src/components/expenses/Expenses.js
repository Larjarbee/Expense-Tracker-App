import React from 'react';
import classes from './Expenses.module.css';

const Expenses = (props) => {
  return (
    <div className={classes.expenses}>
      <h3>Expenses</h3>
      <ul>
        {props.expenses.map((expense) => (
          <div key={expense.id}>
            <li>
              <h4>{expense.title}</h4>{' '}
              <h4 className={classes.red}>${expense.amount}</h4>
              <button onClick={props.onDeleteItem}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
      <div className={classes.button}>
        <button onClick={props.onShow}>
          <h3>+</h3>
        </button>
      </div>
    </div>
  );
};

export default Expenses;
