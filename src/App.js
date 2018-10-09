import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header
            firstP="Header Title!"
          />
        </div>
        <main>
          <List />
        </main>
      </div>
    );
  }
}

export default App;
