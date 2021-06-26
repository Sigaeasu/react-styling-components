import React from 'react';

// NOTE rename CSS that you want to change into CSS Modules
import styles from './Button.module.css';

import styled from 'styled-components'

// NOTE Styled components
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     // NOTE use media query to change width to auto if condition met
//     @media (min-width: 768px) {
//       width:auto;
//     }  

//     &:focus {
//       outline: none;
//     }

//     &:hover,
//     &:active {
//       background: #ac0e77;
//       border-color: #ac0e77;
//       box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//     }
// `;

// import './Button.css';

const Button = props => {
  return (
    // NOTE Using CSS Modules to rename all CSS Class into unique name
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
