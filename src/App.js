import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BackDrop />
          <Header firstP="Header Title!"/>
          <Toolbar />
          <SideDrawer />
          <List />
      </div>
    );
  }
}

export default App;
