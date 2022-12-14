import React from 'react';
import styled from 'styled-components';

function Button({ value, backgroundColor, onClick }) {
  return (
    <BTN backgroundColor={backgroundColor} onClick={onClick}>
      {value}
    </BTN>
  );
}

export default Button;

const BTN = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.8em 2em;
  font-size: 1em;
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  cursor: pointer;
`;
