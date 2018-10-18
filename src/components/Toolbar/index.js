import React from 'react';
import './Toolbar.css';
import logo from '../common/images/logo.svg';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
  <header className='toolbar'>
    <div>This toolbar is a from scratch build!</div>
    <nav className='toolbar_navigation'>
      <div>
        <DrawerToggleButton />
      </div>
      <div className='toolbar_logo'>
        <a 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <div className='toolbar_navigatin-items'>
        <ul>
          <li><a href='/'>Main Page</a></li>
          <li><a href='/'>Lists</a>
            <ul>
              <li><a href='/'>Swift List</a></li>
              <li><a href='/'>Other Lists</a>
                <ul>
                  <li><a href='/'>This List</a></li>
                <li><a href='/'>That List</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href='/'>Page C</a></li>
          <li><a href='/'>Page D</a></li>
          <li><a href='/'>Page E</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
