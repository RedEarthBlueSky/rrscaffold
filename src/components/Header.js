import React from 'react';
import logo from '../images/logo.svg';
import './styles/header.css';

const Header = (props) => {
  return (
    <header
      className="App-header"
    >
      <img src={logo} className="App-logo" alt="logo" />
      <p className="P-style">
        {props.firstP}
      </p>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Header;
