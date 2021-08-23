import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button theme={props.theme} onClick={props.onTooggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onTooggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `JStack's Blog`
}

export default Header;