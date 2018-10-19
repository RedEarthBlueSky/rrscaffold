import React, { Component } from 'react';
import './styles/App.css';
import List from './components/List';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import { Header } from './components/common/';
import ToolBar from './components/Toolbar/Toolbar';

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

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App">
          {backDrop}
          <Header firstP="Header Title!"/>
          <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          <List />
      </div>
    );
  }
}

export default App;
