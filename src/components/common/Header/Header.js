import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstP: props.firstP,
    };
  }

  render() {
    return (
      <div
        className="App-header"
      >
        <p className="P-style">
          {this.state.firstP}
        </p>
      </div>
    );
  }
};

export { Header };
