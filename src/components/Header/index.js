import React,  { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
  color: #637bf3
`;
function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `JStack's Blog`
}

export default Header;