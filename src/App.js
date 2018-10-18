import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header firstP="Header Title!"/>
          <Toolbar />
          <SideDrawer />
          <List />
      </div>
    );
  }
}

export default App;
