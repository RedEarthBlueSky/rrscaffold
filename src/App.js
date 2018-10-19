import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop';
import { Header } from './components/common';
import ToolBar from './components/Toolbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() {
    let sideDrawer, backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop />;
    }

    return (
      <div className="App">
          {backDrop}
          <Header firstP="Header Title!"/>
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
          {sideDrawer}
          <List />
      </div>
    );
  }
}

export default App;
