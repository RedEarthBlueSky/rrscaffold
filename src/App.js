import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Toolbar />
          <List />
      </div>
    );
  }
}

export default App;
