import React from 'react';
import '../styles/header.css';

const Header = (props) => {
  return (
    <div
      className="App-header"
    >
      <p className="P-style">
        {props.firstP}
      </p>
    </div>
  );
};

export { Header };
