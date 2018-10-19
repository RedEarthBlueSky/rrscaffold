import React, { Component } from 'react';
import './header.css';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      firstP: props.firstP,
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
      <div
        className="App-header"
      >
        <p className="P-style">
          {this.state.firstP}
        </p>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {backDrop}
        <SideDrawer show={this.state.sideDrawerOpen}/>
      </div>
    );
  }
};

export { Header };
