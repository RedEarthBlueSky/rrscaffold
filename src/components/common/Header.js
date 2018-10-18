import React from 'react';
import '../styles/header.css';
import ToolBar from '../Toolbar';

const Header = (props) => {
  return (
    <div
      className="App-header"
    >

      <p className="P-style">
        {props.firstP}
      </p>
      <ToolBar />
    </div>
  );
};

export { Header };
