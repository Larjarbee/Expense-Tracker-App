import React, { useState } from 'react';
import classes from './Form.module.css';

const ExpenseForm = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const [textIsTouched, setTextIsTouched] = useState(false);

  const enteredNumberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const enteredTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const numberBlurHandler = () => {
    setNumberIsTouched(true);
  };

  const textBlurHandler = () => {
    setTextIsTouched(true);
  };

  const numberIsValid = enteredNumber.trim() !== '';
  const textIsValid = enteredText.trim() !== '';

  const numberIsInvalid = !numberIsValid && numberIsTouched;
  const textIsInvalid = !textIsValid && textIsTouched;

  let formIsValid = false;
  if (numberIsValid && textIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    setNumberIsTouched(true);
    setTextIsTouched(true);

    if (!formIsValid) {
      return;
    }

    props.onAddToExpense(enteredNumber, enteredText);

    setEnteredNumber('');
    setEnteredText('');
    setNumberIsTouched(false);
    setTextIsTouched(false);
  };

  const numberInputClasses = `${classes.control} ${
    numberIsInvalid ? classes.invalid : ''
  }`;

  const textInputClasses = `${classes.control} ${
    textIsInvalid ? classes.invalid : ''
  }`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <h3>Expense Here</h3>
      <div className={numberInputClasses}>
        <input
          type='text'
          placeholder='Amount'
          value={enteredNumber}
          onChange={enteredNumberHandler}
          onBlur={numberBlurHandler}
        />
        {numberIsInvalid && (
          <p className={classes.red}>Field must not be empty</p>
        )}
      </div>
      <div className={textInputClasses}>
        <input
          type='text'
          placeholder='Note'
          value={enteredText}
          onChange={enteredTextHandler}
          onBlur={textBlurHandler}
        />
        {textIsInvalid && (
          <p className={classes.red}>Field must not be empty</p>
        )}
      </div>
      <button disabled={!formIsValid}>ADD</button>
    </form>
  );
};

export default ExpenseForm;
