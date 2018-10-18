import React from 'react';
import '../styles/header.css';

const Header = (props) => {
  return (
    <header
      className="App-header"
    >
      <p className="P-style">
        {props.firstP}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Some Link
      </a>
    </header>
  );
};

export { Header };
