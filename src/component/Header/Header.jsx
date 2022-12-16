import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header({ children }) {
  return (
    <Title>
      <h1>
        <Link to="/">{children}</Link>
      </h1>
      <p>TaeYoung 🤩</p>
    </Title>
  );
}
export default Header;

const Title = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6em 0 3em;

  h1 {
    font-size: 1.6em;
    font-weight: 800;
    > a {
      color: #ffc542;
    }
  }
  p {
    font-size: 1.3em;
    font-weight: 800;
  }
`;
