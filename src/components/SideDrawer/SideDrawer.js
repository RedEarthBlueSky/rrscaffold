import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
  <nav className='side_drawer'>
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
  </nav>
);

export default SideDrawer
