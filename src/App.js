import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import { Header } from './components/common/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="App">
          <Header firstP="Header Title!"/>
          <List />
      </div>
    );
  }
}

export default App;
