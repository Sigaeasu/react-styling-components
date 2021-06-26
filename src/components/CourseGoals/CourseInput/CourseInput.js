import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

// NOTE rename CSS that you want to change into CSS Modules
import styles from './CourseInput.module.css';
// import './CourseInput.css';

// NOTE Styled Components
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black') };
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc') };
//     background: ${props => (props.invalid ? 'ffd7d7' : 'transparent') };
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    // NOTE remove blank space, check if there is an value or more
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // NOTE remove blank space, check if there is nothing
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* NOTE Dynamic Styled Components*/}
      {/* <FormControl invalid={!isValid}> */}

      {/* NOTE Dynamic CSS Classes*/}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}

      {/* NOTE  */}
      <div className={
        `${styles['form-control']}
        ${!isValid && styles.invalid}` 
      }>

        {/* NOTE Change text color if input is not valid - Dynamic Inline Styles*/}
        <label /* style={{color: !isValid ? 'red' : 'black'}} */>Course Goal</label>

        <input 
          type="text" 
          onChange={goalInputChangeHandler} 

          // NOTE Change text box if input is not valid - Dynamic Inline Styles
          /* style={{
            borderColor: !isValid ? 'red' : '#ccc',
            backgroundColor: !isValid ? 'salmon' : 'transparent'
          }} */

        />

      </div>

      {/* </FormControl> */}

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
